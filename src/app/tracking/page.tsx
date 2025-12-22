"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, Package, Truck, CheckCircle2, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function TrackingPage() {
    const [trackingId, setTrackingId] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        if (!trackingId) return;
        setIsSearching(true);
        // Simulate API call
        setTimeout(() => {
            setIsSearching(false);
            setShowResult(true);
        }, 1500);
    };

    return (
        <main className="relative min-h-screen bg-white overflow-x-hidden selection:bg-brand-orange selection:text-white">
            <Navbar />

            <section className="pt-40 pb-24 bg-brand-navy min-h-[60vh] flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none font-heading">
                                Track Your <br />
                                <span className="text-brand-orange">Shipment</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                                Enter your tracking number below to get real-time updates on your cargo's current location and estimated delivery time.
                            </p>

                            <form onSubmit={handleTrack} className="mt-12 relative max-w-2xl mx-auto">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            type="text"
                                            placeholder="Enter Tracking ID (e.g. ARC12345678)"
                                            className="pl-12 h-16 bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl text-lg focus:bg-white/20 transition-all"
                                            value={trackingId}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTrackingId(e.target.value)}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="h-16 px-10 bg-brand-orange hover:bg-brand-orange/90 text-brand-navy font-bold text-lg rounded-xl transition-all"
                                        disabled={isSearching}
                                    >
                                        {isSearching ? "Searching..." : "Track Now"}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tracking Results Area */}
            <section className="py-24 bg-white min-h-[40vh]">
                <div className="container mx-auto px-6">
                    {!showResult && !isSearching && (
                        <div className="text-center py-20 opacity-30">
                            <Package className="w-20 h-20 mx-auto text-brand-navy mb-4" />
                            <p className="text-xl font-medium text-brand-navy">Waiting for Tracking ID...</p>
                        </div>
                    )}

                    {isSearching && (
                        <div className="max-w-4xl mx-auto">
                            <div className="animate-pulse space-y-8">
                                <div className="h-40 bg-gray-100 rounded-3xl" />
                                <div className="h-64 bg-gray-100 rounded-3xl" />
                            </div>
                        </div>
                    )}

                    {showResult && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* Status Header */}
                            <div className="bg-brand-navy text-white p-8 md:p-12 rounded-3xl shadow-2xl mb-8 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div>
                                    <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Current Status</p>
                                    <h2 className="text-4xl font-black uppercase font-heading">In Transit</h2>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-400 text-sm mb-1 uppercase">Estimated Delivery</p>
                                    <p className="text-2xl font-bold">Oct 29, 2023</p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
                                <h3 className="text-2xl font-bold text-brand-navy mb-12 uppercase">Shipment History</h3>

                                <div className="space-y-0">
                                    {[
                                        { status: "Dispatched", location: "New Delhi Hub", time: "Oct 24, 10:30 AM", current: false, icon: Package },
                                        { status: "In Transit", location: "Jaipur Sorting Center", time: "Oct 25, 02:15 PM", current: true, icon: Truck },
                                        { status: "Incoming", location: "Mumbai Destination", time: "Expected Oct 29", current: false, icon: MapPin },
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-6 pb-12 last:pb-0 group">
                                            <div className="flex flex-col items-center">
                                                <div className={cn(
                                                    "w-12 h-12 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500",
                                                    step.current ? "bg-brand-orange text-brand-navy" : "bg-gray-100 text-gray-400"
                                                )}>
                                                    <step.icon className="w-6 h-6" />
                                                </div>
                                                {idx !== 2 && (
                                                    <div className="w-1 h-full bg-gray-100 mt-2 rounded-full" />
                                                )}
                                            </div>
                                            <div className="pt-2">
                                                <h4 className={cn("text-xl font-bold uppercase", step.current ? "text-brand-navy" : "text-gray-400")}>
                                                    {step.status}
                                                </h4>
                                                <p className="text-gray-500 font-medium">{step.location}</p>
                                                <p className="text-sm text-gray-400 mt-1 font-mono">{step.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
