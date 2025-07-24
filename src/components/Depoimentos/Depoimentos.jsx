
import { useBuscarDepoimentos } from "../../hooks/depoimentosHooks";
import cliente1 from "./assets/cliente1.png";
import cliente2 from "./assets/cliente2.png";
import cliente3 from "./assets/cliente3.png";
import depoimento_bg from "./assets/depoimento_bg.png";
import estrela from "./assets/estrela.png";

const Depoimentos = () => {
  const { data: listaDepoimentos, isFetched: carregou } = useBuscarDepoimentos([]);

  function gerarEstrelas(qtn) {
    let items = []
    for (let i = 0; i < qtn; i++) {
        items.push(<img src={estrela} alt="estrela" />)
    }
    return items;
  }

  return (
    <section className="flex flex-col items-center gap-2 py-8 relative overflow-hidden xl:py-[130px]">
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
          className="overflow-x-auto lg:overflow-hidden scroll-smooth snap-x snap-mandatory flex gap-10 px-8 no-scrollbar mt-6 md:ml-80"
        >

          {
            carregou && listaDepoimentos.map(depoimento => (
              <div key={depoimento.depoimento_id} className="flex flex-col justify-between gap-3 py-12 px-8 rounded-[5px] bg-cinza shadow-md flex-none w-[400px] snap-center">
                <div className="flex gap-1">
                  { gerarEstrelas(depoimento.depoimento_nota) }
                </div>

                <div className="flex-1 min-h-[150px]">
                  <p className="text-marrom text-[14px]">{depoimento.depoimento_descricao}</p>
                </div>

                <div className="flex items-center gap-3">
                  <img src={depoimento.depoimento_imagem} alt="" />
                  <p className="text-vinho font-semibold">{depoimento.depoimento_nome}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
