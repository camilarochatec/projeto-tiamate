import bannerImg from "../assets/banner_01 1.png";

const Banner = () => {
  const redes = [
    { nome: "facebook", url: "https://facebook.com/tiamatecoffeefortalezacentro/" },
    { nome: "instagram", url: "https://instagram.com/tiamatefortaleza/" },
    { nome: "youtube", url: "https://youtube.com/@tiamatecoffee4949?app=desktop" },
    { nome: "linkedin", url: "https://br.linkedin.com/company/tiamatecoffee" },
  ];

  return (
    <section className="relative w-full min-h-[400px] flex items-center justify-start bg-black">
      {/* Imagem do banner */}
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-auto object-cover absolute top-0 left-0 z-0"
      />

      {/* Texto e ícones */}
      <div className="relative z-10 px-6 md:px-16 py-10 text-left text-white max-w-[600px]">
        {/* Texto */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-[color:var(--color-mostarda)]">Um café quentinho</span><br />
          aqui na <span className="text-[color:var(--color-creme)]">Tiamate</span><br />
          muda o dia.
        </h1>

        {/* Ícones sociais */}
        <div className="flex gap-5 mt-6">
          {redes.map((rede, index) => (
            <a
              key={index}
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={rede.nome}
              className="w-10 h-10 flex items-center justify-center rounded-full text-black shadow-md"
              style={{
                backgroundColor: "var(--color-caramelo)",
              }}
            >
              <i className={`bx bxl-${rede.nome} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;






