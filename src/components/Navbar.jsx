// import { useRef } from 'react';
// import gsap from 'gsap';
import logo from '../assets/qassob.svg';

const Header = () => {

    return (
        <nav className=' bg-white sticky top-0 shadow-md h-[10svh]'>
            <div className="flex items-center w-full sticky top-0 justify-between max-w-[1200px] mx-auto text-[#8d0b0d] ">
            <div className='flex items-center text-2xl'>
                <img src={logo} alt="qushxona.uz logo" className='h-16' />
                Qushxona.uz
            </div>
            <div className='flex items-center gap-x-3'>
                <a href='#'>Biz haqimizda</a>
                <a href='#'>Lorem</a>
            </div>
        </div>
        </nav>
    );
};
export default Header;