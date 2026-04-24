"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";
import { services } from "@/data";

import { HiWrenchScrewdriver } from "react-icons/hi2";

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/20 absolute top-1/4 left-1/4 size-96 rounded-full opacity-20 blur-3xl"></div>
        <div className="bg-primary/20 absolute right-1/4 bottom-1/4 size-96 rounded-full opacity-20 blur-3xl"></div>
        <div className="bg-primary/10 absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="mb-16 text-center">
            <div className="border-primary/30 bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <HiWrenchScrewdriver className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                What I Offer
              </span>
            </div>

            <h2 className="mx-auto mb-4 max-w-2xl text-4xl font-normal text-white lg:text-5xl">
              Built for innovation. Designed for results.
            </h2>

            <p className="mx-auto max-w-xl text-lg text-white/60">
              Comprehensive solutions to transform your ideas
            </p>
          </div>
        </FadeIn>

        {/* Top 2 Services */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = service.icon;

            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="group hover:border-primary/30 relative flex h-full min-h-70 flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300">
                  <div className="mb-6">
                    <div className="bg-primary/20 border-primary/30 flex size-16 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="text-primary size-8" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="group-hover:text-primary mb-3 text-2xl font-semibold text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-white/60">
                      {service.description}
                    </p>
                  </div>

                  <div className="from-primary/0 to to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br transition-all duration-300" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Remaining Services */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(2).map((service, index) => {
            const IconComponent = service.icon;

            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div className="group hover:border-primary/30 relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="mb-4">
                    <div className="bg-primary/20 border-primary/30 flex size-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="text-primary size-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#A8FF8D]">
                      {service.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>
                  </div>

                  <div className="from-primary/0 to to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br transition-all duration-300" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
