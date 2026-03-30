import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="glass p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-16 backdrop-blur-xl relative overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
                
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-slate-400 mb-12 text-lg">
                        Have a project in mind or just want to chat about AI? Feel free to reach out. I'm always open to new opportunities and collaborations.
                    </p>
                    
                    <div className="space-y-6">
                        <a href="mailto:yadavabhi2828@gmail.com" className="flex items-center gap-6 group">
                            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl group-hover:bg-purple-500/20 transition-all duration-300">
                                <Mail className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white tracking-wide">Email</h4>
                                <p className="text-slate-400 group-hover:text-purple-300 transition-colors">yadavabhi2828@gmail.com</p>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhishek-yadav-2803532b2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 group"
                        >
                            <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl group-hover:bg-cyan-500/20 transition-all duration-300">
                                <Linkedin className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white tracking-wide">LinkedIn</h4>
                                <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">abhishek-yadav-2803532b2</p>
                            </div>
                        </a>
                        <div className="flex items-center gap-6 group">
                            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl group-hover:bg-blue-500/20 transition-all duration-300">
                                <MessageSquare className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white tracking-wide">Location</h4>
                                <p className="text-slate-400 group-hover:text-blue-300 transition-colors">Ahmedabad, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.form 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-6" 
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-colors text-white backdrop-blur-sm placeholder:text-slate-500" />
                        <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-colors text-white backdrop-blur-sm placeholder:text-slate-500" />
                    </div>
                    <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-colors text-white backdrop-blur-sm placeholder:text-slate-500" />
                    <textarea placeholder="Message" rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-colors resize-none text-white backdrop-blur-sm placeholder:text-slate-500"></textarea>
                    
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 rounded-xl font-bold flex items-center justify-center gap-2 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
                    >
                         Send Message <Send size={18} />
                    </motion.button>
                </motion.form>
            </div>
            
            <footer className="mt-20 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Abhishek Yadav. Built with React & Tailwind.</p>
            </footer>
        </section>
    );
};

export default Contact;
