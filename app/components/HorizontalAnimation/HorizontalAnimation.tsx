"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const HorizontalAnimation = () => {
  const contentRef = useRef<HTMLUListElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "");
          if (!visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        }
      });
    }, {
        root: null,
        threshold: 0.1,
    });

    if (!contentRef.current) return;
    const items = contentRef.current.children;
    if (items) {
      Array.from(items).map((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, [visibleItems]);
  return (
    <div
      id="container"
      className="w-screen h-screen overflow-hidden mt-10 mb-10"
    >
      <ul ref={contentRef} className="w-full h-full flex items-center gap-4">
        {data.map((item, index) => (
          <li
            className="bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0"
            key={index}
            data-index={index}
            style={{
              opacity: visibleItems.includes(index) ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
