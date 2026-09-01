import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
export default function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}