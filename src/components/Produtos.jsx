import cafeProduto from '../assets/Produtos01.png'
import {expressos} from '../utils/index.js'
const Produtos = () => {

    return (
<>
    <section className="h-screen flex flex-row items-start justify-baseline min-w-[420px]">
        <div className="sm:w-30 md:w-56 pt-20">
            <div className="flex flex-col gap-4  text-center hover:cursor-pointer pl-8 min-w-[140px] font-medium">
            <h2 className='hover:text-canela hover:text-xl'>-- expressos</h2>
            <h2>-- expressos</h2>
            <h2>-- expressos</h2>
            <h2>-- expressos</h2>
            <h2>-- expressos</h2>
            <h2>-- expressos</h2>
            </div>
        </div>
        <div>
            <div className='flex-1 w-full h-full pt-28 px-5 items-center justify-center sm:px-10 md:px-20'>
               <div className=' gap-2 grid place-items-center place-content-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <img src={cafeProduto} alt="cafe" />
                        <p>Nome do café</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={cafeProduto} alt="cafe" />
                        <p>Nome do café</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={cafeProduto} alt="cafe" />
                        <p>Nome do café</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={cafeProduto} alt="cafe" />
                        <p>Nome do café</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={cafeProduto} alt="cafe" />
                        <p>Nome do café</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={cafeProduto} alt="cafe" />
                        <p>Nome do café</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={cafeProduto} alt="cafe" />
                        <p>Nome do café</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={cafeProduto} alt="cafe" />
                        <p>Nome do café</p>
                    </div>

               </div>
            </div>
        </div>
    </section>
</>

);}

export default Produtos