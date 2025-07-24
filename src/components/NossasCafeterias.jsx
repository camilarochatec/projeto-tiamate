import React, { useState } from 'react';
import BotaoVejaMais from "./BotaoVejaMais";
import imagem1 from "../assets/cafeterias-foto1.png"
import imagem2 from "../assets/cafeterias-foto2.png"
import imagem3 from "../assets/cafeterias-foto3.png"
import imagem4 from "../assets/cafeterias-foto4.png"
import imagem5 from "../assets/cafeterias-foto5.png"



const NossasCafeterias = () => {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [imagemAmpliada, setImagemAmpliada] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imagensCafeterias = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
  ];

  const imagensCafeterias1 = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
  ];

  const imagensCafeterias2 = [
    imagem1,
    imagem2,
    imagem3,
  ];


  const handleBolinhaHover = (indice) => {
    setIndiceAtivo(indice);
  };

  const handleImageClick = (imagemUrl) => {
    setImagemAmpliada(imagemUrl);
    setIsModalOpen(true);
  };

  const handleCloseAmpliada = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setImagemAmpliada(null);
    }, 300); // Deve ser igual ou maior que a duration-300ms do Tailwind
  };

  return (
    <section className="p-4 lg:py-[40px] xl:py-[80px] lg:px-[70px] xl:px-[135px]">
      <div className="flex flex-col gap-[30px] items-center lg:flex lg:flex-row lg:justify-between lg:align-center pb-11">
        <h1 className="text-[30px] lg:text-[50px] font-bold text-bege">Nossas Cafeterias</h1>
        <BotaoVejaMais />
      </div>

      <div>
        <div className="hidden xl:block xl:flex xl:justify-between">
          {imagensCafeterias.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={`Cafeteria ${index + 1}`}
              className={`
                hover:cursor-pointer transform transition-all duration-200
                ${index === indiceAtivo ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => handleBolinhaHover(index)}
              onClick={() => handleImageClick(imagem)}
            />
          ))}
        </div>

        <div className="hidden lg:block xl:hidden lg:flex lg:justify-between">
          {imagensCafeterias1.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={`Cafeteria ${index + 1}`}
              className={`
                hover:cursor-pointer transform transition-all duration-200
                ${index === indiceAtivo ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => handleBolinhaHover(index)}
              onClick={() => handleImageClick(imagem)}
            />
          ))}
        </div>

        <div className="hidden md:block lg:hidden xl:hidden md:flex md:justify-between">
          {imagensCafeterias2.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={`Cafeteria ${index + 1}`}
              className={`
                hover:cursor-pointer transform transition-all duration-200
                ${index === indiceAtivo ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => handleBolinhaHover(index)}
              onClick={() => handleImageClick(imagem)}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:hidden">
            <img src={imagem1} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
            <img src={imagem2} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
            <img src={imagem3} alt="" className="sm:hidden md:block hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
            <img src={imagem4} alt="" className="sm:hidden lg:block hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
            <img src={imagem5} alt="" className="hidden xl:block hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
        </div>
        
        <div className="flex justify-center gap-[15px] p-4 xl:p-12">
          {imagensCafeterias.map((_, index) => (
            <div
              key={index}
              className={`
                rounded-full bg-cinza-escuro hover:cursor-pointer transform transition-all duration-200
                w-[15px] h-[15px]
                ${index === indiceAtivo ? 'scale-125 bg-bege-escuro' : 'scale-100'}
              `}
              onMouseEnter={() => handleBolinhaHover(index)}
              onClick={() => handleImageClick(imagensCafeterias[index])}
            ></div>
          ))}
        </div>
      </div>

      {/* Modal da Imagem Ampliada */}
      {imagemAmpliada && (
        <div
          className={`
            fixed inset-0 z-50 cursor-pointer
            flex justify-center items-center
            transition-opacity duration-300 ease-in-out
            ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={handleCloseAmpliada}
        >
          {/* Fundo escuro semi-transparente que fará a transição de opacidade */}
          <div className={`
            absolute inset-0 bg-black
            transition-opacity duration-300 ease-in-out
            ${isModalOpen ? 'opacity-80' : 'opacity-0'}
          `}></div>

          {/* A imagem em si, que terá opacidade total */}
          <img
            src={imagemAmpliada}
            alt="Imagem Ampliada"
            className="w-[40%] h-[40%] object-contain z-10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
 
export default NossasCafeterias;