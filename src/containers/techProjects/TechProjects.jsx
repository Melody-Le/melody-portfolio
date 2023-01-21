import React, { useEffect } from "react";
import { techProjectList } from "./techProjectList";
import Aos from "aos";
import "aos/dist/aos.css";

function TechProjects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="tech-projects"
      className="container px-3 md:px-8 lg:px-10 mb-5 md:mt-10 md:pt-8"
    >
      <h1
        data-aos="fade-up"
        className="text-peach-900 text-2xl md:text-4xl font-bold subpixel-antialiased pb-10 text-center"
      >
        Software Engineering Projects
      </h1>

      <div className="grid grid-cols-1 gap-2 md:gap-3 lg:grid-cols-4 ">
        {techProjectList.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="rounded-lg shadow-lg bg-white max-w-sm mx-auto"
          >
            <a
              href={item.demo}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img className="rounded-t-lg" src={item.img} alt="" />
            </a>
            <div className="p-3">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {item.projectName}
              </h5>
              <p className=" text-base mb-1 font-thin text-slate-800">
                {item.techStacks}
              </p>
              <p className="text-gray-700 text-base mb-8">{item.description}</p>
              <div className="flex flex-row gap-3 bottom-3 fixed">
                <a
                  href={item.demo}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="text-white bg-teal-700 hover:bg-teal-800  font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                >
                  Demo
                </a>
                <a
                  href={item.demo}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="text-white bg-teal-700 hover:bg-teal-800  font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechProjects;
