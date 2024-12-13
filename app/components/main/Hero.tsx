import React from 'react'
import HeroContent from '../sub/HeroContent'
import Skills from './Skills'
import Projects from './Projects'
import { HeroVideo } from '../sub/HeroVideo'

const Hero = () => {
  return (
    <div className='' id='about-me'>
        {/* <video 
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover'
        >

        <source src="/blackhole.webm" type="video/webm" />

        </video> */}
        <HeroContent/>
        <Skills/>
           <HeroVideo/>
          <Projects/>
       
    </div>
  )
}

export default Hero