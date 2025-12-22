import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        name: "Martin Edwards",
        role: "General Manager",
        company: "Reliable & expert logistics service",
        feedback: "Top-notch logistics with expert, and dedicated support for all your cargo transport needs",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
        name: "James Atkinson",
        role: "Business Proprietor",
        company: "Accurate support, Fully dedicated",
        feedback: "We trust Movexa's dedicated team and we highly recommend them as a leading freight forwarder",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
        name: "Natasha Portman",
        role: "Business Owner",
        company: "Business Owner",
        feedback: "Exceptional 24/7 logistics support from a professional, fully committed team just to solve your headache",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-navy uppercase font-heading leading-none">
                        Our Client Testimonials
                    </h2>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:border-brand-orange hover:text-brand-orange">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:border-brand-orange hover:text-brand-orange">
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between h-full">

                            <div className="space-y-6">
                                <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    [ Client ]
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-black text-brand-navy">{item.rating}</span>
                                    <Star className="w-4 h-4 fill-brand-orange text-brand-orange" />
                                </div>

                                <p className="text-brand-navy font-bold leading-relaxed">
                                    {item.feedback}
                                </p>
                            </div>

                            <div className="pt-8 flex items-center gap-4 mt-auto">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-brand-navy text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="text-[10px] text-gray-400 font-medium max-w-[80px] leading-tight">
                                        {item.company}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
