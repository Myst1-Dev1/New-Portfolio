import { useGSAP } from '@gsap/react';
import { FaTimes } from 'react-icons/fa'
import gsap from 'gsap';
import { useEffect, useState } from 'react';

interface NavBarProps {
    onIsNavBarOpen: boolean
    onHandleCloseNavBar: () => void;
}


export function NavBar({ onIsNavBarOpen, onHandleCloseNavBar }: NavBarProps) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useGSAP(() => {
        if (onIsNavBarOpen) {
            gsap.fromTo(
                ".nav-link",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.1 }
            );
        }
    }, [onIsNavBarOpen]);

    const desktopClasses = "flex gap-8 items-center";
    const mobileClasses =
        "fixed inset-0 bg-white z-[50] w-full min-h-screen flex flex-col justify-center items-center gap-8 text-2xl font-bold";

    return (
        <nav
            className={
                isMobile
                    ? onIsNavBarOpen
                        ? mobileClasses
                        : "hidden"
                    : desktopClasses
            }
        >
            {isMobile && onIsNavBarOpen && (
                <FaTimes
                    onClick={onHandleCloseNavBar}
                    className="absolute top-8 right-8 text-3xl text-gray-800 cursor-pointer"
                />
            )}

            {[
                { name: "Início", href: "#home" },
                { name: "Sobre", href: "#about" },
                { name: "Histórico", href: "#formation" },
                { name: "Serviços", href: "#services" },
                { name: "Portfolio", href: "#projects" },
                { name: "Contato", href: "#contact" },
            ].map((link) => (
                <a
                    key={link.name}
                    onClick={onHandleCloseNavBar}
                    href={link.href}
                    className="nav-link font-medium transition-all duration-500 hover:text-cyan-400"
                >
                    {link.name}
                </a>
            ))}
        </nav>
    );
}