import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceDetailLayout from "../components/ServiceDetailLayout";
import {
  LuSmartphone,
  LuLayers,
  LuLayoutGrid,
  LuCpu,
  LuRefreshCw,
  LuShieldCheck,
  LuZap,
  LuSearch,
  LuPenTool,
  LuCode,
  LuRocket,
  LuSparkles,
} from "react-icons/lu";

export default function MobileDevelopment() {
  const { t } = useTranslation();
  const [activeScreen, setActiveScreen] = useState("dashboard"); // 'dashboard' | 'profile' | 'features'

  const mobileVisual = (
    <div className="relative rounded-2xl border border-white/10 bg-[#0c1020]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Controller */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-300">
            iOS & Android Mobile Simulator
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => setActiveScreen("dashboard")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeScreen === "dashboard"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveScreen("features")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeScreen === "features"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Hardware APIs
          </button>
        </div>
      </div>

      {/* Centered Smartphone Frame */}
      <div className="flex justify-center items-center py-2">
        <div className="w-[280px] sm:w-[300px] rounded-[36px] border-4 border-slate-700 bg-[#060814] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden relative">
          {/* Phone Speaker & Notch */}
          <div className="pt-3 pb-2 px-6 flex justify-between items-center text-[11px] font-mono text-slate-400 border-b border-white/[0.05]">
            <span>9:41</span>
            <div className="w-16 h-3.5 bg-slate-800 rounded-full" />
            <div className="flex items-center gap-1">
              <span>5G</span>
              <div className="w-4 h-2 rounded-sm border border-slate-400 bg-emerald-400" />
            </div>
          </div>

          {/* Interactive Screen Content */}
          <div className="p-4 space-y-3.5 min-h-[360px] flex flex-col justify-between">
            {activeScreen === "dashboard" ? (
              <>
                {/* User Greeting & Status */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                      Welcome Back
                    </p>
                    <p className="text-sm font-bold text-white">Alex Morgan</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-xs text-slate-950">
                    AM
                  </div>
                </div>

                {/* Simulated Notification Card */}
                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/25 flex items-start gap-2.5 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  <div className="w-6 h-6 rounded-md bg-cyan-400/20 flex items-center justify-center text-cyan-400 text-xs flex-shrink-0 mt-0.5">
                    <LuSparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Sync Complete
                    </p>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      Offline database synchronized with cloud backend.
                    </p>
                  </div>
                </div>

                {/* Status Indicator Tiles */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between h-20">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">
                      Cloud Sync
                    </span>
                    <span className="text-sm font-bold text-white">Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between h-20">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">
                      Network Mode
                    </span>
                    <span className="text-sm font-bold text-cyan-400">Offline & Online</span>
                  </div>
                </div>

                {/* Push Notification Simulator */}
                <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-300 font-medium">
                    ⚡ Push Message Sent
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">Just now</span>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                    NATIVE DEVICE SENSORS
                  </span>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-slate-300">Biometric FaceID</span>
                    <span className="text-emerald-400 font-mono font-bold">ACTIVE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-slate-300">GeoLocation GPS</span>
                    <span className="text-cyan-400 font-mono font-bold">READY</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-slate-300">Camera / QR Scanner</span>
                    <span className="text-emerald-400 font-mono font-bold">READY</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-slate-300">Haptic Feedback</span>
                    <span className="text-purple-400 font-mono font-bold">ENABLED</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-center">
                  <span className="text-xs font-bold text-cyan-300">
                    Native API Interfacing
                  </span>
                </div>
              </>
            )}

            {/* Bottom Nav Simulation */}
            <div className="pt-2 border-t border-white/[0.06] flex justify-around text-[10px] font-mono text-slate-400">
              <span className="text-cyan-400 font-bold">Home</span>
              <span>Analytics</span>
              <span>Services</span>
              <span>Profile</span>
            </div>
          </div>

          {/* Home Indicator Bar */}
          <div className="py-2 flex justify-center bg-[#060814]">
            <div className="w-24 h-1 bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );

  const heroHighlights = [
    {
      value: "iOS & Android",
      label: t("serviceDetails.mobileDevelopment.highlights.0.label", "Dual Ecosystems"),
    },
    {
      value: "Fluid",
      label: t("serviceDetails.mobileDevelopment.highlights.1.label", "Native Interactions"),
    },
    {
      value: "Offline-Ready",
      label: t("serviceDetails.mobileDevelopment.highlights.2.label", "Local Data Caching"),
    },
    {
      value: "Store-Ready",
      label: t("serviceDetails.mobileDevelopment.highlights.3.label", "App Store & Play Store"),
    },
  ];

  const overviewParagraphs = [
    t(
      "serviceDetails.mobileDevelopment.overviewParagraphs.0",
      "Modern consumers expect immediate, touch-optimized experiences wherever they are. A dedicated mobile application offers unprecedented direct engagement, instantaneous push communication, and deep hardware access that mobile websites simply cannot duplicate."
    ),
    t(
      "serviceDetails.mobileDevelopment.overviewParagraphs.1",
      "At Legacy IT, we build fluid native and cross-platform mobile applications that prioritize speed, visual elegance, and rock-solid architectural stability. Whether you are launching an early-stage MVP or an enterprise consumer application, we handle the entire product lifecycle from user flows to store publication."
    ),
    t(
      "serviceDetails.mobileDevelopment.overviewParagraphs.2",
      "We implement secure cloud authentication, low-latency API connections, intuitive gesture navigation, and robust offline architectures so your app performs effortlessly under any network condition."
    ),
  ];

  const deliverables = [
    {
      icon: LuSmartphone,
      title: t(
        "serviceDetails.mobileDevelopment.deliverables.0.title",
        "Android Application Development"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.deliverables.0.description",
        "High-performance Android applications built to look and perform brilliantly across thousands of device types, screen resolutions, and OS versions."
      ),
      features: [
        t(
          "serviceDetails.mobileDevelopment.deliverables.0.features.0",
          "Modern Kotlin & Android SDK Standards"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.0.features.1",
          "Material 3 UI Architecture"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.0.features.2",
          "Google Play Store Compliance"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.0.features.3",
          "Dynamic Screen Adaptation"
        ),
      ],
    },
    {
      icon: LuSmartphone,
      title: t(
        "serviceDetails.mobileDevelopment.deliverables.1.title",
        "iOS Application Development"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.deliverables.1.description",
        "Refined, premium iOS applications adhering strictly to Apple's Human Interface Guidelines for iPhones and iPad devices."
      ),
      features: [
        t(
          "serviceDetails.mobileDevelopment.deliverables.1.features.0",
          "Swift & SwiftUI Architecture"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.1.features.1",
          "Apple Pay & Secure Biometrics"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.1.features.2",
          "Strict App Store Review Preparedness"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.1.features.3",
          "Smooth iOS Gesture Support"
        ),
      ],
    },
    {
      icon: LuLayers,
      title: t(
        "serviceDetails.mobileDevelopment.deliverables.2.title",
        "Cross-Platform Applications"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.deliverables.2.description",
        "Launch on both iOS and Android simultaneously from a single, unified codebase using React Native, cutting development time and costs in half."
      ),
      features: [
        t(
          "serviceDetails.mobileDevelopment.deliverables.2.features.0",
          "Shared Codebase Efficiency"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.2.features.1",
          "Fluid Native UI Rendering"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.2.features.2",
          "Simultaneous Feature Releases"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.2.features.3",
          "Simplified Ongoing Maintenance"
        ),
      ],
    },
    {
      icon: LuLayoutGrid,
      title: t(
        "serviceDetails.mobileDevelopment.deliverables.3.title",
        "Mobile UI/UX Design"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.deliverables.3.description",
        "Human-centered mobile design crafted around natural thumb zones, tactile micro-interactions, and frictionless onboarding flows."
      ),
      features: [
        t(
          "serviceDetails.mobileDevelopment.deliverables.3.features.0",
          "Thumb-Friendly Navigation Hierarchies"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.3.features.1",
          "Interactive Prototypes in Figma"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.3.features.2",
          "Accessibility (WCAG) Compliance"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.3.features.3",
          "Dark Mode & Light Mode Theming"
        ),
      ],
    },
    {
      icon: LuCpu,
      title: t(
        "serviceDetails.mobileDevelopment.deliverables.4.title",
        "API Integration"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.deliverables.4.description",
        "Seamless connection to your existing backend servers, third-party payment gateways, authentication providers, and CRM databases."
      ),
      features: [
        t(
          "serviceDetails.mobileDevelopment.deliverables.4.features.0",
          "REST & GraphQL Endpoint Integration"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.4.features.1",
          "Real-time WebSockets & Push Messaging"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.4.features.2",
          "Secure OAuth 2.0 & Token Refreshing"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.4.features.3",
          "Optimized Payload Serialization"
        ),
      ],
    },
    {
      icon: LuRefreshCw,
      title: t(
        "serviceDetails.mobileDevelopment.deliverables.5.title",
        "Application Maintenance"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.deliverables.5.description",
        "Continuous monitoring, version compatibility updates for new iOS and Android releases, crash analytics, and feature expansions."
      ),
      features: [
        t(
          "serviceDetails.mobileDevelopment.deliverables.5.features.0",
          "Annual OS Version Upgrades"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.5.features.1",
          "Real-Time Crash & Bug Analytics"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.5.features.0",
          "Security Patches & API Updates"
        ),
        t(
          "serviceDetails.mobileDevelopment.deliverables.5.features.3",
          "Performance Tuning & Optimization"
        ),
      ],
    },
  ];

  const whyReasons = [
    {
      number: "01",
      icon: LuZap,
      title: t(
        "serviceDetails.mobileDevelopment.whyReasons.0.title",
        "Fluidity & Responsiveness"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.whyReasons.0.description",
        "We prioritize smooth navigation, responsive touch interactions, and optimized memory consumption."
      ),
    },
    {
      number: "02",
      icon: LuLayers,
      title: t(
        "serviceDetails.mobileDevelopment.whyReasons.1.title",
        "Cross-Platform Cost Efficiency"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.whyReasons.1.description",
        "Our cross-platform expertise allows you to release across both iOS and Android simultaneously without doubling your budget."
      ),
    },
    {
      number: "03",
      icon: LuShieldCheck,
      title: t(
        "serviceDetails.mobileDevelopment.whyReasons.2.title",
        "Offline-First Reliability"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.whyReasons.2.description",
        "Apps shouldn't break when a user enters an elevator or tunnel. We engineer intelligent local caching for uninterrupted use."
      ),
    },
    {
      number: "04",
      icon: LuRocket,
      title: t(
        "serviceDetails.mobileDevelopment.whyReasons.3.title",
        "Full App Store Management"
      ),
      description: t(
        "serviceDetails.mobileDevelopment.whyReasons.3.description",
        "We guide your app through the entire submission process, resolving Apple and Google guideline requirements until approved."
      ),
    },
  ];

  const processSteps = [
    {
      number: "01",
      name: t("serviceDetails.mobileDevelopment.processSteps.0.name", "Discover"),
      description: t(
        "serviceDetails.mobileDevelopment.processSteps.0.description",
        "We establish user personas, feature priorities, platform requirements, and data flow architecture."
      ),
      icon: LuSearch,
    },
    {
      number: "02",
      name: t("serviceDetails.mobileDevelopment.processSteps.1.name", "Plan & Create"),
      description: t(
        "serviceDetails.mobileDevelopment.processSteps.1.description",
        "We construct interactive wireframe prototypes, design components, and review screens together before coding."
      ),
      icon: LuPenTool,
    },
    {
      number: "03",
      name: t("serviceDetails.mobileDevelopment.processSteps.2.name", "Execute"),
      description: t(
        "serviceDetails.mobileDevelopment.processSteps.2.description",
        "We build native or cross-platform code, integrate backend endpoints, and run automated device test suites."
      ),
      icon: LuCode,
    },
    {
      number: "04",
      name: t("serviceDetails.mobileDevelopment.processSteps.3.name", "Deliver"),
      description: t(
        "serviceDetails.mobileDevelopment.processSteps.3.description",
        "We coordinate beta testing via TestFlight and Google Play Internal Testing, then launch publicly to the stores."
      ),
      icon: LuRocket,
    },
  ];

  const faqs = [
    {
      question: t(
        "serviceDetails.mobileDevelopment.faqs.0.question",
        "Should I build a native app or a cross-platform app?"
      ),
      answer: t(
        "serviceDetails.mobileDevelopment.faqs.0.answer",
        "For most modern businesses, cross-platform frameworks (like React Native) offer 95%+ identical performance to native code while saving 40-50% in development and maintenance costs. If your app requires extremely deep hardware manipulation or specialized 3D graphics, native Swift/Kotlin may be recommended."
      ),
    },
    {
      question: t(
        "serviceDetails.mobileDevelopment.faqs.1.question",
        "Do you handle App Store and Google Play submissions?"
      ),
      answer: t(
        "serviceDetails.mobileDevelopment.faqs.1.answer",
        "Yes, entirely. We prepare the developer accounts, build signed production binaries, write store listing assets, and handle the formal review and approval process with both Apple and Google."
      ),
    },
    {
      question: t(
        "serviceDetails.mobileDevelopment.faqs.2.question",
        "Can my app function when the user has no internet?"
      ),
      answer: t(
        "serviceDetails.mobileDevelopment.faqs.2.answer",
        "Yes. We design with an offline-first philosophy, utilizing local SQLite or Realm databases to store cached data and queue actions until connectivity is restored."
      ),
    },
    {
      question: t(
        "serviceDetails.mobileDevelopment.faqs.3.question",
        "How long does a mobile app project usually take?"
      ),
      answer: t(
        "serviceDetails.mobileDevelopment.faqs.3.answer",
        "A standard MVP application typically takes 4-8 weeks from discovery to beta testing. More complex applications with extensive backend integrations or multi-role permissions may take 8-14 weeks."
      ),
    },
    {
      question: t(
        "serviceDetails.mobileDevelopment.faqs.4.question",
        "What happens when Apple or Google release new OS versions?"
      ),
      answer: t(
        "serviceDetails.mobileDevelopment.faqs.4.answer",
        "We provide ongoing maintenance contracts to ensure your application remains fully compatible with new iOS and Android releases, updated screen aspect ratios, and revised privacy guidelines."
      ),
    },
  ];

  return (
    <ServiceDetailLayout
      seoTitle={t(
        "serviceDetails.mobileDevelopment.seoTitle",
        "Mobile Application Development"
      )}
      seoDescription={t(
        "serviceDetails.mobileDevelopment.seoDescription",
        "We develop modern mobile applications that help businesses connect with customers through intuitive, reliable, and engaging digital experiences."
      )}
      eyebrow={t(
        "serviceDetails.mobileDevelopment.eyebrow",
        "MOBILE ENGINEERING & ECOSYSTEMS"
      )}
      headlineStart={t(
        "serviceDetails.mobileDevelopment.headlineStart",
        "Powerful Mobile Experiences,"
      )}
      headlineHighlight={t(
        "serviceDetails.mobileDevelopment.headlineHighlight",
        "Built for Your Users."
      )}
      description={t(
        "serviceDetails.mobileDevelopment.description",
        "We develop modern mobile applications that help businesses connect with customers through intuitive, reliable, and engaging digital experiences."
      )}
      heroHighlights={heroHighlights}
      overviewHeading={t(
        "serviceDetails.mobileDevelopment.overviewHeading",
        "Mobile Apps That Keep Your Brand in Every Customer's Pocket."
      )}
      overviewParagraphs={overviewParagraphs}
      overviewVisual={mobileVisual}
      deliverablesHeading={t(
        "serviceDetails.mobileDevelopment.deliverablesHeading",
        "What We Offer in Mobile Application Development"
      )}
      deliverables={deliverables}
      whyHeading={t(
        "serviceDetails.mobileDevelopment.whyHeading",
        "Why Build Your Mobile App With Legacy IT?"
      )}
      whyReasons={whyReasons}
      processSteps={processSteps}
      faqs={faqs}
      ctaHeading={t(
        "serviceDetails.mobileDevelopment.ctaHeading",
        "Ready to Bring Your Mobile Application to Life?"
      )}
      ctaDescription={t(
        "serviceDetails.mobileDevelopment.ctaDescription",
        "Let's build an intuitive, reliable, and engaging mobile experience that your users will love opening every single day."
      )}
    />
  );
}
