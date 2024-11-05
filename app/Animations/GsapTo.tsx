import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-block", {
      x: 150,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="mt-20">
      <div id="blue-block" className="w-20 h-20 bg-blue-500" />
    </div>
  );
};
