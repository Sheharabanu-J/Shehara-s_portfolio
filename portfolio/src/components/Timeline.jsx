import { useEffect, useRef, useState } from "react";

const items = [
  {
    side: "left",
    year: "2021",
    yearLabel: "2021",
    icon: "📖",
    title: "Higher Secondary Education",
    date: "2019 - 2021",
    desc: "Completed Higher Secondary Education at Avvaiyar Government Girls Higher Secondary School, Dharmapuri, Tamil Nadu, achieving 89.0% in the 12th Standard examinations.",
    color: "#38bdf8",
  },
  {
    side: "right",
    year: "2022",
    yearLabel: "2022",
    icon: "</>",
    title: "College Journey & First Lines of Code",
    date: "2022 - 2026",
    desc: "Pursuing a B.Tech in Information Technology at Varuvan Vadivelan Institute of Technology, Dharmapuri, Tamil Nadu, with a CGPA of 8.91. Began programming with Python, built small projects, and explored web development.",
    color: "#818cf8",
  },
  {
    side: "left",
    year: "2024",
    yearLabel: "2024",
    icon: "⚛️",
    title: "NxtWave Disruptive Technologies",
    date: "2024 - Present",
    desc: "Pursuing an Industry-Ready Certification in Full-Stack Development, covering React.js, Node.js, Express.js, MongoDB, and related technologies. Built real-world projects and gained hands-on experience in modern web development.",
    color: "#61dafb",
  },
  {
    side: "right",
    year: "2025",
    yearLabel: "2025",
    icon: "🧠",
    title: "Exploring AI, Data Science & Full-Stack Development",
    date: "2025",
    desc: "Completed internships in Data Science and Full-Stack Development, working on real-world applications and strengthening skills in software development, data analysis, and problem-solving.",
    color: "#a855f7",
  },
  {
    side: "left",
    year: "Future",
    yearLabel: "Future",
    icon: "🎯",
    title: "Building the Future",
    date: "Future",
    desc: "Committed to continuous learning, building innovative solutions, and creating impactful products that solve real-world problems.",
    color: "#4ade80",
  },
];

function TimelineCard({ item, index }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isLeft = item.side === "left";

  return (
    <div ref={ref} className="timeline-row" style={{
      display: "grid",
      gridTemplateColumns: "1fr 80px 1fr",
      alignItems: "center",
      marginBottom: 0,
      position: "relative",
    }}>
      {/* LEFT CARD */}
      <div className="timeline-left" style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "none"
          : isLeft ? "translateX(-50px)" : "translateX(0)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: 24,
      }}>
        {isLeft && (
          <div style={{ ...card, borderColor: visible ? item.color + "44" : "rgba(56,189,248,0.1)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = item.color + "99"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${item.color}33`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = item.color + "44"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ ...iconBox, background: item.color + "18", border: `1px solid ${item.color}44` }}>
              <span style={{ fontSize: item.icon === "</>" ? 16 : 26, fontFamily: "monospace", color: item.color, fontWeight: 700 }}>{item.icon}</span>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f0f6ff", marginBottom: 4 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: item.color, fontWeight: 600, marginBottom: 8 }}>{item.date}</p>
              <p style={{ fontSize: 13, color: "#7a95c0", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          </div>
        )}
      </div>

      {/* CENTER dot + year */}
      <div className="timeline-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 2 }}>
        <div style={{
          width: 18, height: 18, borderRadius: "50%",
          background: item.color,
          boxShadow: visible ? `0 0 0 6px ${item.color}33, 0 0 20px ${item.color}66` : "none",
          border: `2px solid ${item.color}`,
          transition: `box-shadow 0.5s ease ${index * 0.15 + 0.3}s`,
          flexShrink: 0,
        }} />
        <div style={{
          background: item.color + "18",
          border: `1px solid ${item.color}55`,
          borderRadius: 8, padding: "4px 14px",
          fontSize: 13, fontWeight: 700,
          color: item.color,
          fontFamily: "'Space Mono', monospace",
          opacity: visible ? 1 : 0,
          transition: `opacity 0.5s ease ${index * 0.15 + 0.2}s`,
        }}>
          {item.yearLabel}
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="timeline-right" style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "none"
          : !isLeft ? "translateX(50px)" : "translateX(0)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
        paddingLeft: 24,
      }}>
        {!isLeft && (
          <div style={{ ...card, borderColor: visible ? item.color + "44" : "rgba(56,189,248,0.1)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = item.color + "99"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${item.color}33`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = item.color + "44"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ ...iconBox, background: item.color + "18", border: `1px solid ${item.color}44` }}>
              <span style={{ fontSize: item.icon === "</>" ? 16 : 26, fontFamily: "monospace", color: item.color, fontWeight: 700 }}>{item.icon}</span>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f0f6ff", marginBottom: 4 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: item.color, fontWeight: 600, marginBottom: 8 }}>{item.date}</p>
              <p style={{ fontSize: 13, color: "#7a95c0", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          </div>
        )}
      </div>

      {/* dashed connector line */}
      <div className="timeline-connector" style={{
        position: "absolute",
        top: "50%",
        left: isLeft ? "calc(33.33% + 8px)" : "calc(66.66% - 8px)",
        width: isLeft ? "calc(16.66% - 16px)" : "calc(16.66% - 16px)",
        height: 1,
        background: `repeating-linear-gradient(90deg, ${item.color}66 0px, ${item.color}66 6px, transparent 6px, transparent 12px)`,
        transform: "translateY(-50%)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.5s ease ${index * 0.15 + 0.4}s`,
      }} />
    </div>
  );
}

export default function Timeline() {
  const [lineH, setLineH] = useState(0);
  const lineRef = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let h = 0;
        const grow = setInterval(() => {
          h += 8;
          setLineH(h);
          if (h >= 100) clearInterval(grow);
        }, 20);
      }
    }, { threshold: 0.1 });
    obs.observe(lineRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="timeline" style={s.section}>

      {/* deco */}
      <span style={{ position:"absolute", top:60, left:120, fontSize:60, opacity:0.06, pointerEvents:"none" }}>🌙</span>
      <span style={{ position:"absolute", top:50, right:100, fontSize:50, opacity:0.08, pointerEvents:"none" }}>🚀</span>

      {/* ── HEADER ── */}
      <div style={s.header}>
        <span style={s.tag}>🕐 My Journey</span>
        <h2 style={s.title}>
          <span style={s.titleBlue}>Journey</span> Of Growth
        </h2>
        <p style={s.subtitle}>A timeline of my learning, building and evolving as a developer.</p>
      </div>

      {/* ── TIMELINE ── */}
      <div ref={lineRef} style={{ position: "relative", maxWidth: 1000, margin: "0 auto", padding: "20px 0" }}>

        {/* vertical line that grows */}
        <div className="timeline-line" style={{
          position: "absolute",
          left: "50%", top: 0,
          width: 2,
          height: lineH + "%",
          background: "linear-gradient(to bottom, #38bdf8, #818cf8, #a855f7, #4ade80)",
          transform: "translateX(-50%)",
          transition: "height 0.05s linear",
          borderRadius: 2,
          boxShadow: "0 0 12px rgba(56,189,248,0.4)",
          zIndex: 1,
        }} />

        {/* items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {items.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* ── QUOTE ── */}
      <div style={s.quoteBox}>
        <span style={s.quoteMark}>"</span>
        <div>
          <p style={{ fontSize: 17, color: "#e2e8f0", lineHeight: 1.7 }}>
            I'm not where I want to be,
          </p>
          <p style={{ fontSize: 17, color: "#38bdf8", fontWeight: 600 }}>
            but I'm closer than I was yesterday.
          </p>
        </div>
        {/* growth chart dots */}
        <svg style={{ position:"absolute", right:40, bottom:20, opacity:0.5 }} width={200} height={60} viewBox="0 0 200 60">
          {[[0,50],[30,42],[60,35],[90,25],[120,18],[150,10],[180,5],[200,2]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={3} fill="#38bdf8" style={{ filter:"drop-shadow(0 0 4px #38bdf8)" }} />
          ))}
          <polyline points="0,50 30,42 60,35 90,25 120,18 150,10 180,5 200,2"
            fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth={1.5} />
        </svg>
      </div>

      <style>{`
        @keyframes fadeUp    { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes titleShine{ 0%{background-position:200% center} 100%{background-position:-200% center} }
        #timeline { animation: fadeUp 0.7s ease both; }

        /* ── TIMELINE RESPONSIVE ── */
        @media (max-width: 1024px) {
          #timeline { padding: 60px 24px 50px !important; }
          .timeline-line { left: 20px !important; }
          .timeline-row {
            grid-template-columns: 40px 1fr !important;
            gap: 0 !important;
          }
          .timeline-connector { display: none !important; }
          .timeline-left, .timeline-right {
            grid-column: 2 !important;
            grid-row: 1 !important;
            padding-left: 16px !important;
            padding-right: 0 !important;
            opacity: 1 !important;
            transform: none !important;
            display: block !important;
          }
          .timeline-right > div,
          .timeline-left > div {
            max-width: 100% !important;
          }
          .timeline-center { 
            grid-column: 1 !important; 
            grid-row: 1 !important; 
          }
        }
        @media (max-width: 768px) {
          #timeline { padding: 50px 14px 40px !important; }
          .timeline-row { grid-template-columns: 30px 1fr !important; }
          .timeline-line { left: 15px !important; }
        }
      `}</style>
    </section>
  );
}

const card = {
  display: "flex", alignItems: "flex-start", gap: 16,
  background: "rgba(5,13,31,0.9)",
  border: "1px solid",
  borderRadius: 14, padding: "20px 22px",
  transition: "all 0.35s ease",
  cursor: "default",
  maxWidth: 380,
};

const iconBox = {
  width: 56, height: 56, borderRadius: 12, flexShrink: 0,
  display: "flex", alignItems: "center", justifyContent: "center",
};

const s = {
  section: {
    background: "#020814",
    padding: "80px 60px 80px",
    fontFamily: "'DM Sans', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  header:    { textAlign: "center", marginBottom: 52 },
  tag:       { display:"inline-block", fontFamily:"'Space Mono',monospace", fontSize:12, letterSpacing:3, color:"#38bdf8", border:"1px solid rgba(56,189,248,0.3)", padding:"5px 18px", borderRadius:50, background:"rgba(56,189,248,0.06)", marginBottom:18 },
  title:     { fontFamily:"'Syne',sans-serif", fontSize:"clamp(36px,4.5vw,62px)", fontWeight:800, color:"#f0f6ff", lineHeight:1.1, marginBottom:12 },
  titleBlue: { background:"linear-gradient(90deg,#38bdf8,#818cf8,#38bdf8)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"titleShine 3s linear infinite" },
  subtitle:  { fontSize:16, color:"#7a95c0" },

  quoteBox: {
    position: "relative",
    maxWidth: 1000, margin: "52px auto 0",
    background: "rgba(5,13,31,0.8)",
    border: "1px solid rgba(56,189,248,0.18)",
    borderRadius: 16, padding: "28px 36px",
    display: "flex", alignItems: "center", gap: 24,
    overflow: "hidden",
  },
  quoteMark: {
    fontSize: 80, lineHeight: 1, color: "#38bdf8",
    opacity: 0.3, fontFamily: "Georgia, serif",
    flexShrink: 0, marginTop: -20,
  },
};
