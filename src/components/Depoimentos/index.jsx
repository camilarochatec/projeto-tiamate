import "./index.css"
import cliente1 from "./assets/cliente1.png"
import cliente2 from "./assets/cliente2.png"
import cliente3 from "./assets/cliente3.png"
import depoimento_bg from "./assets/depoimento_bg.png"
import estrela from "./assets/estrela.png"


const Depoimentos = () => {
    return (
        <section id="depoimentos"> 
          <div className="title">
            <p>Depoimentos</p>
            <h3>Tudo sobre Tiamate Coffee</h3>
          </div>

          <div className={`background relative`}>
            <img className="absolute top-0 left-0 -z-10" src={depoimento_bg} alt="" />

            <div className="depoimentosCards">
              <div className="card">
                <div className="icons flex gap-1">
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                </div>


                <div className="desciption">
                  <p className="text-marrom">
                    O café é realmente bom, e os salgados também (pedi um croissant de 4 queijos). Já havia pedido antes via iFood mas resolvi fazer uma visita enquanto andava pelo Centro, o café fica mesmo ao lado da Praça do Ferreira. Vale a pena dar uma visitada quando quiser se refrescar com um café gelado deles ou tomar um café da manhã por lá.
                  </p>
                </div>

                <div className="author">
                <img src={cliente1}/>
                  <p className="text-marrom">Kalil Sousa</p>
                </div>                
              </div>

              <div className="card">
                <div className="icons flex gap-1">
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                </div>


                <div className="desciption">
                  <p className="text-marrom">
                    O café é realmente bom, e os salgados também (pedi um croissant de 4 queijos). Já havia pedido antes via iFood mas resolvi fazer uma visita enquanto andava pelo Centro, o café fica mesmo ao lado da Praça do Ferreira. Vale a pena dar uma visitada quando quiser se refrescar com um café gelado deles ou tomar um café da manhã por lá.
                  </p>
                </div>

                <div className="author">
                <img src={cliente2}/>
                  <p className="text-marrom">Kalil Sousa</p>
                </div>                
              </div>
              <div className="card">
                <div className="icons flex gap-1">
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                  <img src={estrela}/>
                </div>


                <div className="desciption">
                  <p className="text-marrom">
                    O café é realmente bom, e os salgados também (pedi um croissant de 4 queijos). Já havia pedido antes via iFood mas resolvi fazer uma visita enquanto andava pelo Centro, o café fica mesmo ao lado da Praça do Ferreira. Vale a pena dar uma visitada quando quiser se refrescar com um café gelado deles ou tomar um café da manhã por lá.
                  </p>
                </div>

                <div className="author">
                <img src={cliente3}/>
                  <p className="text-marrom">Kalil Sousa</p>
                </div>                
              </div>

            </div>

          </div>
        </section>
     );
}
 
export default Depoimentos;