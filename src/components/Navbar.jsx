/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/qassob.svg';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function NavBar({ theme, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef(null);
    const logoRef = useRef(null);
    const menuItemsRef = useRef([]);

    useEffect(() => {
        const navbar = navbarRef.current;
        const logo = logoRef.current;
        const menuItems = menuItemsRef.current;

        gsap.fromTo(navbar,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo(logo,
            { scale: 0, rotation: -180 },
            { scale: 1, rotation: 0, duration: 1, delay: 0.5, ease: 'elastic.out(1, 0.3)' }
        );

        menuItems.forEach((item, index) => {
            gsap.fromTo(item,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, delay: 0.8 + index * 0.1, ease: 'power3.out' }
            );
        });

        ScrollTrigger.create({
            start: 'top -100',
            end: 99999,
            toggleClass: { className: 'navbar-scrolled', targets: navbar }
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            ref={navbarRef}
            className="sticky top-0 z-50 bg-secondary transition-all duration-300"
            id="navbar"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-center space-x-2">
                            <img
                                ref={logoRef}
                                src={logo}
                                alt="Qushxona.uz Logo"
                                className={`h-8 w-auto ${theme === 'dark' ? 'filter brightness-0 invert' : ''}`}
                            />
                            <span className="font-bold text-lg text-primary hidden sm:inline">Qushxona.uz</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {['Xizmatlarimiz', 'Buyurtma', 'Bog\'lanish'].map((item, index) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                ref={el => menuItemsRef.current[index] = el}
                                className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-primary text-secondary hover:bg-opacity-80 transition-colors duration-200 mr-2"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-primary text-secondary hover:bg-opacity-80 transition-colors duration-200 mr-2"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-full bg-primary text-secondary hover:bg-opacity-80 transition-colors duration-200"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaBars className="block h-4 w-4" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary shadow-lg">
                    {['Xizmatlarimiz', 'Buyurtma', 'Bog\'lanish'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            onClick={toggleMenu}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
