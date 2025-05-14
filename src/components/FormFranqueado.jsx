import { useEffect } from "react"
import coffee from "../assets/icon-coffee.png"
import email from "../assets/icon-email.png"
import home from "../assets/icon-home.png"
import phone from "../assets/icon-phone.png"
import pin from "../assets/icon-pin.png"
import user from "../assets/icon-user.png"
import { useState } from "react"
import { useForm } from "react-hook-form"
import formImage from "../assets/Form-Image.png"

const FormFranqueado = () => {

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const { register, handleSubmit, setValue,formState:{errors} } = useForm();


    async function buscarEstados() {
        const request = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
        const response = await request.json();
        if (response) {
            setEstados(response);
        }
    }
    
    async function buscarCidades(estadoid) {
        const request = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoid}/municipios?orderBy=nome`);
        const response = await request.json();
        if (response) {
            setCidades(response);
        }
    }

    function cadastrarLead(dados) {
        console.log(dados,{errors});
    }

    useEffect(() => {
        buscarEstados();
    }, [])


    return (
        <section id="franquia" className="bg-marrom flex flex-col lg:flex-row">
            <div className="flex-1 p-4 xl:pl-[135px] xl:pr-[70px] flex justify-center flex-col md:mb-4 md:px-[60px] md:ml-2 xl:px-[135px]">
                <h6 className="text-caramelo mb-[6px] text-[18px] md:justify-center">Entre em contato</h6>

                <h2 className="text-creme font-bold w-[440px] leading-[54px] text-[36px] xl:text-[50px] mb-[19px]">
                    Abra sua Franquia
                </h2>

                <h6 className="text-caramelo mb-[19px] text-[16px]">
                    Preencha o formulário abaixo que entraremos em contato com você o
                    mais rápido possível.
                </h6>

                <form action="#">
                    <div className="flex w-full bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                            <img src="#" alt=""/>
                        </div>
                        <input type="text" placeholder="Nome e Sobrenome" className="bg-transparent flex-1 h-[60px] placeholder:text-marrom focus:outline-none"/>
                    </div>

                    <div className="flex w-full bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                            <img src="#" alt=""/>
                        </div>
                        <input type="email" placeholder="email@exemplo.com" className="bg-transparent flex-1 h-[60px] placeholder:text-marrom focus:outline-none"/>
                    </div>

                    <div className="flex w-full bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                            <img src="#g" alt=""/>
                        </div>
                        <input type="text" placeholder="Telefone com DDD" className="bg-transparent flex-1 h-[60px] placeholder:text-marrom focus:outline-none"/>
                    </div>

                    <div className="flex gap-[10px]">
                        <div className="flex w-full bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                                <img src="#" alt=""/>
                            </div>
                            <select
                                className="w-full h-full"
                                {...register("estado", { required: true })}
                                onChange={(event) => {
                                setValue("estado", event.target.value);
                                buscarCidades(event.target.selectedOptions[0].attributes.estadoid.value);
                                }}
                                >
                                <option disabled selected>UF</option>
                                {
                                estados.map(estado => (
                                <option
                                key={`estado-${estado.id}`}
                                value={estado.nome}
                                estadoid={estado.id}
                                >
                                {estado.nome}
                                </option>
                                ))
                                }
                            </select>
                        </div>

                        <div className="flex w-full bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                                <img src="#" alt=""/>
                            </div>
                            <select
                                className="w-full h-full"
                                {...register("cidade", { required: true })}
                                onChange={(event) => setValue("cidade", event.target.value)}
                                >
                                <option disabled selected>Cidade</option>
                                {
                                cidades.map(cidade => (
                                <option
                                key={`cidade-${cidade.id}`}
                                value={cidade.nome}
                                >
                                {cidade.nome}
                                </option>
                                ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex w-full bg-creme rounded-md h-[60px] pl-[10px] mb-[10px]   gap-[10px] items-center ">
                        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                            <img src="#" alt=""/>
                        </div>
                        <select
                        className="w-full h-full"
                            {...register("midia", { required: true })}
                            onChange={(event) => setValue("midia", event.target.value)}
                            >
                            <option disabled selected>Como conheceu a Tiamate?</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">Linkdin</option>
                            <option value="tv">TV</option>
                        </select>
                    </div>
                    <button 
                    className="text-marrom bg-canela w-full leading-[60px] inline-block 
                    rounded-md text-center font-semibold 
                    hover:bg-creme hover:text-vinho hover:cursor-pointer 
                    duration-200">Enviar
                        Cadastro
                    </button>
                </form>

            </div>

            <div className="lg:flex-1">
                <img src={formImage} alt="Imagem ilustrativa" className="hidden lg:block w-full h-full object-cover"/>
            </div>                                                       
        </section>
        
    );
}

export default FormFranqueado;