/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import logo from '../assets/qassob.svg';

export default function NavBar() {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            className={`sticky top-0 z-50 h-[10svh] ${hasShadow ? 'nav-shadow' : ''} navbar border-b border-b-gray-950`} 
            id="navbar"
        >
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center rounded-xl">
                <div className="w-full md:w-auto flex justify-center md:block">
                    <a href="/" className="flex items-center text-2xl text-[#8d0b0d] font-semibold uppercase">
                        <img 
                            src={logo} 
                            alt="Qushxona.uz - Qassoblik va Qurbonlik Xizmati Logosi" 
                            className="h-16 nav-logo" 
                            loading="lazy" 
                        />
                        <span>Qushxona.uz</span>
                    </a>
                </div>

                <ul className="flex justify-around text-base md:text-xl font-medium uppercase bg-[#F9F0E7] border-t border-[#8d0b0d] md:border-t-0 text-[#8d0b0d] border-b md:border-b-[0]">
                    <li className="text-center md:px-5 py-3 border-r-2 md:border-0 border-[#8d0b0d] w-1/3">
                        <a href="#service" className="nav-links">Xizmatlarimiz</a>
                    </li>
                    <li className="text-center md:px-5 py-3 border-r-2 md:border-0 border-[#8d0b0d] w-1/3">
                        <a href="#delivery" className="nav-links">Buyurtma</a>
                    </li>
                    <li className="text-center md:px-5 py-3 w-1/3">
                        <a href="#contact" className="nav-links">Bog'lanish</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
