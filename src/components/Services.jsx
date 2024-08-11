/* eslint-disable react/no-unescaped-entities */
import Card from './Card'
const Services = () => {
    return (
        <section className=" bg-white border-t-4 border-t-[#000]" id='service'>
            <div className="max-w-[1200px] h-[90svh] mx-auto pt-16">
                <h1 className="text-3xl ">#02 Hizmatlarimiz.</h1>
                <div className='flex mt-10  justify-between gap-x-3'>
                <Card />
                <Card />
                <Card />
                </div>
            </div>
        </section>
    )
}

export default Services