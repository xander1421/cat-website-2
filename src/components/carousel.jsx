import { useState } from 'react';

const images = [
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
  'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80',
  'https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=360',
  'https://m.media-amazon.com/images/I/71+mDoHG4mL.png',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*',
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (

    <div className="relative flex flex-row items-center justify-center ">
      <button
        onClick={handlePreviousClick}
        className="px-4 py-2 bg-gray-300 rounded-l-md hover:bg-gray-400"
      >
        Previous
      </button>
      <img
        src={images[previousIndex]}
        alt="carousel"
        className="mx-4 w-64 h-64 object-contain"
      />
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="mx-4 w-72 h-72 z-10 object-contain hover:scale-105"
      />
      <img
        src={images[nextIndex]}
        alt="carousel"
        className="md:w-1/2 mx-4 w-64 h-64 object-contain"
      />
      <button
        onClick={handleNextClick}
        className="px-4 py-2 bg-gray-300 rounded-r-md hover:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
