/* eslint-disable react/no-unescaped-entities */
// import { useRef } from 'react';
// import gsap from 'gsap';
import { useEffect, useState } from 'react';
import logo from '../assets/qassob.svg';
// import { CiHome } from "react-icons/ci";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
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
        <nav className={`sticky top-0 shadow-md h-[10svh] z-50 ${hasShadow ? 'nav-shadow' : ''} navbar`} id='navbar navbar'>
            <div className="md:justify-between flex  mx-auto  md:items-center flex-col md:flex-row max-w-[1400px]  rounded-xl">
                <div className="w-[100%] md:w-auto">
                    <div className="flex items-center justify-between  md:block">
                        <a href="" className='flex items-center text-xl'>
                            <img src={logo} alt="qushxona.uz logo" className='h-16 nav-logo' />
                            Qushxona.uz
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-[#8d0b0d] rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-auto">
                    <div
                        className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0  ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-start px-3 justify-start flex flex-col md:flex-row  md:flex md:space-x-6 text-xl font-[500] gap-4 bg-white h-[90svh] md:h-auto">
                            <li onClick={() => setNavbar(false)}> <a href='#about' className='nav-links text-sm'>Biz haqimizda</a></li>
                            <li onClick={() => setNavbar(false)}> <a href='#service' className='nav-links text-sm'>Hizmatlarimiz</a></li>
                            <li onClick={() => setNavbar(false)}><a href='#ads' className='nav-links text-sm'>Buyurtma</a></li>
                            <li onClick={() => setNavbar(false)}><a href='#contact' className='nav-links text-sm'>Bog'lanish</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}