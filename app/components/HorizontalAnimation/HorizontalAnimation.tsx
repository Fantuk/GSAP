"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Item } from "./Item";

export const HorizontalAnimation = () => {
  const contentRef = useRef<HTMLUListElement>(null);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
          end: "+=100%",
          pin: true,
          scrub: 1,
        },
        x: -contentWidth - contentGap,
        ease: "none",
      }
    );
  }, []);
  return (
    <div
      id="container"
      className="w-screen h-screen overflow-hidden mt-10 mb-10"
    >
      <ul ref={contentRef} className="w-full h-full flex items-center gap-4">
        {data.map((item, index) => (
          <li
            key={index}
            className="bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0"
          >
            <Item>{item}</Item>
          </li>
        ))}
      </ul>
    </div>
  );
};
