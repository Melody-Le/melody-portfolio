import React, { useEffect } from "react";
import DesignProjects from "./DesignProject";
import Aos from "aos";
import "aos/dist/aos.css";

function Experiences() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="design-projects" className="container mb-5 md:mt-10">
      <h1
        data-aos="fade-up"
        className="text-peach-900 text-2xl md:text-4xl font-bold subpixel-antialiased pb-5 text-center"
      >
        Architecture | Interior Design Projects
      </h1>
      <div className="flex justify-center py-5">
        <a
          data-aos="fade-up"
          className="mx-auto font-bold text-teal-900 hover:text-white bg-white-700 hover:bg-teal-800 outline-teal-800 outline-2 outline hover:outline-none rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          href="https://drive.google.com/file/d/135F7I3sozdBsuBxKtkUmHgAL2onjbbEM/view?usp=sharing"
        >
          Checkout My Work
        </a>
      </div>

      <div data-aos="fade-up" className="overflow-hidden text-gray-700">
        <div className="container px-0 mx-auto lg:pt-5">
          <DesignProjects />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
