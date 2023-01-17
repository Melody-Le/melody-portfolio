import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { Footer, Home, Skills } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
