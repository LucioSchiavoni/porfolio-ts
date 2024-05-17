import React from 'react'
import Image from 'next/image';


interface Props {
  src: string | undefined;
  title: string;
  front: string | undefined;
  back: string | undefined;
  description: string;
}

const ProjectCard = ({src, title, front, back, description}: Props) => {
  return (
    <div  className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <img 
            src={src}
            alt={title}
             width={1000}
            height={1000}
            className='w-full object-contain'
            />
            <div className='relative p-8'>
                <h1 className="text-2xl font-semibold text-white">
                    {title}
                </h1>
                <div className='flex py-4 gap-5 '>
                      <img src={front} alt='front' className='w-12 h-12' />
              <img src={back} alt='back' className='w-12 h-12' />
                </div>
          
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
    </div>  
  )
}

export default ProjectCard