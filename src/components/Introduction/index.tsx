import styles from './styles.module.scss';
import devImg from '../../assets/images/userPortfolioImage.jpg';
import { FaArrowRight, FaFileUpload } from 'react-icons/fa';
import { AboutFunctionality } from '../About/about';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Banner() {
    const { handleDownloadCV } = AboutFunctionality();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'sine', stagger:0.4, duration: 0.8 } });

        tl.fromTo(".devImg", { opacity:0, y:40 }, {opacity:1, y:0});
        tl.fromTo(".text-animate", { opacity:0, y:40 }, {opacity:1, y:0});
        tl.fromTo(".btn-animate", { opacity:0, x:40 }, {opacity:1, x:0});
    }, []);

    return (
        <div id='home' className={`${styles.introduction} container d-flex justify-content-center align-items-center`}>
            <div>
                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <div className={`${styles.imgContainer}`}>
                        <img className='devImg' src={devImg} alt="imagem do desenvolvedor" />
                    </div>
                    <h2 className='text-animate h5 text-center'>Olá, eu sou o João 🖐️</h2>
                </div>
                <div className='d-flex flex-column gap-2 mt-3'>
                    <h2 className='text-animate text-center'>Desenvolvedor Front end</h2>
                    <p className='text-animate text-center'>
                        Desenvolvedor Front-End com Especialização em ReactJS/Next.js, Comprometido em Proporcionar a Melhor Experiência aos Usuários através de Interfaces Interativas.
                    </p>
                    <div className='d-flex justify-content-center align-items-center gap-5'>
                        <a href="#contact" className='btn-animate d-flex bg-dark text-light justify-content-center align-items-center gap-3'>Entre em contato <FaArrowRight /></a>
                        <button onClick={handleDownloadCV} className='btn-animate d-flex border border-dark justify-content-center align-items-center gap-3'>Download CV <FaFileUpload /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}