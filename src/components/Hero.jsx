import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";

export default function Hero() {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[calc(100vh-80px)] bg-[#070913] text-white overflow-hidden flex items-center justify-center py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12"
    >
      {/* =========================================================================
          BACKGROUND ARCHITECTURE: Precision grid + Radial ambient lighting
          ========================================================================= */}

      {/* Precision Geometric Grid with Elliptical Radial Mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 85% 65% at 50% 45%, black 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 65% at 50% 45%, black 25%, transparent 80%)",
        }}
      />

      {/* Top subtle border illumination */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Dynamic Ambient Glow 1: Cyan / Electric Blue (Top Left) */}
      <div
        className="absolute -top-32 left-1/4 -translate-x-1/2 w-[550px] h-[550px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(6, 182, 212, 0.06) 40%, transparent 70%)",
          filter: "blur(90px)",
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />

      {/* Dynamic Ambient Glow 2: Electric Violet / Indigo (Center Right) */}
      <div
        className="absolute top-1/4 -right-12 w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.06) 45%, transparent 70%)",
          filter: "blur(110px)",
          transform: `translate(${-mousePos.x * 35}px, ${-mousePos.y * 35}px)`,
        }}
      />

      {/* Subtle Bottom Ambient Floor Glow */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[850px] h-[280px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.09) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* =========================================================================
          HERO CONTENT CONTAINER: 2-Column Asymmetric Balance (Desktop)
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* LEFT COLUMN: Headline, Eyebrow, Supporting text, CTAs, Trust indicators */}
        <div
          className={`lg:col-span-7 flex flex-col items-start text-left transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.12)] hover:border-cyan-400/40 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              {t("hero.eyebrow", "BUILDING YOUR DIGITAL FUTURE")}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] font-extrabold tracking-[-0.035em] leading-[1.07] mb-6">
            <span className="block bg-gradient-to-b from-white via-slate-100 to-slate-300/80 bg-clip-text text-transparent">
              {t("hero.headline1", "Your Chance to Exist")}
            </span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
              {t("hero.headline2", "in the Digital World.")}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300/85 font-normal leading-relaxed max-w-xl mb-9">
            {t(
              "hero.support",
              "We turn ideas into digital experiences. From stunning websites to powerful software solutions, we help businesses build their presence, grow their reach, and thrive in the digital era."
            )}
          </p>

          {/* Call-To-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 font-bold tracking-tight">
                {t("hero.primaryCta", "Let's Build Something")}
              </span>
              <HiArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              {/* Internal reflective sweep effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{t("hero.secondaryCta", "Explore Our Services")}</span>
              <HiSparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>

          {/* Minimalist Trust & Capabilities Strip
          <div className="pt-7 border-t border-white/[0.08] grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                100%
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {t("hero.badge1", "Bespoke Architecture")}
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Enterprise
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {t("hero.badge2", "Scalable Solutions")}
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Full-Cycle
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {t("hero.badge3", "Digital Growth")}
              </div>
            </div>
          </div> */}
        </div>

        {/* RIGHT COLUMN: Abstract 3D Digital Visual representing connectivity & growth */}
        <div
          className={`lg:col-span-5 hidden lg:flex items-center justify-center relative transition-all duration-1000 delay-200 ease-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div
            className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px] aspect-square flex items-center justify-center transition-transform duration-500 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
            }}
          >
            {/* Ambient Radial Halo behind the 3D geometry */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-400/10 to-violet-600/20 blur-3xl animate-pulse-soft pointer-events-none" />

            {/* Floating Telemetry Glass Chip 1 (Top Right) */}
            <div className="absolute top-4 right-2 sm:right-6 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-cyan-500/25 bg-[#0a0f1d]/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.6)] animate-float-slow">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-200 uppercase">

                {t("hero.scalable","Scalable Solutions")}
              </span>
            </div>

            {/* Floating Telemetry Glass Chip 2 (Bottom Left) */}
            <div className="absolute bottom-6 left-2 sm:left-4 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-violet-500/25 bg-[#0a0f1d]/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.6)] animate-float-reverse">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_#c084fc] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-200 uppercase">
                {t("hero.building","Building Your Future")}
              </span>
            </div>

            {/* Central Precision SVG Visual: 3D Isometric Core + Connectivity Arcs */}
            <svg
              className="w-full h-full relative z-10 overflow-visible"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow filter */}
                <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glowViolet" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Gradients for Isometric Facets */}
                <linearGradient id="topFacet" x1="180" y1="180" x2="320" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.08" />
                </linearGradient>

                <linearGradient id="leftFacet" x1="180" y1="210" x2="250" y2="330" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.85" />
                </linearGradient>

                <linearGradient id="rightFacet" x1="250" y1="250" x2="320" y2="330" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.9" />
                </linearGradient>

                {/* Line Gradients */}
                <linearGradient id="cyanVioletLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>

                <linearGradient id="orbitStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* OUTER CALIBRATION SYSTEM (Subtle tech coordinate ring) */}
              <circle
                cx="250"
                cy="250"
                r="220"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1"
              />
              <circle
                cx="250"
                cy="250"
                r="190"
                stroke="rgba(56, 189, 248, 0.12)"
                strokeWidth="1"
                strokeDasharray="4 12"
              />

              {/* Cardinal Coordinate Ticks */}
              <line x1="250" y1="22" x2="250" y2="38" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
              <line x1="250" y1="462" x2="250" y2="478" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
              <line x1="22" y1="250" x2="38" y2="250" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
              <line x1="462" y1="250" x2="478" y2="250" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />

              {/* 3D PERSPECTIVE ORBITAL RINGS */}
              {/* Orbit 1: Tilted -30 deg */}
              <g transform="rotate(-28 250 250)">
                <ellipse
                  cx="250"
                  cy="250"
                  rx="205"
                  ry="70"
                  stroke="url(#orbitStroke)"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                />
                {/* Orbiting Satellite Node 1 */}
                <circle cx="455" cy="250" r="5" fill="#38bdf8" filter="url(#glowCyan)" />
                <circle cx="455" cy="250" r="10" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
              </g>

              {/* Orbit 2: Tilted +36 deg */}
              <g transform="rotate(38 250 250)">
                <ellipse
                  cx="250"
                  cy="250"
                  rx="185"
                  ry="60"
                  stroke="url(#orbitStroke)"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                />
                {/* Orbiting Satellite Node 2 */}
                <circle cx="65" cy="250" r="5" fill="#c084fc" filter="url(#glowViolet)" />
                <circle cx="65" cy="250" r="11" stroke="#c084fc" strokeWidth="1" opacity="0.35" />
              </g>

              {/* CONNECTIVITY VECTORS (Radiating network rays) */}
              <path
                d="M 250 170 L 390 100"
                stroke="url(#cyanVioletLine)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.75"
              />
              <path
                d="M 180 210 L 95 160"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                opacity="0.6"
              />
              <path
                d="M 250 330 L 250 425"
                stroke="url(#cyanVioletLine)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />
              <path
                d="M 320 290 L 405 355"
                stroke="#8b5cf6"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Satellite Network Node Hubs */}
              <g>
                <circle cx="390" cy="100" r="4.5" fill="#38bdf8" filter="url(#glowCyan)" />
                <circle cx="390" cy="100" r="12" stroke="#38bdf8" strokeWidth="1" opacity="0.3" />
                <circle cx="95" cy="160" r="4" fill="#60a5fa" filter="url(#glowCyan)" />
                <circle cx="405" cy="355" r="4.5" fill="#a855f7" filter="url(#glowViolet)" />
                <circle cx="405" cy="355" r="12" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
                <circle cx="250" cy="425" r="4" fill="#38bdf8" filter="url(#glowCyan)" />
              </g>

              {/* 3D ISOMETRIC CORE CRYSTAL (Digital Architecture Block) */}
              <g className="transition-transform duration-500 ease-out">
                {/* Top Isometric Facet */}
                <polygon
                  points="250,170 320,210 250,250 180,210"
                  fill="url(#topFacet)"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  filter="url(#glowCyan)"
                />

                {/* Left Isometric Facet */}
                <polygon
                  points="180,210 250,250 250,330 180,290"
                  fill="url(#leftFacet)"
                  stroke="#818cf8"
                  strokeWidth="1.8"
                />

                {/* Right Isometric Facet */}
                <polygon
                  points="250,250 320,210 320,290 250,330"
                  fill="url(#rightFacet)"
                  stroke="#a855f7"
                  strokeWidth="1.8"
                  filter="url(#glowViolet)"
                />

                {/* Inner Architectural Grid Lines (Subtle structure lattice) */}
                <line x1="215" y1="190" x2="285" y2="230" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
                <line x1="285" y1="190" x2="215" y2="230" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />

                <line x1="215" y1="230" x2="215" y2="310" stroke="rgba(129, 140, 248, 0.3)" strokeWidth="1" />
                <line x1="285" y1="230" x2="285" y2="310" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />

                {/* Glowing Vertices of the 3D Core */}
                <circle cx="250" cy="170" r="3.5" fill="#ffffff" filter="url(#glowCyan)" />
                <circle cx="320" cy="210" r="3" fill="#38bdf8" />
                <circle cx="180" cy="210" r="3" fill="#38bdf8" />
                <circle cx="250" cy="250" r="4.5" fill="#ffffff" filter="url(#glowCyan)" />
                <circle cx="250" cy="330" r="3.5" fill="#a855f7" />
                <circle cx="180" cy="290" r="3" fill="#818cf8" />
                <circle cx="320" cy="290" r="3" fill="#c084fc" />
              </g>

              {/* Minimalist Coordinate Metadata */}
              {/* <text
                x="30"
                y="480"
                fill="rgba(148, 163, 184, 0.4)"
                fontSize="9"
                fontFamily="monospace"
                letterSpacing="1.5"
              >
                LEGACY_IT // NODE: ACTIVE
              </text>
              <text
                x="360"
                y="480"
                fill="rgba(148, 163, 184, 0.4)"
                fontSize="9"
                fontFamily="monospace"
                letterSpacing="1.5"
              >
                COORD: 37.77 // -122.41
              </text> */}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

