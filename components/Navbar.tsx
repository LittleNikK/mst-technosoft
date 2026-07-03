"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#services" },
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
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── lock body scroll when drawer open ──────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════ */}
      <header
        className={[
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white",
          scrolled
            ? "shadow-[0_1px_0_0_#e5e7eb]"
            : "border-b border-gray-100",
        ].join(" ")}
        style={{ isolation: "isolate" }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="h-[70px] flex items-center justify-between gap-6">
            {/* ── Logo ──────────────────────────── */}
            <Link
              href="/"
              className="shrink-0 flex items-center mt-2"
              onClick={() => handleNavClick("#")}
            >
              <img
                src="/mst-logo.png"
                alt="Masterstroke Technosoft"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* ── Desktop pill nav ──────────────── */}
            <nav className="hidden md:flex items-center bg-gray-100 rounded-full p-1 gap-1">
              {navLinks.map((item) => {
                const isActive = activeLink === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={[
                      "px-5 py-2 text-[14px] rounded-full transition-colors duration-150",
                      isActive
                        ? "bg-black text-white font-semibold"
                        : "text-gray-600 hover:text-black font-normal",
                    ].join(" ")}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA + Hamburger ───────────────── */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="blob-btn hidden sm:inline-flex items-center bg-black text-white text-[14px] font-bold px-7 py-2.5 rounded-full transition-colors duration-150"
              >
                Contact
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </Link>

              {/* hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden flex items-center justify-center w-9 h-9 text-gray-700 hover:text-black transition-colors"
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
            "relative mt-[70px] bg-white w-full shadow-xl",
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
                    "py-4 text-[14px] font-medium transition-colors",
                    isActive ? "text-black font-bold" : "text-gray-600 hover:text-black",
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
              className="flex items-center justify-center w-full bg-black hover:bg-gray-800 text-white text-[14px] font-bold px-5 py-3 rounded-full transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}