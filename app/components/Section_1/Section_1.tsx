"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Section_1 = () => {
  const blockRef = useRef<HTMLDivElement[]>([]);
  
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !blockRef.current.includes(el)) {
      blockRef.current.push(el);
    }
  };

  useGSAP(() => {
    blockRef.current.map((block, index) => {
      gsap.fromTo(
        block as HTMLElement,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          duration: 2,
          delay: index * 0.3,
          y: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: block as HTMLElement,
            start: "top 90%",
            end: "bottom top",
          },
        }
      );
    });
  }, []);
  return (
    <section className="mt-44 flex justify-center gap-4 flex-wrap mx-[auto]">
      <div
        ref={addToRefs}
        className="max-w-[300px] w-full h-[300px] bg-slate-400 rounded-3xl"
      />
      <div
        ref={addToRefs}
        className="max-w-[300px] w-full h-[300px] bg-slate-400 rounded-3xl"
      />
      <div
        ref={addToRefs}
        className="max-w-[300px] w-full h-[300px] bg-slate-400 rounded-3xl"
      />
      <div
        ref={addToRefs}
        className="max-w-[300px] w-full h-[300px] bg-slate-400 rounded-3xl"
      />
      <div
        ref={addToRefs}
        className="max-w-[300px] w-full h-[300px] bg-slate-400 rounded-3xl"
      />
    </section>
  );
};
