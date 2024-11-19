"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const HorizontalAnimation = () => {
    const contentRef = useRef<HTMLUListElement>(null)
    useGSAP(() => {
        if (!contentRef.current) return;
        const contentGap = contentRef.current 
            ? parseInt(window.getComputedStyle(contentRef.current).gap) : 0;

        const scrollbarWidth = (window.innerWidth - document.documentElement.clientWidth) 
        const contentWidth = contentRef.current.scrollWidth - contentRef.current.offsetWidth + scrollbarWidth
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(contentRef.current, {
            x: contentGap
        },
         {
            scrollTrigger: {
                trigger: '#container',
                start: 'top top',
                end: '+=100%',
                pin: true,
                scrub: 1
            },
            x: -contentWidth - contentGap,
            ease: 'none'
        })
    }, [])
  return (
    <div id='container' className='w-screen h-screen overflow-hidden mt-10 mb-10'>
        <ul ref={contentRef} className='w-full h-full flex items-center gap-4'>
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
