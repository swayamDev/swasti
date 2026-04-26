"use client";

import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiEnvelope, HiMapPin, HiHeart } from "react-icons/hi2";
import { IconType } from "react-icons";

import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "@/utils/constants";
import { scrollToSection } from "@/hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";

type SocialItem = {
  icon: IconType;
  href: string;
};

const Footer = () => {
  const socialIcons: SocialItem[] = [
    { icon: FaGithub, href: SOCIAL_LINKS.github },
    { icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin },
    { icon: FaXTwitter, href: SOCIAL_LINKS.twitter },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute top-0 left-1/4 size-96 rounded-full opacity-30 blur-3xl"></div>
        <div className="bg-primary/10 absolute right-1/4 bottom-0 size-96 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* LEFT - INFO */}
          <FadeIn delay={0}>
            <div>
              <h3 className="from-primary/80 via-primary to-primary/80 mb-4 bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent">
                {PERSONAL_INFO.name}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-white/60">
                {PERSONAL_INFO.tagline}
              </p>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group hover:border-primary/30 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="bg-primary/10 rounded-lg p-2">
                    <HiEnvelope className="text-primary size-4" />
                  </div>
                  <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <HiMapPin className="text-primary size-4" />
                  </div>
                  <span className="text-sm text-white/70">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <h4 className="mb-6 text-lg font-semibold text-white">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group hover:text-primary flex items-center gap-2 text-white/60 transition-all duration-300"
                    >
                      <div className="group-hover:bg-primary h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-300 group-hover:w-2" />
                      <span className="text-sm">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h4 className="mb-6 text-lg font-semibold text-white">
                Connect With Me
              </h4>

              <p className="mb-6 text-sm leading-relaxed text-white/60">
                Let's connect and create something amazing together.
              </p>

              <div className="flex flex-wrap gap-3">
                {socialIcons.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect on ${item.href}`}
                      className="group hover:border-primary/50 relative rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-110 hover:bg-white/10"
                    >
                      <Icon className="group-hover:text-primary h-5 w-5 text-white/60 transition-colors duration-300" />

                      {/* Hover Glow */}
                      <div className="from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br transition-all duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
              <p className="text-sm text-white/50">
                &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All
                rights reserved.
              </p>

              <p className="flex items-center gap-2 text-sm text-white/50">
                Built with
                <HiHeart className="text-primary fill-primary size-4 animate-pulse"></HiHeart>
                by
                <a
                  href="https://swayam.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  Swayam
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
