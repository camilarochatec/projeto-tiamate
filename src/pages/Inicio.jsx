import Instagram from "../components/Instagram";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import FormFranqueado from "../components/FormFranqueado";
import Sobre from "../components/Sobre";
import Valores from "../components/Valores";

const Inicio = () => {
    return (
        <>
            <Sobre />
            <Valores/>
            <Instagram />
            <Depoimentos />
            <FormFranqueado /> 
            
        </>
    );
}

export default Inicio;