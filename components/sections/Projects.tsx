"use client";

import { useState, useRef } from "react";
import { projects, categories, categoryIcons, Category } from "@/data";
import FadeIn from "../animations/FadeIn";
import ProjectCard from "../ui/ProjectCard";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineBriefcase,
} from "react-icons/hi2";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    scrollContainerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth / 3;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () =>
    scrollToIndex(
      Math.min(currentIndex + 1, Math.max(0, filteredProjects.length - 3)),
    );
  const prevSlide = () => scrollToIndex(Math.max(currentIndex - 1, 0));

  return (
    <section id="projects" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/20 absolute top-1/3 right-0 size-96 rounded-full opacity-20 blur-3xl" />
        <div className="bg-primary/20 absolute bottom-1/3 left-0 size-96 rounded-full opacity-20 blur-3xl" />
        <div className="bg-primary/10 absolute top-1/2 right-1/3 size-96 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <div className="border-primary/30 bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <HiOutlineBriefcase className="text-primary size-4" />
              <span className="text-primary text-sm font-medium">My Work</span>
            </div>

            <h2 className="mb-4 font-normal text-white">Featured Projects</h2>

            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Showcasing my best work in AI/ML & Data Engineering
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative rounded-full px-6 py-3 font-medium transition ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition ${
                      isActive
                        ? "bg-primary/20"
                        : "border border-white/10 bg-white/5 group-hover:bg-white/10"
                    }`}
                  />
                  <div className="relative flex items-center gap-2">
                    <Icon className="size-4" />
                    <span className="text-sm">{category}</span>
                  </div>
                  {isActive && (
                    <div className="bg-primary absolute inset-0 -z-10 rounded-full opacity-50 blur-xl" />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="hide-scrollbar snap-x snap-mandatory overflow-x-auto scroll-smooth"
            >
              <div className="flex gap-6 pb-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full shrink-0 snap-start md:w-[calc(50%-12px)] lg:w-[calc(33.333%-1rem)]"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {filteredProjects.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  aria-label="Previous projects"
                  className="absolute top-1/2 left-0 z-10 flex size-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 lg:size-12 lg:-translate-x-4"
                >
                  <HiChevronLeft className="size-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - 3}
                  aria-label="Next projects"
                  className="absolute top-1/2 right-0 z-10 flex size-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 lg:size-12 lg:translate-x-4"
                >
                  <HiChevronRight className="size-6 text-white" />
                </button>

                <div className="mt-8 flex items-center justify-center gap-2">
                  {Array.from({
                    length: Math.max(0, filteredProjects.length - 2),
                  }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "bg-primary h-2 w-6"
                          : "h-2 w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
