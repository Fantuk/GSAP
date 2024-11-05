import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const GsapText = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".p",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div>
      <h1 id="heading" className="text-3xl">
        Hello
      </h1>
      <div>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          dignissimos reprehenderit. Vero quos veritatis ducimus quod ab placeat
          reprehenderit repellendus soluta ratione nostrum, pariatur expedita
          nisi quaerat corporis blanditiis ad?
        </p>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          dignissimos reprehenderit. Vero quos veritatis ducimus quod ab placeat
          reprehenderit repellendus soluta ratione nostrum, pariatur expedita
          nisi quaerat corporis blanditiis ad?
        </p>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          dignissimos reprehenderit. Vero quos veritatis ducimus quod ab placeat
          reprehenderit repellendus soluta ratione nostrum, pariatur expedita
          nisi quaerat corporis blanditiis ad?
        </p>
      </div>
    </div>
  );
};
