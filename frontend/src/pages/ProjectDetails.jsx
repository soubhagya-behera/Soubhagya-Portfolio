import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolioData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-32 text-center text-white">Project Not Found</div>
    );
  }

  return (
    <section className="min-h-screen bg-night pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-cyan-300 hover:text-white"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-xl text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Screenshot */}
        <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-2 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[700px] object-cover rounded-2xl transition duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Project Overview */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
            Project Overview
          </h2>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 px-6 py-4 backdrop-blur-xl hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Role
              </p>

              <p className="mt-2 font-semibold text-white">{project.role}</p>
            </div>

            <div className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 px-6 py-4 backdrop-blur-xl hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Duration
              </p>

              <p className="mt-2 font-semibold text-white">{project.duration}</p>
            </div>

            <div className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 px-6 py-4 backdrop-blur-xl hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Team Size
              </p>

              <p className="mt-2 font-semibold text-white">
                {project.teamSize}
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 px-6 py-4 backdrop-blur-xl hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Status
              </p>

              <p className="mt-2 font-semibold text-emerald-400">
                {project.status}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-4 py-2 text-sm text-cyan-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
            Project Highlights
          </h2>

          <div className="grid gap-4 md:grid-cols-4">
            {project.metrics?.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-violet-500/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 px-6 py-4 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition"
              >
                <p className="font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
            Key Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {project.features?.map((feature) => (
              <div
                key={feature}
                className="group flex items-center gap-3 rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-md hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-bold">
                  ✓
                </div>

                <span className="text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learnings */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
            Challenges & Learnings
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {project.learnings?.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-md hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-bold">
                  ✓
                </div>

                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        {/* Explore Project */}
        <div className="mt-20 text-center">
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
            Explore Project
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="glow-button px-8 py-3"
            >
              <FaGithub />
              Source Code
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="ghost-button px-8 py-3"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;