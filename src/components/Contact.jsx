/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa"
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { PiTelegramLogoThin } from "react-icons/pi";
import qassobLogo from '../assets/qassob2.svg'

const Contact = ({ theme }) => {
    return (
        <section className="bg-secondary text-text relative p-5 md:p-0 pt-5" id="contact">
            <div className="mx-auto max-w-[1200px] h-auto md:h-[70svh] flex flex-col md:flex-row py-16 gap-5">
                <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
                    <div className='mt-2 w-full'>
                        <div className="flex flex-col justify-between gap-y-2 font-medium">
                            <h3 className="mb-5 text-2xl font-semibold text-primary">Aloqa uchun.</h3>
                            <a className="text-text hover:text-primary transition-all duration-75 flex items-center gap-3 " href="tel:+998770085526"><IoCallOutline className="text-2xl text-primary" /> +998 (77) 008 55 26</a>
                            <a className="text-text hover:text-primary transition-all duration-75 flex items-center gap-3 " href="mailto:info@qushxona.uz"><CiMail className="text-2xl text-primary" /> info@qushxona.uz</a>
                            <a className="text-text hover:text-primary transition-all duration-75 flex items-center gap-3 " href="https://t.me/qushxonauz/"><PiTelegramLogoThin className="text-2xl text-primary" />@qushxonauz</a>
                        </div>

                        <h2 className="text-xl md:text-xl my-5 font-medium text-primary" data-aos="zoom-in" data-aos-duration="900">Bizni ijtimoiy tarmoqlarda kuzating.</h2>
                        <div className="flex">
                            <div className="flex gap-x-2 mt-2 flex-col gap-y-3 w-2/3">
                                <a href="https://t.me/qushxonauzb/" className="social-icons text-xs md:text-[.9rem] px-2 py-2 rounded-md bg-secondary hover:bg-primary hover:text-secondary transition-all duration-200 flex items-center" data-aos="zoom-in" data-aos-duration="700" title="Qushxona.uz telegram sahifasi"><FaTelegramPlane /> Telegram</a>
                                <a href="https://www.instagram.com/qushxona.uz/" className="social-icons text-xs md:text-[.9rem] px-2 py-2 rounded-md bg-secondary hover:bg-primary hover:text-secondary transition-all duration-200 flex items-center" data-aos="zoom-in" data-aos-duration="700" title="Qushxona.uz instagram sahifasi"><FaInstagram /> Instagram</a>
                                <a href="https://youtube.com/@qushxonauz" className="social-icons text-xs md:text-[.9rem] px-2 py-2 rounded-md bg-secondary hover:bg-primary hover:text-secondary transition-all duration-200 flex items-center" data-aos="zoom-in" data-aos-duration="700" title="Qushxona.uz Youtube sahifasi"><FaYoutube /> YouTube</a>
                            </div>
                            <div className="w-full flex justify-end">
                                <img 
                                    src={qassobLogo} 
                                    alt="Qassob Logo" 
                                    className={`h-full max-h-[150px] ${theme === 'dark' ? 'filter brightness-0 invert' : ''}`} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 max-h-[500px] flex flex-col justify-between'>
                    <h2 className="text-xl font-medium text-primary" data-aos="zoom-in" data-aos-duration="900">Bizning joylashuv.</h2>
                    <iframe
                        title="Qushxona.uz joylashuvi"
                        data-aos="zoom-in" data-aos-duration="1100"
                        src="https://www.google.com/maps?q=41.361945,69.373126&z=16&output=embed"
                        className="w-full h-full mt-5 rounded-md border border-border"
                        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact