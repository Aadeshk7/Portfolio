import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Terminal } from 'lucide-react';

const ROLES = [
    'AI / ML Engineer',
    'Full-Stack Developer',
    'Computer Vision Expert',
    'Event Coordinator & Anchor',
];

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [typing, setTyping] = useState(true);
    const [booted, setBooted] = useState(false);

    /* Boot-up delay before showing name */
    useEffect(() => {
        const t = setTimeout(() => setBooted(true), 400);
        return () => clearTimeout(t);
    }, []);

    /* Typewriter effect */
    useEffect(() => {
        const role = ROLES[roleIdx];
        let i = 0;
        let timer;
        if (typing) {
            timer = setInterval(() => {
                setDisplayText(role.slice(0, i + 1));
                i++;
                if (i === role.length) { clearInterval(timer); setTimeout(() => setTyping(false), 2400); }
            }, 55);
        } else {
            timer = setInterval(() => {
                setDisplayText((p) => {
                    if (p.length <= 1) {
                        clearInterval(timer);
                        setRoleIdx((prev) => (prev + 1) % ROLES.length);
                        setTyping(true);
                    }
                    return p.slice(0, -1);
                });
            }, 28);
        }
        return () => clearInterval(timer);
    }, [roleIdx, typing]);

    /* Container stagger */
    const containerV = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.5 } },
    };
    const itemV = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden scanlines"
            style={{ background: 'linear-gradient(160deg, #0c0c0c 0%, #0d1208 60%, #0c0c0c 100%)' }}
        >
            {/* Dot grid layer */}
            <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

            {/* Glow orbs */}
            <div className="absolute top-1/4 -left-60 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)' }} />
            <div className="absolute bottom-1/4 -right-60 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />

            {/* Terminal status bar */}
            <div className="relative z-10 border-b border-[#00ff88]/10 px-6 md:px-12 py-2 flex items-center gap-3 text-[10px] text-[#00ff88]/50 font-mono">
                <span className="text-[#00ff88]/80">aadesh@portfolio</span>
                <span>:</span>
                <span className="text-[#00d4ff]/60">~/me</span>
                <span className="ml-auto flex items-center gap-4 hidden sm:flex">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] pulse-ring inline-block" />ONLINE</span>
                    <span>B.Tech CSE · 2027</span>
                    <span>SGPA: 9.0</span>
                </span>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-4 pb-6">

                {/* Pre-prompt line */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={booted ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-2 mb-4 md:mb-5"
                >
                    <Terminal size={13} className="text-[#00ff88]" />
                    <span className="text-[#00ff88]/70 text-xs md:text-sm tracking-widest font-mono">
                        ~/portfolio $ <span className="text-[#00ff88]">whoami</span>
                    </span>
                </motion.div>

                {/* ─── GIANT NAME ─── */}
                <div className="overflow-hidden mb-3 md:mb-4">
                    <motion.div
                        initial={{ y: '110%' }}
                        animate={booted ? { y: 0 } : {}}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    >
                        <h1 className="hero-name-line text-white">Aadesh</h1>
                    </motion.div>
                </div>
                <div className="overflow-hidden mb-6 md:mb-8">
                    <motion.div
                        initial={{ y: '110%' }}
                        animate={booted ? { y: 0 } : {}}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.46 }}
                    >
                        <h1 className="hero-name-line gradient-text">Kulkarni</h1>
                    </motion.div>
                </div>

                {/* Typewriter role line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={booted ? { opacity: 1 } : {}}
                    transition={{ delay: 0.95, duration: 0.5 }}
                    className="flex items-center gap-2 mb-5 md:mb-7"
                >
                    <span className="text-[#00ff88]/50 text-xs md:text-sm tracking-widest">›</span>
                    <span className="text-[#00ff88] font-mono text-sm md:text-xl font-semibold">{displayText}</span>
                    <span className="cursor text-[#00ff88] text-sm md:text-xl font-light">█</span>
                </motion.div>

                {/* Sub-description */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={booted ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1, duration: 0.55 }}
                    className="max-w-2xl text-[#8aaa96] text-xs md:text-sm leading-relaxed mb-7 md:mb-9 font-mono"
                >
                    <span className="text-[#00ff88]/60">/*</span>{' '}
                    B.Tech CSE student (2027) · <span className="text-[#00d4ff]">9.0 SGPA</span> · Neural Video Translation
                    &amp; high-accuracy Computer Vision · Full-Stack production systems.{' '}
                    <span className="text-[#00ff88]/60">*/</span>
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={booted ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.25, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-14"
                >
                    <motion.a
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-mono text-xs md:text-sm font-bold tracking-wide transition-all duration-200"
                        style={{ background: '#00ff88', color: '#0c0c0c', boxShadow: '0 0 24px rgba(0,255,136,0.3)' }}
                    >
                        <Download size={14} />
                        ./download_resume.sh
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-mono text-xs md:text-sm font-bold tracking-wide glass border border-[#00ff88]/30 text-[#00ff88] hover:border-[#00ff88]/60 transition-all duration-200 glow-green-hover"
                    >
                        <Eye size={14} />
                        ls ./projects
                    </motion.a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={booted ? { opacity: 1 } : {}}
                    transition={{ delay: 1.45, duration: 0.5 }}
                    className="flex flex-wrap gap-6 md:gap-10 border-t border-[#00ff88]/10 pt-6"
                >
                    {[
                        { val: '9.0', key: 'SGPA' },
                        { val: 'Winner', key: 'SIH_2025' },
                        { val: '4+', key: 'FULL_STACK_APPS' },
                        { val: '95%', key: 'CV_ACCURACY' },
                        { val: '10+', key: 'LANGUAGES' },
                    ].map((s) => (
                        <div key={s.key} className="flex flex-col gap-0.5">
                            <span className="text-xl md:text-2xl font-black text-[#00ff88] leading-none">{s.val}</span>
                            <span className="text-[9px] md:text-[10px] text-[#4a6b56] tracking-widest font-mono">{s.key}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
                className="relative z-10 flex justify-center pb-6"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown size={16} className="text-[#00ff88]/40" />
            </motion.div>
        </section>
    );
}
