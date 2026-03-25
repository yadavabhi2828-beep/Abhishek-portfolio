import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-purple-500/30">
      {/* Background Layer */}
      <div className="fixed inset-0 bg-[#030014] -z-20"></div>
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>

      <Navbar />
      
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
