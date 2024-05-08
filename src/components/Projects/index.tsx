import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import { Button } from '../Button';
import { FaArrowRight } from 'react-icons/fa';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projects } from './project';

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
                                className={`container d-flex wrap justify-content-center gap-5 mt-5 mb-5 ${styles.projectBox}`}>
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