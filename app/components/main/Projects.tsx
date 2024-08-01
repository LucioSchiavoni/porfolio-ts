import { projects_data } from "@/app/json/projects"
import ProjectCard from "../sub/ProjectCard"


const Projects = () => {
  return (
    
    <div  className="flex flex-col items-center justify-center py-20"
      id="projects">
       

            <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-cyan-500 text-center py-10"> Mis   proyectos  
      </h1>

      
    
    <div className='grid grid-cols-2  w-11/12 gap-24 m-auto '>

        {
            projects_data.map((item, index) => (
              
                  <ProjectCard video={item.video} src={item.image} title={item.name} description={item.description} front={item.front} back={item.back}/>
              
            
            ))
        }
    </div>
    </div>
  )
}

export default Projects