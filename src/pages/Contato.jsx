import { Header } from "antd/es/layout/layout";
import Enderecos from "../components/Enderecos";
import Banner from "../components/Banner";
import NossasCafeterias from "../components/NossasCafeterias";
import FormContato from "../components/FormContato";
import bannerImgContato from "../assets/banner-contato.png";

const Contato = () => {
    return (
        <>
            <Banner
                imagem={bannerImgContato}
                texto={["Depois do café", "eu me expresso."]}
                redesSociais
            />
            <NossasCafeterias />
            <Enderecos />
            <FormContato />
        </>
    );
}

export default Contato;