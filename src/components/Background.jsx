import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  LuSlidersHorizontal,
  LuTerminal,
  LuMousePointerClick,
  LuHandshake,
  LuArrowRight,
} from "react-icons/lu";
import useScrollAnimation from "../hooks/useScrollAnimation";

const reasons = [
  {
    number: "01",
    id: "tailored-solutions",
    icon: LuSlidersHorizontal,
    title: "Tailored Solutions",
    description:
      "We understand that every business is different. We build digital solutions that match your specific goals and requirements.",
  },
  {
    number: "02",
    id: "modern-technology",
    icon: LuTerminal,
    title: "Modern Technology",
    description:
      "We use modern technologies and development practices to create reliable, scalable, and future-ready solutions.",
  },
  {
    number: "03",
    id: "user-centered-approach",
    icon: LuMousePointerClick,
    title: "User-Centered Approach",
    description:
      "We prioritize usability, performance, and design to deliver digital experiences that people enjoy using.",
  },
  {
    number: "04",
    id: "long-term-partnership",
    icon: LuHandshake,
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn't end at delivery. We believe in continuous improvement, technical support, and long-term collaboration.",
  },
];

export default function Background({ title, content }) {
  const { t } = useTranslation();
  const leftAnim = useScrollAnimation(0.1);
  const rightAnim = useScrollAnimation(0.05);

  return (
    <section
      id="why-us"
      className="relative w-full bg-[#070913] text-white py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-white/[0.06]"
    >
      {/* Precision Background Grid with Radial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 85% 65% at 50% 50%, black 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 65% at 50% 50%, black 25%, transparent 80%)",
        }}
      />

      {/* Ambient Lighting 1: Cyan / Electric Blue (Top Left) */}
      <div
        className="absolute -top-28 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Ambient Lighting 2: Electric Violet (Bottom Right) */}
      <div
        className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(130px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: Eyebrow, Main Heading, Supporting Text, CTA Button
              ========================================================================= */}
          <div
            ref={leftAnim.ref}
            className={`lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28 anim-hidden anim-fade-up ${
              leftAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                {t("whyLegacy.eyebrow", "WHY LEGACY IT")}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-[-0.03em] leading-[1.15] mb-6">
              <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
                {title || t("whyLegacy.heading", "Technology That Moves Your Business Forward.")}
              </span>
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-8">
              {content ||
                t(
                  "whyLegacy.description",
                  "We believe technology should do more than solve problems. It should create opportunities, simplify operations, and help businesses grow in an increasingly digital world."
                )}
            </p>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 font-bold tracking-tight">
                {t("whyLegacy.cta", "Let's Work Together")}
              </span>
              <LuArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              {/* Reflective light sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
            </Link>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4 Key Reasons (Clean 2x2 Grid)
              ========================================================================= */}
          <div
            ref={rightAnim.ref}
            className={`lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 anim-hidden anim-fade-up anim-delay-100 ${
              rightAnim.inView ? "anim-visible" : ""
            }`}
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c1020]/65 hover:bg-[#0f152a]/90 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(6,182,212,0.1)] overflow-hidden"
                >
                  {/* Subtle top-right ambient glow on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-2xl transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Header: Icon & Monospace Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/40 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.08)]">
                        <Icon className="w-5 h-5 stroke-[1.9]" />
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors duration-200">
                        {reason.number}
                      </span>
                    </div>

                    {/* Reason Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200 mb-2.5">
                      {t(`whyLegacy.reasons.${reason.id}.title`, reason.title)}
                    </h3>

                    {/* Reason Description */}
                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {t(
                        `whyLegacy.reasons.${reason.id}.description`,
                        reason.description
                      )}
                    </p>
                  </div>

                  {/* Bottom Minimalist Accent Line */}
                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                      LEGACY // PILLAR {reason.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
