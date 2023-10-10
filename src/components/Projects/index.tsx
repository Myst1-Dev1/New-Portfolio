import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import mysFlix from '../../assets/images/mysflix.png';
import msDashBoard from '../../assets/images/msdash.png';

import { Button } from '../Button';
import { FaArrowRight } from 'react-icons/fa';

import { Navigation, Pagination, A11y } from 'swiper/modules';
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
        description: 'Projeto de dashboard desenvolvido com Next.js e Firebase. O dashboard possibilita a criação de contas de usuário, o login com as contas criadas e a criação de novos usuários.',
        link: 'https://ms-dashboard.vercel.app/'
    },
]

export function Projects() {

    return (
        <div id='projects'>
            <SubTitle title="Portfolio"  subtitle="Projeto em Destaque"/>
            <div className={`${styles.projects}`}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
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
                                <div className='d-flex flex-column justify-content-between'>
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