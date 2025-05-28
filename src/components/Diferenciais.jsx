import { useState } from "react";
import images from "../services/exportImages.js";

export default function Diferenciais() {
  const infoImages = [
    {
      id: 1,
      img: images.diferenciaisLucro,
      title: "Média de Lucratividade",
      text: "A Tiamate possui faturamento bruto percentual de lucro de 12% a 18%",
    },
    {
      id: 2,
      img: images.diferenciaisOperação,
      title: "Operação e Logística",
      text: "A Tiamate possui um departamento de logística que avalia cada caso e analisa a entrega oferecendo soluções para que as unidades não fiquem sem produtos.",
    },
    {
      id: 3,
      img: images.diferenciaisSoftware,
      title: "Software",
      text: "Possui um software de gestão integrada",
    },
    {
      id: 4,
      img: images.diferenciaisComercial,
      title: "Análise de Ponto Comercial",
      text: "Dedica profissionais para prospecção e análise de pontos que sejam pertinentes ao modelo de negócios.",
    },
    {
      id: 5,
      img: images.diferenciaisEquipe,
      title: "Equipe",
      text: "A Tiamate possui um departamento que auxilia na seleção e contratação da 1ª equipe",
    },
    {
      id: 6,
      img: images.diferenciaisProduto,
      title: "Desenvolvimento de Produtos",
      text: "Possui uma equipe interdisciplinar de nutricionistas e baristas que desenvolvem e se preocupam com os melhores padrões de sabor e nutrição dos produtos.",
    },
  ];

  const [imagemAtiva, setImagemAtiva] = useState(infoImages[0]);

  return (
    <section
      id="diferenciais"
      className="w-full flex flex-col items-center justify-center py-10 px-4 gap-8"
    >
      {/* Título e ícones */}
      <div
        id="titlesAndIcons"
        className="w-full flex flex-col items-center gap-4 lg:justify-between"
      >
        <h3 className="text-[36px] font-bold text-[#a97744] text-center lg:text-left">
          Diferenciais da Tiamate
        </h3>

        <div className="flex gap-4 flex-wrap items-center justify-center lg:justify-end">
          <img
            src={images.iconeLucro}
            alt="iconeLucro"
            onClick={() => setImagemAtiva(infoImages[0])}
            className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
          <img
            src={images.iconeEntrega}
            alt="iconeEntrega"
            onClick={() => setImagemAtiva(infoImages[1])}
            className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
          <img
            src={images.iconeQualidade}
            alt="iconeQualidade"
            onClick={() => setImagemAtiva(infoImages[5])}
            className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
          <img
            src={images.iconeFranquia}
            alt="iconeFranquia"
            onClick={() => setImagemAtiva(infoImages[3])}
            className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
          <img
            src={images.iconeMidia}
            alt="iconeMidia"
            onClick={() => setImagemAtiva(infoImages[2])}
            className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
          <img
            src={images.iconeAmor}
            alt="iconeAmor"
            onClick={() => setImagemAtiva(infoImages[4])}
            className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
        </div>
      </div>

      {/* Imagem central e descrição */}
      <div className="flex flex-col-reverse items-center justify-center gap-2 lg:flex-row-reverse lg:items-center lg:justify-between min-h-[320px] w-full">
        {/* Texto */}
        <div className="flex flex-col gap-4 items-center justify-center text-center lg:items-start lg:text-left lg:w-1/2 min-h-[200px] transition-all duration-300 ease-in-out">
          <h3 className="text-[30px] font-bold text-[#a97744] transition-all duration-300">
            {imagemAtiva.title}
          </h3>
          <p className="text-[18px] max-w-[400px] transition-all duration-300">
            {imagemAtiva.text}
          </p>
        </div>

        {/* Imagem */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={imagemAtiva.img}
            alt={imagemAtiva.title}
            className="w-[300px] h-auto object-contain transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}

