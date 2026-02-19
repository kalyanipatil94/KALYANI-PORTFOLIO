import { C, fadeUp, inner, PERSON} from '../Constants'
import useInView from "../hooks/useInView";
import useTypewriter from "../hooks/useTypewriter";

function Hero() {
  const role = useTypewriter(PERSON.roles);
  const [ref, inView] = useInView(0.05);

  return (
    <section ref={ref} style={{ width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          radial-gradient(ellipse at 75% 50%, rgba(110,231,183,0.06) 0%, transparent 55%),
          radial-gradient(ellipse at 10% 60%, rgba(147,197,253,0.04) 0%, transparent 40%),
          linear-gradient(rgba(26,32,53,0.45) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26,32,53,0.45) 1px, transparent 1px)
        `,
        backgroundSize: "auto, auto, 56px 56px, 56px 56px",
      }} />

      <div style={{ ...inner, position: "relative", paddingTop: 100, paddingBottom: 80 }}>
        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 72, alignItems: "center" }}>

          {/* LEFT — text content */}
          <div>
            <div style={{ ...fadeUp(inView, 0), fontSize: 11, letterSpacing: 5, color: C.accent, textTransform: "uppercase", marginBottom: 28, fontWeight: 600 }}>
              — Available for Senior Roles
            </div>
            <h1 style={{
              ...fadeUp(inView, 0.1),
              fontSize: "clamp(44px, 5.5vw, 80px)", fontWeight: 800,
              lineHeight: 1.0, letterSpacing: -3, color: C.text, margin: "0 0 20px",
            }}>
              {PERSON.name}
            </h1>
            <div style={{ ...fadeUp(inView, 0.2), height: 52, display: "flex", alignItems: "center", marginBottom: 28 }}>
              <span style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 600, color: C.accent }}>
                {role}<span style={{ animation: "blink 1s step-end infinite" }}>|</span>
              </span>
            </div>
            <p style={{ ...fadeUp(inView, 0.3), fontSize: 16, color: C.dim, lineHeight: 1.85, maxWidth: 520, marginBottom: 44 }}>
              {PERSON.summary}
            </p>

            {/* ✅ "Email Me" opens mail client, GitHub updated */}
            <div style={{ ...fadeUp(inView, 0.4), display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={`mailto:${PERSON.email}`} style={{
                background: C.accent, color: "#0A0D14", padding: "13px 32px",
                borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: 0.3,
              }}>
                Email Me ✉️
              </a>
              <a href={PERSON.github} target="_blank" rel="noreferrer" style={{
                background: "transparent", color: C.text, padding: "13px 32px",
                border: `1px solid ${C.border}`, borderRadius: 6, fontSize: 13,
                fontWeight: 600, textDecoration: "none",
              }}
              onMouseEnter={e => { e.target.style.borderColor = C.accent; e.target.style.color = C.accent; }}
              onMouseLeave={e => { e.target.style.borderColor = C.border; e.target.style.color = C.text; }}
              >
                GitHub ↗
              </a>
            </div>

            {/* Stats */}
            <div style={{ ...fadeUp(inView, 0.5), display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap" }}>
              {[["8+","Years Experience"],["4","Companies"],["3.88","MS GPA at SCU"],["1","Patent Pending"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: C.accent, letterSpacing: -1 }}>{val}</div>
                  <div style={{ fontSize: 11, color: C.muted, letterSpacing: 0.5, marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo */}
          <div style={{ ...fadeUp(inView, 0.3), display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            {/* Glowing ring around photo */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <div style={{
                position: "absolute", inset: -3, borderRadius: "50%",
                background: `conic-gradient(${C.accent} 0%, #93C5FD 33%, #C4B5FD 66%, ${C.accent} 100%)`,
                animation: "spin 10s linear infinite",
                filter: "blur(1px)",
              }} />
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: C.surface, margin: 3,
              }} />
              <img
                src={PERSON.photo}
                alt="Kalyani Patil"
                style={{
                  position: "relative", zIndex: 1,
                  width: 280, height: 280, borderRadius: "50%",
                  objectFit: "cover", display: "block", margin: 6,
                }}
              />
            </div>

            {/* "Open to Work" badge below photo */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 20, padding: "8px 16px",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%", background: C.accent,
                boxShadow: `0 0 0 3px ${C.accent}30`,
                animation: "pulse 2s ease-in-out infinite",
              }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: C.dim }}>Open to Work · San Jose, CA</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes spin  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </section>
  );
}

export default Hero;