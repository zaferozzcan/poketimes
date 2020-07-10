import React from "react";
// import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
