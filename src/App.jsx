import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { Footer, Home, Skills, TechProjects } from "./containers";

function App() {
  return (
    <div className="App flex flex-col first-letter h-screen">
      <Navbar />
      <Home />
      <Skills />
      <TechProjects />
      <Footer />
    </div>
  );
}

export default App;
