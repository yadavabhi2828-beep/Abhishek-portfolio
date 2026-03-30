import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
            <div className="glass px-8 py-3 rounded-full flex items-center gap-8 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10">
                <a href="#hero" className="hover:text-purple-400 hover:scale-105 transition-all duration-300">Home</a>
                <a href="#about" className="hover:text-purple-400 hover:scale-105 transition-all duration-300">About</a>
                <a href="#projects" className="hover:text-purple-400 hover:scale-105 transition-all duration-300">Projects</a>
                <a href="#experience" className="hover:text-purple-400 hover:scale-105 transition-all duration-300">Experience</a>
                <a href="#contact" className="hover:text-purple-400 hover:scale-105 transition-all duration-300">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
