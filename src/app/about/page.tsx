"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Shield, Award, Globe, History } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-white overflow-x-hidden selection:bg-brand-orange selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20" />
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 bg-brand-orange/20 rounded-full text-brand-orange text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        Ankleshwar, Gujarat
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-white uppercase leading-none font-heading mb-8"
                    >
                        Adarsh Road <br />
                        <span className="text-brand-orange">Carrier</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mx-auto"
                    >
                        Adarsh Road Carrier is a trusted logistics and road transportation company specializing in pan-India cargo movement. Based in Ankleshwar, Gujarat, we handle industrial chemicals, machinery, FMCG, and bulk materials with a modern fleet and experienced professionals.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden h-[600px]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Logistics Center"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-brand-navy/30" />
                        </motion.div>

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-4">
                                    <Target className="w-8 h-8 text-brand-orange" />
                                    <h2 className="text-4xl font-black text-brand-navy uppercase font-heading">Our Mission</h2>
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-brand-orange pl-6 font-medium">
                                    To provide seamless logistics services that meet modern business needs. We are dedicated to building a future of smart, sustainable, and reliable transportation driven by innovation and trust.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-4">
                                    <Globe className="w-8 h-8 text-brand-orange" />
                                    <h2 className="text-4xl font-black text-brand-navy uppercase font-heading">Our Vision</h2>
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-brand-orange pl-6 font-medium">
                                    To redefine logistics with innovative, cost-effective solutions. We strive to be the most preferred logistics partner by consistently exceeding customer expectations and setting new industry benchmarks.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Growth */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mb-16">
                        <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[.3em] mb-4">The Road Ahead</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-brand-navy uppercase font-heading leading-tight mb-8">
                            Business Growth & <br /> <span className="text-brand-orange">Future Plans</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Expansion of transport network across India",
                            "Addition of new routes and advanced vehicles",
                            "Integration of IoT-based fleet management",
                            "Strengthening chemical & industrial logistics",
                            "Establishing regional hubs",
                            "Focus on sustainability and green logistics"
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:border-brand-orange/30 transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                                    <Award className="w-5 h-5 text-brand-navy" />
                                </div>
                                <p className="text-brand-navy font-bold uppercase text-sm leading-tight">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase font-heading">Our Core Values</h2>
                        <div className="h-1 w-40 bg-brand-orange mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Reliability", desc: "Consistency in service delivery that our partners can always count on for critical cargo." },
                            { icon: Users, title: "Customer Centric", desc: "Understanding and prioritizing the unique needs of every client with custom logistics." },
                            { icon: History, title: "Integrity", desc: "Transparency and ethical practices in every transaction, fostering long-term trust." }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                            >
                                <value.icon className="w-12 h-12 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-4 uppercase">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-medium">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Associated Companies */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-navy uppercase font-heading mb-16 text-center">Associated Companies</h2>
                    <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Moventrix Logistics", location: "Ahmedabad" },
                            { name: "HTDJ Logistics", location: "Vapi" },
                            { name: "HRC Logistics", location: "Ankleshwar & Delhi" },
                            { name: "Shree Jagdamba Transport", location: "Haryana" }
                        ].map((company, idx) => (
                            <motion.div
                                key={idx}
                                shadow-sm
                                whileHover={{ y: -5 }}
                                className="p-8 bg-gray-50 rounded-2xl text-center border-2 border-transparent hover:border-brand-orange/20 transition-all"
                            >
                                <h4 className="text-xl font-black text-brand-navy uppercase mb-1">{company.name}</h4>
                                <p className="text-brand-orange font-bold text-xs uppercase tracking-widest">{company.location}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between items-center gap-12">
                        {[
                            { label: "Successful Years", value: "28+" },
                            { label: "Satisfied Clients", value: "2500+" },
                            { label: "Fleet Vehicles", value: "150+" },
                            { label: "Delivery Hubs", value: "50+" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-5xl md:text-7xl font-black text-brand-navy font-heading">{stat.value}</p>
                                <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership & Contact */}
            <section className="py-24 bg-brand-navy text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black uppercase font-heading mb-16">Key Leadership</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        <div className="bg-white/5 p-10 rounded-3xl border border-white/10 w-full max-w-sm mx-auto md:mx-0">
                            <h4 className="text-2xl font-bold uppercase mb-2">Rajbir Verma</h4>
                            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-6">Director</p>
                            <p className="text-gray-400 font-medium">+91 9924866845</p>
                        </div>
                        <div className="bg-white/5 p-10 rounded-3xl border border-white/10 w-full max-w-sm mx-auto md:mx-0">
                            <h4 className="text-2xl font-bold uppercase mb-2">Kunal Verma</h4>
                            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-6">Operations Head</p>
                            <p className="text-gray-400 font-medium">+91 9924837626</p>
                        </div>
                    </div>
                    <div className="mt-16 py-12 border-t border-white/10">
                        <p className="text-gray-400 text-lg italic">
                            "Together, we’re building a future of smart, sustainable, and reliable transportation—driven by innovation, technology, and trust."
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
