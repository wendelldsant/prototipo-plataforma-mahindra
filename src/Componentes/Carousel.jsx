import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Buttons from "./Buttons"; // Certifique-se de que o caminho do import está correto

function Carousel() {
  const images = [
    {
      src: 'carro-azul-ia.png',
      text: 'Conheça nossas funcionalidades',
      buttonData: [{ title: 'Conheça nossas funcionalidades', handle: () => alert('Funcionalidades do Carro Azul IA!') }]
    },
    {
      src: 'carro-azul-2.jpg',
      text: 'Explore o carro azul em detalhes!',
      buttonData: [{ title: 'Saiba Mais', handle: () => alert('Funcionalidades do Carro Azul 2!') }]
    },
    {
      src: 'carro-formula-E-1.png',
      text: 'Descubra o carro da Fórmula E!',
      buttonData: [{ title: 'Saiba Mais', handle: () => alert('Funcionalidades do Carro da Fórmula E!') }]
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative  h-full w-full overflow-hidden">
        <div
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative flex-shrink-0 w-full h-full">
              <img
                src={image.src}
                alt={`Slide ${index}`}
                className="w-full h-full object-fit"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center mb-5">
                <Buttons dados={image.buttonData} />
              </div>
            </div>
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
    </div>
  );
}

export default Carousel;
