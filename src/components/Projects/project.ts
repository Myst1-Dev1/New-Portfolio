import eletroSystem from '../../assets/images/eletrosystem.webp';
import dragoTech from '../../assets/images/drago-tech.webp';
import msDelivery from '../../assets/images/ms-delivery.webp';
import domusKey from '../../assets/images/domusKey.webp';
import cBlog from '../../assets/images/cblog.webp';
import tgCityGame from '../../assets/images/tgcitygame.png';

import html from '../../assets/images/html-5.png';
import css from '../../assets/images/css-3.png';
import javascript from '../../assets/images/javascript.png';
import typescript from '../../assets/images/typescriptIcon.png';
import tailwind from '../../assets/images/tailwindIcon.png';
import sass from '../../assets/images/sass.png';
import react from '../../assets/images/react.png';
import angular from '../../assets/images/angular.png';
import nextjs from '../../assets/images/nextjs.png';
import jest from '../../assets/images/jest.png';
import wordpress from '../../assets/images/wp.png';
import gameMaker from '../../assets/images/gmaker.png';
import nestjs from '../../assets/images/nestjs.svg';
import postgresql from '../../assets/images/postgresql.webp';
import docker from '../../assets/images/docker.png';

export const projects = [
    {
        id: 1,
        img: `${cBlog}`,
        title: 'Corgi Blog',
        description: `Este projeto é um blog sobre corgis desenvolvido com uma arquitetura moderna baseada em TurboRepo, utilizando Next.js no frontend e NestJS no backend. A aplicação conta com uma estrutura de microsserviços integrada ao RabbitMQ para comunicação assíncrona, PostgreSQL como banco de dados e Docker para padronização e gerenciamento do ambiente de desenvolvimento e deploy.`,
        link: '#',
        demo: false,
        githubLink: 'https://github.com/Myst1-Dev1/CBlog',
        techs: [
            {
                id: 1,
                img: `${react}`,
            },
            {
                id: 2,
                img: `${tailwind}`,
            },
            {
                id: 3,
                img: `${typescript}`,
            },
            {
                id: 4,
                img: `${nextjs}`,
            },
            {
                id: 5,
                img: `${html}`,
            },
            {
                id: 6,
                img: `${css}`,
            },
            {
                id: 7,
                img: `${nestjs}`
            },
            {
                id: 8,
                img: `${postgresql}`
            },
            {
                id: 9,
                img: `${docker}`
            }
        ]
    },
    {
        id: 2,
        img: `${eletroSystem}`,
        title: 'EletroSystem',
        description: 'Projeto freelancer desenvolvido em Next.js para uma empresa especializada em serviços de assistência técnica.',
        link: 'https://eletrosystemti.com.br/',
        demo: true,
        githubLink: '#',
        techs: [
            {
                id: 1,
                img: `${nextjs}`,
            },
            {
                id: 2,
                img: `${html}`,
            },
            {
                id: 3,
                img: `${tailwind}`,
            },
            {
                id: 4,
                img: `${javascript}`,
            },
            {
                id: 5,
                img: `${typescript}`,
            }
        ]
    },
    {
        id: 3,
        img: `${domusKey}`,
        title: 'DomusKey',
        description: 'Projeto de construtora ficticia, na qual você pode comprar ou alugar um imóvel.',
        link: 'https://domus-key.vercel.app/',
        demo: true,
        githubLink: 'https://github.com/Myst1-Dev1/DomusKey',
        techs: [
            {
                id: 1,
                img: `${html}`,
            },
            {
                id: 2,
                img: `${sass}`,
            },
            {
                id: 3,
                img: `${typescript}`,
            },
            {
                id: 4,
                img: `${angular}`
            }
        ]
    },
    {
        id: 4,
        img: `${tgCityGame}`,
        title: 'TG City Game',
        description: 'Jogo web desenvolvido com GameMaker, criado com o objetivo de apresentar e contar a história de diferentes locais da cidade de Tanguá. O projeto foi realizado como trabalho freelancer por mim e minha equipe',
        link: 'https://tgcitygame.com/',
        demo: true,
        githubLink: '#',
        techs: [
            {
                id: 1,
                img: `${html}`,
            },
            {
                id: 2,
                img: `${css}`,
            },
            {
                id: 3,
                img: `${javascript}`,
            },
            {
                id: 4,
                img: `${gameMaker}`,
            }
        ]
    },
    {
        id: 5,
        img: `${dragoTech}`,
        title: 'Drago tech',
        description: 'Loja de técnologia feito com Nextjs e nestjs e prisma como backend.',
        link: 'https://drago-tech-2-0.vercel.app/',
        demo: true,
        githubLink: 'https://github.com/Myst1-Dev1/Drago-Tech-2.0',
        techs: [
            {
                id: 1,
                img: `${html}`,
            },
            {
                id: 2,
                img: `${tailwind}`,
            },
            {
                id: 3,
                img: `${typescript}`,
            },
            {
                id: 4,
                img: `${nextjs}`,
            },
            {
                id: 5,
                img: `${wordpress}`,
            }
        ]
    },
    {
        id: 6,
        img: `${msDelivery}`,
        title: 'MS Delivery',
        description: 'Sistema de delivery na qual os restaurantes tem acesso a um painel para gerenciar suas compras e pratos',
        link: 'https://ms-delivery.vercel.app/',
        demo: true,
        githubLink: 'https://github.com/Myst1-Dev1/MS-Delivery',
        techs: [
            {
                id: 1,
                img: `${nextjs}`,
            },
            {
                id: 2,
                img: `${react}`,
            },
            {
                id: 3,
                img: `${html}`,
            },
            {
                id: 4,
                img: `${tailwind}`,
            },
            {
                id: 5,
                img: `${typescript}`,
            },
            {
                id: 6,
                img: `${jest}`,
            },
        ]
    },
]