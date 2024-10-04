import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
function Carousel() {
  const images = [
    'carro-azul-ia.png',
    'carro-azul-2.jpg',
    'carro-formula-E-3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden ">
      <div
        className="flex w-full h-[100vh] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full max-h-full object-fit flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md z-10"
      >
        <IoIosArrowBack />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md z-10"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Carousel;
