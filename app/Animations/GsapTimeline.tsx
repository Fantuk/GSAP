import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const GsapTimeline = () => {
  const timeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

  useGSAP(() => {
    timeline.to('#red-block', {
        x: 250,
        rotate: 360,
        duration: 2,
        borderRadius: '100%',
        ease: "power1.inOut",
    })

    timeline.to('#red-block', {
        x: 600,
        scale: 2,
        rotation: 360,
        borderRadius: '10px',
        duration: 2,
        ease: "power1.inOut",
    })

    timeline.to('#red-block', {
        y: -100,
        scale: 0.5,
        rotation: -360,
        borderRadius: '0px',
        duration: 1,
        ease: "power1.inOut",
    })
  }, [])
  return (
    <div className="mt-20 flex flex-col gap-3">
      <button onClick={() => {
        if (timeline.isActive()) {
          timeline.pause();
        } else {
          timeline.resume();
        }
      }} className="w-24 h-10 bg-red-500 text-white">
        Play/Pause
      </button>
      <div id="red-block" className="w-20 h-20 bg-red-500" />
    </div>
  );
};
