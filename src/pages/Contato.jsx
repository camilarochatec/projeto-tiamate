import { Header } from "antd/es/layout/layout";
import Enderecos from "../components/Enderecos";
import Banner from "../components/Banner";
import NossasCafeterias from "../components/NossasCafeterias";
import FormContato from "../components/FormContato";

const Contato = () => {
    return (
        <>
            <Header />
            <NossasCafeterias />
            <Enderecos/>
            <FormContato />
        </>
    );
}

export default Contato;