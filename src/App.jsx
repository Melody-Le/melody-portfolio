import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { Footer, Header } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
