
import Navbar from "./sections/Navbar";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import { C } from './Constants'


// ── ROOT ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: C.surface, color: C.text, fontFamily: "system-ui, -apple-system, sans-serif", width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}