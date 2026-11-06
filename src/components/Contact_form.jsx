import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  LuMail,
  LuPhoneCall,
  LuMapPin,
  LuArrowRight,
  LuCircleCheck,
  LuCircleAlert,
  LuLoader,
  LuSend,
  LuSparkles,
} from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6";

const subjectOptions = [
  { key: "webDev", label: "Website Design & Development" },
  { key: "mobile", label: "Mobile Application Development" },
  { key: "graphic", label: "Graphic Designing" },
  { key: "video", label: "Video Editing" },
  { key: "marketing", label: "Digital Marketing & SEO" },
  { key: "general", label: "General Inquiry & Consultation" },
];

const socialAccounts = [
  {
    name: "Facebook",
    handle: "Legacy IT",
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61584054964744",
    hoverColor: "hover:border-blue-500/40 hover:bg-blue-950/20",
    iconColor: "text-blue-400",
  },
  {
    name: "Instagram",
    handle: "@legacyit825",
    icon: FaInstagram,
    href: "https://www.instagram.com/legacyit825/",
    hoverColor: "hover:border-pink-500/40 hover:bg-pink-950/20",
    iconColor: "text-pink-400",
  },
  {
    name: "X (Twitter)",
    handle: "@legacy91847",
    icon: FaXTwitter,
    href: "https://x.com/legacy91847",
    hoverColor: "hover:border-slate-400/40 hover:bg-slate-800/30",
    iconColor: "text-slate-300",
  },
  {
    name: "LinkedIn",
    handle: "Legacy IT",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/legacy-it/",
    hoverColor: "hover:border-sky-500/40 hover:bg-sky-950/20",
    iconColor: "text-sky-400",
  },
  {
    name: "GitHub",
    handle: "@legacyit825-dev",
    icon: FaGithub,
    href: "https://github.com/legacyit825-dev",
    hoverColor: "hover:border-purple-500/40 hover:bg-purple-950/20",
    iconColor: "text-purple-400",
  },
];

const Contact_form = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Website Design & Development",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const heroAnim = useScrollAnimation(0.1);
  const formAnim = useScrollAnimation(0.08);
  const infoAnim = useScrollAnimation(0.08);
  const socialAnim = useScrollAnimation(0.08);
  const ctaAnim = useScrollAnimation(0.1);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = t("contactPage.form.validationRequired", "Full name is required.");
    }
    if (!formData.email.trim()) {
      errs.email = t("contactPage.form.validationRequired", "Email address is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = t("contactPage.form.validationEmail", "Please enter a valid email address.");
    }
    if (!formData.message.trim()) {
      errs.message = t("contactPage.form.validationRequired", "Please provide a message.");
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const serviceId = "service_k483nh5";
    const templateId = "template_jy8km0q";
    const publicKey = "ENkb0BuA3FRhAL9Or";

    const formattedMessage = formData.phone.trim()
      ? `[Subject / Project Type: ${formData.subject}]\n[Phone: ${formData.phone.trim()}]\n\n${formData.message.trim()}`
      : `[Subject / Project Type: ${formData.subject}]\n\n${formData.message.trim()}`;

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || "Not provided",
      subject: formData.subject,
      message: formattedMessage,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("Email sent successfully:", res);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Website Design & Development",
          message: "",
        });
        setStatus("success");
        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("error");
        setErrorMessage(
          err?.text ||
            t(
              "contactPage.form.errorDesc",
              "Something went wrong while sending your message. Please try again or email us directly at legacyit825@gmail.com."
            )
        );
        setLoading(false);
      });
  };

  return (
    <div className="w-full bg-[#070913] text-white">
      {/* =========================================================================
          SECTION 1: CONTACT HERO
          ========================================================================= */}
      <section
        id="contact-hero"
        className="relative w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center overflow-hidden bg-[#070913]"
      >
        {/* Subtle Geometric Background Grid */}
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
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[350px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
            filter: "blur(110px)",
          }}
        />

        <div
          ref={heroAnim.ref}
          className={`relative z-10 max-w-3xl mx-auto flex flex-col items-center anim-hidden anim-fade-up ${
            heroAnim.inView ? "anim-visible" : ""
          }`}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              {t("contactPage.hero.eyebrow", "GET IN TOUCH")}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.12] mb-5">
            <span className="text-white">
              {t("contactPage.hero.titleStart", "Let's Start a ")}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
              {t("contactPage.hero.titleHighlight", "Conversation.")}
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-slate-300/85 font-normal leading-relaxed max-w-2xl mx-auto">
            {t(
              "contactPage.hero.description",
              "Have an idea, a project, or a question? We'd love to hear from you. Let's explore how Legacy IT can help bring your digital vision to life."
            )}
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CONTACT FORM AND INFORMATION (Two-Column Layout)
          ========================================================================= */}
      <section
        id="contact-content"
        className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* =====================================================================
                LEFT COLUMN: SEND US A MESSAGE (Form)
                ===================================================================== */}
            <div
              ref={formAnim.ref}
              className={`lg:col-span-7 rounded-3xl border border-white/[0.08] bg-[#0c1020]/80 backdrop-blur-xl p-6 sm:p-9 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] anim-hidden anim-fade-up ${
                formAnim.inView ? "anim-visible" : ""
              }`}
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2.5">
                  {t("contactPage.form.heading", "Tell Us About Your Project.")}
                </h2>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {t(
                    "contactPage.form.description",
                    "Share your ideas with us, and our team will get back to you as soon as possible."
                  )}
                </p>
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="mb-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 p-5 text-emerald-300 flex items-start gap-3.5 shadow-[0_0_25px_rgba(16,185,129,0.12)]">
                  <LuCircleCheck className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-white">
                      {t("contactPage.form.successTitle", "Message Sent Successfully!")}
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-300/90 mt-1 leading-relaxed">
                      {t(
                        "contactPage.form.successDesc",
                        "Thank you for reaching out. The Legacy IT team will get back to you as soon as possible."
                      )}
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 rounded-2xl bg-rose-950/40 border border-rose-500/40 p-5 text-rose-300 flex items-start gap-3.5 shadow-[0_0_25px_rgba(244,63,94,0.12)]">
                  <LuCircleAlert className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-white">
                      {t("contactPage.form.errorTitle", "Message Delivery Failed")}
                    </p>
                    <p className="text-xs sm:text-sm text-rose-300/90 mt-1 leading-relaxed">
                      {errorMessage ||
                        t(
                          "contactPage.form.errorDesc",
                          "Something went wrong while sending your message. Please try again or email us directly at legacyit825@gmail.com."
                        )}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold tracking-wider uppercase text-slate-300 mb-2"
                    >
                      {t("contactPage.form.nameLabel", "Full Name")}{" "}
                      <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contactPage.form.namePlaceholder", "e.g. John Doe")}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-sm text-white placeholder-slate-500 border transition-all duration-200 focus:outline-none ${
                        errors.name
                          ? "border-rose-500/70 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30"
                          : "border-white/10 hover:border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:bg-white/[0.05]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <LuCircleAlert className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold tracking-wider uppercase text-slate-300 mb-2"
                    >
                      {t("contactPage.form.emailLabel", "Email Address")}{" "}
                      <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t(
                        "contactPage.form.emailPlaceholder",
                        "e.g. john@example.com"
                      )}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-sm text-white placeholder-slate-500 border transition-all duration-200 focus:outline-none ${
                        errors.email
                          ? "border-rose-500/70 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30"
                          : "border-white/10 hover:border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:bg-white/[0.05]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <LuCircleAlert className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Number & Project Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold tracking-wider uppercase text-slate-300 mb-2"
                    >
                      {t("contactPage.form.phoneLabel", "Phone Number (optional)")}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t(
                        "contactPage.form.phonePlaceholder",
                        "e.g. +977 9800000000"
                      )}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-sm text-white placeholder-slate-500 border border-white/10 hover:border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:bg-white/[0.05] transition-all duration-200 focus:outline-none"
                    />
                  </div>

                  {/* Subject / Project Type */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold tracking-wider uppercase text-slate-300 mb-2"
                    >
                      {t("contactPage.form.subjectLabel", "Subject / Project Type")}
                    </label>
                    <div className="relative">
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0c1020] text-sm text-white border border-white/10 hover:border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-200 focus:outline-none cursor-pointer appearance-none pr-10"
                      >
                        {subjectOptions.map((opt) => (
                          <option
                            key={opt.key}
                            value={opt.label}
                            className="bg-[#0c1020] text-white py-2"
                          >
                            {t(`contactPage.form.subjects.${opt.key}`, opt.label)}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold tracking-wider uppercase text-slate-300 mb-2"
                  >
                    {t("contactPage.form.messageLabel", "Your Message")}{" "}
                    <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t(
                      "contactPage.form.messagePlaceholder",
                      "Tell us about your project, timeline, and goals..."
                    )}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-sm text-white placeholder-slate-500 border transition-all duration-200 focus:outline-none resize-y ${
                      errors.message
                        ? "border-rose-500/70 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30"
                        : "border-white/10 hover:border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:bg-white/[0.05]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <LuCircleAlert className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <LuLoader className="w-4 h-4 animate-spin text-slate-950" />
                        <span className="relative z-10 font-bold tracking-tight">
                          {t("contactPage.form.sendingBtn", "Sending Message...")}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10 font-bold tracking-tight">
                          {t("contactPage.form.submitBtn", "Send Message")}
                        </span>
                        <LuArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
                  </button>

                  <p className="mt-3 text-xs text-slate-500">
                    {t("contactPage.form.legalConsent", "By submitting this form, you agree to our")}{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                    >
                      {t("footer.privacyPolicy", "Privacy Policy")}
                    </Link>{" "}
                    {t("contactPage.form.and", "and")}{" "}
                    <Link
                      to="/terms-and-conditions"
                      className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                    >
                      {t("footer.termsConditions", "Terms & Conditions")}
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>

            {/* =====================================================================
                RIGHT COLUMN: CONTACT INFORMATION
                ===================================================================== */}
            <div
              ref={infoAnim.ref}
              className={`lg:col-span-5 flex flex-col space-y-6 anim-hidden anim-fade-up ${
                infoAnim.inView ? "anim-visible" : ""
              }`}
            >
              {/* Header Box */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-950/30 text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 uppercase mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
                  <span>{t("contactPage.info.eyebrow", "CONTACT DETAILS")}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2.5">
                  {t("contactPage.info.heading", "We're Here to Help.")}
                </h2>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {t(
                    "contactPage.info.description",
                    "Whether you need a new website, custom software, or simply want to discuss an idea, feel free to reach out."
                  )}
                </p>
              </div>

              {/* Three Contact Information Blocks */}
              <div className="space-y-4">
                {/* 1. WHATSAPP / CALL */}
                <a
                  href="https://wa.me/9779702016450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-[#0c1020]/70 hover:bg-[#0f152a]/95 hover:border-emerald-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {t("contactPage.info.whatsappTitle", "WhatsApp & Phone")}
                      </p>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        Fastest
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mt-0.5 tracking-tight truncate">
                      +977 9702016450
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t("contactPage.info.whatsappSub", "Direct chat & call on WhatsApp")}
                    </p>
                  </div>
                </a>

                {/* 2. EMAIL */}
                <a
                  href="mailto:legacyit825@gmail.com"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-[#0c1020]/70 hover:bg-[#0f152a]/95 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <LuMail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {t("contactPage.info.emailTitle", "Official Email")}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5 tracking-tight truncate">
                      legacyit825@gmail.com
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t("contactPage.info.emailSub", "Send us detailed project requirements")}
                    </p>
                  </div>
                </a>

                {/* 3. OFFICE ADDRESS */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Khumaltar-15,+Lalitpur,+Kantinagar+Tole+Marg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-[#0c1020]/70 hover:bg-[#0f152a]/95 hover:border-sky-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.12)] cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:bg-sky-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <LuMapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {t("contactPage.info.addressTitle", "Office Address")}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors mt-0.5 tracking-tight leading-snug">
                      Khumaltar-15, Lalitpur, Kantinagar Tole Marg
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t("contactPage.info.openMaps", "Open in Google Maps")}
                    </p>
                  </div>
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0c1020]/70 shadow-[0_15px_35px_rgba(0,0,0,0.4)] group">
                <div className="px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    <LuMapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t("contactPage.info.mapBadge", "LOCATION MAP")}</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Khumaltar-15,+Lalitpur,+Kantinagar+Tole+Marg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>View Larger</span>
                    <LuArrowRight className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d522.4928740420505!2d85.31922862238767!3d27.64477117012532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1765950577986!5m2!1sen!2snp"
                  title="Legacy IT Headquarters"
                  className="w-full h-44 sm:h-48 border-0 filter grayscale invert contrast-125 opacity-75 group-hover:opacity-100 group-hover:filter-none transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SOCIAL MEDIA
          ========================================================================= */}
      <section
        id="contact-social"
        className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#070913] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2.5">
              {t("contactPage.social.heading", "Connect With Us.")}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {t(
                "contactPage.social.description",
                "Follow Legacy IT and stay connected with our latest updates."
              )}
            </p>
          </div>

          <div
            ref={socialAnim.ref}
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 anim-hidden anim-fade-up ${
              socialAnim.inView ? "anim-visible" : ""
            }`}
          >
            {socialAccounts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl border border-white/[0.08] bg-[#0c1020]/60 ${item.hoverColor} backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer text-center`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 ${item.iconColor} group-hover:scale-110 transition-transform duration-300 mb-3`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5 truncate max-w-full">
                    {item.handle}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FINAL CALL TO ACTION
          ========================================================================= */}
      <section
        id="contact-cta"
        className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#070913]"
      >
        <div className="max-w-4xl mx-auto">
          <div
            ref={ctaAnim.ref}
            className={`relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e1428]/90 to-[#070913]/95 backdrop-blur-xl p-8 sm:p-12 text-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] anim-hidden anim-fade-up ${
              ctaAnim.inView ? "anim-visible" : ""
            }`}
          >
            {/* Ambient Cyan Gradient Glow */}
            <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-gradient-to-b from-cyan-500/20 via-sky-400/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
                {t(
                  "contactPage.cta.heading",
                  "Your Next Digital Project Starts Here."
                )}
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed mb-7 max-w-md">
                {t(
                  "contactPage.cta.description",
                  "Let's turn your ideas into meaningful digital experiences."
                )}
              </p>

              <Link
                to="/services"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 font-bold tracking-tight">
                  {t("contactPage.cta.button", "Explore Our Services")}
                </span>
                <LuArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact_form;
