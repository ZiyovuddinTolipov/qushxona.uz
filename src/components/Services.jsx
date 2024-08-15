/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import logo from "../assets/delivery-man.png";
const Services = () => {
    return (
        <section
            className=" bg-[#F9F0E7] border-t-4 border-t-[#000] px-5 md:px-0"
            id="service"
        >
            <div className="max-w-[1200px] h-auto  mx-auto pt-16">
                <div className="flex flex-col md:flex-row py-10  justify-between gap-3 px-0 md:px-5">
                    <div
                        className="card w-full sm:w-1/2 md:w-1/3 pb-20 p-5 flex flex-col items-start gap-y-2 px-5 bg-[#fff] text-gray-900 border border-gray-900 hover:scale-x-110 transition relative"
                        data-aos="zoom-in"
                        data-aos-duration="900"
                    >
                        <img src={logo} alt="" className="h-28" loading="lazy" />
                        <h2 className="text-white text-base md:text-xl">Yetkazib berish</h2>
                        <p className="text-base ">
                            Sifatli qo'ylarni <b className="text-[#8d0b0d]">20-55 kg</b>{" "}
                            oralig'ida <b className="text-[#8d0b0d]">bepul</b> yetkazib
                            beramiz. Sizning qulayligingiz uchun maxsus xizmat ko'rsatamiz,
                            eng yaxshi narxlarda taklif qilamiz.
                        </p>
                        <a
                            href="#delivery"
                            className="bg-gray-900 text-[#fff] px-4 py-2 mt-2 uppercase text-base md:text-xl absolute bottom-3 left-3"
                        >
                            Buyurtma
                        </a>
                    </div>
                    <div
                        className="card w-full sm:w-1/2 md:w-1/3 pb-20 p-5 flex flex-col items-start gap-y-2 px-5 bg-[#fff] text-gray-900 border border-gray-900 hover:scale-x-110 transition relative"
                        data-aos="zoom-in"
                        data-aos-duration="900"
                    >
                        <img src={logo} alt="" className="h-28" loading="lazy" />
                        <h2 className="text-white text-base md:text-xl">So'yib berish</h2>
                        <p className="text-base ">
                            Professional ustalarimiz qo'ylarni{" "}
                            <b className="text-[#8d0b0d]">Shariat va gigiyena</b> talablariga
                            muvofiq <b className="text-[#8d0b0d]">halol</b> ravishda
                            so'yishadi. Har bir jarayonda <b className='text-[#8d0b0d]'>sifat va sanitariya</b> standartlariga
                            qat'iy rioya qilinadi.
                        </p>
                        <a
                            href="#delivery"
                            className="bg-gray-900 text-[#fff] px-4 py-2 mt-2 uppercase text-base md:text-xl absolute bottom-3 left-3"
                        >
                            Buyurtma
                        </a>
                    </div>
                    <div
                        className="card w-full sm:w-1/2 md:w-1/3 pb-20 p-5 flex flex-col items-start gap-y-2 px-5 bg-[#fff] text-gray-900 border border-gray-900 hover:scale-x-110 transition relative"
                        data-aos="zoom-in"
                        data-aos-duration="900"
                    >
                        <img src={logo} alt="" className="h-28" loading="lazy" />
                        <h2 className="text-white text-base md:text-xl">Pishirib berish</h2>
                        <p className="text-base">
                        <b className='text-[#8d0b0d]'>An'anaviy retsept</b>lar asosida kalla pochasi va hasplar
                            tayyorlaymiz. Bizning taomlar bayramlarda va tadbirlarda
                            mehmonlaringizni xursand qilish uchun ideal tanlovdir.
                        </p>
                        <a
                            href="#delivery"
                            className="bg-gray-900 text-[#fff] px-4 py-2 mt-2 uppercase text-base md:text-xl absolute bottom-3 left-3"
                        >
                            Buyurtma
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
