import Instagram from "../components/Instagram";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import FormFranqueado from "../components/FormFranqueado";
import Sobre from "../components/Sobre";
import Valores from "../components/Valores";
import QuemSomos from "../components/QuemSomos/index.jsx";
import Cardapio from "../components/Cardapio";
import VideoTiamate from "../components/videoTiamate";
import NossasCafeterias from "../components/NossasCafeterias";
import Produtos from "../components/Produtos";
import Banner from "../components/Banner.jsx";
import Header from "../components/Header.jsx";
//Banner imports
import bannerImg from "../assets/banner_01 1.png";
import bannerImg2 from "../assets/banner_06 1.png";


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