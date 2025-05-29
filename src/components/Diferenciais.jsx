import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      className="w-full flex flex-col items-center justify-center py-10 px-4 gap-8
      xl:flex-row xl:items-start  xl:px-16"
    >
      {/* Título e ícones */}
      <div
        id="titlesAndIcons"
        className="w-full flex flex-col items-center gap-4
        lg:items-center lg:justify-start xl:items-start
        xl:w-1/4"
      >
        <h3
          className="text-[36px] font-bold text-[#a97744] text-center
          lg:text-left xl:text-[50px]"
        >
          Diferenciais da Tiamate
        </h3>

        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
          <button
            onClick={() => setImagemAtiva(infoImages[0])}
            className="inline-flex p-0 border-none bg-transparent focus:outline-none focus:ring-0"
          >
            <img
              src={images.iconeLucro}
              alt="Ícone de lucro"
              className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
          </button>

          <button
            onClick={() => setImagemAtiva(infoImages[1])}
            className="inline-flex p-0 border-none bg-transparent focus:outline-none focus:ring-0"
          >
            <img
              src={images.iconeEntrega}
              alt="Ícone de entrega"
              className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
          </button>

          <button
            onClick={() => setImagemAtiva(infoImages[5])}
            className="inline-flex p-0 border-none bg-transparent focus:outline-none focus:ring-0"
          >
            <img
              src={images.iconeQualidade}
              alt="Ícone de qualidade"
              className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
          </button>

          <button
            onClick={() => setImagemAtiva(infoImages[3])}
            className="inline-flex p-0 border-none bg-transparent focus:outline-none focus:ring-0"
          >
            <img
              src={images.iconeFranquia}
              alt="Ícone de franquia"
              className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
          </button>

          <button
            onClick={() => setImagemAtiva(infoImages[2])}
            className="inline-flex p-0 border-none bg-transparent focus:outline-none focus:ring-0"
          >
            <img
              src={images.iconeMidia}
              alt="Ícone de mídia"
              className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
          </button>

          <button
            onClick={() => setImagemAtiva(infoImages[4])}
            className="inline-flex p-0 border-none bg-transparent focus:outline-none focus:ring-0"
          >
            <img
              src={images.iconeAmor}
              alt="Ícone de equipe"
              className="duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Imagem e descrição */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 xl:w-2/3
      xl:items-start xl:gap-16">
        {/* Imagem com animação */}
        <div className="flex justify-center items-center lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.img
              key={imagemAtiva.img}
              src={imagemAtiva.img}
              alt={imagemAtiva.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-[280px] md:w-[300px] xl:w-[360px] object-contain"
            />
          </AnimatePresence>
        </div>

        {/* Texto com animação */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left lg:w-1/2 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={imagemAtiva.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4 items-center lg:items-start"
            >
              <h3 className="text-[30px] font-bold text-[#a97744] xl:text-[50px]">
                {imagemAtiva.title}
              </h3>
              <p className="text-[18px] max-w-[400px] leading-relaxed">
                {imagemAtiva.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
