import icon from "../assets/instagram-icon.jpg"

const BotaoVejaMais = () => {
    return ( 
        <button className="flex flex-col-reverse items-center lg:flex lg:flex-row lg:justify-center lg:gap-[11px] lg:items-center hover:cursor-pointer transform transition-all duration-200 hover:scale-105 ">
            <h3 className="text-[16px] lg:text-[18px] text-[#3B2416]">Veja mais</h3>
            <img src={icon} alt="" className="bg-[#C7794A]  h-[61px] w-[62px]" />
        </button>
     );
}
 
export default BotaoVejaMais;