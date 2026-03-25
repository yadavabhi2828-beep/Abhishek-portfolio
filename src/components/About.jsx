import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Layers, Layout, Terminal } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills }) => (
    <div className="glass p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <Icon size={20} />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const About = () => {
    return (
        <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">About <span className="text-gradient">Me</span></h2>
                    <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                        I am an AI-focused Computer Engineering student passionate about building Generative AI systems, LLM-powered assistants, and multi-agent automation workflows.
                    </p>
                    <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                        My expertise lies in designing RAG-based AI applications, intelligent chatbots, and autonomous task agents by integrating LLMs, vector databases, and scalable API pipelines.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 border-l-2 border-purple-600 bg-purple-600/5">
                            <h4 className="text-2xl font-bold mb-1">2022-2026</h4>
                            <p className="text-slate-500 text-sm">B.E. Comp. Eng.</p>
                        </div>
                        <div className="p-4 border-l-2 border-blue-600 bg-blue-600/5">
                            <h4 className="text-2xl font-bold mb-1">6+</h4>
                            <p className="text-slate-500 text-sm">AI Projects</p>
                        </div>
                    </div>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SkillCategory title="AI / ML" icon={Cpu} skills={["Machine Learning", "LLM Systems", "RAG Pipelines", "Embeddings", "Vector DBs"]} />
                    <SkillCategory title="AI Technologies" icon={Layers} skills={["Generative AI", "AI Agents", "Prompt Engineering", "Automation"]} />
                    <SkillCategory title="Backend" icon={Terminal} skills={["Python", "FastAPI", "Flask", "Node.js", "C"]} />
                    <SkillCategory title="Web & Design" icon={Layout} skills={["React", "Tailwind", "Angular", "Figma", "Adobe XD"]} />
                </div>
            </div>
        </section>
    );
};

export default About;
