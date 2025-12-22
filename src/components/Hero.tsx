"use client";
import React from "react";
import { motion } from "framer-motion";
import { HyperText } from "./ui/hyper-text";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] 
                    bg-cover bg-center"
                />
                {/* Overlay for text readability - darker on left, lighter on right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                <HyperText className="text-6xl md:text-8xl lg:text-5xl font-black text-white uppercase leading-[0.85] tracking-tighter">ADARSH ROAD CARRIER</HyperText>
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.85] tracking-tighter">

                        THE FUTURE OF <br />
                        LOGISTICS
                    </h1>
                </motion.div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-12 left-6 md:left-12 max-w-md"
                >
                    <p className="text-gray-300 text-lg font-light leading-relaxed border-l-2 border-brand-orange pl-4">
                        Connecting India, <br />
                        Streamlining Logistics
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
