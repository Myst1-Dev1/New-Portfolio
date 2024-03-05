import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import mysFlix from '../../assets/images/mysflix.png';
import msDashBoard from '../../assets/images/msdash.png';
import pokedex from '../../assets/images/pkdex.png';
import corgiBlog from '../../assets/images/corgi-blog.png'
import dragoTech from '../../assets/images/drago tech.png';

import { Button } from '../Button';
import { FaArrowRight } from 'react-icons/fa';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
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
        description: 'Primeiro projeto com react e consumo de api. Neste projeto utilizamos a api pokeapi.co',
        link: 'https://myspokedex.netlify.app/'
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
        description: 'Ecommerce de técnologia feito com Nextjs, Hygraph(CMS do graphql) e pagamentos integrados com stripe. No momento com erro na criação de conta.',
        link: 'https://drago-tech.vercel.app/'
    },
]

export function Projects() {

    return (
        <div id='projects'>
            <SubTitle title="Portfolio"  subtitle="Projeto em Destaque"/>
            <div data-aos="zoom-in-up" className={`${styles.projects}`}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <div 
                                className={`d-flex wrap justify-content-center gap-5 mt-5 mb-5 ${styles.projectBox}`}>
                                <div className={styles.imgContainer}>
                                    <img src={project.img} alt="project-image" />
                                </div>
                                <div className={`d-flex flex-column justify-content-between 
                                    ${styles.projectSubtitles}`}>
                                    <h3 className='fw-bold'>{project.title}</h3>
                                    <p className='mb-4'>{project.description}</p>
                                    <Button>
                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            Demo <FaArrowRight className="ms-5" 
                                        />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}