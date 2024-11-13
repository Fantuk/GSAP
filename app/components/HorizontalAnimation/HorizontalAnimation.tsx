"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const HorizontalAnimation = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('#content', {
            scrollTrigger: {
                trigger: '#container',
                start: 'top top',
                end: '+=100%',
                pin: true,
                scrub: 1
            },
            x: '-80%',
            ease: 'none'
        })
    })
  return (
    <div id='container' className='w-screen h-screen overflow-hidden mt-10 mb-10'>
        <ul id='content' className='w-full h-full flex items-center gap-4'>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 1</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 2</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 3</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 4</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 5</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 6</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 7</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 8</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 9</li>
            <li className='bg-red-500 h-[300px] w-[200px] flex items-center justify-center shrink-0'>Item 10</li>
        </ul>
    </div>
  )
}
