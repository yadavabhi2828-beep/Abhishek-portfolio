import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ title, company, period, description, type }) => (
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative pl-8 pb-12 last:pb-0"
    >
        <div className="absolute left-0 top-0 h-full w-[1px] bg-slate-800"></div>
        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600 glow-purple"></div>
        
        <div className="mb-2 flex flex-wrap items-center gap-4">
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {period}
            </span>
            <span className="text-slate-500 text-sm flex items-center gap-1">
                {type === 'exp' ? <Briefcase size={14} /> : <GraduationCap size={14} />} {company}
            </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <ul className="space-y-2">
            {description.map((item, i) => (
                <li key={i} className="text-slate-400 text-sm leading-relaxed tracking-wide">• {item}</li>
            ))}
        </ul>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My <span className="text-gradient">Journey</span></h2>
            
            <div className="grid grid-cols-1 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                        <Briefcase className="text-purple-500" /> Professional Experience
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
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                        <GraduationCap className="text-blue-500" /> Education
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
                </div>
            </div>
        </section>
    );
};

export default Experience;
