import { useState, useEffect} from 'react'
import { C, inner} from '../Constants'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 64,
      background: scrolled ? "rgba(10,13,20,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      <div style={{ ...inner, height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 800, fontSize: 20, color: C.text, letterSpacing: -0.5 }}>
          KP<span style={{ color: C.accent }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {["About","Experience","Projects","Stack","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: 13, fontWeight: 500, textDecoration: "none", color: C.muted, letterSpacing: 0.3,
            }}
            onMouseEnter={e => e.target.style.color = C.accent}
            onMouseLeave={e => e.target.style.color = C.muted}
            >{l}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;