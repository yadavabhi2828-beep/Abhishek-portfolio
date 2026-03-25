import React, { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';

const stats = [
  { label: 'AI systems shipped', value: '06+' },
  { label: 'Focus areas', value: 'LLMs · RAG' },
  { label: 'Workflow style', value: 'Build · Iterate' },
];

const codeLines = [
  'agent.orchestrate(context)',
  'embed(query) -> vector.search()',
  'response = grounded_llm(prompt)',
];

const Hero = () => {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.35,
  });

  const sceneY = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : -80]);
  const orbY = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : -140]);
  const cardY = useTransform(smoothProgress, [0, 1], [0, shouldReduceMotion ? 0 : -55]);
  const panelRotate = useTransform(
    smoothProgress,
    [0, 1],
    ['rotateX(0deg) rotateY(0deg)', shouldReduceMotion ? 'rotateX(0deg) rotateY(0deg)' : 'rotateX(10deg) rotateY(-8deg)']
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32"
    >
      <div className="hero-grid absolute inset-0 -z-20 opacity-40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.26),transparent_58%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-300 shadow-[0_10px_40px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <Sparkles size={14} className="text-cyan-300" />
            AI Developer Portfolio
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
            Designing <span className="text-gradient">production-grade AI experiences</span> with a sharper, more human interface.
          </h1>

          <div className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-slate-300/90 md:text-2xl">
            <span className="mr-2 text-slate-500">Abhishek Yadav</span>
            builds
            <span className="ml-2 text-cyan-200">
              <Typewriter
                words={[
                  'AI & ML systems',
                  'LLM copilots',
                  'RAG-powered products',
                  'automation workflows',
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={68}
                deleteSpeed={42}
                delaySpeed={1800}
              />
            </span>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            I turn AI prototypes into polished products by combining model orchestration,
            retrieval pipelines, fast APIs, and clean front-end experiences that feel reliable
            under real-world use.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.25)] transition-shadow hover:shadow-[0_25px_70px_rgba(56,189,248,0.34)]"
            >
              View Selected Work
              <ArrowRight size={18} />
            </motion.a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/10"
            >
              Let&apos;s Collaborate
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/yadavabhi2828-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-yadav-2803532b2"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:yadavabhi2828@gmail.com" className="hero-social" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{stat.label}</p>
                <p className="mt-3 text-lg font-medium text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y: sceneY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <motion.div style={{ y: orbY }} className="hero-scene-glow" />

          <div className="hero-stage">
            <motion.div style={{ y: cardY }} className="hero-floating-chip hero-floating-chip-left">
              multi-agent logic
            </motion.div>
            <motion.div style={{ y: orbY }} className="hero-floating-chip hero-floating-chip-right">
              context-aware UI
            </motion.div>

            <motion.div style={{ transform: panelRotate }} className="hero-scene-shell">
              <div className="hero-scene-header">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-scene-body">
                <div className="hero-monitor">
                  <div className="hero-monitor-screen">
                    <div className="hero-monitor-sidebar" />
                    <div className="hero-monitor-content">
                      <div className="hero-monitor-badge">AI developer</div>
                      {codeLines.map((line) => (
                        <div key={line} className="hero-code-line">
                          <span className="hero-code-dot" />
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hero-monitor-stand" />
                </div>

                <div className="hero-avatar-wrap">
                  <div className="hero-avatar-shadow" />
                  <div className="hero-avatar">
                    <div className="hero-avatar-head">
                      <span className="hero-headset hero-headset-left" />
                      <span className="hero-headset hero-headset-right" />
                      <span className="hero-face hero-face-left" />
                      <span className="hero-face hero-face-right" />
                    </div>
                    <div className="hero-avatar-body">
                      <span className="hero-avatar-core" />
                    </div>
                  </div>
                </div>

                <div className="hero-desk">
                  <div className="hero-keyboard" />
                  <div className="hero-device" />
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: cardY }}
              className="hero-insight-card hero-insight-card-top"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Live stack</p>
              <p className="mt-2 text-sm text-slate-200">
                React, FastAPI, embeddings, vector search, orchestration
              </p>
            </motion.div>

            <motion.div
              style={{ y: orbY }}
              className="hero-insight-card hero-insight-card-bottom"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-indigo-200/80">Product lens</p>
              <p className="mt-2 text-sm text-slate-200">
                Clean architecture, fast iteration, trustworthy AI UX
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={30} />
      </motion.div>
    </section>
  );
};

export default Hero;
