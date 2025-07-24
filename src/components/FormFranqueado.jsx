import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import formImage from "../assets/Form-Image.png"
import formUserIcon from "../assets/form-icon-user.png"
import formEmailIcon from "../assets/form-icon-email.png"
import formTelIcon from "../assets/form-icon-telefone.png"
import formPinIcon from "../assets/form-icon-pin.png"
import formHouseIcon from "../assets/form-icon-house.png"
import formCoffeIcon from "../assets/form-icon-Coffe.png"

import { useCadastrarLead } from "../hooks/leadsHooks.js";

const FormFranqueado = () => {

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const { register, handleSubmit, setValue, watch } = useForm({
        defaultValues:{
            lead_estado: "UF",
            lead_cidade: "Cidade",
            lead_midia: "Como conheceu a Tiamate?",
        }
    });

    const { mutate: cadastrarLeads } = useCadastrarLead();

    const onSubmit = (data) => {
        cadastrarLeads(data)
        alert(`Obrigado ${data.lead_nome} Seu Cadastro foi enviado!`);
    };

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

    useEffect(() => {
        buscarEstados();
    }, [])


    // Função para aplicar a máscara manualmente
    const formatTelefone = (value) => {
        const cleaned = value.replace(/\D/g, ""); // remove não-números
        const limited = cleaned.slice(0, 11); // limita a 11 dígitos

        const formatted = limited
            .replace(/^(\d{2})(\d)/, "($1)$2")
            .replace(/(\d{5})(\d)/, "$1-$2");

        return formatted;
    };

    const handleTelefoneChange = (e) => {
        const raw = e.target.value;
        const masked = formatTelefone(raw);
        setValue("lead_telefone", masked);
    };


    return (
        <section id="franquia" className="bg-marrom flex flex-col-reverse lg:flex-row">
            <div className="flex-1 p-4 md:p-[40px] xl:pl-[135px] xl:pr-[70px] xl:py-[70px] flex justify-center flex-col md:mb-4 md:px-[60px] md:ml-2 xl:px-[135px]">
                <h6 className="text-caramelo mb-[6px] text-[18px] md:justify-center">Entre em contato</h6>

                <h2 className="text-creme font-bold leading-[54px] text-[36px] xl:text-[50px] mb-[19px]">
                    Abra sua Franquia
                </h2>

                <h6 className="text-caramelo mb-[19px] text-[16px]">
                    Preencha o formulário abaixo que entraremos em contato com você o
                    mais rápido possível.
                </h6>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                            <img src={formUserIcon} alt="" />
                        </div>
                        <input  {...register("lead_nome", { required: true })} type="text" placeholder="Nome e Sobrenome" className="bg-transparent flex-1 h-[60px] placeholder:text-marrom focus:outline-none" />
                    </div>

                    <div className="flex w-full bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                            <img src={formEmailIcon} alt="" />
                        </div>
                        <input  {...register("lead_email", { required: true })} type="email" placeholder="email@exemplo.com" className="bg-transparent flex-1 h-[60px] placeholder:text-marrom focus:outline-none" />
                    </div>

                    <div className="flex w-full bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                            <img src={formTelIcon} alt="" />
                        </div>
                        <input {...register("lead_telefone", { required: true })} onChange={handleTelefoneChange} type="text" placeholder="Telefone com DDD" className="bg-transparent flex-1 h-[60px] placeholder:text-marrom focus:outline-none" />
                    </div>

                    <div className="md:flex gap-[10px]">
                        <div className="flex flex-1 bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                                <img src={formPinIcon} alt="" />
                            </div>
                            <select
                                className="flex-1 h-full outline-none"
                                {...register("lead_estado", { required: true })}
                                onChange={(event) => {
                                    setValue("lead_estado", event.target.value);
                                    buscarCidades(event.target.selectedOptions[0].attributes.estadoid.value);
                                }}
                                defaultValue={"UF"}
                            >
                                <option disabled>UF</option>
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

                        <div className="flex flex-1 bg-creme rounded-md h-[60px] gap-[10px] items-center pl-[10px] mb-[10px]">
                            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-canela">
                                <img src={formHouseIcon} alt="" />
                            </div>
                            <select
                                className="flex-1 h-full outline-none"
                                {...register("lead_cidade", { required: true })}
                                onChange={(event) => setValue("lead_cidade", event.target.value)}
                                defaultValue={"Cidade"}
                            >
                                <option disabled>Cidade</option>
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
                            <img src={formCoffeIcon} alt="icone de" />
                        </div>
                        <select
                            className="flex-1 h-full outline-none"
                            {...register("lead_midia", { required: true })}
                            onChange={(event) => setValue("lead_midia", event.target.value)}
                            defaultValue={"Como conheceu a Tiamate?"}
                        >
                            <option disabled>Como conheceu a Tiamate?</option>
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

            <div className="flex-1 ">
                <img src={formImage} alt="Imagem ilustrativa" className="block w-full h-full object-cover" />
            </div>
        </section>
    );
}

export default FormFranqueado;