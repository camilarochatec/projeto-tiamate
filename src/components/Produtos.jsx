import cafeProduto from '../assets/Produtos01.png'
import retangulo from '../assets/retangulo.png'
import {labels, lancamentos,expressos, tiamatinoCoffee, tiamatinoCream, bebidasItalianas,cappuccino, bebidasGeladas} from '../utils/index.js'
const Produtos = () => {

    return (
<>
    <section className="h-screen flex flex-row items-start justify-baseline min-w-[420px]">
        <div className="sm:w-30 md:w-56 pt-20">
            <ul className="flex flex-col gap-4  text-left hover:cursor-pointer pl-8 min-w-[140px] font-medium">
                 {labels.map((item,index) => (
                            <li key={index} className='hover:text-canela hover:text-xl flex flex-row'>
                                
                                <hr alt="retangulo" className='h-2 text-xl w-2 mt-3 mr-2'/>
                                <p>{item}</p>
                               
                            </li>
                        ))}
            </ul>

        </div>
        <div>
            <div className='flex-1 w-full h-full pt-28 px-5 items-center justify-center sm:px-10 md:px-20'>
               <div className=' gap-2 grid place-items-center place-content-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                
                        {lancamentos.map((item,index) => (
                            
                            <div className='flex flex-col items-center justify-center overflow-hidden' key={index}>
                            <img src={item.imgUrl} alt={item.nome} className='ml-6'/>
                            <p className='text-center text-wrap'>{item.nome}</p>
                            </div>
                           
                        ))}

                        {expressos.map((item,index) => (
                            
                            <div className='flex flex-col items-center justify-center overflow-hidden' key={index}>
                            <img src={item.imgUrl} alt={item.nome} className='ml-6'/>
                            <p className='text-center text-wrap'>{item.nome}</p>
                            </div>
                           
                        ))}

                        {tiamatinoCoffee.map((item,index) => (
                            
                            <div className='flex flex-col items-center justify-center overflow-hidden' key={index}>
                            <img src={item.imgUrl} alt={item.nome} className='ml-6'/>
                            <p className='text-center text-wrap'>{item.nome}</p>
                            </div>
                           
                        ))}

                        {tiamatinoCream.map((item,index) => (
                            
                            <div className='flex flex-col items-center justify-center overflow-hidden' key={index}>
                            <img src={item.imgUrl} alt={item.nome} className='ml-6'/>
                            <p className='text-center text-wrap'>{item.nome}</p>
                            </div>
                           
                        ))}

                         {bebidasItalianas.map((item,index) => (
                            
                            <div className='flex flex-col items-center justify-center overflow-hidden' key={index}>
                            <img src={item.imgUrl} alt={item.nome} className='ml-6'/>
                            <p className='text-center text-wrap'>{item.nome}</p>
                            </div>
                           
                        ))}

                         {cappuccino.map((item,index) => (
                            
                            <div className='flex flex-col items-center justify-center overflow-hidden' key={index}>
                            <img src={item.imgUrl} alt={item.nome} className='ml-6'/>
                            <p className='text-center text-wrap'>{item.nome}</p>
                            </div>
                           
                        ))}
                         
                         {bebidasGeladas.map((item,index) => (
                            
                            <div className='flex flex-col items-center justify-center overflow-hidden' key={index}>
                            <img src={item.imgUrl} alt={item.nome} className='ml-6'/>
                            <p className='text-center text-wrap'>{item.nome}</p>
                            </div>
                           
                        ))}
                         
               </div>
            </div>
        </div>
    </section>
</>

);}

export default Produtos