import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Globe, Cloud, Terminal } from 'lucide-react';

const categories = [
    {
        icon: Code2,
        label: '// languages',
        accent: '#00ff88',
        shadowColor: 'rgba(0,255,136,0.55)',
        skills: ['Python', 'JavaScript ES6+', 'Java', 'SQL'],
    },
    {
        icon: Brain,
        label: '// ai & ml',
        accent: '#00d4ff',
        shadowColor: 'rgba(0,212,255,0.55)',
        skills: ['NLP', 'Computer Vision', 'TensorFlow', 'Keras', 'OpenAI API'],
    },
    {
        icon: Globe,
        label: '// web frameworks',
        accent: '#a8ff78',
        shadowColor: 'rgba(168,255,120,0.55)',
        skills: ['Django', 'React.js', 'Node.js'],
    },
    {
        icon: Cloud,
        label: '// cloud & devops',
        accent: '#78c8ff',
        shadowColor: 'rgba(120,200,255,0.55)',
        skills: ['Oracle Cloud OCI', 'AWS', 'Docker', 'Git'],
    },
];

/* Individual skill chip with glow-on-hover */
function SkillChip({ name, accent, shadowColor }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={hovered ? { scale: 1.06 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            className="font-mono text-xs px-3 py-1.5 rounded-lg cursor-default select-none"
            style={{
                /* Initial: monochrome outline */
                color: hovered ? accent : 'rgba(180,200,190,0.45)',
                background: hovered ? `${accent}14` : 'rgba(255,255,255,0.025)',
                border: `1px solid ${hovered ? `${accent}50` : 'rgba(255,255,255,0.08)'}`,
                boxShadow: hovered ? `0 0 14px ${shadowColor}, 0 0 40px ${shadowColor.replace('0.55', '0.18')}` : 'none',
                transition: 'color 0.25s, background 0.25s, border-color 0.25s, box-shadow 0.25s',
            }}
        >
            {name}
        </motion.span>
    );
}

function SkillCard({ cat, idx }) {
    const [hovered, setHovered] = useState(false);
    const Icon = cat.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.09 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="glass-skill rounded-2xl p-6 flex flex-col gap-5"
            style={{
                borderColor: hovered ? `${cat.accent}30` : 'rgba(255,255,255,0.06)',
                boxShadow: hovered
                    ? `0 8px 40px ${cat.shadowColor.replace('0.55', '0.12')}, 0 0 0 1px ${cat.accent}20`
                    : 'none',
                transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease',
            }}
        >
            {/* Card header */}
            <div className="flex items-center gap-3 pb-4 border-b" style={{ borderColor: `${cat.accent}18` }}>
                <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                        background: hovered ? `${cat.accent}18` : `${cat.accent}08`,
                        border: `1px solid ${hovered ? `${cat.accent}45` : `${cat.accent}20`}`,
                        transition: 'background 0.3s, border-color 0.3s',
                        boxShadow: hovered ? `0 0 12px ${cat.shadowColor.replace('0.55', '0.35')}` : 'none',
                    }}
                >
                    <Icon size={16} style={{ color: cat.accent }} />
                </div>
                <span className="font-mono text-xs font-semibold tracking-widest" style={{ color: cat.accent }}>
                    {cat.label}
                </span>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
                {cat.skills.map((sk) => (
                    <SkillChip key={sk} name={sk} accent={cat.accent} shadowColor={cat.shadowColor} />
                ))}
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-28 relative" style={{ background: '#0c0c0c' }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Terminal size={13} className="text-[#00ff88]" />
                        <span className="font-mono text-xs text-[#4a6b56] tracking-widest">$ cat skills.json</span>
                    </div>
                    <h2 className="section-header text-white mb-2">
                        Technical <span className="gradient-text">Arsenal</span>
                    </h2>
                    <p className="text-[#4a6b56] font-mono text-xs">
            // Tools, frameworks &amp; languages I use to ship intelligent systems.
                    </p>
                </motion.div>

                {/* 4-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((cat, idx) => (
                        <SkillCard key={cat.label} cat={cat} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
