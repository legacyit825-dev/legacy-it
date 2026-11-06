import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  LuGlobe,
  LuSmartphone,
  LuPalette,
  LuClapperboard,
  LuTrendingUp,
  LuArrowRight,
  LuCheck,
} from "react-icons/lu";
import useScrollAnimation from "../hooks/useScrollAnimation";

const services = [
  {
    id: "web-development",
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

export default function ServiceSection() {
  const { t } = useTranslation();
  const headerAnim = useScrollAnimation(0.1);
  const gridAnim = useScrollAnimation(0.05);
  const ctaAnim = useScrollAnimation(0.1);

  return (
    <section
      id="services"
      className="relative w-full bg-[#070913] text-white py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden"
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
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      {/* Top subtle border illumination */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient Lighting 1: Cyan / Electric Blue (Top Right) */}
      <div
        className="absolute -top-24 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Ambient Lighting 2: Electric Violet (Bottom Left) */}
      <div
        className="absolute bottom-20 -left-20 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div
          ref={headerAnim.ref}
          className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 anim-hidden anim-fade-up ${
            headerAnim.inView ? "anim-visible" : ""
          }`}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              {t("whatWeDo.eyebrow", "OUR EXPERTISE")}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.14] mb-5">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300/90 bg-clip-text text-transparent">
              {t(
                "whatWeDo.heading",
                "Everything You Need to Build Your Digital Presence."
              )}
            </span>
          </h2>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
            {t(
              "whatWeDo.description",
              "From your first website to complete digital solutions, we bring technology, creativity, and strategy together to help your business move forward."
            )}
          </p>
        </div>

        {/* =========================================================================
            SERVICES GRID (5 Dedicated Services)
            ========================================================================= */}
        <div
          ref={gridAnim.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 anim-hidden anim-fade-up ${
            gridAnim.inView ? "anim-visible" : ""
          }`}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c1020]/70 hover:bg-[#0f152a]/90 backdrop-blur-md p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(6,182,212,0.12)] overflow-hidden"
              >
                {/* Subtle Top-Right Ambient Glow on Card Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.05] border border-white/10 group-hover:border-cyan-400/40 group-hover:bg-cyan-950/40 text-cyan-400 group-hover:text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 mb-6 group-hover:scale-105">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200 mb-3">
                    {t(`whatWeDo.services.${service.id}.title`, service.title)}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed mb-6">
                    {t(
                      `whatWeDo.services.${service.id}.description`,
                      service.description
                    )}
                  </p>

                  {/* "What we offer" List */}
                  <div className="mb-8">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400/80 mb-3.5">
                      {t("whatWeDo.whatWeOffer", "WHAT WE OFFER")}
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
                              `whatWeDo.services.${service.id}.offerings.${idx}`,
                              item
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-5 border-t border-white/[0.06] mt-auto">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors duration-200"
                  >
                    <span>{t("whatWeDo.learnMore", "Learn More")}</span>
                    <LuArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM CALLOUT
            ========================================================================= */}
        <div
          ref={ctaAnim.ref}
          className={`mt-16 sm:mt-20 text-center anim-hidden anim-fade-up ${
            ctaAnim.inView ? "anim-visible" : ""
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0c1020]/60 backdrop-blur-md">
            <span className="text-sm text-slate-300 font-medium">
              {t(
                "whatWeDo.ctaPrompt",
                "Need a tailored package combining multiple services?"
              )}
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 cursor-pointer"
            >
              <span>{t("whatWeDo.ctaButton", "Discuss Your Project")}</span>
              <LuArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
