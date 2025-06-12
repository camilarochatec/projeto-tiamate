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
            <QuemSomos />
            <VideoTiamate />
            <Modelo />
            <ModelosFranquia />
            <Cta
                titulo={"Quer lucrar com sua própria Tiamate?"}
                descricao={"Seja um franqueado!"}
                textoDoBotao={"Mais Informações"}
            />
            <Diferenciais />
            <Cta
                titulo={"Se voce procura um negocio de "}
                descricao={"Sucesso, venha para tiamate coffee!"}
                textoDoBotao={"Mais Informações"}
            />
            <FormFranqueado />

        </>
    );
}

export default Noticias;