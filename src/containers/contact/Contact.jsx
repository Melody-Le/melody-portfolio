import React, { useEffect } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="contact" className="text-center" data-aos="fade-up">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#DDDDDD"
          fillOpacity="1"
          d="M0,160L16,170.7C32,181,64,203,96,186.7C128,171,160,117,192,85.3C224,53,256,43,288,64C320,85,352,139,384,154.7C416,171,448,149,480,133.3C512,117,544,107,576,117.3C608,128,640,160,672,181.3C704,203,736,213,768,213.3C800,213,832,203,864,192C896,181,928,171,960,165.3C992,160,1024,160,1056,144C1088,128,1120,96,1152,69.3C1184,43,1216,21,1248,16C1280,11,1312,21,1344,26.7C1376,32,1408,32,1424,32L1440,32L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#DDDDDD]">
        <h1 className="text-teal-800 text-2xl md:text-4xl font-bold subpixel-antialiased pb-5">
          LET'S COLLABORATE
        </h1>
        <p className="text-teal-800 font-medium text-2xl md:text-lg mb-5">
          Download my Resume{" "}
          <span className="underline text-red-700">
            <a href="https://drive.google.com/file/d/1dQ-JRzO2jCK_wkoTvX41OHMNxPFgViqp/view?usp=sharing">
              here
            </a>
          </span>
          , and connect with me!
        </p>
        <div className="mb-5">
          <a
            href="http://www.linkedin.com/in/melody-le"
            className=" font-bold text-teal-800 hover:text-white hover:bg-teal-800 outline-teal-800 outline-2 outline hover:outline-none rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Get In Touch
          </a>
        </div>
        <a
          href="http://www.linkedin.com/in/melody-le"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="text-white bg-teal-700 hover:bg-teal-800  font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default Contact;
