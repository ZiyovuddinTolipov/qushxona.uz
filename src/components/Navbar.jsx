/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import logo from '../assets/qassob.svg';

export default function NavBar() {
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
        <nav className={`sticky top-0 shadow-md  h-[10svh] z-50 ${hasShadow ? 'nav-shadow' : ''} navbar`} id='navbar navbar'>
            <div className="md:justify-between flex  mx-auto  md:items-center flex-col md:flex-row max-w-[1200px]  rounded-xl">
                <div className="w-[100%] md:w-auto">
                    <div className="flex items-center justify-center  md:block">
                        <a href="" className='flex items-center text-2xl text-[#8d0b0d] font-semibold uppercase' >
                            <img src={logo} alt="qushxona.uz logo" className='h-16 nav-logo' loading='lazy' />
                            <span  >Qushxona.uz</span>
                        </a>
                        
                    </div>
                </div>
                <div className="w-[100%] md:w-auto border-t pt-2 border-t-black md:border-t-0">
                    <div
                        className="flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 bg-[#F9F0E7] "
                    >
                        <ul className="flex px-5 justify-between text-base md:text-xl font-medium uppercase pr-5">
                            <li  className="border-r-2 md:border-0 border-[#8d0b0d] pr-5" > <a href='#service' className='nav-links'>xizmatlarimiz</a></li>
                            <li  className="border-r-2 md:border-0 border-[#8d0b0d] pr-5"><a href='#delivery' className='nav-links'>Buyurtma</a></li>
                            <li ><a href='#contact' className='nav-links'>Bog'lanish</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}