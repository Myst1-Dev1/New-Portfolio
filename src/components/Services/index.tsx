import { FaAndroid, FaCode, FaCog } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export function Services() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#services',
                start: 'top 80%',
                once: true,
            }
        });

        tl.fromTo('.services-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 });
        tl.fromTo('.service-card',
            { opacity: 0, y: 50, rotateY: -20 },
            { opacity: 1, y: 0, rotateY: 0, stagger: 0.2, duration: 1, ease: "power4.out" }
        );
    }, []);

    const services = [
        {
            icon: <FaCode />,
            title: "Criação de Sites",
            desc: "Desenvolvimento de interfaces responsivas, otimizadas e com alta performance focada em conversão.",
            color: "group-hover:text-blue-500"
        },
        {
            icon: <FaCog />,
            title: "UX/UI Design",
            desc: "Criação de experiências intuitivas e protótipos modernos que encantam seus usuários finais.",
            color: "group-hover:text-purple-500"
        },
        {
            icon: <FaAndroid />,
            title: "Apps Mobile",
            desc: "Desenvolvimento híbrido para Android e iOS, garantindo rapidez e fluidez na palma da mão.",
            color: "group-hover:text-green-500"
        }
    ];

    return (
        <section id='services' className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="services-title text-center mb-16 space-y-3">
                    <span className="text-gray-600 font-semibold tracking-widest uppercase text-sm">Expertise</span>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-500">O que eu ofereço</h3>
                    <div className="w-20 h-1.5 bg-gray-600 mx-auto rounded-full"></div>
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group relative p-8 bg-cyan-100/20 border border-slate-200 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="absolute -right-10 -bottom-10 text-9xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                {service.icon}
                            </div>

                            <div className={`text-4xl mb-6 text-gray-400 transition-colors duration-300 ${service.color}`}>
                                {service.icon}
                            </div>

                            <h4 className="text-xl font-bold mb-4 leading-tight">
                                {service.title}
                            </h4>

                            <p className="service-desc text-gray-500 leading-relaxed">
                                {service.desc}
                            </p>

                            {/* <div className="mt-6 flex items-center text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                SAIBA MAIS <span className="ml-2">→</span>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}