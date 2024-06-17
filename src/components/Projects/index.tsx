import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import { Button } from '../Button';
import { FaArrowRight } from 'react-icons/fa';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
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
                    modules={[Navigation, Pagination, EffectCoverflow]}
                    slidesPerView={3}
                    navigation
                    autoplay
                    centeredSlidesBounds
                    centeredSlides
                    pagination={{ clickable: true }}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                        scale:1
                    }}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
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
                                            Demo <FaArrowRight className="ms-5" />
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