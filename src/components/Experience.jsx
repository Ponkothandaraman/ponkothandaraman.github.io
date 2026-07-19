import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-1 pt-1">
      <h2 className="my-20 text-center text-4xl">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto">
        {EXPERIENCES.map((companyExp, index) => (
          <div key={index} className="mb-16">
            {/* Company Name Header */}
            <h3 className="mb-6 text-2xl font-bold text-stone-200 border-b border-stone-800 pb-2">
              {companyExp.company}
            </h3>

            {/* List of Roles under this Company */}
            <div className="space-y-10 pl-2 md:pl-6">
              {companyExp.roles.map((role, roleIdx) => (
                <div key={roleIdx} className="flex flex-col">
                  {/* Role Title and Date Range Row */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">
                    <h4 className="text-xl font-semibold text-stone-300">
                      {role.role}
                    </h4>
                    <span className="text-sm text-stone-400 font-medium whitespace-nowrap">
                      {role.year}
                    </span>
                  </div>

                  {/* Bullet Points description */}
                  {Array.isArray(role.description) ? (
                    <ul className="list-disc pl-5 mb-4 text-stone-400 sm:text-base text-justify space-y-2">
                      {role.description.map((bullet, bulletIdx) => (
                        <li key={bulletIdx}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mb-4 text-stone-400 sm:text-base text-justify">
                      {role.description}
                    </p>
                  )}

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 hover:border-stone-100
                                  transform perspective-[1000px] hover:scale-105 hover:shadow-[0px_10px_30px_rgba(72,72,192,0.3)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
