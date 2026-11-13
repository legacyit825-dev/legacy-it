import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  LuArrowRight,
  LuCheck,
  LuChevronDown,
  LuSparkles,
  LuSearch,
  LuPenTool,
  LuCode,
  LuRocket,
} from "react-icons/lu";

export default function ServiceDetailLayout({
  seoTitle,
  seoDescription,
  eyebrow,
  headlineStart,
  headlineHighlight,
  description,
  heroHighlights = [],
  overviewHeading,
  overviewParagraphs = [],
  overviewVisual,
  deliverablesHeading,
  deliverables = [],
  whyHeading,
  whyReasons = [],
  processSteps,
  faqs = [],
  ctaHeading,
  ctaDescription,
}) {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(0);

  const effectiveDeliverablesHeading =
    deliverablesHeading ||
    t(
      "serviceDetails.common.deliverablesHeading",
      "Comprehensive Capabilities Tailored to Your Needs"
    );
  const effectiveWhyHeading =
    whyHeading ||
    t("serviceDetails.common.whyHeading", "Why Partner With Legacy IT?");
  const effectiveCtaHeading =
    ctaHeading ||
    t("serviceDetails.common.readyHeading", "Ready to Start Your Project?");
  const effectiveCtaDescription =
    ctaDescription ||
    t(
      "serviceDetails.common.readyDescription",
      "Let's turn your ideas into meaningful digital experiences. Reach out today for a consultation."
    );

  const defaultProcessSteps = [
    {
      number: "01",
      name: t("serviceDetails.common.processSteps.0.name", "Discover"),
      description: t(
        "serviceDetails.common.processSteps.0.description",
        "We dive deep into your business objectives, target audience, technical requirements, and competitive landscape."
      ),
      icon: LuSearch,
    },
    {
      number: "02",
      name: t("serviceDetails.common.processSteps.1.name", "Plan & Create"),
      description: t(
        "serviceDetails.common.processSteps.1.description",
        "We build strategic wireframes, visual style guides, architecture roadmaps, and prototypes for approval."
      ),
      icon: LuPenTool,
    },
    {
      number: "03",
      name: t("serviceDetails.common.processSteps.2.name", "Execute"),
      description: t(
        "serviceDetails.common.processSteps.2.description",
        "Our specialists craft pixel-perfect assets, robust engineering, or production-grade edits with continuous QA."
      ),
      icon: LuCode,
    },
    {
      number: "04",
      name: t("serviceDetails.common.processSteps.3.name", "Deliver"),
      description: t(
        "serviceDetails.common.processSteps.3.description",
        "We deploy the final deliverables, perform thorough launch reviews, and provide ongoing support."
      ),
      icon: LuRocket,
    },
  ];

  const effectiveProcessSteps =
    processSteps && processSteps.length > 0 ? processSteps : defaultProcessSteps;

  useEffect(() => {
    if (seoTitle) {
      document.title = `${seoTitle} | Legacy IT`;
    }
    try {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && seoDescription) {
        metaDesc.setAttribute("content", seoDescription);
      }
    } catch {
      // ignore
    }
    try {
      window.scrollTo(0, 0);
    } catch {
      // ignore
    }
  }, [seoTitle, seoDescription]);

  const heroAnim = useScrollAnimation(0.08);
  const overviewAnim = useScrollAnimation(0.08);
  const deliverablesAnim = useScrollAnimation(0.06);
  const whyAnim = useScrollAnimation(0.08);
  const processAnim = useScrollAnimation(0.08);
  const faqAnim = useScrollAnimation(0.08);
  const ctaAnim = useScrollAnimation(0.1);
  
  return (
    <div className="w-full bg-[#070913] text-white min-h-screen overflow-hidden">
      <Header />

      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center overflow-hidden bg-[#070913]">
        {/* Precision Background Grid with Radial Mask */}
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

        {/* Ambient Radial Glows */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[580px] h-[360px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.14) 0%, transparent 70%)",
            filter: "blur(110px)",
          }}
        />
        <div
          className="absolute top-1/3 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(120px)",
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
              {eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.035em] leading-[1.1] mb-6">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
              {headlineStart}{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
              {headlineHighlight}
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/85 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            {description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 font-bold tracking-tight">
                {t("serviceDetails.common.discussProject", "Discuss Your Project")}
              </span>
              <LuArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
            </Link>

            <button
              type="button"
              onClick={() => {
                document.getElementById("offerings")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{t("serviceDetails.common.exploreDeliverables", "Explore Deliverables")}</span>
            </button>
          </div>

          {/* Quick Stats / Highlights */}
          {heroHighlights.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/[0.08] w-full max-w-3xl">
              {heroHighlights.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DETAILED SERVICE OVERVIEW (Narrative + Custom Visual)
          ========================================================================= */}
      <section
        id="overview"
        className="relative w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div
            ref={overviewAnim.ref}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center anim-hidden anim-fade-up ${
              overviewAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-950/30 text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase w-fit">
                <LuSparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t("serviceDetails.common.serviceOverview", "SERVICE OVERVIEW")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {overviewHeading}
              </h2>

              <div className="space-y-4 text-slate-300/90 text-sm sm:text-base leading-relaxed">
                {overviewParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
                >
                  <span>{t("serviceDetails.common.requestQuote", "Request a Custom Quote")}</span>
                  <LuArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Visual Representation */}
            <div className="lg:col-span-6 w-full">{overviewVisual}</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHAT WE OFFER (Deliverables Grid)
          ========================================================================= */}
      <section
        id="offerings"
        className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-950/30 text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase mb-4">
              <span>{t("serviceDetails.common.whatWeOffer", "WHAT WE OFFER")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              {effectiveDeliverablesHeading}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
              {t(
                "serviceDetails.common.whatWeOfferSubtitle",
                "Every deliverable is crafted with strategic precision, clean execution, and end-to-end quality assurance."
              )}
            </p>
          </div>

          <div
            ref={deliverablesAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 anim-hidden anim-fade-up ${
              deliverablesAnim.inView ? "anim-visible" : ""
            }`}
          >
            {deliverables.map((item, idx) => {
              const Icon = item.icon || LuCheck;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0c1020]/70 hover:bg-[#0f152a]/95 backdrop-blur-md p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(6,182,212,0.12)] flex flex-col justify-between"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-950/40 group-hover:text-cyan-300 transition-all duration-300 mb-5 shadow-[0_0_15px_rgba(6,182,212,0.08)] group-hover:scale-105">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  {item.features && item.features.length > 0 && (
                    <div className="pt-4 border-t border-white/[0.06] mt-auto">
                      <ul className="space-y-2">
                        {item.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-center gap-2 text-xs text-slate-300/85"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE LEGACY IT
          ========================================================================= */}
      <section
        id="why-choose"
        className="relative w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              {effectiveWhyHeading}
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              {t(
                "serviceDetails.common.whyChooseSubtitle",
                "We combine specialized expertise, modern technologies, and a dedication to real business outcomes."
              )}
            </p>
          </div>

          <div
            ref={whyAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 anim-hidden anim-fade-up ${
              whyAnim.inView ? "anim-visible" : ""
            }`}
          >
            {whyReasons.map((reason, idx) => {
              const Icon = reason.icon || LuSparkles;
              return (
                <div
                  key={idx}
                  className="group relative p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c1020]/65 hover:bg-[#0f152a]/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(6,182,212,0.1)]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/40 group-hover:text-cyan-300 transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[1.9]" />
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {reason.number || `0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR WORKING PROCESS (Discover -> Plan & Create -> Execute -> Deliver)
          ========================================================================= */}
      <section
        id="process"
        className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-950/30 text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase mb-4">
              <span>{t("serviceDetails.common.ourWorkingProcess", "OUR WORKING PROCESS")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              {t("serviceDetails.common.processHeading", "From Concept to Successful Execution.")}
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              {t(
                "serviceDetails.common.processSubtitle",
                "A clear, transparent four-stage methodology that guarantees quality and peace of mind."
              )}
            </p>
          </div>

          <div
            ref={processAnim.ref}
            className={`relative anim-hidden anim-fade-up ${
              processAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* Desktop timeline connecting line */}
            <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-cyan-500/20 via-sky-400/40 to-blue-500/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {effectiveProcessSteps.map((step, idx) => {
                const Icon = step.icon || LuSparkles;
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col items-start lg:items-center text-left lg:text-center rounded-2xl border border-white/[0.08] bg-[#0c1020]/60 hover:bg-[#0f152a]/90 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#070913] border-2 border-white/10 group-hover:border-cyan-400 text-cyan-400 group-hover:text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 mb-5 group-hover:scale-105">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-1.5">
                      {t("serviceDetails.common.stepPrefix", "STEP")} {step.number || `0${idx + 1}`}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {step.name}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SERVICE-SPECIFIC FAQS (Accordion)
          ========================================================================= */}
      {faqs.length > 0 && (
        <section
          id="faq"
          className="relative w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-950/30 text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase mb-3.5">
                <span>{t("serviceDetails.common.faqsBadge", "FREQUENTLY ASKED QUESTIONS")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                {t("serviceDetails.common.faqsHeading", "Everything You Need to Know.")}
              </h2>
              <p className="text-sm sm:text-base text-slate-400">
                {t(
                  "serviceDetails.common.faqsSubtitle",
                  "Common questions answered about our workflow, deliverables, and service engagement."
                )}
              </p>
            </div>

            <div
              ref={faqAnim.ref}
              className={`space-y-4 anim-hidden anim-fade-up ${
                faqAnim.inView ? "anim-visible" : ""
              }`}
            >
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-cyan-500/40 bg-[#0c1020]/90 shadow-[0_4px_25px_rgba(6,182,212,0.08)]"
                        : "border-white/[0.08] bg-[#0c1020]/50 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-bold text-white">
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/[0.04] border border-white/10 text-cyan-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-cyan-950/40 border-cyan-500/30" : ""
                        }`}
                      >
                        <LuChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300/85 leading-relaxed border-t border-white/[0.05]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 7: FINAL CALL TO ACTION
          ========================================================================= */}
      <section
        id="cta"
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
                {effectiveCtaHeading}
              </h2>

              <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-8 max-w-lg">
                {effectiveCtaDescription}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 font-bold tracking-tight">
                    {t("serviceDetails.common.talkProject", "Let's Talk About Your Project")}
                  </span>
                  <LuArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>{t("serviceDetails.common.exploreOther", "Explore Other Services")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

