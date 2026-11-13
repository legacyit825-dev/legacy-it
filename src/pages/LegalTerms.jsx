import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  LuChevronDown,
  LuMail,
  LuMapPin,
  LuBuilding2,
  LuCheck,
  LuListOrdered,
} from "react-icons/lu";

export default function LegalTerms() {
  const { t, i18n } = useTranslation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  const heroAnim = useScrollAnimation(0.08);
  const contentAnim = useScrollAnimation(0.05);

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = t("termsPage.seoTitle", "Terms & Conditions");
    document.title = `${title} | Legacy IT`;

    try {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          t(
            "termsPage.seoDescription",
            "Read the Terms & Conditions governing your use of the Legacy IT website and digital service engagements."
          )
        );
      }
    } catch {
      // ignore
    }
  }, [i18n.language, t]);

  const sections = t("termsPage.sections", { returnObjects: true }) || [];
  const safeSections = Array.isArray(sections) ? sections : [];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-[#070913] text-white min-h-screen overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header />

      <main className="relative w-full">
        {/* =========================================================================
            HEADER / HERO SECTION
            ========================================================================= */}
        <section className="relative w-full pt-28 pb-14 sm:pt-36 sm:pb-18 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden bg-[#070913] border-b border-white/[0.06]">
          {/* Subtle Background Grid Texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              maskImage:
                "radial-gradient(ellipse 80% 65% at 50% 45%, black 20%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 65% at 50% 45%, black 20%, transparent 80%)",
            }}
          />

          {/* Ambient Glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[320px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
              filter: "blur(110px)",
            }}
          />

          <div
            ref={heroAnim.ref}
            className={`relative z-10 max-w-[900px] mx-auto flex flex-col items-center anim-hidden anim-fade-up ${
              heroAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* Small eyebrow label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                {t("termsPage.eyebrow", "LEGAL INFORMATION")}
              </span>
            </div>

            {/* Large page title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.035em] text-white leading-tight mb-5">
              {t("termsPage.title", "Terms & Conditions")}
            </h1>

            {/* Short introductory paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-5">
              {t(
                "termsPage.intro",
                "Welcome to Legacy IT. By accessing or using our website, you agree to comply with these Terms & Conditions. Please read them carefully before using our website or engaging with our services."
              )}
            </p>

            {/* Last Updated date */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>{t("termsPage.lastUpdated", "Last Updated: November 2026")}</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CONTENT LAYOUT: Reading Container (~850–950px width)
            ========================================================================= */}
        <div className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#070913]">
          <div className="max-w-[900px] mx-auto">
            {/* Table of Contents Enhancement */}
            <div className="mb-12 rounded-2xl border border-white/[0.08] bg-[#0c1020]/75 backdrop-blur-md p-5 sm:p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2.5 text-sm font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <LuListOrdered className="w-4 h-4 text-cyan-400" />
                    <span>{t("termsPage.tocTitle", "Table of Contents")}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">
                      ({safeSections.length} Sections)
                    </span>
                  </span>
                  <span
                    className={`sm:hidden p-1 rounded-md bg-white/[0.05] text-slate-400 transition-transform duration-200 ${
                      isTocOpen ? "rotate-180 text-cyan-300" : ""
                    }`}
                  >
                    <LuChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>
                    {isTocOpen
                      ? t("termsPage.tocMobileToggleClose", "Hide Table of Contents")
                      : t("termsPage.tocMobileToggleOpen", "View Table of Contents")}
                  </span>
                  <LuChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isTocOpen ? "rotate-180 text-cyan-300" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Collapsible / Expandable TOC Grid */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isTocOpen ? "max-h-[600px] mt-4 pt-4 border-t border-white/[0.06] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {safeSections.map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => {
                        scrollToSection(sec.id);
                        if (window.innerWidth < 640) {
                          setIsTocOpen(false);
                        }
                      }}
                      className="text-left px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-cyan-300 border border-white/[0.04] hover:border-cyan-500/30 transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span className="truncate pr-2 font-medium">
                        {sec.number}. {sec.title}
                      </span>
                      <span className="text-[10px] text-cyan-400 font-mono shrink-0">
                        →
                      </span>
                    </button>
                  ))} 
                </div>
              </div>
            </div>

            {/* Document Clauses Container */}
            <div
              ref={contentAnim.ref}
              className={`space-y-10 sm:space-y-12 anim-hidden anim-fade-up ${
                contentAnim.inView ? "anim-visible" : ""
              }`}
            >
              {safeSections.map((section, idx) => (
                <article
                  key={section.id || idx}
                  id={section.id}
                  className="rounded-2xl border border-white/[0.08] bg-[#0c1020]/65 hover:bg-[#0c1020]/80 backdrop-blur-md p-6 sm:p-8 sm:p-9 transition-colors scroll-mt-28"
                >
                  {/* Numbered Section Heading */}
                  <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-white/[0.06]">
                    <span className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {section.number}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {section.number}. {section.title}
                    </h2>
                  </div>

                  {/* Paragraphs with consistent spacing */}
                  {section.content && section.content.length > 0 && (
                    <div className="space-y-3.5 text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {/* Bullet points if present */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <div className="mt-5 pt-2">
                      <ul className="space-y-2.5">
                        {section.bulletPoints.map((item, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 text-sm sm:text-base text-slate-300/90 leading-relaxed"
                          >
                            <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                              <LuCheck className="w-3 h-3 stroke-[2.5]" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact Information Details Block on Section 12 */}
                  {section.contactDetails && (
                    <div className="mt-6 p-5 sm:p-6 rounded-xl bg-gradient-to-br from-cyan-950/30 via-[#0a0f1d] to-[#070913] border border-cyan-500/25 space-y-4">
                      <div className="flex items-start gap-3 text-sm">
                        <LuBuilding2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-mono text-slate-400 uppercase">
                            Company
                          </span>
                          <span className="font-semibold text-white">
                            {section.contactDetails.company}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 text-sm">
                        <LuMail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-mono text-slate-400 uppercase">
                            Email
                          </span>
                          <a
                            href={`mailto:${section.contactDetails.email}`}
                            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-semibold transition-colors"
                          >
                            {section.contactDetails.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 text-sm">
                        <LuMapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-mono text-slate-400 uppercase">
                            Address
                          </span>
                          <span className="text-slate-300">
                            {section.contactDetails.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

