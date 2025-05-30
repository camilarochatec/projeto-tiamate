import bannerImg from "../assets/banner_01 1.png";
const redes = [
    { nome: "facebook", url: "https://facebook.com/tiamatecoffeefortalezacentro/", iconeimg: <box-icon type="logo" name="facebook" className="w-[24px] h-[24px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200"></box-icon> },
    { nome: "instagram", url: "https://instagram.com/tiamatefortaleza/", iconeimg: <box-icon type='logo' name='instagram' className="w-[24px] h-[24px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200"></box-icon> },
    { nome: "youtube", url: "https://youtube.com/@tiamatecoffee4949?app=desktop", iconeimg: <box-icon name='youtube' type='logo' className="w-[24px] h-[24px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200" ></box-icon> },
    { nome: "linkedin", url: "https://br.linkedin.com/company/tiamatecoffee", iconeimg: <box-icon name='linkedin' type='logo' className="w-[24px] h-[24px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200" ></box-icon> },
];

const Banner = ({ texto, imagem, redesSociais, fraseColorida, textoAdireita, corDaFrase }) => {
    return (
            <section className="relative w-full h-[450px]">
            {/* Imagem de fundo */}
            <img
                src={imagem}
                alt="Banner"
                className="absolute top-0 left-0 w-full h-full object-cover bg-center"
            />

            {/* Texto*/}
            <div className={`absolute    top-1/2 -translate-y-1/2 
                z-10 w-full lg:w-auto px-4
                ${textoAdireita ? ' right-0 lg:right-[120px]' : 'left-0 lg:left-[40px] xl:left-[120px] '}`}>

                <div className="text-white flex flex-col text-[36px] text-center lg:text-left xl:text-[40px] font-bold leading-[48px]">
                    {texto.map((paragrafo, index) => (
                        <div
                            key={index}
                            className={index === 0 && fraseColorida ? corDaFrase.color : ""}
                        >
                            {paragrafo}
                        </div>
                    ))}
                </div>


                {/* Icones*/}


                {redesSociais &&

                    <div className={`flex gap-[30px] mt-[16px] lg:justify-start justify-center`}>
                        {redes.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.nome}
                                className=" flex items-center justify-center rounded-full text-black shadow-md"
                            >

                                {item.iconeimg}

                            </a>
                        ))}

                    </div>


                }


            </div>
        </section>
    );
};

export default Banner;

