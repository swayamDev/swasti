"use client";

import { HiArrowDownTray } from "react-icons/hi2";
import { HiOutlineCpuChip, HiOutlineSparkles } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi2";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import FadeIn from "../animations/FadeIn";
import { ABOUT_STATS, PERSONAL_INFO } from "@/utils/constants";
import { techStack } from "@/data";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-20">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="border-primary/30 bg-primary/10 inline-flex w-fit items-center gap-2.5 rounded-full border px-5 py-2.5">
                  <HiOutlineCpuChip className="text-primary size-4" />
                  <span className="text-primary text-sm font-medium">
                    AI/ML Engineer & Data Scientist
                  </span>
                  <HiOutlineSparkles className="text-primary size-4" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="font-normal text-white">
                  Turning Data Into Intelligent Solutions
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
                      <div className="from-primary via-primary/50 to-primary/20 absolute top-0 -left-4 h-full w-1 rounded-full bg-linear-to-b" />
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
                  <HiArrowDownTray className="size-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Resume
                </button>
              </FadeIn>
            </div>
          </div>

          {/* Right Column Info Grid */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative col-span-2">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75" />
                <div className="hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <HiOutlineCpuChip className="text-primary size-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg tracking-wide text-white">
                        AI & ML Expertise
                      </h3>
                      <p className="text-sm leading-relaxed text-white/70">
                        Specialized in building and deploying scalable ML
                        models, deep learning architectures, and NLP pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75" />
                <div className="hover:border-primary/30 relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="bg-primary/10 mb-4 w-fit rounded-xl p-3">
                    <HiOutlineSparkles className="text-primary size-5" />
                  </div>
                  <h3 className="mb-2 text-lg tracking-wide text-white">
                    Research-Driven
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    Applying state-of-the-art research to production AI systems.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75" />
                <div className="hover:border-primary/30 relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="bg-primary/10 mb-4 w-fit rounded-xl p-3">
                    <HiOutlineLightBulb className="text-primary size-5" />
                  </div>
                  <h3 className="mb-2 text-lg tracking-wide text-white">
                    Data-First Thinking
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    Every solution starts with clean, well-understood data.
                  </p>
                </div>
              </div>

              <div className="group relative col-span-2">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75" />
                <div className="hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        90%+
                      </div>
                      <div className="text-xs text-white/60">
                        Model Accuracy
                      </div>
                    </div>
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        1M+
                      </div>
                      <div className="text-xs text-white/60">
                        Records Processed
                      </div>
                    </div>
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        Fast
                      </div>
                      <div className="text-xs text-white/60">
                        Inference Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Tech Stack Grid */}
        <FadeIn delay={500}>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h2 className="mb-4 font-normal text-white">Core Tech Stack</h2>
              <p className="text-lg text-white/60">
                Tools and frameworks I use to build AI systems
              </p>
            </div>
            <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {techStack.map((skill, index) => (
                <div
                  key={index}
                  className="group hover:border-primary/50 relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <skill.icon className="text-primary text-3xl" />
                  <div className="text-center text-sm font-medium text-white/80">
                    {skill.name}
                  </div>
                  <div className="from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
