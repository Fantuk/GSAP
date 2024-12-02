"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Item } from "./Item";
import { images } from "@/app/data/horizontalScroll";

export const HorizontalAnimation = () => {
  const contentRef = useRef<HTMLUListElement>(null);
  useGSAP(() => {
    if (!contentRef.current) return;
    const contentGap = contentRef.current
      ? parseInt(window.getComputedStyle(contentRef.current).gap)
      : 0;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const contentWidth =
      contentRef.current.scrollWidth -
      contentRef.current.offsetWidth +
      scrollbarWidth;
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      contentRef.current,
      {
        x: contentGap,
      },
      {
        scrollTrigger: {
          trigger: "#container",
          start: "top top",
          end: `+=${contentWidth / 2}`,
          pin: true,
          scrub: 1,
        },
        x: -contentWidth - contentGap,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div
      id="container"
      className="w-screen h-screen overflow-hidden mt-10 mb-10"
    >
      <ul ref={contentRef} className="w-full h-full flex items-center gap-4">
        {images.map((item, index) => (
          <Item key={index} src={item.image} alt={item.alt} />
        ))}
      </ul>
    </div>
  );
};
