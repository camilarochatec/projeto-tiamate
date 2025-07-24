"use client"

import { useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { Link, NavLink } from "react-router"
import logo from "../assets/logo-tiamate.png"
import logoMobile from "../assets/logo-tiamate-mobile.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="text-white bg-cafe">
        <div className="flex items-center justify-between py-7 px-4 xl:px-33">
          {/* Seção esquerda com logo e navegação */}
          <div className="hidden lg:flex">
            <img src={logo || "/placeholder.svg"} alt="Logo" />
            {/* Menu para desktop - visível apenas em telas médias e grandes */}
            <nav className="flex items-center gap-6 xl:gap-11 ml-13">
              <NavLink to={"/"}>Inicio</NavLink>
              <NavLink to={"/nosso-cafe"}>Nosso Café</NavLink>
              <NavLink to={"/noticias"}>Notícias</NavLink>
              <NavLink to={"/contato"}>Contato</NavLink>
              <NavLink to={"/cardapio"}>Cardápio</NavLink>
            </nav>
          </div>
          {/* Seção direita com botão de franquia */}
          <div className="flex justify-between w-full lg:w-auto">
            {/* Botão hamburger visível apenas em telas pequenas */}
            <div className="flex items-center lg:hidden">
              <button onClick={toggleMenu} className="text-mostarda mr-4 focus:outline-none">
                {isMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
              </button>
              <img src={logoMobile} className="h-12 w-12" />
            </div>

            {/* Botão de franquia para desktop */}
            <div className="block">
              <Link to="/franquia">
                <button
                  className="text-white h-13 w-45 lg:w-55 rounded-[5px] font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: "#C7794A", color: "#3b2416" }}
                >
                  Seja um Franqueado
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile - aparece quando o menu está aberto */}
      {isMenuOpen && (
        <div className="lg:hidden w-full px-6 py-4 bg-cafe text-white">
          <nav className="flex flex-col space-y-4">
            <NavLink to={"/"} className="h-10" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </NavLink>
            <NavLink
              to={"/nosso-cafe"}
              className="h-10"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosso Café
            </NavLink>
            <NavLink to={"/noticias"} className="h-10" onClick={() => setIsMenuOpen(false)}>
              Notícias
            </NavLink>
            <NavLink to={"/contato"} className="h-10" onClick={() => setIsMenuOpen(false)}>
              Contato
            </NavLink>
            <NavLink to={"/cardapio"} className="h-10" onClick={() => setIsMenuOpen(false)}>
              Cardápio
            </NavLink>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header
