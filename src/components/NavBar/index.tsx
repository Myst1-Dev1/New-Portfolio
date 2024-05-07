import { useEffect } from 'react';
import styles from './styles.module.scss';

import { FaTimes } from 'react-icons/fa'

interface NavBarProps {
    onIsNavBarOpen:boolean
    onHandleCloseNavBar:() => void;
}

export function NavBar({ onIsNavBarOpen ,onHandleCloseNavBar } :NavBarProps) {

    useEffect(() => {
        const navItem = document.querySelectorAll('nav a');

        if(navItem) {
            navItem.forEach(item => {
                item.addEventListener('click', onHandleCloseNavBar);
            })
        }
    }, [onHandleCloseNavBar, onIsNavBarOpen]);

    return (
        <div className={styles.navBar}>
            <FaTimes onClick={onHandleCloseNavBar} className={styles.icon} />

            <nav className='d-flex flex-column'>
                <a href="#home">Início</a>
                <a href="#about">Sobre</a>
                <a href="#skills">Habilidades</a>
                <a href="#services">Serviços</a>
                <a href="#projects">Portfolio</a>
                <a href="#contact">Contato</a>
            </nav>
        </div>
    )
}