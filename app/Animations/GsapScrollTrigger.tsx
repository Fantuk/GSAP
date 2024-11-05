import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const GsapScrollTrigger = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const blocks = gsap.utils.toArray("#pink, #red");

    blocks.forEach((block) => {
        gsap.to(block as gsap.TweenTarget, {
            x: 250,
            borderRadius: '100%',
            rotation: 360,
            duration: 2,
            scale: 0.5,
            scrollTrigger: {
                trigger: block as gsap.DOMTarget,
                start: "bottom bottom",
                end: "top top",
                scrub: true,
            },
            ease: "power1.inOut",
        })
    })
  }, []);
  return (
    <div ref={scrollRef} className="mt-20 flex flex-col gap-3 h-screen">
      <div id="pink" className="w-20 h-20 bg-pink-500" />
      <div id="red" className="w-20 h-20 bg-red-500" />
    </div>
  );
};
