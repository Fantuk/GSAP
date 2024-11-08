"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const HorizontalAnimation = () => {
  useGSAP(() => {
    gsap.from("#right", {
      xPercent: -52.5,
      ease: "none",
      repeat: -1,
      duration: 10,
    });
    gsap.to("#left", {
        xPercent: -52.5,
        ease: "none",
        repeat: -1,
        duration: 10,
      });
  }, []);
  return (
    <div className="w-full overflow-hidden flex flex-col gap-8">
      <ul id="right" className="flex gap-2 justify-between w-[200%]">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
      <ul id="left" className="flex gap-2 justify-between w-[200%]">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
    </div>
  );
};
