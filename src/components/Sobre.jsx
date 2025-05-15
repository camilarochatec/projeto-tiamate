import sobreImg from "../assets/banner2.png"
const Sobre = () => {
    return (
        <>
            <section className="flex flex-col lg:flex-row bg-[#E7E1DF] w-full">
               
                <img src={sobreImg} alt="" className="lg:w-1/2 object-contain" />
                   
                <div className="flex flex-col lg:w-1/2 items-center lg:items-start justify-center p-4 md:pr-[68px] xl:pr-[135px] xl:py-[100px] text-center lg:text-left">
                    <h6 className="text-marrom text-[10px] mb-[6px] md:text-[12px] lg:text-[18px] lg:mb-[10px] leading-[100%]">Para os amantes de café</h6>
                    <h2 className="text-bege font-bold text-[16px] mb-[8px] md:text-[22px] md:mb-[12px] lg:text-[50px] lg:mb-[30px] leading-[100%]">Bem-vindo a Tiamate Coffee</h2>
                    <p className="text-marrom-preto text-[10px] mb-[30px] md:text-[12px] lg:text-[16px] leading-[120%]">A Tiamate Coffee traduz de maneira clara e objetiva o verdadeiro sabor do café e o seu espírito inovador. Visamos fazer parte da vida das pessoas e diferentes culturas, isso é o que nos motiva a oferecer o café mais gostoso. Por isso, selecionamos as melhores plantações, os grãos, os blends e as pessoas que vão colocar a mão na massa para fazer esse delicioso café. <br /><br /> Pensamos em fazer os seus momentos mais felizes, seja no café da manhã ou em uma reunião. Individualmente ou entre amigos. À Tiamate Coffee investe em um conceito atual que transmite as pessoas uma sensação de bem estar. Enquanto nosso café aproxima as pessoas, nossos serviços de Wifi gratuito as mantém conectadas. Descubra como navegar na internet enquanto você saboreia um Tiamate.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Sobre;