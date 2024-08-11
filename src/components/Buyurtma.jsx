/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Buyurtma = (props) => {
    return (
        <div className="h-52 bg-[#8d0b0d] text-white">
            <div className="mx-auto max-w-[1200px]">
                <h2 className="text-3xl py-5">{props.page} Buyurtma</h2>
                <form className="flex gap-x-3 items-end">
                    <div className="flex flex-col max-w-sm text-black gap-y-2">
                        <label htmlFor="name" className="text-white">Ismingiz</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <div className="flex flex-col max-w-sm text-black gap-y-2">
                        <label htmlFor="name" className="text-white">Telefon raqamingiz</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <div className="flex flex-col max-w-sm text-black gap-y-2">
                        <label htmlFor="name" className="text-white">Qo'shimcha</label>
                        <input type="text" className="focus:outline-none px-3 py-2" />
                    </div>
                    <button className="bg-white text-black px-2 py-2">Yuborish</button>
                </form>
            </div>
        </div>
    )
}

export default Buyurtma