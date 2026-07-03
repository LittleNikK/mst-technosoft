"use client";

import {
    Code2,
    Blocks,
    Globe,
    Smartphone,
    ArrowUpRight,
} from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Smart Contracts",
        description:
            "Build transparent, automated, and trustless digital agreements that power decentralized applications across the MST ecosystem.",
    },
    {
        icon: Blocks,
        title: "Blockchain Development",
        description:
            "Smart contracts, dApps and Web3 infrastructure powered by MST Blockchain.",
        accent: true,
    },
    {
        icon: Globe,
        title: "Validator Network",
        description:
            "A decentralized validator ecosystem securing the blockchain through participation, governance, and transaction validation.",
    },
    {
        icon: Smartphone,
        title: "Web3 Ecosystem",
        description:
            "Supporting developers, digital assets, decentralized applications, wallets, governance, and future blockchain innovation.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 lg:py-32 bg-[#111111]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 lg:mb-5">
                            {/* <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> */}
                            <span className="body-text text-[11px] font-bold tracking-[0.2em] text-red-500 uppercase">
                                OUR TECHNOLOGY
                            </span>
                        </div>
                        <h2 className="section-heading text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-white leading-[1.1] lg:leading-[1.05] tracking-[-1px]">
                            Technologies Powering The
                            <br />
                            <span className="text-red-500">MST Ecosystem.</span>
                        </h2>
                    </div>
                    <p className="body-text text-[14px] sm:text-[15px] text-gray-400 leading-[1.6] lg:leading-[1.7] max-w-[100%] sm:max-w-[460px] text-left lg:mb-1">
                        Masterstroke develops blockchain infrastructure that enables secure transactions, decentralized governance, enterprise integration, and digital asset innovation across modern industries.
                    </p>
                </div>

                <div className="h-px bg-white/[0.07] mb-10" />

                {/* Grid — 4 cards, single row */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-white/[0.07] rounded-xl overflow-hidden border border-white/[0.07]">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={i}
                                className={`
                  group relative flex flex-col justify-between p-7 min-h-[220px]
                  transition-colors duration-200 cursor-pointer
                  ${service.accent
                                        ? "bg-red-600 hover:bg-red-500"
                                        : "bg-[#181818] hover:bg-[#1f1f1f]"
                                    }
                `}
                            >
                                <div className="flex items-start justify-between mb-10">
                                    <Icon
                                        size={22}
                                        className={service.accent ? "text-white" : "text-red-500"}
                                        strokeWidth={1.5}
                                    />
                                    <ArrowUpRight
                                        size={16}
                                        className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${service.accent ? "text-white" : "text-gray-500"}`}
                                    />
                                </div>
                                <div>
                                    <h3 className="section-heading text-[16px] font-bold text-white mb-2.5 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className={`body-text text-[13px] leading-[1.65] ${service.accent ? "text-red-100" : "text-gray-500"}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer CTA */}
                <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <p className="body-text text-[13px] text-gray-600 max-w-[100%] sm:max-w-[60%]">
                        Designed to provide the complete infrastructure required for the next generation of decentralized applications.
                    </p>
                    <a
                        href="#contact"
                        className="cta-button inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-white border border-white/20 hover:border-white/40 px-5 py-2.5 rounded-full transition-colors duration-200"
                    >
                        Explore Technology →
                        <ArrowUpRight size={13} />
                    </a>
                </div>

            </div>

            <style jsx>{`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@400;500;700;800&display=swap');

              .section-heading {
                font-family: 'Manrope', sans-serif !important;
              }
              .body-text {
                font-family: 'Inter', sans-serif !important;
              }
              .cta-button {
                font-family: 'Inter', sans-serif !important;
                font-weight: 600 !important;
              }
            `}</style>
        </section>
    );
}