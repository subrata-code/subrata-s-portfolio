import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { profileData } from "../constants/portfolioData";
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "#about" },
  { id: "education", label: "Education", href: "#education" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "activity", label: "Activity", href: "#activity" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["contact", "projects", "activity", "journey", "education", "about"];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    animate(window.scrollY, y, {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  }
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToSection(id);
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-16 shadow-lg shadow-black/5 border-b " +
              (isDark
                ? "bg-gray-900/85 backdrop-blur-xl border-gray-800/50"
                : "bg-white/80 backdrop-blur-xl border-white/20")
            : isDark
              ? "h-20 bg-gray-900/60 backdrop-blur-md"
              : "h-20 bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={handleNavClick("home")}
          >
            <div className="relative">
              <img
                src="/favicon_sb.png"
                alt="Logo"
                className={`rounded-full shadow-md border-2 border-indigo-100 dark:border-indigo-900 transition-all duration-300 group-hover:border-indigo-400 ${
                  scrolled ? "w-8 h-8" : "w-10 h-10"
                }`}
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white dark:border-gray-900 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300 ${
                  scrolled ? "text-lg" : "text-xl"
                }`}
              >
                {profileData.name}
              </span>
              <span className="text-[10px] font-medium text-indigo-600 dark:text-indigo-400 tracking-wide uppercase hidden sm:block">
                Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleNavClick(item.id)}
                className={`nav-link-underline px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/50 active"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:scale-110"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={handleNavClick("contact")}
              className="ml-3 px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/30 transition-all duration-300 transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all duration-300"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="relative z-50 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X size={22} className="text-gray-800 dark:text-white" />
              ) : (
                <Menu size={22} className="text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
                hidden: {},
              }}
              className="flex flex-col items-center gap-2 w-full max-w-sm px-8"
            >
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick(item.id)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    size={18}
                    className={`transition-transform duration-300 ${
                      activeSection === item.id
                        ? "text-indigo-500 translate-x-1"
                        : "text-gray-400"
                    }`}
                  />
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={handleNavClick("contact")}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="w-full mt-4 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center text-lg font-bold rounded-xl shadow-lg"
              >
                Hire Me
              </motion.a>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;