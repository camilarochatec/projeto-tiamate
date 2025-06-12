import Banner from "../components/Banner";
import bannerImg from "../assets/banner_01 1.png";
import QuemSomos from "../components/QuemSomos";
import VideoTiamate from "../components/videoTiamate";
import FormFranqueado from "../components/FormFranqueado";
import Modelo from "../components/Modelo";
import ModelosFranquia from "../components/ModelosFranquia";
import Diferenciais from "../components/Diferenciais";


const Noticias = () => {
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
            <QuemSomos/>
            <VideoTiamate/>
            <Modelo/>
            <ModelosFranquia/>
            <Diferenciais/>
            <FormFranqueado/>

        </>
    );
}

export default Noticias;