import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceDetailLayout from "../components/ServiceDetailLayout";
import {
  LuGlobe,
  LuShoppingBag,
  LuCode,
  LuSmartphone,
  LuTarget,
  LuRefreshCw,
  LuShieldCheck,
  LuZap,
  LuLayers,
  LuServer,
  LuSparkles,
  LuSearch,
  LuPenTool,
  LuRocket,
} from "react-icons/lu";

export default function WebDevelopment() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("preview"); // 'preview' | 'code' | 'lighthouse'

  const webVisual = (
    <div className="relative rounded-2xl border border-white/10 bg-[#0c1020]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Browser Window Header */}
      <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
            legacyit.dev/preview
          </span>
        </div>

        {/* Viewport & Mode Toggle */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-2.5 py-1 text-xs rounded font-medium transition-all cursor-pointer ${
              activeTab === "preview"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Live Preview
          </button>
          <button
            onClick={() => setActiveTab("lighthouse")}
            className={`px-2.5 py-1 text-xs rounded font-medium transition-all cursor-pointer ${
              activeTab === "lighthouse"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Lighthouse
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-2.5 py-1 text-xs rounded font-medium transition-all cursor-pointer ${
              activeTab === "code"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Code
          </button>
        </div>
      </div>

      {/* Main Visual Body */}
      <div className="p-5 sm:p-6 min-h-[300px] flex flex-col justify-center">
        {activeTab === "preview" && (
          <div className="space-y-4">
            {/* Mockup Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="font-bold text-sm tracking-tight text-white">
                  NextGen Enterprise Portal
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                ● 99.98% Uptime
              </span>
            </div>

            {/* Mockup Hero Banner inside Preview */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#12182c] to-[#0a0e1c] border border-white/[0.06] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-xl pointer-events-none" />
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                RESPONSIVE WEB ARCHITECTURE
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                Scalable Digital Experiences for Growing Businesses
              </h4>
              <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                Ultra-fast loading, conversion-optimized interfaces engineered with modern React & Next.js frameworks.
              </p>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold inline-block shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Explore Platform
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ⚡ 0.6s FCP Metric
                </span>
              </div>
            </div>

            {/* Metric pill bar */}
            <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 block">FIRST CONTENTFUL</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">0.6s (Good)</span>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 block">SEO VISIBILITY</span>
                <span className="text-xs font-bold text-cyan-400 font-mono">100/100</span>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 block">SECURITY</span>
                <span className="text-xs font-bold text-sky-400 font-mono">SSL A+ Grade</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "lighthouse" && (
          <div className="space-y-4 py-2">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Google Lighthouse Performance Audit
              </span>
              <span className="text-xs font-mono text-emerald-400">PASSED ALL CORE VITALS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
              {[
                { name: "Performance", score: 99, color: "text-emerald-400" },
                { name: "Accessibility", score: 100, color: "text-emerald-400" },
                { name: "Best Practices", score: 100, color: "text-emerald-400" },
                { name: "SEO Audit", score: 100, color: "text-emerald-400" },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                >
                  <div className="w-14 h-14 rounded-full border-4 border-emerald-500/80 flex items-center justify-center font-bold text-lg text-white mb-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    {metric.score}
                  </div>
                  <span className="text-xs font-medium text-slate-300 text-center">
                    {metric.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 text-center">
              Clean semantic markup and modern asset compression ensure top search engine indexing.
            </p>
          </div>
        )}

        {activeTab === "code" && (
          <div className="bg-[#080b16] p-4 rounded-xl border border-white/[0.06] font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto">
            <p className="text-slate-500">// Modern Component Architecture</p>
            <p>
              <span className="text-pink-400">export default async function</span>{" "}
              <span className="text-blue-400">CorporatePortal</span>() &#123;
            </p>
            <p className="pl-4">
              <span className="text-pink-400">const</span> data ={" "}
              <span className="text-pink-400">await</span>{" "}
              <span className="text-yellow-300">fetchEnterpriseData</span>();
            </p>
            <p className="pl-4">
              <span className="text-pink-400">return</span> (
            </p>
            <p className="pl-8 text-cyan-300">
              &lt;<span className="text-emerald-400">WebEngine</span>{" "}
              <span className="text-sky-300">speed</span>="sub-second"{" "}
              <span className="text-sky-300">security</span>="A+" /&gt;
            </p>
            <p className="pl-4">);</p>
            <p>&#125;</p>
          </div>
        )}
      </div>
    </div>
  );

  const heroHighlights = [
    {
      value: "<0.8s",
      label: t("serviceDetails.webDevelopment.highlights.0.label", "Average Load Speed"),
    },
    {
      value: "100%",
      label: t("serviceDetails.webDevelopment.highlights.1.label", "Responsive Layouts"),
    },
    {
      value: "99+",
      label: t("serviceDetails.webDevelopment.highlights.2.label", "Lighthouse Scores"),
    },
    {
      value: "24/7",
      label: t("serviceDetails.webDevelopment.highlights.3.label", "Architecture Reliability"),
    },
  ];

  const overviewParagraphs = [
    t(
      "serviceDetails.webDevelopment.overviewParagraphs.0",
      "Your website is the digital storefront, primary marketing engine, and central credibility benchmark of your brand. In today's competitive landscape, visitors form an impression within milliseconds. A slow, outdated, or confusing website directly leaks leads, customers, and revenue."
    ),
    t(
      "serviceDetails.webDevelopment.overviewParagraphs.1",
      "At Legacy IT, we engineer web solutions that combine cutting-edge technology with intuitive human-centric design. From lightning-fast corporate websites to complex e-commerce hubs, we build clean, maintainable, and scalable platforms that drive conversions."
    ),
    t(
      "serviceDetails.webDevelopment.overviewParagraphs.2",
      "Every line of code is optimized for Core Web Vitals, organic search discoverability, and frictionless mobile usability across every device and browser."
    ),
  ];

  const deliverables = [
    {
      icon: LuGlobe,
      title: t(
        "serviceDetails.webDevelopment.deliverables.0.title",
        "Business & Corporate Websites"
      ),
      description: t(
        "serviceDetails.webDevelopment.deliverables.0.description",
        "Professional, brand-aligned websites engineered to establish authority, communicate your mission, and capture high-intent inquiries."
      ),
      features: [
        t(
          "serviceDetails.webDevelopment.deliverables.0.features.0",
          "Corporate Branding Integration"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.0.features.1",
          "Clear Lead Capture Funnels"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.0.features.2",
          "Executive Team & Service Portals"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.0.features.3",
          "Fast Multi-page Architecture"
        ),
      ],
    },
    {
      icon: LuShoppingBag,
      title: t("serviceDetails.webDevelopment.deliverables.1.title", "E-commerce Websites"),
      description: t(
        "serviceDetails.webDevelopment.deliverables.1.description",
        "High-conversion online stores with smooth checkout experiences, secure payment gateways, and scalable inventory management."
      ),
      features: [
        t(
          "serviceDetails.webDevelopment.deliverables.1.features.0",
          "Secure Stripe / PayPal / Local Gateways"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.1.features.1",
          "Product Catalog & Filtering"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.1.features.2",
          "Frictionless One-Click Checkout"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.1.features.3",
          "Customer Accounts & Order Tracking"
        ),
      ],
    },
    {
      icon: LuCode,
      title: t(
        "serviceDetails.webDevelopment.deliverables.2.title",
        "Custom Website Development"
      ),
      description: t(
        "serviceDetails.webDevelopment.deliverables.2.description",
        "Tailored web applications built from scratch to meet unique business workflows, interactive calculators, or client portal needs."
      ),
      features: [
        t(
          "serviceDetails.webDevelopment.deliverables.2.features.0",
          "React / Next.js Custom Frameworks"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.2.features.1",
          "RESTful API & Webhook Integrations"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.2.features.2",
          "Dynamic Database Architectures"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.2.features.3",
          "Bespoke Interactive Components"
        ),
      ],
    },
    {
      icon: LuSmartphone,
      title: t("serviceDetails.webDevelopment.deliverables.3.title", "Responsive Web Design"),
      description: t(
        "serviceDetails.webDevelopment.deliverables.3.description",
        "Fluid layouts crafted mobile-first to ensure an impeccable user experience on smartphones, tablets, laptops, and ultra-wide screens."
      ),
      features: [
        t(
          "serviceDetails.webDevelopment.deliverables.3.features.0",
          "Touch-Friendly Navigation"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.3.features.1",
          "Adaptive Typography & Media"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.3.features.2",
          "Cross-Browser Compatibility"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.3.features.3",
          "Retina Display Graphic Assets"
        ),
      ],
    },
    {
      icon: LuTarget,
      title: t(
        "serviceDetails.webDevelopment.deliverables.4.title",
        "Landing Page Development"
      ),
      description: t(
        "serviceDetails.webDevelopment.deliverables.4.description",
        "Hyper-focused, conversion-rate-optimized landing pages designed for PPC ad campaigns, product debuts, and lead generation."
      ),
      features: [
        t(
          "serviceDetails.webDevelopment.deliverables.4.features.0",
          "High-Converting Visual Hierarchy"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.4.features.1",
          "A/B Testing Infrastructure"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.4.features.2",
          "Instant Load Times"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.4.features.3",
          "Analytics & Conversion Tracking"
        ),
      ],
    },
    {
      icon: LuRefreshCw,
      title: t("serviceDetails.webDevelopment.deliverables.5.title", "Website Redesign"),
      description: t(
        "serviceDetails.webDevelopment.deliverables.5.description",
        "Transform your slow, outdated web presence into a sleek, modern, high-performing asset without losing existing SEO rankings."
      ),
      features: [
        t(
          "serviceDetails.webDevelopment.deliverables.5.features.0",
          "Complete Visual Modernization"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.5.features.1",
          "SEO Migration & 301 Redirect Mapping"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.5.features.2",
          "Enhanced UX & Information Architecture"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.5.features.3",
          "Code Refactoring & Cleanup"
        ),
      ],
    },
    {
      icon: LuShieldCheck,
      title: t("serviceDetails.webDevelopment.deliverables.6.title", "Website Maintenance"),
      description: t(
        "serviceDetails.webDevelopment.deliverables.6.description",
        "Reliable ongoing technical support, continuous security patching, cloud backups, and performance monitoring to keep your site pristine."
      ),
      features: [
        t(
          "serviceDetails.webDevelopment.deliverables.6.features.0",
          "Scheduled Core & Plugin Updates"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.6.features.1",
          "Automated Cloud Daily Backups"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.6.features.2",
          "Continuous Uptime Monitoring"
        ),
        t(
          "serviceDetails.webDevelopment.deliverables.6.features.3",
          "On-Demand Content Updates"
        ),
      ],
    },
  ];

  const whyReasons = [
    {
      number: "01",
      icon: LuZap,
      title: t(
        "serviceDetails.webDevelopment.whyReasons.0.title",
        "Speed & Performance Obsessed"
      ),
      description: t(
        "serviceDetails.webDevelopment.whyReasons.0.description",
        "We build lightweight websites that load in under a second, directly improving conversion rates and search rankings."
      ),
    },
    {
      number: "02",
      icon: LuSmartphone,
      title: t(
        "serviceDetails.webDevelopment.whyReasons.1.title",
        "Mobile-First Usability"
      ),
      description: t(
        "serviceDetails.webDevelopment.whyReasons.1.description",
        "Over 65% of web traffic originates on mobile devices. We design and test on real phones before touching desktop screens."
      ),
    },
    {
      number: "03",
      icon: LuLayers,
      title: t(
        "serviceDetails.webDevelopment.whyReasons.2.title",
        "Modern & Clean Architecture"
      ),
      description: t(
        "serviceDetails.webDevelopment.whyReasons.2.description",
        "No bloated templates or fragile builders. We use modern industry standards like React, Next.js, and Tailwind CSS."
      ),
    },
    {
      number: "04",
      icon: LuServer,
      title: t(
        "serviceDetails.webDevelopment.whyReasons.3.title",
        "Partnership Beyond Launch"
      ),
      description: t(
        "serviceDetails.webDevelopment.whyReasons.3.description",
        "We don't disappear after delivery. We provide long-term technical support, hosting consultation, and continuous improvements."
      ),
    },
  ];

  const processSteps = [
    {
      number: "01",
      name: t("serviceDetails.webDevelopment.processSteps.0.name", "Discover"),
      description: t(
        "serviceDetails.webDevelopment.processSteps.0.description",
        "We analyze your business goals, target audience, brand aesthetic, and technical requirements to create an actionable blueprint."
      ),
      icon: LuSearch,
    },
    {
      number: "02",
      name: t("serviceDetails.webDevelopment.processSteps.1.name", "Plan & Create"),
      description: t(
        "serviceDetails.webDevelopment.processSteps.1.description",
        "We design interactive wireframes, establish modern visual hierarchies, and map frictionless user navigation paths."
      ),
      icon: LuPenTool,
    },
    {
      number: "03",
      name: t("serviceDetails.webDevelopment.processSteps.2.name", "Execute"),
      description: t(
        "serviceDetails.webDevelopment.processSteps.2.description",
        "We write clean, semantic code, integrate custom features, hook up analytics, and conduct rigorous cross-browser testing."
      ),
      icon: LuCode,
    },
    {
      number: "04",
      name: t("serviceDetails.webDevelopment.processSteps.3.name", "Deliver"),
      description: t(
        "serviceDetails.webDevelopment.processSteps.3.description",
        "We deploy to ultra-fast CDN infrastructure, verify SSL, submit sitemaps to Google, and hand over complete administration control."
      ),
      icon: LuRocket,
    },
  ];

  const faqs = [
    {
      question: t(
        "serviceDetails.webDevelopment.faqs.0.question",
        "How long does it typically take to build a website?"
      ),
      answer: t(
        "serviceDetails.webDevelopment.faqs.0.answer",
        "Project timelines vary based on scope. A dedicated landing page can be completed in 5-7 business days, while comprehensive corporate websites or e-commerce stores typically take 2-5 weeks from discovery to final deployment."
      ),
    },
    {
      question: t(
        "serviceDetails.webDevelopment.faqs.1.question",
        "Will my website be mobile-friendly and optimized for Google?"
      ),
      answer: t(
        "serviceDetails.webDevelopment.faqs.1.answer",
        "Yes, 100%. Every website we build is fully responsive across all screen dimensions and includes semantic SEO foundations, meta tags, OpenGraph previews, XML sitemaps, and Core Web Vitals optimization."
      ),
    },
    {
      question: t(
        "serviceDetails.webDevelopment.faqs.2.question",
        "Can I update text and images myself after launch?"
      ),
      answer: t(
        "serviceDetails.webDevelopment.faqs.2.answer",
        "Absolutely. We configure user-friendly CMS management systems or simple admin interfaces so your team can easily modify text, update photos, add blog posts, or manage products without needing to code."
      ),
    },
    {
      question: t(
        "serviceDetails.webDevelopment.faqs.3.question",
        "What technologies and frameworks do you use?"
      ),
      answer: t(
        "serviceDetails.webDevelopment.faqs.3.answer",
        "We prioritize modern, robust stacks including React, Next.js, Node.js, Tailwind CSS, and scalable cloud hosting platforms like Vercel and AWS, ensuring maximum security, blistering speed, and effortless scaling."
      ),
    },
    {
      question: t(
        "serviceDetails.webDevelopment.faqs.4.question",
        "Do you offer post-launch maintenance and support?"
      ),
      answer: t(
        "serviceDetails.webDevelopment.faqs.4.answer",
        "Yes. We offer flexible ongoing maintenance plans covering continuous security updates, cloud backups, speed audits, uptime monitoring, and priority technical assistance."
      ),
    },
  ];

  return (
    <ServiceDetailLayout
      seoTitle={t("serviceDetails.webDevelopment.seoTitle", "Website Design & Development")}
      seoDescription={t(
        "serviceDetails.webDevelopment.seoDescription",
        "We create modern, responsive, and high-performing websites that help businesses establish their digital presence, connect with customers, and grow online."
      )}
      eyebrow={t("serviceDetails.webDevelopment.eyebrow", "ENGINEERING & DIGITAL PRESENCE")}
      headlineStart={t(
        "serviceDetails.webDevelopment.headlineStart",
        "Websites That Build Trust"
      )}
      headlineHighlight={t(
        "serviceDetails.webDevelopment.headlineHighlight",
        "and Drive Growth."
      )}
      description={t(
        "serviceDetails.webDevelopment.description",
        "We create modern, responsive, and high-performing websites that help businesses establish their digital presence, connect with customers, and grow online."
      )}
      heroHighlights={heroHighlights}
      overviewHeading={t(
        "serviceDetails.webDevelopment.overviewHeading",
        "Websites Built for Real Business Impact, Not Just Aesthetics."
      )}
      overviewParagraphs={overviewParagraphs}
      overviewVisual={webVisual}
      deliverablesHeading={t(
        "serviceDetails.webDevelopment.deliverablesHeading",
        "What We Offer in Website Design & Development"
      )}
      deliverables={deliverables}
      whyHeading={t(
        "serviceDetails.webDevelopment.whyHeading",
        "Why Build Your Website With Legacy IT?"
      )}
      whyReasons={whyReasons}
      processSteps={processSteps}
      faqs={faqs}
      ctaHeading={t(
        "serviceDetails.webDevelopment.ctaHeading",
        "Ready to Build a Website That Moves Your Business Forward?"
      )}
      ctaDescription={t(
        "serviceDetails.webDevelopment.ctaDescription",
        "Whether you're starting fresh with your first digital presence or redesigning an existing platform, Legacy IT is ready to help."
      )}
    />
  );
}
