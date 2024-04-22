import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Resume from "./Componets/Resume/Resume";
import Contact from "./Componets/Contact/Contact";
import Navbar from "./Componets/Navbar/Navbar";
import Project from "./Componets/Project/Project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/kaviyat.github.io" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;