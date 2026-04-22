"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { HiChevronDown, HiStar } from "react-icons/hi";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import FadeIn from "../animations/FadeIn";
import { PERSONAL_INFO, STATS } from "@/utils/constants";
import { scrollToSection } from "@/hooks/useScrollSpy";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="from-primary/10 via-primary/15 to-primary/20 border-primary/20 mb-8 inline-flex items-center gap-2.5 rounded-full border bg-gradient-to-r px-[18px] py-[11px]">
                <HiStar className="h-4 w-4 fill-white text-white" />
                <span className="text-xs tracking-[1.2px] text-white md:text-sm">
                  {PERSONAL_INFO.title} Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mb-6 text-4xl leading-tight font-normal text-white md:text-5xl lg:text-6xl">
                React.js Developer Portfolio
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mb-8 max-w-[550px] text-lg text-white/70">
                Building modern, scalable web applications with React, Next.js,
                and cutting-edge technologies.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="group mb-12 inline-flex items-center gap-2"
              >
                <div className="relative z-10 rounded-[117px] border border-white bg-white px-[26px] py-[13px] text-base font-medium text-[#212121] transition-all duration-300 hover:bg-gray-100">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid max-w-full grid-cols-2 gap-10 md:grid-cols-4">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="border-r border-white/50 pr-10 text-left last:border-r-0"
                  >
                    <div className="text-primary mb-[18px] font-mono text-2xl font-normal">
                      {stat.value}
                    </div>
                    <div className="text-sm leading-snug text-white">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN */}
          <FadeIn delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="group relative aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-2xl">
                {/* Gradient Border */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="from-primary/20 via-primary/10 to-primary animate-spin-slow h-full w-full rounded-2xl bg-gradient-to-br"></div>
                </div>

                {/* Image */}
                <div className="relative m-[1px] h-[calc(100%-2px)] overflow-hidden rounded-2xl">
                  <img
                    src="/hero.webp"
                    alt="Developer"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Tech Icons */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-sm">
                      {[
                        SiReact,
                        SiNextdotjs,
                        SiNodedotjs,
                        SiTailwindcss,
                        SiMongodb,
                      ].map((Icon, i) => (
                        <div
                          key={i}
                          className="flex size-6 items-center justify-center transition-transform duration-300 hover:scale-110"
                        >
                          <Icon className="text-primary size-full" />
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <HiChevronDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
