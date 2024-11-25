"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export const Hero = () => {
  const ref = useRef(null)
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(ref.current, {
      y: -50,
      opacity: 0,
      duration: 5,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })
  }, [])
  return (
    <section ref={ref} className='w-full h-[600px] bg-slate-400 rounded-3xl'/>
  )
}
