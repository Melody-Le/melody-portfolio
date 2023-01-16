import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [toggleMePnu, setToggleMenu] = useState(false);
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="container flex justify-between">
        <a href="#" className="flex items-center py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 text-blue-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <span>Melody Le</span>
        </a>
        <div className="hidden md:flex space-x-3 ">
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url], index) => (
            <a
              key={index}
              href={url}
              className="rounded-lg px-2 py-2 text-slate-700 font-medium hover:bg-slate-400  hover:text-slate-900"
            >
              {title}
            </a>
          ))}
        </div>
        {/* Mobile Icon */}
        <div className="mobile-menu-button md:hidden flex items-center">
          <button>
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
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu  */}
        <div className="mobile-menu hidden">
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url], index) => (
            <a
              key={index}
              href={url}
              className="block rounded-lg px-2 py-2 text-slate-700 font-medium hover:bg-slate-400  hover:text-slate-900"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
