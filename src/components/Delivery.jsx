/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Delivery = (props) => {
    return (
        <div className=" h-auto md:h-52 bg-[#8d0b0d] text-white mt-10 md:mt-0 p-5 md:p-0" id="delivery">
            <div className="mx-auto max-w-[1200px]">
                <h2 className=" text-2xl md:text-3xl py-5">{props.page} Buyurtma berish.</h2>
                <form className="flex flex-col md:flex-row  gap-3 md:items-end w-full items-start">
                    <div className="flex flex-col max-w-sm text-black gap-y-1">
                        <label htmlFor="name" className="text-white">Ismingiz</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <div className="flex flex-col max-w-sm text-black gap-y-1">
                        <label htmlFor="name" className="text-white">Telefon raqamingiz</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <div className="flex flex-col max-w-sm text-black gap-y-1">
                        <label htmlFor="name" className="text-white">Qo'shimcha</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <button className="bg-white text-black px-2 py-2 mt-5 md:mt-0">Yuborish</button>
                </form>
            </div>
        </div>
    )
}

export default Delivery