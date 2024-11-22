import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import kitty from "@/app/public/kitty.jpg";

interface IProps {
  children: React.ReactNode;
}

export const Item = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: `${ref.current.offsetHeight}px 0px 0px 0px`,
      }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible]);
  return <div ref={ref}>{isVisible && <Image src={kitty} alt="kitty" />}</div>;
};
