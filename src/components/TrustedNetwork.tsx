"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const clients = [
    "Aditya Birla (Grasim)",
    "Lupin",
    "GNFC",
    "KLJ Group",
    "Aditya Birla (Grasim)", // Repeat for seamless loop
    "Lupin",
    "GNFC",
    "KLJ Group",
];

export function TrustedNetwork() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-brand-light-blue/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 text-center mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex flex-col items-center gap-4"
                >
                    <Badge variant="outline" className="px-4 py-2 text-sm font-semibold border-2 border-brand-orange/20 bg-brand-orange/5">
                        <Star className="w-4 h-4 mr-2 text-brand-orange fill-brand-orange" />
                        Trusted Partners
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                        Delivering excellence to India's most prestigious companies
                    </p>
                </motion.div>
            </div>

            <div className="flex overflow-hidden relative w-full">
                {/* Enhanced gradients for smooth fade at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap gap-20 items-center py-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {clients.concat(clients).map((client, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, color: "hsl(var(--brand-orange))" }}
                            className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-brand-orange transition-all cursor-pointer select-none relative group"
                        >
                            {client}
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Stats section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 mt-16 relative z-10"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { value: "100+", label: "Happy Clients" },
                        { value: "500+", label: "Fleet Size" },
                        { value: "50K+", label: "Trips Completed" },
                        { value: "15+", label: "Years Experience" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
