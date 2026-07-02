"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  /* ── scroll listener ─────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close drawer on resize to desktop ──────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── lock body scroll when drawer open ──────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Self-contained styles for cl-effect-1 roll ── */}
      <style>{`
        .nav-roll {
          display: inline-block;
          position: relative;
          overflow: hidden;
          /* reserve height so the container doesn't collapse */
          vertical-align: top;
        }

        /* visible text */
        .nav-roll span {
          display: block;
          transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        /* hover-text clone — sits below, slides up */
        .nav-roll::after {
          content: attr(data-hover);
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          color: #dc2626; /* red-600 */
          transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        /* on hover: slide both up by 100% */
        .nav-roll-link:hover .nav-roll span,
        .nav-roll-link:hover .nav-roll::after {
          transform: translateY(-100%);
        }

        /* active link: show red colour statically, no slide */
        .nav-roll-link.is-active .nav-roll span {
          color: #dc2626;
        }
      `}</style>

      {/* ════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════ */}
      <header
        className={[
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-[0_1px_0_0_#e5e7eb]"
            : "bg-white border-b border-gray-100",
        ].join(" ")}
        style={{ isolation: "isolate" }}  /* blocks canvas bleed-through */
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="h-[66px] flex items-center justify-between gap-6">

            {/* ── Logo ──────────────────────────── */}
            <Link
              href="/"
              className="shrink-0 flex items-center"
              onClick={() => handleNavClick("#")}
            >
              <img
                src="/mst-logo.png"
                alt="Masterstroke Technosoft"
                className="h-16 w-auto object-contain mt-2"
              />
            </Link>

            {/* ── Desktop nav ───────────────────── */}
            <nav className="hidden md:flex items-center gap-0">
              {navLinks.map((item) => {
                const isActive = activeLink === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={[
                      "nav-roll-link",
                      "px-4 py-1.5 text-[13px] font-semibold tracking-widest uppercase",
                      "text-gray-500 transition-colors duration-150",
                      isActive ? "is-active" : "",
                    ].join(" ")}
                  >
                    <span
                      className="nav-roll"
                      data-hover={item.name}
                    >
                      <span>{item.name}</span>
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA + Hamburger ───────────────── */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="hidden sm:inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-[13px] font-semibold tracking-wide px-5 py-2.5 transition-colors duration-150"
              >
                Get Started
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>

              {/* hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden flex items-center justify-center w-9 h-9 text-gray-700 hover:text-red-600 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════════ */}
      <div
        className={[
          "fixed inset-0 z-40 flex flex-col md:hidden",
          "transition-opacity duration-200",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* panel */}
        <div
          className={[
            "relative mt-[66px] bg-white w-full shadow-xl",
            "transition-transform duration-300 ease-out",
            mobileOpen ? "translate-y-0" : "-translate-y-4",
          ].join(" ")}
        >
          <nav className="flex flex-col divide-y divide-gray-100 px-5">
            {navLinks.map((item) => {
              const isActive = activeLink === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={[
                    "py-4 text-[13px] font-semibold tracking-widest uppercase transition-colors",
                    isActive ? "text-red-600" : "text-gray-600 hover:text-gray-900",
                  ].join(" ")}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* mobile CTA */}
          <div className="px-5 py-5">
            <Link
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white text-[13px] font-semibold tracking-wide px-5 py-3 transition-colors"
            >
              Get Started
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}