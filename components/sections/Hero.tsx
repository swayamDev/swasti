"use client";

import Image from "next/image";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
} from "react-icons/si";
import { HiChevronDown, HiSparkles } from "react-icons/hi2";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import FadeIn from "../animations/FadeIn";
import { PERSONAL_INFO, STATS } from "@/utils/constants";
import { scrollToSection } from "@/hooks/useScrollSpy";

const techIcons = [SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="from-primary/10 via-primary/15 to-primary/20 border-primary/20 mb-8 inline-flex items-center gap-2.5 rounded-full border bg-linear-to-r px-4.5 py-2.75">
                <HiSparkles className="size-4 text-white" />
                <span className="text-xs tracking-wide text-white md:text-sm">
                  {PERSONAL_INFO.title} · Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mb-6 font-normal text-white">
                Building Intelligent Systems with AI & Data
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/70">
                {PERSONAL_INFO.tagline}. Turning complex data into scalable ML
                solutions that drive real-world impact.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="mb-12 inline-flex items-center gap-2"
              >
                <div className="rounded-full border border-white bg-white px-7 py-3.5 text-base font-medium text-[#212121] transition-all duration-300 hover:bg-gray-100">
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
                    <div className="text-primary mb-4 font-mono text-2xl font-normal">
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
              <div className="group relative aspect-4/5 w-full max-w-125 overflow-hidden rounded-2xl">
                {/* Gradient Border */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="from-primary/20 via-primary/10 to-primary animate-spin-slow h-full w-full rounded-2xl bg-linear-to-br" />
                </div>

                {/* Image */}
                <div className="relative m-px h-[calc(100%-2px)] overflow-hidden rounded-2xl">
                  <Image
                    src="/hero.webp"
                    alt="Swasti — AI/ML Engineer"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>

                {/* Tech Icons */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-sm">
                      {techIcons.map((Icon, i) => (
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
        <HiChevronDown className="size-6 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
