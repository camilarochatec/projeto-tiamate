import sessaoImg from "../assets/cafe27.png"
import sessaoImg1 from "../assets/cafe28.png"
import sessaoImg2 from "../assets/cafe29.png"
import sessaoImg3 from "../assets/cafe30.png"

const Sessao = () => {
    return ( 
        <>
            <section className="flex flex-col">
                <div className="">
                    <h2>Colheita</h2>
                    <p>A colheita acontece quando a maioria dos frutos já estão maduros. Tudo começa com uma seleção criteriosa das sementes de café. Elas são escolhidas, plantadas e mantidas em viveiros especiais, que darão origem às mudas.<br /><br /> As plantinhas passam por diversas etapas de crecimento e quanod alcançam de quatro a seis pares de fohas em seus galhos, são levadas para os solos que abrigarão o cafezal.
                    </p>
                </div>
                
                <img src={sessaoImg} alt=""className="" />
            
            </section>
            <section className="flex flex-col">
                
                <img src={sessaoImg1} alt=""className="" />
                
                <div className="">
                    <h2>Torragem</h2>
                    <p>Este procedimento é todo controlado por operadores à distância. Quando o café alcança a temperatura de 140°C, acontecem interações entre as proteínas, gorduras e açúcares presentes nele.<br /><br />Cada café possui uma curva de torra, então, a temperatura e o tempo podem variar. Secos, os grãos descansam por três horas e perdem gás carbônico. Em seguida, estão prontos para serem pesados e armazenados.
                    </p>
                </div>
            </section>
            <section className="flex flex-col">
                <div className="">
                    <h2>Moagem</h2>
                    <p>Ela é feita através da combinação de diversos tipos de café. Esta “mistura” varia de acordo com o perfil do consumidor, podendo ser um produto gourmet, que leva toques mais suaves; do tipo forte, que é mais amargo e menos ácido; ou até mesmo aromático, que conta com sabores adicionais.<br /><br /> A mistura é preparada mecanicamente. Então, ela é encaminhada para um rolo mecânico, que quebrará os grãos, até chegar à granulometria ideal do produto. Depois da moagem, o café deve descansar por três horas para liberar mais gás carbônico.
                    </p>
                </div>
                
                <img src={sessaoImg2} alt=""className="" />
            
            </section>
            <section className="flex flex-col">
                
                <img src={sessaoImg3} alt=""className="" />
                
                <div className="">
                    <h2>Classificação</h2>
                    <p>Para que os grãos sejam armazenados, eles passam por “testes”, que os classificarão de acordo com a qualidade. Depois de moídos, os grãos são colocados em um aparelho que irá enviar raios infravermelhos ao pó de café.<br /><br /> De acordo com a luminescência refletida, o produto é classificado em números, que apontam uma variedade mais fraca ou mais forte.
                    </p>
                </div>
            </section>
        </>
    );
}
 
export default Sessao;