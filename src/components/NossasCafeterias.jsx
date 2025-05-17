import BotaoVejaMais from "./BotaoVejaMais";
import imagem1 from "../assets/cafeterias-foto1.png"
import imagem2 from "../assets/cafeterias-foto2.png"
import imagem3 from "../assets/cafeterias-foto3.png"
import imagem4 from "../assets/cafeterias-foto4.png"
import imagem5 from "../assets/cafeterias-foto5.png"

const NossasCafeterias = () => {
    return ( 
        <section className="pt-[130px] px-[130px]">
            <div className="flex justify-between pb-11">
                <h1 className="text-[50px] font-bold text-bege">Nossas Cafeterias</h1>
                <BotaoVejaMais/>
            </div>
            <div>
                <div className="flex justify-between">
                    <img src={imagem1} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
                    <img src={imagem2} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
                    <img src={imagem3} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
                    <img src={imagem4} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
                    <img src={imagem5} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105" />
                </div>
                <div className="flex justify-center gap-[15px] pt-[62px] pb-[149px]">
                    <div className="rounded-full bg-cinza-escuro hover:cursor-pointer transform transition-all duration-200 hover:scale-105 w-[15px] h-[15px]"></div>
                    <div className="rounded-full bg-cinza-escuro hover:cursor-pointer transform transition-all duration-200 hover:scale-105 w-[15px] h-[15px]"></div>
                    <div className="rounded-full bg-cinza-escuro hover:cursor-pointer transform transition-all duration-200 hover:scale-105 w-[15px] h-[15px]"></div>
                    <div className="rounded-full bg-cinza-escuro hover:cursor-pointer transform transition-all duration-200 hover:scale-105 w-[15px] h-[15px]"></div>
                    <div className="rounded-full bg-cinza-escuro hover:cursor-pointer transform transition-all duration-200 hover:scale-105 w-[15px] h-[15px]"></div>
                </div>
            </div>
        </section>
     );
}
 
export default NossasCafeterias;