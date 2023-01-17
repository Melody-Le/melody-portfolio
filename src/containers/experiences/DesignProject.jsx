import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function DesignProjects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-wrap">
      <div data-aos="fade-right" className="flex flex-wrap w-1/3">
        <div className="w-1/2 p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/god-2.jpg"
          />
        </div>
        <div className="w-1/2 p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/god-3.jpg"
          />
        </div>
        <div className="w-full p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/god-1.jpg"
          />
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/ari-1.jpg"
          />
        </div>
        <div className="w-1/2 p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/ari-2.jpg"
          />
        </div>
        <div className="w-1/2 p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/ari-3.jpg"
          />
        </div>
      </div>
      <div data-aos="fade-left" className="flex flex-wrap w-1/3">
        <div className="w-1/2 p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/holiday-inn-2.jpg"
          />
        </div>
        <div className="w-1/2 p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/holiday-inn-1.jpg"
          />
        </div>
        <div className="w-full p-1 md:p-1">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src="src/assets/designProjects/holiday-inn-3.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default DesignProjects;
