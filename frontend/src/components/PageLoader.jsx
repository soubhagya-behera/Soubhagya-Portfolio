import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 350);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-night/95"
        >
          <div className="relative grid place-items-center">
            <div className="absolute h-32 w-32 rounded-full bg-gradient-to-r from-cyanGlow/16 to-violetGlow/16 blur-xl" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="h-20 w-20 rounded-full border-[3px] border-white/5 border-t-cyanGlow border-r-violetGlow shadow-glow"
            />
            <span className="absolute text-lg font-black tracking-[0.22em] text-white">
              SB
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;
