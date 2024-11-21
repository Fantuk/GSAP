"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Section_3 = () => {
  const titleRef = useRef(null);
  const blockRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !blockRef.current.includes(el)) {
      blockRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (!titleRef.current) return;
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
      },
      {
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  useGSAP(() => {
    blockRef.current.map((block, index) => {
      gsap.fromTo(
        block as HTMLElement,
        {
          opacity: 0,
          x: `${index % 2 === 0 ? 100 : -100}%`,
        },
        {
          opacity: 1,
          duration: 1,
          x: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: block as HTMLElement,
            start: "top 70%",
            end: "bottom top",
          },
        }
      );
    });
  }, []);
  return (
    <section className="mt-44 flex flex-col gap-8">
      <div className="overflow-hidden">
        <h2 ref={titleRef} className="text-6xl font-bold">
          Section 3
        </h2>
      </div>
      <div
        ref={addToRefs}
        className="w-full h-[400px] bg-slate-400 rounded-3xl"
      />
      <div
        ref={addToRefs}
        className="w-full h-[400px] bg-slate-400 rounded-3xl"
      />
    </section>
  );
};
