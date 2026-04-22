"use client";

import { HiDownload, HiCode, HiSparkles } from "react-icons/hi";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import FadeIn from "../animations/FadeIn";
import { ABOUT_STATS, PERSONAL_INFO } from "@/utils/constants";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-20">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column Content */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="border-primary/30 bg-primary/10 inline-flex w-fit items-center gap-2.5 rounded-full border px-5 py-2.5">
                  <HiCode className="text-primary h-4 w-4" />
                  <span className="text-primary text-sm font-medium">
                    Full-Stack Developer
                  </span>
                  <HiSparkles className="text-primary h-4 w-4" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl leading-tight font-normal text-white lg:text-5xl">
                  Crafting Digital Experiences That Matter
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-white/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="grid grid-cols-3 gap-8">
                  {ABOUT_STATS.map((stat, index) => (
                    <div key={index} className="relative">
                      <div className="from-primary via-primary/50 to-primary/20 absolute top-0 -left-4 h-full w-1 rounded-full bg-gradient-to-b"></div>
                      <div className="mb-2 font-mono text-3xl font-normal text-white">
                        {stat.value}
                      </div>
                      <p className="text-sm leading-snug text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <button
                  onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-black transition-all duration-300 hover:bg-white/90"
                >
                  <HiDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Resume
                </button>
              </FadeIn>
            </div>
          </div>

          {/* Right Column Info Grid */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative col-span-2">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <HiCode className="text-primary h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Expertise
                      </h3>
                      <p className="text-sm leading-relaxed text-white/70">
                        Specialized in building scalable web applications with
                        modern technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="bg-primary/10 mb-4 w-fit rounded-xl p-3">
                    <HiSparkles className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    Clean Code
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    Writing maintainable, well-documented code that scales.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="bg-primary/10 mb-4 w-fit rounded-xl p-3">
                    <HiDownload className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    Performance
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    Optimize for speed and efficiency
                  </p>
                </div>
              </div>

              <div className="group relative col-span-2">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        100%
                      </div>
                      <div className="text-xs text-white/60">
                        Client Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        24/7
                      </div>
                      <div className="text-xs text-white/60">
                        Support Available
                      </div>
                    </div>
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        Fast
                      </div>
                      <div className="text-xs text-white/60">Delivery Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
