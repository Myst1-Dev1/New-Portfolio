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
                        {/* <a href="#services">Serviços</a> */}
                        <a href="#projects">Portfolio</a>
                        <a href="#contact">Contato</a>
                    </div>
                    <div className='d-flex gap-3'>
                        <a href="https://www.linkedin.com/in/myst1-dev/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/Myst1-Dev1" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/jv1555_dev/" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p className='text-center mt-3'>© 2023 feito com ❤️ por Myst1 Dev</p>
            </div>
        </>
    )
}