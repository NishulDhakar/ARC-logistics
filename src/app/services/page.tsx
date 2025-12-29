"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { TechSection } from "@/components/TechSection";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Truck, Box, Droplet, Container, Anchor, FileText, Settings } from "lucide-react";
import Image from "next/image";

const serviceCategories = [
    {
        icon: Truck,
        title: "Full Truck Load (FTL)",
        desc: "Complete vehicle dedicated to a single shipment for maximum efficiency and security."
    },
    {
        icon: Box,
        title: "Part Truck Load (PTL)",
        desc: "Cost-effective solution for smaller shipments sharing vehicle space with other cargo."
    },
    {
        icon: Droplet,
        title: "Liquid & Chemical Transport",
        desc: "Specialized tankers for safe transportation of industrial chemicals and hazardous liquids."
    },
    {
        icon: Container,
        title: "Containerized & Closed-Body",
        desc: "Weather-proof and highly secure transportation for high-value or fragile goods."
    },
    {
        icon: Anchor,
        title: "ODC & Project Logistics",
        desc: "Specialized handling for Over-Dimensional Cargo and large-scale industrial projects."
    },
    {
        icon: FileText,
        title: "Documentation & Support",
        desc: "End-to-end assistance with permits, licensing, and compliance documentation."
    }
];

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen bg-white overflow-x-hidden selection:bg-brand-orange selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm mb-6">Expertise & Solutions</h2>
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] font-heading mb-8">
                            Pan-India <br />
                            <span className="text-brand-orange">Logistics Excellence</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8 border-l-2 border-brand-orange pl-6 max-w-2xl">
                            From industrial chemicals to heavy machinery, Adarsh Road Carrier provides comprehensive transport solutions tailored to modern business needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy uppercase font-heading">Our Expertise</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">Specializing in chemical, industrial, and bulk logistics with a higher focus on safety and transparency.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {serviceCategories.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-brand-orange/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-brand-navy rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors duration-500">
                                    <service.icon className="w-8 h-8 text-brand-orange group-hover:text-brand-navy transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-black text-brand-navy uppercase mb-4 leading-[1.1]">{service.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Services />

            {/* Competitive Advantage & Capability */}
            <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className="text-4xl md:text-6xl font-black uppercase font-heading">The ARC <br /><span className="text-brand-orange">Advantage</span></h2>

                            <div className="grid gap-6">
                                {[
                                    "Compliance with CPCB & ADR Norms",
                                    "Trained drivers for hazardous cargo",
                                    "Strategically located near industrial hubs",
                                    "Advanced route optimization technology",
                                    "High focus on safety & transparency",
                                    "Real-time GPS fleet tracking"
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-8 h-8 rounded-full border border-brand-orange flex items-center justify-center group-hover:bg-brand-orange transition-all">
                                            <CheckCircle2 className="w-4 h-4 text-brand-orange group-hover:text-brand-navy" />
                                        </div>
                                        <span className="text-lg font-bold uppercase tracking-tight">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative rounded-[3rem] overflow-hidden aspect-square lg:aspect-auto h-[600px] border border-white/10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                                alt="Logistics Technology"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
                            <div className="absolute bottom-12 left-12 right-12 text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                <p className="text-brand-orange font-black text-4xl mb-2 font-heading tracking-tighter italic">28+ YEARS</p>
                                <p className="text-white font-bold uppercase tracking-widest text-sm">Of Unmatched Industry Reputation</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <TechSection />

            {/* Regional Reach */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[.3em] mb-12">Global & Regional Reach</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-black text-brand-navy uppercase">Pan-India Support</h4>
                            <p className="text-gray-500 font-medium">Serving every corner of India with regional expertise and customized solutions.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-2xl font-black text-brand-navy uppercase">Export & Import</h4>
                            <p className="text-gray-500 font-medium">Specialized expertise in handling export and import cargo at major ports.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-2xl font-black text-brand-navy uppercase">Market Strategies</h4>
                            <p className="text-gray-500 font-medium">Industry-specific logistics strategies for chemical and industrial sectors.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
