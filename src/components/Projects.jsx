import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal, Zap, Award } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'AI-Powered Localization Engine',
        description: 'End-to-end NLP pipeline supporting 10+ Indian languages — intelligent translation, transliteration, and semantic understanding for regional content at production scale.',
        highlight: '90% Linguistic Accuracy',
        tags: ['NLP', 'Python', 'TensorFlow', 'Django', 'BERT'],
        category: 'AI/ML',
        accent: '#00ff88',
    },
    {
        id: 2,
        title: 'UniPrep AI Assistant',
        description: 'Full-stack platform that auto-generates personalised study plans, creates quizzes from PDF content, and tracks student progress with analytics dashboards.',
        highlight: 'Saved educators 15+ hrs/week',
        tags: ['React.js', 'Django', 'OpenAI API', 'PostgreSQL', 'Docker'],
        category: 'Full-Stack',
        accent: '#00d4ff',
    },
    {
        id: 3,
        title: 'Digital Heritage Platform',
        description: 'Immersive 360° virtual tour platform for Sikkim heritage sites with AI-generated audio guides, multi-language narration, and interactive cultural exploration.',
        highlight: '360° Immersive Experience',
        tags: ['React.js', 'Three.js', 'NLP', 'Node.js', 'AWS S3'],
        category: 'Full-Stack + AI',
        accent: '#a8ff78',
    },
    {
        id: 4,
        title: 'Facial Recognition System',
        description: 'Real-time CNN-based facial recognition with live video processing, multi-face detection, and a secure verification pipeline optimised for edge deployment.',
        highlight: '95% Verification Accuracy',
        tags: ['Python', 'OpenCV', 'Keras', 'TensorFlow', 'CNN'],
        category: 'Computer Vision',
        accent: '#ffdd57',
    },
];

const ALL = 'all';
const FILTERS = [ALL, 'AI/ML', 'Full-Stack', 'Full-Stack + AI', 'Computer Vision'];

function ProjectCard({ p, idx }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300"
            style={{ borderColor: `${p.accent}18` }}
        >
            {/* Top */}
            <div className="flex items-start justify-between gap-2">
                <div>
                    <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded mb-2 inline-block"
                        style={{ color: p.accent, background: `${p.accent}10`, border: `1px solid ${p.accent}28` }}>
                        ./{p.category.toLowerCase().replace(/\//g, '-').replace(/ /g, '-')}
                    </span>
                    <h3 className="font-mono font-bold text-sm text-white leading-snug group-hover:text-[#d4fde4] transition-colors">
                        {p.title}
                    </h3>
                </div>
                <div className="flex gap-2 mt-1 shrink-0">
                    <motion.button whileHover={{ scale: 1.15 }}
                        className="w-7 h-7 rounded-lg flex items-center justify-center border border-[#1a1a1a] text-[#3a5a46] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all"
                        style={{ background: '#161616' }}>
                        <Github size={13} />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.15 }}
                        className="w-7 h-7 rounded-lg flex items-center justify-center border border-[#1a1a1a] text-[#3a5a46] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all"
                        style={{ background: '#161616' }}>
                        <ExternalLink size={13} />
                    </motion.button>
                </div>
            </div>

            {/* Description */}
            <p className="text-[#5a7a66] text-xs font-mono leading-relaxed">{p.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => <span key={t} className="tech-tag" style={{ color: p.accent, borderColor: `${p.accent}28`, background: `${p.accent}06` }}>{t}</span>)}
            </div>

            {/* Result highlight */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl mt-auto"
                style={{ background: `${p.accent}08`, border: `1px solid ${p.accent}22` }}>
                <Award size={12} style={{ color: p.accent }} />
                <span className="font-mono text-[11px] font-bold" style={{ color: p.accent }}>{p.highlight}</span>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState(ALL);
    const filtered = filter === ALL ? projects : projects.filter((p) => p.category === filter);

    return (
        <section id="projects" className="py-28" style={{ background: '#0e0e0e' }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Terminal size={13} className="text-[#00ff88]" />
                        <span className="font-mono text-xs text-[#4a6b56] tracking-widest">$ ls -la ./projects</span>
                    </div>
                    <h2 className="section-header text-white mb-2">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-[#4a6b56] font-mono text-xs">
            // Real-world systems built with precision.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {FILTERS.map((f) => (
                        <button key={f} onClick={() => setFilter(f)}
                            className="px-4 py-1.5 rounded-lg font-mono text-[11px] tracking-wide border transition-all duration-200"
                            style={filter === f
                                ? { color: '#0c0c0c', background: '#00ff88', borderColor: '#00ff88' }
                                : { color: '#3a5a46', background: 'transparent', borderColor: '#1e2e24' }
                            }
                        >
                            {f === ALL ? './all' : f.toLowerCase().replace(' ', '_')}
                        </button>
                    ))}
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, idx) => <ProjectCard key={p.id} p={p} idx={idx} />)}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
