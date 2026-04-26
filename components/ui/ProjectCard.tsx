import Image from "next/image";
import Link from "next/link";
import { HiArrowTopRightOnSquare, HiArrowTrendingUp } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  category?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    description,
    image,
    technologies,
    metrics,
    demoUrl,
    githubUrl,
    category,
  } = project;

  return (
    <article className="group hover:border-primary/30 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Action links */}
        <div className="absolute right-4 bottom-4 flex items-center gap-3">
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View demo of ${title}`}
              className="hover:bg-primary/30 hover:border-primary/50 rounded-lg border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
              <HiArrowTopRightOnSquare className="size-4 text-white" />
            </Link>
          )}

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code of ${title}`}
              className="hover:bg-primary/30 hover:border-primary/50 rounded-lg border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="size-4 text-white" />
            </Link>
          )}
        </div>

        {/* Category badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="mb-2 text-xl tracking-wide text-white transition-colors duration-300 group-hover:text-[#A8FF8D]">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-white/60">
            {description}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary rounded-lg border px-3 py-1 text-xs font-medium transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="flex items-center gap-2 border-t border-white/10 pt-3">
            <HiArrowTrendingUp className="size-4 shrink-0 text-green-400" />
            <p className="text-sm font-medium text-green-400">{metrics}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
