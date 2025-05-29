import bannerImg from "../assets/banner_01 1.png";
const redes = [
    { nome: "facebook", url: "https://facebook.com/tiamatecoffeefortalezacentro/", iconeimg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(224, 28, 28);transform: ;msFilter:;"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg> },
    { nome: "instagram", url: "https://instagram.com/tiamatefortaleza/", iconeimg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg> },
    { nome: "youtube", url: "https://youtube.com/@tiamatecoffee4949?app=desktop", iconeimg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg> },
    { nome: "linkedin", url: "https://br.linkedin.com/company/tiamatecoffee", iconeimg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg> },
];

const Banner = () => {
    return (
        <section className="relative w-full h-[450px]">
            {/* Imagem de fundo */}
            <img
                src={bannerImg}
                alt="Banner"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Texto e ícones */}
            <div className="absolute left-0 lg:left-[60px] xl:left-[135px] top-1/2 -translate-y-1/2 z-10 w-full lg:w-auto px-4">
                <div className="text-white text-[36px] text-center lg:text-left xl:text-[40px] font-bold leading-[45px]">
                    <div className="text-mostarda">Um café quentinho</div>
                    aqui na Tiamate muda o dia.
                </div>

                <div className="flex gap-[30px] mt-[16px] justify-center lg:justify-start">
                    {redes.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.nome}
                            className="w-10 h-10 flex items-center justify-center rounded-full text-black shadow-md"
                        >
                            <box-icon name="rocket" className="fill-vinho hover:fill-creme"></box-icon>
                        </a>
                    ))}
                </div>
                    

            </div>
        </section>
    );
};

export default Banner;

