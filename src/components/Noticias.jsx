import foto1 from "../assets/noticias-foto1.png"
import foto2 from "../assets/noticias-foto2.png"
import foto3 from "../assets/noticias-foto3.png"

const Noticias = () => {
    return ( 
        <>
            <section className="p-4 md:p-15 xl:px-[135px] xl:pb-[135px]">
                <div>
                    <h3 className="text-[18px] text-center lg:text-start">Fique por dentro</h3>
                    <h1 className="text-4xl text-center lg:text-start text-bege font-bold pt-[4px] pb-[30px]">Tiamate na Mídia</h1>
                </div>
                <div className="flex flex-col gap-[40px] lg:flex lg:flex-row lg:gap-[15px] xl:gap-[30px]">
                    <div className="flex flex-col items-center lg:items-start gap-[20px]">
                        <img src={foto1} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105 w-full" />
                        <h2 className="text-[24px]  font-bold text-vinho leading-6 hover:cursor-pointer transform transition-all duration-200 hover:scale-105">Cafeteria é nova tendência
                        <br /> de negócio em Salvador</h2>
                        <button className="w-full h-[50px] rounded-[5px] border-2 border-caramelo text-[16px] text-caramelo hover:cursor-pointer transform transition-all duration-200 hover:scale-105 hover:text-marrom hover:bg-caramelo">Notícia Completa</button>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-[20px]">
                        <img src={foto2} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105 w-full" />
                        <h2 className="text-[24px]  font-bold text-vinho leading-6 hover:cursor-pointer transform transition-all duration-200 hover:scale-105">Um gostinho moderno
                        <br /> no coração de Fortaleza</h2>
                        <button className="w-full h-[50px] rounded-[5px] border-2 border-caramelo text-[16px] text-caramelo hover:cursor-pointer transform transition-all duration-200 hover:scale-105 hover:text-marrom hover:bg-caramelo">Notícia Completa</button>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-[20px]">
                        <img src={foto2} alt="" className="hover:cursor-pointer transform transition-all duration-200 hover:scale-105 w-full"/>
                        <h2 className="text-[24px] font-bold text-vinho leading-6 hover:cursor-pointer transform transition-all duration-200 hover:scale-105" >Cafeteria é nova tendência
                        <br /> de negócio em Salvador</h2>
                        <button className="w-full h-[50px] rounded-[5px] border-2 border-caramelo text-[16px] text-caramelo hover:cursor-pointer transform transition-all duration-200 hover:scale-105 hover:text-marrom hover:bg-caramelo">Notícia Completa</button>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Noticias;