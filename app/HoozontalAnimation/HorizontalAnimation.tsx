"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const HorizontalAnimation = () => {
  const contentRef = useRef<HTMLUListElement>(null);
  const items = useRef<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useGSAP(() => {
    if (!contentRef.current) return;

    const contentWidth = contentRef.current.scrollWidth;
    const itemWidth = contentWidth / items.current.length;

    const shiftArray = () => {
      const content = contentRef.current;
      if (content && content.children.length > 0) {
        const lastChild = content.lastElementChild;
        if (lastChild) {
          content.insertBefore(lastChild, content.firstChild);
        }
      }
    };

    const animation = gsap.fromTo(
      contentRef.current,
      { x: -itemWidth },
      {
        x: 0,
        ease: "none",
        repeat: -1,
        duration: 3,
        onRepeat: shiftArray,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="w-screen overflow-hidden flex flex-col gap-8">
      <ul ref={contentRef} className="flex gap-2 w-[200%]">
        {items.current.map((el, index) => (
          <li className="w-[100%]" key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
