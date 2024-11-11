"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StickyAnimation = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!boxRef.current || !containerRef.current) return;
        const containerHeight =
            containerRef.current?.getBoundingClientRect().height;
        const boxHeight = boxRef.current?.getBoundingClientRect().height;
        gsap.to(boxRef.current, {
            scrollTrigger: {
                trigger: boxRef.current,
                start: "-=15px top",
                end: `+=${containerHeight - boxHeight}`,
                scrub: 1,
                pin: true,
            },
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-[400px] overflow-hidden relative border border-black"
        >
            <div ref={boxRef} className="w-10 h-10 bg-red-500"></div>
        </div>
    );
};

export default StickyAnimation;
