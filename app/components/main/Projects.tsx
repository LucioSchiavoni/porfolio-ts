import { projects_data } from "@/app/json/projects"

const Projects = () => {
  return (
    <div className='grid grid-cols-2 gap-5 mt-24 w-6/12 m-auto ' id="projects">
        {
            projects_data.map((item, index) => (
                <div className="backdrop-blur py-4 button-primary text-center text-white cursor-pointer  font-semibold  gap-10 flex flex-col justify-center items-center hover:scale-110 transition-all delay-150 duration-300  p-6 rounded-md shadow-xl " key={index}>
                    <h2>{item.name}</h2>
                    <p>{item.image}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Projects