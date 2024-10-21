import { FaCode, FaUserGraduate } from 'react-icons/fa';
import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Formation() {

    useGSAP(() => {
        gsap.fromTo('.formation-fade', { opacity:0 }, { opacity:1, stagger:0.4, duration:0.4, ease:'power1.inOut',
            scrollTrigger: { trigger:'.formation-fade', scrub:1, toggleActions: 'start none none none' } 
         });
         gsap.fromTo('.line', { opacity:0, height:0 }, { opacity:1, height:170, stagger:0.4, duration:0.4, ease: 'power1.inOut',
            scrollTrigger: { trigger:'.line', scrub:1, toggleActions: 'start none none none' } 
          });
    }, []);

    return (
        <div className={`${styles.formation}`}>
            <SubTitle title='Trajetória Profissional' subtitle='Formações e experiências' />

            <div className='container mt-5'>
                <div className='d-flex justify-content-center gap-5'>
                    <div className={`formation-fade d-flex align-items-start mt-4 ${styles.leftFormation}`}>
                        <div className={`d-flex flex-column gap-3 justify-content-center align-items-center ${styles.formationBox}`}>
                            <span>2022 - 2024</span>
                            <div className='d-flex gap-3'>
                                <FaUserGraduate />
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <h2>Centro Universitário Unifatecie</h2>
                                    <span>(Análise e desenvolvimento de sistemas)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className='d-flex flex-column align-items-center'>
                            <div className={`formation-fade d-flex justify-content-center align-items-center ${styles.spinnerBox}`}>
                                <div className={`${styles.spinner} spinner-grow text-danger`} role="status" />
                            </div>
                            <div className={`line ${styles.line}`}></div>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className={`formation-fade d-flex justify-content-center align-items-center ${styles.spinnerBox}`}>
                                <div className={`${styles.spinner} spinner-grow text-danger`} role="status" />
                            </div>
                            <div className={`line ${styles.line}`}></div>
                        </div>
                        <div className={`formation-fade d-flex justify-content-center align-items-center ${styles.spinnerBox}`}>
                            <div className={`${styles.spinner} spinner-grow text-danger`} role="status" />
                        </div>
                    </div>

                    <div className={`formation-fade d-flex align-items-end mb-4 ${styles.rightFormation}`}>
                        <div className={`d-flex flex-column gap-3 justify-content-center align-items-center ${styles.formationBox}`}>
                            <span>2024 - Atual</span>
                            <div className='d-flex gap-3'>
                                <FaCode />
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <h2>Desenvolvedor Front End</h2>
                                    <span>(Estágio)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}