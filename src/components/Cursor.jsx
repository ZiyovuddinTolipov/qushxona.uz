import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.35;

        const xSet = gsap.quickSetter(cursorRef.current, "x", "px");
        const ySet = gsap.quickSetter(cursorRef.current, "y", "px");

        const mouseMoveHandler = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        window.addEventListener("mousemove", mouseMoveHandler);

        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });

        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return <div id="cursor" ref={cursorRef} className="cursor"></div>;
};

export default Cursor;
