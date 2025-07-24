import missao from "../assets/icon-missao.png"
import visao from "../assets/icon-visao.png"
import valores from "../assets/icon-valores.png"

const Valores = () => {
    return (
        <>

            <section id="valores" className="lg:flex mb-[80px] p-4 md:p-[60px] xl:px-[135px] xl:pt-[160px]  xl:pb-[140px] lg:gap-[60px] xl:gap-[160px] text-center lg:text-left">
                <div className="md:flex-1">
                    <div className="lg:flex lg:items-center lg:gap-4">
                        <img src={missao} alt="missao" className="px-1 m-auto lg:m-0" />
                        <h2 className=" text-bege md:text-[20px]">Missão</h2>
                    </div>
                    <p className="text-marrom-preto md:text-[12px] lg:text-[15px] leading-[150%] py-6">Fornecer soluções, produtos e serviços de  maneira clara e objetiva construindo  relacionamentos duradouros com a  comunidade, parceiros, colaboradores  e sócios, através da criação de valores.
                    </p>
                </div>

                <div className="md:flex-1">
                    <div className="lg:flex lg:items-center lg:gap-4">
                        <img src={visao} alt="visao" className=" px-1 m-auto lg:m-0" />
                        <h2 className="text-bege md:text-[20px]">Visão</h2>
                    </div>
                    <p className="text-marrom-preto md:text-[12px] lg:text-[15px] leading-[150%] py-6 ">Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira diversificada, próspera e justa. Com devoção e disciplina em todas as nossas operações de negócio.
                    </p>
                </div>

                <div className="md:flex-1">
                    <div className="lg:flex lg:items-center lg:gap-4">
                        <img src={valores} alt="valores" className=" px-1 m-auto lg:m-0" />
                        <h2 className="text-bege md:text-[20px]">Valores</h2>
                    </div>
                    <p className="text-marrom-preto md:text-[12px] lg:text-[15px] leading-[150%] py-6">Amor ao Trabalho - Organização - 
                        Disciplina - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente
                    </p>
                </div>

            </section>

        </>
    );
}

export default Valores;