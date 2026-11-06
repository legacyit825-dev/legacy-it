import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  LuTarget,
  LuEye,
  LuLightbulb,
  LuShieldCheck,
  LuUsers,
  LuTrendingUp,
  LuArrowRight,
} from "react-icons/lu";
import teamImg from "../assets/about1.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const values = [
  {
    number: "01",
    id: "innovation",
    icon: LuLightbulb,
    title: "Innovation",
    description:
      "We continuously explore better ways to use technology to solve real-world challenges.",
  },
  {
    number: "02",
    id: "quality",
    icon: LuShieldCheck,
    title: "Quality",
    description:
      "We believe in building reliable, functional, and carefully crafted digital solutions.",
  },
  {
    number: "03",
    id: "collaboration",
    icon: LuUsers,
    title: "Collaboration",
    description:
      "We work closely with our clients to understand their goals and turn ideas into meaningful results.",
  },
  {
    number: "04",
    id: "growth",
    icon: LuTrendingUp,
    title: "Growth",
    description:
      "We believe in continuous learning, improvement, and creating opportunities through technology.",
  },
];

export default function AboutContent() {
  const { t } = useTranslation();

  const heroAnim = useScrollAnimation(0.1);
  const whoAnim = useScrollAnimation(0.1);
  const missionAnim = useScrollAnimation(0.1);
  const valuesAnim = useScrollAnimation(0.08);
  const ctaAnim = useScrollAnimation(0.1);

  return (
    <div className="w-full bg-[#070913] text-white overflow-hidden">
      {/* =========================================================================
          SECTION 1: ABOUT HERO
          ========================================================================= */}
      <section
        id="about-hero"
        className="relative w-full min-h-[72vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 py-24 sm:py-28 overflow-hidden bg-[#070913]"
      >
        {/* Precision Geometric Grid with Radial Mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 45%, black 25%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 45%, black 25%, transparent 80%)",
          }}
        />

        {/* Ambient Lighting Orbs */}
        <div
          className="absolute -top-32 left-1/3 -translate-x-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute top-1/4 -right-12 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(130px)",
          }}
        />

        <div
          ref={heroAnim.ref}
          className={`relative z-10 max-w-4xl mx-auto flex flex-col items-center anim-hidden anim-fade-up ${
            heroAnim.inView ? "anim-visible" : ""
          }`}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              {t("aboutPage.hero.label", "GET TO KNOW US")}
            </span>
          </div>

          {/* Main Heading with Subtle Cyan Highlight */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em] leading-[1.08] mb-6">
            <span className="block bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
              {t(
                "aboutPage.hero.titleStart",
                "We Create Digital Experiences"
              )}
            </span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
              {t(
                "aboutPage.hero.titleHighlight",
                "That Move Businesses Forward."
              )}
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/85 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            {t(
              "aboutPage.hero.description",
              "Legacy IT is a digital solutions company combining technology, creativity, and innovation to help businesses establish and grow their digital presence."
            )}
          </p>

          {/* Subtle Decorative Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-slate-500 pt-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
              {t("aboutPage.hero.scroll", "Scroll to explore")}
            </span>
            <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce mt-1" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHO WE ARE (Two-Column Layout)
          ========================================================================= */}
      <section
        id="who-we-are"
        className="relative w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div
            ref={whoAnim.ref}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center anim-hidden anim-fade-up ${
              whoAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* LEFT SIDE: Text Content */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                  {t("aboutPage.whoWeAre.label", "WHO WE ARE")}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-[-0.03em] leading-[1.15] mb-6">
                <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
                  {t(
                    "aboutPage.whoWeAre.heading",
                    "Turning Ideas Into Digital Possibilities."
                  )}
                </span>
              </h2>

              <div className="space-y-4 text-base sm:text-[17px] text-slate-300/85 leading-relaxed mb-8">
                <p>
                  {t(
                    "aboutPage.whoWeAre.p1",
                    "At Legacy IT, we believe every business deserves the opportunity to thrive in the digital world."
                  )}
                </p>
                <p>
                  {t(
                    "aboutPage.whoWeAre.p2",
                    "We bring together modern technology, thoughtful design, and practical digital solutions to help businesses build their online presence, improve operations, and connect with their audiences."
                  )}
                </p>
                <p className="text-slate-400">
                  {t(
                    "aboutPage.whoWeAre.p3",
                    "Our focus is simple: understand your needs, create meaningful solutions, and help you move forward with confidence."
                  )}
                </p>
              </div>

              <Link
                to="/services"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{t("aboutPage.whoWeAre.cta", "Explore Our Services")}</span>
                <LuArrowRight className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* RIGHT SIDE: High-Quality Technology Team Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 p-2 bg-[#0c1020]/60 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group">
                {/* Subtle top-right ambient glow */}
                <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-cyan-500/15 group-hover:bg-cyan-500/25 blur-3xl transition-all duration-500 pointer-events-none" />

                <img
                  src={teamImg}
                  alt="Legacy IT Team"
                  className="w-full h-[360px] sm:h-[420px] md:h-[460px] object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Minimalist Floating Corner Tag */}
                <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-cyan-500/25 bg-[#0a0f1d]/85 backdrop-blur-md shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-200 uppercase">
                    ENGINEERING &amp; DIGITAL EXPERIENCES
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR MISSION & VISION (Side-by-Side Blocks)
          ========================================================================= */}
      <section
        id="mission-vision"
        className="relative w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div
            ref={missionAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 anim-hidden anim-fade-up ${
              missionAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* MISSION BLOCK */}
            <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0c1020]/60 hover:bg-[#0f152a]/85 backdrop-blur-md p-8 sm:p-10 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(6,182,212,0.1)] flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/40 text-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] mb-6">
                  <LuTarget className="w-6 h-6 stroke-[1.8]" />
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400 mb-2">
                  {t("aboutPage.missionVision.missionLabel", "OUR MISSION")}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  {t("aboutPage.missionVision.missionTitle", "Mission")}
                </h3>

                <p className="text-base sm:text-lg text-slate-300/85 font-normal leading-relaxed">
                  {t(
                    "aboutPage.missionVision.missionText",
                    "To empower businesses through innovative digital solutions, thoughtful design, and reliable technology that creates real value."
                  )}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                  LEGACY_IT // MISSION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
              </div>
            </div>

            {/* VISION BLOCK */}
            <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0c1020]/60 hover:bg-[#0f152a]/85 backdrop-blur-md p-8 sm:p-10 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(6,182,212,0.1)] flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/40 text-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] mb-6">
                  <LuEye className="w-6 h-6 stroke-[1.8]" />
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400 mb-2">
                  {t("aboutPage.missionVision.visionLabel", "OUR VISION")}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  {t("aboutPage.missionVision.visionTitle", "Vision")}
                </h3>

                <p className="text-base sm:text-lg text-slate-300/85 font-normal leading-relaxed">
                  {t(
                    "aboutPage.missionVision.visionText",
                    "To become a trusted digital technology partner, helping businesses embrace innovation and build a stronger presence in an evolving digital world."
                  )}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                  LEGACY_IT // VISION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR CORE VALUES (4-Column Grid)
          ========================================================================= */}
      <section
        id="core-values"
        className="relative w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.14] mb-5">
              <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
                {t("aboutPage.values.heading", "What Drives Us Forward.")}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
              {t(
                "aboutPage.values.subheading",
                "Our principles shape how we think, create, collaborate, and deliver."
              )}
            </p>
          </div>

          {/* 4 Values Cards */}
          <div
            ref={valuesAnim.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 anim-hidden anim-fade-up ${
              valuesAnim.inView ? "anim-visible" : ""
            }`}
          >
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c1020]/60 hover:bg-[#0f152a]/90 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(6,182,212,0.1)] overflow-hidden"
                >
                  <div className="absolute -top-20 -right-20 w-36 h-36 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-2xl transition-all duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/40 text-cyan-400 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.08)]">
                        <Icon className="w-5 h-5 stroke-[1.9]" />
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors duration-200">
                        {val.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200 mb-2.5">
                      {t(`aboutPage.values.items.${val.id}.title`, val.title)}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {t(
                        `aboutPage.values.items.${val.id}.description`,
                        val.description
                      )}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                      VALUE // {val.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FINAL CALL TO ACTION
          ========================================================================= */}
      <section
        id="about-cta"
        className="relative w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#070913]"
      >
        <div className="max-w-5xl mx-auto">
          <div
            ref={ctaAnim.ref}
            className={`relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e1428]/90 to-[#070913]/95 backdrop-blur-xl p-8 sm:p-12 lg:p-14 text-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] anim-hidden anim-fade-up ${
              ctaAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* Ambient Cyan Gradient Accent */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-gradient-to-b from-cyan-500/20 via-sky-400/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                {t(
                  "aboutPage.cta.heading",
                  "Let's Build Something Meaningful."
                )}
              </h2>

              <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-8 max-w-lg">
                {t(
                  "aboutPage.cta.description",
                  "Have an idea, a business challenge, or a project in mind? Let's discuss how technology can help bring it to life."
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 font-bold tracking-tight">
                    {t("aboutPage.cta.primaryBtn", "Start a Conversation")}
                  </span>
                  <LuArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>
                    {t("aboutPage.cta.secondaryLink", "Explore Our Services")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
