import { C, fadeUp, inner, PERSON} from '../Constants'
import useInView from "../hooks/useInView";
import SectionLabel from "../components/SectionLabel";


function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} style={{ width: "100%", padding: "120px 0" }}>
      <div style={inner}>
        <SectionLabel label="About" inView={inView} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", marginTop: 52 }}>
          <div style={fadeUp(inView, 0.1)}>
            <h2 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, letterSpacing: -1.5, color: C.text, marginBottom: 24, lineHeight: 1.15 }}>
              Building systems that scale,<br /><span style={{ color: C.accent }}>teams that last.</span>
            </h2>
            <p style={{ color: C.dim, lineHeight: 1.9, fontSize: 15, marginBottom: 18 }}>
              I'm a Senior Staff Software Engineer and Tech Lead based in San Jose, CA. Over 8+ years I've progressed from building large-scale AngularJS apps to leading the end-to-end technical strategy of enterprise AIOps platforms at Palo Alto Networks.
            </p>
            <p style={{ color: C.dim, lineHeight: 1.9, fontSize: 15 }}>
              I hold an MS in Computer Science from Santa Clara University (GPA 3.88) and a BE in Electronics from the University of Pune. Outside engineering, I'm an active Marathi theatre artist — the best interfaces, like the best performances, are crafted for the audience first.
            </p>
          </div>
          <div style={{ ...fadeUp(inView, 0.2), display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["Current Role",   "Senior Staff SWE · Palo Alto Networks"],
              ["Education",      "MS CS · Santa Clara University (GPA 3.88)"],
              ["Location",       "San Jose, CA"],
              ["Specialization", "Full-Stack · AIOps · Platform Engineering"],
              ["Email",          PERSON.email],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 8 }}>
                <span style={{ fontSize: 11, color: C.muted, letterSpacing: 0.5, textTransform: "uppercase" }}>{label}</span>
                <span style={{ fontSize: 13, color: C.dim, fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;