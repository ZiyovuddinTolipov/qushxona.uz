/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logo from '../assets/delivery.png';

const Card = (props) => {
    return (
        <div 
            className="card w-full sm:w-1/2 md:w-1/3 pb-10 pt-5 flex flex-col items-start gap-y-2 border px-3 bg-[#000] text-white "
            data-aos="fade-right"
            data-aos-duration={props.aos}
        >
            <img src={logo} alt="" className="h-28 text-white" loading='lazy'/>
            <h2 className="text-white text-base md:text-xl">Yetkazib berish</h2>
            <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad repellat tempore
                odit molestias quisquam corrupti, mollitia quidem quas dolorem!
            </p>
            <button className="bg-[#fff] text-[#8d0b0d] px-4 py-2 mt-2 uppercase text-base md:text-xl">Buyurtma</button>
        </div>
    );
};

export default Card;
