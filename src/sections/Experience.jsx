import { useState} from 'react'
import { EXPERIENCE, C, fadeUp, inner} from '../Constants'
import useInView from "../hooks/useInView";
import SectionLabel from '../components/SectionLabel'

function Experience() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);
  const exp = EXPERIENCE[active];
  return (
    <section id="experience" ref={ref} style={{ width: "100%", padding: "120px 0", background: C.card, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div style={inner}>
        <SectionLabel label="Experience" inView={inView} />
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 48, marginTop: 52 }}>
          <div style={fadeUp(inView, 0.1)}>
            {EXPERIENCE.map((e, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: "100%", textAlign: "left", background: active === i ? e.color + "0D" : "transparent",
                border: "none", borderLeft: `2px solid ${active === i ? e.color : C.border}`,
                cursor: "pointer", padding: "15px 18px", borderRadius: "0 6px 6px 0",
                marginBottom: 4, transition: "all 0.2s",
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: active === i ? e.color : C.dim, marginBottom: 3 }}>{e.company}</div>
                <div style={{ fontSize: 11, color: C.muted }}>{e.tenure}</div>
              </button>
            ))}
          </div>
          <div key={active} style={{ ...fadeUp(inView, 0.2), animation: "fadeIn 0.3s ease" }}>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: exp.color, textTransform: "uppercase", marginBottom: 8 }}>{exp.tenure} · {exp.location}</div>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, color: C.text, letterSpacing: -0.5, margin: "0 0 4px" }}>{exp.role}</h3>
              <div style={{ fontSize: 15, color: C.muted }}>{exp.company}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {exp.highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: exp.color, marginTop: 8, flexShrink: 0 }} />
                  <p style={{ margin: 0, fontSize: 14, color: C.dim, lineHeight: 1.8 }}>{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:none } }`}</style>
    </section>
  );
}

export default Experience;