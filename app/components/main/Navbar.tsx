import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-gradient-to-r from-[#03001417] via-cyan-600 to-cyan-800 backdrop-blur-md z-50 px-10">
    <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
      <a
        href="#about-me"
        className="h-auto w-auto flex flex-row items-center"
      >
 

        <span className="font-bold ml-[10px] hidden md:block text-gray-300">
       Lucio Schiavoni
        </span>
      </a>

      <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            Sobre mi
          </a>
          <a href="#skills" className="cursor-pointer">
            Habilidades
          </a>
          <a href="#projects" className="cursor-pointer">
            Proyectos
          </a>
        </div>
      </div>
    <div className='flex flex-row gap-5'>
    <Link target='_blank' href='https://github.com/LucioSchiavoni' className='hover:scale-110 transition-all delay-150 duration-300'>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" className='h-10 w-10' />
    </Link>
    <Link target='_blank' href='https://www.linkedin.com/in/lucioschiavoni' className='hover:scale-110 transition-all delay-150 duration-300'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className='h-10 w-10' />
      </Link>
      
    </div>
     
    </div>
  </div>
  )
}

export default Navbar