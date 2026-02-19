import SectionLabel from '../components/SectionLabel'
import {fadeUp, TECH, C, inner} from '../Constants';
import useInView from "../hooks/useInView";


function TechStack() {
  const [ref, inView] = useInView();
  return (
    <section id="stack" ref={ref} style={{ width: "100%", padding: "120px 0", background: C.card, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div style={inner}>
        <SectionLabel label="Tech Stack" inView={inView} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 52 }}>
          {TECH.map((cat, i) => (
            <div key={cat.label} style={{ ...fadeUp(inView, 0.07 * i), background: C.surface, border: `1px solid ${cat.color}22`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: cat.color, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>{cat.label}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {cat.items.map(item => (
                  <span key={item} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, fontWeight: 500, background: cat.color + "12", color: cat.color, border: `1px solid ${cat.color}25` }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;