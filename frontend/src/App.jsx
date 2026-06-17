import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import PageLoader from './components/PageLoader.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Home from './pages/Home.jsx';
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="min-h-screen bg-night text-white">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
    path="/project/:slug"
    element={<ProjectDetails />}
  />
      </Routes>
    </div>
  );
}

export default App;