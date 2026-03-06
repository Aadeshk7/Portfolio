import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Terminal, Heart, ChevronRight, Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="relative py-24 border-t"
            style={{ background: '#0e0e0e', borderColor: 'rgba(0,255,136,0.08)' }}>
            {/* Dot grid */}
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
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
                        <span className="font-mono text-xs text-[#4a6b56] tracking-widest">$ ssh aadesh@contact</span>
                    </div>
                    <h2 className="section-header text-white mb-2">
                        Let's Build Something <span className="gradient-text">Together</span>
                    </h2>
                    <p className="font-mono text-xs text-[#4a6b56]">
            // Open to collaborations, internships, and exciting projects.
                    </p>
                </motion.div>

                {/* Contact cards */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"
                >
                    {/* Email */}
                    <motion.a
                        href="mailto:aadesh.kulkarni.sknscoe.comp@gmail.com"
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center group transition-all duration-300 glow-green-hover"
                        style={{ borderColor: 'rgba(0,255,136,0.12)' }}
                    >
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)' }}>
                            <Mail size={18} className="text-[#00ff88]" />
                        </div>
                        <div>
                            <p className="text-white font-mono font-bold text-sm mb-0.5">email</p>
                            <p className="text-[#4a6b56] font-mono text-[10px] break-all">
                                aadesh.kulkarni.sknscoe.comp@gmail.com
                            </p>
                        </div>
                        <span className="text-[#00ff88] text-[11px] font-mono flex items-center gap-1">
                            <Send size={10} /> send_message()
                        </span>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href="https://linkedin.com/in/aadesh-kulkarni-b6283a257"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center group transition-all duration-300 glow-blue-hover"
                        style={{ borderColor: 'rgba(0,212,255,0.12)' }}
                    >
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
                            <Linkedin size={18} className="text-[#00d4ff]" />
                        </div>
                        <div>
                            <p className="text-white font-mono font-bold text-sm mb-0.5">linkedin</p>
                            <p className="text-[#4a6b56] font-mono text-[10px]">aadesh-kulkarni-b6283a257</p>
                        </div>
                        <span className="text-[#00d4ff] text-[11px] font-mono flex items-center gap-1">
                            <ChevronRight size={10} /> connect()
                        </span>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center group transition-all duration-300"
                        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                    >
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <Github size={18} className="text-[#8aaa96]" />
                        </div>
                        <div>
                            <p className="text-white font-mono font-bold text-sm mb-0.5">github</p>
                            <p className="text-[#4a6b56] font-mono text-[10px]">open_source_projects</p>
                        </div>
                        <span className="text-[#8aaa96] text-[11px] font-mono flex items-center gap-1">
                            <ChevronRight size={10} /> view_repos()
                        </span>
                    </motion.a>
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t"
                    style={{ borderColor: 'rgba(0,255,136,0.06)' }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded flex items-center justify-center"
                            style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)' }}>
                            <Terminal size={9} className="text-[#00ff88]" />
                        </div>
                        <span className="font-mono text-xs text-[#4a6b56]">
                            <span className="text-[#00ff88]">aadesh</span>@kulkarni.dev
                        </span>
                    </div>
                    <p className="text-[#2a4232] text-[10px] font-mono flex items-center gap-1">
                        built with <Heart size={9} className="text-[#00ff88] mx-0.5" /> using React &amp; Tailwind CSS
                    </p>
                    <p className="text-[#2a4232] text-[10px] font-mono">© 2025 Aadesh Kulkarni</p>
                </motion.div>
            </div>
        </footer>
    );
}
