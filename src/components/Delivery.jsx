/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nonoctal-decimal-escape */
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import InputMask from 'react-input-mask';

const Delivery = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [additional, setAdditional] = useState('');
    const [eventType, setEventType] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const botToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const message = `Ism: ${name}\nTelefon: ${phone}\nMarosim: ${eventType}\nQo'shimcha: ${additional}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });

            if (response.ok) {
                toast.success('Ma\'lumotlar yuborildi!');
                setIsSubmitted(true);
            } else {
                toast.error('Ma\'lumotlarni yuborishda xatolik yuz berdi.');
            }
        } catch (error) {
            toast.error('Internet bilan bog\'liq muammo yuzaga keldi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-auto md:h-64 bg-slate-900 text-white mt-10 md:mt-0 p-5 md:p-0 overflow-x-hidden max-w-full  overflow-y-hidden" id="delivery">
            <div className="mx-auto max-w-[1200px] pt-5 min-h-[400px] ">
                <h2 className='text-2xl my-3'>{isSubmitted ? "Ariza qoldirganingiz uchun rahmat. Biz sizga 24 soat ichida bog‘lanamiz." : "Ariza qoldiring biz sizga bog'lanamiz"}</h2>
                {!isSubmitted && (
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 md:items-end items-start w-[100%]">
                        <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                            <label htmlFor="name" className="text-white max-w-sm">Ismingiz</label>
                            <input
                                id="name"
                                type="text"
                                aria-label="Ismingiz"
                                className="focus:outline-none px-3 py-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isSubmitted || loading}
                                placeholder='Ismingizni kiriting'
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                            <label htmlFor="phone" className="text-white max-w-sm">Telefon raqamingiz</label>
                            <InputMask
                                id="phone"
                                aria-label="Telefon raqamingiz"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="focus:outline-none px-3 py-2"
                                mask="+\9\9\8999999999"
                                required
                                disabled={isSubmitted || loading}
                                placeholder='Telefon raqam'
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                            <label htmlFor="marosim" className="text-white max-w-sm">Qanday marosim uchun?</label>
                            <select
                                id="marosim"
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                className="focus:outline-none px-3 py-2 rounded-sm"
                                required
                                disabled={isSubmitted || loading}
                            >
                                <option value="" disabled selected >Marosimdi tanlash</option>
                                <option value="Aqiqa">Aqiqa</option>
                                <option value="Maraka">Maraka</option>
                                <option value="To'y">To'y</option>
                                <option value="Qurbonlik">Qurbonlik</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                            <label htmlFor="additional" className="text-white max-w-sm">Qo&apos;shimcha</label>
                            <input
                                id="additional"
                                type="text"
                                aria-label="Qo'shimcha ma'lumot"
                                placeholder='Izoh'
                                className="focus:outline-none px-3 py-2"
                                value={additional}
                                onChange={(e) => setAdditional(e.target.value)}
                                disabled={isSubmitted || loading}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`px-2 py-2 mt-5 md:mt-0 max-w-sm w-full ${loading ? 'bg-gray-500' : 'bg-green-500 text-white font-semibold'}`}
                            disabled={isSubmitted || loading}
                        >
                            {loading ? 'Yuborilmoqda...' : isSubmitted ? 'Yuborildi' : 'Yuborish'}
                        </button>
                    </form>
                )}
                {isSubmitted && (
                    <div className="success-checkmark mt-5">
                        <div className="check-icon">
                            <span className="icon-line line-tip"></span>
                            <span className="icon-line line-long"></span>
                            <div className="icon-circle"></div>
                            <div className="icon-fix"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Delivery;
