"use client";

import { scrollToSection, useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_LINKS, PERSONAL_INFO } from "@/utils/constants";
import { useState, useEffect } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { LuBrain } from "react-icons/lu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(
    NAV_LINKS.map((link) => link.id),
    100,
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId, 80);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-1000 w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      <div className="mx-auto max-w-330 px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex animate-pulse items-center gap-2">
            <LuBrain className="text-primary size-6" />
            <button
              onClick={() => scrollToSection("hero", 80)}
              aria-label="Back to top"
              className="from-primary via-primary/50 to-primary/30 bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent transition-opacity hover:opacity-80"
            >
              {PERSONAL_INFO.name.split(" ")[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => handleNavClick("contact")}
              className="rounded-full border border-white bg-white px-7 py-3.5 text-base font-medium text-[#212121] transition-all duration-300 hover:bg-white/90"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HiXMark className="size-6" />
            ) : (
              <HiBars3 className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 left-0 flex flex-col gap-4 bg-black/95 px-4 py-6 backdrop-blur-lg md:hidden">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-primary hover:bg-primary/80 w-full rounded-lg px-6 py-2 font-medium text-white transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
