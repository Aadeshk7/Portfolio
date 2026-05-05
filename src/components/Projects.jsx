import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal, Zap, ArrowUpRight, Star, GitBranch, Activity } from 'lucide-react';

/* ─── Project data ─── */
const projects = [
    {
        id: 1,
        index: '01',
        title: 'ANUVAD',
        subtitle: 'An AI-Powered Multilingual Content Localization Engine',
        description:
            'End-to-end NLP pipeline supporting 5+ Indian languages. Combines Whisper ASR, IndicTrans2 neural translation, IBM Granite LLM for RAG-based refinement, and automatic dubbing — all running in a production-grade async queue.',
        highlight: '90% Linguistic Accuracy',
        metric1: { label: 'Languages', value: '5+' },
        metric2: { label: 'BLEU Score', value: '↑28%' },
        metric3: { label: 'Throughput', value: 'Async' },
        tags: ['Python', 'PyTorch', 'IndicTrans2', 'FastAPI', 'FAISS', 'RAG', 'Docker'],
        category: 'AI/ML',
        accent: '#00ff88',
        shadowColor: 'rgba(0,255,136,0.6)',
        status: 'Production',
        statusColor: '#00ff88',
        featured: true,
        github: 'https://github.com/Aadeshk7/Anuvad-AI',
        live: '#',
    },
    {
        id: 2,
        index: '02',
        title: 'UniPrep AI Assistant',
        subtitle: 'Personalized Study Platform',
        description:
            'Full-stack platform that auto-generates personalised study plans, creates quizzes from PDF content using GPT, and tracks student progress with real-time analytics dashboards.',
        highlight: 'Saved educators 15+ hrs/week',
        metric1: { label: 'Time Saved', value: '15h/wk' },
        metric2: { label: 'Users', value: '50+' },
        metric3: { label: 'Accuracy', value: '89%' },
        tags: ['React.js', 'Django', 'OpenAI API', 'PostgreSQL', 'Docker', 'Redis'],
        category: 'Full-Stack',
        accent: '#38bdf8',
        shadowColor: 'rgba(56,189,248,0.6)',
        status: 'Live',
        statusColor: '#38bdf8',
        featured: false,
        github: 'https://github.com/Aadeshk7/Uniprep--An-AI-powered-University-Exam-Preparation-Platform',
        live: '#',
    },
    {
        id: 3,
        index: '03',
        title: 'Digital Heritage Platform',
        subtitle: 'Immersive 360° Cultural Experience',
        description:
            'Immersive 360° virtual tour platform for Sikkim heritage sites with AI-generated multi-language audio guides, Three.js powered panoramic rendering, and interactive cultural exploration.',
        highlight: '360° Immersive Experience',
        metric1: { label: 'Sites', value: '12+' },
        metric2: { label: 'Languages', value: '5' },
        metric3: { label: 'Visitors', value: '100+' },
        tags: ['React.js', 'Three.js', 'NLP', 'Node.js', 'AWS S3', 'WebGL'],
        category: 'Full-Stack + AI',
        accent: '#a78bfa',
        shadowColor: 'rgba(167,139,250,0.6)',
        status: 'Deployed',
        statusColor: '#a78bfa',
        featured: false,
        github: '#',
        live: '#',
    },
    {
        id: 4,
        index: '04',
        title: 'Facial Recognition System',
        subtitle: 'Real-Time CV Verification Pipeline',
        description:
            'Real-time CNN-based facial recognition with live video processing, multi-face detection, liveness checks, and a secure verification pipeline optimised for edge deployment on constrained hardware.',
        highlight: '95% Verification Accuracy',
        metric1: { label: 'Accuracy', value: '95%' },
        metric2: { label: 'FPS', value: '30+' },
        metric3: { label: 'Faces', value: 'Multi' },
        tags: ['Python', 'OpenCV', 'Keras', 'TensorFlow', 'CNN', 'Flask'],
        category: 'Computer Vision',
        accent: '#fb923c',
        shadowColor: 'rgba(251,146,60,0.6)',
        status: 'Research',
        statusColor: '#fb923c',
        featured: false,
        github: '#',
        live: '#',
    },
];

const ALL = 'all';
const FILTERS = [ALL, 'AI/ML', 'Full-Stack', 'Full-Stack + AI', 'Computer Vision'];

/* ─── Metric pill ─── */
function MetricPill({ label, value, accent }) {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '10px 14px', borderRadius: 10,
            background: `${accent}0a`, border: `1px solid ${accent}20`,
            minWidth: 64, gap: 2,
        }}>
            <span style={{ fontFamily: 'monospace', fontSize: 15, fontWeight: 700, color: accent, lineHeight: 1 }}>{value}</span>
            <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(160,180,170,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
        </div>
    );
}

/* ─── Status badge ─── */
function StatusBadge({ status, color }) {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '4px 10px', borderRadius: 20,
            background: `${color}12`, border: `1px solid ${color}30`,
        }}>
            <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 5, height: 5, borderRadius: '50%', background: color, boxShadow: `0 0 6px ${color}` }}
            />
            <span style={{ fontFamily: 'monospace', fontSize: 9, color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{status}</span>
        </div>
    );
}

/* ─── Tech Tag ─── */
function TechTag({ tag, accent }) {
    const [hov, setHov] = useState(false);
    return (
        <motion.span
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            animate={hov ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{
                fontFamily: 'monospace', fontSize: 10, fontWeight: 600,
                padding: '4px 9px', borderRadius: 6, cursor: 'default',
                color: hov ? accent : 'rgba(160,185,175,0.7)',
                background: hov ? `${accent}14` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hov ? `${accent}40` : 'rgba(255,255,255,0.08)'}`,
                transition: 'color 0.2s, background 0.2s, border-color 0.2s',
            }}
        >
            {tag}
        </motion.span>
    );
}

/* ─── Featured large card (first project) ─── */
function FeaturedCard({ p }) {
    const [hov, setHov] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                position: 'relative', overflow: 'hidden',
                borderRadius: 20, padding: '32px 32px 28px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${hov ? `${p.accent}45` : 'rgba(255,255,255,0.08)'}`,
                boxShadow: hov
                    ? `0 20px 60px ${p.shadowColor.replace('0.6', '0.18')}, 0 0 0 1px ${p.accent}20, inset 0 1px 0 ${p.accent}15`
                    : '0 4px 30px rgba(0,0,0,0.3)',
                transform: hov ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(16px)',
            }}
        >
            {/* Background accent glow */}
            <div style={{
                position: 'absolute', top: -60, right: -60,
                width: 220, height: 220, borderRadius: '50%',
                background: `radial-gradient(circle, ${p.accent}08 0%, transparent 70%)`,
                pointerEvents: 'none',
                transition: 'opacity 0.3s',
                opacity: hov ? 1 : 0.5,
            }} />

            {/* Corner index */}
            <div style={{
                position: 'absolute', top: 20, right: 24,
                fontFamily: 'monospace', fontSize: 56, fontWeight: 900,
                color: `${p.accent}08`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
            }}>{p.index}</div>

            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16, gap: 12 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{
                            fontFamily: 'monospace', fontSize: 10, fontWeight: 700,
                            color: p.accent, letterSpacing: '0.14em', textTransform: 'uppercase',
                        }}>{p.category}</span>
                        <Star size={10} style={{ color: p.accent }} fill={p.accent} />
                        <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(100,140,120,0.6)', letterSpacing: '0.05em' }}>FEATURED</span>
                    </div>
                    <h3 style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 800, color: '#ffffff', lineHeight: 1.25, margin: 0 }}>
                        {p.title}
                    </h3>
                    <p style={{ fontFamily: 'monospace', fontSize: 11, color: `${p.accent}80`, margin: 0 }}>{p.subtitle}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, shrink: 0 }}>
                    <StatusBadge status={p.status} color={p.statusColor} />
                </div>
            </div>

            {/* Description */}
            <p style={{
                fontFamily: 'monospace', fontSize: 12, color: 'rgba(150,175,165,0.8)',
                lineHeight: 1.75, marginBottom: 20,
            }}>{p.description}</p>

            {/* Metrics row */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <MetricPill label={p.metric1.label} value={p.metric1.value} accent={p.accent} />
                <MetricPill label={p.metric2.label} value={p.metric2.value} accent={p.accent} />
                <MetricPill label={p.metric3.label} value={p.metric3.value} accent={p.accent} />
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
                {p.tags.map((t) => <TechTag key={t} tag={t} accent={p.accent} />)}
            </div>

            {/* Bottom row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '8px 14px', borderRadius: 10,
                    background: `${p.accent}0d`, border: `1px solid ${p.accent}25`,
                }}>
                    <Activity size={11} style={{ color: p.accent }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 11, color: p.accent, fontWeight: 700 }}>{p.highlight}</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <motion.a href={p.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: 5,
                            padding: '7px 14px', borderRadius: 9,
                            fontFamily: 'monospace', fontSize: 11, fontWeight: 600,
                            color: 'rgba(150,180,165,0.7)',
                            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                            textDecoration: 'none', cursor: 'pointer',
                        }}>
                        <Github size={12} /> Code
                    </motion.a>
                    <motion.a href={p.live} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: 5,
                            padding: '7px 14px', borderRadius: 9,
                            fontFamily: 'monospace', fontSize: 11, fontWeight: 700,
                            color: '#0c0c0c', background: p.accent,
                            textDecoration: 'none', cursor: 'pointer',
                        }}>
                        <ArrowUpRight size={12} /> Live Demo
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Regular project card ─── */
function ProjectCard({ p, idx }) {
    const [hov, setHov] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                position: 'relative', overflow: 'hidden',
                borderRadius: 18, padding: '24px 24px 20px',
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${hov ? `${p.accent}38` : 'rgba(255,255,255,0.07)'}`,
                boxShadow: hov
                    ? `0 12px 40px ${p.shadowColor.replace('0.6', '0.15')}, 0 0 0 1px ${p.accent}15`
                    : '0 4px 20px rgba(0,0,0,0.25)',
                transform: hov ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'all 0.28s ease',
                backdropFilter: 'blur(12px)',
                display: 'flex', flexDirection: 'column', gap: 14,
            }}
        >
            {/* BG glow */}
            <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 160, height: 160, borderRadius: '50%',
                background: `radial-gradient(circle, ${p.accent}06 0%, transparent 70%)`,
                pointerEvents: 'none', opacity: hov ? 1 : 0.4, transition: 'opacity 0.3s',
            }} />

            {/* Corner index */}
            <div style={{
                position: 'absolute', top: 14, right: 18,
                fontFamily: 'monospace', fontSize: 38, fontWeight: 900,
                color: `${p.accent}09`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
            }}>{p.index}</div>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <StatusBadge status={p.status} color={p.statusColor} />
                    <h3 style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 800, color: '#f0f8f4', margin: 0, lineHeight: 1.3 }}>
                        {p.title}
                    </h3>
                    <p style={{ fontFamily: 'monospace', fontSize: 10, color: `${p.accent}70`, margin: 0 }}>{p.subtitle}</p>
                </div>
                <div style={{ display: 'flex', gap: 6, shrink: 0 }}>
                    <motion.a href={p.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15 }}
                        style={{
                            width: 30, height: 30, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'rgba(150,175,165,0.6)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
                            textDecoration: 'none', cursor: 'pointer',
                        }}>
                        <Github size={13} />
                    </motion.a>
                    <motion.a href={p.live} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15 }}
                        style={{
                            width: 30, height: 30, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: p.accent, background: `${p.accent}12`, border: `1px solid ${p.accent}30`,
                            textDecoration: 'none', cursor: 'pointer',
                        }}>
                        <ArrowUpRight size={13} />
                    </motion.a>
                </div>
            </div>

            {/* Description */}
            <p style={{
                fontFamily: 'monospace', fontSize: 11, color: 'rgba(140,168,158,0.75)',
                lineHeight: 1.7, margin: 0,
            }}>{p.description}</p>

            {/* Metrics */}
            <div style={{ display: 'flex', gap: 8 }}>
                <MetricPill label={p.metric1.label} value={p.metric1.value} accent={p.accent} />
                <MetricPill label={p.metric2.label} value={p.metric2.value} accent={p.accent} />
                <MetricPill label={p.metric3.label} value={p.metric3.value} accent={p.accent} />
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {p.tags.map((t) => <TechTag key={t} tag={t} accent={p.accent} />)}
            </div>

            {/* Highlight bar */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 12px', borderRadius: 9, marginTop: 'auto',
                background: `${p.accent}08`, border: `1px solid ${p.accent}20`,
            }}>
                <Zap size={10} style={{ color: p.accent }} />
                <span style={{ fontFamily: 'monospace', fontSize: 10, color: p.accent, fontWeight: 700 }}>{p.highlight}</span>
            </div>
        </motion.div>
    );
}

/* ─── Section ─── */
export default function Projects() {
    const [filter, setFilter] = useState(ALL);
    const filtered = filter === ALL ? projects : projects.filter((p) => p.category === filter);
    const featured = filtered.find((p) => p.featured);
    const rest = filtered.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-28 relative" style={{ background: '#0e0e0e' }}>
            {/* Ambient blobs */}
            <div style={{
                position: 'absolute', top: '8%', right: '8%',
                width: 500, height: 500, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 65%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', left: '5%',
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 65%)',
                pointerEvents: 'none',
            }} />

            <div className="max-w-7xl mx-auto px-6">
                {/* ── Section header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 40 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <Terminal size={13} color="#00ff88" />
                        <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#4a6b56', letterSpacing: '0.12em' }}>$ ls -la ./projects</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                        <div>
                            <h2 className="section-header" style={{ color: '#ffffff', marginBottom: 6 }}>
                                Featured <span className="gradient-text">Projects</span>
                            </h2>
                            <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#4a6b56' }}>
                                // Real-world systems built with precision — {projects.length} projects shipped.
                            </p>
                        </div>
                        {/* Stats row */}
                        <div style={{ display: 'flex', gap: 20 }}>
                            {[
                                { icon: <GitBranch size={12} />, val: '4+', label: 'Projects' },
                                { icon: <Star size={12} />, val: '95%', label: 'Accuracy' },
                                { icon: <Activity size={12} />, val: '3', label: 'Live' },
                            ].map((s) => (
                                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <span style={{ color: '#00ff88' }}>{s.icon}</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: '#e0ffe8' }}>{s.val}</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#3a5a46' }}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Filter tabs ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}
                >
                    {FILTERS.map((f) => {
                        const active = filter === f;
                        return (
                            <motion.button
                                key={f}
                                onClick={() => setFilter(f)}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    padding: '6px 16px', borderRadius: 9,
                                    fontFamily: 'monospace', fontSize: 11, fontWeight: active ? 700 : 500,
                                    letterSpacing: '0.06em', cursor: 'pointer', border: 'none',
                                    color: active ? '#0c0c0c' : '#4a6b56',
                                    background: active ? '#00ff88' : 'rgba(255,255,255,0.04)',
                                    outline: active ? 'none' : '1px solid rgba(255,255,255,0.08)',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {f === ALL ? '$ ./all' : `>${f.toLowerCase().replace(/ /g, '_')}`}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* ── Cards layout ── */}
                <AnimatePresence mode="popLayout">
                    <motion.div layout style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {/* Featured card — full width */}
                        {featured && <FeaturedCard key={featured.id} p={featured} />}

                        {/* Regular cards — 3-column */}
                        {rest.length > 0 && (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                gap: 18,
                            }}>
                                {rest.map((p, idx) => (
                                    <ProjectCard key={p.id} p={p} idx={idx} />
                                ))}
                            </div>
                        )}

                        {/* Empty state */}
                        {filtered.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ textAlign: 'center', padding: '60px 0', fontFamily: 'monospace', color: '#3a5a46', fontSize: 13 }}
                            >
                                // No projects match this filter yet.
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
