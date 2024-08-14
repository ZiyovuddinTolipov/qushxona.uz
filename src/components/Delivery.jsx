/* eslint-disable no-nonoctal-decimal-escape */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import toast from 'react-hot-toast';
import InputMask from 'react-input-mask';

const Delivery = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [additional, setAdditional] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const botToken = '7274256076:AAGY9c8W8qzWY7lVrGEuNwjb2YFy-EzOmx8'; // Bu yerga bot tokeningizni yozing
        const chatId = '-1002178285365'; // Bu yerga chat ID ni yozing
        const message = `Ism: ${name}\nTelefon: ${phone}\nQo'shimcha: ${additional}`;

        try {
            // console.log(message) ;
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                }),
            });

            if (response.ok) {
                toast.success('Ma\'lumotlar yuborildi!');
                // Formani tozalash
                setName('');
                setPhone('');
                setAdditional('');
            } else {
                toast.error('Ma\'lumotlarni yuborishda xatolik yuz berdi.');
            }
        } catch (error) {
            // console.error('Xatolik:', error);
            toast.error('Ma\'lumotlarni yuborishda xatolik yuz berdi.');
        }

    };

    return (
        <div className=" h-auto md:h-40 bg-slate-900 text-white mt-10 md:mt-0 p-5 md:p-0 overflow-x-hidden max-w-full" id="delivery">
            <div className="mx-auto max-w-[1200px] pt-5">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 md:items-end items-start w-[100%]">
                    <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                        <label htmlFor="name" className="text-white max-w-sm">Ismingiz</label>
                        <input
                            type="text"
                            className="focus:outline-none px-3 py-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                        <label htmlFor="phone" className="text-white max-w-sm">Telefon raqamingiz</label>
                        <InputMask
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="focus:outline-none px-3 py-2"
                            id="phone"
                            mask="+\9\9\8999999999"
                            required
                        />
                        
                    </div>
                    <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                        <label htmlFor="additional" className="text-white max-w-sm">Qo'shimcha</label>
                        <input
                            type="text"
                            className="focus:outline-none px-3 py-2"
                            value={additional}
                            onChange={(e) => setAdditional(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-white text-black px-2 py-2 mt-5 md:mt-0"
                        data-aos="zoom-in"
                        data-aos-duration="900"
                    >
                        Yuborish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Delivery;
