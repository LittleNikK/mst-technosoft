"use client";

import Link from "next/link";

const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Vision", href: "#about" },
    { label: "Technology", href: "#services" },
    { label: "Ecosystem", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const ecosystemLinks = [
    { label: "MST Blockchain", href: "#" },
    { label: "Whitepaper", href: "#" },
    { label: "Validator Portal", href: "#" },
    { label: "Developer Resources", href: "#" },
];

const communityLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "GitHub", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-8 lg:px-12">

                {/* ── Main row ── */}
                <div className="grid lg:grid-cols-[1fr_auto_auto_auto] gap-12 lg:gap-20 py-14 border-b border-white/[0.06]">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-5">
                            <img
                                src="/mst-logo.png"
                                alt="Masterstroke Logo"
                                className="h-12 w-auto object-contain shrink-0"
                            />
                            <div className="leading-none">
                                <p className="section-heading text-[13px] font-bold text-white tracking-[0.05em]">MASTERSTROKE</p>
                                <p className="body-text text-[9px] tracking-[0.28em] text-gray-600 mt-0.5">TECHNOSOFT</p>
                            </div>
                        </Link>
                        <p className="body-text text-[13px] text-gray-500 leading-[1.7] max-w-[220px]">
                            Building the Future of Decentralized Innovation.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="section-heading text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-5">
                            Company
                        </p>
                        <ul className="space-y-3">
                            {companyLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="body-text text-[13px] text-gray-400 hover:text-white transition-colors duration-150"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <p className="section-heading text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-5">
                            Ecosystem
                        </p>
                        <ul className="space-y-3">
                            {ecosystemLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="body-text text-[13px] text-gray-400 hover:text-white transition-colors duration-150"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <p className="section-heading text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-5">
                            Community
                        </p>
                        <ul className="space-y-3">
                            {communityLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="body-text text-[13px] text-gray-400 hover:text-red-500 transition-colors duration-150"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* ── Bottom bar ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
                    <p className="body-text text-[12px] text-gray-600">
                        © {new Date().getFullYear()} Masterstroke Technosoft Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="body-text text-[12px] text-gray-600">MST Blockchain</span>
                        <span className="w-px h-3 bg-white/10" />
                        <span className="body-text text-[12px] text-gray-600">Made in India</span>
                    </div>
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
            `}</style>
        </footer>
    );
}