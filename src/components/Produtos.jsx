import { useState } from 'react';
import { labels, lancamentos, expressos, tiamatinoCoffee, tiamatinoCream, bebidasItalianas, cappuccino, bebidasGeladas } from '../utils/index.js';

const Produtos = () => {
  const [bebidasAtuais, setBebidasAtuais] = useState(lancamentos);
  const [activeLabel, setActiveLabel] = useState('Lançamentos'); 

  const mapaDeBebidas = {
    'Lançamentos': lancamentos,
    'Expressos': expressos,
    'Tiamatino Coffee': tiamatinoCoffee,
    'Tiamatino Cream': tiamatinoCream,
    'Bebidas Italianas': bebidasItalianas,
    'Cappuccino': cappuccino,
    'Bebidas Geladas': bebidasGeladas
  };

   const handleLabelClick = (item) => {
    setBebidasAtuais(mapaDeBebidas[item]);
    // Atualiza o label ativo
    setActiveLabel(item); 
  };
console.log("renderizou")
  return (
    <>
      <section className="h-screen flex flex-row items-start justify-baseline min-w-[430px]">
        <div className="sm:w-30 md:w-56 lg:w-60 pt-20 text-sm font-medium  pr-5 whitespace-nowrap  min-h-screen sm:pl-5 md:pl-10 lg:pl-20 top-0 ">
          <ul className="flex flex-col gap-4 text-left hover:cursor-pointer pl-8  min-w-[160px] ">
            {labels.map((item, index) => (
              <li key={index} className="hover:text-canela  hover:font-extrabold flex flex-row  ">
                <hr className="h-2 text-xl w-2 mt-3 mr-2" />
                <p  className={`flex-1 text-sm ${activeLabel === item ? 'text-canela font-bold' : ''}`} onClick={() => handleLabelClick(item)}>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex-1 h-full pt-28 items-center justify-center ml-18 px-2 sm:px-5 md:px-20">
            <div key={JSON.stringify(bebidasAtuais.map((b) => b.nome))} className={`gap-2 grid place-items-center place-content-center 
            ${bebidasAtuais.length < 5 ? 'grid-cols-1' : 'grid-cols-2'}  md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-max-full
            translate-x-[-80px] `}
            >
              {bebidasAtuais.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center overflow-hidden pb-2 opacity-0 animate-slide-in"
                  style={{
                    animationDelay: `${index * 0.9}s`,
                    '--from-x': `${-200 + index + 50}px`, // Cada próximo item começa mais próximo do destino
                  }}
                >
                  <img src={item.imgUrl} alt={item.nome}/>
                  <p className="text-center text-[10px] md:text-[14px] text-wrap ">{item.nome}</p>
                </div>
              ))}


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Produtos;
