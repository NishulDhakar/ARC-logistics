import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <div className="flex items-center gap-2 text-brand-navy font-semibold text-sm uppercase tracking-wider">
                            <Settings className="w-4 h-4 text-brand-orange" />
                            Service & Supports
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy uppercase leading-[0.9] font-heading">
                            Fast Precision <br />
                            Cargo Delivery <br />
                            For Everyone
                        </h2>

                        <Button
                            className="bg-[#FCA311] hover:bg-[#e08e0b] text-brand-navy font-bold px-8 py-6 rounded-md text-sm uppercase tracking-wide transition-all hover:scale-105"
                        >
                            Explore Services
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>

                        <p className="text-gray-500 leading-relaxed font-medium max-w-sm">
                            We provide complete logistics support from pickup to final delivery with secure warehousing.
                        </p>
                    </motion.div>

                    {/* Right Content - Cards */}
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6 w-full">

                        {/* Air Freight Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-sky-400/20 group-hover:bg-sky-400/0 transition-colors z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Air Freight"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                            <div className="absolute top-8 left-8 z-20">
                                <h3 className="text-3xl font-black text-white uppercase font-heading leading-none">
                                    Charter Air <br /> Freight
                                </h3>
                            </div>

                            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white text-brand-navy px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg"
                                >
                                    Book a Shipment
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Ocean Freight Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-blue-600"
                        >
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661963780999-6712fcb46eec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29udGluZW50YWwlMjBPY2VhbiUyMEZyZWlnaHR8ZW58MHx8MHx8fDA%3D"
                                alt="Ocean Freight"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-overlay group-hover:opacity-80"
                            />

                            <div className="absolute top-8 right-8 z-20 text-right">
                                <h3 className="text-3xl font-black text-white uppercase font-heading leading-none">
                                    Continental <br /> Ocean Freight
                                </h3>
                                <p className="text-white/80 text-xs mt-2 font-medium">
                                    One customer can fill a <br /> full container load
                                </p>
                            </div>

                            <div className="absolute bottom-8 left-8 z-20">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 45 }}
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                                >
                                    <ArrowRight className="w-5 h-5 text-brand-navy -rotate-45" />
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
