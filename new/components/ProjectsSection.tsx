'use client';

import { ArrowUpRight, CatIcon } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    type: 'Freelance',
    name: 'EletroSystem',
    image: '/eletrosystem.webp',
    description: 'Projeto freelancer desenvolvido em Next.js para uma empresa especializada em serviços de assistência técnica.',
    link: 'https://eletrosystemti.com.br/',
    stack: [ 'Nextjs','Typescript', 'Tailwindcss', 'Gsap' ]
  },
  {
    id: 2,
    type: 'Pessoal',
    name: 'Corgi Blog',
    image: '/cblog.webp',
    description: 'Este projeto é um blog sobre corgis desenvolvido com uma arquitetura moderna baseada em TurboRepo, utilizando Next.js no frontend e NestJS no backend. A aplicação conta com uma estrutura de microsserviços integrada ao RabbitMQ para comunicação assíncrona, PostgreSQL como banco de dados e Docker para padronização e gerenciamento do ambiente de desenvolvimento e deploy.',
    link: 'https://c-blog-web.vercel.app/',
    stack: [ 'Nextjs','Typescript', 'Tailwindcss', 'Gsap', 'Nestjs', 'TypeOrm', 'Rabbitmq', 'Docker', 'Microserviços', 'Websocket' ],
    github: 'https://github.com/Myst1-Dev1/CBlog'
  },
  {
    id: 3,
    type: 'Freelance',
    name: 'TG City Game',
    image: '/tgcitygame.webp',
    description: 'Jogo web desenvolvido com GameMaker, criado com o objetivo de apresentar e contar a história de diferentes locais da cidade de Tanguá. O projeto foi realizado como trabalho freelancer por mim e minha equipe.',
    link: 'https://tgcitygame.com/',
    stack: [ 'GameMaker',],
  },
  {
    id: 4,
    type: 'Pessoal',
    name: 'MS Delivery',
    image: '/ms-delivery.webp',
    description: 'Sistema de delivery na qual os restaurantes tem acesso a um painel para gerenciar suas compras e pratos.',
    link: 'https://ms-delivery.vercel.app',
    stack: [ 'Nextjs', 'Tailwind', 'Typescript', 'Nodejs', 'Mongodb', 'Prisma'],
    github: 'https://github.com/Myst1-Dev1/MS-Delivery'
  },
]

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 border-t border-[#161a26] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold tracking-wider text-sky-400">
              [ PORTFÓLIO SELECIONADO ]
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Projetos em Destaque &amp; Estudos de Caso
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Resultados mensuráveis combinando arquiteturas robustas, pipelines automatizados e interfaces de classe mundial.
            </p>
          </div>

          <a
            href="https://github.com/Myst1-Dev1"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-zinc-400 hover:text-sky-400 transition-colors"
          >
            <span>Ver mais no GitHub</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="w-full relative pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            className="w-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="rounded-2xl border border-[#1d2232] bg-[#0c0e14] p-6 sm:p-8 lg:p-10 shadow-2xl transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="mb-4 font-mono text-xs">
                          <span className="rounded-md bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 text-emerald-400">
                            {project.type}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          {project.name}
                        </h3>

                        <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.stack.map((sk, index: number) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 rounded-md bg-[#11151f] border border-[#1c2232] text-xs font-mono text-zinc-300"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#171b26] text-xs sm:text-sm font-mono">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium"
                        >
                          <span>Ver Demo ao Vivo</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={!project.github ? '#' : project.github}
                          className={`inline-flex items-center gap-1.5 ${!project.github ? 'text-zinc-600' : 'text-violet-400'}`}
                        >
                          <CatIcon className="h-3.5 w-3.5" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-5 relative aspect-4/3 w-full">
                      <Image
                        className="rounded-md object-cover object-top grayscale contrast-110 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
                        fill
                        priority
                        src={project.image}
                        alt="foto do projeto"
                      />
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center items-center gap-2 mt-6" />

          <style jsx global>{`
            .custom-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background-color: #272f45;
              opacity: 1;
              border-radius: 9999px;
              transition: all 0.3s ease;
            }
            .custom-pagination .swiper-pagination-bullet-active {
              width: 24px; /* O dot ativo fica mais largo (estilo barra elegante) */
              background-color: #38bdf8; /* Cor sky-400 combinando com o tema */
            }
          `}</style>
        </div>

      </div>
    </section>
  );
}
