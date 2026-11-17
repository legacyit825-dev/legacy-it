import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import {
  LuShieldCheck,
  LuX,
  LuMail,
  LuCircleCheck,
  LuLock,
  LuLoader,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";

const ContactSecurityContext = createContext(null);

export const useContactGate = () => {
  const context = useContext(ContactSecurityContext);
  if (!context) {
    throw new Error("useContactGate must be used within a ContactSecurityProvider");
  }
  return context;
};

export const ContactSecurityProvider = ({ children }) => {
  const { t } = useTranslation();
  const recaptchaRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [gateConfig, setGateConfig] = useState({
    url: "",
    channel: "email", // "email" | "whatsapp" | "general"
    title: "",
    subtitle: "",
  });
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  const recaptchaSiteKey =
    import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const openContactGate = useCallback(
    (url, options = {}) => {
      setGateConfig({
        url,
        channel: options.channel || (url?.includes("wa.me") ? "whatsapp" : "email"),
        title: options.title || "",
        subtitle: options.subtitle || "",
      });
      setVerified(false);
      setVerifying(false);
      setIsOpen(true);
    },
    []
  );

  const closeGate = useCallback(() => {
    setIsOpen(false);
    setVerified(false);
    setVerifying(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, []);

  // Handle ESC key to dismiss
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen && !verifying) {
        closeGate();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, verifying, closeGate]);

  const handleCaptchaSuccess = (token) => {
    if (!token) return;
    setVerifying(true);
    setVerified(true);

    // Brief transition to show success before redirecting
    setTimeout(() => {
      const destination = gateConfig.url;
      closeGate();

      if (destination) {
        if (destination.startsWith("mailto:")) {
          window.location.href = destination;
        } else {
          window.open(destination, "_blank", "noopener,noreferrer");
        }
      }
    }, 600);
  };

  const handleCaptchaExpired = () => {
    setVerified(false);
    setVerifying(false);
  };

  return (
    <ContactSecurityContext.Provider value={{ openContactGate }}>
      {children}

      {/* Security Verification Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="security-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget && !verifying) closeGate();
          }}
        >
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#0c1020]/95 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-center overflow-hidden">
            {/* Ambient Cyan Halo */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={closeGate}
              disabled={verifying}
              aria-label="Close security modal"
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40 cursor-pointer"
            >
              <LuX className="w-5 h-5" />
            </button>

            {/* Header Icon */}
            <div className="relative mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              {verified ? (
                <LuCircleCheck className="w-7 h-7 text-emerald-400 animate-bounce" />
              ) : (
                <LuShieldCheck className="w-7 h-7 text-cyan-400" />
              )}
            </div>

            {/* Title */}
            <h3
              id="security-modal-title"
              className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2"
            >
              {verified
                ? t("securityModal.verifiedTitle", "Verified! Redirecting...")
                : t("securityModal.title", "Security Verification")}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5 max-w-sm mx-auto">
              {verified
                ? t(
                    "securityModal.verifiedDesc",
                    "Security check passed. You are now being securely redirected."
                  )
                : t(
                    "securityModal.subtitle",
                    "To prevent automated spam, please solve the security check below to connect with Legacy IT."
                  )}
            </p>

            {/* Channel Target Preview Card */}
            <div className="mb-5 p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-left gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                    gateConfig.channel === "whatsapp"
                      ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                      : "bg-cyan-500/15 border-cyan-500/30 text-cyan-400"
                  }`}
                >
                  {gateConfig.channel === "whatsapp" ? (
                    <FaWhatsapp className="w-4 h-4" />
                  ) : (
                    <LuMail className="w-4 h-4" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {gateConfig.channel === "whatsapp"
                      ? t("securityModal.channelWhatsApp", "WhatsApp Channel")
                      : t("securityModal.channelEmail", "Official Mail")}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white truncate">
                    {gateConfig.channel === "whatsapp"
                      ? "+977 9702016450"
                      : "legacyit825@gmail.com"}
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-cyan-400/90 bg-cyan-950/40 px-2 py-1 rounded-lg border border-cyan-500/20">
                <LuLock className="w-3 h-3" />
                <span>Protected</span>
              </div>
            </div>

            {/* reCAPTCHA Box */}
            <div className="flex flex-col items-center justify-center min-h-[82px] mb-4">
              {verified ? (
                <div className="flex items-center gap-2 py-4 text-emerald-400 text-sm font-semibold">
                  <LuLoader className="w-4 h-4 animate-spin text-cyan-400" />
                  <span>
                    {t(
                      "securityModal.connecting",
                      "Connecting to recipient..."
                    )}
                  </span>
                </div>
              ) : (
                <div className="transform scale-[0.92] sm:scale-100 origin-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    theme="dark"
                    onChange={handleCaptchaSuccess}
                    onExpired={handleCaptchaExpired}
                  />
                </div>
              )}
            </div>

            {/* Footer / Cancel */}
            <div className="mt-2 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={closeGate}
                disabled={verifying}
                className="px-5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer disabled:opacity-40"
              >
                {t("securityModal.cancel", "Cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </ContactSecurityContext.Provider>
  );
};

export default ContactSecurityContext;

