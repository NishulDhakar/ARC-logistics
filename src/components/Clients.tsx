"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
    "Aditya Birla – Grasim",
    "KLJ Group",
    "Apex Healthcare Limited",
    "GNFC",
    "Univ Minerals",
    "Lupin",
    "Advance Engineering Solution",
    "Allahabad Sands",
    "Mangalore Minerals Pvt. Ltd.",
    "Star Engineering Works"
];

export function Clients() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Our Partners in Growth</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-brand-navy uppercase font-heading">Key Clients</h3>
                </div>

                <div className="relative group">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {clients.map((client, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white px-10 py-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-brand-orange/20 transition-all group/card"
                            >
                                <span className="text-brand-navy font-bold text-lg uppercase tracking-tight group-hover/card:text-brand-orange transition-colors">
                                    {client}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
