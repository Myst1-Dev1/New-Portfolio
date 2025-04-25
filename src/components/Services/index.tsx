import styles from './styles.module.scss';

import { FaAndroid, FaCode, FaCog } from 'react-icons/fa';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export function Services() {

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '#services',
            start: 'top 90%',
            once: true,
            onEnter:() => {
                const tl = gsap.timeline({ defaults: { ease: 'sine', stagger:0.4, duration: 0.5 } });
                
                tl.fromTo('.services-title', { opacity:0, y:40 }, { opacity:1, y:0 });
                tl.fromTo('.card', { 
                    opacity: 0,
                    x: -100,
                    rotateY: -45,
                    transformPerspective: 1000,
                    transformOrigin: "left center"
                  },
                  { 
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.2
                  });
            }
        })
    }, []);

    return (
        <div id='services' className={`container ${styles.services}`}>
            <div className={`subtitle services-title d-flex flex-column gap-3 text-center ${styles.subtitle}`}>
                <h3 className='fw-bold'>Serviços</h3>
                <h6>O que eu ofereço</h6>
            </div>

            <div data-aos="flip-left" 
                className={`mt-5 row m-auto gap-5 justify-content-center ${styles.serviceContainer}`}>
                <div className={`card col-md-4 d-flex gap-3 flex-column justify-content-center align-items-center ${styles.serviceBox}`}>
                    <FaCode className={`${styles.icon} icon`} />
                    <h4 className='fw-bold h2 mt-2'>Criação e manutenção de sites</h4>
                    <p>Desenvolvimento de sites responsivos e otimizados, com manutenção contínua de acordo com as necessidades do cliente.</p>
                </div>
                <div className={`card col-md-4 d-flex gap-3 flex-column justify-content-center align-items-center ${styles.serviceBox}`}>
                    <FaCog className={`${styles.icon} icon`} />
                    <h4 className='fw-bold mt-2'>UX/UI</h4>
                    <p>Criação de interfaces intuitivas e designs modernos para sites, aplicativos e materiais digitais, com foco na experiência do usuário.</p>
                </div>
                <div className={`card col-md-4 d-flex gap-3 flex-column justify-content-center align-items-center ${styles.serviceBox}`}>
                    <FaAndroid className={`${styles.icon} icon`} />
                    <h4 className='fw-bold mt-2'>Aplicativos para Android e iOS</h4>
                    <p>Desenvolvimento de aplicativos completos, rápidos e intuitivos para Android e iOS, sob medida para o seu projeto.</p>
                </div>
            </div>
        </div>
    )
}