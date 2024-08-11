import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const sections = gsap.utils.toArray(cardsRef.current);

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: "+=3000"
            }
        });

        sections.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 50 * i }, // Har bir karta boshida yuqoriroqda joylashadi
                { 
                    y: 0,  // Scroll davomida pastga tushadi
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: scrollTween,
                        start: "left center",
                        scrub: true,
                        id: `card-${i + 1}`,
                    }
                }
            );
        });

    }, []);

    return (
        <section className="bg-white border-t-4 border-t-[#000]" id="service">
            <div className="max-w-[1200px] h-[90svh] mx-auto pt-16">
                <h1 className="text-3xl">#02 Hizmatlarimiz.</h1>
                <div
                    ref={containerRef}
                    className="mt-10 flex fle-col overflow-x-hidden relative"
                >
                    {[...Array(3)].map((_, i) => (
                        <div 
                            key={i}
                            ref={el => cardsRef.current[i] = el}
                            className="panel">
                            <Card />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
