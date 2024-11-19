"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export const Section_1 = () => {
  return (
    <section className="mt-20 w-full flex gap-4 flex-wrap">
      <div className="max-w-[300px] w-full h-[300px] bg-slate-400" />
      <div className="max-w-[300px] w-full h-[300px] bg-slate-400" />
      <div className="max-w-[300px] w-full h-[300px] bg-slate-400" />
      <div className="max-w-[300px] w-full h-[300px] bg-slate-400" />
      <div className="max-w-[300px] w-full h-[300px] bg-slate-400" />
    </section>
  );
};
