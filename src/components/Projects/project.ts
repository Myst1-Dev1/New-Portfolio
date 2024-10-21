import mysFlix from '../../assets/images/mysflix.webp';
import msDashBoard from '../../assets/images/msdash.webp';
import corgiBlog from '../../assets/images/corgi-blog.webp'
import dragoTech from '../../assets/images/drago-tech.webp';
import expenseTracker from '../../assets/images/expense-tracker.webp';
import covidLp from '../../assets/images/covid-lp.webp';

export const projects = [
    {
        id: 1,
        img: `${mysFlix}`,
        title: 'MysFlix',
        description: 'Clonagem da interface da Netflix, desenvolvida com React, Styled Components e a API do The Movie Database (TMDb).',
        link: 'https://mysflix.netlify.app/',
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
        img: `${covidLp}`,
        title: 'Teste vaga de estágio',
        description: 'Landing page sobre o virus da covid-19 como teste para uma vaga de estágio.',
        link: 'https://myst1-dev1.github.io/Dr-Myst1/'
    },
    {
        id: 4,
        img: `${corgiBlog}`,
        title: 'Corgi Blog',
        description: 'Primeiro projeto com criação de tema customizado em wordpress, um simples blog sobre corgis.',
        link: 'https://corgi.blog.digitallabor.com.br/'
    },
    {
        id: 5,
        img: `${dragoTech}`,
        title: 'Drago tech',
        description: 'Ecommerce de técnologia feito com Nextjs e wordpress como backend.',
        link: 'https://drago-tech-2-0.vercel.app/'
    },
    {
        id: 6,
        img: `${expenseTracker}`,
        title: 'Expense Tracker',
        description: 'Dashboard criado com Nextjs e firebase com o intuito de gerenciar os gastos e lucros.',
        link: 'https://expensetrackerdashboard.vercel.app/'
    },
]