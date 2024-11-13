"use client";
import React, { useRef } from "react";
import Image from "next/image";
import image from "@/app/public/image.jpg";
import gsap from "gsap";

export const ImageOnLoadAnimation = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const imageOnLoad = () => {
        if (!imageRef.current) return;
        gsap.fromTo(
            imageRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3 }
        );
    };
    return (
        <Image
            ref={imageRef}
            src={image}
            alt={""}
            placeholder="blur"
            onLoad={imageOnLoad}
        />
    );
};
