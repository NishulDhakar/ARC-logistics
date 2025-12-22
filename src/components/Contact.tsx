"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

// Dynamic import for Map to avoid SSR issues
const Map = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
            <div className="text-gray-500 font-medium">Loading Interactive Map...</div>
        </div>
    ),
});

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-brand-navy rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Contact Info & Map */}
                        <div className="lg:w-1/2 space-y-8 text-white">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
                                    Let&apos;s Connect
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Ready to optimize your logistics? Reach out to us for a quote or consultation.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6"
                            >
                                {[
                                    {
                                        icon: Phone,
                                        label: "Call Us",
                                        content: ["Rajbir Verma: +91 999 999 9999", "Kunal Verma: +91 888 888 8888"]
                                    },
                                    {
                                        icon: MapPin,
                                        label: "Headquarters",
                                        content: ["Plot No. 123, GIDC,", "Ankleshwar, Gujarat, India"]
                                    },
                                    {
                                        icon: Mail,
                                        label: "Email Us",
                                        content: ["info@adarshroadcarrier.com"]
                                    }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * idx }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-5 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all flex-shrink-0">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                                            {item.content.map((line, i) => (
                                                <p key={i} className="font-semibold text-white">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-64 w-full mt-8"
                            >
                                <Map />
                            </motion.div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-1/2 bg-white rounded-3xl p-10 text-gray-800 shadow-2xl">
                            <h3 className="text-3xl font-bold font-heading mb-2 text-brand-navy">Request a Quote</h3>
                            <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
                            <form className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <Input 
                                            placeholder="John" 
                                            className="h-12 rounded-xl border-2 focus:border-brand-orange transition-colors"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <Input 
                                            placeholder="Doe" 
                                            className="h-12 rounded-xl border-2 focus:border-brand-orange transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <Input 
                                        type="email" 
                                        placeholder="john@company.com" 
                                        className="h-12 rounded-xl border-2 focus:border-brand-orange transition-colors"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                        Service Type <span className="text-red-500">*</span>
                                    </label>
                                    <select className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 transition-all">
                                        <option>FTL (Full Truck Load)</option>
                                        <option>PTL (Part Truck Load)</option>
                                        <option>Liquid/Chemical Tanker</option>
                                        <option>ODC/Project Cargo</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Message</label>
                                    <Textarea 
                                        placeholder="Tell us about your shipment requirements..." 
                                        className="min-h-[140px] rounded-xl border-2 focus:border-brand-orange transition-colors resize-none"
                                    />
                                </div>

                                <Button 
                                    variant="orange" 
                                    size="lg" 
                                    className="w-full h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
                                >
                                    <span>Submit Request</span>
                                    <motion.span
                                        className="ml-2 inline-block"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        →
                                    </motion.span>
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
