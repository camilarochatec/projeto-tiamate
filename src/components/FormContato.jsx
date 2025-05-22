import user from "../assets/icon-user.png"
import email from "../assets/icon-email.png"
import facebook from "../assets/facebook-icon.png"
import instagram from "../assets/instagram-icon.jpg"
import youtube from "../assets/youtube-icon.png"
import linkedin from "../assets/linkedin-icon.png"

const FormContato = () => {
    return (
        <>
            <section>
                <div>
                    
                </div>
                <div>
                    <h1 className="text-[50px] text-[#A97744] font-bold">Alguma dúvida?</h1>
                    <p className="text-[18px] text-[#3B2416]">Deixe sua mensagem</p>
                    <form>
                        <div className="flex items-center w-[370px] h-[60px] bg-[#E7E1DF]">
                            <img className="w-[25px] h-[24px]" src={user} alt="user" />
                            <input type="text" placeholder="Nome e Sobrenome" />
                        </div>
                        <div>
                            <img src={email} alt="email" />
                            <input type="text" placeholder="email@exemplo.com" />
                        </div>
                        <input type="text" placeholder="Mensagem" />
                        <button>Enviar</button>
                    </form>
                </div>
                <div>
                    <div>
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={youtube} alt="youtube" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                    <h1>Curta e<br />Comparilhe</h1>
                </div>
            </section>
        </>
    );
}

export default FormContato;