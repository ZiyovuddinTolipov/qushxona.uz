/* eslint-disable react/no-unescaped-entities */

import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import img from '../assets/blob.jpg'
const Contact = () => {
    return (
        <section className=" text-black relative p-5 md:p-0 pt-5 " id="contact">
            <action className="mx-auto max-w-[1200px] h-auto md:h-[90svh] flex flex-col md:flex-row py-16 gap-5">
                <div className="w-full md:w-1/2 h-full  flex flex-col justify-between ">
                    <h1 className="text-2xl md:text-3xl">#04 Biz bilan bog'lanish.</h1>
                    <div className=' mt-2 w-full'>
                        <div className="flex gap-x-2 w-full pr-1 galery">
                            <img src={img} alt="" className="w-1/2 object-cover h-60" data-aos="zoom-in" data-aos-duration="900" />
                            <img src={img} alt="" className="w-1/2 object-cover h-60" data-aos="zoom-in" data-aos-duration="900" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-base md:text-xl"></h2>
                            <div className="flex flex-col md:flex-row justify-between">
                                <a className="text-black hover:underline transition-all duration-75" href="tel:+998913269426">+998913269426</a>
                                <a className="text-black hover:underline transition-all duration-75" href="mailto:ziyovuddinweb@gmail.com">ziyovuddinweb@gmail.com</a>
                            </div>
                        </div>
                        <h2 className="text-base md:text-xl mt-5" data-aos="fade-right" data-aos-duration="900">Bizni ijtimoiy tarmoqlarda kuzating</h2>
                        <div className="flex gap-x-2 mt-2 flex-row">
                            <p className="social-icons text-[.9rem] px-2 py-2 w-1/3" data-aos="zoom-in" data-aos-duration="700"><FaTelegramPlane /> Telegram</p>
                            <p className="social-icons text-[.9rem] px-2 py-2 w-1/3" data-aos="zoom-in" data-aos-duration="700"><FaInstagram /> Instagram</p>
                            <p className="social-icons text-[.9rem] px-2 py-2 w-1/3" data-aos="zoom-in" data-aos-duration="700"><FaWhatsapp /> Whatsapp</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 h-full  flex flex-col justify-between '>
                    <h2 className="text-base md:text-xl" data-aos="fade-right" data-aos-duration="900">Bizning joylashuv</h2>
                    <iframe
                        data-aos="zoom-in" data-aos-duration="1100"
                        src="https://www.google.com/maps?q=41.361945,69.373126&z=16&output=embed"
                        className=" w-full h-full mt-5"
                        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </action>
        </section>
    )
}

export default Contact