"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const HorizontalAnimation = () => {
  const contentRef = useRef<HTMLUListElement>(null);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useGSAP(() => {
    if (!contentRef.current) return;
    const contentWidth = contentRef.current.scrollWidth / 2;
    const itemWidth = contentWidth / data.length;

    gsap.fromTo(
      contentRef.current,
      {
        x: -contentWidth,
      },
      {
        x: itemWidth / 2,
        ease: "none",
        repeat: -1,
        duration: 10,
      }
    );
  }, []);

  return (
    <div className="w-screen overflow-hidden flex flex-col gap-8">
      <ul ref={contentRef} className="flex gap-2 justify-between w-[200%]">
        {[...data, ...data].map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
