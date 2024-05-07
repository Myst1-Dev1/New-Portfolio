import { motion } from 'framer-motion';
import { Button } from '../Button';
import styles from './styles.module.scss';
import bannerImg from '../../assets/images/bannerImg.png';

import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { BannerFunctionality } from './banner';

export function Banner() {
    const { animate, letters, ocupattionLetters } = BannerFunctionality();

    return (
        <div id='home' className={styles.banner}>
            <div className='row justify-content-center container text-light'>
                <div data-aos="fade-down" 
                    className={`${styles.bannerContent} col-md-8 d-flex align-items-center gap-5 mb-5 mt-5`}>
                    <div className={`d-flex flex-column gap-3 ${styles.bannerIcons}`}>
                        <a href="https://www.linkedin.com/in/myst1-dev/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className={styles.icon} />
                        </a>
                        <a href="https://github.com/Myst1-Dev1" target="_blank" rel="noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                        <a href="https://www.instagram.com/jv1555_dev/" target="_blank" rel="noreferrer">
                            <FaInstagram className={styles.icon} />
                        </a>
                    </div>
                    <div className={`${styles.bannerSubtitles} d-flex flex-column gap-3`}>
                        <div className={styles.bannerText}>
                            <h2>
                            {letters.map((letter, i) => (
                                <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={animate && { opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                >
                                {letter}
                                </motion.span>
                            ))}
                            </h2>
                            <h2 className={styles.red}>
                            {ocupattionLetters.map((letter, i) => (
                                <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={animate && { opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                >
                                {letter}
                                </motion.span>
                            ))}
                            </h2>
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