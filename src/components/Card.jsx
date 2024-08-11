import logo from '../assets/qassob.svg'

const Card = () => {

    return (
        <div className="card w-full  pb-10 pt-5 flex flex-col items-start gap-y-2 border px-3 bg-[#000] text-white">
            <img src={logo} alt="" className='h-28 text-white' />
            <h2 className='text-white'>Yetkazib berish</h2>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad repellat tempore
                odit molestias quisquam corrupti, mollitia quidem quas dolorem!
            </p>
            <button className='bg-[#fff] text-[#8d0b0d] px-4 py-2 mt-2 uppercase'>Buyurtma</button>
        </div>
    );
};

export default Card;
