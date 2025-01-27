import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import TechStack2 from "./sections/TechStack2";
import EveSection from "./sections/EveSection";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <TechStack2 />
      <EveSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
