import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Monitor, Languages, Globe } from "lucide-react";
import { useLanguage, useTheme } from "../context/hook";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo_no_background.png";

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.tech, href: '#tech' },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 backdrop-blur-md border-b ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-900/5"
          : "bg-white/60 dark:bg-slate-950/60 border-transparent"
      }`}
    >
      <div className="relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 w-full">
            <div className="flex flex-1 items-center justify-start">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  src={logo}
                  alt="HYzon Tech Team"
                  className="w-16 h-16 object-cover"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  HYzon Tech
                </span>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-end space-x-4">
              <button
                onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center gap-1 text-sm font-semibold"
                title="Change Language"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>

              <div className="flex bg-slate-100 dark:bg-slate-900 rounded-full p-1 border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setTheme("light")}
                  className={`p-1.5 rounded-full transition-colors ${
                    theme === "light"
                      ? "bg-white shadow text-amber-500"
                      : "text-slate-500"
                  }`}
                >
                  <Sun size={16} />
                </button>
                <button
                  onClick={() => setTheme("system")}
                  className={`p-1.5 rounded-full transition-colors ${
                    theme === "system"
                      ? "bg-white dark:bg-slate-800 shadow text-blue-500"
                      : "text-slate-500"
                  }`}
                >
                  <Monitor size={16} />
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`p-1.5 rounded-full transition-colors ${
                    theme === "dark"
                      ? "bg-slate-800 shadow text-indigo-400"
                      : "text-slate-500"
                  }`}
                >
                  <Moon size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-1 justify-end lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}

              <div className="border-t border-slate-200 dark:border-slate-800 my-2 pt-2 flex justify-between items-center px-3">
                <button
                  onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                  className="flex items-center space-x-2 text-slate-700 dark:text-slate-300"
                >
                  <Languages size={20} />
                  <span>{language === "tr" ? "Türkçe" : "English"}</span>
                </button>

                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center space-x-2 text-slate-700 dark:text-slate-300"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
