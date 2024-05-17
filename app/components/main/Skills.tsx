import { skills_data } from "@/app/json/skills"
import SkillCard from "../sub/SkillCard"

const Skills = () => {
  return (
    <section className="py-28" id="skills" >
        <h1 className="text-transparent text-3xl font-semibold text-center  text-white ">Para la creacion de proyectos utilizo</h1>
    <div className='text-2xl text-white z-[20]  justify-center mt-24 gap-4 flex w-6/12 m-auto py-20' >
    
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

    </section>

  )
}

export default Skills