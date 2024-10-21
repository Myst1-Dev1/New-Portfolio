import { useGSAP } from '@gsap/react';
import styles from './styles.module.scss';

import { FaTimes } from 'react-icons/fa'
import gsap from 'gsap';

interface NavBarProps {
    onIsNavBarOpen:boolean
    onHandleCloseNavBar:() => void;
}

export function NavBar({ onIsNavBarOpen, onHandleCloseNavBar } :NavBarProps) {

    useGSAP(() => {
        gsap.fromTo('.nav-link', { opacity:0, Y:0 }, { opacity:1, Y:20, duration:0.4, stagger:0.4, ease:'power1.inOut' });
    }, [onIsNavBarOpen]);

    return (
        <div className={styles.navBar}>
            <FaTimes onClick={onHandleCloseNavBar} className={styles.icon} />

            <nav className='d-flex flex-column'>
                <a onClick={onHandleCloseNavBar} className='nav-link' href="#home">Início</a>
                <a onClick={onHandleCloseNavBar} className='nav-link' href="#about">Sobre</a>
                <a onClick={onHandleCloseNavBar} className='nav-link' href="#skills">Habilidades</a>
                {/* <a onClick={onHandleCloseNavBar} className='nav-link' href="#services">Serviços</a> */}
                <a onClick={onHandleCloseNavBar} className='nav-link' href="#projects">Portfolio</a>
                <a onClick={onHandleCloseNavBar} className='nav-link' href="#contact">Contato</a>
            </nav>
        </div>
    )
}