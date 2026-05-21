import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, socialLinks } from "../data/portfolioData.js";
import TypingText from "./TypingText.jsx";
import profileImage from "../assets/profile.jpeg";

const techBadges = [
  { label: "Java", className: "left-5 top-[4.5rem] sm:left-8 sm:top-20" },
  { label: "Spring Boot", className: "right-5 top-24 sm:right-8 sm:top-24" },
  { label: "React.js", className: "left-6 bottom-36 sm:left-10 sm:bottom-40" },
  { label: "REST APIs", className: "right-6 bottom-36 sm:right-10 sm:bottom-40" },
  { label: "MySQL", className: "left-[48%] top-11 -translate-x-1/2 sm:left-[50%] sm:top-12" },
];

const heroStats = ["Java FullStack", "REST APIs", "3+ Projects"];

function Hero() {
  const githubLink =
    socialLinks.find((link) => link.label === "GitHub")?.href ||
    "https://github.com/";
  const linkedinLink =
    socialLinks.find((link) => link.label === "LinkedIn")?.href ||
    "https://www.linkedin.com/";

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-24 lg:pt-[6.5rem]"
    >
      <div className="absolute inset-0 bg-radial-fade" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 28, 0], y: [0, -18, 0], opacity: [0.28, 0.45, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-36 h-44 w-44 rounded-full bg-violetGlow/25 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -24, 0], y: [0, 22, 0], opacity: [0.22, 0.42, 0.22] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-[8%] h-56 w-56 rounded-full bg-cyanGlow/20 blur-3xl"
      />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-cyanGlow/40 to-transparent" />

      <div className="section-shell relative grid min-h-[calc(100vh-6rem)] items-center gap-10 !py-14 sm:!py-16 lg:min-h-[680px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:min-h-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-[44rem] lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mb-5 inline-flex rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyanGlow shadow-cyan sm:text-sm"
          >
            {profile.role}
          </motion.p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl xl:text-7xl">
            Hi, I am <span className="gradient-text">{profile.name}</span>
          </h1>
          <div className="mt-5 text-xl font-semibold text-slate-100 sm:text-2xl">
            <TypingText
              words={[
                "Java Full Stack",
                "Spring Boot Developer",
                "Backend Engineer",
                "REST API Developer",
              ]}
            />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
            I build scalable full-stack applications using Java, Spring Boot,
            React, REST APIs, and modern database systems. My focus is backend
            architecture, secure API development, responsive UI experiences, and
            practical software solutions that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              className="glow-button"
              href={profile.resume}
              download="Soubhagya-Kumar-Behera-Resume.pdf"
              aria-label="Download Soubhagya Kumar Behera resume"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              className="ghost-button"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              className="ghost-button"
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-[30rem] floating-glow sm:max-w-[34rem] lg:max-w-[36rem] xl:max-w-[39rem]"
        >
          <div className="premium-border glass-card relative aspect-[1.02/1] overflow-hidden rounded-[2rem] p-5 shadow-black/20 sm:p-6">
            <div className="pulse-glow absolute inset-12 rounded-full bg-gradient-to-tr from-violetGlow/[0.12] via-fuchsia-400/[0.07] to-cyanGlow/[0.16] blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanGlow/[0.08] blur-3xl sm:h-96 sm:w-96" />
            <div className="absolute left-1/2 top-[46%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violetGlow/[0.06] blur-2xl sm:h-72 sm:w-72" />
            <div className="spin-slow absolute inset-4 rounded-[2rem] border border-dashed border-cyanGlow/20" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative grid h-full place-items-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/12 via-white/[0.045] to-cyanGlow/[0.07]"
            >
              <div className="absolute -right-10 top-12 h-20 w-20 rounded-full bg-cyanGlow/25 blur-2xl" />
              <div className="absolute -left-10 bottom-24 h-24 w-24 rounded-full bg-violetGlow/[0.16] blur-2xl" />
              {techBadges.map((badge, index) => (
                <motion.span
                  key={badge.label}
                  animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                  transition={{
                    duration: 5.2 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.18,
                  }}
                  whileHover={{ y: -3, scale: 1.025 }}
                  className={`absolute z-20 hidden rounded-full border border-white/[0.08] bg-night/45 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-cyan-100/85 shadow-md shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-cyanGlow/25 hover:bg-cyanGlow/[0.08] hover:text-cyan-50 sm:inline-flex ${badge.className}`}
                >
                  {badge.label}
                </motion.span>
              ))}
              <div className="relative z-10 grid h-52 w-52 place-items-center overflow-hidden rounded-full border border-cyanGlow/35 shadow-cyan ring-8 ring-white/[0.035] sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violetGlow/10 to-cyanGlow/10" />
                <img
                  src={profileImage}
                  alt="Soubhagya Kumar Behera"
                  className="relative h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-5 right-5 z-20 grid grid-cols-3 gap-2 sm:left-6 sm:right-6 sm:gap-3">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.45 + index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-night/68 px-2.5 py-3 text-center shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:border-cyanGlow/35 hover:bg-cyanGlow/10"
                  >
                    <p className="text-[0.68rem] font-bold uppercase leading-snug tracking-[0.12em] text-slate-100 sm:text-xs">
                      {stat}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
