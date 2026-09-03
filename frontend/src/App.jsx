import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import PageLoader from './components/PageLoader.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';

const ProjectDetails = lazy(() => import("./pages/ProjectDetails.jsx"));

function AppRoutes() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");

  return (
    <>
      <ScrollToTop />
      <PageLoader />
      {!isProjectDetail && <ScrollProgress />}
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-night pt-32 text-center text-slate-400">Loading project...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-night text-white">
      <AppRoutes />
    </div>
  );
}

export default App;