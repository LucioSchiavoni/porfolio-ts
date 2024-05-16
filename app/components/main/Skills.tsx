import { skills_data } from "@/app/json/skills"

const Skills = () => {
  return (
    <div className='text-2xl text-white z-[20]  justify-center mt-24 grid grid-cols-3 gap-10 w-6/12 m-auto' id="skills">
        {
        skills_data.map((item, index) => (
            <div key={index} className="backdrop-blur py-4 button-primary text-center text-white cursor-pointer max-w-[200px] font-semibold  gap-5 flex flex-col justify-center items-center hover:scale-110 transition-all delay-150 duration-300  p-6 rounded-md shadow-xl">
                <img src={item.image} alt="img-skills" className="" width={100} />
                <p className="text-center">{item.name}</p>
            </div>
        ))
    }</div>
  )
}

export default Skills