"use client";

import { useState, useRef, useEffect } from "react";

const testimonials = [
    {
        quote:
            "MST Blockchain represents a strong vision for building scalable, enterprise-ready blockchain infrastructure with long-term ecosystem growth in mind.",
        name: "Blockchain Researcher",
        role: "Web3 Ecosystem",
        company: "Industry Perspective",
        initials: "BR",
        tag: "Layer 1",
    },
    {
        quote:
            "The platform's focus on decentralization, security, and accessibility creates a solid foundation for developers building next-generation decentralized applications.",
        name: "Web3 Developer",
        role: "Developer Community",
        company: "Community Feedback",
        initials: "WD",
        tag: "Developer",
    },
    {
        quote:
            "Masterstroke Technosoft is building more than a blockchain—it is creating an ecosystem designed to support innovation, collaboration, and digital trust.",
        name: "Technology Analyst",
        role: "Blockchain Analyst",
        company: "Industry Perspective",
        initials: "TA",
        tag: "Innovation",
    },
    {
        quote:
            "A strong Layer 1 network depends on community participation, validator security, and developer adoption. MST Blockchain is focused on all three.",
        name: "Validator Community",
        role: "Network Participant",
        company: "Community Voice",
        initials: "VC",
        tag: "Validator",
    },
    {
        quote:
            "The vision behind MST Blockchain demonstrates a commitment to simplifying blockchain adoption while maintaining scalability and transparency.",
        name: "Enterprise Architect",
        role: "Digital Transformation",
        company: "Technology Community",
        initials: "EA",
        tag: "Enterprise",
    },
    {
        quote:
            "Building blockchain infrastructure requires long-term thinking. The MST ecosystem is designed with future innovation and enterprise readiness in mind.",
        name: "Infrastructure Specialist",
        role: "Blockchain Infrastructure",
        company: "Technology Perspective",
        initials: "IS",
        tag: "Infrastructure",
    },
    {
        quote:
            "By combining modern blockchain architecture with practical real-world applications, Masterstroke is contributing to the evolution of India's Web3 ecosystem.",
        name: "Web3 Advocate",
        role: "Blockchain Community",
        company: "Community Perspective",
        initials: "WA",
        tag: "Web3",
    },
    {
        quote:
            "Innovation grows through collaboration. The MST ecosystem encourages developers, validators, enterprises, and communities to build together.",
        name: "Ecosystem Contributor",
        role: "Community Member",
        company: "MST Ecosystem",
        initials: "EC",
        tag: "Community",
    },
];
// Split into two rows, duplicate for seamless loop
const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

function TestimonialCard({
    t,
    active,
    onClick,
}: {
    t: typeof testimonials[0];
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`
        shrink-0 w-[300px] text-left p-6 rounded-xl border
        transition-all duration-200 cursor-pointer
        ${active
                    ? "bg-red-500 border-red-500 shadow-lg shadow-red-500/20"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                }
      `}
        >
            <p className={`body-text text-[13px] leading-[1.65] font-medium line-clamp-3 ${active ? "text-white" : "text-gray-700"}`}>
                "{t.quote}"
            </p>
            <div className={`flex items-center gap-2.5 mt-4 pt-4 border-t ${active ? 'border-red-400' : 'border-gray-100'}`}>
                <div className={`w-7 h-7 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${active ? "bg-white text-red-500" : "bg-gray-100 text-gray-600"}`}>
                    {t.initials}
                </div>
                <div>
                    <p className={`body-text text-[12px] font-semibold leading-none ${active ? "text-white" : "text-black"}`}>{t.name}</p>
                    <p className={`body-text text-[11px] mt-0.5 ${active ? "text-red-100" : "text-gray-400"}`}>{t.role}, {t.company}</p>
                </div>
                <span className={`body-text ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full border ${active ? "border-red-300 text-red-100" : "border-gray-200 text-gray-400"}`}>
                    {t.tag}
                </span>
            </div>
        </button>
    );
}

function MarqueeRow({
    items,
    direction,
    activeIndex,
    allItems,
    onSelect,
    speed = 35,
}: {
    items: typeof testimonials;
    direction: "left" | "right";
    activeIndex: number;
    allItems: typeof testimonials;
    onSelect: (idx: number) => void;
    speed?: number;
}) {
    // Triple the items so the loop is seamless
    const repeated = [...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div
                className={`flex gap-4 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
                style={{ "--dur": `${speed}s` } as React.CSSProperties}
            >
                {repeated.map((t, i) => {
                    const globalIdx = allItems.findIndex(
                        (a) => a.name === t.name && a.company === t.company
                    );
                    return (
                        <TestimonialCard
                            key={`${t.company}-${i}`}
                            t={t}
                            active={globalIdx === activeIndex}
                            onClick={() => onSelect(globalIdx)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [visible, setVisible] = useState(true);

    const switchTo = (i: number) => {
        if (i === active) return;
        setVisible(false);
        setTimeout(() => {
            setActive(i);
            setVisible(true);
        }, 160);
    };

    // Auto-advance
    useEffect(() => {
        const t = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setActive((p) => (p + 1) % testimonials.length);
                setVisible(true);
            }, 160);
        }, 4500);
        return () => clearInterval(t);
    }, []);

    const t = testimonials[active];

    return (
        <section id="testimonials" className="bg-[#F8F8F8] border-t border-gray-100 py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 lg:px-12">

                {/* ── Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-5">

                        </div>
                        <h2 className="section-heading text-[44px] md:text-[52px] font-extrabold text-black leading-[1.05] tracking-[-1px]">
                            Trusted by teams
                            <br />
                            <span className="text-red-500">who ship.</span>
                        </h2>
                    </div>
                    <p className="body-text text-[15px] text-gray-400 leading-[1.7] max-w-[300px] lg:text-right">
                        Scroll through what our clients say  click any card to read it in full.
                    </p>
                </div>

                {/* ── Featured quote — updates on card click ── */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden mb-10">
                    <div className="grid lg:grid-cols-[1fr_auto] bg-[#0f0f0f]">

                        {/* Quote */}
                        <div
                            className="p-10 lg:p-12 transition-opacity duration-200"
                            style={{ opacity: visible ? 1 : 0 }}
                        >
                            <span className="block text-[80px] text-red-500 font-serif leading-none -mb-2 select-none">"</span>
                            <p className="body-text text-[20px] md:text-[24px] font-semibold text-white leading-[1.5] tracking-[-0.2px] max-w-2xl">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-3 mt-8">
                                <div className="w-10 h-10 rounded-full bg-red-500 text-white text-[12px] font-bold flex items-center justify-center shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="body-text text-[14px] font-semibold text-white leading-none">{t.name}</p>
                                    <p className="body-text text-[12px] text-gray-500 mt-1">{t.role}, {t.company}</p>
                                </div>
                                <span className="body-text ml-4 text-[11px] font-semibold text-gray-600 border border-gray-700 px-3 py-1 rounded-full">
                                    {t.tag}
                                </span>
                            </div>
                        </div>

                        {/* Stat block */}
                        <div className="border-l border-white/[0.06] px-10 py-12 flex flex-col justify-center items-center gap-1 min-w-[180px]">
                            <p className="section-heading text-[52px] font-extrabold text-white leading-none tracking-tight">
                                100<span className="text-red-500">%</span>
                            </p>
                            <p className="body-text text-[11px] text-gray-500 text-center leading-snug mt-2">
                                client retention
                                <br />rate
                            </p>
                            <div className="mt-6 h-px w-12 bg-white/10" />
                        </div>
                    </div>
                </div>

                {/* ── Scrolling marquee rows ── */}
                <div className="flex flex-col gap-4">
                    <MarqueeRow
                        items={row1}
                        direction="left"
                        activeIndex={active}
                        allItems={testimonials}
                        onSelect={switchTo}
                        speed={40}
                    />
                    <MarqueeRow
                        items={row2}
                        direction="right"
                        activeIndex={active}
                        allItems={testimonials}
                        onSelect={switchTo}
                        speed={36}
                    />
                </div>

                <p className="body-text mt-6 text-center text-[12px] text-gray-300">
                    Click any card to feature it above
                </p>
            </div>

            <style jsx>{`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@400;500;700;800&display=swap');

              .section-heading {
                font-family: 'Manrope', sans-serif !important;
              }
              .body-text {
                font-family: 'Inter', sans-serif !important;
              }
            `}</style>
        </section>
    );
}