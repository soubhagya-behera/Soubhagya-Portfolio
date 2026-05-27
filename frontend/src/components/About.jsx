import { motion } from "framer-motion";
import { FiCode, FiLayers, FiTarget } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";

const cards = [
  {
    icon: FiTarget,
    title: "Career Objective",
    body: "Focused on building scalable, secure, and user-focused full-stack applications using Java, Spring Boot, React, and modern backend technologies.",
  },
  {
    icon: FiCode,
    title: "Development Focus",
    body: "Java, Spring Boot, React, REST APIs, scalable backend systems, and clean responsive UI development.",
  },
  {
    icon: FiLayers,
    title: "Learning Mindset",
    body: "Continuously improving through real-world projects, backend problem solving, debugging, and modern development practices.",
  },
];

function About() {
  return (
    <section id="about" className="section-shell !py-[4.5rem] lg:!py-[5.5rem]">
      <SectionHeading
        eyebrow="About"
        title="Focused on building practical full-stack skills"
      >
        I am an MCA student at USBM with a strong interest in Java Full Stack
        Development and modern web engineering.
      </SectionHeading>

      <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="premium-border glass-card flex h-full flex-col justify-center rounded-3xl p-6 sm:p-7"
        >
          <h3 className="text-2xl font-bold">Soubhagya Kumar Behera</h3>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Passionate about creating modern, scalable, and user-focused web applications with clean backend architecture and responsive frontend experiences.
            <br />
            <br />I enjoy building scalable applications using Spring Boot, REST APIs, MySQL, and React through practical real-world projects.
            <br/>
            <br/>I continuously improve my development skills through real-world projects, backend system design, API development, and modern full-stack technologies.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Java",
              "Spring Boot",
              "REST APIs",
              "MySQL",
              "React",
              "Backend Architecture",
              "Responsive UI",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyanGlow/20 bg-white/5 px-4 py-2 text-sm text-cyanGlow"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card group flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:border-cyanGlow/40 hover:shadow-cyan sm:p-6 lg:min-h-[9.5rem]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyanGlow/10 text-cyanGlow transition group-hover:shadow-cyan">
                  <Icon className="text-2xl" />
                </span>
                <h4 className="mt-4 text-lg font-bold">{card.title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {card.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
