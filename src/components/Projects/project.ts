import mysFlix from '../../assets/images/mysflix.png';
import msDashBoard from '../../assets/images/msdash.png';
import pokedex from '../../assets/images/pkdex.png';
import corgiBlog from '../../assets/images/corgi-blog.png'
import dragoTech from '../../assets/images/drago tech.png';
import expenseTracker from '../../assets/images/expense-tracker.png';
import covidLp from '../../assets/images/covid-lp.png';
import dmcLp from '../../assets/images/dmc-lp.png';

export const projects = [
    {
        id: 1,
        img: `${mysFlix}`,
        title: 'MysFlix',
        description: 'Clonagem da interface da Netflix, desenvolvida com React, Styled Components e a API do The Movie Database (TMDb).',
        link: 'https://mysflix.netlify.app/'
    },
    {
        id: 2,
        img: `${msDashBoard}`,
        title: 'MS Dashboard',
        description: 'Projeto de dashboard desenvolvido com Next.js e Firebase. O dashboard possibilita a criação de contas de usuário e criação de novos usuários.',
        link: 'https://ms-dashboard.vercel.app/'
    },
    {
        id: 3,
        img: `${pokedex}`,
        title: 'Pokedex',
        description: 'Primeiro projeto com react e consumo de api. Neste projeto utilizamos a api pokeapi.co.',
        link: 'https://myspokedex.netlify.app/'
    },
    {
        id: 4,
        img: `${covidLp}`,
        title: 'Teste vaga de estágio',
        description: 'Landing page sobre o virus da covid-19 como teste para uma vaga de estágio.',
        link: 'https://myst1-dev1.github.io/Dr-Myst1/'
    },
    {
        id: 5,
        img: `${dmcLp}`,
        title: 'Devil may cry LP',
        description: 'Landing page sobre o jogo devil may cry 5 apenas um design tendo como funcionamento um carousel com os personagens.',
        link: 'https://myst1-dev1.github.io/Devil-may-cry-5/'
    },
    {
        id: 6,
        img: `${corgiBlog}`,
        title: 'Corgi Blog',
        description: 'Primeiro projeto com criação de tema customizado em wordpress, um simples blog sobre corgis.',
        link: 'https://corgi.blog.digitallabor.com.br/'
    },
    {
        id: 7,
        img: `${dragoTech}`,
        title: 'Drago tech',
        description: 'Ecommerce de técnologia feito com Nextjs, Hygraph(CMS do graphql) e pagamentos integrados com stripe. No momento com erro na criação de conta.',
        link: 'https://drago-tech.vercel.app/'
    },
    {
        id: 8,
        img: `${expenseTracker}`,
        title: 'Expense Tracker',
        description: 'Dashboard criado com Nextjs e firebase com o intuito de gerenciar os gastos e lucros.',
        link: 'https://expensetrackerdashboard.vercel.app/'
    },
]