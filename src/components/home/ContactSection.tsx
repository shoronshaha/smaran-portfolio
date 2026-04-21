"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Copy, Check, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

const ContactSection = () => {
    const { theme } = useTheme();
    const [copied, setCopied] = useState(false);

    const email = "smaranshaha@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contactMethods = [
        {
            name: "WhatsApp",
            icon: <MessageCircle className="w-6 h-6 text-green-400" />,
            value: "+880 1770 889987",
            link: "https://wa.me/8801770889987",
            description: "Direct chat for quick response",
            color: "hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)]"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-6 h-6 text-blue-400" />,
            value: "Smaran Shaha",
            link: "https://www.linkedin.com/in/smaran-shaha/",
            description: "Professional networking",
            color: "hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]"
        }
    ];

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-white dark:bg-[#050505]">
            {/* Dynamic Mesh Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-container padding-container relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-sm font-bold mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        AVAILABLE FOR NEW PROJECTS
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-500 bg-clip-text text-transparent leading-[1.1]"
                    >
                        Let&apos;s turn your vision <br /> into reality.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
                    {/* Primary Contact Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 group relative rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900/40 backdrop-blur-3xl overflow-hidden p-8 md:p-14 transition-all duration-500 hover:border-cyan-500/40"
                    >
                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-12">
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform group-hover:rotate-12">
                                        <Mail className="w-8 h-8 font-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black tracking-tight">Email Me</h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium">I will reply within 12 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-2 rounded-[1.5rem] bg-white/50 dark:bg-black/40 border border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center gap-4 transition-all group-hover:border-cyan-500/20">
                                    <div className="flex-1 px-6 py-4">
                                        <span className="block text-xs uppercase tracking-widest text-cyan-500 font-bold mb-1">Official Email</span>
                                        <span className="text-xl md:text-2xl font-mono font-bold tracking-tight break-all">
                                            {email}
                                        </span>
                                    </div>
                                    <button 
                                        onClick={copyToClipboard}
                                        className={`w-full md:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black transition-all duration-300 ${
                                            copied 
                                            ? 'bg-green-500 text-white' 
                                            : 'bg-black dark:bg-white text-white dark:text-black hover:bg-cyan-500 dark:hover:bg-cyan-500'
                                        }`}
                                    >
                                        <AnimatePresence mode="wait">
                                            {copied ? (
                                                <motion.div key="success" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="flex items-center gap-2">
                                                    <Check className="w-5 h-5" /> COPIED!
                                                </motion.div>
                                            ) : (
                                                <motion.div key="copy" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="flex items-center gap-2">
                                                    <Copy className="w-5 h-5" /> COPY EMAIL
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Interactive Background Shape */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />
                    </motion.div>

                    {/* Secondary Channels */}
                    <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
                        {contactMethods.map((method, idx) => (
                            <motion.a
                                key={method.name}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group p-6 md:p-8 rounded-[2rem] border border-black/5 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900/40 backdrop-blur-xl transition-all duration-500 flex items-center justify-between ${method.color}`}
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 dark:bg-black/20 flex items-center justify-center transition-transform group-hover:scale-110">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black">{method.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{method.description}</p>
                                        <span className="text-sm font-bold opacity-80">{method.value}</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                                    <ExternalLink className="w-5 h-5" />
                                </div>
                                <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20 translate-x-1 -translate-y-1">
                                    <Sparkles className="w-10 h-10" />
                                </div>
                            </motion.a>
                        ))}

                        {/* Location/Stat Card */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-[2rem] border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-zinc-900/40 backdrop-blur-xl relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block text-pulse">Global Opportunity Status</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                        <span className="text-lg font-black text-green-500 uppercase">Ready for Remote & Relocation</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block text-pulse">International Hours</span>
                                    <span className="text-lg font-black italic">Open to USA/UK/EU Shifts</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
