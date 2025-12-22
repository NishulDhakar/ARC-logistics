"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const companies = [
    { name: "Moventrix Logistics", location: "Ahmedabad" },
    { name: "HTDJ Logistics", location: "Vapi" },
    { name: "HRC Logistics", location: "Ankleshwar & Delhi" },
    { name: "Shree Jagdamba Transport", location: "Haryana" }
];

export function AssociatedCompanies() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[.3em] mb-4">Strategic Partnerships</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-brand-navy uppercase font-heading leading-tight">
                            Associated <br /> Companies
                        </h3>
                    </div>
                    <p className="text-gray-500 max-w-md font-medium">
                        Our strong network of associated companies allows us to provide seamless logistics coverage across multiple industrial hubs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {companies.map((company, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 border-2 border-gray-50 rounded-3xl hover:border-brand-orange/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange/10 transition-colors">
                                <Briefcase className="w-5 h-5 text-brand-navy" />
                            </div>
                            <h4 className="text-xl font-bold text-brand-navy uppercase mb-2 group-hover:text-brand-orange transition-colors">
                                {company.name}
                            </h4>
                            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
                                {company.location}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
