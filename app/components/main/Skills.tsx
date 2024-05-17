import { skills_data } from "@/app/json/skills"
import SkillCard from "../sub/SkillCard"



const Skills = () => {
  return (
   <section
    className="flex flex-row items-center justify-center px-20 mt-40 py-20  w-full z-[20]"
   id="skills" >

    <div className="flex flex-col text-center ">
       
         <span className="text-transparent bg-clip-text bg-gradient-to-r text-4xl font-semibold from-indigo-800 to-cyan-500">
          {" "}
          Para la creacion de proyectos utilizo {" "}
          </span>
       

    <div className='text-2xl text-white z-[20]  justify-center mt-24 gap-4 flex w-6/12 m-auto ' >
    
        {
        skills_data.map((item, index) => (
            <SkillCard 
            src={item.image}
            index={index}
            width={100}
            height={100}
            />
        ))
    }</div>
 </div>
    </section>

  )
}

export default Skills