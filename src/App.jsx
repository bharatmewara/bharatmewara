import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-slate-900">
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
