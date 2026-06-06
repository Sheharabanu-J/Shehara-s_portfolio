import { useEffect, useRef, useState } from "react";

const orbitSkills = [
  { label: "Python", pct: 95, emoji: "🐍", color: "#3b82f6", angle: 0 },
  { label: "CSS", pct: 90, emoji: "🎨", color: "#38bdf8", angle: 45 },
  { label: "React", pct: 75, emoji: "⚛️", color: "#61dafb", angle: 90 },
  { label: "SQL", pct: 90, emoji: "🗄️", color: "#818cf8", angle: 135 },
  { label: "Git & GitHub", pct: 85, emoji: "🔀", color: "#f97316", angle: 180 },
  { label: "Node.js", pct: 70, emoji: "🟩", color: "#4ade80", angle: 225 },
  { label: "JavaScript", pct: 80, emoji: "⚡", color: "#fbbf24", angle: 270 },
  { label: "HTML", pct: 90, emoji: "🟧", color: "#fb923c", angle: 315 },
];

const languages = [
  { name: "Python", pct: 95 },
  { name: "JavaScript", pct: 80 },
  { name: "SQL", pct: 90 },
];
const frameworks = [
  { name: "React.js", pct: 75 },
  { name: "Express.js", pct: 70 },
  { name: "Bootstrap", pct: 85 },
  { name: "Tailwind CSS", pct: 80 },
];
const tools = [
  { name: "VS Code", emoji: "💙" },
  { name: "Git", emoji: "🔀" },
  { name: "GitHub", emoji: "🐙" },
  { name: "Postman", emoji: "📮" },
  { name: "Figma", emoji: "🎨" },
  { name: "Firebase", emoji: "🔥" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "Linux", emoji: "🐧" },
];
const softSkills = [
  { label: "Problem\nSolver", emoji: "🧩" },
  { label: "Adaptability", emoji: "🔄" },
  { label: "Time\nManagement", emoji: "⏰" },
  { label: "Team\nCollaboration", emoji: "👥" },
  { label: "Communication", emoji: "💬" },
  { label: "Continuous\nLearner", emoji: "📖" },
];

const ORBIT_R = 200;
const SPEED = 22; // seconds per full rotation

function Bar({ pct, color = "#38bdf8", delay = 0 }) {
  const [w, setW] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setW(pct), delay); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct, delay]);
  return (
    <div ref={ref} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 6, height: 5, overflow: "hidden" }}>
      <div style={{
        height: "100%", width: w + "%", borderRadius: 6,
        background: `linear-gradient(90deg, ${color}, ${color}88)`,
        boxShadow: `0 0 8px ${color}88`,
        transition: "width 1.2s cubic-bezier(.25,.8,.25,1)",
      }} />
    </div>
  );
}

/* Animated orbiting node — uses CSS animation via inline style */
function OrbitNode({ sk, index, total }) {
  const startAngle = (index / total) * 360;
  const animName = `orbit_${index}`;
  return (
    <>
      <style>{`
        @keyframes ${animName} {
          from { transform: rotate(${startAngle}deg) translateX(${ORBIT_R}px) rotate(-${startAngle}deg); }
          to   { transform: rotate(${startAngle + 360}deg) translateX(${ORBIT_R}px) rotate(-${startAngle + 360}deg); }
        }
      `}</style>
      <div
        title={`${sk.label} — ${sk.pct}%`}
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: 76, height: 76,
          marginTop: -38, marginLeft: -38,
          animation: `${animName} ${SPEED}s linear infinite`,
          transformOrigin: "center center",
        }}
      >
        <div style={{
          width: "100%", height: "100%",
          borderRadius: "50%",
          background: "#050d1f",
          border: `2px solid ${sk.color}`,
          boxShadow: `0 0 12px ${sk.color}88`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 2,
          transition: "transform 0.3s, box-shadow 0.3s",
          cursor: "default",
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.2)";
            e.currentTarget.style.boxShadow = `0 0 24px ${sk.color}`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = `0 0 12px ${sk.color}88`;
          }}
        >
          <span style={{ fontSize: 20, lineHeight: 1 }}>{sk.emoji}</span>
          <span style={{ fontSize: 9, color: "#e2e8f0", fontFamily: "DM Sans", textAlign: "center", lineHeight: 1.2 }}>{sk.label}</span>
          <span style={{ fontSize: 9, color: sk.color, fontFamily: "Space Mono" }}>{sk.pct}%</span>
        </div>
      </div>
    </>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={s.section}>

      {/* ── TOP HEADER ── */}
      <div style={{
        ...s.topHeader,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "all 0.8s ease",
      }}>
        <p style={s.topSub}>— WHAT I KNOW —</p>
        <h2 style={s.topTitle}>My <span style={s.topAccent}>Skills</span></h2>
        <p style={s.topDesc}>Technologies and tools I work with every day</p>
        <div style={s.titleUnderline} />
      </div>

      {/* ── MAIN GRID ── */}
      <div className="skills-main-grid" style={s.mainGrid}>

        {/* LEFT — orbit diagram (pure CSS/div) */}
        <div style={{
          ...s.orbitWrap,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateX(-40px)",
          transition: "all 0.9s ease 0.25s",
        }}>
          <p style={s.arsenalTag}>✦ My Arsenal</p>

          {/* orbit container */}
          <div className="orbit-outer-wrapper" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div className="orbit-container" style={s.orbitContainer}>

              {/* decorative rings */}
              <div style={{ ...s.ring, width: ORBIT_R * 2 + 80, height: ORBIT_R * 2 + 80, borderColor: "rgba(56,189,248,0.15)", animation: "spinRing 30s linear infinite" }} />
              <div style={{ ...s.ring, width: ORBIT_R * 2, height: ORBIT_R * 2, borderColor: "rgba(56,189,248,0.2)", borderStyle: "dashed", animation: "spinRing 20s linear infinite reverse" }} />
              <div style={{ ...s.ring, width: ORBIT_R * 2 - 70, height: ORBIT_R * 2 - 70, borderColor: "rgba(56,189,248,0.1)", animation: "spinRing 40s linear infinite" }} />

              {/* orbiting nodes */}
              {orbitSkills.map((sk, i) => (
                <OrbitNode key={sk.label} sk={sk} index={i} total={orbitSkills.length} />
              ))}

              {/* center core */}
              <div style={s.core}>
                <div style={s.coreInner}>
                  <span style={s.coreIcon}>&lt;/&gt;</span>
                  <span style={s.coreText}>CORE</span>
                  <span style={s.coreText}>SKILLS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — bars + tools */}
        <div style={{
          ...s.right,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateX(40px)",
          transition: "all 0.9s ease 0.35s",
        }}>
          {/* Languages */}
          <div style={s.card}>
            <p style={s.cardTitle}>
              <span style={{ ...s.dot, background: "#38bdf8", boxShadow: "0 0 6px #38bdf8" }} />
              &lt;/&gt; Languages
            </p>
            {languages.map((l, i) => (
              <div key={l.name} style={{ marginBottom: 13 }}>
                <div style={s.barHead}>
                  <span style={s.barLabel}>{l.name}</span>
                  <span style={s.barPct}>{l.pct}%</span>
                </div>
                <Bar pct={l.pct} color="#38bdf8" delay={i * 120} />
              </div>
            ))}
          </div>

          {/* Frameworks */}
          <div style={s.card}>
            <p style={s.cardTitle}>
              <span style={{ ...s.dot, background: "#a855f7", boxShadow: "0 0 6px #a855f7" }} />
              🧩 Frameworks & Libraries
            </p>
            {frameworks.map((f, i) => (
              <div key={f.name} style={{ marginBottom: 13 }}>
                <div style={s.barHead}>
                  <span style={s.barLabel}>{f.name}</span>
                  <span style={s.barPct}>{f.pct}%</span>
                </div>
                <Bar pct={f.pct} color="#a855f7" delay={i * 120} />
              </div>
            ))}
          </div>

          {/* Tools */}
          <div style={s.card}>
            <p style={s.cardTitle}>
              <span style={{ ...s.dot, background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
              🛠️ Tools & Platforms
            </p>
            <div className="tools-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
              {tools.map(t => (
                <div key={t.name} style={s.toolChip}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(56,189,248,0.6)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(56,189,248,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(56,189,248,0.15)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <span style={{ fontSize: 22 }}>{t.emoji}</span>
                  <span style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SOFT SKILLS ── */}
      <div style={{
        ...s.softRow,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "all 0.9s ease 0.5s",
      }}>
        <p style={s.softTitle}>👤 Soft Skills</p>
        <div className="soft-grid" style={s.softGrid}>
          {softSkills.map(sk => (
            <div key={sk.label} className="soft-chip" style={s.softChip}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(56,189,248,0.55)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(56,189,248,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(56,189,248,0.15)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <span style={{ fontSize: 26 }}>{sk.emoji}</span>
              <span style={{ fontSize: 12, color: "#cbd5e1", textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.4 }}>{sk.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spinRing   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes corePulse  { 0%,100%{box-shadow:0 0 20px rgba(56,189,248,0.4),inset 0 0 20px rgba(56,189,248,0.05)} 50%{box-shadow:0 0 40px rgba(56,189,248,0.7),inset 0 0 30px rgba(56,189,248,0.1)} }
        @keyframes titleShine { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes underlineGrow { from{width:0} to{width:80px} }

        /* ── SKILLS RESPONSIVE ── */
        @media (max-width: 1024px) {
          #skills { padding: 60px 28px 50px !important; }
          #skills .skills-main-grid { grid-template-columns: 1fr !important; }
          #skills .orbit-outer-wrapper {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            max-width: 320px !important;
            height: 320px !important;
            margin: 0 auto 20px !important;
            position: relative !important;
            overflow: hidden !important;
          }
          #skills .orbit-container {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) scale(0.55) !important;
            transform-origin: center center !important;
            margin: 0 !important;
          }
          #skills .tools-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #skills { padding: 54px 16px 44px !important; }
          #skills .orbit-outer-wrapper {
            max-width: 280px !important;
            height: 280px !important;
          }
          #skills .orbit-container {
            transform: translate(-50%, -50%) scale(0.48) !important;
          }
          #skills .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #skills .soft-grid { gap: 10px !important; }
          #skills .soft-chip { min-width: 80px !important; padding: 12px 14px !important; }
        }
        @media (max-width: 480px) {
          #skills { padding: 50px 12px 40px !important; }
          #skills .orbit-outer-wrapper {
            max-width: 240px !important;
            height: 240px !important;
          }
          #skills .orbit-container {
            transform: translate(-50%, -50%) scale(0.4) !important;
          }
        }
      `}</style>
    </section>
  );
}

const s = {
  section: {
    background: "#020814",
    padding: "80px 60px 60px",
    fontFamily: "'DM Sans', sans-serif",
  },

  /* header */
  topHeader: { textAlign: "center", marginBottom: 48 },
  topSub: { fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: 4, color: "#38bdf8", marginBottom: 10 },
  topTitle: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(36px,4vw,56px)", fontWeight: 800, color: "#f0f6ff", lineHeight: 1.1, marginBottom: 10 },
  topAccent: { background: "linear-gradient(90deg,#38bdf8,#818cf8,#38bdf8)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "titleShine 3s linear infinite" },
  topDesc: { fontSize: 15, color: "#7a95c0", marginBottom: 14 },
  titleUnderline: { width: 80, height: 3, borderRadius: 3, margin: "0 auto", background: "linear-gradient(90deg,#38bdf8,#818cf8)", boxShadow: "0 0 12px rgba(56,189,248,0.5)", animation: "underlineGrow 0.8s ease both 0.4s" },

  /* main grid */
  mainGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" },

  /* orbit */
  orbitWrap: { display: "flex", flexDirection: "column", alignItems: "center" },
  arsenalTag: { fontFamily: "'Space Mono',monospace", fontSize: 12, letterSpacing: 3, color: "#38bdf8", marginBottom: 20, border: "1px solid rgba(56,189,248,0.3)", padding: "5px 16px", borderRadius: 50, background: "rgba(56,189,248,0.06)" },
  orbitContainer: { position: "relative", width: ORBIT_R * 2 + 80 + 80, height: ORBIT_R * 2 + 80 + 80, display: "flex", alignItems: "center", justifyContent: "center" },
  ring: { position: "absolute", borderRadius: "50%", border: "1px solid", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" },

  /* core */
  core: { position: "absolute", width: 130, height: 130, borderRadius: "50%", background: "#050d1f", border: "2px solid rgba(56,189,248,0.5)", display: "flex", alignItems: "center", justifyContent: "center", animation: "corePulse 3s ease-in-out infinite", zIndex: 2 },
  coreInner: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
  coreIcon: { fontSize: 26, color: "#38bdf8" },
  coreText: { fontSize: 11, color: "#38bdf8", fontFamily: "'Space Mono',monospace", letterSpacing: 3 },

  /* right */
  right: { display: "flex", flexDirection: "column", gap: 14 },
  card: { background: "rgba(5,13,31,0.85)", border: "1px solid rgba(56,189,248,0.14)", borderRadius: 14, padding: "18px 20px" },
  cardTitle: { fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 },
  dot: { width: 8, height: 8, borderRadius: "50%", display: "inline-block" },
  barHead: { display: "flex", justifyContent: "space-between", marginBottom: 5 },
  barLabel: { fontSize: 13, color: "#94a3b8" },
  barPct: { fontSize: 12, color: "#38bdf8", fontFamily: "'Space Mono',monospace" },
  toolChip: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "10px 6px", borderRadius: 10, border: "1px solid rgba(56,189,248,0.15)", background: "rgba(5,13,31,0.8)", transition: "all 0.3s ease", cursor: "default" },

  /* soft */
  softRow: { marginTop: 28, background: "rgba(5,13,31,0.7)", border: "1px solid rgba(56,189,248,0.14)", borderRadius: 16, padding: "20px 28px" },
  softTitle: { fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 16 },
  softGrid: { display: "flex", gap: 14, flexWrap: "wrap" },
  softChip: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "14px 22px", borderRadius: 12, border: "1px solid rgba(56,189,248,0.15)", background: "rgba(5,13,31,0.8)", minWidth: 100, transition: "all 0.3s ease", cursor: "default" },
};
