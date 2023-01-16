import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="container  bg-primary-50 flex sm:justify-center space-x-4">
      {[
        ["Home", "/dashboard"],
        ["Team", "/team"],
        ["Projects", "/projects"],
        ["Reports", "/reports"],
      ].map(([title, url], index) => (
        <a
          key={index}
          href={url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {title}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
