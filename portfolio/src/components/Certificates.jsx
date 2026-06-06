import { useState } from "react";

// ── Import all certificate images
// Copy all cert_*.jpg files to src/assets/certificates/
import c01 from "../assets/certificates/BIGMASS.jpeg";
import c02 from "../assets/certificates/FULL_STACK.jpeg";
import c03 from "../assets/certificates/MCP SERVER.jpeg";
import c04 from "../assets/certificates/FLEXBOX.jpeg";
import c05 from "../assets/certificates/STATIC.jpeg";
import c06 from "../assets/certificates/NM_experience based learning.jpeg";
import c07 from "../assets/certificates/NM_MS.jpeg";
import c08 from "../assets/certificates/RESPONSIVE.jpeg";
import c09 from "../assets/certificates/SQL.jpeg";
import c10 from "../assets/certificates/PYTHON.jpeg";
import c11 from "../assets/certificates/KAGGLE.jpeg";
import c13 from "../assets/certificates/INTERNSHIP_DS.jpeg";
import c14 from "../assets/certificates/MILESTONE.jpeg";
import c15 from "../assets/certificates/GENAI.jpeg";


const categories = ["All", "Web Development", "AI / ML", "Masterclass", "Achievement", "Other"];

const certs = [
  {
    id: 1, img: c05, category: "Web Development",
    title: "Build Your Own Static Website",
    issuer: "NxtWave (CCBP 4.0)", date: "May 28, 2024",
    tag: "Web Dev", tagColor: "#38bdf8",
    desc: "Successfully completed the course covering HTML, CSS and Bootstrap fundamentals.",
    credential: "#",
  },
  {
    id: 2, img: c08, category: "Web Development",
    title: "Build Your Own Responsive Website",
    issuer: "NxtWave (CCBP 4.0)", date: "July 09, 2024",
    tag: "Web Dev", tagColor: "#38bdf8",
    desc: "Completed course on building responsive websites using Bootstrap and Flexbox.",
    credential: "#",
  },
  {
    id: 3, img: c04, category: "Web Development",
    title: "Responsive Web Design using Flexbox",
    issuer: "NxtWave (CCBP 4.0)", date: "Aug 31, 2025",
    tag: "Web Dev", tagColor: "#38bdf8",
    desc: "Mastered responsive web design techniques using CSS Flexbox layout.",
    credential: "#",
  },
  {
    id: 4, img: c09, category: "Web Development",
    title: "Introduction to Databases",
    issuer: "NxtWave (CCBP 4.0)", date: "July 12, 2025",
    tag: "Web Dev", tagColor: "#38bdf8",
    desc: "Completed course on SQL databases, queries and data management fundamentals.",
    credential: "#",
  },
  {
    id: 5, img: c10, category: "AI / ML",
    title: "Programming Foundations with Python",
    issuer: "NxtWave (CCBP 4.0)", date: "June 29, 2025",
    tag: "Programming", tagColor: "#fbbf24",
    desc: "Successfully completed Python programming fundamentals course.",
    credential: "#",
  },
  {
    id: 6, img: c06, category: "Other",
    title: "Naan Mudhalvan – Experience Based Project Learning",
    issuer: "Govt. of Tamil Nadu / Oracle", date: "18 July 2025",
    tag: "Govt.", tagColor: "#f97316",
    desc: "Completed Experience Based Project Learning sponsored by Naan Mudhalvan, conducted by Oracle.",
    credential: "#",
  },
  {
    id: 7, img: c07, category: "Other",
    title: "Naan Mudhalvan – Microsoft Office Essentials",
    issuer: "Govt. of Tamil Nadu / Microsoft", date: "16 July 2025",
    tag: "Govt.", tagColor: "#f97316",
    desc: "Completed Microsoft Office Essentials conducted by Microsoft under Naan Mudhalvan Scheme.",
    credential: "#",
  },
  {
    id: 8, img: c03, category: "AI / ML",
    title: "MCP Project Completion – Model Context Protocol",
    issuer: "NxtWave (CCBP 4.0)", date: "09 Aug 2025",
    tag: "AI / ML", tagColor: "#818cf8",
    desc: "Completed MCP Mega Workshop — explored AI tools like Cursor IDE, Pipedream and MCP Servers.",
    credential: "#",
  },
  {
    id: 9, img: c15, category: "AI / ML",
    title: "Generative AI Mega Workshop 2.0",
    issuer: "NxtWave (CCBP 4.0)", date: "18 Sep 2024",
    tag: "AI / ML", tagColor: "#818cf8",
    desc: "Attended Gen AI Mega Workshop hosted by Mr Tezan Sahu, SDE II at Microsoft.",
    credential: "#",
  },
 
  {
    id: 11, img: c14, category: "Achievement",
    title: "NxtCode 7 Under 7 – 7 Day Milestone",
    issuer: "NxtWave (CCBP 4.0)", date: "1 Oct 2024",
    tag: "Achievement", tagColor: "#4ade80",
    desc: "Successfully achieved the 7 Day Milestone in NxtCode-7 Under 7 Challenge, Sep 2024.",
    credential: "#",
  },
 
  {
    id: 13, img: c02, category: "Masterclass",
    title: "Google Staff Engineer Podcast",
    issuer: "NxtWave (CCBP 4.0)", date: "16 Aug 2025",
    tag: "Masterclass", tagColor: "#61dafb",
    desc: "Attended podcast by Mr Mrinal Ahlawat, Staff Engineer at Google — 'What Google Looks for in Future Engineers'.",
    credential: "#",
  },
 
  {
    id: 15, img: c13, category: "Masterclass",
    title: "How to Become a Data Scientist at Microsoft",
    issuer: "NxtWave (CCBP 4.0)", date: "18 June 2024",
    tag: "Masterclass", tagColor: "#61dafb",
    desc: "Masterclass by Mr Tezan Sahu, Data and Applied Scientist at Microsoft.",
    credential: "#",
  },
  {
    id: 16, img: c11, category: "Masterclass",
    title: "The Interview Game Changer",
    issuer: "NxtWave (CCBP 4.0)", date: "30 Oct 2024",
    tag: "Masterclass", tagColor: "#61dafb",
    desc: "Masterclass by Ms Madhura Gade, Interview Coach — 'The Interview Game Changer: What Employers Really Want'.",
    credential: "#",
  },
 
 
  {
    id: 19, img: c01, category: "Achievement",
    title: "Full Stack Development with AI Workshop",
    issuer: "Bigmass Technologies", date: "29 Sep 2025",
    tag: "Workshop", tagColor: "#f97316",
    desc: "Participated in Offline Workshop on Full Stack Development with AI conducted by Bigmass Technologies.",
    credential: "#",
  },
];

// ── Modal component
function Modal({ cert, onClose }) {
  if (!cert) return null;
  return (
    <div style={ms.overlay} onClick={onClose}>
      <div className="modal-box" style={ms.box} onClick={e => e.stopPropagation()}>
        <button style={ms.close} onClick={onClose}>✕</button>
        <div style={ms.imgWrap}>
          <img src={cert.img} alt={cert.title} style={ms.img} />
        </div>
        <div style={ms.info}>
          <span style={{ ...ms.tag, background: cert.tagColor + "22", color: cert.tagColor, borderColor: cert.tagColor + "55" }}>{cert.tag}</span>
          <h2 style={ms.title}>{cert.title}</h2>
          <p style={ms.issuer}>🏛️ {cert.issuer}</p>
          <p style={ms.date}>📅 {cert.date}</p>
          <p style={ms.desc}>{cert.desc}</p>
          {cert.credential !== "#" && (
            <a href={cert.credential} target="_blank" rel="noopener noreferrer" style={ms.credBtn}>
              View Credential ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Flip Card
function CertCard({ cert, onClick }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      style={{ perspective: "1000px", cursor: "pointer" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => onClick(cert)}
    >
      <div style={{
        position: "relative", width: "100%", paddingBottom: "72%",
        transformStyle: "preserve-3d",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        transition: "transform 0.6s cubic-bezier(.25,.8,.25,1)",
      }}>
        {/* FRONT */}
        <div style={{ ...face, backfaceVisibility: "hidden" }}>
          <img src={cert.img} alt={cert.title} style={{
            width: "100%", height: "100%", objectFit: "cover", objectPosition: "top",
            display: "block",
          }} />
          <div style={fc.overlay} />
          <span style={{ ...fc.tag, background: cert.tagColor + "dd", color: "#fff" }}>{cert.tag}</span>
          <div style={fc.hoverHint}>👆</div>
        </div>

        {/* BACK */}
        <div style={{ ...face, backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#050d1f", border: `1px solid ${cert.tagColor}44`, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "20px" }}>
          <div>
            <span style={{ ...fc.tag, background: cert.tagColor + "22", color: cert.tagColor, border: `1px solid ${cert.tagColor}55`, position: "static", display: "inline-block", marginBottom: 12 }}>{cert.tag}</span>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f0f6ff", lineHeight: 1.4, marginBottom: 8 }}>{cert.title}</h3>
            <p style={{ fontSize: 12, color: cert.tagColor, fontWeight: 600, marginBottom: 6 }}>{cert.issuer}</p>
            <p style={{ fontSize: 11, color: "#7a95c0", marginBottom: 10 }}>📅 {cert.date}</p>
            <p style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>{cert.desc}</p>
          </div>
          <div style={{ fontSize: 12, color: "#38bdf8", marginTop: 12, textAlign: "center" }}>🔍 Click to zoom</div>
        </div>
      </div>
    </div>
  );
}

const face = {
  position: "absolute", inset: 0,
  borderRadius: 12, overflow: "hidden",
  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
};
const fc = {
  overlay: {
    position: "absolute", inset: 0,
    background: "linear-gradient(to top, rgba(2,8,20,0.7) 0%, transparent 60%)",
  },
  tag: {
    position: "absolute", top: 12, left: 12,
    fontSize: 10, fontWeight: 700, padding: "3px 10px",
    borderRadius: 50, fontFamily: "'Space Mono',monospace",
    letterSpacing: 1,
  },
  hoverHint: {
    position: "absolute", bottom: 10, right: 10,
    fontSize: 10, color: "rgba(255,255,255,0.5)",
    fontFamily: "'Space Mono',monospace",
  },
};

// modal styles
const ms = {
  overlay: {
    position: "fixed", inset: 0, zIndex: 9999,
    background: "rgba(2,8,20,0.92)",
    backdropFilter: "blur(12px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "20px",
    animation: "fadeIn 0.3s ease",
  },
  box: {
    background: "#050d1f",
    border: "1px solid rgba(56,189,248,0.25)",
    borderRadius: 20, overflow: "hidden",
    maxWidth: 900, width: "100%",
    display: "grid", gridTemplateColumns: "1.2fr 1fr",
    maxHeight: "90vh",
    boxShadow: "0 0 80px rgba(56,189,248,0.15)",
    animation: "popIn 0.35s cubic-bezier(.25,.8,.25,1)",
    className: "modal-box",
  },
  imgWrap: { overflow: "hidden", maxHeight: "90vh" },
  img: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" },
  info: { padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12, overflowY: "auto" },
  close: {
    position: "absolute", top: 16, right: 16,
    background: "rgba(255,255,255,0.1)", border: "none",
    color: "#fff", width: 36, height: 36, borderRadius: "50%",
    fontSize: 16, cursor: "pointer", zIndex: 10000,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  tag: { display: "inline-block", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 50, border: "1px solid", fontFamily: "'Space Mono',monospace", width: "fit-content" },
  title: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(16px,2vw,22px)", fontWeight: 800, color: "#f0f6ff", lineHeight: 1.3 },
  issuer: { fontSize: 14, color: "#38bdf8", fontWeight: 600 },
  date: { fontSize: 13, color: "#7a95c0" },
  desc: { fontSize: 14, color: "#94a3b8", lineHeight: 1.75, flexGrow: 1 },
  credBtn: {
    display: "inline-block", padding: "10px 22px", borderRadius: 10,
    background: "linear-gradient(135deg,#1e8fff,#38bdf8)",
    color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 600,
    boxShadow: "0 0 16px rgba(30,143,255,0.4)", width: "fit-content",
  },
};

export default function Certificates() {
  const [active,  setActive]  = useState("All");
  const [modal,   setModal]   = useState(null);

  const filtered = active === "All" ? certs : certs.filter(c => c.category === active);

  return (
    <section id="certificates" style={s.section}>

      {/* deco icons */}
      <div style={{ ...s.decoIcon, left: 60, top: 80 }}>🏅</div>
      <div style={{ ...s.decoIcon, right: 60, top: 80 }}>🎓</div>

      {/* ── HEADER ── */}
      <div style={s.header}>
        <span style={s.tag}>🏆 My Achievements</span>
        <h2 style={s.title}>
          <span style={s.titleBlue}>Certi</span>ficates
        </h2>
        <p style={s.subtitle}>
          Every certificate represents a <span style={{ color:"#38bdf8" }}>milestone</span>,<br />
          every milestone pushes me forward.
        </p>
      </div>

      {/* ── FILTER TABS ── */}
      <div style={s.filters}>
        {categories.map(c => (
          <button key={c} onClick={() => setActive(c)} style={{
            ...s.filterBtn,
            background:  active === c ? "linear-gradient(135deg,#1e8fff,#38bdf8)" : "transparent",
            borderColor: active === c ? "transparent" : "rgba(56,189,248,0.25)",
            color:       active === c ? "#fff" : "#7a95c0",
            boxShadow:   active === c ? "0 0 16px rgba(30,143,255,0.4)" : "none",
            transform:   active === c ? "translateY(-1px)" : "none",
          }}>{c}</button>
        ))}
      </div>

      {/* ── GRID ── */}
      <div className="cert-grid" style={s.grid}>
        {filtered.map((cert, i) => (
          <div key={cert.id} style={{ animation: `fadeUp 0.5s ease both ${i * 0.05}s` }}>
            <CertCard cert={cert} onClick={setModal} />
            <div style={{ marginTop: 10, padding: "0 4px" }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", lineHeight: 1.3, marginBottom: 4 }}>{cert.title}</p>
              <p style={{ fontSize: 11, color: "#38bdf8", fontFamily: "'Space Mono',monospace" }}>{cert.issuer}</p>
              <p style={{ fontSize: 11, color: "#7a95c0" }}>📅 {cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOTTOM BANNER ── */}
      <div style={s.banner}>
        <span style={{ fontSize: 28 }}>🏆</span>
        <div>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#f0f6ff" }}>Learning Never Stops</p>
          <p style={{ fontSize: 13, color: "#7a95c0" }}>
            I'm <span style={{ color: "#38bdf8" }}>constantly</span> learning, growing and upgrading my skills.
          </p>
        </div>
        <a href="https://drive.google.com/drive/folders/1dsd_UZb4XoczEWtnKdax_DttQ9qRwdej"
          target="_blank" rel="noopener noreferrer" style={s.allLink}>
          View All Certificates ✦
        </a>
      </div>

      {/* ── MODAL ── */}
      <Modal cert={modal} onClose={() => setModal(null)} />

      <style>{`
        @keyframes fadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes popIn   { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
        @keyframes titleShine { 0%{background-position:200% center} 100%{background-position:-200% center} }

        /* ── CERTIFICATES RESPONSIVE ── */
        @media (max-width: 1024px) {
          #certificates { padding: 60px 32px !important; }
          .cert-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          #certificates { padding: 60px 22px !important; }
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #certificates { padding: 54px 14px 44px !important; }
          .cert-grid { grid-template-columns: 1fr !important; }
          #certificates .filters { flex-wrap: wrap; gap: 8px; }
          #certificates .banner { flex-direction: column; align-items: flex-start; gap: 14px; }
          #certificates .banner a { margin-left: 0 !important; }
        }
        /* Modal responsive */
        @media (max-width: 768px) {
          .modal-box {
            grid-template-columns: 1fr !important;
            max-height: 92vh;
            overflow-y: auto;
          }
          .modal-box .modal-img-wrap { max-height: 50vw; }
        }
      `}</style>
    </section>
  );
}

const s = {
  section: {
    background: "#020814",
    padding: "80px 60px 80px",
    fontFamily: "'DM Sans',sans-serif",
    position: "relative", overflow: "hidden",
  },
  decoIcon: {
    position: "absolute", fontSize: 64,
    opacity: 0.05, pointerEvents: "none",
    filter: "blur(1px)",
  },
  header:    { textAlign: "center", marginBottom: 36 },
  tag:       { display:"inline-block", fontFamily:"'Space Mono',monospace", fontSize:12, letterSpacing:3, color:"#38bdf8", border:"1px solid rgba(56,189,248,0.3)", padding:"5px 18px", borderRadius:50, background:"rgba(56,189,248,0.06)", marginBottom:18 },
  title:     { fontFamily:"'Syne',sans-serif", fontSize:"clamp(40px,6vw,80px)", fontWeight:800, color:"#f0f6ff", lineHeight:1.05, marginBottom:14 },
  titleBlue: { background:"linear-gradient(90deg,#38bdf8,#818cf8,#38bdf8)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"titleShine 3s linear infinite" },
  subtitle:  { fontSize:16, color:"#7a95c0", lineHeight:1.7 },

  filters:  { display:"flex", justifyContent:"center", gap:10, marginBottom:40, flexWrap:"wrap" },
  filterBtn:{ padding:"9px 22px", borderRadius:50, border:"1px solid", fontSize:13, fontWeight:500, cursor:"pointer", transition:"all 0.3s ease", fontFamily:"'DM Sans',sans-serif" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },

  banner: {
    marginTop: 52, display:"flex", alignItems:"center", gap:20,
    background:"rgba(5,13,31,0.85)", border:"1px solid rgba(56,189,248,0.18)",
    borderRadius:16, padding:"22px 32px",
    flexWrap:"wrap",
  },
  allLink: {
    marginLeft:"auto", color:"#38bdf8", fontSize:13, fontWeight:600,
    textDecoration:"none", fontFamily:"'Space Mono',monospace",
    border:"1px solid rgba(56,189,248,0.3)", padding:"8px 18px", borderRadius:8,
    transition:"all 0.3s ease",
    whiteSpace:"nowrap",
  },
};
