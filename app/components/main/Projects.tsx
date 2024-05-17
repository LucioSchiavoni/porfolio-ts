import { projects_data } from "@/app/json/projects"
import ProjectCard from "../sub/ProjectCard"
import {motion} from 'framer-motion'
import { slideInFromLeft } from "@/utils/motion"

const Projects = () => {
  return (
    <div  className="flex flex-col items-center justify-center py-20"
      id="projects">
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-500 text-center"> Mis   proyectos  
      </h1>

    <div className='grid grid-cols-2 gap-5  w-6/12 m-auto '>

        {
            projects_data.map((item, index) => (
              <ProjectCard  src={item.image} title={item.name} description={item.description} front={item.front} back={item.back}/>
            ))
        }
    </div>
    </div>
  )
}

export default Projects