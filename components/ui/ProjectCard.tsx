import { HiOutlineExternalLink, HiOutlineTrendingUp } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

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
    <div className="group hover:border-primary/30 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Actions */}
        <div className="absolute right-4 bottom-4 flex items-center gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary/30 hover:border-primary/50 rounded-lg border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition-all duration-300 hover:scale-110"
              title="View Demo"
            >
              <HiOutlineExternalLink className="h-4 w-4 text-white" />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary/30 hover:border-primary/50 rounded-lg border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition-all duration-300 hover:scale-110"
              title="View Code"
            >
              <FaGithub className="h-4 w-4 text-white" />
            </a>
          )}
        </div>

        {/* Category */}
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
          <h3 className="mb-2 text-xl font-medium text-white transition-colors duration-300 group-hover:text-[#A8FF8D]">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-white/60">
            {description}
          </p>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary rounded-lg border px-3 py-1 text-xs font-medium transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="flex items-center gap-2 border-t border-white/10 pt-3">
            <HiOutlineTrendingUp className="h-4 w-4 text-green-400" />
            <p className="text-sm font-medium text-green-400">{metrics}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
