
import { Button } from '../Button';
import { BannerFunctionality } from './banner';
import styles from './styles.module.scss';

import { FaLinkedinIn, FaGithub, FaInstagram, FaAngular, FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';

export function Banner() {
    const { addToRefs } = BannerFunctionality();

    return (
        <div id='home' className={styles.banner}>
            <div className='row justify-content-center container text-light'>
                <div data-aos="fade-down" 
                    className={`${styles.bannerContent} col-md-8 d-flex align-items-center gap-5 mb-5 mt-5`}>
                    <div className={`d-flex flex-column gap-3 ${styles.bannerIcons}`}>
                        <a className='banner-icon' href="https://www.linkedin.com/in/myst1-dev/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className={styles.icon} />
                        </a>
                        <a className='banner-icon' href="https://github.com/Myst1-Dev1" target="_blank" rel="noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                        <a className='banner-icon' href="https://www.instagram.com/jv1555_dev/" target="_blank" rel="noreferrer">
                            <FaInstagram className={styles.icon} />
                        </a>
                    </div>
                    <div className={`${styles.bannerSubtitles} d-flex flex-column gap-3`}>
                        <div className={styles.bannerText}>
                            <h2 ref={addToRefs}>Olá, eu sou o João</h2>
                            <h2 ref={addToRefs} className={`occupation-text ${styles.red}`}>Desenvolvedor Front End</h2>
                        </div>
                        <Button id='btn'><a href="#contact">Entre em contato</a></Button>
                    </div>
                </div>
                <div className={`cube col-md-4 ${styles.stageCubeCont}`}>
                    <div className={`${styles.cubespinner}`}>
                        <div className={styles.face1}>
                            <FaAngular />
                        </div>
                        <div className={styles.face2}>
                            <FaHtml5 />
                        </div>
                        <div className={styles.face3}>
                            <FaCss3 />
                        </div>
                        <div className={styles.face4}>
                            <FaReact />
                        </div>
                        <div className={styles.face5}>
                            <FaJsSquare />
                        </div>
                        <div className={styles.face6}>
                            <FaGitAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}