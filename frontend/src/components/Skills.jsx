import { motion } from 'framer-motion';
import { skillGroups, skillLevels } from '../data/portfolioData';
import SectionHeading from './SectionHeading.jsx';

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading eyebrow="Skills" title="Technologies I use to build scalable full-stack applications">
        Focused on Java backend systems, REST API development, responsive frontend engineering, authentication workflows, and scalable application architecture.
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="premium-border glass-card group rounded-3xl p-6 transition duration-300 hover:border-cyanGlow/40 hover:shadow-cyan"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} shadow-lg shadow-black/25`}
              >
                <Icon className="text-2xl text-white transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
              </motion.div>
              <h3 className="text-xl font-bold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skillLevels.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass-card group rounded-2xl p-5 transition duration-300 hover:border-cyanGlow/35 hover:shadow-cyan"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyanGlow/10 text-cyanGlow transition duration-300 group-hover:bg-cyanGlow/15 group-hover:shadow-cyan">
                    <Icon className="text-lg" />
                  </span>
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span className="text-sm text-slate-300">{skill.level}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + index * 0.03, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-violetGlow via-fuchsia-400 to-cyanGlow shadow-cyan"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
