import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const isProjectDetail = pathname.startsWith("/project/");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Route-aware html classes: disable ambient animation & smooth scroll on detail
    const html = document.documentElement;
    if (isProjectDetail) {
      html.classList.add("project-detail");
      html.classList.remove("smooth-scroll");
    } else {
      html.classList.remove("project-detail");
      // Enable smooth scrolling on homepage for anchor navigation
      html.classList.add("smooth-scroll");
    }
  }, [isProjectDetail]);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch {
      window.scrollTo(0, 0);
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default ScrollToTop;
