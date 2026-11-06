import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceDetailLayout from "../components/ServiceDetailLayout";
import {
  LuSparkles,
  LuShare2,
  LuFileText,
  LuBookOpen,
  LuImage,
  LuMegaphone,
  LuTarget,
  LuLayers,
  LuCheck,
  LuSearch,
  LuPenTool,
  LuCode,
  LuRocket,
} from "react-icons/lu";

export default function GraphicDesigning() {
  const { t } = useTranslation();
  const [activeBoard, setActiveBoard] = useState("identity"); // 'identity' | 'social' | 'print'

  const graphicVisual = (
    <div className="relative rounded-2xl border border-white/10 bg-[#0c1020]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-pink-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top Controls */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono text-slate-300">
            Brand Identity & Design System
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => setActiveBoard("identity")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeBoard === "identity"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Brand Kit
          </button>
          <button
            onClick={() => setActiveBoard("social")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeBoard === "social"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Social Ad
          </button>
          <button
            onClick={() => setActiveBoard("print")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeBoard === "print"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Print Spec
          </button>
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="min-h-[340px] flex flex-col justify-center">
        {activeBoard === "identity" && (
          <div className="space-y-4">
            {/* Logo Mark Presentation Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#12162a] to-[#090c18] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-500 flex items-center justify-center text-slate-950 font-black text-2xl shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                  L
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white tracking-wider">
                    LEGACY I.T.
                  </h4>
                  <p className="text-xs text-cyan-300/80 font-mono">
                    PRIMARY BRANDMARK // VECTOR
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400">
                AI • EPS • SVG • PDF
              </span>
            </div>

            {/* Color Palette Hierarchy */}
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                Brand Color System
              </p>
              <div className="grid grid-cols-4 gap-2">
                <div className="p-2.5 rounded-xl bg-[#06b6d4] text-slate-950 flex flex-col justify-between h-20 shadow-md">
                  <span className="text-[10px] font-bold">CYAN</span>
                  <span className="text-[10px] font-mono">#06B6D4</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#3b82f6] text-white flex flex-col justify-between h-20 shadow-md">
                  <span className="text-[10px] font-bold">SKY BLUE</span>
                  <span className="text-[10px] font-mono">#3B82F6</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1e293b] text-slate-300 flex flex-col justify-between h-20 border border-white/10 shadow-md">
                  <span className="text-[10px] font-bold">SLATE</span>
                  <span className="text-[10px] font-mono">#1E293B</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#ffffff] text-slate-900 flex flex-col justify-between h-20 shadow-md">
                  <span className="text-[10px] font-bold">POLAR</span>
                  <span className="text-[10px] font-mono">#FFFFFF</span>
                </div>
              </div>
            </div>

            {/* Typography Specimen */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] font-mono">
                  PRIMARY TYPOGRAPHY
                </span>
                <span className="text-white font-bold text-sm">
                  Inter Variable • Geist Sans
                </span>
              </div>
              <span className="text-cyan-400 font-mono text-xs">
                Aa Bb Gg 123
              </span>
            </div>
          </div>
        )}

        {activeBoard === "social" && (
          <div className="space-y-4">
            {/* Social Ad Card Preview */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#10152e] via-[#090d1f] to-[#04060e] border border-cyan-500/25 relative overflow-hidden shadow-lg">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Instagram Feed & Story Ad
                </span>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                  1080 x 1080 (1:1)
                </span>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-950/50 via-slate-900/60 to-blue-950/40 border border-white/10 text-center my-2">
                <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block mb-1">
                  LIMITED DIGITAL EXPANSION
                </span>
                <h5 className="text-lg font-black text-white leading-tight mb-2">
                  Elevate Your Brand's Visual Presence
                </h5>
                <p className="text-xs text-slate-300 max-w-sm mx-auto mb-4">
                  Stand out in crowded feeds with custom graphics engineered for maximum CTR.
                </p>
                <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  Claim Free Consultation
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>Optimized for Meta & LinkedIn Ad Standards</span>
              <span className="text-emerald-400 font-medium">98.4% Ad Recall Rate</span>
            </div>
          </div>
        )}

        {activeBoard === "print" && (
          <div className="space-y-3.5">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Print Production Specifications
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-white/[0.06]">
                <span className="text-slate-400">Color Profile</span>
                <span className="text-white font-mono font-bold">CMYK (FOGRA39)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/[0.06]">
                <span className="text-slate-400">Resolution</span>
                <span className="text-emerald-400 font-mono font-bold">300 DPI High-Def</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/[0.06]">
                <span className="text-slate-400">Bleed & Crop Margins</span>
                <span className="text-white font-mono font-bold">3mm Bleed Included</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Vector Scalability</span>
                <span className="text-cyan-400 font-mono font-bold">Infinite Resolution</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center">
              Ready for immediate printing with any commercial print vendor.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const heroHighlights = [
    {
      value: "300 DPI",
      label: t("serviceDetails.graphicDesigning.highlights.0.label", "Print Precision"),
    },
    {
      value: "100%",
      label: t("serviceDetails.graphicDesigning.highlights.1.label", "Vector Scalability"),
    },
    {
      value: "Full Rights",
      label: t("serviceDetails.graphicDesigning.highlights.2.label", "Commercial Ownership"),
    },
    {
      value: "Ready-To-Print",
      label: t("serviceDetails.graphicDesigning.highlights.3.label", "CMYK & RGB Assets"),
    },
  ];

  const overviewParagraphs = [
    t(
      "serviceDetails.graphicDesigning.overviewParagraphs.0",
      "Visual design is the immediate emotional bridge between your company and your prospective clients. Before someone reads a single line of your sales copy, your logo, typography, color harmony, and visual collateral have already signaled whether you are trustworthy, innovative, and premium."
    ),
    t(
      "serviceDetails.graphicDesigning.overviewParagraphs.1",
      "At Legacy IT, we craft cohesive visual design systems that cut through market noise. We don't just produce isolated graphics; we build comprehensive visual identities that seamlessly translate from business cards and stationery to high-impact digital advertisements and social campaigns."
    ),
    t(
      "serviceDetails.graphicDesigning.overviewParagraphs.2",
      "Every asset is delivered in full vector resolution with organized source files, exact color values, and complete commercial usage rights."
    ),
  ];

  const deliverables = [
    {
      icon: LuSparkles,
      title: t("serviceDetails.graphicDesigning.deliverables.0.title", "Logo Design"),
      description: t(
        "serviceDetails.graphicDesigning.deliverables.0.description",
        "Memorable, versatile brandmarks and wordmarks that capture your company's essence and scale effortlessly across any medium."
      ),
      features: [
        t(
          "serviceDetails.graphicDesigning.deliverables.0.features.0",
          "Primary, Secondary & Icon Variations"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.0.features.1",
          "Monochrome & Dark Mode Lockups"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.0.features.2",
          "Full Vector Source Files (AI, EPS)"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.0.features.3",
          "Clear Space & Sizing Standards"
        ),
      ],
    },
    {
      icon: LuLayers,
      title: t(
        "serviceDetails.graphicDesigning.deliverables.1.title",
        "Brand Identity Design"
      ),
      description: t(
        "serviceDetails.graphicDesigning.deliverables.1.description",
        "A complete visual design system including color palettes, typography hierarchies, icon systems, and brand style guides."
      ),
      features: [
        t(
          "serviceDetails.graphicDesigning.deliverables.1.features.0",
          "Comprehensive Brand Guideline Manual"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.1.features.1",
          "HEX, RGB, and CMYK Color Standards"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.1.features.2",
          "Primary & Secondary Typeface Selection"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.1.features.3",
          "Brand Voice & Imagery Direction"
        ),
      ],
    },
    {
      icon: LuShare2,
      title: t(
        "serviceDetails.graphicDesigning.deliverables.2.title",
        "Social Media Graphics"
      ),
      description: t(
        "serviceDetails.graphicDesigning.deliverables.2.description",
        "High-engagement templates and graphics tailored for Instagram, LinkedIn, Facebook, and X to maintain consistent branding across feeds."
      ),
      features: [
        t(
          "serviceDetails.graphicDesigning.deliverables.2.features.0",
          "Carousel Post Templates"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.2.features.1",
          "Story & Reel Cover Graphics"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.2.features.2",
          "Profile Headers & Banners"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.2.features.3",
          "Custom Branded Icon Sets"
        ),
      ],
    },
    {
      icon: LuFileText,
      title: t(
        "serviceDetails.graphicDesigning.deliverables.3.title",
        "Business Cards & Stationery"
      ),
      description: t(
        "serviceDetails.graphicDesigning.deliverables.3.description",
        "Tactile, print-ready corporate stationery that leaves an indelible impression during client meetings and networking events."
      ),
      features: [
        t(
          "serviceDetails.graphicDesigning.deliverables.3.features.0",
          "Modern Business Card Formats"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.3.features.1",
          "Official Corporate Letterheads"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.3.features.2",
          "Branded Presentation Folders"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.3.features.3",
          "Envelope & Email Signature Assets"
        ),
      ],
    },
    {
      icon: LuBookOpen,
      title: t(
        "serviceDetails.graphicDesigning.deliverables.4.title",
        "Brochures & Flyers"
      ),
      description: t(
        "serviceDetails.graphicDesigning.deliverables.4.description",
        "Clean, informative print and digital brochures that structure your service offerings and communicate your value proposition clearly."
      ),
      features: [
        t(
          "serviceDetails.graphicDesigning.deliverables.4.features.0",
          "Bi-Fold & Tri-Fold Layouts"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.4.features.1",
          "Corporate Product Catalogs"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.4.features.2",
          "Interactive Digital PDF Brochures"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.4.features.3",
          "Commercial Print-Ready Files"
        ),
      ],
    },
    {
      icon: LuImage,
      title: t(
        "serviceDetails.graphicDesigning.deliverables.5.title",
        "Posters & Banners"
      ),
      description: t(
        "serviceDetails.graphicDesigning.deliverables.5.description",
        "Large-format indoor and outdoor banners, roll-up displays, and event posters designed for visual clarity at a distance."
      ),
      features: [
        t(
          "serviceDetails.graphicDesigning.deliverables.5.features.0",
          "High-Resolution Vector Graphics"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.5.features.1",
          "Trade Show Booth Graphics"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.5.features.2",
          "Roll-Up Retractable Banners"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.5.features.3",
          "Billboard & Exterior Signage"
        ),
      ],
    },
    {
      icon: LuMegaphone,
      title: t(
        "serviceDetails.graphicDesigning.deliverables.6.title",
        "Marketing & Promotional Materials"
      ),
      description: t(
        "serviceDetails.graphicDesigning.deliverables.6.description",
        "Eye-catching promotional flyers, stickers, merchandise graphics, and event collateral that elevate brand awareness."
      ),
      features: [
        t(
          "serviceDetails.graphicDesigning.deliverables.6.features.0",
          "Event & Conference Handouts"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.6.features.1",
          "Product Fact Sheets & One-Pagers"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.6.features.2",
          "Custom Branded Merchandise"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.6.features.3",
          "Packaging & Label Layouts"
        ),
      ],
    },
    {
      icon: LuTarget,
      title: t(
        "serviceDetails.graphicDesigning.deliverables.7.title",
        "Digital Advertising Creatives"
      ),
      description: t(
        "serviceDetails.graphicDesigning.deliverables.7.description",
        "Click-optimized banner ads, display ads, and promotional creatives tailored for Google Display Network and Meta advertising."
      ),
      features: [
        t(
          "serviceDetails.graphicDesigning.deliverables.7.features.0",
          "Standard IAB Display Ad Sizes"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.7.features.1",
          "High-Contrast Value Projections"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.7.features.2",
          "A/B Creative Variations"
        ),
        t(
          "serviceDetails.graphicDesigning.deliverables.7.features.3",
          "Platform Guideline Compliant"
        ),
      ],
    },
  ];

  const whyReasons = [
    {
      number: "01",
      icon: LuSparkles,
      title: t(
        "serviceDetails.graphicDesigning.whyReasons.0.title",
        "Strategic Brand Distinction"
      ),
      description: t(
        "serviceDetails.graphicDesigning.whyReasons.0.description",
        "We don't do generic clip art. Every design is custom tailored to position your business as a leader in your sector."
      ),
    },
    {
      number: "02",
      icon: LuLayers,
      title: t(
        "serviceDetails.graphicDesigning.whyReasons.1.title",
        "Full Vector Precision"
      ),
      description: t(
        "serviceDetails.graphicDesigning.whyReasons.1.description",
        "We build on vector foundations so your visual assets scale flawlessly from an app icon to a towering highway billboard."
      ),
    },
    {
      number: "03",
      icon: LuShare2,
      title: t(
        "serviceDetails.graphicDesigning.whyReasons.2.title",
        "Print & Digital Harmony"
      ),
      description: t(
        "serviceDetails.graphicDesigning.whyReasons.2.description",
        "We ensure color accuracy and typographic consistency across RGB screens and physical CMYK print machines."
      ),
    },
    {
      number: "04",
      icon: LuCheck,
      title: t(
        "serviceDetails.graphicDesigning.whyReasons.3.title",
        "100% Commercial Ownership"
      ),
      description: t(
        "serviceDetails.graphicDesigning.whyReasons.3.description",
        "Upon delivery, you receive all vector source files, production exports, and full intellectual property rights."
      ),
    },
  ];

  const processSteps = [
    {
      number: "01",
      name: t("serviceDetails.graphicDesigning.processSteps.0.name", "Discover"),
      description: t(
        "serviceDetails.graphicDesigning.processSteps.0.description",
        "We explore your brand positioning, core values, audience tastes, and competitive design benchmarks."
      ),
      icon: LuSearch,
    },
    {
      number: "02",
      name: t("serviceDetails.graphicDesigning.processSteps.1.name", "Plan & Create"),
      description: t(
        "serviceDetails.graphicDesigning.processSteps.1.description",
        "We sketch concepts, explore mood boards, and develop distinctive logo marks and layout prototypes."
      ),
      icon: LuPenTool,
    },
    {
      number: "03",
      name: t("serviceDetails.graphicDesigning.processSteps.2.name", "Execute"),
      description: t(
        "serviceDetails.graphicDesigning.processSteps.2.description",
        "We digitize vector paths, establish color harmonies, build collateral mockups, and refine based on your feedback."
      ),
      icon: LuCode,
    },
    {
      number: "04",
      name: t("serviceDetails.graphicDesigning.processSteps.3.name", "Deliver"),
      description: t(
        "serviceDetails.graphicDesigning.processSteps.3.description",
        "We hand over an organized folder containing all vector master files, web exports, print specifications, and guidelines."
      ),
      icon: LuRocket,
    },
  ];

  const faqs = [
    {
      question: t(
        "serviceDetails.graphicDesigning.faqs.0.question",
        "What source files will I receive with my designs?"
      ),
      answer: t(
        "serviceDetails.graphicDesigning.faqs.0.answer",
        "You receive complete master source files (.AI, .EPS, .PDF) along with optimized digital formats (.SVG, .PNG, .JPG). For print projects, files include CMYK color profiles, crop marks, and proper bleed margins."
      ),
    },
    {
      question: t(
        "serviceDetails.graphicDesigning.faqs.1.question",
        "How many revisions are included in a design project?"
      ),
      answer: t(
        "serviceDetails.graphicDesigning.faqs.1.answer",
        "We incorporate structured revision rounds to refine color nuances, font adjustments, and visual details until the outcome aligns precisely with your expectations."
      ),
    },
    {
      question: t(
        "serviceDetails.graphicDesigning.faqs.2.question",
        "Will I own the full intellectual property rights?"
      ),
      answer: t(
        "serviceDetails.graphicDesigning.faqs.2.answer",
        "Yes, 100%. Upon project completion and final handover, all commercial rights, intellectual property, and copyright transfer entirely to your business."
      ),
    },
    {
      question: t(
        "serviceDetails.graphicDesigning.faqs.3.question",
        "Can you design for both print and digital mediums?"
      ),
      answer: t(
        "serviceDetails.graphicDesigning.faqs.3.answer",
        "Yes. We understand the technical differences between RGB pixel grids for digital monitors and CMYK DPI requirements for physical print presses, ensuring flawless reproduction everywhere."
      ),
    },
    {
      question: t(
        "serviceDetails.graphicDesigning.faqs.4.question",
        "How long does a brand identity package take to complete?"
      ),
      answer: t(
        "serviceDetails.graphicDesigning.faqs.4.answer",
        "Initial logo concepts are typically presented within 3-5 business days. A full brand identity system including guidelines, collateral, and social kits generally takes 1-2 weeks."
      ),
    },
  ];

  return (
    <ServiceDetailLayout
      seoTitle={t("serviceDetails.graphicDesigning.seoTitle", "Graphic Designing")}
      seoDescription={t(
        "serviceDetails.graphicDesigning.seoDescription",
        "We transform ideas into compelling visual designs that communicate your brand identity, capture attention, and leave a lasting impression."
      )}
      eyebrow={t(
        "serviceDetails.graphicDesigning.eyebrow",
        "BRAND IDENTITY & VISUAL DESIGN"
      )}
      headlineStart={t(
        "serviceDetails.graphicDesigning.headlineStart",
        "Creative Designs That Make"
      )}
      headlineHighlight={t(
        "serviceDetails.graphicDesigning.headlineHighlight",
        "Your Brand Stand Out."
      )}
      description={t(
        "serviceDetails.graphicDesigning.description",
        "We transform ideas into compelling visual designs that communicate your brand identity, capture attention, and leave a lasting impression."
      )}
      heroHighlights={heroHighlights}
      overviewHeading={t(
        "serviceDetails.graphicDesigning.overviewHeading",
        "Visual Design That Builds Unforgettable Brand Authority."
      )}
      overviewParagraphs={overviewParagraphs}
      overviewVisual={graphicVisual}
      deliverablesHeading={t(
        "serviceDetails.graphicDesigning.deliverablesHeading",
        "What We Offer in Graphic Designing"
      )}
      deliverables={deliverables}
      whyHeading={t(
        "serviceDetails.graphicDesigning.whyHeading",
        "Why Choose Legacy IT for Graphic Design?"
      )}
      whyReasons={whyReasons}
      processSteps={processSteps}
      faqs={faqs}
      ctaHeading={t(
        "serviceDetails.graphicDesigning.ctaHeading",
        "Ready to Elevate Your Brand With Standout Design?"
      )}
      ctaDescription={t(
        "serviceDetails.graphicDesigning.ctaDescription",
        "Let's transform your vision into unforgettable visual experiences that inspire confidence and win customers."
      )}
    />
  );
}
