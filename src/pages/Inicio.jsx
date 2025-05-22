import Instagram from "../components/Instagram";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import FormFranqueado from "../components/FormFranqueado";
import Sobre from "../components/Sobre";
import Cardapio from "../components/Cardapio";
import VideoTiamate from "../components/videoTiamate";

const Inicio = () => {
    return (
        <>
            <Cardapio />
            {/* <Sobre /> */}
            <VideoTiamate />
            <Sobre />
            {/* <Instagram />
            <Depoimentos />
            <FormFranqueado /> */}
        </>
    );
}

export default Inicio;