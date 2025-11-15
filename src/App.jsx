import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Blogs from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import FeelacBasic from "./components/FeelacBasic.jsx";
import FeelacPremium from "./components/FeelacPremium.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Feelac-basic" element={<FeelacBasic />} />
        <Route path="/Feelac-premium" element={<FeelacPremium />} />
      </Routes>
    </Router>
  );
};

export default App;
