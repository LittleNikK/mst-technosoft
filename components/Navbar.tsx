"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-[68px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/mst-logo.png"
              alt="Masterstroke Technosoft"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Nav links — centered */}
          <nav className="hidden md:flex items-center gap-1 cl-effect-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link-item"
                data-hover={item.name}
              >
                <span data-hover={item.name}>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-150"
          >
            Get Started
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>

        </div>
      </div>
    </header>
  );
}