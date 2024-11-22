"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import image from "@/app/public/image.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const ImageOnLoadAnimation = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useGSAP(() => {
    if (imageRef.current && isLoaded) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 2 }
      );
    }
  }, [isLoaded]);
  return (
    <div
      className="w-full h-[500px]"
      style={{ visibility: isLoaded ? "visible" : "hidden" }}
    >
      <Image
        src={image}
        alt={""}
        ref={imageRef}
        className="w-full h-full object-cover"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
