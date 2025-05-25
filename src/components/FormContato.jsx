import user from "../assets/icon-user.png"
import email from "../assets/icon-email.png"
import facebook from "../assets/facebook-icon.png"
import instagram from "../assets/icon-instagram.png"
import youtube from "../assets/youtube-icon.png"
import linkedin from "../assets/linkedin-icon.png"

const FormContato = () => {
    return (
        <>
            <section className="flex flex-col gap-[30px] my-[30px]">
                <div className="flex flex-col items-center">

                    <h1 className="text-[47px] text-[#A97744] font-bold">Alguma dúvida?</h1>
                    <p className="text-[18px] text-[#3B2416] mb-[17px]">Deixe sua mensagem</p>

                    <form className="flex flex-col gap-[10px]">
                        <div className="flex gap-[10px] items-center w-[370px] h-[60px] rounded-[5px] bg-[#E7E1DF]">
                            <div className="flex justify-center items-center h-[33px] w-[33px] rounded-full ml-[10px] bg-[#969696]">
                                <img className="w-[18px] h-[18px]" src={user} alt="user" />
                            </div>
                            <input className="outline-none" type="text" placeholder="Nome e Sobrenome" />
                        </div>
                        <div className="flex gap-[10px] items-center w-[370px] h-[60px] rounded-[5px] bg-[#E7E1DF]">
                            <div className="flex justify-center items-center h-[33px] w-[33px] rounded-full ml-[10px] bg-[#969696]">
                                <img src={email} alt="email" />
                            </div>
                            <input className="outline-none" type="text" placeholder="email@exemplo.com" />
                        </div>

                        <textarea class="block bg-cinza w-[370px] h-[220px] rounded-[5px] resize-none pl-[20px] pt-[20px] outline-none" name="mensagem" id="msg" placeholder="Mensagem"></textarea>
                        <button className="w-[370px] h-[60px] rounded-[5px] text-[#3B2416] font-semibold bg-[#CF9A5A]" >Enviar</button>

                    </form>

                </div>
                <div className="flex flex-col items-center gap-[30px]">
                    <div className="flex justify-between w-[310px]">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={youtube} alt="youtube" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                    <h1 className="text-[30px] text-[#3B2416] font-bold">Curta e Comparilhe</h1>
                </div>
            </section>
        </>
    );
}

export default FormContato;