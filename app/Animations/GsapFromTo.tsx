import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#yellow-block",
      {
        x: 0,
        rotation: 0,
      },
      {
        x: 150,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        borderRadius: '100%',
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div className="mt-20">
      <div id="yellow-block" className="w-20 h-20 bg-yellow-500" />
    </div>
  );
};
