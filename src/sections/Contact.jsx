import {fadeUp, PERSON, C, inner} from '../Constants'
import SectionLabel from '../components/SectionLabel'
import useInView from "../hooks/useInView";


function Contact() {
  const [ref, inView] = useInView();
  return (
    <section id="contact" ref={ref} style={{ width: "100%", padding: "120px 0" }}>
      <div style={{ ...inner, display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>
          <SectionLabel label="Contact" inView={inView} center />
          <h2 style={{ ...fadeUp(inView, 0.1), fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: -1.5, color: C.text, margin: "24px 0 16px", lineHeight: 1.1 }}>
            Let's build something<br /><span style={{ color: C.accent }}>remarkable.</span>
          </h2>
          <p style={{ ...fadeUp(inView, 0.2), color: C.muted, fontSize: 15, lineHeight: 1.8, marginBottom: 48 }}>
            Open to senior engineering roles, tech lead opportunities, and interesting collaborations. Based in San Jose, CA.
          </p>
          <div style={{ ...fadeUp(inView, 0.3), display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            {/* Download Resume */}
            <a
              href="https://drive.google.com/file/d/1Hcjao8vPFsbdtdV5rTfTa7ivhL3ux0Pz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{
                background: C.accent, color: "#0A0D14", padding: "14px 40px",
                borderRadius: 6, fontSize: 14, fontWeight: 700, letterSpacing: 0.3,
                textDecoration: "none", width: "100%", maxWidth: 320, display: "inline-block",
              }}
            >
              ↓ Download Resume
            </a>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              {[["LinkedIn", PERSON.linkedin], ["GitHub", PERSON.github], ["Email", `mailto:${PERSON.email}`]].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                  padding: "10px 22px", border: `1px solid ${C.border}`, borderRadius: 6,
                  fontSize: 13, fontWeight: 600, color: C.dim, textDecoration: "none",
                }}
                onMouseEnter={e => { e.target.style.borderColor = C.accent; e.target.style.color = C.accent; }}
                onMouseLeave={e => { e.target.style.borderColor = C.border; e.target.style.color = C.dim; }}
                >{label} ↗</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;