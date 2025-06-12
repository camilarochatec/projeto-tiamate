import Sessao from "../components/Sessao";
import sessaoImg1 from "../assets/cafe27.png"
import sessaoImg2 from "../assets/cafe28.png"
import sessaoImg3 from "../assets/cafe29.png"
import sessaoImg4 from "../assets/cafe30.png"
import FormFranqueado from "../components/FormFranqueado";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import Banner from "../components/Banner";
import Banner02 from "../assets/Banner02.png"

const NossoCafe = () => {
  return (
    <>
    <Banner
                imagem={Banner02}
                texto={["Mais que sabor,", "sentimentos!"]}
                redesSociais
                // fraseColorida // Se a primeira frase deve ser colorida ou não
                corDaFrase={{ color: "text-creme" }} // Aqui conseguimos escolher a cor que vai estar na primeira frase
            // textoAdireita
            />
      <Sessao
        titulo={"Colheita"}
        texto={[
          "A colheita acontece quando a maioria dos frutos já estão maduros. Tudo começa com uma seleção criteriosa das sementes de café. Elas são escolhidas, plantadas e mantidas em viveiros especiais, que darão origem às mudas.",
          "As plantinhas passam por diversas etapas de crecimento e quando alcançam de quatro a seis pares de fohas em seus galhos, são levadas para os solos que abrigarão o cafezal. "
        ]}
        imagem={sessaoImg1}
      />
      <Sessao
        titulo={"Torragem"}
        texto={[
          "Este procedimento é todo controlado por operadores à distância. Quando o café alcança a temperatura de 140°C, acontecem interações entre as proteínas, gorduras e açúcares presentes nele.",
          "Cada café possui uma curva de torra, então, a temperatura e o tempo podem variar. Secos, os grãos descansam por três horas e perdem gás carbônico. Em seguida, estão prontos para serem pesados e armazenados."
        ]}
        imagem={sessaoImg2}
        layoutReverso
      />
      <Sessao
        titulo={"Moagem"}
        texto={[
          "Ela é feita através da combinação de diversos tipos de café. Esta “mistura” varia de acordo com o perfil do consumidor, podendo ser um produto gourmet, que leva toques mais suaves; do tipo forte, que é mais amargo e menos ácido; ou até mesmo aromático, que conta com sabores adicionais.",
          "A mistura é preparada mecanicamente. Então, ela é encaminhada para um rolo mecânico, que quebrará os grãos, até chegar à granulometria ideal do produto. Depois da moagem, o café deve descansar por três horas para liberar mais gás carbônico."
        ]}
        imagem={sessaoImg3}
      />
      <Sessao
        titulo={"Classificação"}
        texto={[
          "Para que os grãos sejam armazenados, eles passam por “testes”, que os classificarão de acordo com a qualidade. Depois de moídos, os grãos são colocados em um aparelho que irá enviar raios infravermelhos ao pó de café.",
          "De acordo com a luminescência refletida, o produto é classificado em números, que apontam uma variedade mais fraca ou mais forte."
        ]}
        imagem={sessaoImg4}
        layoutReverso
      />
      <FormFranqueado />
      <Depoimentos />
    </>
  );
}

export default NossoCafe;