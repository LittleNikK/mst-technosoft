"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
    { Icon: Mail, label: "Email", value: "info@masterstroketechnosoft.com", href: "mailto:info@masterstroketechnosoft.com" },
    { Icon: MapPin, label: "Office", value: "Kohinoor World Towers, Old Mumbai - Pune Hwy, opp. Vijay Sales, Pimpri Colony, Pune, Maharashtra 411019, India", href: "#" },
];

const services = [
    "Software Development",
    "Blockchain Development",
    "Web Applications",
    "Mobile Apps",
    "UI / UX Design",
    "Cloud Solutions",
    "Digital Transformation",
    "Enterprise Solutions",
];

export default function Contact() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [focused, setFocused] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [animState, setAnimState] = useState<"idle" | "shrinking" | "filling" | "success-circle">("idle");

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        let xC = canvas.width / 2;
        let yC = canvas.height / 2;

        const resizeCanvas = () => {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;

            let targetX = canvas.width / 2;
            let targetY = canvas.height / 2;

            const formCard = parent.querySelector("#contact-form-card");
            if (formCard) {
                const cardRect = formCard.getBoundingClientRect();
                const parentRect = parent.getBoundingClientRect();
                targetX = (cardRect.left - parentRect.left) + cardRect.width / 2;
                targetY = (cardRect.top - parentRect.top) + cardRect.height / 2;
            }

            xC = targetX;
            yC = targetY;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.imageSmoothingEnabled = false;

        let stepCount = 0;
        let particles: any[] = [];
        const lifespan = 1000;
        const maxPop = 200;
        const birthFreq = 2;

        // Build grid
        const gridSize = 8;
        const gridSteps = Math.floor(1000 / gridSize);
        const grid: any[] = [];
        let gridIndex = 0;

        for (let xx = -500; xx < 500; xx += gridSize) {
            for (let yy = -500; yy < 500; yy += gridSize) {
                const r = Math.sqrt(xx * xx + yy * yy);
                const r0 = 100;
                let field = 0;

                if (r < r0) {
                    field = (255 / r0) * r;
                } else if (r > r0) {
                    field = 255 - Math.min(255, (r - r0) / 2);
                }

                const isEdge =
                    xx === -500
                        ? "left"
                        : xx === -500 + gridSize * (gridSteps - 1)
                            ? "right"
                            : yy === -500
                                ? "top"
                                : yy === -500 + gridSize * (gridSteps - 1)
                                    ? "bottom"
                                    : false;

                grid.push({
                    x: xx,
                    y: yy,
                    busyAge: 0,
                    spotIndex: gridIndex,
                    isEdge,
                    field,
                });
                gridIndex++;
            }
        }
        const gridMaxIndex = gridIndex;

        const dataXYtoCanvasXY = (x: number, y: number) => {
            const zoom = 2.4;
            const dataToImageRatio = 1;
            const xx = xC + x * zoom * dataToImageRatio;
            const yy = yC + y * zoom * dataToImageRatio;
            return { x: xx, y: yy };
        };

        const birth = () => {
            const gridSpotIndex = Math.floor(Math.random() * gridMaxIndex);
            const gridSpot = grid[gridSpotIndex];
            if (!gridSpot) return;
            const x = gridSpot.x;
            const y = gridSpot.y;

            const isRed = Math.random() < 0.6; // 60% red, 40% black
            const hue = isRed ? 355 : 0;
            const sat = isRed ? 95 : 0;
            const lum = isRed
                ? 40 + Math.floor(25 * Math.random())
                : 15 + Math.floor(20 * Math.random());

            particles.push({
                hue,
                sat,
                lum,
                x,
                y,
                xLast: x,
                yLast: y,
                xSpeed: 0,
                ySpeed: 0,
                age: 0,
                ageSinceStuck: 0,
                attractor: {
                    oldIndex: gridSpotIndex,
                    gridSpotIndex,
                },
                name: "seed-" + Math.ceil(10000000 * Math.random()),
            });
        };

        const kill = (particleName: string) => {
            particles = particles.filter(p => p.name !== particleName);
        };

        const move = () => {
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.xLast = p.x;
                p.yLast = p.y;

                const index = p.attractor.gridSpotIndex;
                let gridSpot = grid[index];
                if (!gridSpot) continue;

                if (Math.random() < 0.5) {
                    if (!gridSpot.isEdge) {
                        const topSpot = grid[index - 1];
                        const bottomSpot = grid[index + 1];
                        const leftSpot = grid[index - gridSteps];
                        const rightSpot = grid[index + gridSteps];

                        if (topSpot && bottomSpot && leftSpot && rightSpot) {
                            const chaos = 30;
                            const spots = [topSpot, bottomSpot, leftSpot, rightSpot];
                            const scores = spots.map(s => ({
                                spot: s,
                                score: s.field + chaos * Math.random(),
                            }));
                            const potentialNewGridSpot = scores.reduce(
                                (max, curr) => (curr.score > max.score ? curr : max),
                                scores[0]
                            ).spot;

                            if (
                                potentialNewGridSpot.busyAge === 0 ||
                                potentialNewGridSpot.busyAge > 15
                            ) {
                                p.ageSinceStuck = 0;
                                p.attractor.oldIndex = index;
                                p.attractor.gridSpotIndex = potentialNewGridSpot.spotIndex;
                                gridSpot = potentialNewGridSpot;
                                gridSpot.busyAge = 1;
                            } else {
                                p.ageSinceStuck++;
                            }
                        } else {
                            p.ageSinceStuck++;
                        }
                    } else {
                        p.ageSinceStuck++;
                    }

                    if (p.ageSinceStuck === 10) {
                        kill(p.name);
                        i--;
                        continue;
                    }
                }

                const k = 8;
                const visc = 0.4;
                const dx = p.x - gridSpot.x;
                const dy = p.y - gridSpot.y;

                const xAcc = -k * dx;
                const yAcc = -k * dy;

                p.xSpeed += xAcc;
                p.ySpeed += yAcc;
                p.xSpeed *= visc;
                p.ySpeed *= visc;

                p.x += 0.1 * p.xSpeed;
                p.y += 0.1 * p.ySpeed;
                p.age++;

                if (p.age > lifespan) {
                    kill(p.name);
                    i--;
                }
            }
        };

        const draw = () => {
            if (!particles.length) return;

            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(250, 250, 250, 0.08)";
            ctx.fill();
            ctx.closePath();

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const h = p.hue;
                const s = p.sat;
                const l = p.lum;
                const a = 0.75;

                const last = dataXYtoCanvasXY(p.xLast, p.yLast);
                const now = dataXYtoCanvasXY(p.x, p.y);
                const attracSpot = grid[p.attractor.gridSpotIndex];
                if (!attracSpot) continue;
                const attracXY = dataXYtoCanvasXY(attracSpot.x, attracSpot.y);
                const oldAttracSpot = grid[p.attractor.oldIndex];
                if (!oldAttracSpot) continue;
                const oldAttracXY = dataXYtoCanvasXY(oldAttracSpot.x, oldAttracSpot.y);

                ctx.beginPath();
                ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
                ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;

                ctx.moveTo(last.x, last.y);
                ctx.lineTo(now.x, now.y);
                ctx.lineWidth = 1.0;
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(oldAttracXY.x, oldAttracXY.y);
                ctx.lineTo(attracXY.x, attracXY.y);
                ctx.arc(attracXY.x, attracXY.y, 1.0, 0, 2 * Math.PI);
                ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${a / 12})`;
                ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${a / 12})`;
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
            }
        };

        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fafafa";
        ctx.fill();
        ctx.closePath();

        let animationFrameId: number;
        const evolve = () => {
            stepCount++;
            grid.forEach(e => {
                if (e.busyAge > 0) e.busyAge++;
            });

            if (stepCount % birthFreq === 0 && particles.length < maxPop) {
                birth();
            }

            move();
            draw();

            animationFrameId = requestAnimationFrame(evolve);
        };

        evolve();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get("fullName"),
            company: formData.get("company"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            timestamp: new Date().toISOString(),
        };

        // Phase 1: text fades, button collapses
        setAnimState("shrinking");

        // Submit to Google Sheet URL (asynchronously)
        let fetchPromise: Promise<any> = Promise.resolve();
        const sheetUrl = "#"; // Replace with Google Sheets Web App URL
        if (sheetUrl && sheetUrl !== "#") {
            fetchPromise = fetch(sheetUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                mode: "no-cors",
            }).catch((err) => console.error("Error submitting to Google Sheet:", err));
        }

        await new Promise((r) => setTimeout(r, 400));

        // Phase 2: progress bar fills up
        setAnimState("filling");
        await new Promise((r) => setTimeout(r, 1200));

        // Make sure fetch is complete
        await fetchPromise;

        // Phase 3: turn into checkmark circle
        setAnimState("success-circle");
        await new Promise((r) => setTimeout(r, 1000));

        // Phase 4: show success state page
        setSubmitted(true);
        setLoading(false);
        setAnimState("idle");
    };

    return (
        <section id="contact" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden isolate">
            <div className="absolute inset-0 bg-[#fafafa] z-[-2] pointer-events-none" />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[-1] opacity-60 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* ── 2-col layout ── */}
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">

                    {/* ══ LEFT ══ */}
                    <div>


                        {/* Heading */}
                        <h2 className="section-heading text-[42px] sm:text-[52px] md:text-[62px] font-extrabold text-black leading-[1.05] sm:leading-[0.95] tracking-[-1px] sm:tracking-[-2px] mb-4 sm:mb-6">
                            Start Building
                            <br />
                            <span className="text-red-500">OnFuture.</span>
                        </h2>

                        <p className="body-text text-[14px] sm:text-[15px] text-gray-500 leading-[1.6] sm:leading-[1.7] max-w-[100%] sm:max-w-[360px] mb-8 sm:mb-12">
                            Whether you're a developer exploring blockchain technology, an enterprise evaluating decentralized infrastructure, or an organization seeking strategic collaboration, our team is ready to connect
                        </p>

                        {/* Divider */}
                        <div className="h-px bg-gray-200 mb-10" />

                        {/* Contact info — clean list, no pill icons */}
                        <div className="space-y-7">
                            {contactInfo.map(({ Icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="group flex items-start gap-5"
                                >
                                    {/* Red accent line */}
                                    <div className="w-px h-10 bg-red-500 shrink-0 mt-0.5 group-hover:h-12 transition-all duration-200" />

                                    <div>
                                        <p className="body-text text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mb-1">
                                            {label}
                                        </p>
                                        <div className="flex items-center gap-1.5">
                                            <p className="body-text text-[14px] font-semibold text-gray-900 group-hover:text-red-500 transition-colors duration-200 leading-snug">
                                                {value}
                                            </p>
                                            <ArrowUpRight
                                                size={12}
                                                className="text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-red-500 transition-all duration-200"
                                            />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>


                    </div>

                    {/* ══ RIGHT — form ══ */}
                    <div id="contact-form-card" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative z-10">

                        <div className="relative z-10">
                            {submitted ? (
                                /* ── Success state ── */
                                <div className="flex flex-col items-start justify-center min-h-[400px] gap-5">
                                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M4 10l4.5 4.5L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="section-heading text-[26px] font-extrabold text-black tracking-tight leading-tight">
                                        Message received.
                                    </h3>
                                    <p className="body-text text-[14px] text-gray-500 leading-[1.7]">
                                        We've got your inquiry and will reply within 48 hours with a clear next step.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setSelectedService(null); }}
                                        className="cta-button mt-4 text-[13px] font-semibold text-red-500 hover:text-red-600 transition-colors underline underline-offset-4"
                                    >
                                        Send another message →
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-7">

                                    {/* Row 1 */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <FormField label="Full Name" name="fullName" placeholder="Your Name" required focused={focused} setFocused={setFocused} />
                                        <FormField label="Company" name="company" placeholder="Company Name" focused={focused} setFocused={setFocused} />
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <FormField label="Email" name="email" type="email" placeholder="Your@company.com" required focused={focused} setFocused={setFocused} />
                                        <FormField label="Phone" name="phone" placeholder="+91 00000 00000" focused={focused} setFocused={setFocused} />
                                    </div>



                                    {/* Message */}
                                    <div>
                                        <label className={`body-text block text-[11px] font-bold tracking-[0.15em] uppercase mb-3 transition-colors duration-200 ${focused === "message" ? "text-red-500" : "text-gray-700"}`}>
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about your project, timeline, and goals..."
                                            onFocus={() => setFocused("message")}
                                            onBlur={() => setFocused(null)}
                                            className={`
                          body-text w-full px-4 py-3.5 rounded-xl border text-[14px] text-gray-900
                          placeholder:text-gray-400 resize-none outline-none
                          transition-colors duration-200
                          ${focused === "message" ? "border-red-500 bg-white ring-1 ring-red-500" : "border-gray-300 bg-white"}
                        `}
                                        />
                                    </div>

                                    {/* Submit */}
                                    <div className="flex justify-center w-full">
                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            layout
                                            animate={
                                                animState === "idle"
                                                    ? { width: "100%", height: 56, borderRadius: 12, backgroundColor: "#ef4444" }
                                                    : animState === "shrinking" || animState === "filling"
                                                        ? { width: "100%", height: 10, borderRadius: 100, backgroundColor: "#222222" }
                                                        : { width: 56, height: 56, borderRadius: 56, backgroundColor: "#10b981" }
                                            }
                                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                            className="cta-button group relative flex items-center justify-center text-white text-[14px] font-semibold overflow-hidden cursor-pointer"
                                        >
                                            {/* Progress Bar inside button */}
                                            {(animState === "shrinking" || animState === "filling") && (
                                                <motion.div
                                                    initial={{ width: "0%" }}
                                                    animate={animState === "filling" ? { width: "100%" } : { width: "0%" }}
                                                    transition={{ duration: 1.2, ease: "linear" }}
                                                    className="absolute left-0 top-0 bottom-0 bg-[#71DFBE] rounded-full"
                                                />
                                            )}

                                            {/* Button text */}
                                            {animState === "idle" && (
                                                <span className="flex items-center gap-2">
                                                    Send Inquiry
                                                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                                </span>
                                            )}

                                            {/* SVG Checkmark */}
                                            {animState === "success-circle" && (
                                                <motion.svg
                                                    viewBox="0 0 25 30"
                                                    className="w-5 h-5 text-white"
                                                    initial="hidden"
                                                    animate="visible"
                                                >
                                                    <motion.path
                                                        d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"
                                                        fill="none"
                                                        stroke="white"
                                                        strokeWidth="4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        variants={{
                                                            hidden: { pathLength: 0 },
                                                            visible: {
                                                                pathLength: 1,
                                                                transition: { delay: 0.1, duration: 0.3, ease: "easeOut" }
                                                            }
                                                        }}
                                                    />
                                                </motion.svg>
                                            )}
                                        </motion.button>
                                    </div>

                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@400;500;700;800&display=swap');

              :global(.section-heading) {
                font-family: 'Manrope', sans-serif !important;
              }
              :global(.body-text) {
                font-family: 'Inter', sans-serif !important;
              }
              :global(.cta-button) {
                font-family: 'Inter', sans-serif !important;
                font-weight: 600 !important;
              }
            `}</style>
        </section>
    );
}

/* ── Reusable form field ── */
function FormField({
    label, name, type = "text", placeholder, required, focused, setFocused,
}: {
    label: string; name: string; type?: string; placeholder?: string;
    required?: boolean; focused: string | null; setFocused: (v: string | null) => void;
}) {
    const isActive = focused === name;
    return (
        <div>
            <label className={`body-text block text-[11px] font-bold tracking-[0.15em] uppercase mb-3 transition-colors duration-200 ${isActive ? "text-red-500" : "text-gray-700"}`}>
                {label}{required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
                className={`
          body-text w-full h-12 px-4 rounded-xl border text-[14px] text-gray-900
          placeholder:text-gray-400 outline-none transition-colors duration-200
          ${isActive ? "border-red-500 bg-white ring-1 ring-red-500" : "border-gray-300 bg-white"}
        `}
            />
        </div>
    );
}