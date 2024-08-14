/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logo from '../assets/delivery-man.png';

const Card = (props) => {
    return (
        <div
            className="card w-full sm:w-1/2 md:w-1/3 pb-10 p-5 flex flex-col items-start gap-y-2 px-5 bg-[#fff] text-red-500 border-2 border-[#8d0b0d]"
            data-aos="zoom-in"
            data-aos-duration='900'
        >
            <img src={logo} alt="" className="h-28" loading='lazy' />
            <h2 className="text-white text-base md:text-xl">Yetkazib berish</h2>
            <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae consectetur fugiat quasi, nisi tenetur voluptatem.
            </p>
            <button className="bg-[#8d0b0d] text-[#fff] px-4 py-2 mt-2 uppercase text-base md:text-xl">Buyurtma</button>
        </div>
    );
};

export default Card;
