import Banner from "../components/Banner";
import bannerImg from "../assets/Banner_03.jpg";
import FormFranqueado from "../components/FormFranqueado";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import Produtos from "../components/Produtos";
const Cardapio = () => {
    return (
        <>
            <Banner
                imagem={bannerImg}
                texto={["O verdadeiro", "sabor do Café."]}
                redesSociais
                corDaFrase={{ color: "text-mostarda" }}
            />
            <Produtos />
            <FormFranqueado />
            <Depoimentos />

        </>
    );
}

export default Cardapio;