import { NavBar } from '../NavBar';
import { HeaderFunctionality } from './header';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo.png';
import whiteLogo from '../../assets/images/white-logo.png';

import { FaMoon, FaSun ,FaBars } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Header() {
    const { handleCloseNavBar, handleOpenNavBar, handleSetDarkMode, isDarkMode, isNavBarOpen } 
        = HeaderFunctionality();  

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'sine', stagger:0.4, duration: 0.4, delay:0.5 } });

        tl.fromTo(".logo", { opacity:0, y:40 }, {opacity:1, y:0});
        tl.fromTo(".mode", { opacity:0, y:40 }, {opacity:1, y:0});
    }, []);

    return (
        <>
            <header className={`w-100 ${styles.header}`}>
                <div className='container d-flex justify-content-between align-items-center m-auto'>
                    <img className={`logo ${styles.logo}`} src={isDarkMode ? whiteLogo : logo} alt="logo do Myst1 Dev" />
                    
                    <NavBar 
                        onHandleCloseNavBar = {handleCloseNavBar}
                        onIsNavBarOpen = {isNavBarOpen} 
                    />
                   
                    <div className='mode d-flex align-items-center gap-4'>
                        {isDarkMode ? 
                            <FaSun onClick={handleSetDarkMode} className={styles.Icon} /> 
                            : 
                            <FaMoon onClick={handleSetDarkMode} className={styles.Icon} />
                        }
                        <FaBars onClick={handleOpenNavBar} className={`${styles.Icon} d-block d-lg-none`} />
                        <a href="#contact" className={`d-none d-lg-flex justify-content-center gap-3 ${styles.ctnButton}`}>
                            Contato
                            <MdArrowOutward />
                        </a>
                    </div>
                </div>
            </header>
              

            {isDarkMode && <div className='dark-mode'></div>}
        </>
    )
}