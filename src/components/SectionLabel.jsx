import {fadeUp, C} from '../Constants'

function SectionLabel({ label, inView, center }) {
  return (
    <div style={{ ...fadeUp(inView, 0), textAlign: center ? "center" : "left" }}>
      <span style={{ fontSize: 11, letterSpacing: 4, color: C.accent, textTransform: "uppercase", fontWeight: 700 }}>
        — {label}
      </span>
    </div>
  );
}

export default SectionLabel;