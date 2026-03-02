import { FaBriefcase, FaCode, FaUserGraduate } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Formation() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#formation',
                start: 'top 80%',
                once: true,
            }
        });

        tl.fromTo('.formation-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
        tl.fromTo('.timeline-line', { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: "none" });
        tl.fromTo('.timeline-item', { opacity: 0, x: (i) => i % 2 === 0 ? -50 : 50 }, { opacity: 1, x: 0, stagger: 0.3, duration: 0.8 }, "-=1");
        tl.fromTo('.timeline-dot', { scale: 0 }, { scale: 1, stagger: 0.3, duration: 0.5, ease: "back.out(2)" }, "-=1.2");
    }, []);

    const events = [
        {
            date: "2022 - 2024",
            title: "Análise e Desenv. de Sistemas",
            institution: "Centro Universitário Unifatecie",
            icon: <FaUserGraduate />,
            side: "left"
        },
        {
            date: "2024 - 2025",
            title: "Desenvolvedor Front End",
            institution: "Estágio",
            icon: <FaCode />,
            side: "right"
        },
        {
            date: "2025 - 2026",
            title: "Freelancer",
            institution: "Projetos sob demanda",
            icon: <FaBriefcase />,
            side: "left"
        }
    ];

    return (
        <section id='formation' className="py-24 px-5 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="formation-title text-center mb-20 space-y-3">
                    <span className="text-gray-600 font-mono font-bold tracking-widest uppercase text-sm">Minha Jornada</span>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-500 italic text-center">Trajetória Profissional</h3>
                    <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">

                    {/* Linha Central da Timeline */}
                    <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 origin-top hidden md:block"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <div key={index} className={`relative flex items-center justify-between w-full ${event.side === 'left' ? 'md:flex-row-reverse' : ''}`}>

                                {/* Espaçador para o lado oposto */}
                                <div className="hidden md:block w-[45%]"></div>

                                {/* Ponto Central (Dot) */}
                                <div className="timeline-dot absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 rounded-full bg-white border-4 border-cyan-500 z-10 items-center justify-center text-cyan-500 shadow-lg shadow-cyan-500/20">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping absolute"></div>
                                    <div className="relative z-20 bg-white rounded-full p-1 italic text-[10px] font-bold">JV</div>
                                </div>

                                {/* Card de Conteúdo */}
                                <div className={`timeline-item w-full md:w-[45%] bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-cyan-500/50 transition-all duration-500 group`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-slate-900 text-cyan-400 rounded-xl text-xl group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-500">
                                            {event.icon}
                                        </div>
                                        <span className="text-cyan-600 font-mono font-bold text-sm tracking-tighter">{event.date}</span>
                                    </div>
                                    <h2 className="text-xl font-black text-slate-900 mb-1">{event.title}</h2>
                                    <p className="text-slate-500 font-medium italic">{event.institution}</p>

                                    {/* Setinha indicadora (Desktop) */}
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-50 border-t border-l border-slate-100 rotate-45 ${event.side === 'left' ? '-right-2' : '-left-2'}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}