import About from './components/About';
import Achievements from './components/Achievements';
import BeyondData from './components/BeyondData';
import Contact from './components/Contact';
import Currently from './components/Currently';
import DataVisualization from './components/DataVisualization';
import Entrepreneurship from './components/Entrepreneurship';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Toolkit from './components/Toolkit';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <DataVisualization />
        <Achievements />
        <Entrepreneurship />
        <BeyondData />
        <Toolkit />
        <Currently />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
