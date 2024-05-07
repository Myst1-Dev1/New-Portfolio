import { NavBar } from '../NavBar';
import { HeaderFunctionality } from './header';
import styles from './styles.module.scss';

import { FaMoon, FaSun ,FaBars } from 'react-icons/fa';

export function Header() {
  const { handleCloseNavBar, handleOpenNavBar, handleSetDarkMode, isDarkMode, isFixedHeader, isNavBarOpen } 
        = HeaderFunctionality();    

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