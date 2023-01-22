import React, { useEffect } from "react";
import { techSkills, designSkills } from "./skillList";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="skills" className="container px-3 md:px-8 lg:px-10 mb-5">
      <h1
        data-aos="fade-up"
        className="text-2xl md:text-4xl font-bold subpixel-antialiased pb-5 text-center"
      >
        Skills
      </h1>

      <div className="grid grid-cols-3 gap-1 md:grid-cols-5 lg:grid-cols-8 md:gap-3">
        {techSkills.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`w-full aspect-square p-1 md:p-2 border-solid border rounded-lg border-stone-300 shadow-md`}
          >
            <img
              key={index}
              src={item.img}
              alt="skill image"
              className="block object-contain object-center w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
