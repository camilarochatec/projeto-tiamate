import Banner from "../components/Banner";
import bannerImg from "../assets/banner-noticias.png";
import QuemSomos from "../components/QuemSomos";
import VideoTiamate from "../components/videoTiamate";
import FormFranqueado from "../components/FormFranqueado";
import Modelo from "../components/Modelo";
import ModelosFranquia from "../components/ModelosFranquia";
import Diferenciais from "../components/Diferenciais";
import Cta from "../components/Cta";
import cta1 from "../assets/cta-1.png"
import cta2 from "../assets/cta-2.png"
import Depoimentos from "../components/Depoimentos/Depoimentos";
import Posts from "../components/Noticias";


const Noticias = () => {
    return (
        <>
            <Banner
                imagem={bannerImg}
                texto={["Abra sua Franquia", "Tiamate Coffee"]}
                redesSociais
                textoAdireita
            />
            <QuemSomos />
            <VideoTiamate />
            <Modelo />
            <ModelosFranquia />
            <Cta
                titulo={"Quer lucrar com sua própria Tiamate?"}
                descricao={"Seja um franqueado!"}
                textoDoBotao={"Mais Informações"}
                imagem={cta1}
            />
            <Diferenciais />
            <Cta
                titulo={"Se voce procura um negocio de "}
                descricao={"Sucesso, venha para tiamate coffee!"}
                textoDoBotao={"Mais Informações"}
                imagem={cta2}
            />
            <Depoimentos/>
            <Posts />
            <FormFranqueado />

        </>
    );
}

export default Noticias;