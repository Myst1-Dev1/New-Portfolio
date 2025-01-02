import { Button } from '../Button';
import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import userPortfolioImage from '../../assets/images/aboutImg.jpg';
import { AboutFunctionality } from './about';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export function About() {
    const { handleDownloadCV } = AboutFunctionality();
    
    useGSAP(() => {
        gsap.fromTo('.about', { y:0 }, {
            y:100,
            ease:'power1.in',
            duration: 0.4,
            scrollTrigger: {
                trigger: '.about',
                once:true,
                start:'top bottom',
                scrub:1,
                toggleActions: 'start none none none'
            }
        });
    }, []);

    return (
        <div id='about' className={`container mb-5 ${styles.about}`}>
            <SubTitle title="Sobre" subtitle="Quem eu sou"/>

            <div className='about mt-5 row gap-3 align-items-center justify-content-center'>
                <div className={`col-md-6 mb-5 ${styles.imgContainer}`}>
                    <img className='img-fluid' src={userPortfolioImage} alt="about-image" />
                </div>
                <div className={`col-md-6 d-flex align-items-start flex-column gap-4 ${styles.aboutSubtitles}`}>
                    <p>
                        Desenvolvedor Front-End com Especialização em ReactJS/Next.js, Comprometido
                        em Proporcionar a Melhor Experiência aos Usuários através de Interfaces Interativas.
                    </p>
                        <div className={`d-flex flex-column gap-1 ${styles.aboutInfo}`}>
                            <div className='d-flex align-items-center gap-3'>
                                <h6 className='font-bold'>Nome:</h6>
                                <span>João Victor</span>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <h6 className='font-bold'>Idade:</h6>
                                <span>22</span>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <h6 className='font-bold'>Endereço:</h6>
                                <span>Brasil - Rio de Janeiro</span>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <h6 className='font-bold'>Email:</h6>
                                <span>danteopzz@hotmail.com</span>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <h6 className='font-bold'>Contato:</h6>
                                <span>+55 (21) 9 6475-7806</span>
                            </div>
                        </div>
                        <Button onClick={handleDownloadCV}>
                            Download cv
                        </Button>
                </div>
            </div> 
        </div>
    )
}