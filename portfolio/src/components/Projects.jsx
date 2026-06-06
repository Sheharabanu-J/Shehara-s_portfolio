import { useState } from "react";

// ── Real screenshots — copy these files to src/assets/projects/
import reallImg     from "../assets/projects/reall.png";
import nutrifestImg from "../assets/projects/nutrifest.png";
import portfolioImg from "../assets/projects/portfolio.png";
import dentalImg    from "../assets/projects/dental.png";
import gymImg       from "../assets/projects/gym.png";

const categories = ["All", "Web Development", "AI / ML", "Full Stack"];

// For projects without screenshots we use a reliable placeholder URL
const AI_BG   = "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80";
const TASK_BG = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80";
const PHISH_BG= "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80";
const SMART_BG= "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80";

const projects = [
  {
    id: 1,
    title: "Reall Creations",
    desc: "A content & growth agency helping modern brands build powerful digital presence through strategy and performance marketing.",
    category: "Web Development",
    tag: "Web Dev",
    tagColor: "#38bdf8",
    img: reallImg,
    techs: ["🌐","🎨","⚡"],
    techNames: ["Web","Design","JS"],
    live: "https://reallcreation.com/",
    github: "#",
    accent: "#38bdf8",
  },
  {
    id: 2,
    title: "NutriFest",
    desc: "Smart meal planning for healthier families. Personalized weekly meal plans, grocery lists and nutrition tracking powered by AI.",
    category: "Web Development",
    tag: "Web App",
    tagColor: "#4ade80",
    img: nutrifestImg,
    techs: ["⚛️","💨","🌐"],
    techNames: ["React","Tailwind","Web"],
    live: "https://nutrifest.lovable.app/",
    github: "#",
    accent: "#4ade80",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    desc: "My personal portfolio built with React, modern animations, orbiting skill nodes and a dark space theme.",
    category: "Web Development",
    tag: "Web Dev",
    tagColor: "#61dafb",
    img: portfolioImg,
    techs: ["⚛️","⚡","🎨"],
    techNames: ["React","JS","CSS"],
    live: "https://www.shehara.in/",
    github: "https://github.com/Sheharabanu-J/my-portfolio",
    accent: "#61dafb",
  },
  {
    id: 4,
    title: "Techno Dental Care",
    desc: "A modern dental clinic website with appointment booking, service showcase and advanced dental treatment info.",
    category: "Web Development",
    tag: "Web Dev",
    tagColor: "#2dd4bf",
    img: dentalImg,
    techs: ["⚛️","💨","🌐"],
    techNames: ["React","Tailwind","Web"],
    live: "https://technocare-theta.vercel.app/",
    github: "#",
    accent: "#2dd4bf",
  },
  {
    id: 5,
    title: "Techno Gym",
    desc: "A gym and fitness website with workout plans, professional trainer profiles, modern equipment and membership details.",
    category: "Web Development",
    tag: "Web Dev",
    tagColor: "#f97316",
    img: gymImg,
    techs: ["⚛️","💨","⚡"],
    techNames: ["React","Tailwind","JS"],
    live: "https://technogym-drab.vercel.app/",
    github: "#",
    accent: "#f97316",
  },
  {
    id: 6,
    title: "Smart Task App",
    desc: "A smart and beautiful task manager to organize daily activities with priorities, deadlines and progress tracking.",
    category: "Full Stack",
    tag: "Web App",
    tagColor: "#a855f7",
    img: SMART_BG,
    techs: ["⚛️","🟩","🗄️"],
    techNames: ["React","Node","DB"],
    live: "https://smart-task-app-iota.vercel.app/",
    github: "#",
    accent: "#a855f7",
  },
  {
    id: 7,
    title: "AI Prompt Library",
    desc: "A curated library of powerful AI prompts for developers, writers and creators to supercharge their workflow.",
    category: "AI / ML",
    tag: "AI / ML",
    tagColor: "#818cf8",
    img: AI_BG,
    techs: ["🐍","🧠","⚡"],
    techNames: ["Python","AI","JS"],
    live: "#",
    github: "https://github.com/Sheharabanu-J/AiPromptLibrary.git",
    accent: "#818cf8",
  },
  {
    id: 8,
    title: "Task Manager",
    desc: "A full-featured task management system with authentication, team collaboration and real-time updates.",
    category: "Full Stack",
    tag: "Full Stack",
    tagColor: "#4ade80",
    img: TASK_BG,
    techs: ["⚛️","🟩","🍃"],
    techNames: ["React","Node","MongoDB"],
    live: "#",
    github: "https://github.com/Sheharabanu-J/Taskmanager.git",
    accent: "#4ade80",
  },
  {
    id: 9,
    title: "PhisChain AI",
    desc: "An AI-powered phishing detection system using blockchain technology for secure and transparent verification.",
    category: "AI / ML",
    tag: "AI / ML",
    tagColor: "#f97316",
    img: PHISH_BG,
    techs: ["🐍","🧠","⛓️"],
    techNames: ["Python","AI","Blockchain"],
    live: "#",
    github: "https://github.com/Sheharabanu-J/phischain-ai.git",
    accent: "#f97316",
  },
];

export default function Projects() {
  const [active,  setActive]  = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered = active === "All"
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section id="projects" style={s.section}>

      {/* circuit deco */}
      <div style={s.circuitLeft}  />
      <div style={s.circuitRight} />

      {/* ── HEADER ── */}
      <div style={s.header}>
        <span style={s.tag}>✦ My Creations</span>
        <h2 style={s.title}>
          <span style={s.titleBlue}>Projects</span> That Speak
        </h2>
        <p style={s.subtitle}>
          A collection of{" "}
          <span style={{ color:"#38bdf8" }}>ideas</span>,{" "}
          <span style={{ color:"#a855f7" }}>code</span> and{" "}
          <span style={{ color:"#fbbf24" }}>creativity</span>.
        </p>
      </div>

      {/* ── FILTERS ── */}
      <div style={s.filters}>
        {categories.map(c => (
          <button key={c} onClick={() => setActive(c)} style={{
            ...s.filterBtn,
            background:  active === c ? "linear-gradient(135deg,#1e8fff,#38bdf8)" : "transparent",
            borderColor: active === c ? "transparent" : "rgba(56,189,248,0.25)",
            color:       active === c ? "#fff" : "#7a95c0",
            boxShadow:   active === c ? "0 0 16px rgba(30,143,255,0.4)" : "none",
            transform:   active === c ? "translateY(-1px)" : "none",
          }}>
            {c}
          </button>
        ))}
      </div>

      {/* ── GRID ── */}
      <div className="projects-grid" style={s.grid}>
        {filtered.map((p, i) => (
          <div key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...s.card,
              borderColor: hovered === p.id ? p.accent + "99" : "rgba(56,189,248,0.12)",
              transform:   hovered === p.id ? "translateY(-8px) scale(1.015)" : "none",
              boxShadow:   hovered === p.id
                ? `0 20px 60px ${p.accent}33, 0 0 0 1px ${p.accent}44`
                : "0 2px 20px rgba(0,0,0,0.4)",
              animationDelay: `${i * 0.07}s`,
            }}>

            {/* ── screenshot preview ── */}
            <div style={s.preview}>
              <img
                src={typeof p.img === "string" ? p.img : p.img}
                alt={p.title}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "top center",
                  transition: "transform 0.5s ease",
                  transform: hovered === p.id ? "scale(1.07)" : "scale(1)",
                  display: "block",
                }}
              />
              {/* overlay gradient */}
              <div style={{
                position: "absolute", inset: 0,
                background: hovered === p.id
                  ? `linear-gradient(to bottom, transparent 40%, ${p.accent}22 100%)`
                  : "linear-gradient(to bottom, transparent 50%, rgba(2,8,20,0.6) 100%)",
                transition: "background 0.4s",
              }} />
              {/* live indicator */}
              {p.live !== "#" && (
                <div style={s.liveIndicator}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", display:"inline-block", animation:"dotPulse 2s ease-in-out infinite" }} />
                  Live
                </div>
              )}
            </div>

            {/* tag */}
            <span style={{ ...s.cardTag, background: p.tagColor+"22", color: p.tagColor, borderColor: p.tagColor+"55" }}>
              {p.tag}
            </span>

            <h3 style={s.cardTitle}>{p.title}</h3>
            <p  style={s.cardDesc}>{p.desc}</p>

            {/* techs */}
            <div style={s.techRow}>
              {p.techs.map((t, j) => (
                <span key={j} title={p.techNames[j]} style={s.techPill}>{t}</span>
              ))}
            </div>

            {/* buttons */}
            <div style={s.btnRow}>
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                style={{
                  ...s.btnLive,
                  opacity: p.live === "#" ? 0.35 : 1,
                  pointerEvents: p.live === "#" ? "none" : "auto",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = p.accent; e.currentTarget.style.borderColor = p.accent; e.currentTarget.style.color = "#000"; e.currentTarget.style.fontWeight = "700"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#f0f6ff"; e.currentTarget.style.fontWeight = "600"; }}>
                Live Demo ↗
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                style={{
                  ...s.btnGithub,
                  opacity: p.github === "#" ? 0.35 : 1,
                  pointerEvents: p.github === "#" ? "none" : "auto",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}>
                🐙 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── VIEW MORE ── */}
      <div style={{ textAlign:"center", marginTop:52 }}>
        <a href="https://github.com/Sheharabanu-J" target="_blank" rel="noopener noreferrer"
          className="view-more"
          style={s.viewMore}
          onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(135deg,#1e8fff,#38bdf8)"; e.currentTarget.style.boxShadow = "0 0 28px rgba(30,143,255,0.5)"; e.currentTarget.style.borderColor = "transparent"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)"; }}>
          View More Projects →
        </a>
      </div>

      <style>{`
        @keyframes fadeUp    { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes titleShine{ 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes dotPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.4)} }
        #projects { animation: fadeUp 0.7s ease both; }

        /* ── PROJECTS RESPONSIVE ── */
        @media (max-width: 1024px) {
          #projects { padding: 60px 32px 60px !important; }
          #projects .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #projects { padding: 54px 18px 50px !important; }
          #projects .projects-grid { grid-template-columns: 1fr !important; }
          #projects .filters { gap: 8px !important; }
          #projects .filter-btn { padding: 8px 16px !important; font-size: 12px !important; }
        }
        @media (max-width: 480px) {
          #projects { padding: 48px 14px 44px !important; }
          #projects .view-more { padding: 12px 28px !important; font-size: 13px !important; }
        }
      `}</style>
    </section>
  );
}

const s = {
  section: {
    background: "#020814",
    padding: "80px 60px 80px",
    fontFamily: "'DM Sans', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  circuitLeft:  { position:"absolute", left:0, top:"14%", width:200, height:2, background:"linear-gradient(90deg,transparent,rgba(56,189,248,0.3),transparent)", pointerEvents:"none" },
  circuitRight: { position:"absolute", right:0, top:"14%", width:200, height:2, background:"linear-gradient(270deg,transparent,rgba(56,189,248,0.3),transparent)", pointerEvents:"none" },

  header:    { textAlign:"center", marginBottom:32 },
  tag:       { display:"inline-block", fontFamily:"'Space Mono',monospace", fontSize:12, letterSpacing:3, color:"#38bdf8", border:"1px solid rgba(56,189,248,0.3)", padding:"5px 18px", borderRadius:50, background:"rgba(56,189,248,0.06)", marginBottom:18 },
  title:     { fontFamily:"'Syne',sans-serif", fontSize:"clamp(36px,4.5vw,62px)", fontWeight:800, color:"#f0f6ff", lineHeight:1.1, marginBottom:12 },
  titleBlue: { background:"linear-gradient(90deg,#38bdf8,#818cf8,#38bdf8)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"titleShine 3s linear infinite" },
  subtitle:  { fontSize:16, color:"#7a95c0" },

  filters:   { display:"flex", justifyContent:"center", gap:10, marginBottom:40, flexWrap:"wrap" },
  filterBtn: { padding:"9px 22px", borderRadius:50, border:"1px solid", fontSize:13, fontWeight:500, cursor:"pointer", transition:"all 0.3s ease", fontFamily:"'DM Sans',sans-serif" },

  grid: { display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:24 },

  card: {
    borderRadius:16, border:"1px solid",
    overflow:"hidden",
    transition:"all 0.35s cubic-bezier(.25,.8,.25,1)",
    cursor:"default",
    animation:"fadeUp 0.5s ease both",
    display:"flex", flexDirection:"column",
    background:"#050d1f",
  },

  preview: {
    height:180, overflow:"hidden",
    position:"relative", flexShrink:0,
  },

  liveIndicator: {
    position:"absolute", top:10, right:10,
    display:"flex", alignItems:"center", gap:5,
    background:"rgba(2,8,20,0.75)",
    border:"1px solid rgba(74,222,128,0.4)",
    borderRadius:50, padding:"3px 10px",
    fontSize:11, color:"#4ade80",
    fontFamily:"'Space Mono',monospace",
    backdropFilter:"blur(8px)",
  },

  cardTag:  { display:"inline-block", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:50, border:"1px solid", fontFamily:"'Space Mono',monospace", letterSpacing:1, margin:"14px 0 8px 16px", width:"fit-content" },
  cardTitle:{ fontSize:15, fontWeight:700, color:"#f0f6ff", padding:"0 16px", marginBottom:8, lineHeight:1.3 },
  cardDesc: { fontSize:12, color:"#7a95c0", lineHeight:1.75, padding:"0 16px", marginBottom:14, flexGrow:1 },
  techRow:  { display:"flex", gap:8, padding:"0 16px", marginBottom:16, flexWrap:"wrap" },
  techPill: { fontSize:17, background:"rgba(255,255,255,0.05)", borderRadius:8, padding:"4px 8px", border:"1px solid rgba(255,255,255,0.08)" },
  btnRow:   { display:"flex", gap:8, padding:"0 16px 2px" },
  btnLive:  { flex:1, textAlign:"center", padding:"9px 0", borderRadius:8, fontSize:12, fontWeight:600, textDecoration:"none", color:"#f0f6ff", border:"1px solid rgba(255,255,255,0.2)", background:"transparent", transition:"all 0.3s ease" },
  btnGithub:{ flex:1, textAlign:"center", padding:"9px 0", borderRadius:8, fontSize:12, fontWeight:600, textDecoration:"none", color:"#f0f6ff", border:"1px solid rgba(255,255,255,0.12)", background:"transparent", transition:"all 0.3s ease" },

  viewMore: { display:"inline-block", padding:"14px 40px", borderRadius:50, border:"1.5px solid rgba(56,189,248,0.4)", color:"#f0f6ff", textDecoration:"none", fontSize:14, fontWeight:600, background:"transparent", transition:"all 0.3s ease", fontFamily:"'DM Sans',sans-serif" },
};
