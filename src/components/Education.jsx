import { education } from '../constants';

const Education = () => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-16">
      <h2 className="my-10 text-center text-4xl lg:my-20">
        Education
      </h2>

      <div className="grid gap-8 md:gap-10 md:grid-cols-2 w-full max-w-4xl">
        {education.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center md:items-start bg-neutral-900/50 border border-stone-700 
                      rounded-xl p-6 shadow-lg transition-all duration-500 transform hover:scale-105 
                      hover:shadow-[0px_10px_30px_rgba(72,72,192,0.3)]"
          >
            {/* Top Section - Image and Info for mobile */}
            <div className="flex flex-col md:flex-row w-full items-center md:items-center">
              {/* Left Section - Image */}
              <div className="w-20 h-20 flex-shrink-0 mx auto md:mx-0mb-4 md:mb-0 md:mr-6">
                <img
                  src={item.img}
                  alt={item.school}
                  className="w-full h-full rounded-full border border-stone-700"
                />
              </div>

              {/* Right Section - School, Degree, and Date */}
              <div className="flex flex-col md:items-start text-center md:text-left">
                <h3 className="text-lg font-semibold text-stone-200">{item.school}</h3>
                <p className="text-base text-stone-400 mt-1">{item.degree}</p>
                <span className="text-sm text-stone-400">{item.date}</span>
              </div>
            </div>

            {/* Bottom Section - Grade and Description */}
            <div className="mt-4 w-full text-center md:text-left">
              <p className="text-sm text-stone-400">Grade: {item.grade}</p>
              <p className="text-sm text-stone-400 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
