import { House } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router";
import logo from "../images/Logo.png";
const Header = () => {
    return (
        <>
            <div  className="text-white shadow-md" style={{ backgroundColor: '#292625', height: '110px'}}>
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between flex-wrap" style={{ paddingTop: '30px' }}>
                <nav className="flex items-center space-x-6">
                    <img src={logo} alt="Logo" className="h-12 w-auto"/>
                    <NavLink to={"/"}>Inicio</NavLink>
                    <NavLink to={"/nosso-cafe"}>Nosso Café</NavLink> 
                    <NavLink to={"/noticias"}>Notícias</NavLink>
                    <NavLink to={"/contato"}>Contato</NavLink>
                    <NavLink to={"/cardapio"}>Cardápio</NavLink>
                </nav>
                <Link to="/franquia">
                    <button
                        className="text-white px-4 py-2 rounded font-semibold transition hover:opacity-90"
                        style={{ backgroundColor: "#C7794A",color: "#3b2416" }}
                    >
                     Seja um Franqueado
                    </button>
                </Link>
            </div>
            </div>
        </>
    );
}

export default Header;  