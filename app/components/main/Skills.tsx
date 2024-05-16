import { skills_data } from "@/app/json/skills"
import SkillCard from "../sub/SkillCard"

const Skills = () => {
  return (
    <div className='text-2xl text-white z-[20]  justify-center mt-24 grid grid-cols-3 gap-10 w-6/12 m-auto' id="skills">
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
  )
}

export default Skills