import { motion } from "framer-motion";
import { FiCheckCircle, FiBookOpen } from "react-icons/fi";

import SectionHeading from "./SectionHeading";
import AboutCard from "./AboutCard";
import StatCard from "./StatCard";

import { aboutData } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section-shell !py-[4.5rem] lg:!py-[5.5rem]">
      <SectionHeading
        eyebrow="About"
        title="Building secure, scalable software with modern Java technologies."
      >
        Passionate about transforming ideas into production-ready applications
        through clean architecture, scalable backend systems, and intuitive user
        experiences.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <AboutCard title="👨 About Me">
              <p className="leading-8 text-slate-300">
                MCA Graduate passionate about building secure, scalable and
                user-focused web applications using Java, Spring Boot and React.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Java",
                  "Spring Boot",
                  "React",
                  "REST APIs",
                  "Backend",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyanGlow/20 bg-white/5 px-4 py-2 text-sm text-cyanGlow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AboutCard>
          </motion.div>

          {/* What I Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <AboutCard title="🚀 What I Build">
              <div className="space-y-4">
                {aboutData.builds.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FiCheckCircle className="text-cyanGlow text-xl" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </AboutCard>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Developer Snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <AboutCard title="📊 Developer Snapshot">
              <div className="grid grid-cols-2 gap-4">
                {aboutData.stats.map((item) => (
                  <StatCard
                    key={item.title}
                    title={item.title}
                    value={item.value}
                  />
                ))}
              </div>
            </AboutCard>
          </motion.div>

          {/* Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <AboutCard title="🌱 Currently Learning">
              <div className="space-y-4">
                {aboutData.learning.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FiBookOpen className="text-cyanGlow text-xl" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </AboutCard>
          </motion.div>
        </div>
      </div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mt-8"
      >
        <div className="glass-card premium-border flex flex-col gap-6 rounded-3xl p-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-bold">💼 Open To Work</h3>
            <p className="mt-3 max-w-xl leading-8 text-slate-300">
              Actively seeking opportunities as a Java Full Stack Developer where
              I can contribute, learn modern technologies, and build scalable
              software solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="ghost-button">Java Developer</span>
            <span className="ghost-button">Backend Developer</span>
            <span className="ghost-button">Software Engineer</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;