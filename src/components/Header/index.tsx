import { useState, useEffect } from 'react';

import { NavBar } from '../NavBar';
import styles from './styles.module.scss';

import { FaMoon, FaSun ,FaBars } from 'react-icons/fa';

export function Header() {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    const [isFixedHeader, setIsFixedHeader] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleOpenNavBar() {
        setIsNavBarOpen(true);
    }

    function handleCloseNavBar() {
        setIsNavBarOpen(false);
    }

    function handleSetDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        const scrollListener = () => {
          if(window.scrollY > 10) {
            setIsFixedHeader(true)
          } else{
            setIsFixedHeader(false)
          }
        }
    
        window.addEventListener('scroll', scrollListener);
        return () => {
          window.removeEventListener('scroll', scrollListener);
        }
      },[]);

      useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
          body.classList.add('dark-mode');
        } else {
          body.classList.remove('dark-mode');
        }
      }, [isDarkMode]);

    return (
        <>
            <div className={isFixedHeader ? styles.fixedHeader : `text-light w-100 ${styles.header}`}>
                <div className='d-flex justify-content-between align-items-center m-auto'>
                    <h1 className='h3'>João Victor</h1>
                    <div className='d-flex gap-4'>
                        {isDarkMode ? 
                            <FaSun onClick={handleSetDarkMode} className={styles.Icon} /> : 
                            <FaMoon onClick={handleSetDarkMode} className={styles.Icon} />}
                        <FaBars onClick={handleOpenNavBar} className={styles.Icon} />
                    </div>
                </div>
            </div>
           {isNavBarOpen &&  
                <NavBar 
                    onHandleCloseNavBar = {handleCloseNavBar}
                    onIsNavBarOpen = {isNavBarOpen} 
                />}

            {isDarkMode && <div className='dark-mode'></div>}
        </>
    )
}