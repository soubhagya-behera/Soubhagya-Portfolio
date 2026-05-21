import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
