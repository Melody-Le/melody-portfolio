import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="bg-white-200">
      <div className="flex justify-between">
        <div>
          <a href="#" className="flex items-center py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            <span>Melody Le</span>
          </a>
        </div>
        <div className="flex space-x-3">
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url], index) => (
            <a
              key={index}
              href={url}
              className="rounded-lg px-2 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
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
