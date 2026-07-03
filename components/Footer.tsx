"use client";

import Link from "next/link";
import { Link as LinkIcon, X as TwitterIcon, Send, Video, GitBranch, ArrowUpRight } from "lucide-react";

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

const socialLinks = [
    { label: "LinkedIn", href: "#", icon: LinkIcon },
    { label: "X (Twitter)", href: "#", icon: TwitterIcon },
    { label: "Telegram", href: "#", icon: Send },
    { label: "YouTube", href: "#", icon: Video },
    { label: "GitHub", href: "#", icon: GitBranch },
];

export default function Footer() {
    return (
        <footer
            className="relative bg-black border-t border-white/[0.06] overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/bg1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

            {/* ── Background signature: oversized logo bleeding off the left edge ── */}
            <img
                src="/mst-logo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-1/2 bottom-0 transform -translate-x-1/2 h-full w-auto object-contain opacity-[0.0]"
                style={{ filter: "grayscale(1) brightness(1.6)" }}
            />
            {/* soft red glow anchored behind the mark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-red-700/[0.08] blur-[110px]"
            />

            <div className="relative max-w-7xl mx-auto px-8 lg:px-12">

                {/* ── Main row ── */}
                <div className="grid lg:grid-cols-[3.5fr_1fr_1fr_1fr] gap-12 lg:gap-16 pt-16 pb-0 border-b border-white/[0.06]">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link href="/" className="inline-block">
                            <img
                                src="/mst-logo.png"
                                alt="Masterstroke Logo"
                                className="w-full max-w-[280px] h-auto object-contain"
                            />
                        </Link>
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
                            {socialLinks.map((l) => (
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

                {/* Stretched Social Icons */}
                <div className="flex items-center justify-between w-full py-3 border-b border-white/[0.06]">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            aria-label={label}
                            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.08] text-gray-500 hover:text-white hover:border-red-600/60 hover:bg-red-600/[0.08] transition-colors duration-150"
                        >
                            <Icon size={20} strokeWidth={1.8} />
                        </Link>
                    ))}
                </div>

                {/* ── Bottom bar ── */}
                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
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