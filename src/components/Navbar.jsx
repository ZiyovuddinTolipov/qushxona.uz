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
                            <img src={logo} alt="qushxona.uz logo" className='h-16 nav-logo' loading='lazy'  data-aos="fade-right" data-aos-duration="1100"/>
                            <span  data-aos="fade-right" data-aos-duration="800">Qushxona.uz</span>
                        </a>
                        
                    </div>
                </div>
                <div className="w-[100%] md:w-auto">
                    <div
                        className="flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 bg-[#F9F0E7] "
                    >
                        <ul className="flex px-5 justify-between text-xl font-medium uppercase">
                            <li data-aos="fade-left" data-aos-duration="700"> <a href='#service' className='nav-links'>xizmatlarimiz</a></li>
                            <li data-aos="fade-left" data-aos-duration="900"><a href='#delivery' className='nav-links'>Buyurtma</a></li>
                            <li data-aos="fade-left" data-aos-duration="1100"><a href='#contact' className='nav-links'>Bog'lanish</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}