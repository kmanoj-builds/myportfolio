type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  status?: string;
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "DevConnect",
    category: "Full-Stack Development",
    description:
      "A developer community platform where developers can create profiles, share posts, follow other developers, and build meaningful connections.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    status: "IN PROGRESS",
  },
  {
    number: "02",
    name: "ResolveFlow",
    category: "SaaS · Multi-Tenant Architecture",
    description:
      "A multi-tenant issue-tracking SaaS designed to help teams manage organizations, memberships, and issues with secure tenant-level access.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
    ],
    status: "IN PROGRESS",
  },
  {
    number: "03",
    name: "Movie Finder",
    category: "Frontend Development",
    description:
      "A movie discovery application that integrates the TMDB API to retrieve movie information and help users explore films.",
    technologies: ["React", "Tailwind CSS", "TMDB API"],
  },
  {
    number: "04",
    name: "GenAI Security Assessment",
    category: "Final-Year Project · AI Security",
    description:
      "An AI-powered GenAI security and compliance assessment platform designed to evaluate application risks, identify compliance gaps, and provide security recommendations.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OWASP",
      "NIST AI RMF",
      "MITRE ATLAS",
    ],
    status: "IN PROGRESS",
    demo: "https://final-year-project-three-flax.vercel.app/",
    github: "https://github.com/kmanoj-builds/final-year-project",
  },
];

const ProjectCard = ({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) => {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden border border-[#80500F]/50 bg-[#38230A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF9F0A] hover:bg-[#42290D] ${
        featured ? "md:p-9" : "md:p-7"
      }`}
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF9F0A]/[0.07] blur-3xl transition-all duration-500 group-hover:bg-[#FF9F0A]/[0.14]" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Top row */}
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-sm text-[#A68B62]">
            / {project.number}
          </span>

          {project.status && (
            <span className="border border-[#FF9F0A]/40 bg-[#FF9F0A]/10 px-3 py-1 font-mono text-[10px] tracking-wider text-[#FFC04A]">
              {project.status}
            </span>
          )}
        </div>

        {/* Content */}
        <div className={featured ? "max-w-3xl" : ""}>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-[#FF9F0A]">
            {project.category}
          </p>

          <h2
            className={`mb-4 font-display font-bold uppercase leading-[0.95] text-[#FFF4DC] transition-colors group-hover:text-[#FFC04A] ${
              featured ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
            }`}
          >
            {project.name}
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-[#D1B88D]">
            {project.description}
          </p>
        </div>

        {/* Technology chips */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-[#80500F]/50 bg-[#241605]/70 px-3 py-1.5 font-mono text-[11px] text-[#D1B88D]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.demo || project.github) && (
          <div className="mt-auto flex flex-wrap gap-5 border-t border-[#80500F]/40 pt-5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#FFC04A] transition hover:text-[#FFF4DC]"
              >
                Live Demo ↗
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#D1B88D] transition hover:text-[#FFF4DC]"
              >
                Source Code ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [devConnect, resolveFlow, movieFinder, genAISecurity] = projects;

  return (
    <section className="min-h-screen bg-[#241605] text-[#FFF4DC]">
      {/* Introduction */}
      <div className="site-container border-b border-[#80500F]/50 py-20 md:py-28">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
          A selection of my work / 2026
        </p>

        <h1 className="max-w-4xl font-display text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
          Things I've
          <span className="block text-[#FF9F0A]">Built.</span>
        </h1>

        <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <p className="max-w-xl text-sm leading-7 text-[#D1B88D] md:text-base">
            A collection of projects where I explore software engineering,
            full-stack development, application architecture, and problem
            solving.
          </p>

          <span className="font-mono text-xs text-[#A68B62]">
            04 SELECTED PROJECTS
          </span>
        </div>
      </div>

      {/* Project collection */}
      <div className="site-container py-16 md:py-24">
        <div className="flex flex-col gap-5 md:gap-6">
          {/* First: Full-width featured project */}
          <ProjectCard project={devConnect} featured />

          {/* Middle: Two-column project cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <ProjectCard project={resolveFlow} />
            <ProjectCard project={movieFinder} />
          </div>

          {/* Fourth: Full-width featured project */}
          <ProjectCard project={genAISecurity} featured />
        </div>

        {/* Closing statement */}
        <div className="mt-20 border-t border-[#80500F]/50 pt-10 md:mt-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
            What's next?
          </p>

          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-none text-[#FFF4DC] md:text-7xl">
            Always building.
            <span className="block text-[#FF9F0A]">Always learning.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
