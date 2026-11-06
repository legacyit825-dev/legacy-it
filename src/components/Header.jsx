import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

import logo from "../assets/logo.png";

const menuItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const desktopLangRef = useRef(null);
  const mobileLangRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem("legacy_it_lang", lang);
    } catch (e) {
      console.warn("Could not save language preference:", e);
    }
    setDesktopLangOpen(false);
    setMobileLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopLangRef.current &&
        !desktopLangRef.current.contains(e.target)
      ) {
        setDesktopLangOpen(false);
      }
      if (
        mobileLangRef.current &&
        !mobileLangRef.current.contains(e.target)
      ) {
        setMobileLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-[#070913] backdrop-blur-xl border-b border-white/[0.08] text-white px-6 lg:px-12 h-20 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Legacy IT"
            className="w-32 sm:w-36 object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {menuItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 relative py-1 ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {t(`navbar.${item.key}`)}
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-white/10" />

          {/* Desktop Language Selector */}
          <div className="relative" ref={desktopLangRef}>
            <button
              type="button"
              onClick={() => setDesktopLangOpen((prev) => !prev)}
              aria-label="Change language"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-white/[0.05] cursor-pointer"
            >
              <FaGlobe className="text-base" />
              <span className="uppercase text-xs font-semibold tracking-wider">
                {i18n.language || "en"}
              </span>
            </button>

            {desktopLangOpen && (
              <ul className="absolute right-0 top-11 w-36 bg-[#0c1222]/95 border border-white/10 backdrop-blur-xl rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden">
                <li>
                  <button
                    type="button"
                    onClick={() => changeLanguage("en")}
                    className={`text-xs w-full text-left px-4 py-2.5 transition-colors cursor-pointer ${
                      i18n.language === "en"
                        ? "text-cyan-400 font-semibold bg-white/[0.06]"
                        : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    English (EN)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => changeLanguage("es")}
                    className={`text-xs w-full text-left px-4 py-2.5 transition-colors cursor-pointer ${
                      i18n.language === "es"
                        ? "text-cyan-400 font-semibold bg-white/[0.06]"
                        : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    Español (ES)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => changeLanguage("pr")}
                    className={`text-xs w-full text-left px-4 py-2.5 transition-colors cursor-pointer ${
                      i18n.language === "pr"
                        ? "text-cyan-400 font-semibold bg-white/[0.06]"
                        : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    Português (PR)
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Actions: Language & Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language Switcher */}
          <div className="relative" ref={mobileLangRef}>
            <button
              type="button"
              onClick={() => setMobileLangOpen((prev) => !prev)}
              aria-label="Change language"
              className="p-2 text-slate-300 hover:text-cyan-400 transition cursor-pointer flex items-center gap-1.5"
            >
              <FaGlobe />
              <span className="uppercase text-xs font-semibold tracking-wider">
                {i18n.language || "en"}
              </span>
            </button>

            {mobileLangOpen && (
              <ul className="absolute right-0 top-11 w-36 bg-[#0c1222]/95 border border-white/10 backdrop-blur-xl rounded-xl shadow-2xl py-1.5 z-50">
                <li>
                  <button
                    type="button"
                    onClick={() => changeLanguage("en")}
                    className={`text-xs w-full text-left px-4 py-2.5 cursor-pointer ${
                      i18n.language === "en"
                        ? "text-cyan-400 font-semibold bg-white/[0.06]"
                        : "text-slate-300 hover:bg-white/[0.06]"
                    }`}
                  >
                    English (EN)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => changeLanguage("es")}
                    className={`text-xs w-full text-left px-4 py-2.5 cursor-pointer ${
                      i18n.language === "es"
                        ? "text-cyan-400 font-semibold bg-white/[0.06]"
                        : "text-slate-300 hover:bg-white/[0.06]"
                    }`}
                  >
                    Español (ES)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => changeLanguage("pr")}
                    className={`text-xs w-full text-left px-4 py-2.5 cursor-pointer ${
                      i18n.language === "pr"
                        ? "text-cyan-400 font-semibold bg-white/[0.06]"
                        : "text-slate-300 hover:bg-white/[0.06]"
                    }`}
                  >
                    Português (PR)
                  </button>
                </li>
              </ul>
            )}
          </div>

          <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#fff" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-[#070913]/95 border-b border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen
            ? "max-h-80 opacity-100 py-6 px-6"
            : "max-h-0 opacity-0 py-0 px-6 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <li key={item.key}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium py-1.5 transition-colors ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {t(`navbar.${item.key}`)}
              </NavLink>
            </li>
          ))}
          <li className="pt-2 border-t border-white/[0.08]">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              {t("hero.primaryCta", "Let's Build Something")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
