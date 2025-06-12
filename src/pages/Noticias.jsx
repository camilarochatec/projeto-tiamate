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
                texto={["Abra sua Franquia", "Tiamate Coffee"]}
                redesSociais
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