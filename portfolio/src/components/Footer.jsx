import { useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer style={{
        background: "#010610",
        borderTop: "1px solid rgba(56,189,248,0.09)",
        padding: "clamp(36px,5vw,60px) 5vw 22px",
        fontFamily: "'DM Sans',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Ambient glow */}
        <div style={{
          position: "absolute",
          width: 500,
          height: 180,
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse,rgba(56,189,248,0.04),transparent 70%)",
          pointerEvents: "none"
        }} />

        <div className="ft-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1.4fr",
          gap: "clamp(20px,4vw,40px)",
          marginBottom: 36,
          position: "relative"
        }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 700, color: "#f0f6ff" }}>
              <span style={{ color: "#38bdf8" }}>&lt;/&gt;</span>{" "}
              <span style={{ color: "#38bdf8" }}>Shehara's</span> Portfolio
            </p>
            <p style={{ fontSize: 13, color: "#7a95c0", lineHeight: 1.7 }}>
              Building digital solutions and bringing ideas to life through code.
            </p>
            <div style={{ width: 56, height: 1.5, background: "linear-gradient(90deg,#38bdf8,transparent)", borderRadius: 2 }} />
            <p style={{ fontSize: 13, color: "#7a95c0" }}>
              Let's create something <span style={{ color: "#38bdf8" }}>extraordinary</span>! 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#f0f6ff", marginBottom: 14, letterSpacing: "0.5px" }}>
              Quick Links
            </p>
            {["About Me", "Skills", "Experience", "Projects", "Timeline"].map(l => (
              <FLink key={l} label={l} href={`#${l.toLowerCase().replace(" ", "")}`} />
            ))}
          </div>

          {/* Resources */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#f0f6ff", marginBottom: 14, letterSpacing: "0.5px" }}>
              Resources
            </p>
            {[
              { l: "Certificates", h: "#certificates" },
              { l: "Resume", h: "/SHEHARA'S RESUME-1.pdf" },
              { l: "GitHub", h: "https://github.com/Sheharabanu-J" },

              { l: "Contact", h: "#contact" },
            ].map(({ l, h }) => (
              <FLink key={l} label={l} href={h} ext={h.startsWith("http") || h.endsWith(".pdf")} />
            ))}
          </div>

          {/* Let's Connect */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#f0f6ff", marginBottom: 14, letterSpacing: "0.5px" }}>
              Let's Connect
            </p>
            <p style={{ fontSize: 13, color: "#7a95c0", marginBottom: 14, lineHeight: 1.6 }}>
              I'm open to new opportunities and exciting collaborations.
            </p>
            <a
              href="mailto:jamaljamal6330@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(56,189,248,0.08)",
                border: "1px solid rgba(56,189,248,0.22)",
                borderRadius: 10,
                padding: "9px 14px",
                fontSize: 12.5,
                color: "#38bdf8",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(56,189,248,0.16)";
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.45)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(56,189,248,0.08)";
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.22)";
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              jamaljamal6330@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 18,
          borderTop: "1px solid rgba(56,189,248,0.07)",
          flexWrap: "wrap",
          gap: 10
        }}>
          <p style={{ fontSize: 12, color: "#3d4f68" }}>© {year} Shehara's Portfolio. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "#3d4f68" }}>❤️ Built with passion and lots of coffee ☕</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "rgba(56,189,248,0.07)",
              border: "1px solid rgba(56,189,248,0.18)",
              color: "#38bdf8",
              fontSize: 12,
              borderRadius: 7,
              padding: "5px 13px",
              cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 5
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(56,189,248,0.07)"; }}
          >
            Back to top ↑
          </button>
        </div>
      </footer>

      {/* Responsive Styles for Footer */}
      <style>{`
        @media (max-width: 1024px) {
          .ft-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .ft-grid { grid-template-columns: 1fr !important; }
          .ft-bottom { flex-direction: column !important; align-items: center !important; text-align: center; }
        }
      `}</style>
    </>
  );
}

function FLink({ label, href, ext }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target={ext ? "_blank" : "_self"}
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: h ? 9 : 6,
        fontSize: 13,
        color: h ? "#38bdf8" : "#7a95c0",
        textDecoration: "none",
        marginBottom: 9,
        transition: "all 0.22s ease",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <span style={{ color: "#38bdf8", fontSize: 14, fontWeight: 700, lineHeight: 1 }}>›</span>
      {label}
    </a>
  );
}
