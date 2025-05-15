import foto1 from "../assets/instagram-foto1.jpg"
import foto2 from "../assets/instagram-foto2.jpg"
import foto3 from "../assets/instagram-foto3.jpg"
import foto4 from "../assets/instagram-foto4.jpg"
import foto5 from "../assets/instagram-foto5.jpg"
import foto6 from "../assets/instagram-foto6.jpg"
import BotaoVejaMais from "./BotaoVejaMais"

const Instagram = () => {
    return ( 
        <>
            <section className="">
                <div className="relative bottom-[-153px] px-[70px] xl:px-[135px] ">
                    <div className="flex flex-col gap-[30px] lg:flex lg:flex-row lg:justify-between lg:align-center ">
                        <div className="flex flex-col items-center lg:flex lg:flex-col lg:items-start">
                            <h3 className="text-[15px] lg:text-[18px] text-[#3B2416]">Para você e seus amigos</h3>
                            <h1 className="text-[30px] lg:text-[50px] text-[#A97744] font-bold">Ambiente agradável</h1>
                        </div>
                        <>
                            <BotaoVejaMais/>
                        </>
                    </div>
                    <div className="grid grid-cols-3 justify-items-center pt-[30px] lg:pt-[58px]" >
                        <img src={foto1} alt="" className="w-full " />
                        <img src={foto2} alt="" className="w-full " />
                        <img src={foto3} alt="" className="w-full " />
                        <img src={foto4} alt="" className="w-full " />
                        <img src={foto5} alt="" className="w-full " />
                        <img src={foto6} alt="" className="w-full " />
                    </div>
                </div>
                <div className="w-full sm:h-[153px] bg-[#E7E1DF] -z-10">
                </div>
            </section>
            
        </>
     );
}
 
export default Instagram;