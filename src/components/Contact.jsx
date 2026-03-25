import React from 'react';
import { Linkedin, Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="glass p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-16 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
                
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-slate-400 mb-12 text-lg">
                        Have a project in mind or just want to chat about AI? Feel free to reach out. I'm always open to new opportunities and collaborations.
                    </p>
                    
                    <div className="space-y-6">
                        <a href="mailto:yadavabhi2828@gmail.com" className="flex items-center gap-6 group">
                            <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
                                <Mail className="text-purple-400" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-300">Email</h4>
                                <p className="text-slate-500">yadavabhi2828@gmail.com</p>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhishek-yadav-2803532b2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 group"
                        >
                            <div className="p-4 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors">
                                <Linkedin className="text-cyan-300" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-300">LinkedIn</h4>
                                <p className="text-slate-500">abhishek-yadav-2803532b2</p>
                            </div>
                        </a>
                        <div className="flex items-center gap-6 group">
                            <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                                <MessageSquare className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-300">Location</h4>
                                <p className="text-slate-500">Ahmedabad, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-white" />
                        <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-white" />
                    </div>
                    <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-white" />
                    <textarea placeholder="Message" rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors resize-none text-white"></textarea>
                    
                    <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold flex items-center justify-center gap-2 glow-purple hover:scale-[1.02] transition-transform text-white">
                         Send Message <Send size={18} />
                    </button>
                </form>
            </div>
            
            <footer className="mt-20 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Abhishek Yadav. Built with React & Tailwind.</p>
            </footer>
        </section>
    );
};

export default Contact;
