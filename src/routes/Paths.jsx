import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "../pages/Inicio";
import NossoCafe from "../pages/NossoCafe";
import Header from "../components/Header";
import Noticias from "../pages/Noticias";
import Contato from "../pages/Contato";
import Cardapio from "../pages/Cardapio";
import Franquia from "../pages/Franquia";
import NotFound from "../pages/NotFound";
import Noticia from "../pages/Noticia";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Inicio />}
                    />
                    <Route 
                        path="/nosso-cafe"
                        element={<NossoCafe />}
                    />
                    <Route 
                        path="/noticias"
                        element={<Noticias />}
                    />
                    <Route 
                        path="/noticias/:id"
                        element={<Noticia />}
                    />
                    <Route 
                        path="/contato"
                        element={<Contato />}
                    />
                    <Route 
                        path="/cardapio"
                        element={<Cardapio />}
                    />
                    <Route 
                        path="/franquia"
                        element={<Franquia />}
                    />
                    <Route 
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;