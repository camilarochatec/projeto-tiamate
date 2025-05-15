import bannerImg from "../assets/banner_01 1.png";

const Banners = () => {
  const redesSociais = [
    { nome: "facebook", url: "https://facebook.com" },
    { nome: "instagram", url: "https://instagram.com" },
    { nome: "youtube", url: "https://youtube.com" },
    { nome: "linkedin", url: "https://linkedin.com" },
  ];

  return (
    <section className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[480px]">
      <img
        src={bannerImg}
        alt="Banner Tiamate"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 h-full flex items-center px-4 sm:px-10 md:px-16 max-w-5xl">
        <div>
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            <span className="text-[var(--color-mostarda)]">Um café quentinho</span><br />
            aqui na Tiamate<br />
            muda o dia.
          </h1>

          <div className="mt-4 flex gap-4 text-lg sm:text-xl text-white">
            {redesSociais.map((rede, index) => (
              <a
                key={index}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-mostarda)] transition-colors"
                aria-label={rede.nome}
              >
                <i className={`bx bxl-${rede.nome}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
