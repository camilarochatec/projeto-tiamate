import { useState } from 'react';
import { labels, lancamentos, expressos, tiamatinoCoffee, tiamatinoCream, bebidasItalianas, cappuccino, bebidasGeladas } from '../utils/index.js';

const Produtos = () => {
  const [bebidasAtuais, setBebidasAtuais] = useState(lancamentos);

  const mapaDeBebidas = {
    'Lançamentos': lancamentos,
    'Expressos': expressos,
    'Tiamatino Coffee': tiamatinoCoffee,
    'Tiamatino Cream': tiamatinoCream,
    'Bebidas Italianas': bebidasItalianas,
    'Cappuccino': cappuccino,
    'Bebidas Geladas': bebidasGeladas
  };

  return (
    <>
      <section className="h-screen flex flex-row items-start justify-baseline min-w-[420px]">
        <div className="sm:w-30 md:w-56 lg:w-60 pt-20 bg-neutral-100 min-h-screen sticky top-0 ">
          <ul className="flex flex-col gap-4 text-left hover:cursor-pointer pl-8 min-w-[160px] font-medium">
            {labels.map((item, index) => (
              <li key={index} className="hover:text-canela hover:font-extrabold flex flex-row  ">
                <hr className="h-2 text-xl w-2 mt-3 mr-2 " />
                <p className='flex-1' onClick={() => setBebidasAtuais(mapaDeBebidas[item])}>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex-1 h-full pt-28 items-center justify-center ml-18 px-2 sm:px-5 md:px-20">
            <div key={JSON.stringify(bebidasAtuais.map((b) => b.nome))} className={`gap-2 grid place-items-center place-content-center
            ${bebidasAtuais.length > 1 ? 'grid-cols-2': 'grid-cols-1' } sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-max-full
            translate-x-[-80px] animate-slide-in`}
>
              {bebidasAtuais.map((item, index) => (
                <div className="flex flex-col items-center-safe justify-center overflow-hidden pb-2 " key={index}>
                  <img src={item.imgUrl} alt={item.nome} />
                  <p className="text-center text-wrap">{item.nome}</p>
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
