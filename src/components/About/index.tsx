import aboutImg from '../../assets/images/about-img.jpg';
import html from '../../assets/images/html-5.png';
import css from '../../assets/images/css-3.png';
import javascript from '../../assets/images/javascript.png'
import typescript from '../../assets/images/typescriptIcon.png';
import bootstrap from '../../assets/images/bootstrap.png';
import tailwind from '../../assets/images/tailwindIcon.png';
import sass from '../../assets/images/sass.png';
import react from '../../assets/images/react.png';
import next from '../../assets/images/nextjs.png';
import figma from '../../assets/images/figma.png';
import jest from '../../assets/images/jest.png';
import node from '../../assets/images/node.png';
import wordpress from '../../assets/images/wp.png';
import vscode from '../../assets/images/vscode.png';
import mongodb from '../../assets/images/mongodb.png';
import nestjs from '../../assets/images/nestjs.svg';
import postgresql from '../../assets/images/postgresql.webp';
import docker from '../../assets/images/docker.png';
import { FaCode } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skills = [
    {
        id: 1,
        img: `${html}`
    },

    {
        id: 2,
        img: `${css}`
    },

    {
        id: 3,
        img: `${javascript}`
    },
    {
        id: 4,
        img: `${typescript}`
    },

    {
        id: 5,
        img: `${bootstrap}`
    },

    {
        id: 6,
        img: `${tailwind}`
    },

    {
        id: 7,
        img: `${sass}`
    },

    {
        id: 8,
        img: `${react}`
    },

    {
        id: 9,
        img: `${next}`
    },

    {
        id: 10,
        img: `${wordpress}`
    },

    {
        id: 11,
        img: `${jest}`
    },

    {
        id: 12,
        img: `${node}`
    },

    {
        id: 13,
        img: `${mongodb}`
    },
    {
        id: 14,
        img: `${nestjs}`
    },
    {
        id: 15,
        img: `${postgresql}`
    },
    {
        id: 16,
        img: `${docker}`
    },

]

export function About() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top 80%',
                once: true,
            },
            defaults: { ease: 'power3.out', duration: 1 }
        });

        tl.fromTo('.about-img', { opacity: 0, x: -50 }, { opacity: 1, x: 0 });
        tl.fromTo('.about-content', { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "-=0.8");
        tl.fromTo('.skill-icon', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, stagger: 0.05, ease: "back.out(1.7)" }, "-=0.5");
    }, []);

    return (
        <section id='about' className="py-24 px-5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2">

                    <div className="about-img relative group w-full max-w-md">
                        <div className="absolute -inset-4 border-2 border-cyan-500/30 rounded-2xl group-hover:border-cyan-500 transition-colors duration-500"></div>
                        <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                        <img
                            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-auto lg:h-full"
                            src={aboutImg}
                            alt="Foto do desenvolvedor"
                        />
                    </div>

                    <div className="about-content flex flex-col gap-8 flex-1">
                        <div className="space-y-4">
                            <span className="text-gray-400 font-mono font-bold tracking-widest uppercase text-sm">Quem eu sou</span>
                            <h2 className="text-4xl font-black text-gray-500 leading-tight">
                                Transformando café em <br />
                                <span className="text-gray-500 italic">soluções digitais.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Apaixonado por tecnologia desde cedo, construí uma jornada sólida como desenvolvedor <span className="text-gray-600 font-semibold">Full Stack</span>.
                                Meu foco é criar interfaces que não são apenas bonitas, mas funcionais e performáticas.
                                Adoro o desafio de transformar uma ideia crua em um ecossistema digital completo.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h6 className="flex items-center gap-3 text-gray-400 font-bold uppercase text-xs tracking-tighter">
                                <FaCode className="text-gray-500 text-lg" /> Tecnologias que domino
                            </h6>
                            <div className="flex flex-wrap gap-3">
                                {skills.map(skill => (
                                    <div key={skill.id} className="skill-icon group relative">
                                        <div className="absolute inset-0 bg-cyan-500 blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                        <div className="relative p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300">
                                            <img className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all" src={skill.img} alt="skill" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h6 className="text-slate-900 font-bold uppercase text-xs tracking-tighter">Workflow & Design</h6>
                            <div className="flex gap-4">
                                {[vscode, figma].map((tool, i) => (
                                    <div key={i} className="p-3 bg-cyan-950 rounded-xl flex items-center justify-center hover:bg-gray-300 transition-all duration-500 shadow-lg">
                                        <img className="w-6 h-6 object-contain" src={tool} alt="ferramenta" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}