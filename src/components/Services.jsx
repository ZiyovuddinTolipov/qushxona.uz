/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import delivery from "../assets/delivery.png";
import truck from "../assets/3d-truck.png"
import meat from "../assets/meat.png"
const Services = () => {
    return (
        <section
            className=" bg-[#F9F0E7] border-t-4 border-t-[#000] px-5 md:px-0"
            id="service"
        >
            <div className="max-w-[1200px] h-auto  mx-auto pt-16">
                <div className="flex flex-col md:flex-row py-10  justify-between gap-3 px-0 md:px-5">

                    <a id="delivery" className="w-full md:w-1/3">
                    <div className="relative overflow-hidden rounded-xl aspect-square border bg-[#fff] border-[#8d0b0d] lg:aspect-square lg:px-9 lg:py-8 md:aspect-[4/3] p-6 shadow-practicum sm:aspect-square text-black xs:aspect-video w-full ">
                        <p className="text-sm text-black mb-3">Qushxona Express</p>
                        <div className="relative z-20">
                            <h4 className="font-semibold text-2xl font-heading mb-9 text-black">
                                Yetkazib berish
                            </h4>
                            <div
                                className="flex items-center gap-2 text-lg text-primary uppercase"
                                tabIndex={0}
                            >
                                <span>Buyurtma berish</span>{" "}
                                <svg
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    data-icon="arrow-right"
                                    className="h-6 w-6"
                                >
                                    <use href="#ai:local:arrow-right" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex gap-2 absolute bottom-8 left-6 md:bottom-11 md:left-9 z-20" />
                        <figure className="w-full absolute -bottom-16 h-[80%] lg:max-w-[320px] max-w-[80%] right-0 select-none">
                            <span className="relative w-full block before:absolute before:bg-[#8d0b0d76] before:blur-[100px] before:h-[200px] before:left-[50px] before:top-[50px] before:w-[200px]" />
                            <picture>
                                <source
                                    srcSet={`${truck} 100w,  ${truck} 150w,  ${truck} 200w`}
                                    sizes="(min-width: 480px, min-width: 640px, min-width: 768px, min-width: 1024px, min-width: 1280px)"
                                    type="image/webp"
                                />
                                <img
                                    alt="Computer Vision"
                                    src={truck}
                                    loading="lazy"
                                    className="relative z-10"
                                    height="200"
                                    width="200"
                                    decoding="async"
                                    sizes="(min-width: 480px, min-width: 640px, min-width: 768px, min-width: 1024px, min-width: 1280px)"
                                    srcSet={`${truck} 150w,  ${truck} 200w,  ${truck} 320w`}
                                />
                            </picture>
                        </figure>
                    </div>
                    </a>
                    <a href="#delivery" className="w-full md:w-1/3">
                    <div className="relative overflow-hidden rounded-xl aspect-square border bg-[#fff] border-[#8d0b0d] lg:aspect-square lg:px-9 lg:py-8 md:aspect-[4/3] p-6 shadow-practicum sm:aspect-square text-black xs:aspect-video w-full ">
                        <p className="text-sm text-black mb-3">Qassoblik hizmati</p>
                        <div className="relative z-20">
                            <h4 className="font-semibold text-2xl font-heading mb-9 text-black">
                                So'yib berish
                            </h4>
                            <div
                                className="flex items-center gap-2 text-lg text-primary uppercase"
                                tabIndex={0}
                            >
                                <span>Buyurtma berish</span>{" "}
                                <svg
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    data-icon="arrow-right"
                                    className="h-6 w-6"
                                >
                                    <use href="#ai:local:arrow-right" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex gap-2 absolute bottom-8 left-6 md:bottom-11 md:left-9 z-20" />
                        <figure className="w-full absolute -bottom-16 h-[80%] lg:max-w-[320px] max-w-[80%] right-0 select-none">
                            <span className="relative w-full block before:absolute before:bg-[#8d0b0d76] before:blur-[100px] before:h-[200px] before:left-[50px] before:top-[50px] before:w-[200px]" />
                            <picture>
                                <source
                                    srcSet={`${meat} 150w,  ${meat} 200w,  ${meat} 320w`}
                                    sizes="(min-width: 480px, min-width: 640px, min-width: 768px, min-width: 1024px, min-width: 1280px)"
                                    type="image/webp"
                                />
                                <img
                                    alt="Computer Vision"
                                    src={meat}
                                    loading="lazy"
                                    className="relative z-10"
                                    height="200"
                                    width="200"
                                    decoding="async"
                                    sizes="(min-width: 480px, min-width: 640px, min-width: 768px, min-width: 1024px, min-width: 1280px)"
                                    srcSet={`${meat} 150w,  ${meat} 200w,  ${meat} 320w`}
                                />
                            </picture>
                        </figure>
                    </div>
                    </a>
                    <a href="#delivery" className="w-full md:w-1/3">
                    <div className="relative overflow-hidden rounded-xl aspect-square border bg-[#fff] border-[#8d0b0d] lg:aspect-square lg:px-9 lg:py-8 md:aspect-[4/3] p-6 shadow-practicum sm:aspect-square text-black xs:aspect-video w-full ">
                        <p className="text-sm text-black mb-3">Qushxona.uz</p>
                        <div className="relative z-20">
                            <h4 className="font-semibold text-2xl font-heading mb-9 text-black">
                                Pishirib berish.
                            </h4>
                            <div
                                className="flex items-center gap-2 text-lg text-primary uppercase"
                                tabIndex={0}
                            >
                                <span>Buyurtma berish</span>{" "}
                                <svg
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    data-icon="arrow-right"
                                    className="h-6 w-6"
                                >
                                    <use href="#ai:local:arrow-right" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex gap-2 absolute bottom-8 left-6 md:bottom-11 md:left-9 z-20" />
                        <figure className="w-full absolute -bottom-4 h-[80%] lg:max-w-[320px] max-w-[80%] right-0 select-none">
                            <span className="relative w-full block before:absolute before:bg-[#8d0b0d76] before:blur-[100px] before:h-[200px] before:left-[50px] before:top-[50px] before:w-[200px]" />
                            <picture>
                                <source
                                    srcSet={`${delivery} 150w,  ${delivery} 200w,  ${delivery} 320w`}
                                    sizes="(min-width: 480px, min-width: 640px, min-width: 768px, min-width: 1024px, min-width: 1280px)"
                                    type="image/webp"
                                />
                                <img
                                    alt="Qushxona.uz pishirib berish xizmati"
                                    src=" ${delivery}"
                                    loading="lazy"
                                    className="relative z-10"
                                    height="1080"
                                    width="1080"
                                    decoding="async"
                                    sizes="(min-width: 480px, min-width: 640px, min-width: 768px, min-width: 1024px, min-width: 1280px)"
                                    srcSet={`${delivery} 150w,  ${delivery} 200w,  ${delivery} 320w`}
                                />
                            </picture>
                        </figure>
                    </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
