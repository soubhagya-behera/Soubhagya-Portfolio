import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65 }}
      className="mx-auto mb-10 max-w-4xl text-center lg:mb-14"
    >
      <p className="mb-4 inline-flex rounded-full border border-cyanGlow/20 bg-cyanGlow/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyanGlow shadow-cyan">
        {eyebrow}
      </p>
      <h2 className="mx-auto max-w-[58rem] font-display text-3xl font-bold leading-[1.18] tracking-tight sm:text-4xl sm:leading-[1.16] lg:text-[3.2rem] lg:leading-[1.12]">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
          {children}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
