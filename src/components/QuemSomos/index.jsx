import copoEmbalagem from "../QuemSomos/assets/copo_embalagem.png";
import iconCoffee from "../QuemSomos/assets/icon_coffee.png";
import setaEsquerda from "../QuemSomos/assets/seta_esquerda.png";
import setaDireita from "../QuemSomos/assets/seta_direita.png";

const QuemSomos = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 md:p-15 xl:px-33 gap-8 md:gap-20 overflow-hidden">

      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
        <p className="text-marrom text-lg">Para os amantes de café</p>
        <h3 className="text-bege text-4xl md:text-5xl font-bold mt-4">Quem Somos</h3>

        <p className="py-6 text-marrom text-base leading-tight text-center lg:text-start">
          Com um modelo de negócio sólido e rentável, a Tiamate se destaca entre as melhores oportunidades de franquia pelas 4 razões que seguem:
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-4 py-4 ">
          <img src={iconCoffee}/>
          <p className="text-base text-marrom leading-tight text-center">
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

      <div className="lg:w-1/2 flex justify-center">
        <img src={copoEmbalagem} className="w-full max-w-xl" />
      </div>
    </div>
  );
};

export default QuemSomos;
