import { FaArrowUp } from "react-icons/fa";
import { profile, socialLinks } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {profile.name}. Crafted with React & creativity.
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Java Full Stack Developer Portfolio
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isEmail = link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                aria-label={link.label}
                href={link.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noreferrer"}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-lg text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/50 hover:bg-cyanGlow/10 hover:text-cyanGlow hover:shadow-cyan"
              >
                <Icon />
              </a>
            );
          })}
          <a
            aria-label="Back to top"
            href="#home"
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-violetGlow to-cyanGlow text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
