import missao from "../assets/icon-missao.png"
import visao from "../assets/icon-visao.png"
import valores from "../assets/icon-valores.png"

const Valores = () => {
    return (
        <>
        
            <section id="valores" className="flex">

                <div>
                    <img src={missao} alt="missao" />
                    <p>Missão</p>
                    <h2>Fornecer soluções, produtos e serviços de maneira clara e objetiva construindo relacionamentos duradouros com a comunidade, parceiros, colaboradores e sócios, através da criação de valores.
                    </h2>
                </div>

                <div>
                    <img src={visao} alt="visao" />
                    <p>Visão</p>
                    <h2>Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira diversificada, próspera e justa. Com devoção e disciplina em todas as nossas operações de negócio.
                    </h2>
                </div>

                <div>
                    <img src={valores} alt="valores"  />
                    <p>Valores</p>
                    <h2>Amor ao Trabalho - Organização - Disciplina - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente
                    </h2>
                </div>
                
            </section>
         
        </>
    );
}

export default Valores;