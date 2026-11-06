import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceDetailLayout from "../components/ServiceDetailLayout";
import {
  LuTrendingUp,
  LuSearch,
  LuFileText,
  LuCpu,
  LuShare2,
  LuMegaphone,
  LuTarget,
  LuGlobe,
  LuPenTool,
  LuCode,
  LuRocket,
} from "react-icons/lu";

export default function DigitalMarketing() {
  const { t } = useTranslation();
  const [activeMetric, setActiveMetric] = useState("traffic"); // 'traffic' | 'keywords' | 'ads'

  const marketingVisual = (
    <div className="relative rounded-2xl border border-white/10 bg-[#0c1020]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cyan-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top Header & Switcher */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-300">
            SEO & Growth Marketing Analytics
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => setActiveMetric("traffic")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeMetric === "traffic"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Organic Traffic
          </button>
          <button
            onClick={() => setActiveMetric("keywords")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeMetric === "keywords"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Rankings
          </button>
          <button
            onClick={() => setActiveMetric("ads")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeMetric === "ads"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ROAS / Ads
          </button>
        </div>
      </div>

      {/* Main Interactive Metric Board */}
      <div className="space-y-4 min-h-[340px] flex flex-col justify-center">
        {/* KPI Scorecards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">
              Organic Sessions
            </span>
            <span className="text-lg sm:text-xl font-black text-white mt-0.5 block">
              48,290
            </span>
            <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5 mt-1">
              ↑ +248.6% YoY
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">
              Avg. Conversion
            </span>
            <span className="text-lg sm:text-xl font-black text-white mt-0.5 block">
              4.62%
            </span>
            <span className="text-[10px] font-bold text-cyan-400 flex items-center gap-0.5 mt-1">
              ↑ High Intent
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">
              Top 3 Rankings
            </span>
            <span className="text-lg sm:text-xl font-black text-white mt-0.5 block">
              142 Keywords
            </span>
            <span className="text-[10px] font-bold text-purple-400 flex items-center gap-0.5 mt-1">
              ↑ Page 1 Dominance
            </span>
          </div>
        </div>

        {activeMetric === "traffic" && (
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#10152c] to-[#070a16] border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white">Monthly Organic Traffic Growth Curve</span>
              <span className="text-emerald-400 font-mono text-[11px]">+3,400 Visits/Mo</span>
            </div>

            {/* Stylized Simulated Chart Bars */}
            <div className="h-28 flex items-end gap-2 pt-4 px-2">
              <div className="flex-1 bg-slate-800/80 rounded-t h-[25%]" />
              <div className="flex-1 bg-slate-800/80 rounded-t h-[32%]" />
              <div className="flex-1 bg-slate-700/80 rounded-t h-[40%]" />
              <div className="flex-1 bg-cyan-950/80 border-t border-cyan-500/50 rounded-t h-[52%]" />
              <div className="flex-1 bg-cyan-900/80 border-t border-cyan-400/60 rounded-t h-[68%]" />
              <div className="flex-1 bg-cyan-800/80 border-t border-cyan-300/80 rounded-t h-[82%]" />
              <div className="flex-1 bg-gradient-to-t from-cyan-600 to-sky-400 rounded-t h-[100%] shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
            </div>

            <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/[0.06]">
              <span>MONTH 1</span>
              <span>MONTH 2</span>
              <span>MONTH 3</span>
              <span>MONTH 4</span>
              <span>MONTH 5</span>
              <span>MONTH 6</span>
              <span className="text-cyan-300 font-bold">CURRENT</span>
            </div>
          </div>
        )}

        {activeMetric === "keywords" && (
          <div className="p-4 rounded-xl bg-[#060812] border border-white/[0.08] space-y-2.5 text-xs">
            <div className="flex justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-white/[0.06]">
              <span>TARGET SEARCH QUERY</span>
              <span>GOOGLE RANK</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-white font-medium">Enterprise Technology Solutions</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold">
                #1 Position
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-white font-medium">Bespoke Software Development Agency</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold">
                #1 Position
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-white font-medium">Modern Responsive Web Architecture</span>
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] font-bold">
                #2 Position
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-white font-medium">High Conversion Landing Page Design</span>
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] font-bold">
                #3 Position
              </span>
            </div>
          </div>
        )}

        {activeMetric === "ads" && (
          <div className="p-4 rounded-xl bg-[#060812] border border-white/[0.08] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-white font-bold">Paid Advertising Performance</span>
              <span className="text-cyan-400 font-mono text-[11px]">4.82x ROAS</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[10px] text-slate-400 block">Cost Per Acquisition</span>
                <span className="text-emerald-300 font-bold text-sm block mt-0.5">-38.4% Cheaper</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[10px] text-slate-400 block">Ad Click-Through Rate</span>
                <span className="text-cyan-300 font-bold text-sm block mt-0.5">5.2% (Top 1%)</span>
              </div>
            </div>
            <p className="text-[11px] text-center text-slate-400">
              Targeted Google Search & Meta ad campaigns with continuous A/B copy and creative testing.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const heroHighlights = [
    {
      value: "+248%",
      label: t("serviceDetails.digitalMarketing.highlights.0.label", "Average Traffic Lift"),
    },
    {
      value: "Page 1",
      label: t("serviceDetails.digitalMarketing.highlights.1.label", "Target SEO Rankings"),
    },
    {
      value: "4.8x",
      label: t("serviceDetails.digitalMarketing.highlights.2.label", "Average Ad ROAS"),
    },
    {
      value: "100%",
      label: t("serviceDetails.digitalMarketing.highlights.3.label", "White-Hat Techniques"),
    },
  ];

  const overviewParagraphs = [
    t(
      "serviceDetails.digitalMarketing.overviewParagraphs.0",
      "Having a world-class digital product means very little if your target customers cannot find you. Effective digital marketing is not about collecting meaningless vanity impressions; it is about attracting qualified, high-intent prospective clients who are actively seeking what you offer."
    ),
    t(
      "serviceDetails.digitalMarketing.overviewParagraphs.1",
      "At Legacy IT, we craft cohesive growth systems combining Organic Search Engine Optimization (SEO) with data-driven social media and paid advertising strategies. We analyze search intent, resolve technical crawling hurdles, write search-dominant content, and optimize every funnel stage."
    ),
    t(
      "serviceDetails.digitalMarketing.overviewParagraphs.2",
      "With completely transparent monthly reporting, you see precisely how rankings improve, where traffic originates, and how marketing spend translates into measurable revenue."
    ),
  ];

  const deliverables = [
    {
      icon: LuSearch,
      title: t(
        "serviceDetails.digitalMarketing.deliverables.0.title",
        "Search Engine Optimization (SEO)"
      ),
      description: t(
        "serviceDetails.digitalMarketing.deliverables.0.description",
        "Holistic search optimization engineered to secure sustainable, compounding top positions on Google for high-value business terms."
      ),
      features: [
        t(
          "serviceDetails.digitalMarketing.deliverables.0.features.0",
          "Comprehensive Keyword Intent Research"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.0.features.1",
          "Competitive Gap Analysis"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.0.features.2",
          "Algorithmic Penalty Protection"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.0.features.3",
          "Monthly Keyword Tracking & Strategy"
        ),
      ],
    },
    {
      icon: LuFileText,
      title: t("serviceDetails.digitalMarketing.deliverables.1.title", "On-Page SEO"),
      description: t(
        "serviceDetails.digitalMarketing.deliverables.1.description",
        "Granular optimization of headings, meta tags, schema markup, image alt attributes, and content structure for maximum relevance."
      ),
      features: [
        t(
          "serviceDetails.digitalMarketing.deliverables.1.features.0",
          "Optimized Title & Meta Descriptions"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.1.features.1",
          "Structured Data & Schema.org Markup"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.1.features.2",
          "Internal Linking Strategy"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.1.features.3",
          "Keyword Density & Readability Auditing"
        ),
      ],
    },
    {
      icon: LuCpu,
      title: t("serviceDetails.digitalMarketing.deliverables.2.title", "Technical SEO"),
      description: t(
        "serviceDetails.digitalMarketing.deliverables.2.description",
        "Deep architectural fixes ensuring search spiders can seamlessly crawl, index, and render your website with zero roadblocks."
      ),
      features: [
        t(
          "serviceDetails.digitalMarketing.deliverables.2.features.0",
          "Robots.txt & XML Sitemap Configuration"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.2.features.1",
          "Canonical Tag & 301 Redirect Architecture"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.2.features.2",
          "Crawl Budget & 404 Error Fixes"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.2.features.3",
          "Core Web Vitals & Speed Optimization"
        ),
      ],
    },
    {
      icon: LuShare2,
      title: t(
        "serviceDetails.digitalMarketing.deliverables.3.title",
        "Social Media Management"
      ),
      description: t(
        "serviceDetails.digitalMarketing.deliverables.3.description",
        "End-to-end community stewardship, content scheduling, and audience engagement across LinkedIn, Instagram, Facebook, and X."
      ),
      features: [
        t(
          "serviceDetails.digitalMarketing.deliverables.3.features.0",
          "Structured Monthly Content Calendars"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.3.features.1",
          "Active Follower Interaction & Replies"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.3.features.2",
          "Hashtag & Social Search Curation"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.3.features.3",
          "Profile Optimization & Auditing"
        ),
      ],
    },
    {
      icon: LuMegaphone,
      title: t(
        "serviceDetails.digitalMarketing.deliverables.4.title",
        "Social Media Marketing"
      ),
      description: t(
        "serviceDetails.digitalMarketing.deliverables.4.description",
        "Targeted, demographic-focused paid social campaigns engineered to capture qualified leads and amplify brand awareness."
      ),
      features: [
        t(
          "serviceDetails.digitalMarketing.deliverables.4.features.0",
          "Meta (Facebook & Instagram) Ad Campaigns"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.4.features.1",
          "LinkedIn B2B Decision-Maker Targeting"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.4.features.2",
          "Custom Retargeting Pixel Integration"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.4.features.3",
          "Creative Ad Copy & Visuals A/B Testing"
        ),
      ],
    },
    {
      icon: LuPenTool,
      title: t(
        "serviceDetails.digitalMarketing.deliverables.5.title",
        "Content Strategy"
      ),
      description: t(
        "serviceDetails.digitalMarketing.deliverables.5.description",
        "High-authority editorial and technical copywriting that establishes your company as the premier subject matter expert in your industry."
      ),
      features: [
        t(
          "serviceDetails.digitalMarketing.deliverables.5.features.0",
          "Search-Dominant Blog Articles"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.5.features.1",
          "Industry Whitepapers & Case Studies"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.5.features.2",
          "Email Newsletter Content Sequences"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.5.features.3",
          "Content Gap Mapping Against Competitors"
        ),
      ],
    },
    {
      icon: LuTarget,
      title: t(
        "serviceDetails.digitalMarketing.deliverables.6.title",
        "Digital Advertising"
      ),
      description: t(
        "serviceDetails.digitalMarketing.deliverables.6.description",
        "Precision Google Search (PPC) and Display ads that intercept customers at the precise moment they are ready to purchase."
      ),
      features: [
        t(
          "serviceDetails.digitalMarketing.deliverables.6.features.0",
          "High-Intent Google Search Ads"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.6.features.1",
          "Negative Keyword Waste Prevention"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.6.features.2",
          "Conversion Tracking & Attribution"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.6.features.3",
          "ROAS & Bid Management Optimization"
        ),
      ],
    },
    {
      icon: LuGlobe,
      title: t(
        "serviceDetails.digitalMarketing.deliverables.7.title",
        "Website Visibility Optimization"
      ),
      description: t(
        "serviceDetails.digitalMarketing.deliverables.7.description",
        "Continuous technical refinements and local citation management to ensure your business dominates relevant regional searches."
      ),
      features: [
        t(
          "serviceDetails.digitalMarketing.deliverables.7.features.0",
          "Google Business Profile Optimization"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.7.features.1",
          "Local Map Pack Ranking Strategies"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.7.features.2",
          "NAP Consistency Verification"
        ),
        t(
          "serviceDetails.digitalMarketing.deliverables.7.features.3",
          "Local Citation & Review Management"
        ),
      ],
    },
  ];

  const whyReasons = [
    {
      number: "01",
      icon: LuTrendingUp,
      title: t(
        "serviceDetails.digitalMarketing.whyReasons.0.title",
        "Revenue Over Vanity Metrics"
      ),
      description: t(
        "serviceDetails.digitalMarketing.whyReasons.0.description",
        "We focus on qualified leads, phone calls, form fills, and sales—not superficial impression counts that don't impact your balance sheet."
      ),
    },
    {
      number: "02",
      icon: LuSearch,
      title: t(
        "serviceDetails.digitalMarketing.whyReasons.1.title",
        "Strict White-Hat Practices"
      ),
      description: t(
        "serviceDetails.digitalMarketing.whyReasons.1.description",
        "We adhere strictly to Google's Helpful Content Guidelines, protecting your digital assets from volatile algorithm penalties."
      ),
    },
    {
      number: "03",
      icon: LuCpu,
      title: t(
        "serviceDetails.digitalMarketing.whyReasons.2.title",
        "Technical & Creative Synergy"
      ),
      description: t(
        "serviceDetails.digitalMarketing.whyReasons.2.description",
        "We bring engineers and creative marketers together, solving technical crawling errors while writing compelling sales copy."
      ),
    },
    {
      number: "04",
      icon: LuTarget,
      title: t(
        "serviceDetails.digitalMarketing.whyReasons.3.title",
        "Transparent Reporting"
      ),
      description: t(
        "serviceDetails.digitalMarketing.whyReasons.3.description",
        "You get direct access to real-time dashboards and clear monthly reporting meetings showing exact ROI and keyword movements."
      ),
    },
  ];

  const processSteps = [
    {
      number: "01",
      name: t("serviceDetails.digitalMarketing.processSteps.0.name", "Discover"),
      description: t(
        "serviceDetails.digitalMarketing.processSteps.0.description",
        "We conduct a complete technical website audit, analyze competitor strengths, and identify high-value search terms."
      ),
      icon: LuSearch,
    },
    {
      number: "02",
      name: t("serviceDetails.digitalMarketing.processSteps.1.name", "Plan & Create"),
      description: t(
        "serviceDetails.digitalMarketing.processSteps.1.description",
        "We map out a 6-month SEO optimization calendar, establish ad campaign architectures, and produce target content outlines."
      ),
      icon: LuPenTool,
    },
    {
      number: "03",
      name: t("serviceDetails.digitalMarketing.processSteps.2.name", "Execute"),
      description: t(
        "serviceDetails.digitalMarketing.processSteps.2.description",
        "We implement on-page enhancements, resolve technical errors, publish optimized content, and launch targeted ad sets."
      ),
      icon: LuCode,
    },
    {
      number: "04",
      name: t("serviceDetails.digitalMarketing.processSteps.3.name", "Deliver"),
      description: t(
        "serviceDetails.digitalMarketing.processSteps.3.description",
        "We analyze conversion metrics, refine bids, track keyword shifts, and present detailed monthly growth reports."
      ),
      icon: LuRocket,
    },
  ];

  const faqs = [
    {
      question: t(
        "serviceDetails.digitalMarketing.faqs.0.question",
        "How long does it take to see tangible results from SEO?"
      ),
      answer: t(
        "serviceDetails.digitalMarketing.faqs.0.answer",
        "SEO is a compounding organic growth asset. Initial indexation improvements and keyword movement typically emerge within 60 to 90 days. Significant, sustainable traffic and lead generation leaps generally become evident around months 4 to 6."
      ),
    },
    {
      question: t(
        "serviceDetails.digitalMarketing.faqs.1.question",
        "What is the difference between On-Page and Technical SEO?"
      ),
      answer: t(
        "serviceDetails.digitalMarketing.faqs.1.answer",
        "On-Page SEO focuses on human and bot-facing content—keyword integration, headings, readability, and meta tags. Technical SEO deals with underlying server architecture—page load speed, mobile responsive rendering, SSL security, XML sitemaps, and robots.txt rules."
      ),
    },
    {
      question: t(
        "serviceDetails.digitalMarketing.faqs.2.question",
        "Do you manage paid ad campaigns as well as organic SEO?"
      ),
      answer: t(
        "serviceDetails.digitalMarketing.faqs.2.answer",
        "Yes. We specialize in integrated growth. While SEO builds long-term, zero-marginal-cost organic equity, Google Search PPC and Meta ads provide immediate customer acquisition from day one."
      ),
    },
    {
      question: t(
        "serviceDetails.digitalMarketing.faqs.3.question",
        "How do you track and report our marketing ROI?"
      ),
      answer: t(
        "serviceDetails.digitalMarketing.faqs.3.answer",
        "We configure Google Analytics 4, Google Search Console, and custom conversion tracking tags. You receive monthly reports breaking down traffic sources, cost-per-acquisition, keyword position changes, and inbound lead volume."
      ),
    },
    {
      question: t(
        "serviceDetails.digitalMarketing.faqs.4.question",
        "Can you collaborate with our existing internal team?"
      ),
      answer: t(
        "serviceDetails.digitalMarketing.faqs.4.answer",
        "Absolutely. We can function as your full-service digital marketing department, or serve as specialized consultants partnering directly with your internal marketing and sales staff."
      ),
    },
  ];

  return (
    <ServiceDetailLayout
      seoTitle={t("serviceDetails.digitalMarketing.seoTitle", "Digital Marketing & SEO")}
      seoDescription={t(
        "serviceDetails.digitalMarketing.seoDescription",
        "We help businesses strengthen their online presence, reach the right audience, and build meaningful connections through digital marketing and search engine optimization."
      )}
      eyebrow={t(
        "serviceDetails.digitalMarketing.eyebrow",
        "SEARCH & PERFORMANCE MARKETING"
      )}
      headlineStart={t(
        "serviceDetails.digitalMarketing.headlineStart",
        "Get Discovered. Reach Further."
      )}
      headlineHighlight={t(
        "serviceDetails.digitalMarketing.headlineHighlight",
        "Grow Faster."
      )}
      description={t(
        "serviceDetails.digitalMarketing.description",
        "We help businesses strengthen their online presence, reach the right audience, and build meaningful connections through digital marketing and search engine optimization."
      )}
      heroHighlights={heroHighlights}
      overviewHeading={t(
        "serviceDetails.digitalMarketing.overviewHeading",
        "Growth Marketing Grounded in Data, Rankings, and Real Revenue."
      )}
      overviewParagraphs={overviewParagraphs}
      overviewVisual={marketingVisual}
      deliverablesHeading={t(
        "serviceDetails.digitalMarketing.deliverablesHeading",
        "What We Offer in Digital Marketing & SEO"
      )}
      deliverables={deliverables}
      whyHeading={t(
        "serviceDetails.digitalMarketing.whyHeading",
        "Why Choose Legacy IT for Digital Growth?"
      )}
      whyReasons={whyReasons}
      processSteps={processSteps}
      faqs={faqs}
      ctaHeading={t(
        "serviceDetails.digitalMarketing.ctaHeading",
        "Ready to Dominate Search and Accelerate Your Growth?"
      )}
      ctaDescription={t(
        "serviceDetails.digitalMarketing.ctaDescription",
        "Let's build a data-driven digital marketing and SEO strategy that puts your brand in front of customers ready to buy."
      )}
    />
  );
}
