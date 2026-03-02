import devImg from '../../assets/images/userPortfolioImage.jpg';
import { FaArrowRight, FaFileUpload } from 'react-icons/fa';
import { AboutFunctionality } from '../About/about';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Banner() {
    const { handleDownloadCV } = AboutFunctionality();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

        tl.fromTo(".devImg-container", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, delay: 0.2 });
        tl.fromTo(".text-animate", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.2 }, "-=0.4");
        tl.fromTo(".btn-animate", { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.1 }, "-=0.3");
    }, []);

    return (
        <section id='home' className="min-h-screen w-full flex items-center justify-center px-4 mt-20">
            <div className="max-w-4xl w-full flex flex-col items-center text-center">
                <div className="devImg-container relative mb-8">
                    <div className="absolute -inset-2 border-2 border-dashed border-cyan-500/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-gray-300 shadow-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover rounded-full bg-white grayscale hover:grayscale-0 transition-all duration-500"
                            src={devImg}
                            alt="João - Dev"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    {/* <h2 className="text-animate text-cyan-600 font-mono font-bold tracking-[0.2em] uppercase text-sm">
                        Bem-vindo ao meu mundo
                    </h2> */}

                    <h1 className="text-animate text-5xl md:text-7xl font-black text-gray-400 tracking-tighter">
                        Olá, eu sou o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-gray-400">João</span> 🖐️
                    </h1>

                    <h3 className="text-animate text-2xl md:text-3xl font-bold text-gray-500">
                        Desenvolvedor Full Stack
                    </h3>

                    <p className="text-animate max-w-xl mx-auto text-gray-600 text-lg leading-relaxed">
                        Especialista em criar interfaces modernas e APIs robustas.
                        Transformo ideias complexas em <span className="text-cyan-600 font-medium">experiências digitais</span> memoráveis.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-5 mt-10">
                    <a href="#contact"
                        className="btn-animate no-underline group flex items-center gap-3 bg-cyan-600 text-white font-bold px-8 py-4 rounded-2xl hover:scale-125 transition-all duration-500">
                        Entre em contato
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <button
                        onClick={handleDownloadCV}
                        className="btn-animate flex items-center gap-3 border-2 border-cyan-200 text-gray-500 px-8 py-4 rounded-2xl font-bold hover:border-cyan-500 hover:text-cyan-600 transition-all duration-500 active:scale-95"
                    >
                        Download CV <FaFileUpload />
                    </button>
                </div>

                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-100/30 blur-[100px] rounded-full -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-100/50 blur-[100px] rounded-full -z-10"></div>
            </div>
        </section>
    );
}