"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Masonry from 'react-masonry-css'

export const Section_2 = () => {
  return (
    <section className="mt-20 w-full grid grid-cols-2 gap-4">
      <div className="w-full h-[500px] bg-slate-400" />
        <Masonry className="w-full flex ">

        </Masonry>
    </section>
  )
}
