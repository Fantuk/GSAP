import React, { useState, useEffect, useRef } from "react";

interface IProps {
  children: React.ReactNode;
}

export const Item = ({ children }: IProps) => {
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
        rootMargin: `${ref.current.offsetWidth}px 0px 0px 0px`,
      }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible]);
  return <div ref={ref}>{isVisible && children}</div>;
};
