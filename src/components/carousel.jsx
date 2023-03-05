import { useState } from 'react';

const images = [
  'https://source.unsplash.com/random/800x400',
  'https://source.unsplash.com/random/800x401',
  'https://source.unsplash.com/random/800x402',
  'https://source.unsplash.com/random/800x403',
  'https://source.unsplash.com/random/800x404',
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const containerStyles = "flex flex-row items-center justify-center";

  const buttonStyles = "h-100 w-100 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer";

  const imageContainerStyles = "h-80 flex-shrink-0 transition-transform duration-500";

  const activeImageContainerStyles = "transform translate-x-0";

  const inactiveImageContainerStyles = " transform translate-x-full";

  const imageStyles = "w-full h-full object-cover";

  return (
    <div className={containerStyles}>
      <div className={`${buttonStyles} mr-4`} onClick={handlePrevClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-current text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="w-96 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${imageContainerStyles} ${index === activeIndex ? activeImageContainerStyles : inactiveImageContainerStyles}`}
            style={{ width: `${100 / images.length}%`, transform: `translateX(-${activeIndex * (100 / images.length)}%)` }}
          >
            <img className={imageStyles} src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <div className={buttonStyles} onClick={handleNextClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-current text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
