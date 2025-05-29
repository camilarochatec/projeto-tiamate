import { useEffect, useState } from 'react';
import tiamate1 from '../images/tiamate1.png';
import tiamate2 from '../images/tiamate2.png';

const Modelo = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se a tela é menor que 768px (mobile)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // checa ao carregar
    window.addEventListener('resize', handleResize); // escuta mudança de tamanho

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    // 📱 Layout MOBILE
    <div className="flex flex-col items-center bg-[#f0e9e4] py-10 px-4 text-center">
      <div className="mb-6" style={{ margin: '0 -20px' }}>
        <p className="text-sm text-[#5a4230] mb-2">
          A Tiamate oferece 2 modelos <br /> de franquia personalizados.
        </p>
        <h2 className="text-4xl font-bold text-[#a46d3a] font-archivo leading-tight">
          Escolha a Tiamate <br /> ideal para você
        </h2>
      </div>

      <div className="flex flex-row items-center gap-4">
        <img src={tiamate1} alt="Tiamate Coffee" className="max-w-[140px] rounded" />
        <img src={tiamate2} alt="Tiamate Coffee To Go" className="max-w-[140px] rounded" />
      </div>
    </div>
  ) : (
    // 💻 Layout DESKTOP/NOTEBOOK
    <div className="flex flex-row justify-center items-center bg-[#f0e9e4] py-16 px-4 text-center">
      <div className="w-36 md:w-1/5 flex justify-center" style={{ marginRight: '-30px' }}>
        <img src={tiamate1} alt="Tiamate Coffee" className="max-w-full rounded" />
      </div>

      <div className="md:w-1/2" style={{ marginLeft: '-20px', marginRight: '-20px' }}>
        <p className="text-sm text-[#5a4230] mb-2">
          A Tiamate oferece 2 modelos <br /> de franquia personalizados.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#a46d3a] font-archivo leading-tight">
          Escolha a Tiamate <br /> ideal para você
        </h2>
      </div>

      <div className="w-36 md:w-1/5 flex justify-center" style={{ marginLeft: '-30px' }}>
        <img src={tiamate2} alt="Tiamate Coffee To Go" className="max-w-full rounded" />
      </div>
    </div>
  );
};

export default Modelo;
