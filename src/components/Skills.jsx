import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

/* ─── Skill definitions with SVG logo URLs ─── */
const categories = [
    {
        label: '// languages',
        accent: '#00ff88',
        shadowColor: 'rgba(0,255,136,0.6)',
        skills: [
            { name: 'Python',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Java',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'SQL',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        ],
    },
    {
        label: '// ai & ml',
        accent: '#a78bfa',
        shadowColor: 'rgba(167,139,250,0.6)',
        skills: [
            { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
            { name: 'PyTorch',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
            { name: 'Keras',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
            { name: 'OpenCV',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
            { name: 'NumPy',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
            { name: 'Pandas',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        ],
    },
    {
        label: '// web frameworks',
        accent: '#38bdf8',
        shadowColor: 'rgba(56,189,248,0.6)',
        skills: [
            { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Node.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Django',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
            { name: 'FastAPI',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'Flask',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        ],
    },
    {
        label: '// cloud & devops',
        accent: '#fb923c',
        shadowColor: 'rgba(251,146,60,0.6)',
        skills: [
            { name: 'Docker',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'AWS',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'MongoDB',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Git',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'Linux',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        ],
    },
];

/* ─── Individual Logo Badge ─── */
function LogoBadge({ skill, accent, shadowColor }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={hovered ? { scale: 1.08, y: -4 } : { scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 340, damping: 22 }}
            className="flex flex-col items-center gap-2 cursor-default select-none"
            style={{ width: 72 }}
        >
            {/* Logo container */}
            <div
                style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: hovered ? `${accent}18` : 'rgba(255,255,255,0.04)',
                    border: `1.5px solid ${hovered ? `${accent}55` : 'rgba(255,255,255,0.09)'}`,
                    boxShadow: hovered
                        ? `0 0 18px ${shadowColor}, 0 0 50px ${shadowColor.replace('0.6', '0.2')}, inset 0 1px 0 ${accent}20`
                        : '0 2px 8px rgba(0,0,0,0.3)',
                    transition: 'all 0.25s ease',
                }}
            >
                <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{
                        width: 32,
                        height: 32,
                        objectFit: 'contain',
                        filter: hovered ? 'brightness(1.15) saturate(1.2)' : 'brightness(0.85) saturate(0.8)',
                        transition: 'filter 0.25s ease',
                    }}
                    onError={(e) => {
                        // Fallback: show initials if image fails
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<span style="color:${accent};font-family:monospace;font-size:14px;font-weight:700;">${skill.name.slice(0, 2).toUpperCase()}</span>`;
                    }}
                />
            </div>

            {/* Label */}
            <span
                className="font-mono text-center"
                style={{
                    fontSize: 10,
                    lineHeight: 1.3,
                    color: hovered ? accent : 'rgba(180,200,190,0.5)',
                    transition: 'color 0.25s ease',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: 70,
                    fontWeight: hovered ? 600 : 400,
                }}
            >
                {skill.name}
            </span>
        </motion.div>
    );
}

/* ─── Category Card ─── */
function CategoryCard({ cat, idx }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${hovered ? `${cat.accent}35` : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 20,
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                boxShadow: hovered
                    ? `0 12px 48px ${cat.shadowColor.replace('0.6', '0.14')}, 0 0 0 1px ${cat.accent}18`
                    : '0 4px 24px rgba(0,0,0,0.25)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                backdropFilter: 'blur(12px)',
            }}
        >
            {/* Card label */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    paddingBottom: 16,
                    borderBottom: `1px solid ${cat.accent}20`,
                }}
            >
                <div
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: cat.accent,
                        boxShadow: `0 0 8px ${cat.accent}`,
                    }}
                />
                <span
                    className="font-mono font-semibold tracking-widest"
                    style={{ fontSize: 11, color: cat.accent }}
                >
                    {cat.label}
                </span>
            </div>

            {/* Logo grid */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 14,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
            >
                {cat.skills.map((skill) => (
                    <LogoBadge
                        key={skill.name}
                        skill={skill}
                        accent={cat.accent}
                        shadowColor={cat.shadowColor}
                    />
                ))}
            </div>
        </motion.div>
    );
}

/* ─── Section ─── */
export default function Skills() {
    return (
        <section id="skills" className="py-28 relative" style={{ background: '#0c0c0c' }}>
            {/* Subtle ambient blobs */}
            <div
                style={{
                    position: 'absolute', top: '15%', left: '5%',
                    width: 350, height: 350, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute', bottom: '15%', right: '5%',
                    width: 400, height: 400, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

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

                {/* 2-column grid for better focus */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {categories.map((cat, idx) => (
                        <CategoryCard key={cat.label} cat={idx} idx={idx} cat={cat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
