import {fadeUp, PROJECTS, C, inner} from '../Constants';
import { useState} from 'react'


function ProjectCard({ project: p, inView, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      ...fadeUp(inView, delay),
      background: C.card, border: `1px solid ${hovered ? p.accent + "55" : C.border}`,
      borderRadius: 12, padding: 26,
      transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
      transform: hovered ? "translateY(-5px)" : "translateY(0)",
      boxShadow: hovered ? "0 20px 48px rgba(0,0,0,0.35)" : "none",
    }}>
      <div style={{ fontSize: 30, marginBottom: 14 }}>{p.icon}</div>
      <h4 style={{ fontSize: 16, fontWeight: 700, color: C.text, margin: "0 0 10px", letterSpacing: -0.3 }}>{p.title}</h4>
      <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.78, margin: "0 0 18px" }}>{p.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.tags.map(tag => (
          <span key={tag} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 20, fontWeight: 600, background: p.accent + "15", color: p.accent, border: `1px solid ${p.accent}30` }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;