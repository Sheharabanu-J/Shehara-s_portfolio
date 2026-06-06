import portfolioImg from "../assets/shehara.jpeg";

const cards = [
  { icon: "🎓", label: "DEGREE",  value: "B.Tech",               sub: "Information Technology" },
  { icon: "🏛️", label: "COLLEGE", value: "Varuvan Vadivelan",    sub: "Institute of Technology" },
  { icon: "🏅", label: "CGPA",    value: "8.91",          sub: "" },
];
const bottom = [
  { icon: "📅", label: "YEAR",     value: "2022 – 2026" },
  { icon: "📍", label: "LOCATION", value: "Tamil Nadu, India" },
];
const skills = ["React", "JavaScript", "Tailwind", "Node.js", "GEN AI", "Responsive UI"];

export default function About() {
  return (
    <section id="about" style={s.section}>
      {/* decorative doodles */}
      <span style={{...s.doodle, top:60, right:80, fontSize:28}}>♡</span>
      <span style={{...s.doodle, bottom:80, left:60, fontSize:22, transform:"rotate(-20deg)"}}>~</span>

      {/* LEFT — photo */}
      <div style={s.photoCol} className="photo-col">
        <div style={s.photoFrame} className="photo-frame">
          {/* corner dashes */}
          <span style={{...s.dash, top:18, left:18}} />
          <span style={{...s.dash, top:18, left:34}} />
          <span style={{...s.dash, top:34, left:18}} />
          <span style={{...s.dash, bottom:18, right:18}} />
          <span style={{...s.dash, bottom:18, right:34}} />
          <span style={{...s.dash, bottom:34, right:18}} />

          <img src={portfolioImg} alt="Shehara" style={s.photo} />

          {/* dot grid overlay */}
          <div style={s.dotGrid} />
        </div>
      </div>

      {/* RIGHT — content */}
      <div style={s.content} className="content">
        <p style={s.tag}>
          <span style={s.tagDot} /> ABOUT ME
        </p>


        <div style={s.bio}>
          <p>I'm Shehara Banu Jamal, a passionate learner who enjoys building things that are useful, meaningful and impactful. I love turning ideas into real projects, exploring AI, and solving problems with code.</p>
          <p>
            I believe in learning <span style={s.accent}>consistently</span>, building <span style={s.accent}>fearlessly</span>, and <span style={s.accent}>growing</span> every single day.
          </p>
        </div>

        <div className="skill-row" style={s.skillRow}>
          {skills.map(skill => (
            <span key={skill} style={s.skillTag}>{skill}</span>
          ))}
        </div>

        <div className="cta-row" style={s.ctaRow}>
          <a href="#contact" className="cta-button" style={s.ctaButton}>Let&apos;s Collaborate</a>
          <p style={s.ctaNote}>Open to works, freelance projects, and AI-driven front-end initiatives.</p>
        </div>

        <div className="cards" style={s.cards}>
          {cards.map(c => (
            <div key={c.label} style={s.card}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
              }}>
              <span style={s.cardIcon}>{c.icon}</span>
              <div>
                <p style={s.cardLabel}>{c.label}</p>
                <p style={s.cardValue}>{c.value}</p>
                {c.sub && <p style={s.cardSub}>{c.sub}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-row" style={s.bottomRow}>
          {bottom.map(b => (
            <div key={b.label} style={s.bottomCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.18)";
              }}>
              <span style={s.cardIcon}>{b.icon}</span>
              <div>
                <p style={s.cardLabel}>{b.label}</p>
                <p style={s.bottomValue}>{b.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes doodlePulse { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:0.45;transform:scale(1.08)} }
        #about { animation: fadeUp 0.7s ease both; }

        /* Responsive overrides */
        @media (max-width: 1080px) {
          #about {
            grid-template-columns: 1fr !important;
            padding: 80px 42px !important;
            gap: 42px !important;
            min-height: auto !important;
          }
          #about .photo-col { justify-content: center !important; }
        }

        @media (max-width: 768px) {
          #about {
            padding: 70px 22px 50px !important;
          }
          #about .photo-frame {
            width: 100% !important;
            max-width: 320px !important;
            height: 380px !important;
          }
          #about .cards {
            grid-template-columns: 1fr !important;
          }
          #about .bottom-row {
            grid-template-columns: 1fr !important;
          }
          #about .content {
            gap: 18px !important;
          }
        }

        @media (max-width: 480px) {
          #about {
            padding: 60px 16px 44px !important;
          }
          #about .photo-frame {
            max-width: 280px !important;
            height: 340px !important;
          }
          #about .cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: center !important;
          }
          #about .cta-button {
            text-align: center !important;
            justify-content: center !important;
          }
          #about .skill-row {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}

const s = {
  section: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    alignItems: "center",
    gap: 60,
    padding: "100px 72px",
    background: "#020814",
    position: "relative",
    fontFamily: "'DM Sans', sans-serif",
    overflow: "hidden",
  },
  doodle: {
    position: "absolute",
    color: "#38bdf8",
    opacity: 0.28,
    animation: "doodlePulse 4.5s ease-in-out infinite",
    pointerEvents: "none",
    fontStyle: "normal",
  },

  /* photo */
  photoCol: { display: "flex", justifyContent: "center" },
  photoFrame: {
    position: "relative",
    width: 420,
    height: 520,
    borderRadius: 30,
    border: "1.5px solid rgba(56,189,248,0.35)",
    overflow: "hidden",
    boxShadow: "0 0 60px rgba(56,189,248,0.16), inset 0 0 40px rgba(56,189,248,0.08)",
    background: "linear-gradient(180deg, rgba(5,13,31,0.98), rgba(7,18,39,0.95))",
  },
  photo: {
    width: "100%", height: "100%",
    objectFit: "cover", objectPosition: "top center",
    display: "block",
  },
  dotGrid: {
    position: "absolute", inset: 0, pointerEvents: "none",
    backgroundImage: "radial-gradient(rgba(56,189,248,0.22) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    opacity: 0.35,
  },
  dash: {
    position: "absolute", width: 12, height: 2,
    background: "#38bdf8", borderRadius: 999,
    display: "block",
  },

  /* content */
  content: { display: "flex", flexDirection: "column", gap: 24 },
  tag: {
    display: "flex", alignItems: "center", gap: 8,
    fontSize: 12, letterSpacing: 3, color: "#38bdf8",
    fontFamily: "'Space Mono', monospace", textTransform: "uppercase",
  },
  tagDot: {
    width: 8, height: 8, borderRadius: "50%",
    background: "#38bdf8", display: "inline-block",
    boxShadow: "0 0 10px rgba(56,189,248,0.45)",
  },
  heading: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(36px, 4vw, 56px)",
    fontWeight: 800, color: "#f8fbff", lineHeight: 1.05,
    maxWidth: 560,
  },
  bio: {
    display: "flex", flexDirection: "column", gap: 16,
    fontSize: 18, color: "#9bb5d8", lineHeight: 1.9, maxWidth: 560,
  },
  accent: { color: "#38bdf8", fontWeight: 600 },
  skillRow: {
    display: "flex", flexWrap: "wrap", gap: 12, marginTop: 6,
  },
  skillTag: {
    padding: "10px 16px",
    borderRadius: 999,
    background: "rgba(56,189,248,0.12)",
    color: "#cce3ff",
    fontSize: 14,
    letterSpacing: 0.4,
    border: "1px solid rgba(56,189,248,0.18)",
    transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
    cursor: "default",
  },
  ctaRow: {
    display: "flex", flexWrap: "wrap", gap: 14,
    alignItems: "center", marginTop: 20,
  },
  ctaButton: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    padding: "14px 28px", borderRadius: 14,
    background: "linear-gradient(135deg, rgba(56,189,248,0.95), rgba(59,130,246,0.92))",
    color: "#fff", border: "none", textDecoration: "none",
    fontWeight: 700, fontSize: 15, letterSpacing: 0.5,
    boxShadow: "0 18px 48px rgba(56,189,248,0.2)", transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
  ctaNote: {
    color: "#7c9ed3", fontSize: 15, maxWidth: 380,
  },
  cards: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginTop: 20 },
  card: {
    display: "flex", alignItems: "center", gap: 16,
    padding: "18px 22px", borderRadius: 18,
    border: "1px solid rgba(99,102,241,0.2)",
    background: "rgba(5,13,31,0.88)",
    transition: "border-color 0.3s ease, transform 0.25s ease, background 0.25s ease",
    cursor: "default",
  },
  cardIcon: { fontSize: 24, minWidth: 34, textAlign: "center" },
  cardLabel: {
    fontSize: 11, letterSpacing: 2, color: "#7a95c0",
    fontFamily: "'Space Mono',monospace", textTransform: "uppercase", marginBottom: 2,
  },
  cardValue: { fontSize: 18, fontWeight: 700, color: "#38bdf8" },
  cardSub:   { fontSize: 13, color: "#9bb5d8", marginTop: 4 },
  bottomRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 18 },
  bottomCard: {
    display: "flex", alignItems: "center", gap: 16,
    padding: "16px 20px", borderRadius: 18,
    border: "1px solid rgba(99,102,241,0.18)",
    background: "rgba(5,13,31,0.88)",
    transition: "border-color 0.3s ease, transform 0.25s ease",
    cursor: "default",
  },
  bottomValue: { fontSize: 15, fontWeight: 600, color: "#f0f6ff", marginTop: 2 },
};
