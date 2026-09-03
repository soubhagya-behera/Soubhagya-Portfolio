import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration so route changes always start at top.
    // This is the correct handling for SPA navigation vs. native scrollRestoration.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Use instant behavior to override html { scroll-behavior: smooth } and
    // ensure the page is at (0, 0) immediately after route render.
    // Falls back to 0,0 for browsers that don't support the options object.
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch {
      window.scrollTo(0, 0);
    }
    // Extra fallback for older browsers / mobile webviews
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default ScrollToTop;
