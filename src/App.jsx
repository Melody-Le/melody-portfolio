import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { Footer, Home } from "./containers";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
