"use client";

const TICKER = "BLOCKCHAIN · BRIDGE KEY · CAIN PAY · RAPIDEX · MST ACEDEMY · ";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ════════════════════════════════
          ZONE 1 — Dark top band
      ════════════════════════════════ */}
      {/* <div className="relative bg-[#0d0d0d] overflow-hidden"> */}

      {/* Subtle red glow — top left */}
      {/* <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-red-700 rounded-full blur-[180px] opacity-10 pointer-events-none" /> */}

      {/* Grid overlay */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

      {/* Eyebrow row */}
      {/* <div className="relative z-10 flex items-center justify-between px-8 lg:px-12 pt-10 pb-0">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-red-500 uppercase">
              Masterstroke Technosoft
            </span>
          </div>
          <span className="text-[11px] font-mono text-gray-600 hidden sm:block">
            Est. 2012 · Pune, India
          </span>
        </div> */}

      {/* THE WORDMARK */}
      {/* <div className="relative z-10 max-w-[1360px] mx-auto px-2 lg:px-4 pt-10 pb-12 select-none">
          <h1
            className="font-black text-white uppercase leading-none tracking-[-0.04em]"
            style={{ fontSize: "clamp(54px, 10vw, 150px)" }}
          >
            Master<span className="text-red-500">stroke</span>
          </h1>
          <p
            className="font-black text-white/25 uppercase leading-none tracking-[-0.04em] mt-2 pl-[8vw]"
            style={{ fontSize: "clamp(54px, 10vw, 150px)" }}
          >
            Technosoft
          </p>
        </div>
      </div> */}

      {/* ════════════════════════════════
          DIVIDER — red ticker strip
      ════════════════════════════════ */}
      <div className="bg-red-500 py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[ticker_22s_linear_infinite]">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="section-heading text-[12px] font-bold text-white tracking-[0.12em] uppercase pr-0">
              {TICKER}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════
          ZONE 2 — Light bottom section
      ════════════════════════════════ */}
      <div className="relative overflow-hidden bg-[#fdf9f9]">

        {/* Background Video */}
        <video
          src="/Masterstroke-home.mp4"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        />



        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-32 lg:py-48 min-h-[80vh] flex items-center">
          <div className="grid lg:grid-cols-[1fr_460px] gap-12 items-center w-full">

            {/* LEFT — copy + CTAs */}
            <div>
              <p className="hero-heading text-[34px] md:text-[44px] lg:text-[50px] font-extrabold text-white leading-[1.15] tracking-[-1.5px] max-w-[520px] mb-6">
                Engineering Tomorrow's Digital
                <span className="text-red-500"> Infrastructure</span>
              </p>

              <p className="body-text text-[15px] text-gray-200 leading-[1.75] max-w-[380px] mb-9">
                Masterstroke Technosoft Pvt. Ltd. is a technology company focused on building scalable digital infrastructure. We combine modern software engineering with emerging technologies to create solutions that are secure, intelligent, and ready for the future.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <a href="#services" className="animated-button1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Explore Our Expertise
                </a>
                <a href="#contact" className="btn-7">
                  <span className="relative z-10">Contact Us ↗</span>
                  <span className="btn-7-span"></span>
                </a>
              </div>

              {/* Mini trust bar */}
              <div className="mt-10 pt-9 border-t border-gray-200 flex items-center gap-6 flex-wrap">
                {/* {[
                  ["500+", "Projects"],
                  ["12+", "Years"],
                  ["99.99%", "Uptime"],
                ].map(([val, lbl]) => (
                  <div key={lbl}>
                    <p className="text-[20px] font-extrabold text-black leading-none">{val}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{lbl}</p>
                  </div>
                ))} */}
              </div>
            </div>

            {/* RIGHT — Empty spacer to keep content left-aligned */}
            <div className="hidden lg:block" />

          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@400;500;700;800&display=swap');

        .hero-heading {
          font-family: 'Space Grotesk', sans-serif !important;
        }

        .section-heading {
          font-family: 'Manrope', sans-serif !important;
        }

        .body-text {
          font-family: 'Inter', sans-serif !important;
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .animated-button1 {
          background: linear-gradient(-30deg, #3d0b0b 50%, #2b0808 50%);
          padding: 12px 28px;
          display: inline-block;
          position: relative;
          overflow: hidden;
          color: #f7d4d4;
          font-size: 14px;
          font-family: 'Inter', sans-serif !important;
          font-weight: 600 !important;
          letter-spacing: 1.5px;
          text-align: center;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .animated-button1::before {
          content: '';
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-color: #ad8585;
          opacity: 0;
          transition: .2s opacity ease-in-out;
        }

        .animated-button1:hover::before {
          opacity: 0.2;
        }

        .animated-button1 span {
          position: absolute;
        }

        .animated-button1 span:nth-child(1) {
          top: 0px;
          left: 0px;
          width: 100%;
          height: 2px;
          background: linear-gradient(to left, rgba(43, 8, 8, 0), #d92626);
          animation: animateTop 2s linear infinite;
        }

        .animated-button1 span:nth-child(2) {
          top: 0px;
          right: 0px;
          height: 100%;
          width: 2px;
          background: linear-gradient(to top, rgba(43, 8, 8, 0), #d92626);
          animation: animateRight 2s linear -1s infinite;
        }

        .animated-button1 span:nth-child(3) {
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, rgba(43, 8, 8, 0), #d92626);
          animation: animateBottom 2s linear infinite;
        }

        .animated-button1 span:nth-child(4) {
          top: 0px;
          left: 0px;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #d92626);
          animation: animateLeft 2s linear -1s infinite;
        }

        @keyframes animateTop {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes animateRight {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }

        @keyframes animateBottom {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes animateLeft {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .btn-7 {
          --btn-color: #ffffff;
          --curtain-color: #ef4444;

          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          border: 2px solid var(--btn-color);
          border-radius: 4px;
          background: transparent;
          color: var(--btn-color);
          font-size: 14px;
          font-family: 'Inter', sans-serif !important;
          font-weight: 600 !important;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          overflow: hidden;
          transition: color 0.4s ease, border-color 0.4s ease;
          z-index: 1;
        }

        .btn-7::before,
        .btn-7::after,
        .btn-7-span::before,
        .btn-7-span::after {
          content: '';
          position: absolute;
          top: 0;
          width: 25.5%;
          height: 0;
          background-color: var(--curtain-color);
          transition: height 0.4s ease;
          z-index: -1;
        }

        .btn-7::before {
          left: 0;
        }

        .btn-7::after {
          left: 50%;
        }

        .btn-7-span::before,
        .btn-7-span::after {
          top: auto;
          bottom: 0;
        }

        .btn-7-span::before {
          left: 25%;
        }

        .btn-7-span::after {
          left: 75%;
        }

        .btn-7:hover {
          color: #ffffff;
          border-color: var(--curtain-color);
        }

        .btn-7:hover::before,
        .btn-7:hover::after,
        .btn-7:hover .btn-7-span::before,
        .btn-7:hover .btn-7-span::after {
          height: 100%;
        }
      `}</style>
    </section>
  );
}