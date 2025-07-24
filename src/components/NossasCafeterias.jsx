import React, { useState } from 'react';
import BotaoVejaMais from "./BotaoVejaMais";
import { useBuscarPictures } from '../hooks/picturesHooks'; 



const NossasCafeterias = () => {
  const { data: imagensCafeterias = [] } = useBuscarPictures();

  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [imagemAmpliada, setImagemAmpliada] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    }, 300);
  };

  return (
    <section className="p-4 lg:py-[40px] xl:py-[80px] lg:px-[70px] xl:px-[135px]">
      <div className="flex flex-col gap-[30px] items-center lg:flex lg:flex-row lg:justify-between lg:align-center pb-11">
        <h1 className="text-[30px] lg:text-[50px] font-bold text-bege">Nossas Cafeterias</h1>
        <BotaoVejaMais />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {imagensCafeterias.map((img, index) => (
          <img
            key={index}
            src={img.picture_imagem}
            alt={img.picture_nome}
            className={`
              hover:cursor-pointer transform transition-all duration-200
              ${index === indiceAtivo ? 'scale-105' : 'scale-100'}
              w-[200px] h-[200px] object-cover
            `}
            onMouseEnter={() => handleBolinhaHover(index)}
            onClick={() => handleImageClick(img.picture_imagem)}
          />
        ))}
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
            onClick={() => handleImageClick(imagensCafeterias[index].picture_imagem)}
          ></div>
        ))}
      </div>

      {/* Modal */}
      {imagemAmpliada && (
        <div className={`fixed inset-0 z-50 cursor-pointer flex justify-center items-center transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleCloseAmpliada}>
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-80' : 'opacity-0'}`}></div>
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
 
