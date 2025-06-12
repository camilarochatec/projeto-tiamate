import Instagram from "../components/Instagram";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import FormFranqueado from "../components/FormFranqueado";
import Sobre from "../components/Sobre";
import Valores from "../components/Valores";
import Cardapio from "../components/Cardapio";
import VideoTiamate from "../components/videoTiamate";
import Banner from "../components/Banner.jsx";
//Banner imports
import bannerImg from "../assets/banner_01_1.png";
import bannerImg2 from "../assets/banner_06_1.png";


const Inicio = () => {
    return (
        <>
            <Banner
                imagem={bannerImg}
                texto={["Um café quentinho", "aqui na Tiamate", "muda o dia."]}
                redesSociais
                fraseColorida // Se a primeira frase deve ser colorida ou não
                corDaFrase={{ color: "text-mostarda" }} // Aqui conseguimos escolher a cor que vai estar na primeira frase
            // textoAdireita
            />
            <Sobre />
            <Valores />
            <VideoTiamate />
            <Banner
                imagem={bannerImg2}
                texto={["Café Autêntico", "Chegou nosso café!", "Direto da fazenda."]}
                fraseColorida // Se a primeira frase deve ser colorida ou não
                corDaFrase={{ color: "text-canela" }} // Aqui conseguimos escolher a cor que vai estar na primeira frase
            // textoAdireita
            />
            <Instagram />
            <Cardapio/>
            <FormFranqueado />
            <Depoimentos />
        </>
    );
}


export default Inicio;