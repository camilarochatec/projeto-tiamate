import { useRef } from 'react';
import Video from '../assets/VideoTiamate.mp4';
import ImgVideo from '../assets/VideoTumb.png';
import PlayButton from '../assets/PlayButton.png';

const VideoTiamate = () => {
    const videoRef = useRef(null);
    const imgRef = useRef(null);
    const playButtonRef = useRef(null);
    const linkRef = useRef(null);

    const toggleClass = (element, className) => {
        if (!element) return;
        element.classList.toggle(className);
    };

    const handlePlay = (e) => {
        e.preventDefault();

        if (videoRef.current) {
            toggleClass(videoRef.current, 'invisible');
            videoRef.current.play();
        }

        // Esconder os elementos
        [imgRef.current, playButtonRef.current, linkRef.current].forEach(el => {
            if (el) el.classList.add('hidden');
        });
    };

    return (
        <section className='flex flex-col items-center'>
            <div className='flex flex-col gap-[50px] w-[1168px] my-[100px]'>
                <h1 className='text-[50px] font-bold leading-tight text-[#A97744]'>
                    Coisas boas acontecem àqueles<br />que gostam de café
                </h1>
                <div className='flex items-center justify-center relative'>
                    <a
                        ref={linkRef}
                        href="#"
                        onClick={handlePlay}
                        className='z-20 mt-[200px] text-[18px] text-[#F5E7DA] absolute hover:text-[#CF9A5A]'
                    >
                        Assistir Vídeo
                    </a>
                    <img
                        ref={playButtonRef}
                        onClick={handlePlay}
                        className='z-20 absolute transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer'
                        src={PlayButton}
                        alt="Play"
                    />
                    <img
                        ref={imgRef}
                        className='z-10 absolute'
                        src={ImgVideo}
                        alt="Imagem de fundo do vídeo"
                    />
                    <video
                        ref={videoRef}
                        width="640"
                        height="360"
                        controls
                        className='w-full invisible'
                    >
                        <source src={Video} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoTiamate;
