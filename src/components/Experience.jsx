import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ title, company, period, description, type }) => (
    <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative pl-8 pb-12 last:pb-0"
    >
        <div className="absolute left-0 top-0 h-full w-[1px] bg-slate-800"></div>
        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        
        <div className="glass-card p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300">
            <div className="mb-4 flex flex-wrap items-center gap-4">
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {period}
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1.5 font-medium">
                    {type === 'exp' ? <Briefcase size={14} className="text-purple-400" /> : <GraduationCap size={14} className="text-blue-400" />} {company}
                </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white tracking-wide">{title}</h3>
            <ul className="space-y-2.5">
                {description.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed tracking-wide flex items-start">
                        <span className="text-purple-500 mr-2 mt-0.5 select-none leading-none">&bull;</span> {item}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
                My <span className="text-gradient">Journey</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                        <Briefcase className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" /> Professional Experience
                    </h3>
                    <div className="space-y-0">
                        <TimelineItem 
                            title="AI / ML Intern" 
                            company="Trentium Solution" 
                            period="Oct 2025 – Present" 
                            type="exp"
                            description={[
                                "Developing Generative AI applications and LLM-powered assistants for business use cases.",
                                "Building RAG-powered chatbots using vector databases and embeddings.",
                                "Implementing cross-platform automation tools for macOS and Windows.",
                                "Designing scalable AI pipelines using modular architecture and API integrations."
                            ]} 
                        />
                    </div>
                </motion.div>

                <motion.div 
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                        <GraduationCap className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" /> Education
                    </h3>
                    <div className="space-y-0">
                        <TimelineItem 
                            title="B.E. Computer Engineering" 
                            company="Swarrnim Startup & Innovation University" 
                            period="2022 – 2026" 
                            type="edu"
                            description={["Specializing in Computer Engineering with a focus on AI and ML."]} 
                        />
                        <TimelineItem 
                            title="Higher Secondary (12th)" 
                            company="NIOS" 
                            period="2021 – 2022" 
                            type="edu"
                            description={["Completed with a focus on Science and Mathematics."]} 
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
