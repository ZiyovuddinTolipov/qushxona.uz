/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Delivery = (props) => {
    return (
        <div className=" h-auto md:h-52 bg-[#8d0b0d] text-white mt-10 md:mt-0 p-5 md:p-0 overflow-x-hidden max-w-full" id="delivery">
            <div className="mx-auto max-w-[1200px]">
                <h2 className="text-2xl md:text-3xl py-5" data-aos="fade-right">{props.page} Buyurtma berish.</h2>
                <form className="flex flex-col md:flex-row  gap-3 md:items-end items-start w-[100%]">
                    <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                        <label htmlFor="name" className="text-white max-w-sm">Ismingiz</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                        <label htmlFor="name" className="text-white max-w-sm">Telefon raqamingiz</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <div className="flex flex-col w-full max-w-sm text-black gap-y-1" data-aos="zoom-in" data-aos-duration="900">
                        <label htmlFor="name" className="text-white max-w-sm">Qo'shimcha</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <button className="bg-white text-black px-2 py-2 mt-5 md:mt-0" data-aos="zoom-in" data-aos-duration="900">Yuborish</button>
                </form>
            </div>
        </div>
    )
}

export default Delivery