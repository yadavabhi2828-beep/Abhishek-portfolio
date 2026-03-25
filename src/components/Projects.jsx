import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "AI Clinician",
        description: "LLM-powered AI clinical assistant for symptom analysis and structured medical insights using grounded RAG.",
        tech: ["LLM", "RAG", "Vector DB", "Python"],
        image: "/assets/ai_clinician.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "Multi-Agent Research Assistant",
        description: "Autonomous system for gathering and summarizing info using Planner, Tool Selection, and Extraction agents.",
        tech: ["LangChain", "LLM", "Web Search", "Python"],
        image: "/assets/research_assistant.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "Fraud Detection System",
        description: "Real-time credit card fraud detection using supervised machine learning and SMOTE for class imbalance.",
        tech: ["Python", "Scikit-learn", "Flask", "ML"],
        image: "/assets/fraud_detection.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "Arham Physiotherapy Bot",
        description: "Domain-specific AI chatbot using RAG for knowledge-grounded physiotherapy responses.",
        tech: ["RAG", "LLM", "Python"],
        image: "/assets/physiotherapy_bot.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "PDF QA Bot",
        description: "Document AI assistant capable of answering questions and summarizing large, complex PDF documents.",
        tech: ["Embeddings", "Vector Search", "Python"],
        image: "/assets/pdf_qa_bot.png",
        github: "https://github.com/yadavabhi2828-beep",
    },
    {
        title: "AI Video Generation",
        description: "Avatar-based video production and promotional content using state-of-the-art Generative AI platforms.",
        tech: ["HeyGen", "Generative AI", "3D Web", "Frontend"],
        image: "/assets/ai_video_gen.png",
        github: "https://github.com/yadavabhi2828-beep",
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
    >
        <div className="relative overflow-hidden h-48">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60"></div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                        {t}
                    </span>
                ))}
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
            
            <div className="flex items-center gap-4 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <Github size={16} /> Code
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors ml-auto">
                    Live Demo <ExternalLink size={16} />
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-400 max-w-2xl mx-auto">A showcase of my recent work in AI, Machine Learning, and Intelligent Automation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <ProjectCard key={index} project={p} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
