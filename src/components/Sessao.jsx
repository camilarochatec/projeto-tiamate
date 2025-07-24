const Sessao = ({ titulo, texto, imagem, layoutReverso }) => {
    return (
        <>
            <section className={`flex flex-col-reverse items-center gap-8 p-4 py-4 md:py-[78px] lg:flex-row lg:py-33 lg:px-18 lg:gap-[130px] ${ layoutReverso && 'lg:flex-row-reverse bg-cinza'} justify-center`}>
                <div className="w-full md:w-[600px] lg:w-[470px] lg:h-[228px]:">
                    <h2 className="text-bege text-4xl text-center lg:text-start xl:text-5xl font-bold mb-8">{titulo}</h2>
                    {
                        texto.map((paragrafo, index) => (
                            <p key={index} className="text-marrom lg:text-[14px] mb-4">{paragrafo}</p>
                        ))
                    }
                </div>
                <img src={imagem} alt="" className="w-full md:w-[600px] lg:w-[400px]" />
            </section>
        </>
    );
}

export default Sessao;