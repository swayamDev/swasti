"use client";

import { skills } from "@/data";
import FadeIn from "../animations/FadeIn";
import { HiOutlineSparkles } from "react-icons/hi2";

const Skills = () => {
  const skillCategories: Record<string, typeof skills> = {
    "Core ML & AI": [
      skills.find((s) => s.name === "Machine Learning"),
      skills.find((s) => s.name === "Deep Learning"),
      skills.find((s) => s.name === "TensorFlow / Keras"),
      skills.find((s) => s.name === "PyTorch"),
    ].filter(Boolean) as typeof skills,

    "Data & Programming": [
      skills.find((s) => s.name === "Python"),
      skills.find((s) => s.name === "SQL & PostgreSQL"),
      skills.find((s) => s.name === "Pandas & NumPy"),
      skills.find((s) => s.name === "Data Structures & Algo"),
    ].filter(Boolean) as typeof skills,

    "Engineering & Infra": [
      skills.find((s) => s.name === "FastAPI"),
      skills.find((s) => s.name === "Apache Spark"),
      skills.find((s) => s.name === "MLOps & Docker"),
      skills.find((s) => s.name === "AWS Cloud"),
    ].filter(Boolean) as typeof skills,
  };

  const getProficiencyLevel = (level: string) => {
    const levels: Record<string, number> = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] ?? 50;
  };

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level] ?? "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  return (
    <section id="skills" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute top-1/4 left-0 size-96 rounded-full opacity-50 blur-3xl" />
        <div className="bg-primary/10 absolute right-0 bottom-1/4 size-96 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="mb-16 text-center">
            <div className="border-primary/30 bg-primary/10 mx-auto mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2">
              <HiOutlineSparkles className="text-primary size-4" />
              <span className="text-primary text-sm font-medium">
                My Expertise
              </span>
            </div>
            <h2 className="mb-4 font-normal text-white">
              Skills & Technologies
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              A comprehensive overview of my technical skills and expertise in
              AI, ML, and data engineering.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="hover:border-primary/30 group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="from-primary/30 to-primary/10 h-8 w-1 rounded-full bg-linear-to-b" />
                    <h3 className="text-xl tracking-wide text-white">
                      {category}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {categorySkills.map((skill) => {
                      const IconComponent = skill.icon;
                      const proficiency = getProficiencyLevel(skill.level);

                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-lg bg-white/5 p-2">
                                <IconComponent className="text-primary size-4" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {skill.name}
                                </div>
                                <div className="text-xs text-white/50">
                                  {skill.experience}
                                </div>
                              </div>
                            </div>
                            <span
                              className={`rounded-full border px-2 py-1 text-xs ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          <div className="relative h-1.5 overflow-hidden rounded-full bg-white/5">
                            <div
                              className="from-primary/10 to-primary/80 absolute top-0 left-0 h-full rounded-full bg-linear-to-r transition-all duration-1000 ease-out"
                              style={{ width: `${proficiency}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br transition-all duration-300" />
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
