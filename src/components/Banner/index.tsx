import { Button } from '../Button';
import styles from './styles.module.scss';
import bannerImg from '../../assets/images/bannerImg.png';

import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

export function Banner() {
    return (
        <div id='home' className={styles.banner}>
            <div className='row justify-content-center container text-light'>
                <div data-aos="fade-down" 
                    className='col-md-8  d-flex align-items-center gap-5 mb-5 mt-5'>
                    <div className={`d-flex flex-column gap-3 ${styles.bannerIcons}`}>
                        <a href="https://www.linkedin.com/in/myst1-dev/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className={styles.icon} />
                        </a>
                        <a href="https://github.com/Myst1-Dev1" target="_blank" rel="noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                        <a href="https://www.instagram.com/myst1_dev/" target="_blank" rel="noreferrer">
                            <FaInstagram className={styles.icon} />
                        </a>
                    </div>
                    <div className={`${styles.bannerSubtitles} d-flex flex-column gap-3`}>
                        <div>
                            <h2>Olá, eu sou o João</h2>
                            <h2 className={styles.red}>Desenvolvedor Front End</h2>
                        </div>
                        <Button><a href="#contact">Entre em contato</a></Button>
                    </div>
                </div>
                <div data-aos="fade-up" className={`col-md-4 ${styles.imgContainer}`}>
                    <img src={bannerImg} alt="banner-image" />
                </div>
            </div>
        </div>
    )
}