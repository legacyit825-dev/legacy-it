import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import contact from "../assets/contact.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Contact_form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_k483nh5";
    const templateId = "template_jy8km0q";
    const publicKey = "ENkb0BuA3FRhAL9Or";

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("email sent successfully", res);
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        console.error("Error ", err);
      });
  };

  const { t } = useTranslation();
  const heroAnim = useScrollAnimation();
  const formAnim = useScrollAnimation();
  const infoAnim = useScrollAnimation();
  return (
    <>
      <div
        className="relative w-full h-[300px] bg-center bg-cover"
        style={{ backgroundImage: `url(${contact})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Optional content */}
        <div
          ref={heroAnim.ref}
          className={`relative z-10 flex h-full items-center justify-center text-white anim-hidden anim-fade-up ${heroAnim.inView ? "anim-visible" : ""}`}
        >
          <h1 className="text-3xl font-bold">{t("contact.title")}</h1>
        </div>
      </div>

      <section className="w-full bg-[#f9f9f9] py-16 ">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT — FORM */}
            <div
              ref={formAnim.ref}
              className={`rounded-xl bg-white p-8 shadow-sm anim-hidden anim-fade-left ${formAnim.inView ? "anim-visible" : ""}`}
            >
              {success && (
                <div className="rounded-md bg-green-100 px-4 py-2 text-sm text-green-700">
                  ✅ Email sent successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.fname")}
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-sky-400 focus:outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("contact.femail")}
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-sky-400 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    {t("contact.message")}
                  </label>
                  <textarea
                    rows="5"
                    placeholder={t("contact.fmessage")}
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-sky-400 focus:outline-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rounded-md bg-sky-400 px-6 py-2 font-medium text-white transition hover:bg-gray-800"
                >
                  {t("contact.button")}
                </button>
              </form>
            </div>

            {/* RIGHT — INFO */}
            <div
              ref={infoAnim.ref}
              className={`space-y-6 anim-hidden anim-fade-right anim-delay-200 ${infoAnim.inView ? "anim-visible" : ""}`}
            >
              <div>
                <p className="text-sm font-semibold uppercase text-sky-400">
                  {t("contact.title")}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {t("contact.touch")}
                </h2>
                <p className="mt-3 text-gray-600">{t("contact.desc")}</p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/9779702016450"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ContactItem
                    icon={<WhatsAppIcon size={30} />}
                    title={t("contact.call")}
                    value="+977 9702016450"
                  />
                </a>

                <ContactItem
                  icon={<EmailIcon size={30} />}
                  title={t("contact.emailus")}
                  value="legacyit825@gmail.com"
                />

                <ContactItem
                  icon={<LocationIcon size={30} />}
                  title={t("contact.address")}
                  value="Khumaltar-15, Lalitpur, Kantinagar Tole Marg"
                />
              </div>

              {/* SOCIAL ICONS */}
              <div>
                <p className="mb-2 font-medium text-gray-700">
                  {t("contact.follow")}
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61584054964744"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon={<FacebookIcon size={30} />} />
                  </a>
                  <a href="https://x.com/legacy91847"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon={<XIcon size={23} />} />
                  </a>
                  {/* <SocialIcon icon={<LinkedInIcon size={30} />} /> */}
                  <a href="https://www.instagram.com/legacyit825/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon={<InstagramIcon size={30} />} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d522.4928740420505!2d85.31922862238767!3d27.64477117012532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1765950577986!5m2!1sen!2snp"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full md:h-[300px]"
        ></iframe>
      </div>
    </>
  );
};

const ContactItem = ({ icon, title, value }) => (
  <div className="flex items-start gap-4 mb-3">
    <div className="mt-1">{icon}</div>
    <div>
      <p className="font-medium text-gray-700">{title}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a
    // href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-9 w-9 items-center justify-center rounded-full
               transition-transform duration-200
               hover:scale-110 hover:bg-gray-100"
  >
    {icon}
  </a>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#25D366"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2C6.56 2 2.09 6.47 2.09 11.95c0 1.96.57 3.86 1.65 5.5L2 22l4.7-1.63a9.87 9.87 0 005.34 1.56h.01c5.48 0 9.95-4.47 9.95-9.95C22 6.47 17.53 2 12.04 2zm0 18.11c-1.67 0-3.3-.45-4.72-1.3l-.34-.2-2.79.97.94-2.72-.22-.35a8.09 8.09 0 01-1.28-4.33c0-4.48 3.65-8.13 8.13-8.13 2.17 0 4.21.85 5.75 2.39a8.07 8.07 0 012.38 5.74c0 4.48-3.65 8.13-8.13 8.13zm4.47-6.1c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
  </svg>
);
const EmailIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#4B5563"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const LocationIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#EA4335"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#1877F2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8H16l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
  </svg>
);
const XIcon = ({ size = 24, color = "#000000" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.1-6.7L5.7 22H2.6l7.3-8.4L1 2h6.7l4.6 6L18.9 2z" />
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#0A66C2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-1 1.7-2 3.6-2 3.9 0 4.6 2.6 4.6 6v6.4h-4V15c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6.1H9z" />
  </svg>
);
const InstagramIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="instagramGradient"
        x1="0%"
        y1="100%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="25%" stopColor="#DD2A7B" />
        <stop offset="50%" stopColor="#8134AF" />
        <stop offset="75%" stopColor="#515BD4" />
      </linearGradient>
    </defs>

    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      fill="url(#instagramGradient)"
    />

    <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
    <circle cx="17" cy="7" r="1.2" fill="#FFFFFF" />
  </svg>
);

export default Contact_form;
