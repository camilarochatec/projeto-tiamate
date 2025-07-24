import sobreImg from "../assets/banner2.png"
const Sobre = () => {
    return (
        <>
            <section className="flex flex-col lg:flex-row bg-cinza items-center">
                <img src={sobreImg} alt="" className="lg:w-1/2" />
                <div className="p-4 xl:pr-[135px] lg:w-1/2">
                    <h6 className="text-[18px] mb-[10px] text-marrom text-center lg:text-left">Para os amantes de café</h6>
                    <h2 className="text-[36px] xl:text-[50px] text-bege mb-[30px] font-bold leading-[40px] xl:leading-[55px] text-center lg:text-left">Bem-vindo a<br/>Tiamate Coffee</h2>
                    <p className="text-marrom">A Tiamate Coffee traduz de maneira clara e objetiva o verdadeiro sabor do café e o seu espírito inovador. Visamos fazer parte da vida das pessoas e diferentes culturas, isso é o que nos motiva a oferecer o café mais gostoso. Por isso, selecionamos as melhores plantações, os grãos, os blends e as pessoas que vão colocar a mão na massa para fazer esse delicioso café. <br /><br /> Pensamos em fazer os seus momentos mais felizes, seja no café da manhã ou em uma reunião. Individualmente ou entre amigos. À Tiamate Coffee investe em um conceito atual que transmite as pessoas uma sensação de bem estar. Enquanto nosso café aproxima as pessoas, nossos serviços de Wifi gratuito as mantém conectadas. Descubra como navegar na internet enquanto você saboreia um Tiamate.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Sobre;