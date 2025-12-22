"use strict";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, ArrowRight, Play } from "lucide-react";



export function TechSection() {
    return (
        <section id="tech" className="relative py-24 bg-brand-navy overflow-hidden">
            {/* Background Image / Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')] 
                    bg-cover bg-center mix-blend-overlay"
                />
            </div>

            {/* Background Gradients */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange/20 rounded-full mix-blend-screen filter blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Visual Side (Left in default, but sticking to design layout logic) */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Modern Logistics Tech"
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Floating 'Collaborated With' Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-[200px]"
                            >
                                <div className="text-[10px] uppercase tracking-wider text-gray-300 mb-2">Collaborated with</div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center border border-white/10">
                                        <Cpu className="w-6 h-6 text-brand-orange" />
                                    </div>
                                    <div className="text-xs font-bold text-white leading-tight">
                                        TECH CRAFTED<br />BY CLEAR VISION
                                    </div>
                                </div>
                            </motion.div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-navy/90 to-transparent">
                                <div className="text-white font-bold text-xl mb-1">PINPOINT DELIVERY</div>
                                <div className="text-gray-300 text-sm">ACCURACY AND SAFETY</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8 text-left"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-[0.9] text-white uppercase tracking-tight">
                            Powered By <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Next Gen</span> <br />
                            Cargo Shipping <br />
                            <span className="text-brand-orange">Technology</span>
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed max-w-lg border-l-4 border-brand-orange/50 pl-6">
                            Experience faster, safer, and smarter deliveries with our cutting-edge global shipping solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-brand-orange text-white font-bold rounded-lg shadow-lg shadow-brand-orange/20 hover:bg-[#ff7b24] transition-colors flex items-center gap-2"
                            >
                                Get Free Quote
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center gap-3"
                            >
                                <div className="w-6 h-6 rounded-full bg-white text-brand-navy flex items-center justify-center">
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                </div>
                                Watch a Demo
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
