import React, { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const Menu = () => (
    <div>
      {[
        ["Home", "/dashboard"],
        ["Team", "/team"],
        ["Projects", "/projects"],
        ["Reports", "/reports"],
      ].map(([title, url], index) => (
        <a
          key={index}
          href={url}
          className={`block md:inline-block  rounded-lg px-2 py-2 text-slate-700 font-medium hover:bg-slate-400  hover:text-slate-900 ${navbar ? }`}
        >
          {title}
        </a>
      ))}
    </div>
  );
  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="#">
            <h2 className="text-2xl font-bold">LOGO</h2>
          </a>
          <div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`top-0 right-0 w-[35vw] bg-red-600 p-10 fixed h-full ease-in-out duration-300 ${
                navbar ? "translate-x-0 " : "translate-x-full"
              }`}
            >
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
