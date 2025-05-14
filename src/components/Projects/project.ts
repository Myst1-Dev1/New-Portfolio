import mysFlix from '../../assets/images/mysflix.webp';
import msDashBoard from '../../assets/images/msdash.webp';
import corgiBlog from '../../assets/images/corgi-blog.webp'
import dragoTech from '../../assets/images/drago-tech.webp';
import msDelivery from '../../assets/images/ms-delivery.webp';
import domusKey from '../../assets/images/domusKey.webp';

import html from '../../assets/images/html-5.png';
import css from '../../assets/images/css-3.png'
import javascript from '../../assets/images/javascript.png'
import typescript from '../../assets/images/typescriptIcon.png';
import bootstrap from '../../assets/images/bootstrap.png'
import tailwind from '../../assets/images/tailwindIcon.png';
import sass from '../../assets/images/sass.png'
import react from '../../assets/images/react.png'
import angular from '../../assets/images/angular.png'
import nextjs from '../../assets/images/nextjs.png'
import jest from '../../assets/images/jest.png'
import wordpress from '../../assets/images/wp.png'
import firebase from '../../assets/images/firebase.webp'

export const projects = [
    {
        id: 1,
        img: `${mysFlix}`,
        title: 'MysFlix',
        description: 'Clonagem da interface da Netflix, desenvolvida com React, Styled Components e a API do The Movie Database (TMDb).',
        link: 'https://mysflix.netlify.app/',
        demo:true,
        githubLink:'https://github.com/Myst1-Dev1/Netflix-Clone/tree/main',
        techs: [
            {
                id:1,
                img:`${react}`,
            },
            {
                id:2,
                img:`${html}`,
            },
            {
                id:3,
                img:`${css}`,
            },
            {
                id:4,
                img:`${javascript}`,
            },
        ]
    },
    {
        id: 2,
        img: `${msDashBoard}`,
        title: 'MS Dashboard',
        description: 'Projeto de dashboard desenvolvido com Next.js e Firebase. O dashboard possibilita a criação de contas de usuário e criação de novos usuários.',
        link: 'https://ms-dashboard.vercel.app/',
        demo:true,
        githubLink:'https://github.com/Myst1-Dev1/MS-Dashboard',
        techs: [
            {
                id:1,
                img:`${nextjs}`,
            },
            {
                id:2,
                img:`${html}`,
            },
            {
                id:3,
                img:`${sass}`,
            },
            {
                id:4,
                img:`${typescript}`,
            },
            {
                id:5,
                img:`${bootstrap}`,
            },
            {
                id:6,
                img:`${jest}`,
            },
            {
                id:7,
                img:`${firebase}`,
            },
        ]
    },
    {
        id: 3,
        img: `${domusKey}`,
        title: 'DomusKey',
        description: 'Projeto de construtora ficticia, na qual você pode comprar ou alugar um imóvel.',
        // link: 'https://myst1-dev1.github.io/Dr-Myst1/',
        demo:false,
        githubLink:'https://github.com/Myst1-Dev1/DomusKey',
        techs: [
            {
                id:1,
                img:`${html}`,
            },
            {
                id:2,
                img:`${sass}`,
            },
            {
                id:3,
                img:`${typescript}`,
            },
            {
                id:4,
                img:`${angular}`
            }
        ]
    },
    {
        id: 4,
        img: `${corgiBlog}`,
        title: 'Corgi Blog',
        description: 'Primeiro projeto com criação de tema customizado em wordpress, um simples blog sobre corgis.',
        link: 'https://corgi.blog.digitallabor.com.br/',
        demo:true,
        githubLink:'#',
        techs: [
            {
                id:1,
                img:`${html}`,
            },
            {
                id:2,
                img:`${css}`,
            },
            {
                id:3,
                img:`${javascript}`,
            },
            {
                id:4,
                img:`${bootstrap}`,
            },
            {
                id:5,
                img:`${wordpress}`,
            }
        ]
    },
    {
        id: 5,
        img: `${dragoTech}`,
        title: 'Drago tech',
        description: 'Ecommerce de técnologia feito com Nextjs e wordpress como backend.',
        // link: 'https://drago-tech-2-0.vercel.app/',
        demo:false,
        githubLink:'https://github.com/Myst1-Dev1/Drago-Tech-2.0',
        techs: [
            {
                id:1,
                img:`${html}`,
            },
            {
                id:2,
                img:`${tailwind}`,
            },
            {
                id:3,
                img:`${typescript}`,
            },
            {
                id:4,
                img:`${nextjs}`,
            },
            {
                id:5,
                img:`${wordpress}`,
            }
        ]
    },
    {
        id: 6,
        img: `${msDelivery}`,
        title: 'MS Delivery',
        description: 'Sistema de delivery na qual os restaurantes tem acesso a um painel para gerenciar suas compras e pratos',
        // link: '#',
        demo:false,
        githubLink:'https://github.com/Myst1-Dev1/MS-Delivery',
        techs: [
            {
                id:1,
                img:`${nextjs}`,
            },
            {
                id:2,
                img:`${html}`,
            },
            {
                id:3,
                img:`${tailwind}`,
            },
            {
                id:4,
                img:`${typescript}`,
            },
            {
                id:6,
                img:`${jest}`,
            },
        ]
    },
]