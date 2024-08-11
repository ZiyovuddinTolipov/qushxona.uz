/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import logo from '../assets/delivery.png';
import { gsap } from 'gsap';
import $ from 'jquery';

const Card = () => {
    const cardRef = useRef(null);
    const originalPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const card = $(cardRef.current);
        const background = card[0].getBoundingClientRect();
        let mouse = { x: 0, y: 0 };

        const prlx = (mvmt) => {
            gsap.to(card, 0.3, {
                x: (mouse.x - background.width / 2) / background.width * mvmt,
                y: (mouse.y - background.height / 2) / background.height * mvmt,
                overwrite: true,
            });
        };

        const handleMouseMove = (event) => {
            mouse.x = event.clientX - background.left;
            mouse.y = event.clientY - background.top;
            prlx(-30); // Harakat miqdorini o'zgartiring
        };

        const handleMouseEnter = () => {
            gsap.to(card, 0.3, { backgroundColor: "red" });
        };

        const handleMouseLeave = () => {
            gsap.to(card, 0.3, { backgroundColor: "black" }); // Qaytish rangini o'rnating
            gsap.to(card, 0.5, { x: 0, y: 0 }); // Asl joylashuvga qaytarish
        };

        card.mousemove(handleMouseMove);
        card.mouseenter(() => {
            originalPosition.current = card.position(); // Asl joylashuvni saqlash
            handleMouseEnter();
        });
        card.mouseleave(handleMouseLeave);

        return () => {
            card.off('mousemove', handleMouseMove);
            card.off('mouseenter', handleMouseEnter);
            card.off('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div 
            ref={cardRef} 
            className="card w-full sm:w-1/2 md:w-1/3 pb-10 pt-5 flex flex-col items-start gap-y-2 border px-3 bg-[#000] text-white "
            style={{ transform: "translate(0, 0)" }} // Asl holatga qaytish uchun
            data-aos="zoom-in-up"
            data-aos-duration="900"
        >
            <img src={logo} alt="" className="h-28 text-white" />
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
