import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  LuGlobe,
  LuSmartphone,
  LuPalette,
  LuClapperboard,
  LuTrendingUp,
  LuSlidersHorizontal,
  LuTerminal,
  LuMousePointerClick,
  LuHandshake,
  LuSearch,
  LuPenTool,
  LuCode,
  LuRocket,
  LuArrowRight,
  LuCheck,
} from "react-icons/lu";

const servicesList = [
  {
    id: "web-development",
    badge: "ENGINEERING",
    icon: LuGlobe,
    title: "Website Design & Development",
    description:
      "We create modern, responsive, and high-performing websites that help businesses establish their digital presence, connect with customers, and grow online.",
    offerings: [
      "Business & Corporate Websites",
      "E-commerce Websites",
      "Custom Website Development",
      "Responsive Web Design",
      "Landing Page Development",
      "Website Redesign",
      "Website Maintenance",
    ],
    link: "/services/web-development",
  },
  {
    id: "mobile-app-development",
    badge: "MOBILE",
    icon: LuSmartphone,
    title: "Mobile Application Development",
    description:
      "We develop modern mobile applications that help businesses connect with customers through intuitive, reliable, and engaging digital experiences.",
    offerings: [
      "Android Application Development",
      "iOS Application Development",
      "Cross-Platform Applications",
      "Mobile UI/UX Design",
      "API Integration",
      "Application Maintenance",
    ],
    link: "/services/mobile-app-development",
  },
  {
    id: "graphic-designing",
    badge: "BRANDING",
    icon: LuPalette,
    title: "Graphic Designing",
    description:
      "We transform ideas into compelling visual designs that communicate your brand identity, capture attention, and leave a lasting impression.",
    offerings: [
      "Logo Design",
      "Brand Identity Design",
      "Social Media Graphics",
      "Business Cards & Stationery",
      "Brochures & Flyers",
      "Posters & Banners",
      "Marketing & Promotional Materials",
      "Digital Advertising Creatives",
    ],
    link: "/services/graphic-designing",
  },
  {
    id: "video-editing",
    badge: "MEDIA",
    icon: LuClapperboard,
    title: "Video Editing",
    description:
      "We create engaging and professionally edited videos that tell your story, communicate your message, and help your brand connect with its audience.",
    offerings: [
      "Promotional & Corporate Videos",
      "Social Media Reels & Shorts",
      "YouTube Video Editing",
      "Business Introduction Videos",
      "Product Promotional Videos",
      "Motion Graphics & Text Animation",
      "Video Transitions & Effects",
      "Color Correction & Color Grading",
      "Audio Enhancement & Synchronization",
    ],
    link: "/services/video-editing",
  },
  {
    id: "digital-marketing",
    badge: "GROWTH",
    icon: LuTrendingUp,
    title: "Digital Marketing & SEO",
    description:
      "We help businesses strengthen their online presence, reach the right audience, and build meaningful connections through digital marketing and search engine optimization.",
    offerings: [
      "Search Engine Optimization (SEO)",
      "On-Page SEO",
      "Technical SEO",
      "Social Media Management",
      "Social Media Marketing",
      "Content Strategy",
      "Digital Advertising",
      "Website Visibility Optimization",
    ],
    link: "/services/digital-marketing",
  },
];

const reasons = [
  {
    number: "01",
    id: "built-around-you",
    icon: LuSlidersHorizontal,
    title: "Solutions Built Around You",
    description:
      "We understand your requirements and create solutions that align with your goals.",
  },
  {
    number: "02",
    id: "modern-reliable",
    icon: LuTerminal,
    title: "Modern & Reliable Technology",
    description:
      "We use modern development practices to build maintainable and scalable solutions.",
  },
  {
    number: "03",
    id: "design-makes-sense",
    icon: LuMousePointerClick,
    title: "Design That Makes Sense",
    description:
      "We prioritize usability, functionality, and visual quality.",
  },
  {
    number: "04",
    id: "support-beyond",
    icon: LuHandshake,
    title: "Support Beyond Delivery",
    description:
      "We value long-term relationships and believe in continuous improvement.",
  },
];

const processSteps = [
  {
    number: "01",
    id: "discover",
    icon: LuSearch,
    title: "STEP 01 — Discover",
    description:
      "We understand your business, goals, requirements, and expectations.",
  },
  {
    number: "02",
    id: "plan-create",
    icon: LuPenTool,
    title: "STEP 02 — Plan & Create",
    description:
      "We develop a clear strategy and design the right solution for your project.",
  },
  {
    number: "03",
    id: "execute",
    icon: LuCode,
    title: "STEP 03 — Execute",
    description:
      "Our team brings the concept to life through development, testing, and refinement.",
  },
  {
    number: "04",
    id: "deliver",
    icon: LuRocket,
    title: "STEP 04 — Deliver",
    description:
      "We launch the solution and provide support for its ongoing improvement.",
  },
];

export default function Services() {
  const { t } = useTranslation();

  const heroAnim = useScrollAnimation(0.1);
  const servicesAnim = useScrollAnimation(0.05);
  const whyAnim = useScrollAnimation(0.08);
  const processAnim = useScrollAnimation(0.08);
  const ctaAnim = useScrollAnimation(0.1);

  return (
    <div className="w-full bg-[#070913] text-white overflow-hidden min-h-screen">
      <Header />

      {/* =========================================================================
          SECTION 1: SERVICES HERO
          ========================================================================= */}
      <section
        id="services-hero"
        className="relative w-full min-h-[72vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 py-24 sm:py-28 overflow-hidden bg-[#070913]"
      >
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
              {t("servicesPage.hero.eyebrow", "WHAT WE DO")}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em] leading-[1.08] mb-6">
            <span className="block bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
              {t("servicesPage.hero.titleStart", "Digital Solutions")}
            </span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
              {t("servicesPage.hero.titleHighlight", "Built Around Your Vision.")}
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/85 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            {t(
              "servicesPage.hero.description",
              "From creative design to powerful software solutions, we help businesses establish their digital presence, streamline operations, and unlock new opportunities through technology."
            )}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 font-bold tracking-tight">
                {t("servicesPage.hero.primaryCta", "Discuss Your Project")}
              </span>
              <LuArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
            </Link>

            <button
              type="button"
              onClick={() => {
                document.getElementById("services-list")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{t("servicesPage.hero.secondaryCta", "Explore Our Services")}</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR SERVICES (The 5 Dedicated Services)
          ========================================================================= */}
      <section
        id="services-list"
        className="relative w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                {t("servicesPage.services.eyebrow", "OUR EXPERTISE")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.14] mb-5">
              <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
                {t(
                  "servicesPage.services.heading",
                  "Everything You Need to Grow in the Digital World."
                )}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
              {t(
                "servicesPage.services.description",
                "We combine technology, creativity, and strategy to deliver digital solutions that make a difference."
              )}
            </p>
          </div>

          {/* Structured Services Grid (5 Services) */}
          <div
            ref={servicesAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 anim-hidden anim-fade-up ${
              servicesAnim.inView ? "anim-visible" : ""
            }`}
          >
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c1020]/70 hover:bg-[#0f152a]/95 backdrop-blur-md p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(6,182,212,0.12)] overflow-hidden"
                >
                  {/* Subtle Top-Right Ambient Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-2xl transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/40 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.08)] group-hover:scale-105">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 group-hover:text-cyan-300 transition-colors">
                        {service.badge}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200 mb-3">
                      {t(`servicesPage.services.items.${service.id}.title`, service.title)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed mb-6">
                      {t(
                        `servicesPage.services.items.${service.id}.description`,
                        service.description
                      )}
                    </p>

                    {/* Deliverables / Offerings */}
                    <div className="mb-8">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400/80 mb-3.5">
                        {t("servicesPage.services.whatIncluded", "KEY DELIVERABLES")}
                      </div>
                      <ul className="space-y-2.5">
                        {service.offerings.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/90 leading-snug"
                          >
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mt-0.5 text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                              <LuCheck className="w-2.5 h-2.5 stroke-[2.5]" />
                            </span>
                            <span>
                              {t(
                                `servicesPage.services.items.${service.id}.offerings.${idx}`,
                                item
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-5 border-t border-white/[0.06] mt-auto">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors duration-200"
                    >
                      <span>{t("servicesPage.services.learnMore", "Learn More")}</span>
                      <LuArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY WORK WITH LEGACY IT? (2x2 Minimalist Layout)
          ========================================================================= */}
      <section
        id="why-work-with-us"
        className="relative w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.14] mb-5">
              <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
                {t(
                  "servicesPage.why.heading",
                  "More Than Technology. A Partner in Your Growth."
                )}
              </span>
            </h2>
          </div>

          {/* 2x2 Clean Layout */}
          <div
            ref={whyAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto anim-hidden anim-fade-up ${
              whyAnim.inView ? "anim-visible" : ""
            }`}
          >
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c1020]/65 hover:bg-[#0f152a]/90 backdrop-blur-md p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(6,182,212,0.1)] overflow-hidden"
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-2xl transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Top row: Icon & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/40 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.08)]">
                        <Icon className="w-5 h-5 stroke-[1.9]" />
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors duration-200">
                        {r.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200 mb-2.5">
                      {t(`servicesPage.why.items.${r.id}.title`, r.title)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                      {t(`servicesPage.why.items.${r.id}.description`, r.description)}
                    </p>
                  </div>

                  {/* Minimalist Bottom Line */}
                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                      PRINCIPLE // {r.number}
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
          SECTION 4: OUR WORKING PROCESS (Timeline)
          ========================================================================= */}
      <section
        id="working-process"
        className="relative w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.14] mb-5">
              <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
                {t(
                  "servicesPage.process.heading",
                  "From Idea to Implementation."
                )}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
              {t(
                "servicesPage.process.subheading",
                "A straightforward process that keeps your project organized and moving forward."
              )}
            </p>
          </div>

          {/* Timeline Container */}
          <div
            ref={processAnim.ref}
            className={`relative anim-hidden anim-fade-up ${
              processAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/20 via-sky-400/40 to-blue-500/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="group relative flex flex-col items-start lg:items-center text-left lg:text-center rounded-2xl border border-white/[0.08] bg-[#0c1020]/60 hover:bg-[#0f152a]/90 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40"
                  >
                    {/* Step Icon Node */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#070913] border-2 border-white/10 group-hover:border-cyan-400 text-cyan-400 group-hover:text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 mb-6 group-hover:scale-110">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Step Number Tag */}
                    <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-2">
                      {step.title.split(" — ")[0]}
                    </span>

                    {/* Step Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                      {t(`servicesPage.process.steps.${step.id}.title`, step.title.split(" — ")[1] || step.title)}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {t(`servicesPage.process.steps.${step.id}.description`, step.description)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FINAL CALL TO ACTION
          ========================================================================= */}
      <section
        id="services-cta"
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
                  "servicesPage.cta.heading",
                  "Have a Project in Mind?"
                )}
              </h2>

              <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-8 max-w-lg">
                {t(
                  "servicesPage.cta.description",
                  "Whether you're starting from scratch or looking to improve an existing digital product, Legacy IT is ready to help."
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 font-bold tracking-tight">
                    {t(
                      "servicesPage.cta.primaryCta",
                      "Let's Talk About Your Project"
                    )}
                  </span>
                  <LuArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>{t("servicesPage.cta.secondaryCta", "Contact Us")}</span>
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
