import React from "react";
import Social from "./Social";
import "./Home.css";

function Home() {
  return (
    <div className=" flex items-center mt-5">
      <div
        id="home"
        className="container md:px-[10rem] mt-8 flex flex-wrap justify-around items-center bg-white-500"
        // className="container mt-8 grid-cols-3   bg-white-500"
      >
        <Social />
        <div className="profile-animation transition duration-150 ease-in-out w-9 basis-1/2 md:basis-1/5 justify-self-start max-w-20 aspect-square md:shrink-0 bg-cover bg-no-repeat bg-center bg-profile"></div>
        <div className="basis-full md:basis-2/3">
          <h1 className="text-peach-900 text-2xl md:text-4xl font-bold subpixel-antialiased pb-5">
            Melody Le
          </h1>
          <h3 className="px-[55px] relative before:content-[''] before:absolute before:left-0 before:top-[1rem] before:w-[50px] before:h-[1px] before:bg-slate-600 text-lg font-thin">
            Software Engineering
          </h3>
          <p className="leading-relax pb-3">
            Coming from an architecture and interior design background help me
            build a good mindset of UX/UI design. With a strong sense of
            responsibility toward with high demand quality products, I am eager
            to utilize my tech skills and design skills to create impactful
            technology products.
          </p>
          <a
            className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-400 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            href="https://drive.google.com/file/d/1dQ-JRzO2jCK_wkoTvX41OHMNxPFgViqp/view?usp=sharing"
          >
            My Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;