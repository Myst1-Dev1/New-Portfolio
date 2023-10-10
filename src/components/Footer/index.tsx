import styles from './styles.module.scss';

import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

export function Footer() {
    return (
        <>
            <div className={`d-flex align-items-center text-light ${styles.footer}`}>
                <div className='d-flex justify-content-between wrap container' >
                    <div>
                        <h2>João Victor</h2>
                        <h5>Desenvolvedor Front End</h5>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <a href="#home">Início</a>
                        <a href="#about">Sobre</a>
                        <a href="#skills">Habilidades</a>
                        <a href="#services">Serviços</a>
                        <a href="#projects">Portfolio</a>
                        <a href="#contact">Contato</a>
                    </div>
                    <div className='d-flex gap-3'>
                        <FaLinkedinIn className={styles.icon} />
                        <FaGithub className={styles.icon} />
                        <FaInstagram className={styles.icon} />
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p className='text-center mt-3'>© 2023 feito com ❤️ por Myst1 Dev</p>
            </div>
        </>
    )
}