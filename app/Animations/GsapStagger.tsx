import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export const GsapStagger = () => {
    useGSAP(() => {
        gsap.to('.stagger-block', {
            y: 50,
            repeat: -1,
            yoyo: true,
            duration: 2,
            borderRadius: '100%',
            rotation: 360,
            opacity: 0,
            ease: 'power1.inOut',
            // stagger: 0.2,
            stagger: {
                amount: 0.5,
                from: 'center'
            }
        })
    }, [])
  return (
    <div className='mt-20 flex gap-10'>
        <div className='w-20 h-20 bg-pink-500 stagger-block'/>
        <div className='w-20 h-20 bg-pink-500 stagger-block'/>
        <div className='w-20 h-20 bg-pink-500 stagger-block'/>
        <div className='w-20 h-20 bg-pink-500 stagger-block'/>
        <div className='w-20 h-20 bg-pink-500 stagger-block'/>
    </div>
  )
}