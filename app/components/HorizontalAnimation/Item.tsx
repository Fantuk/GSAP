import { StaticImageData } from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface IProps {
  src: StaticImageData;
  alt: string;
}

export const Item = ({ src, alt }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    if (imageRef.current && isLoaded) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      );
    }
  }, [isLoaded]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: `200px`,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible]);
  return (
    <li ref={ref} className="w-[1000px] h-[500px] shrink-0">
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          ref={imageRef}
          className="w-full h-full object-cover"
          style={{ visibility: isLoaded ? "visible" : "hidden" }}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </li>
  );
};
