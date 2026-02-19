import {C, inner} from '../Constants'

function Footer() {
  return (
    <footer style={{ width: "100%", borderTop: `1px solid ${C.border}`, padding: "24px 0" }}>
      <div style={{ ...inner, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 800, fontSize: 18, color: C.muted }}>KP<span style={{ color: C.accent }}>.</span></span>
        <span style={{ fontSize: 12, color: C.muted }}>Designed & Built by Kalyani Patil · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
