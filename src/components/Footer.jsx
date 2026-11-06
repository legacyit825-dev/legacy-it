import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import logo from "../assets/logo-cropped.png";

const companyLinks = [
  { key: "home", label: "Home", path: "/" },
  { key: "about", label: "About Us", path: "/about" },
  { key: "services", label: "Our Services", path: "/services" },
  { key: "contact", label: "Contact Us", path: "/contact" },
  { key: "privacyPolicy", label: "Privacy Policy", path: "/privacy-policy" },
  { key: "termsConditions", label: "Terms & Conditions", path: "/terms-and-conditions" },
];

const serviceLinks = [
  { key: "webDevelopment", label: "Website Design & Development", path: "/services/web-development" },
  { key: "mobileDevelopment", label: "Mobile Application Development", path: "/services/mobile-app-development" },
  { key: "graphicDesign", label: "Graphic Designing", path: "/services/graphic-designing" },
  { key: "videoEditing", label: "Video Editing", path: "/services/video-editing" },
  { key: "digitalMarketing", label: "Digital Marketing & SEO", path: "/services/digital-marketing" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61584054964744",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/legacyit825/",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    href: "https://x.com/legacy91847",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/legacy-it/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/legacyit825-dev",
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#070913] text-slate-400 border-t border-white/[0.08] relative overflow-hidden">
      {/* Top subtle illumination line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 sm:pb-16 border-b border-white/[0.08]">
          
          {/* =========================================================================
              COLUMN 1: Brand Section (Logo, Name, Description, Tagline, Socials)
              ========================================================================= */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="w-fit h-auto block group p-0 m-0 leading-none">
              <img
                src={logo}
                alt="Legacy IT"
                className="w-[150px] md:w-[170px] h-auto object-contain block group-hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mt-5 sm:mt-6 max-w-sm">
              {t(
                "footer.brandDescription",
                "We build digital experiences and innovative technology solutions that help businesses grow, connect, and succeed in the digital world."
              )}
            </p>

            {/* Subtle Tagline */}
            <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
              <span>
                {t("footer.tagline", "Building Your Digital Future.")}
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-950/30 text-slate-400 hover:text-cyan-300 flex items-center justify-center transition-all duration-200 text-sm hover:scale-105"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =========================================================================
              COLUMN 2: Company Navigation
              ========================================================================= */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-5">
              {t("footer.companyTitle", "COMPANY")}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 block"
                  >
                    {t(`footer.companyLinks.${item.key}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================================
              COLUMN 3: Our Services
              ========================================================================= */}
          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-5">
              {t("footer.servicesTitle", "OUR SERVICES")}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 block"
                  >
                    {t(`footer.serviceLinks.${item.key}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================================
              COLUMN 4: Contact Information (Get in Touch)
              ========================================================================= */}
          <div className="lg:col-span-3 md:col-span-2 lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-5">
              {t("footer.contactTitle", "GET IN TOUCH")}
            </h4>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:legacyit825@gmail.com"
                className="flex items-start gap-3 group text-sm text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/30 text-cyan-400 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                  <LuMail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    {t("footer.contactLabels.email", "Email")}
                  </span>
                  <span className="group-hover:text-cyan-400 transition-colors break-all">
                    legacyit825@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/9779702016450"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group text-sm text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-950/30 text-cyan-400 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                  <LuPhone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    {t("footer.contactLabels.phone", "Phone / WhatsApp")}
                  </span>
                  <span className="group-hover:text-cyan-400 transition-colors">
                    +977 9702016450
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <LuMapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    {t("footer.contactLabels.location", "Location")}
                  </span>
                  <span className="text-slate-300 leading-snug">
                    Khumaltar-15, Lalitpur, Kantinagar Tole Marg
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM SECTION: Copyright & Legal Links
            ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            {t("footer.copyright", "© 2026 Legacy IT. All Rights Reserved.")}
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-cyan-400 transition-colors"
            >
              {t("footer.privacyPolicy", "Privacy Policy")}
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <Link
              to="/terms-and-conditions"
              className="hover:text-cyan-400 transition-colors"
            >
              {t("footer.termsConditions", "Terms & Conditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
