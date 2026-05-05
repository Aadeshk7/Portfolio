import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award, Star, Mic, Terminal, Lightbulb, FileText } from 'lucide-react';

const timeline = [
    {
        year: '2026',
        role: 'Winner: Best Resume Competition',
        org: 'SKNSCOE',
        description:
            'Awarded for the most professional and well-structured resume among peers at SKNSCOE. Recognized for clarity, technical depth, and impactful presentation of projects and skills.',
        icon: FileText,
        accent: '#00d4ff',
        tags: ['Professional Writing', 'Resume Design', 'Career Excellence'],
        badge: '🥇 Winner',
    },
    {
        year: '2025',
        role: 'SIH Internal Hackathon Winner',
        org: 'Smart India Hackathon 2025',
        description:
            'Won the institutional round of Smart India Hackathon 2025, competing against top teams college-wide. Presented an AI-powered solution addressing a national-level problem statement selected by government bodies.',
        icon: Trophy,
        accent: '#ffdd57',
        tags: ['Hackathon Winner', 'AI Solution', 'National Problem Statement'],
        badge: '🏆 Winner',
    },
    {
        year: '2025',
        role: 'Winner: Business Idea & Debate',
        org: 'EvolvX 2025',
        description:
            'Secured first place in the Business Idea Presentation and Debate competition at EvolvX. Demonstrated strong entrepreneurial thinking, persuasive communication, and strategic problem-solving skills.',
        icon: Lightbulb,
        accent: '#a78bfa',
        tags: ['Business Strategy', 'Public Speaking', 'Debate', 'Entrepreneurship'],
        badge: '🏆 Winner',
    },
    {
        year: '2024',
        role: 'Main Event Coordinator & Anchor',
        org: 'Hackathon 2K24',
        description:
            'Led and anchored Hackathon 2K24 end-to-end — managed a 10-member core organising team, coordinated 500+ participants across multiple tracks, handled stage hosting & live commentary, and ensured seamless execution from kickoff to prize distribution.',
        icon: Mic,
        accent: '#00ff88',
        tags: ['Event Leadership', '10-Member Team', '500+ Participants', 'Stage Anchor', 'Public Speaking'],
        badge: '🎙️ Anchor & Lead',
    },
    {
        year: 'Academic',
        role: 'Gold Medalist',
        org: 'International English Olympiad',
        description:
            'Awarded Gold Medal at the International English Olympiad for exceptional command over English language, comprehension, and critical analysis at the international competitive level.',
        icon: Award,
        accent: '#ffa940',
        tags: ['Gold Medal', 'International', 'Competitive Excellence'],
        badge: '🥇 Gold Medal',
    },
    {
        year: 'Ongoing',
        role: 'B.Tech CSE — AI & ML Track',
        org: 'SGPA: 9.0 / 10',
        description:
            'Pursuing B.Tech in Computer Science Engineering with specialisation in Artificial Intelligence and Machine Learning. Maintained a 9.0 SGPA while leading major projects and extracurricular commitments.',
        icon: Star,
        accent: '#00d4ff',
        tags: ['9.0 SGPA', 'AI/ML Track', 'B.Tech 2027'],
        badge: '⭐ 9.0 SGPA',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-28" style={{ background: '#0c0c0c' }}>
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Terminal size={13} className="text-[#00ff88]" />
                        <span className="font-mono text-xs text-[#4a6b56] tracking-widest">$ git log --oneline experience</span>
                    </div>
                    <h2 className="section-header text-white mb-2">
                        Journey &amp; <span className="gradient-text">Milestones</span>
                    </h2>
                    <p className="text-[#4a6b56] font-mono text-xs">
            // Leadership, achievements, and defining moments.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px"
                        style={{ background: 'linear-gradient(to bottom, #00ff88 0%, rgba(0,255,136,0.15) 60%, transparent 100%)' }} />

                    <div className="space-y-10">
                        {timeline.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.55, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-14"
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[14px] top-5 w-3 h-3 rounded-full -translate-x-1/2 border-2 z-10"
                                        style={{ background: item.accent, borderColor: item.accent, boxShadow: `0 0 10px ${item.accent}60` }} />

                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        className="glass rounded-2xl p-5 md:p-6 transition-all duration-300"
                                        style={{ borderColor: `${item.accent}18` }}
                                    >
                                        {/* Top row */}
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                                style={{ background: `${item.accent}10`, border: `1px solid ${item.accent}28` }}>
                                                <Icon size={15} style={{ color: item.accent }} />
                                            </div>
                                            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold"
                                                style={{ color: item.accent, background: `${item.accent}10`, border: `1px solid ${item.accent}28` }}>
                                                {item.badge}
                                            </span>
                                            <span className="font-mono text-[10px] text-[#3a5a46] ml-auto">{item.year}</span>
                                        </div>

                                        <h3 className="font-mono font-bold text-white text-sm md:text-base mb-0.5">{item.role}</h3>
                                        <p className="font-mono text-[11px] mb-3" style={{ color: item.accent }}>{item.org}</p>
                                        <p className="font-mono text-[#5a7a66] text-xs leading-relaxed mb-4">{item.description}</p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.tags.map((t) => (
                                                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                                                    style={{ color: item.accent, background: `${item.accent}08`, border: `1px solid ${item.accent}22` }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
