import React from "react";
import { MessageSquare, Phone, ShieldCheck } from "lucide-react";

export function StatsStrip() {
    return (
        <div className="container mx-auto px-6 relative z-30 -mt-24 lg:-mt-32 mb-24">
            <div className="bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row items-center border border-gray-100 overflow-hidden">

                {/* Left: Assistant Card */}
                <div className="lg:w-1/4 p-8 border-r border-gray-100 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-brand-navy font-bold text-lg">
                            KV
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-navy">Kunal Verma</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wide">Key Contact</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 mb-4 w-full relative">
                        <p className="text-xs text-gray-600">How can I assist you with your logistics today?</p>
                        <div className="absolute top-1/2 -left-2 w-3 h-3 bg-gray-50 rotate-45 -translate-y-1/2" />
                    </div>

                    <a href="tel:+919924837626" className="w-full bg-blue-50 text-brand-light-blue p-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold cursor-pointer hover:bg-blue-100 transition-colors">
                        <Phone className="w-4 h-4" />
                        Book Cargo Now
                    </a>

                    <div className="flex items-center gap-2 mt-4 text-[10px] text-gray-500 font-medium">
                        <ShieldCheck className="w-3 h-3 text-brand-success" />
                        Trusted by 2500+ Clients
                    </div>
                </div>

                {/* Middle: Mission Text */}
                <div className="lg:w-2/4 p-10 flex flex-col justify-center items-center text-center">
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        <MessageSquare className="w-4 h-4 text-brand-orange" />
                        Pan-India Reach
                    </div>
                    <h3 className="text-3xl font-black text-brand-navy uppercase font-heading leading-tight mb-6">
                        Connecting India, <br />
                        Streamlining Your Logistics
                    </h3>

                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] font-bold">ARC</div>
                            ))}
                        </div>
                        <div>
                            <div className="font-bold text-brand-navy">50000+</div>
                            <div className="text-xs text-gray-500">Successful Deliveries</div>
                        </div>
                    </div>
                </div>

                {/* Right: Booking Stats */}
                <div className="lg:w-1/4 bg-blue-50/50 p-8 h-full min-h-[300px] flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="font-bold text-brand-navy uppercase tracking-wider text-sm">Recent Activity</h4>
                        <span className="text-xs bg-white px-2 py-1 rounded shadow-sm text-gray-500">Live ▼</span>
                    </div>

                    <div className="space-y-4">
                        {[
                            { name: "Chemical Tanker", id: "Grasim Industries", status: "In Transit" },
                            { name: "Bulk Machinery", id: "KLJ Group", status: "Loaded" }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-start pb-4 border-b border-gray-200/50 last:border-0">
                                <div>
                                    <div className="text-xs font-bold text-brand-navy">{item.name}</div>
                                    <div className="text-[10px] text-gray-400">{item.id}</div>
                                </div>
                                <div className="text-[10px] font-black uppercase text-brand-orange">{item.status}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="font-bold text-brand-navy text-sm">Active Shipments:</div>
                        <div className="font-bold text-brand-navy text-sm">142</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
