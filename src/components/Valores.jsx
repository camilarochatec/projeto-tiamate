import missao from "../assets/icon-missao.png"
import visao from "../assets/icon-visao.png"
import valores from "../assets/icon-valores.png"

const Valores = () => {
    return (
        <>
        
            <section id="valores" className="flex space-x-5 mb-[80px] pt-40 sm:px-[135px] gap-10">

                <div className="flex-col min-h-[135px]  gap-3 ">
                    <div className="flex flex-row ">
                    <img src={missao} alt="missao" className="px-1" />git
                    <h2 className=" text-bege py-5 px-5 md:text-[20px]">Missão</h2>
                    </div>
                    <p className="text-marrom-preto md:text-[12px] lg:text-[15px] leading-[150%] px-1 py-6">Fornecer soluções, produtos e serviços de  <br />maneira clara e objetiva construindo  <br />relacionamentos duradouros com a <br /> comunidade, parceiros, colaboradores  e <br />sócios, através da criação de valores.
                    </p>
                </div>
                                
                <div className="flex-col min-h-[135px] gap-3">
                    <div className="flex flex-row px-18">
                    <img src={visao} alt="visao" className=" px-1" />
                    <h2 className="text-bege py-6 px-5 md:text-[20px]">Visão</h2>
                    </div>
                    <p className="text-marrom-preto md:text-[12px] lg:text-[15px] leading-[150%] px-20 py-6 ">Ser referência em inovação e estimular <br />exponencialmente a nossa gestão de <br />maneira diversificada, próspera e justa. <br />Com devoção e disciplina em todas as <br />nossas operações de negócio.
                    </p>
                </div>

                <div className="flex-col min-h-[135px] gap-3">
                    <div className="flex flex-row px-18">
                    <img src={valores} alt="valores"  className=" px-1" />
                    <h2 className="text-bege py-6 px-5 md:text-[20px]">Valores</h2>
                    </div>
                    <p className="text-marrom-preto md:text-[12px] lg:text-[15px] leading-[150%] px-20 py-6">Amor ao Trabalho - Organização - <br />
                         Disciplina - Inovação - Busca Contínua <br />Pela Qualidade - Foco no Cliente
                    </p>
                </div>
                
            </section>
         
        </>
    );
}

export default Valores;

// import missao from "../assets/icon-missao.png";
// import visao from "../assets/icon-visao.png";
// import valores from "../assets/icon-valores.png";

// const Valores = () => {
//   return (
//     <section
//       id="valores"
//       className="flex flex-col lg:flex-row pt-40 px-6 sm:px-[50px] lg:px-[135px] gap-10"
//     >
//       {/* Bloco Missão */}
//       <div className="flex-1 flex flex-col items-center text-center min-h-[135px]">
//         <img src={missao} alt="missao" className="mb-4 w-[60px] h-[60px]" />
//         <h2 className="text-bege font-bold text-lg mb-2">Missão</h2>
//         <p className="text-marrom-preto text-sm md:text-[14px] lg:text-[16px] leading-[120%]">
//           Fornecer soluções, produtos e serviços de maneira clara e objetiva<br />
//           construindo relacionamentos duradouros com a comunidade, parceiros,<br />
//           colaboradores e sócios, através da criação de valores.
//         </p>
//       </div>

//       {/* Bloco Visão */}
//       <div className="flex-1 flex flex-col items-center text-center min-h-[135px]">
//         <img src={visao} alt="visao" className="mb-4 w-[60px] h-[60px]" />
//         <h2 className="text-bege font-bold text-lg mb-2">Visão</h2>
//         <p className="text-marrom-preto text-sm md:text-[14px] lg:text-[16px] leading-[120%]">
//           Ser referência em inovação e estimular exponencialmente a nossa gestão<br />
//           de maneira diversificada, próspera e justa. Com devoção e disciplina<br />
//           em todas as nossas operações de negócio.
//         </p>
//       </div>

//       {/* Bloco Valores */}
//       <div className=" flex flex-col items-center text-center min-h-[135px]">
//         <img src={valores} alt="valores" className="mb-4 w-[60px] h-[60px]" />
//         <h2 className="text-bege font-bold text-lg ">Valores</h2>
//         <p className="text-marrom-preto text-sm md:text-[14px] lg:text-[16px] leading-[120%]">
//           Amor ao Trabalho - Organização - Disciplina - Inovação -<br />
//           Busca Contínua pela Qualidade - Foco no Cliente
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Valores;