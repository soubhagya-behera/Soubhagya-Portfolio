import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/portfolioData";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const current = navLinks
        .map((link) => link.href.replace("#", ""))
        .findLast((id) => {
          const section = document.getElementById(id);
          return section && section.offsetTop - 120 <= window.scrollY;
        });

      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-night/84 shadow-glow backdrop-blur-md"
          : "border-white/[0.03] bg-night/50 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={handleClick}
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violetGlow to-cyanGlow text-lg font-black shadow-glow">
            SB
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold tracking-wide text-white">
              Soubhagya
            </span>
            <span className="block text-xs tracking-[0.2em] text-cyanGlow/80 uppercase">
              Java Full Stack
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-full border border-cyanGlow/25 bg-cyanGlow/10"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-2xl text-white shadow-lg shadow-black/20 transition hover:border-cyanGlow/60 md:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-5 mb-4 overflow-hidden rounded-3xl border border-white/10 bg-night/95 p-3 shadow-glow backdrop-blur-sm md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-cyanGlow"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
