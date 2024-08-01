import React from 'react'
import Image from 'next/image';


interface Props {
  src: File | any;
  video: File | any;
  title: string;
  front: File | any;
  back: File | any;
  description: string;
}

const ProjectCard = ({src, video,  title, front, back, description}: Props) => {
  return (
    <div className='z-[40] '>

    {video ?
     <video loop muted autoPlay className='border rounded-md border-cyan-900' >
  
     <source src={video} />
   </video>
  :
  null
  
  }
    {
      src ?
  <Image width={600} height={600}  className="relative z-10 object-cover w-full h-96 border rounded-md border-cyan-900" src={src} alt={title}/>
  
      :
      null
    }
  
  
  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-neutral-900 dark:bg-opacity-80 ">
      <h2 className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
          {title}
      </h2>
  
      <p className="mt-3   text-neutral-800 dark:text-white ">
          {description}
      </p>
  
      <div className="flex  mt-4 flex-col gap-2 justify-center">
        <p className='text-center font-medium dark:text-white'>Tecnologias utilizadas</p>
        <aside className='flex justify-center gap-10'>
            <Image width={600} height={600} src={front}  alt={title} className='h-12 w-12'/>
            {
              back ? 
              <Image width={40} height={40} src={back}  alt={title} className='h-12 w-12'/>
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




