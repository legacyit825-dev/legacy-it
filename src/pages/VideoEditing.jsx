import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceDetailLayout from "../components/ServiceDetailLayout";
import {
  LuClapperboard,
  LuFilm,
  LuPlay,
  LuScissors,
  LuSparkles,
  LuSlidersHorizontal,
  LuHeadphones,
  LuSearch,
  LuPenTool,
  LuCode,
  LuRocket,
} from "react-icons/lu";

export default function VideoEditing() {
  const { t } = useTranslation();
  const [activeTrack, setActiveTrack] = useState("timeline"); // 'timeline' | 'grading' | 'format'

  const videoVisual = (
    <div className="relative rounded-2xl border border-white/10 bg-[#0c1020]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Track Selector */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-300">
            Professional NLE Timeline & 4K Monitor
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => setActiveTrack("timeline")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeTrack === "timeline"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveTrack("grading")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeTrack === "grading"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Color Grading
          </button>
          <button
            onClick={() => setActiveTrack("format")}
            className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
              activeTrack === "format"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Multi-Aspect
          </button>
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="space-y-4 min-h-[340px] flex flex-col justify-center">
        {/* 4K Preview Window */}
        <div className="relative rounded-xl bg-gradient-to-br from-[#12182e] to-[#070b16] border border-white/10 p-4 overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <LuFilm className="w-3.5 h-3.5" />
              SEQUENCE 01 — 4K UHD (3840x2160)
            </span>
            <span className="text-emerald-400">Master Sequence // 4K Timeline</span>
          </div>

          <div className="h-32 sm:h-36 rounded-lg bg-[#060812] border border-white/[0.06] flex items-center justify-center relative overflow-hidden group">
            {/* Ambient preview lighting */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
            
            <div className="relative z-10 text-center px-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                CINEMATIC BRAND STORYTELLING
              </span>
              <p className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                Turn Ideas Into Videos Worth Watching
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-[10px] font-bold mt-2">
                <LuPlay className="w-2.5 h-2.5 fill-current" /> 4K ProRes Master
              </span>
            </div>
          </div>
        </div>

        {/* NLE Timeline Simulation */}
        {activeTrack === "timeline" && (
          <div className="p-3.5 rounded-xl bg-[#060812] border border-white/[0.08] space-y-2">
            {/* Video Track V2: Motion Graphics & Titles */}
            <div className="flex items-center gap-2 text-xs">
              <span className="w-8 font-mono text-[10px] text-slate-500">V2</span>
              <div className="flex-1 h-6 rounded bg-pink-950/40 border border-pink-500/30 flex items-center px-2 text-[10px] font-mono text-pink-300">
                [Motion Title & Lower Thirds]
              </div>
            </div>

            {/* Video Track V1: Main A-Roll / B-Roll */}
            <div className="flex items-center gap-2 text-xs">
              <span className="w-8 font-mono text-[10px] text-slate-500">V1</span>
              <div className="flex-1 h-6 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center px-2 text-[10px] font-mono text-cyan-300">
                [4K Master Cut] • [B-Roll Overlay] • [Smooth Transition]
              </div>
            </div>

            {/* Audio Track A1: Dialogue & Vocals */}
            <div className="flex items-center gap-2 text-xs">
              <span className="w-8 font-mono text-[10px] text-slate-500">A1</span>
              <div className="flex-1 h-6 rounded bg-emerald-950/40 border border-emerald-500/30 flex items-center px-2 text-[10px] font-mono text-emerald-300">
                [Studio Voiceover - Denoised & Level Balanced]
              </div>
            </div>

            {/* Audio Track A2: Sound Effects & Music */}
            <div className="flex items-center gap-2 text-xs">
              <span className="w-8 font-mono text-[10px] text-slate-500">A2</span>
              <div className="flex-1 h-6 rounded bg-blue-950/40 border border-blue-500/30 flex items-center px-2 text-[10px] font-mono text-blue-300">
                [Licensed Soundtrack + Cinematic Whoosh/Impact Foley]
              </div>
            </div>
          </div>
        )}

        {activeTrack === "grading" && (
          <div className="p-4 rounded-xl bg-[#060812] border border-white/[0.08] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-bold">Color Science & LUT Matrix</span>
              <span className="text-cyan-400 font-mono text-[10px]">Rec.709 10-Bit</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <span className="block text-xs font-bold text-cyan-300">Lift (Shadows)</span>
                <span className="text-[10px] text-slate-400">Cool Teal Matrix</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <span className="block text-xs font-bold text-amber-300">Gamma (Midtones)</span>
                <span className="text-[10px] text-slate-400">Warm Skin Tones</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <span className="block text-xs font-bold text-sky-300">Gain (Highlights)</span>
                <span className="text-[10px] text-slate-400">Controlled Rolloff</span>
              </div>
            </div>
            <p className="text-[11px] text-center text-slate-400">
              Professional color matching between multiple cameras and lighting setups.
            </p>
          </div>
        )}

        {activeTrack === "format" && (
          <div className="p-4 rounded-xl bg-[#060812] border border-white/[0.08] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-bold">Multi-Platform Aspect Ratios</span>
              <span className="text-emerald-400 font-mono text-[10px]">Batch Export</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <span className="block font-bold text-white text-sm">16:9</span>
                <span className="text-[10px] text-slate-400">YouTube & Web</span>
              </div>
              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                <span className="block font-bold text-cyan-300 text-sm">9:16</span>
                <span className="text-[10px] text-slate-300">Reels, Shorts, TikTok</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <span className="block font-bold text-white text-sm">1:1 / 4:5</span>
                <span className="text-[10px] text-slate-400">Instagram Feed</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const heroHighlights = [
    {
      value: "4K UHD",
      label: t("serviceDetails.videoEditing.highlights.0.label", "Master Resolution"),
    },
    {
      value: "Engaging",
      label: t("serviceDetails.videoEditing.highlights.1.label", "Audience Retention"),
    },
    {
      value: "Color-Grade",
      label: t("serviceDetails.videoEditing.highlights.2.label", "Visual Tone & LUTs"),
    },
    {
      value: "Prompt",
      label: t("serviceDetails.videoEditing.highlights.3.label", "Project Turnaround"),
    },
  ];

  const overviewParagraphs = [
    t(
      "serviceDetails.videoEditing.overviewParagraphs.0",
      "Video is undisputed as the highest-converting medium across digital marketing. However, with attention spans measured in seconds, unedited or sluggish footage loses viewers almost instantly. To win, your videos must hook audiences immediately, maintain crisp rhythmic pacing, and deliver a crystal-clear message."
    ),
    t(
      "serviceDetails.videoEditing.overviewParagraphs.1",
      "At Legacy IT, we transform raw camera footage, screen captures, and creative ideas into polished, cinematic video assets. Whether you need viral vertical Reels and TikToks, detailed YouTube deep-dives, or high-caliber corporate presentations, we handle all facets of post-production."
    ),
    t(
      "serviceDetails.videoEditing.overviewParagraphs.2",
      "From professional color grading and custom kinetic typography to multi-track sound design and multi-platform aspect ratio exports, we ensure your videos command attention across every screen."
    ),
  ];

  const deliverables = [
    {
      icon: LuClapperboard,
      title: t(
        "serviceDetails.videoEditing.deliverables.0.title",
        "Promotional & Corporate Videos"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.0.description",
        "High-impact commercial videos that showcase your company's mission, establish authority, and communicate your unique value proposition."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.0.features.0",
          "Executive Interview Polishing"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.0.features.1",
          "B-Roll Integration & Pacing"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.0.features.2",
          "Corporate Brand Style Conformance"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.0.features.3",
          "High-Bitrate 4K Master Deliveries"
        ),
      ],
    },
    {
      icon: LuFilm,
      title: t(
        "serviceDetails.videoEditing.deliverables.1.title",
        "Social Media Reels & Shorts"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.1.description",
        "Fast-paced vertical videos (9:16) optimized for Instagram Reels, YouTube Shorts, and TikTok with punchy captions and dynamic hooks."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.1.features.0",
          "First 3-Second Retention Hooks"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.1.features.1",
          "Animated Stylized Captions"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.1.features.2",
          "Trending Audio Synchronization"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.1.features.3",
          "Rapid Batch Production"
        ),
      ],
    },
    {
      icon: LuPlay,
      title: t(
        "serviceDetails.videoEditing.deliverables.2.title",
        "YouTube Video Editing"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.2.description",
        "Long-form content editing engineered to maximize Average Percentage Viewed (APV) through rhythm cuts, zooms, sound cues, and visual variety."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.2.features.0",
          "Seamless Chapter Sequencing"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.2.features.1",
          "Custom YouTube End Screens"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.2.features.2",
          "Audio Normalization & Compression"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.2.features.3",
          "Visual Asset B-Roll Curation"
        ),
      ],
    },
    {
      icon: LuFilm,
      title: t(
        "serviceDetails.videoEditing.deliverables.3.title",
        "Business Introduction Videos"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.3.description",
        "Engaging explainer videos that introduce your company, leadership team, and digital services to prospective clients and partners."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.3.features.0",
          "Story-Driven Structural Scripting"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.3.features.1",
          "Studio-Grade Voiceover Mastering"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.3.features.2",
          "Animated Service Walkthroughs"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.3.features.3",
          "Brand Value Highlighting"
        ),
      ],
    },
    {
      icon: LuScissors,
      title: t(
        "serviceDetails.videoEditing.deliverables.4.title",
        "Product Promotional Videos"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.4.description",
        "Captivating product showcases highlighting key features, UI demonstrations, packaging reveals, and customer benefits."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.4.features.0",
          "Dynamic Feature Callout Graphics"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.4.features.1",
          "Smooth Macro Zooms & Pans"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.4.features.2",
          "Kinetic Screen Capture Overlays"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.4.features.3",
          "High-Energy Musical Beats"
        ),
      ],
    },
    {
      icon: LuSparkles,
      title: t(
        "serviceDetails.videoEditing.deliverables.5.title",
        "Motion Graphics & Text Animation"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.5.description",
        "Custom 2D motion graphics, kinetic typography, animated logos, and lower-third banners that make complex concepts effortless to grasp."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.5.features.0",
          "Custom 2D Vector Animations"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.5.features.1",
          "Kinetic Typography Titles"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.5.features.2",
          "Animated Data & Statistics Graphs"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.5.features.3",
          "Branded Transition Cards"
        ),
      ],
    },
    {
      icon: LuScissors,
      title: t(
        "serviceDetails.videoEditing.deliverables.6.title",
        "Video Transitions & Effects"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.6.description",
        "Modern, seamless visual transitions—from seamless whip pans to subtle digital zooms—that maintain momentum between cuts."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.6.features.0",
          "Whip, Zoom & Match Cuts"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.6.features.1",
          "Subtle Cinematic Glitches"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.6.features.2",
          "Speed Ramping & Slow-Motion"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.6.features.3",
          "Seamless Scene Continuity"
        ),
      ],
    },
    {
      icon: LuSlidersHorizontal,
      title: t(
        "serviceDetails.videoEditing.deliverables.7.title",
        "Color Correction & Color Grading"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.7.description",
        "Professional tone balancing, skin tone preservation, and cinematic LUT application that elevates raw footage into a cohesive visual look."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.7.features.0",
          "Multi-Camera Color Matching"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.7.features.1",
          "Skin-Tone Isolation & Correction"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.7.features.2",
          "Cinematic Rec.709 & HDR Grades"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.7.features.3",
          "Dynamic Range Recovery"
        ),
      ],
    },
    {
      icon: LuHeadphones,
      title: t(
        "serviceDetails.videoEditing.deliverables.8.title",
        "Audio Enhancement & Synchronization"
      ),
      description: t(
        "serviceDetails.videoEditing.deliverables.8.description",
        "Studio-grade audio post-production including background noise removal, multi-band compression, licensed music curation, and sound effects."
      ),
      features: [
        t(
          "serviceDetails.videoEditing.deliverables.8.features.0",
          "Noise Reduction & De-Essing"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.8.features.1",
          "Broadcast Leveling (-14 LUFS)"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.8.features.2",
          "Royalty-Free Commercial Tracks"
        ),
        t(
          "serviceDetails.videoEditing.deliverables.8.features.3",
          "Impactful Sound Design (Foley)"
        ),
      ],
    },
  ];

  const whyReasons = [
    {
      number: "01",
      icon: LuClapperboard,
      title: t(
        "serviceDetails.videoEditing.whyReasons.0.title",
        "Audience Retention Mastery"
      ),
      description: t(
        "serviceDetails.videoEditing.whyReasons.0.description",
        "We cut videos with viewer psychology in mind, utilizing micro-transitions and sonic cues to eliminate drop-off points."
      ),
    },
    {
      number: "02",
      icon: LuSlidersHorizontal,
      title: t(
        "serviceDetails.videoEditing.whyReasons.1.title",
        "Cinematic Color & Studio Audio"
      ),
      description: t(
        "serviceDetails.videoEditing.whyReasons.1.description",
        "Great audio is half the video experience. We balance dialogue, ambient Foley, and licensed music to broadcast standards."
      ),
    },
    {
      number: "03",
      icon: LuSparkles,
      title: t(
        "serviceDetails.videoEditing.whyReasons.2.title",
        "Custom Motion Design"
      ),
      description: t(
        "serviceDetails.videoEditing.whyReasons.2.description",
        "We animate bespoke lower-thirds, graphic callouts, and typography that match your exact brand guidelines."
      ),
    },
    {
      number: "04",
      icon: LuFilm,
      title: t(
        "serviceDetails.videoEditing.whyReasons.3.title",
        "Multi-Platform Export Bundles"
      ),
      description: t(
        "serviceDetails.videoEditing.whyReasons.3.description",
        "Receive full 16:9 widescreen cuts for desktop/YouTube along with 9:16 vertical exports formatted for mobile feeds."
      ),
    },
  ];

  const processSteps = [
    {
      number: "01",
      name: t("serviceDetails.videoEditing.processSteps.0.name", "Discover"),
      description: t(
        "serviceDetails.videoEditing.processSteps.0.description",
        "We review your raw footage, clarify narrative goals, establish editing pacing, and ingest all media assets."
      ),
      icon: LuSearch,
    },
    {
      number: "02",
      name: t("serviceDetails.videoEditing.processSteps.1.name", "Plan & Create"),
      description: t(
        "serviceDetails.videoEditing.processSteps.1.description",
        "We assemble the rough assembly cut, arrange storytelling sequences, and select the ideal soundtrack."
      ),
      icon: LuPenTool,
    },
    {
      number: "03",
      name: t("serviceDetails.videoEditing.processSteps.2.name", "Execute"),
      description: t(
        "serviceDetails.videoEditing.processSteps.2.description",
        "We execute tight cuts, apply motion graphics, balance color grades, and master audio tracks with sound effects."
      ),
      icon: LuCode,
    },
    {
      number: "04",
      name: t("serviceDetails.videoEditing.processSteps.3.name", "Deliver"),
      description: t(
        "serviceDetails.videoEditing.processSteps.3.description",
        "We share an interactive review link for any timestamped notes, then render final broadcast-quality exports."
      ),
      icon: LuRocket,
    },
  ];

  const faqs = [
    {
      question: t(
        "serviceDetails.videoEditing.faqs.0.question",
        "How do I send my raw video footage to your team?"
      ),
      answer: t(
        "serviceDetails.videoEditing.faqs.0.answer",
        "You can upload your raw camera files, screen recordings, and audio tracks to Google Drive, Dropbox, OneDrive, or WeTransfer. We work with all common video formats (MP4, MOV, ProRes, B-RAW, Sony XAVC, etc.)."
      ),
    },
    {
      question: t(
        "serviceDetails.videoEditing.faqs.1.question",
        "Do you supply licensed music and sound effects?"
      ),
      answer: t(
        "serviceDetails.videoEditing.faqs.1.answer",
        "Yes. We include fully licensed commercial music tracks and professional sound effects with every project, ensuring your videos can be monetized on YouTube and promoted across social media without copyright claims."
      ),
    },
    {
      question: t(
        "serviceDetails.videoEditing.faqs.2.question",
        "Can you provide both vertical (Reels) and widescreen (YouTube) formats?"
      ),
      answer: t(
        "serviceDetails.videoEditing.faqs.2.answer",
        "Yes. We can produce multi-aspect exports: 16:9 for YouTube and websites, 9:16 for Instagram Reels, YouTube Shorts, and TikTok, and 1:1 or 4:5 for feed advertising."
      ),
    },
    {
      question: t(
        "serviceDetails.videoEditing.faqs.3.question",
        "What is your typical turnaround time for video edits?"
      ),
      answer: t(
        "serviceDetails.videoEditing.faqs.3.answer",
        "Social media Reels and Shorts are typically delivered within 24 to 48 hours. Long-form YouTube videos and corporate promotional edits usually take 3 to 5 business days for initial draft delivery."
      ),
    },
    {
      question: t(
        "serviceDetails.videoEditing.faqs.4.question",
        "How do revisions work for video projects?"
      ),
      answer: t(
        "serviceDetails.videoEditing.faqs.4.answer",
        "We provide interactive review links that allow you to click on exact timestamps to type specific comments or requested tweaks. We make the adjustments quickly and export your final approved master files."
      ),
    },
  ];

  return (
    <ServiceDetailLayout
      seoTitle={t("serviceDetails.videoEditing.seoTitle", "Video Editing")}
      seoDescription={t(
        "serviceDetails.videoEditing.seoDescription",
        "We create engaging and professionally edited videos that tell your story, communicate your message, and help your brand connect with its audience."
      )}
      eyebrow={t("serviceDetails.videoEditing.eyebrow", "POST-PRODUCTION & MOTION")}
      headlineStart={t(
        "serviceDetails.videoEditing.headlineStart",
        "Turn Your Ideas Into"
      )}
      headlineHighlight={t(
        "serviceDetails.videoEditing.headlineHighlight",
        "Videos Worth Watching."
      )}
      description={t(
        "serviceDetails.videoEditing.description",
        "We create engaging and professionally edited videos that tell your story, communicate your message, and help your brand connect with its audience."
      )}
      heroHighlights={heroHighlights}
      overviewHeading={t(
        "serviceDetails.videoEditing.overviewHeading",
        "Videos Engineered to Stop the Scroll and Maximize Watch Time."
      )}
      overviewParagraphs={overviewParagraphs}
      overviewVisual={videoVisual}
      deliverablesHeading={t(
        "serviceDetails.videoEditing.deliverablesHeading",
        "What We Offer in Video Editing"
      )}
      deliverables={deliverables}
      whyHeading={t(
        "serviceDetails.videoEditing.whyHeading",
        "Why Choose Legacy IT for Video Editing?"
      )}
      whyReasons={whyReasons}
      processSteps={processSteps}
      faqs={faqs}
      ctaHeading={t(
        "serviceDetails.videoEditing.ctaHeading",
        "Ready to Create Videos That Captivate Your Audience?"
      )}
      ctaDescription={t(
        "serviceDetails.videoEditing.ctaDescription",
        "Let's turn your raw footage and creative ideas into dynamic, high-converting video experiences."
      )}
    />
  );
}
