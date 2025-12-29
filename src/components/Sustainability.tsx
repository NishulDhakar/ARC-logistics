"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, Wind, ShieldAlert } from "lucide-react";
import Image from "next/image";

export function Sustainability() {
    return (
        <section className="py-32 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-[3rem] overflow-hidden group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                            alt="Green Logistics"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-brand-navy/40" />
                        <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <p className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-2">Sustainable Future</p>
                            <p className="text-gray-200 text-lg italic">"Together, we’re building a future of smart, sustainable, and reliable transportation."</p>
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[.3em] mb-4">Eco-Friendly Operations</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-brand-navy uppercase font-heading leading-tight">
                                Commitment to <br />
                                Sustainability
                            </h3>
                        </div>

                        <div className="grid gap-8">
                            {[
                                {
                                    icon: Leaf,
                                    title: "Eco-Friendly Fleet",
                                    desc: "We invest in fuel-efficient vehicles that reduce the overall carbon footprint per kilometer."
                                },
                                {
                                    icon: Wind,
                                    title: "Emission Reduction",
                                    desc: "Advanced route optimization to significantly reduce idle time and wasted fuel."
                                },
                                {
                                    icon: ShieldAlert,
                                    title: "Hazardous Safety",
                                    desc: "Strict compliance with CPCB & ADR norms for the safe handling of industrial cargo."
                                },
                                {
                                    icon: Recycle,
                                    title: "Green Logistics",
                                    desc: "Waste reduction and energy-efficient operations across our regional hubs and warehouses."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-500">
                                        <item.icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-navy uppercase mb-1">{item.title}</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
