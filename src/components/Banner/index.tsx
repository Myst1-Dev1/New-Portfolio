import { Button } from '../Button';
import styles from './styles.module.scss';
import userPortfolioImage from '../../assets/images/userPortfolioImage.jpg';

import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

export function Banner() {
    return (
        <div className={styles.banner}>
            <div className='row m-auto justify-content-center container text-light'>
                <div className='col-md-8 d-flex align-items-center gap-5 mb-5 mt-5'>
                    <div className={`d-flex flex-column gap-3 ${styles.bannerIcons}`}>
                        <a href="https://www.linkedin.com/in/myst1-dev/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/Myst1-Dev1" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/myst1_dev/" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <div>
                            <h2>Olá, eu sou o João</h2>
                            <h2 className={styles.red}>Desenvolvedor Front End</h2>
                        </div>
                        <Button>Entre em contato</Button>
                    </div>
                </div>
                <div className={`col-md-4 ${styles.imgContainer}`}>
                    <img src={userPortfolioImage} alt="joão-victor-image" />
                </div>
            </div>
        </div>
    )
}