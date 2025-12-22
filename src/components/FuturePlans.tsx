"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Map, Cpu, Database } from "lucide-react";

export function FuturePlans() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[.3em] mb-4">The Road Ahead</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-brand-navy uppercase font-heading leading-tight mb-8">
                        Growth & Innovation
                    </h3>
                    <p className="text-gray-500 text-lg">
                        We are continuously evolving to meet the demands of tomorrow's supply chain through technology and network expansion.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Map,
                            title: "Network Expansion",
                            desc: "Addition of new routes and strategic regional hubs across all Indian states."
                        },
                        {
                            icon: TrendingUp,
                            title: "Fleet Modernization",
                            desc: "Integrating IoT-based management systems and next-gen advanced vehicles."
                        },
                        {
                            icon: Cpu,
                            title: "Digital Integration",
                            desc: "Strengthening industrial logistics with end-to-end digital transparency."
                        },
                        {
                            icon: Database,
                            title: "Smart Logistics",
                            desc: "Focus on AI-driven optimization for customer satisfaction and service efficiency."
                        }
                    ].map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-brand-navy rounded-3xl flex items-center justify-center mb-8">
                                <plan.icon className="w-8 h-8 text-brand-orange" />
                            </div>
                            <h4 className="text-2xl font-black text-brand-navy uppercase mb-6 leading-tight">{plan.title}</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">{plan.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
