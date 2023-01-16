import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
      <div className="hue-rotate-60 hover:hue-rotate-180 bg-primary-900 container grid grid-cols-[1fr_500px_2fr]">
        <h1>haha</h1>
        <h2>huhu</h2>
      </div>
    </>
  );
}

export default App;
