import iconEndCoffee from "../Enderecos/assets/icon_endereco_coffee.png";
import iconEndTime from "../Enderecos/assets/icon_endereco_time.png";
import iconEndZap from "../Enderecos/assets/icon_endereco_zap.png";
import iconEndMap from "../Enderecos/assets/icon_endereco_map.png";
import { AXIOS } from "../../services";
import { useEffect, useState } from "react";

const Enderecos = () => {
    const [enderecos, setEnderecos] = useState();
    const [loading, setLoading] = useState(true);
    async function buscarEnderecos() {
        const request = await AXIOS.get("/enderecos")
        if (request.data) {
            setEnderecos(request.data)
        }
        setLoading(false)
    }
    useEffect(() => {
        buscarEnderecos()
    }, [])
    return (
        <div className="flex items-center justify-between flex-col p-4">
            <div className="text-center">
                <p className="text-marrom text-lg">Endereço</p>
                <h3 className="text-bege text-4xl font-bold mt-2">Vem tomar um café</h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-24 py-20 leading-tight">
                {
                    loading ? (
                        <div>Carregando</div>
                    ) : enderecos.map((endereco) => (
                        <div className="max-w-sm text-center lg:text-left ">
                            <div className="mb-2">
                                <img src={iconEndCoffee} alt="Ícone café" className="mb-2 m-auto lg:ml-0" />
                                <p className="text-bege">Unidade</p>
                                <h3 className="text-marrom text-xl font-bold">{endereco.endereco_unidade}</h3>
                            </div>
                            <div className="w-full border-t border-marrom my-6 opacity-30"></div>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <img src={iconEndMap} alt="Ícone mapa" className="h-[24px] hidden lg:block" />
                                    <p>
                                        <span className="text-bege font-bold">Endereço:</span><br />
                                        {endereco.endereco_logradouro}<br />
                                        (loja 68) <span className="text-bege font-bold">Cep:</span> {endereco.endereco_cep}</p>
                                </div>
                                <div className="flex gap-4">
                                    <img src={iconEndTime} alt="Ícone relógio" className="h-[24px] hidden lg:block" />
                                    <p>
                                        <span className="text-bege font-bold">Horário de Funcionamento:</span><br />
                                        Seg a Sex - 08h00 às 18h00<br />
                                        Sáb - 08h00 às 17h00
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <img src={iconEndZap} alt="Ícone WhatsApp" className="h-[24px] hidden lg:block" />
                                    <p>
                                        <span className="text-bege font-bold">Contato:</span> {endereco.endereco_telefone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Enderecos;
