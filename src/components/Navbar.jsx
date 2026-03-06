import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
    { href: '#hero', label: '~/' },
    { href: '#skills', label: '/skills' },
    { href: '#projects', label: '/projects' },
    { href: '#experience', label: '/experience' },
    { href: '#contact', label: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ── Active-section tracking via IntersectionObserver ── */
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
        const observers = [];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
                { threshold: 0.35 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-strong border-b"
            style={{
                borderColor: scrolled ? 'rgba(0,255,136,0.2)' : 'rgba(0,255,136,0.08)',
                boxShadow: scrolled ? '0 6px 32px rgba(0,255,136,0.09)' : 'none',
            }}
        >
            {/* Increased padding: py-3 → py-5 for taller navbar */}
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                {/* Logo */}
                <motion.a href="#hero" className="flex items-center gap-2.5" whileHover={{ scale: 1.04 }}>
                    <div
                        className="w-8 h-8 rounded-md flex items-center justify-center border border-[#00ff88]/40"
                        style={{ background: 'rgba(0,255,136,0.08)' }}
                    >
                        <Terminal size={15} className="text-[#00ff88]" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#00ff88] tracking-wide">
                        aadesh<span className="text-[#4a6b56]">@dev</span>
                    </span>
                </motion.a>

                {/* Desktop links — larger font, active underline */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = active === link.href;
                        return (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={() => setActive(link.href)}
                                whileHover={{ y: -1 }}
                                className="font-mono text-sm tracking-wide relative group transition-colors duration-200"
                                style={{ color: isActive ? '#00ff88' : '#8aaa96' }}
                            >
                                {link.label}
                                {/* Active underline — always visible when active, slides in on hover */}
                                <span
                                    className="absolute -bottom-1 left-0 h-[2px] bg-[#00ff88] rounded-full transition-all duration-300"
                                    style={{ width: isActive ? '100%' : '0%' }}
                                />
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ff88]/50 rounded-full transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        );
                    })}
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-[#8aaa96] hover:text-[#00ff88] transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-strong border-t border-[#00ff88]/10"
                    >
                        <div className="px-6 py-5 flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="font-mono text-sm text-[#8aaa96] hover:text-[#00ff88] transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
