import user from "../assets/icon-user.png"
import email from "../assets/icon-email.png"
import facebook from "../assets/facebook-icon.png"
import instagram from "../assets/icon-instagram.png"
import youtube from "../assets/youtube-icon.png"
import linkedin from "../assets/linkedin-icon.png"

const FormContato = () => {
    return (
        <>
            <section className="flex flex-col gap-[17px] my-[30px] lg:px-[140px] lg:my-[70px]">

                <div className="flex flex-col items-center lg:items-start">

                    <h1 className="text-[47px] text-[#A97744] font-bold md:text-[70px] lg:text-[50px]">Alguma dúvida?</h1>
                    <p className="text-[18px] text-[#3B2416] md:text-[30px] lg:text-[18px]">Deixe sua mensagem</p>

                </div>

                <div className="flex flex-col items-center gap-[30px] lg:items-start lg:flex-row lg:gap-[100px]">

                    <form className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-[10px]">
                        <div className="flex gap-[10px] items-center w-[370px] h-[60px] rounded-[5px] bg-[#E7E1DF] md:w-[530px] lg:w-[570px]">
                            <div className="flex justify-center items-center h-[33px] w-[33px] rounded-full ml-[10px] bg-[#969696]">
                                <img className="w-[18px] h-[18px]" src={user} alt="user" />
                            </div>
                            <input onclick className="outline-none flex-1 h-[60px]" type="text" placeholder="Nome e Sobrenome" />
                        </div>
                        <div className="flex gap-[10px] items-center w-[370px] h-[60px] rounded-[5px] bg-[#E7E1DF] md:w-[530px] lg:w-[570px]">
                            <div className="flex justify-center items-center h-[33px] w-[33px] rounded-full ml-[10px] bg-[#969696]">
                                <img src={email} alt="email" />
                            </div>
                            <input className="outline-none flex-1 h-[60px]" type="text" placeholder="email@exemplo.com" />
                        </div>

                        <textarea class="block bg-cinza w-[370px] h-[220px] rounded-[5px] resize-none px-[20px] pt-[20px] outline-none md:w-[530px] lg:w-[570px] lg:h-[241px]" name="mensagem" id="msg" placeholder="Mensagem"></textarea>
                        <button className="w-[370px] h-[60px] rounded-[5px] text-[#3B2416] font-semibold bg-[#CF9A5A] md:w-[530px] lg:w-[570px] lg:text-[16px] hover:bg-[#3B2416] hover:text-[#b8844b] duration-200">Enviar</button>

                    </form>



                    <div className="flex flex-col items-center gap-[20px] lg:items-start lg:gap-[27px]">
                        <div className="flex justify-between w-[310px] md:w-[400px] lg:w-[390px]">
                            <img className="transition-transform duration-300 hover:scale-110" src={facebook} alt="facebook" />
                            <img className="transition-transform duration-300 hover:scale-110" src={instagram} alt="instagram" />
                            <img className="transition-transform duration-300 hover:scale-110" src={youtube} alt="youtube" />
                            <img className="transition-transform duration-300 hover:scale-110" src={linkedin} alt="linkedin" />
                        </div>
                        <h1 className="text-[30px] text-[#3B2416] font-bold md:text-[40px] lg:hidden">Curta e Comparilhe</h1>
                        <h1 className="text-[30px] text-[#3B2416] font-bold md:text-[40px] hidden lg:block lg:text-[50px] leading-tight">Curta e<br />Comparilhe</h1>
                    </div>

                </div>

            </section>
        </>
    );
}

export default FormContato;