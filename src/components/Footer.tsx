"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-brand-navy text-white pt-20 pb-12 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">

                    {/* Left Section - Newsletter & Brand */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black uppercase font-heading leading-tight tracking-tight">
                                Signup to receive our offer, <br />
                                and stay upto date
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="bg-brand-navy border border-gray-700 rounded-sm px-4 py-3 w-full focus:outline-none focus:border-brand-orange text-sm placeholder:text-gray-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-brand-navy border border-gray-700 rounded-sm px-4 py-3 w-full focus:outline-none focus:border-brand-orange text-sm placeholder:text-gray-500"
                                />
                                <Button className="bg-[#FCA311] hover:bg-[#e08e0b] text-brand-navy font-bold px-8 py-3 rounded-sm uppercase tracking-wide">
                                    Submit <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-end gap-8">
                            <div className="relative w-64 h-32 rounded-lg overflow-hidden border border-white/10 hidden md:block">
                                <Image
                                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Fleet"
                                    fill
                                    className="object-cover opacity-60 hover:opacity-100 transition-opacity"
                                />
                            </div>

                            <div>
                                <h1 className="text-6xl md:text-8xl font-black uppercase font-heading tracking-tighter leading-none text-white/90">
                                    ARC
                                </h1>
                            </div>
                            <div className="flex flex-col gap-2">      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Office Address -</div>
                                <p className="text-gray-300 text-sm max-w-xs ml-auto">
                                    T-14, 3rd Floor, Super Arcade Complex, <br />
                                    Near Ashirwad Hotel, Valia Chokdi, <br />
                                    GIDC, Ankleshwar, Dist. Bharuch
                                </p>  </div>

                        </div>
                    </div>

                    {/* Right Section - Navigation & Contact */}
                    <div className="lg:w-1/3 flex flex-col items-end text-right space-y-8">
                        <nav className="flex flex-col gap-6 text-xl md:text-2xl font-black uppercase font-heading tracking-tight">
                            <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link>
                            <Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link>
                            <Link href="/tracking" className="hover:text-brand-orange transition-colors">Tracking</Link>
                            <Link href="/privacy" className="hover:text-brand-orange transition-colors text-white/50">Privacy Policy</Link>
                        </nav>

                        <div className="pt-8 text-right space-y-4 ">
                            <div className="space-y-2">
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Contact With Us -</div>
                                <div className="flex flex-col gap-1 text-sm text-gray-300">
                                    <div className="flex items-center justify-end gap-2">
                                        <Phone className="w-3 h-3 text-brand-orange" /> Rajbir Verma: +91 9924866845
                                    </div>
                                    <div className="flex items-center justify-end gap-2">
                                        <Phone className="w-3 h-3 text-brand-orange" /> Kunal Verma: +91 9924837626
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}


