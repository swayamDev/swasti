"use client";

import { testimonials, testimonialStats } from "@/data";
import { useState, useRef } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineChatBubbleLeftRight,
  HiStar,
} from "react-icons/hi2";
import FadeIn from "../animations/FadeIn";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;

      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="mb-16 text-center">
            <div className="border-primary/30 bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <HiOutlineChatBubbleLeftRight className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Testimonials
              </span>
            </div>

            <h2 className="mx-auto mb-4 max-w-xl text-4xl font-normal text-white lg:text-5xl">
              Trusted by forward-thinking teams
            </h2>

            <p className="mx-auto max-w-xl text-lg text-white/60">
              Empowering clients with high-quality AI & data solutions
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={100}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
              }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full shrink-0 px-4"
                    style={{
                      scrollSnapAlign: "start",
                    }}
                  >
                    <div className="mx-auto max-w-4xl">
                      <div className="flex flex-col items-stretch gap-6 md:flex-row">
                        {/* Image */}
                        <div className="relative w-full md:w-1/3">
                          <div className="relative h-72 overflow-hidden rounded-xl">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                            />

                            {/* Stat badge */}
                            <div className="absolute right-4 bottom-4 left-4">
                              <div className="rounded-xl bg-black/60 p-4 shadow-lg">
                                <div>
                                  <div className="text-primary mb-1 text-2xl font-semibold">
                                    {testimonialStats[index]?.value}
                                  </div>
                                  <div className="text-sm font-semibold text-gray-100">
                                    {testimonialStats[index]?.label}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-between py-4">
                          <div className="mb-6">
                            <FaQuoteLeft className="text-primary mb-4 size-7 opacity-50" />
                            <p className="text-lg leading-relaxed text-white md:text-xl">
                              "{testimonial.quote}"
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="mb-1 font-medium text-white">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-white/60">
                                {testimonial.role}, {testimonial.company}
                              </div>
                            </div>

                            <div className="flex gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <HiStar
                                  key={i}
                                  className="fill-primary text-primary h-4 w-4"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-10 flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "h-2 w-6 bg-white"
                      : "h-2 w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 z-10 flex size-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 lg:size-12 lg:-translate-x-4"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="size-6 text-white" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 z-10 flex size-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 lg:size-12 lg:translate-x-4"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="size-6 text-white" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
