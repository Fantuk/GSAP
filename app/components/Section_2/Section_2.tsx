"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Masonry from "react-masonry-css";

export const Section_2 = () => {
  const titleRef = useRef(null);
  const blockRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

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
    if (!stickyRef.current || !containerRef.current) return;
    const containerHeight =
      containerRef.current?.getBoundingClientRect().height;
    const boxHeight = stickyRef.current?.getBoundingClientRect().height;
    gsap.fromTo(
      stickyRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: stickyRef.current,
          start: "top 90%",
        },
      }
    );
    gsap.to(stickyRef.current, {
      scrollTrigger: {
        trigger: stickyRef.current,
        start: "-=15px top",
        end: `+=${containerHeight - boxHeight}`,
        scrub: 1,
        pin: true,
      },
    });
  }, []);

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
          duration: 1.5,
          delay: index * 0.3,
          y: 0,
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
    <section className="mt-44 mx-[auto]">
      <div className="overflow-hidden">
        <h2 ref={titleRef} className="text-6xl font-bold">
          Section 2
        </h2>
      </div>
      <div
        ref={containerRef}
        className="w-full grid grid-cols-2 gap-4 justify-center mt-5"
      >
        <div
          ref={stickyRef}
          className="w-full h-[400px] bg-slate-400 rounded-3xl"
        />
        <Masonry
          className="flex gap-4"
          columnClassName="flex flex-col gap-4 w-[auto]"
        >
          <div
            ref={addToRefs}
            className="w-[300px] h-[450px] bg-slate-400 rounded-3xl"
          />
          <div
            ref={addToRefs}
            className="w-[300px] h-[500px] bg-slate-400 rounded-3xl"
          />
          <div
            ref={addToRefs}
            className="w-[300px] h-[350px] bg-slate-400 rounded-3xl"
          />
          <div
            ref={addToRefs}
            className="w-[300px] h-[400px] bg-slate-400 rounded-3xl"
          />
          <div
            ref={addToRefs}
            className="w-[300px] h-[450px] bg-slate-400 rounded-3xl"
          />
          <div
            ref={addToRefs}
            className="w-[300px] h-[500px] bg-slate-400 rounded-3xl"
          />
        </Masonry>
      </div>
    </section>
  );
};
