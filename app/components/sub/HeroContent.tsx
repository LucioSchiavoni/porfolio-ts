"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import {motion} from 'framer-motion'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
  >
    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px]  border-[#7042f88b] opacity-[0.9]" >
     
        <h1 className=" text-3xl text-white font-semibold ">
          Bienvenido! 
        </h1>
      </motion.div>
    
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
      >
        <span>
          Soy
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-cyan-500">
            {" "}
           Lucio Schiavoni{" "}
          </span>
        </span>
      </motion.div>

      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-2xl text-gray-400 my-5 max-w-[600px]"
      >
      
      </motion.p>
      <motion.a
        variants={slideInFromLeft(1)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      >
      Desarrollador Full Stack
      </motion.a>
    </div>

    <motion.div
      variants={slideInFromRight(0.8)}
      className="w-full h-full flex justify-center items-center"
    >
      <Image
        src="/perfil.jpeg"
        alt="work icons"
        height={600}
        width={400}
        className='rounded-2xl'
      />
    </motion.div>
  </motion.div>
  )
}

export default HeroContent