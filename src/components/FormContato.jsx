import { useState } from "react";
import { AXIOS } from "../services/index";
import user from "../assets/icon-user.png"
import email from "../assets/icon-email.png"
import facebook from "../assets/facebook-icon.png"
import instagram from "../assets/icon-instagram.png"
import youtube from "../assets/youtube-icon.png"
import linkedin from "../assets/linkedin-icon.png"

const FormContato = () => {

    const [nome, setNome] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dadosFormulario = {
            nome,
            email: emailInput,
            mensagem,
        };

        try {
            const response = await AXIOS.post("/api/contato", dadosFormulario);
            if (response.status === 200) {
                setNome("");
                setEmailInput("");
                setMensagem("");
                alert("Mensagem enviada com sucesso!");
            } else {
                alert("Erro ao enviar mensagem.");
            }
        } catch (error) {
            alert("Erro ao enviar mensagem.");
        }
    };

    return (
        <>
            <section className="flex flex-col gap-[17px] lg:px-[50px] lg:my-[70px] xl:px-[140px] xl:my-[70px]">

                <div className="flex flex-col items-center lg:items-start xl:items-start">
                    <h1 className="text-[47px] text-[#A97744] font-bold md:text-[70px] lg:text-[50px] xl:text-[50px]">Alguma dúvida?</h1>
                    <p className="text-[18px] text-[#3B2416] md:text-[30px] lg:text-[18px] xl:text-[18px]">Deixe sua mensagem</p>
                </div>
                <div className="flex flex-col items-center gap-[30px] p-4 lg:p-0 lg:items-start lg:flex-row lg:gap-[50px] xl:items-start xl:flex-row xl:gap-[100px]">

                    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center lg:items-start gap-[10px] md:gap-[15px] lg:gap-[10px] xl:gap-[10px]">
                        <div className="flex gap-[10px] items-center w-full h-[60px] rounded-[5px] bg-[#E7E1DF] md:w-[530px] lg:w-[500px] xl:w-[570px] border-2 border-transparent focus-within:border-[#A97744] transition-colors duration-400">
                            <div className="flex justify-center items-center h-[33px] w-[33px] rounded-full ml-[10px] bg-[#969696]">
                                <img src={user} alt="user" />
                            </div>
                            <input className="outline-none flex-1 h-[60px]" type="text" placeholder="Nome e Sobrenome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </div>
                        <div className="flex gap-[10px] items-center w-full h-[60px] rounded-[5px] bg-[#E7E1DF] md:w-[530px] lg:w-[500px] xl:w-[570px] border-2 border-transparent focus-within:border-[#A97744] transition-colors duration-400">
                            <div className="flex justify-center items-center h-[33px] w-[33px] rounded-full ml-[10px] bg-[#969696]">
                                <img src={email} alt="email" />
                            </div>
                            <input className="outline-none flex-1 h-[60px]" type="text" placeholder="email@exemplo.com" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required />
                        </div>
                        <textarea className="block bg-cinza w-full h-[220px] rounded-[5px] resize-none px-[20px] pt-[20px] outline-none md:w-[530px] lg:w-[500px] lg:h-[241px] xl:w-[570px] xl:h-[241px] border-2 border-transparent focus-within:border-[#A97744] transition-colors duration-400" name="mensagem" id="msg" placeholder="Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                        <button type="submit" className="w-full h-[60px] rounded-[5px] text-[#3B2416] font-semibold bg-[#CF9A5A] md:w-[530px] lg:w-[500px] lg:text-[16px] xl:w-[570px] xl:text-[16px] hover:bg-[#A97744] hover:text-white duration-300">Enviar</button>
                    </form>
                    <div className="flex flex-col items-center gap-[20px] lg:items-start lg:gap-[27px] xl:items-start xl:gap-[27px]">
                        <div className="flex justify-between w-[310px] md:w-[400px] lg:w-[390px] xl:w-[390px]">
                            <img className="transition-transform duration-300 hover:scale-110" src={facebook} alt="facebook" />
                            <img className="transition-transform duration-300 hover:scale-110" src={instagram} alt="instagram" />
                            <img className="transition-transform duration-300 hover:scale-110" src={youtube} alt="youtube" />
                            <img className="transition-transform duration-300 hover:scale-110" src={linkedin} alt="linkedin" />
                        </div>
                        <h1 className="text-[30px] text-[#3B2416] font-bold md:text-[40px] lg:hidden xl:hidden">Curta e Comparilhe</h1>
                        <h1 className="text-[30px] text-[#3B2416] font-bold md:text-[40px] hidden lg:block lg:text-[50px] xl:block xl:text-[50px] leading-tight">Curta e<br />Comparilhe</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FormContato;