"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe2, BarChart3, Clock, Headphones, Settings2 } from "lucide-react";

const advantages = [
    {
        icon: ShieldCheck,
        title: "Modern GPS Fleet",
        desc: "Every vehicle is equipped with advanced GPS for real-time tracking and security."
    },
    {
        icon: Clock,
        title: "Real-time Tracking",
        desc: "Digital dispatch and 24/7 visibility into your cargo's movement across India."
    },
    {
        icon: Zap,
        title: "Route Optimization",
        desc: "Smart technology to find the fastest and most cost-efficient delivery paths."
    },
    {
        icon: Settings2,
        title: "Custom Solutions",
        desc: "Tailor-made logistics strategies for unique industrial and bulk cargo needs."
    },
    {
        icon: BarChart3,
        title: "Cost Efficiency",
        desc: "Opmizited operations and competitive pricing without compromising on safety."
    },
    {
        icon: Headphones,
        title: "End-to-End Support",
        desc: "Full documentation and supply chain support from pickup to final destination."
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-brand-navy text-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3 space-y-8">
                        <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Competitive Advantage</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase font-heading leading-tight">
                            Why Choice <br />
                            <span className="text-white/40">Adarsh Road Carrier</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Strategically located near major industrial hubs, we offer specialized expertise in chemical, industrial, and bulk logistics with full compliance to norms.
                        </p>
                        <div className="pt-8">
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange font-bold">28+</div>
                                <span className="font-bold uppercase tracking-wider text-sm">Years of Trusted Industry Reputation</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        {advantages.map((adv, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group"
                            >
                                <adv.icon className="w-10 h-10 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{adv.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">{adv.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
