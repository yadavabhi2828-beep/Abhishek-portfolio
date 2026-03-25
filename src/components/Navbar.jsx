import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
            <div className="glass px-8 py-3 rounded-full flex items-center gap-8 text-sm font-medium tracking-wide">
                <a href="#hero" className="hover:text-purple-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
                <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
                <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
