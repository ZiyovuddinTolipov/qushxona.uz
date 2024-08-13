/* eslint-disable react/no-unescaped-entities */
import Card from './Card'
const Services = () => {
    return (
        <section className=" bg-[#F9F0E7] border-t-4 border-t-[#000] px-5 md:px-0" id='service'>
            <div className="max-w-[1200px] h-auto  mx-auto pt-16">
                <div className='flex flex-col md:flex-row py-10  justify-between gap-3 px-0 md:px-5'>
                <Card aos="1100"/>
                <Card aos="900"/>
                <Card aos="700"/>
                </div>
            </div>
        </section>
    )
}

export default Services