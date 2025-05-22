import copoEmbalagem from "../QuemSomos/assets/copo_embalagem.png";
import iconCoffee from "../QuemSomos/assets/icon_coffee.png";
import setaEsquerda from "../QuemSomos/assets/seta_esquerda.png";
import setaDireita from "../QuemSomos/assets/seta_direita.png";

const QuemSomos = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 gap-8 md:gap-20 overflow-hidden">

      <div className="md:w-1/2">
        <p className="text-marrom text-lg">Para os amantes de café</p>
        <h3 className="text-bege text-4xl md:text-5xl font-bold mt-4">Quem Somos</h3>

        <p className="py-6 text-marrom text-base leading-tight">
          Com um modelo de negócio sólido e rentável, a Tiamate se destaca entre as melhores oportunidades de franquia pelas 4 razões que seguem:
        </p>

        <div className="flex items-center gap-4 py-4 ">
          <img src={iconCoffee}/>
          <p className="text-base text-marrom leading-tight">
            Universidade corporativa que auxilia na capacitação operacional e desenvolvimento de habilidades gerenciais
          </p>
        </div>

        <div className="flex gap-6 pt-10">
          <button className="rounded-full bg-white flex items-center justify-center hover:opacity-80 cursor-pointer">
            <img src={setaEsquerda}/>
          </button>
          <button className="rounded-full bg-white flex items-center justify-center hover:opacity-80 cursor-pointer">
            <img src={setaDireita}/>
          </button>
        </div>
      </div>

      <div className="md:w-1/2">
        <img src={copoEmbalagem} className="w-full max-w-xl" />
      </div>
    </div>
  );
};

export default QuemSomos;
