import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import {
  Footer,
  Home,
  Skills,
  TechProjects,
  Experiences,
  Contact,
} from "./containers";

function App() {
  return (
    <div className="App flex flex-col first-letter h-screen scroll-smooth">
      <Navbar />
      <Home />
      <Skills />
      <TechProjects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
