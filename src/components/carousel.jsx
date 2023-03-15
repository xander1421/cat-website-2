import React, { useState, useEffect } from "react";

const CarouselWithLightbox = ({ posts = [] }) => {
  const images = posts.map((post) => post.data.image);
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsMobile(window.innerWidth <= 767);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [mounted]);

  useEffect(() => {
    let timer;
    if (isMobile) {
      timer = setInterval(() => {
        setMobileIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isMobile, images]);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative w-full h-[60vh]">
      <div className="absolute left-0 bottom-0 z-20 p-4 text-xl dark:bg-gray-900 dark:bg-opacity-50">
        <h1 className="text-white mb-2 dark:text-white font-extrabold">
          Choose a cat from the list or try our Quiz!
        </h1>
        <div>
          <button className="bg-white text-black py-2 px-4 rounded mr-2">
            “Perfect match” Quiz
          </button>
          <button className="bg-white text-black py-2 px-4 rounded">
            Catalog
          </button>
        </div>
      </div>
      {isMobile ? (
        <div
          className="w-full h-full"
          onClick={() => {
            setMobileIndex((prevIndex) => (prevIndex + 1) % images.length);
          }}
        >
          <img
            src={images[mobileIndex]}
            alt=""
            className="w-full h-full object-cover cursor-pointer img-hover"
          />
        </div>
      ) : (
        <div className="carousel-container relative w-full h-full overflow-hidden">
          <div className="flex w-full h-full">
            {images.slice(0, 5).map((src, index) => (
              <div
                key={index}
                className={`relative transition-all  duration-300 flex-none h-full w-1/5 ${
                  activeIndex === index ? "w-2/5 h-full" : ""
                } ${
                  activeIndex !== null && activeIndex !== index
                    ? "w-1/6 h-full"
                    : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(index);
                }}
              >
                <div className={`w-full h-full`}>
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover cursor-pointer hover:border-red-500 hover:border-b-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselWithLightbox;
