import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading.jsx';

function Projects() {
  return (
    <section id="projects" className="section-shell !py-[4.75rem] lg:!py-[5.75rem]">
      <SectionHeading eyebrow="Projects" title="Project work with recruiter-friendly context">
        Full-stack applications focused on backend architecture, responsive UI,
authentication systems, and scalable REST API development.
      </SectionHeading>

      <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="premium-border glass-card group flex h-full overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-cyanGlow/40 hover:shadow-cyan"
          >
            <div className="flex w-full flex-col">
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br sm:h-72 xl:h-64 ${project.gradient}`}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.imageAlt || `${project.title} screenshot`}
                    loading="lazy"
                    width="900"
                    height="570"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-100 saturate-[1.08] transition duration-700 ease-out group-hover:scale-105 group-hover:saturate-[1.16]"
                  />
                )}
                <div className="absolute inset-4 rounded-3xl border border-white/10 bg-transparent transition duration-500 group-hover:border-cyanGlow/25" />
                <div className="absolute left-7 top-7 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-300/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-2xl font-bold leading-snug text-white">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                {project.metrics && (
                  <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-2 text-center text-[0.72rem]  font-bold uppercase tracking-[0.15em] text-slate-100 shadow-lg shadow-black/15"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-100 shadow-sm shadow-cyanGlow/10 transition group-hover:border-cyanGlow/40 group-hover:bg-cyanGlow/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
                  <a
                    className="ghost-button w-full px-4 py-2.5"
                    href={project.github || 'https://github.com/'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                  >
                    <FaGithub /> View Code
                  </a>
                  <a
                    className={`glow-button w-full px-4 py-2.5 ${project.demo ? '' : 'pointer-events-none opacity-55'}`}
                    href={project.demo || '#home'}
                    target={project.demo ? '_blank' : undefined}
                    rel={project.demo ? 'noreferrer' : undefined}
                    aria-label={project.demo ? `Open ${project.title} live demo` : `${project.title} live demo coming soon`}
                  >
                    <FaExternalLinkAlt /> {project.demo ? 'Live Demo' : 'Coming Soon'}
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
