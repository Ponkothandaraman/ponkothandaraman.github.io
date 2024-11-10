import { skills } from "../constants";

const Skills = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h2 className="my-4 text-center text-4xl">Technical skills</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 justify-center mt-8 px-0 lg:px-36">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full bg-neutral-900/70 backdrop-blur-md
                                        border border-stone-800 hover:border-stone-600
                                        rounded-xl p-6 transition-all duration-500
                                        transform perspective-[1000px] hover:scale-105 hover:shadow-[0px_10px_30px_rgba(72,72,192,0.3)]"
          >
            <h3 className="text-1xl font-semibold text-stone-200 mb-5 text-center">
              {skill.title}
            </h3>

            <div className="flex justify-center flex-wrap gap-4 ">
              {skill.skills.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center justify-center gap-2
                                                    text-base md:text-sm text-stone-300
                                                    border border-stone-700 hover:border-indigo-400
                                                    bg-neutral-900/40
                                                    rounded-lg px-4 py-2
                                                    transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-6 h-6 object-contain text-1xl"
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
