/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import { projects } from '../Projects/project';
import { ProjectDetailsDataType } from '../../types/project';

import github from "../../assets/images/github.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function ProjectsNew() {
    const [showDetails, setShowDetails] = useState(false);
    const [projectDetailsData, setProjectDetailsData] =
        useState<ProjectDetailsDataType[] | any>([]);

    const sectionRef = useRef(null);
    const imageContainerRef = useRef<any>(null);
    const animationRef = useRef<any>(null);

    function handleShowProjectDetails(id: number) {
        const data = projects.filter(project => project.id === id);
        setProjectDetailsData(data);

        gsap.fromTo('.box', {
            y: -100,
            opacity: 0,
        }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, });

        setTimeout(() => {
            setShowDetails(true);
        }, 500);
    }

    useGSAP(() => {

        if (!showDetails) {

            const trigger = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true,
                onEnter: () => {

                    gsap.fromTo(
                        '.projects-title',
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.6 }
                    );

                    gsap.fromTo(
                        '.box',
                        { opacity: 0, scale: 0.9 },
                        {
                            opacity: 1,
                            scale: 1,
                            stagger: 0.2,
                            duration: 0.6,
                            ease: 'back.out(1.7)'
                        }
                    );
                }
            });

            return () => trigger.kill();
        }

    }, { scope: sectionRef, dependencies: [showDetails] });

    useGSAP(() => {

        if (showDetails) {

            gsap.fromTo(
                '.box-details',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            );

            gsap.to(window, {
                scrollTo: {
                    y: "#projectDetails",
                    offsetY: 80
                },
                duration: 0.5
            });
        }

    }, { scope: sectionRef, dependencies: [showDetails] });

    const handleMouseEnter = () => {
        const container = imageContainerRef.current;

        const step = () => {
            if (container.scrollTop < container.scrollHeight - container.clientHeight) {
                container.scrollTop += 2;
                animationRef.current = requestAnimationFrame(step);
            }
        };

        animationRef.current = requestAnimationFrame(step);
    };

    const handleMouseLeave = () => {
        cancelAnimationFrame(animationRef.current);

        gsap.to(imageContainerRef.current, {
            scrollTop: 0,
            duration: 1,
            ease: "power2.out"
        });
    };

    return (
        <section ref={sectionRef} id='projects' className="py-24 overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="projects-title text-center mb-20 space-y-4">
                    <span className="text-cyan-600 font-mono font-bold tracking-widest uppercase text-sm">
                        Meu Trabalho
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-500 leading-tight">
                        Portfolio
                    </h2>
                    <p className="text-slate-500 max-w-lg mx-auto italic">
                        Projetos em destaque desenvolvidos com as melhores tecnologias do mercado.
                    </p>
                </div>

                {!showDetails ? (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {projects.map((project) => (

                            <div
                                key={project.id}
                                className="box group relative overflow-hidden rounded-[2rem] bg-slate-900 aspect-video shadow-2xl transition-all duration-500"
                            >

                                <img
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                                    src={project.img}
                                    alt="projeto"
                                />

                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <h4 className="text-white text-2xl font-black mb-4 tracking-tighter uppercase">
                                        {project.title}
                                    </h4>

                                    <button
                                        onClick={() => handleShowProjectDetails(project.id)}
                                        className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-cyan-600 transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
                                    >
                                        Ver Detalhes
                                    </button>
                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div id="projectDetails" className="box-details max-w-6xl mx-auto">

                        {projectDetailsData.map((data: any) => (

                            <div
                                key={data.id}
                                className="bg-[#282828] rounded-[3rem] p-8 lg:p-12 shadow-inner border border-slate-100"
                            >

                                <div className="flex justify-between items-start mb-10">

                                    <div className="space-y-2 text-left">
                                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                                            Detalhes do Projeto
                                        </h2>

                                        <div className="flex items-center gap-2">
                                            <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
                                            <span className="text-cyan-600 font-bold uppercase text-xs tracking-widest">
                                                {data.title}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            gsap.killTweensOf("*");
                                            setShowDetails(false);
                                        }}
                                        className="p-4 bg-white rounded-full text-slate-400 hover:text-red-500 shadow-sm transition-all hover:rotate-90 active:scale-90"
                                    >
                                        <FaTimes className="text-xl" />
                                    </button>

                                </div>

                                <div className="flex flex-col lg:flex-row gap-12 items-center">

                                    <div
                                        ref={imageContainerRef}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        className="relative w-full lg:w-3/5 h-96 overflow-hidden rounded-3xl shadow-2xl"
                                    >
                                        <img
                                            className="w-full h-auto object-top"
                                            src={data.img}
                                            alt="projeto"
                                        />
                                    </div>

                                    <div className="w-full lg:w-2/5 flex flex-col gap-8 text-left">

                                        <div className="space-y-4">
                                            <h5 className="text-cyan-300 font-bold uppercase text-xs tracking-widest">
                                                Tecnologias
                                            </h5>

                                            <div className="flex flex-wrap gap-3">
                                                {data.techs?.map((tech: any) => (
                                                    <div key={tech.id} className="p-2 rounded-xl">
                                                        <img
                                                            className="w-8 h-8 object-cover"
                                                            src={tech.img}
                                                            alt="tech"
                                                        />
                                                    </div>
                                                ))}

                                                {data.githubLink === '#' ? '' :
                                                    <a
                                                        href={data.githubLink}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className="p-2 rounded-xl hover:bg-cyan-600 transition-colors"
                                                    >
                                                        <img
                                                            className="w-8 h-8 invert"
                                                            src={github}
                                                            alt="github"
                                                        />
                                                    </a>}
                                            </div>
                                        </div>

                                        <p className="text-slate-300 leading-relaxed text-lg italic">
                                            "{data.description}"
                                        </p>

                                        <a
                                            href={data.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className="no-underline"
                                        >
                                            <button className="group flex items-center justify-center gap-4 bg-cyan-900 text-white w-full py-5 rounded-2xl font-black text-xl hover:bg-cyan-500 transition-all duration-300 shadow-xl shadow-slate-900/10">
                                                {data.demo ? 'VISITAR SITE' : 'EM DESENVOLVIMENTO'}
                                                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                            </button>
                                        </a>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>
        </section>
    );
}