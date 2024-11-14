import { EXPERIENCES } from "../constants";
const Experience = () => {
  return (
    <div className="pb-1 pt-1">
      <h2 className="my-20 text-center text-4xl">
        Experience
      </h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 ">
              <p className="mb-2 text-sm text-stone-400 sm:text-1xl">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold sm:text-1xl">
                {experience.role} -{""}
                <span className="text-sm text-stone-500 sm:text-1xl">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400 sm:text-1xl text-justify">
                {experience.description}
              </p>
              <p className="flex flex-wrap gap-y-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-4 rounded bg-stone-900
                              px-2 py-1 text-sm font-medium text-stone-300 hover:border-stone-100
                              transform perspective-[1000px] hover:scale-105 hover:shadow-[0px_10px_30px_rgba(72,72,192,0.3)]"
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
  );
};

export default Experience;
