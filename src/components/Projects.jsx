import { PROJECTS } from "../constants";

const Projects = () => {
    return(
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">
                Projects
            </h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img src={project.image} 
                            width={250}
                            height={250}
                            alt={project.title}
                            className="mb-6 rounded" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text 2xl">
                                {project.title}
                            </h3>
                            <p className="mb-4 text-stone-400">
                                {project.description}
                            </p>
                            <p className="flex flex-wrap gap-y-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        className="
                                        sm:mr-2 mt-2 sm:mt-4 rounded bg-stone-900
                                        px-2 py-1 text-xs sm:text-sm font-medium text-stone-300
                                        hover:border-stone-100 hover:shadow-[0px_10px_30px_rgba(72,72,192,0.3)]
                                        hover:scale-105
                                        "
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
