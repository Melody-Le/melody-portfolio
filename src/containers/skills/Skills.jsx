import React from "react";
import { techSkills, designSkills } from "./skillList";

function Skills() {
  return (
    <div id="skills" className="container px-[10rem]">
      <h1 className="text-peach-900 text-2xl md:text-4xl font-bold subpixel-antialiased pb-5">
        Skills
      </h1>
      {/* {techSkills.map((item, index) => {
        <img src={`${techSkills[0].img}`} alt="" />;
      })} */}
      <nav className="flex sm:justify-center space-x-4">
        {techSkills.map((item, index) => (
          <img key={index} src={item.img} alt="" />
          // <a
          //   key={index}
          //   href="#"
          //   className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          // >
          //   {item.skillName}
          // </a>
        ))}
      </nav>
    </div>
  );
}

export default Skills;
