/* eslint-disable react/no-unescaped-entities */
// import { useRef } from 'react';
// import gsap from 'gsap';
import { useEffect, useState } from 'react';
import logo from '../assets/qassob.svg';

const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`sticky top-0 shadow-md h-[10svh] z-50 ${hasShadow ? 'nav-shadow' : ''} navbar`}>
            <div className="flex items-center w-full sticky top-0 justify-between max-w-[1200px] mx-auto text-[#8d0b0d] ">
                <a className='flex items-center text-xl' href='/'>
                    <img src={logo} alt="qushxona.uz logo" className='h-16 nav-logo' />
                    Qushxona.uz
                </a>
                <div className='flex items-center gap-x-3 '>
                    <a href='#about' className='nav-links text-sm'>Biz haqimizda</a>
                    <a href='#service' className='nav-links text-sm'>Hizmatlarimiz</a>
                    <a href='#ads' className='nav-links text-sm'>Buyurtma</a>
                    <a href='#contact' className='nav-links text-sm'>Bog'lanish</a>
                </div>
            </div>
        </nav>
    );
};
export default Header;