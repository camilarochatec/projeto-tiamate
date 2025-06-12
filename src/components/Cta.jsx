import { Link } from "react-router-dom";
import cta1 from "../assets/cta-1.png"

const Cta = ({ titulo, descricao, textoDoBotao }) => {
  return (

    <section
      className="w-full py-40 px-10 flex flex-col items-center justify-center gap-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${cta1})` }}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-white font-bold text-2xl text-center lg:text-2xl xl:text-4xl">{titulo}</h2>
        <p className="text-white text-center ont-bold text-2xl lg:text-2xl xl:text-4xl">{descricao}</p>
      </div>
      <Link to="/franquia">
        <button className="bg-[#C7794A] px-14 py-2 text-black rounded lg:px-20 xl:px-46 xl:py-4">
          {textoDoBotao}
        </button>
      </Link>

    </section>


  );
}

export default Cta;