import { useState, useEffect } from 'react';

export function HeaderFunctionality() {
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

      return {
        isFixedHeader,
        isDarkMode,
        isNavBarOpen,
        handleSetDarkMode,
        handleCloseNavBar,
        handleOpenNavBar
      }
}