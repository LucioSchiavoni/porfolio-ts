import React from 'react'
import Image from 'next/image';


interface Props {
  src: string | undefined;
  video: string | undefined;
  title: string;
  front: string | undefined;
  back: string | undefined;
  description: string;
}

const ProjectCard = ({src, video,  title, front, back, description}: Props) => {
  return (
    <div className='z-[40] '>

    {video ?
     <video muted autoPlay className='border rounded-md border-cyan-900' >
  
     <source src={video} />
   </video>
  :
  null
  
  }
    {
      src ?
  <img className="relative z-10 object-cover w-full h-96 border rounded-md border-cyan-900" src={src} alt={title}/>
  
      :
      null
    }
  
  
  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
      <h2 className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
          {title}
      </h2>
  
      <p className="mt-3   text-neutral-800 dark:text-gray-300 ">
          {description}
      </p>
  
      <div className="flex  mt-4 flex-col gap-2 justify-center">
        <p className='text-center font-medium '>Tecnologias utilizadas</p>
        <aside className='flex justify-center gap-10'>
            <img src={front}  alt={title} className='h-12 w-12'/>
            {
              back ? 
              <img src={back}  alt={title} className='h-12 w-12'/>
              :
              null
            }
     
        </aside>
    
      </div>
  </div>
  </div>
  )
}

export default ProjectCard




