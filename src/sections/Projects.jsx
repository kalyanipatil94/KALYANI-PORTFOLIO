import { PROJECTS, C, inner, fadeUp} from '../Constants'
import useInView from "../hooks/useInView";
import ProjectCard from './ProjectCard';
import SectionLabel from '../components/SectionLabel'


function Projects() {
  const [ref, inView] = useInView();
  return (
    <section id="projects" ref={ref} style={{ width: "100%", padding: "120px 0" }}>
      <div style={inner}>
        <SectionLabel label="Projects" inView={inView} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 52 }}>
          {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} inView={inView} delay={0.06 * i} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;