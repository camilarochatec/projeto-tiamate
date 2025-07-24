import logo from "../assets/logo_footer.png"
import grupo from "../assets/grupo_footer.png"

const Footer = () => {
    return (
        <>
            <footer class="bg-cafe px-4 md:px-[60px] xl:px-[135px] py-[74px]">
            <div class="flex flex-col md:flex-row items-center md:justify-between gap-[40px] border-b border-bege pb-[50px]">
                <img src={logo} alt="Logo tiamate" />
                <nav class="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-[45px]">
                <a class="text-creme hover:text-mostarda duration-200" href="/">Início</a>
                <a class="text-creme hover:text-mostarda duration-200" href="/nosso-cafe">Nosso Café</a>
                <a class="text-creme hover:text-mostarda duration-200" href="/franquia">Notícias</a>
                <a class="text-creme hover:text-mostarda duration-200" href="/contato">Contato</a>
                <a class="text-creme hover:text-mostarda duration-200" href="/cardapio">Cardápio</a>
                <a class="text-creme hover:text-mostarda duration-200" href="/franquia">Franquia</a>
                </nav>
            </div>
            <div class="flex flex-col md:flex-row gap-[40px] justify-between mt-[38px]">
                <div class="flex flex-col lg:flex-row items-center md:items-start lg:items-center gap-[34px]">
                <h6 class="text-creme text-center md:text-left">
                    Curta e <br />Compartilhe
                </h6>
                <div class="flex gap-[23px]">
                    <a href=""><box-icon class="w-[25px] h-[25px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200" type="logo" name="facebook"></box-icon></a>
                    <a href=""><box-icon class="w-[25px] h-[25px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200" type="logo" name="instagram"></box-icon></a>
                    <a href=""><box-icon class="w-[25px] h-[25px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200" type="logo" name="youtube"></box-icon></a>
                    <a href=""><box-icon class="w-[25px] h-[25px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200" type="logo" name="linkedin"></box-icon></a>
                </div>
                </div>
                <div class="flex flex-col-reverse lg:flex-row items-center md:items-end lg:items-center gap-[31px]">
                <h6 class="text-bege text-[10px]">
                    © 2021 Tiamate - Todos os Direitos Reservados
                </h6>
                <img src={grupo} alt="" />
                </div>
            </div>
            </footer>
        </>
    );
}

export default Footer;