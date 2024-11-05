import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export const GsapFrom = () => {
    useGSAP(() => {
        gsap.from('#green-block', {
            x: 150,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'power1.inOut',
        })
    }, [])
  return (
    <div className='mt-20'>
        <div id='green-block' className='w-20 h-20 bg-green-500'/>
    </div>
  )
}
