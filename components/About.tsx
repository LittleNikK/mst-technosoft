"use client";

import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const stats = [
    { value: "5+", label: "Projects delivered" },
    { value: "2+", label: "Years in business" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "40+", label: "Engineers" },
];

const highlights = [
    { title: "Layer 1 Blockchain Innovation" },
    { title: "Decentralized Infrastructure" },
    { title: "Enterprise Blockchain Solutions" },
    { title: "Community Driven Ecosystem" }
];

export default function About() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     if (!canvas) return;

    //     const parent = canvas.parentElement;
    //     if (!parent) return;

    //     let width = parent.offsetWidth;
    //     let height = parent.offsetHeight;

    //     const resizeCanvas = () => {
    //         width = parent.offsetWidth;
    //         height = parent.offsetHeight;
    //         canvas.width = width;
    //         canvas.height = height;
    //     };
    //     resizeCanvas();
    //     window.addEventListener("resize", resizeCanvas);

    //     const ctx = canvas.getContext("2d");
    //     if (!ctx) return;

    //     const colorPalette = [
    //         ["#00ffff", "#ff0000"],
    //         ["#00ff00", "#ff00ff"],
    //         ["#0000ff", "#ffff00"]
    //     ];

    //     let globalColorsIndex = 0;

    //     class CanvasShape {
    //         index: number;
    //         type: 'rect' | 'circle';
    //         progress: number;
    //         duration!: number;
    //         delay!: number;
    //         x!: number;
    //         y!: number;
    //         xStart!: number;
    //         yStart!: number;
    //         xEnd!: number;
    //         yEnd!: number;
    //         rotation!: number;
    //         rotationEnd!: number;
    //         scale!: number;
    //         scaleEnd!: number;
    //         colorsIndex: number;
    //         offsetA: { x: number; y: number };
    //         offsetB: { x: number; y: number };

    //         constructor(index: number, colorsIndex: number) {
    //             this.index = index;
    //             this.type = index % 2 === 1 ? 'rect' : 'circle';
    //             this.colorsIndex = colorsIndex;
    //             this.progress = 0;
    //             const maxOffset = 50;
    //             this.offsetA = { x: Math.random() * maxOffset, y: Math.random() * maxOffset };
    //             this.offsetB = { x: Math.random() * maxOffset, y: Math.random() * maxOffset };
    //             this.reset();
    //         }

    //         reset() {
    //             this.progress = 0;
    //             this.delay = Math.floor(this.index * 6);
    //             this.duration = Math.floor((2 + Math.random() * 4) * 60);
    //             this.x = width / 2;
    //             this.y = height / 2;
    //             this.xStart = width / 2;
    //             this.yStart = height / 2;

    //             const angle = Math.random() * 2 * Math.PI;
    //             const distance = Math.max(width, height) + 150;
    //             this.xEnd = width / 2 + Math.cos(angle) * distance;
    //             this.yEnd = height / 2 + Math.sin(angle) * distance;

    //             this.rotation = 0;
    //             this.rotationEnd = (Math.random() * 2 - 1) * 2 * Math.PI;

    //             this.scale = 0;
    //             this.scaleEnd = 0.5 + Math.random() * 0.75;
    //         }

    //         cycleColors() {
    //             this.colorsIndex = (this.colorsIndex + 1) % colorPalette.length;
    //         }

    //         update() {
    //             if (this.delay > 0) {
    //                 this.delay--;
    //                 return;
    //             }

    //             this.progress += 1 / this.duration;
    //             if (this.progress >= 1) {
    //                 this.reset();
    //                 return;
    //             }

    //             const t = this.progress;
    //             this.x = this.xStart + (this.xEnd - this.xStart) * t;
    //             this.y = this.yStart + (this.yEnd - this.yStart) * t;
    //             this.rotation = this.rotationEnd * t;
    //             this.scale = this.scaleEnd * t;
    //         }

    //         draw(c: CanvasRenderingContext2D) {
    //             if (this.delay > 0 && this.progress === 0) return;

    //             c.save();
    //             c.translate(this.x, this.y);
    //             c.rotate(this.rotation);
    //             c.scale(this.scale, this.scale);

    //             c.globalCompositeOperation = 'multiply';

    //             const colors = colorPalette[this.colorsIndex];

    //             if (this.type === 'rect') {
    //                 c.fillStyle = colors[0];
    //                 c.fillRect(this.offsetA.x - 30, this.offsetA.y - 30, 60, 60);

    //                 c.fillStyle = colors[1];
    //                 c.fillRect(this.offsetB.x - 30, this.offsetB.y - 30, 60, 60);
    //             } else {
    //                 c.fillStyle = colors[0];
    //                 c.beginPath();
    //                 c.arc(this.offsetA.x, this.offsetA.y, 30, 0, 2 * Math.PI);
    //                 c.fill();

    //                 c.fillStyle = colors[1];
    //                 c.beginPath();
    //                 c.arc(this.offsetB.x, this.offsetB.y, 30, 0, 2 * Math.PI);
    //                 c.fill();
    //             }

    //             c.restore();
    //         }
    //     }

    //     const totalGroups = 50;
    //     const shapes: CanvasShape[] = [];
    //     for (let i = 0; i < totalGroups; i++) {
    //         shapes.push(new CanvasShape(i, globalColorsIndex));
    //     }

    //     const handleInteraction = () => {
    //         globalColorsIndex = (globalColorsIndex + 1) % colorPalette.length;
    //         shapes.forEach(s => s.cycleColors());
    //     };

    //     window.addEventListener("click", handleInteraction);
    //     window.addEventListener("touchstart", handleInteraction);

    //     let animationFrameId: number;
    //     const animate = () => {
    //         ctx.clearRect(0, 0, width, height);

    //         shapes.forEach(s => {
    //             s.update();
    //             s.draw(ctx);
    //         });

    //         animationFrameId = requestAnimationFrame(animate);
    //     };
    //     animate();

    //     return () => {
    //         window.removeEventListener("resize", resizeCanvas);
    //         window.removeEventListener("click", handleInteraction);
    //         window.removeEventListener("touchstart", handleInteraction);
    //         cancelAnimationFrame(animationFrameId);
    //     };
    // }, []);

    return (
        <section id="about" className="relative bg-white overflow-hidden">

            {/* ── Top: split full-bleed panel ── */}
            <div className="relative grid lg:grid-cols-2 min-h-[580px]">

                {/* LEFT — dark half, flush to edge */}
                <div className="relative bg-[#0d0d0d] flex flex-col justify-between px-6 sm:px-10 lg:px-16 py-12 lg:py-16 overflow-hidden">

                    {/* Red ambient light — top right bleeds toward the center seam */}
                    {/* <div className="absolute top-0 right-0 w-[380px] h-[380px] rounded-full bg-red-600 blur-[140px] opacity-20 pointer-events-none z-10" />
                    <div className="absolute bottom-0 left-0 w-[260px] h-[260px] rounded-full bg-red-900 blur-[120px] opacity-15 pointer-events-none z-10" /> */}

                    {/* Eyebrow */}
                    <div className="relative z-20">
                        <div className="inline-flex items-center gap-2 mb-10">
                            {/* <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> */}
                            <span className="body-text text-[11px] font-bold tracking-[0.2em] text-red-500 uppercase">
                                About Us
                            </span>
                        </div>

                        {/* Pull quote */}
                        <p className="body-text text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase mb-5">
                            WHO WE ARE
                        </p>
                        <h3 className="section-heading text-[26px] sm:text-[30px] md:text-[36px] font-extrabold text-white leading-[1.2] tracking-[-0.5px] max-w-[340px]">
                            Engineering Trust Through Blockchain Innovation.
                        </h3>
                    </div>

                    {/* Bottom: year founded + a thin red rule */}
                    <div className="relative z-20">
                        <div className="h-px bg-white/[0.08] mb-8" />
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="body-text text-[11px] text-gray-600 uppercase tracking-widest mb-1">Est.</p>
                                <p className="section-heading text-[48px] font-extrabold text-white leading-none tracking-tight">
                                    2023
                                </p>
                            </div>
                            <a
                                href="#contact"
                                className="cta-button group inline-flex items-center gap-2 text-[13px] font-semibold text-gray-400 hover:text-white transition-colors duration-200 pb-1"
                            >
                                Work with us
                                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 border-l border-gray-100 bg-white overflow-hidden isolate">
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-65 pointer-events-none" />

                    <div className="relative z-20">
                        {/* Heading */}
                        <h2 className="section-heading text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-extrabold leading-[0.95] tracking-[-2px] mb-8">
                            <span className="text-black">About </span>
                            <span className="text-black">Masterstroke</span>
                            <br />
                            <span className="text-red-500">Technosoft</span>
                        </h2>

                        {/* Body */}
                        <div className="body-text space-y-4 text-[14px] sm:text-[15px] text-gray-800 leading-[1.6] sm:leading-[1.75] max-w-[100%] sm:max-w-[460px] mb-10">
                            <p>
                                Masterstroke Technosoft Pvt. Ltd. was established with a vision to redefine how digital systems create, exchange, and protect value. Rather than building isolated software products, we focus on creating foundational technologies that enable transparent, decentralized, and scalable digital ecosystems.
                            </p>
                            <p>
                                As the organization behind MST Blockchain, our work is centered on solving real-world challenges through distributed ledger technology. We believe blockchain should be practical, accessible, and capable of supporting enterprises, developers, governments, and individuals alike.
                            </p>
                        </div>

                        {/* Highlights — left-bar list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                            {highlights.map(({ title }) => (
                                <div key={title} className="flex items-center gap-3">
                                    <div className="w-0.5 h-5 bg-red-500 shrink-0 rounded-full" />
                                    <span className="body-text text-[13px] font-semibold text-gray-800">{title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom: full-width stats bar ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-200 bg-white">
                {stats.map(({ value, label }, i) => (
                    <div
                        key={label}
                        className={`
              group px-6 sm:px-10 lg:px-12 py-8 sm:py-10 flex flex-col justify-center
              border-gray-200 
              hover:bg-red-500 transition-colors duration-200 cursor-default
              ${i % 2 === 0 ? "border-r" : "border-r-0 lg:border-r"}
              ${i < 2 ? "border-b lg:border-b-0" : ""}
              last:border-r-0
            `}
                    >
                        <p className="section-heading text-[42px] font-extrabold text-black group-hover:text-white leading-none tracking-tight transition-colors duration-200">
                            {value}
                        </p>
                        <p className="body-text text-[12px] text-gray-400 group-hover:text-red-100 mt-2 font-medium transition-colors duration-200">
                            {label}
                        </p>
                    </div>
                ))}
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