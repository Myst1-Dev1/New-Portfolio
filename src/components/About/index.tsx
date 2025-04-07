import styles from './styles.module.scss';
import aboutImg from '../../assets/images/about-img.jpg';
import html from '../../assets/images/html-5.png';
import css from '../../assets/images/css-3.png'
import javascript from '../../assets/images/javascript.png'
import typescript from '../../assets/images/typescriptIcon.png';
import bootstrap from '../../assets/images/bootstrap.png'
import tailwind from '../../assets/images/tailwindIcon.png';
import sass from '../../assets/images/sass.png'
import react from '../../assets/images/react.png'
import figma from '../../assets/images/figma.png'
import jest from '../../assets/images/jest.png'
import wordpress from '../../assets/images/wp.png'
import vscode from '../../assets/images/vscode.png'
import { FaCode } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skills = [
    {
        id:1,
        img: `${html}`
    },

    {
        id:2,
        img: `${css}`
    },

    {
        id:3,
        img: `${javascript}`
    },
    {
        id:4,
        img: `${typescript}`
    },

    {
        id:5,
        img: `${bootstrap}`
    },

    {
        id:6,
        img: `${tailwind}`
    },

    {
        id:7,
        img: `${sass}`
    },

    {
        id:8,
        img: `${react}`
    },
    {
        id:9,
        img: `${wordpress}`
    },

    {
        id:10,
        img: `${jest}`
    },

]

export function About() {

    /* O intuito da utilização do onEnter, é para que toda a animação só aconteça
     quando estivermos em 90% do topo da div #about.
     */

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '#about',
            start: 'top 90%',
            once: true,
            onEnter: () => {
                const tl = gsap.timeline({ defaults: { ease: 'sine', duration: 0.8, stagger: 0.4 } });
                tl.fromTo('.about-img', { opacity: 0, x: -900 }, { opacity: 1, x: 0 });
                tl.fromTo('.about-text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
                tl.fromTo('.about-box', { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
                tl.fromTo('.box-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
                tl.fromTo('.img-skill', { opacity: 0 }, { opacity: 1 });
                tl.fromTo('.ferrament-text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
                tl.fromTo('.ferrament-box', { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
                tl.fromTo('.ferrament-skill', { opacity: 0 }, { opacity: 1 });
            }
        });
    }, []);    

    return (
        <div id='about' className={`d-flex justify-content-center align-items-center m-auto gap-5 container mb-5 ${styles.about}`}>
            <div className={`${styles.imgContainer}`}>
                <img className='about-img' src={aboutImg} alt="Foto do deselvolvedor" />
            </div>
            <div className={`d-flex flex-column gap-3 ${styles.boxContainer}`}>
                <p className='about-text'>
                    Apaixonado por tecnologia e morador do Rio de Janeiro, desenvolvo soluções front-end com ReactJS/Next.js, unindo criatividade e desempenho para oferecer experiências interativas incríveis.
                </p>
                <div>
                    <div className={`about-box ${styles.box}`}>
                        <h6 className='box-title d-flex align-items-center gap-3'><FaCode /> Habilidades</h6>
                        <div className='mt-3 d-flex justify-content-center align-items-center wrap gap-2'>
                            {skills.map(skill => (
                                <img className='img-skill' key={skill.id} src={skill.img} alt="foto da habilidade" />
                            ))}
                        </div>
                    </div>
                    {/* <div className={styles.box}>
                        <h6 className='d-flex align-items-center gap-3'><FaSchool /> Educação</h6>
                        <p>
                            Técnologo em análise e Desenvolvimento de sistemas no Centro Universitário Unifatecie.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h6 className='d-flex align-items-center gap-3'><FaSuitcase /> Projetos</h6>
                        <p>
                            Projetos desenvolvidos utilizando diversas ferramentas e tecnologias, focados em resolver problemas reais.
                        </p>
                    </div> */}
                </div>
                <div className={styles.ferraments}>
                    <h6 className='ferrament-text'>Ferramentas que utilizo</h6>
                    <div className='mt-3 d-flex gap-2 w-50'>
                        <div className={`ferrament-box ${styles.box} d-flex justify-content-center align-items-center`}>
                            <img className='ferrament-skill' src={vscode} alt="foto da ferramenta" />
                        </div>
                        <div className={`ferrament-box ${styles.box} d-flex justify-content-center align-items-center`}>
                            <img className='ferrament-skill' src={figma} alt="foto da ferramenta" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}