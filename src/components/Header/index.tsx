import { NavBar } from '../NavBar';
import { HeaderFunctionality } from './header';
import logo from '../../assets/images/logo.png';
import whiteLogo from '../../assets/images/white-logo.png';

import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';

export function Header() {
    const { handleCloseNavBar, handleOpenNavBar, handleSetDarkMode, isDarkMode, isNavBarOpen }
        = HeaderFunctionality();

    const [isMobile, setIsMobile] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.6 } });
        tl.fromTo(".header-anim", { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.2 });
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
                <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                    <div className='relative max-w-24 block'>
                        <img
                            className="header-anim w-full object-contain"
                            src={isDarkMode ? whiteLogo : logo}
                            alt="logo"
                        />
                    </div>

                    {/* Desktop Menu centralizado */}
                    {/* <div className="hidden lg:block header-anim"> */}
                    <NavBar
                        onHandleCloseNavBar={handleCloseNavBar}
                        onIsNavBarOpen={isNavBarOpen}
                    />
                    {/* </div> */}

                    <div className="header-anim flex items-center gap-6">
                        {/* Toggle Dark Mode */}
                        <button
                            onClick={handleSetDarkMode}
                            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-all duration-500"
                        >
                            {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                        </button>

                        {/* Botão Mobile Hamburger */}
                        <FaBars
                            onClick={handleOpenNavBar}
                            className="text-2xl cursor-pointer lg:hidden text-gray-400"
                        />

                        {/* CTA Button Desktop */}
                        <a href="#contact"
                            className="hidden lg:flex items-center gap-2 bg-cyan-500 font-bold text-white px-6 py-2.5 rounded-xl no-underline hover:bg-cyan-600 transition-all duration-500 shadow-sm active:scale-95">
                            Contato <MdArrowOutward />
                        </a>
                    </div>
                </div>
            </header>

            {/* Espaçador para o header fixo não cobrir o conteúdo */}
            <div className="h-20"></div>

            {isDarkMode && <div className="fixed inset-0 bg-gray-950/50 pointer-events-none -z-10"></div>}
        </>
    );
}
