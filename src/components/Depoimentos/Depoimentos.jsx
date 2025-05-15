
import cliente1 from "./assets/cliente1.png";
import cliente2 from "./assets/cliente2.png";
import cliente3 from "./assets/cliente3.png";
import depoimento_bg from "./assets/depoimento_bg.png";
import estrela from "./assets/estrela.png";

const Depoimentos = () => {
  return (
    <section className="flex flex-col items-center gap-2 py-16 relative overflow-hidden">
      <div className="flex flex-col items-center">
        <p className="text-cafe text-[18px]">Depoimentos</p>
        <h3 className="text-bege text-4xl md:text-5xl font-bold text-center mt-3">
          Tudo sobre Tiamate Coffee
        </h3>
      </div>

      <div className="w-full relative mt-8">
        <img
          src={depoimento_bg}
          alt="fundo depoimento"
          className="absolute top-0 left-0 -z-10 max-w-none"
        />

        <div
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-10 px-8 no-scrollbar mt-6 md:ml-80"
        >

          <div className="flex flex-col justify-between gap-3 py-12 px-8 rounded-[5px] bg-cinza shadow-md flex-none w-[400px] snap-center">
            <div className="flex gap-1">
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
            </div>

            <div className="flex-1 min-h-[150px]">
              <p className="text-marrom text-[14px]">
                O café é realmente bom, e os salgados também (pedi um croissant de 4 queijos). Já havia pedido antes via iFood mas resolvi fazer uma visita enquanto andava pelo Centro, o café fica mesmo ao lado da Praça do Ferreira. Vale a pena dar uma visitada quando quiser se refrescar com um café gelado deles ou tomar um café da manhã por lá.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img src={cliente1} alt="" />
              <p className="text-vinho font-semibold">Kalil Sousa</p>
            </div>
          </div>


          <div className="flex flex-col justify-between gap-3 py-12 px-8 rounded-[5px] bg-cinza shadow-md flex-none w-[400px] snap-center">
            <div className="flex gap-1">
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
            </div>
            <div className="flex-1 min-h-[150px]">
              <p className="text-marrom text-[14px]">
                Excelente café no Centro da cidade. Vale a pena uma passada para quem estiver passando pela região.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={cliente2} alt="" />
              <p className="text-vinho font-semibold">Kalil Sousa</p>
            </div>
          </div>


          <div className="flex flex-col justify-between gap-3 py-12 px-8 rounded-[5px] bg-cinza shadow-md flex-none w-[400px] snap-center">
            <div className="flex gap-1">
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
              <img src={estrela} alt="estrela" />
            </div>

            <div className="flex-1 min-h-[150px]">
              <p className="text-marrom text-[14px]">
                Ótimo lugar para descansar, café, cappuccino, mate, fica um refúgio de descanso em meio ao centro de Fortal City rs
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img src={cliente3} alt="" />
              <p className="text-vinho font-semibold">Kalil Sousa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
