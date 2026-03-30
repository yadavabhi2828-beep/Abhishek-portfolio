import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "AI Clinician",
        description: "Built a medical diagnostic assistant using grounded RAG, improving clinical data retrieval confidence by 40%.",
        tech: ["LLM", "RAG", "Vector DB", "Python"],
        image: "/assets/ai_clinician.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "Multi-Agent Research Assistant",
        description: "Engineered an autonomous research pipeline that orchestrates planner and extractor agents, reducing manual data synthesis time by 60%.",
        tech: ["LangChain", "LLM", "Web Search", "Python"],
        image: "/assets/research_assistant.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "Fraud Detection System",
        description: "Designed a real-time credit card fraud detection model using custom SMOTE class-balancing, achieving a 99.2% true positive rate.",
        tech: ["Python", "Scikit-learn", "Flask", "ML"],
        image: "/assets/fraud_detection.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "Arham Physiotherapy Bot",
        description: "Developed a domain-specific conversational AI chatbot that handles 100+ daily patient queries with nearly zero hallucination.",
        tech: ["RAG", "LLM", "Python"],
        image: "/assets/physiotherapy_bot.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "PDF QA Bot",
        description: "Created an intelligent document assistant capable of extracting and summarizing insights from complex 500+ page PDFs in milliseconds.",
        tech: ["Embeddings", "Vector Search", "Python"],
        image: "/assets/pdf_qa_bot.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "AI Video Generation",
        description: "Integrated state-of-the-art Generative AI APIs to automate avatar-based video production workflows.",
        tech: ["HeyGen", "Generative AI", "3D Web", "Frontend"],
        image: "/assets/ai_video_gen.png",
        github: "https://github.com/yadavabhi2828-beep",
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 relative"
    >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        <div className="relative overflow-hidden h-48 border-b border-white/5">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded backdrop-blur-sm">
                        {t}
                    </span>
                ))}
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors drop-shadow-md">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
            
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group/link">
                    <Github size={16} className="group-hover/link:text-purple-400 transition-colors" /> Code
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors ml-auto group/link">
                    Live Demo <ExternalLink size={16} className="group-hover/link:text-purple-400 transition-colors" />
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg hover:animate-pulse">A showcase of my recent work in AI, Machine Learning, and Intelligent Automation.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <ProjectCard key={index} project={p} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
