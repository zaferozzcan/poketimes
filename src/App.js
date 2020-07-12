import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/posts/:post_id" component={Post} />
      </div>
    </Router>
  );
}
