import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/shehara.jpeg";

const techStack = [
  { label: "HTML",       icon: "🟧" },
  { label: "CSS",        icon: "🟦" },
  { label: "Bootstrap",  icon: "🟣" },
  { label: "JavaScript", icon: "🟨" },
  { label: "React",      icon: "⚛️"  },
  { label: "Node.js",    icon: "🟩" },
  { label: "Express",    icon: "✦"  },
  { label: "SQLite",     icon: "◈"  },
];

const roles = [
  "React & Node.js Developer",
  "AI Enthusiast",
  "Full-Stack Developer",
  "Frontend Explorer",
];

export default function Hero() {
  const canvasRef   = useRef(null);
  const cursorRef   = useRef(null);
  const ringRef     = useRef(null);
  const mouseRef    = useRef({ x: 0, y: 0 });
  const ringPos     = useRef({ x: 0, y: 0 });
  const starsRef    = useRef([]);
  const rafRef      = useRef(null);
  const orbitRef    = useRef(null);

  const [typedText, setTypedText] = useState("");
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  /* ── Typed text ── */
  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;
    if (!deleting) {
      if (typedText.length < target.length) {
        timeout = setTimeout(() => setTypedText(target.slice(0, typedText.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => setTypedText(typedText.slice(0, -1)), 32);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, deleting, roleIdx]);

  /* ── Custom cursor ── */
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + "px";
        cursorRef.current.style.top  = e.clientY - 6 + "px";
      }
    };
    window.addEventListener("mousemove", onMove);

    let animId;
    const animRing = () => {
      ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x - 19 + "px";
        ringRef.current.style.top  = ringPos.current.y - 19 + "px";
      }
      animId = requestAnimationFrame(animRing);
    };
    animRing();
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(animId); };
  }, []);

  /* ── Canvas stars ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let W, H, stars = [], particles = [];

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random(), da: (Math.random() - 0.5) * 0.007,
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
      });
    }
    const spawnP = () => particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 1,
      a: Math.random() * 0.4 + 0.1,
      decay: Math.random() * 0.003 + 0.001,
      color: Math.random() > 0.5 ? "30,143,255" : "0,212,255",
    });
    for (let i = 0; i < 40; i++) spawnP();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      stars.forEach((s, i) => {
        s.a += s.da; if (s.a<=0||s.a>=1) s.da*=-1;
        s.x += s.dx; s.y += s.dy;
        if (s.x<0) s.x=W; if (s.x>W) s.x=0;
        if (s.y<0) s.y=H; if (s.y>H) s.y=0;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(180,210,255,${s.a})`; ctx.fill();

        const dd = Math.hypot(s.x-mx, s.y-my);
        if (dd < 140) {
          ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(mx,my);
          ctx.strokeStyle = `rgba(30,143,255,${0.18*(1-dd/140)})`;
          ctx.lineWidth = 0.8; ctx.stroke();
        }
        stars.slice(i+1).forEach(s2 => {
          const d2 = Math.hypot(s.x-s2.x, s.y-s2.y);
          if (d2 < 80) {
            ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(s2.x,s2.y);
            ctx.strokeStyle = `rgba(30,143,255,${0.06*(1-d2/80)})`;
            ctx.lineWidth=0.4; ctx.stroke();
          }
        });
      });

      particles.forEach((p,i) => {
        p.x+=p.vx; p.y+=p.vy; p.a-=p.decay;
        if (p.a<=0){ particles.splice(i,1); spawnP(); return; }
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(${p.color},${p.a})`;
        ctx.shadowBlur=10; ctx.shadowColor=`rgba(${p.color},0.8)`;
        ctx.fill(); ctx.shadowBlur=0;
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(rafRef.current); };
  }, []);

  /* ── 3D tilt on orbit ── */
  const handleOrbitMove = (e) => {
    const el   = orbitRef.current;
    const rect = el.getBoundingClientRect();
    const dx   = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
    const dy   = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    el.style.transform  = `rotateY(${dx*10}deg) rotateX(${-dy*10}deg)`;
    el.style.transition = "transform 0.1s ease";
  };
  const handleOrbitLeave = () => {
    orbitRef.current.style.transform  = "none";
    orbitRef.current.style.transition = "transform 0.6s ease";
  };

  /* ── Parallax blobs on mouse ── */
  useEffect(() => {
    const onMove = (e) => {
      const dx = e.clientX / window.innerWidth  - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      document.querySelectorAll(".blob").forEach((b, i) => {
        const f = (i + 1) * 20;
        b.style.transform = `translate(${dx*f}px,${dy*f}px)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* ── Cursor ── */}
      <div ref={cursorRef} className="hero-cursor" style={styles.cursor} />
      <div ref={ringRef}   className="hero-ring" style={styles.cursorRing} />

      {/* ── Canvas ── */}
      <canvas ref={canvasRef} style={styles.canvas} />

      {/* ── Background ── */}
      <div style={styles.scanlines} />
      <div style={styles.gridOverlay} />
      <div className="blob" style={{...styles.blob, width:600,height:600,background:"radial-gradient(circle,#1e8fff,transparent 70%)",top:-120,left:-160}} />
      <div className="blob" style={{...styles.blob, width:500,height:500,background:"radial-gradient(circle,#00d4ff,transparent 70%)",bottom:-100,right:-100,animationDelay:"2s",animationDirection:"reverse"}} />
      <div className="blob" style={{...styles.blob, width:280,height:280,background:"radial-gradient(circle,#6c63ff,transparent 70%)",top:"40%",left:"50%",animationDelay:"1s"}} />

      {/* ── Section ── */}
      <section id="hero-section" style={styles.hero}>
        {/* LEFT */}
        <div className="hero-left" style={styles.left}>
          <span style={styles.badge}>
            <span style={styles.dot} />
            Available for opportunities
          </span>

          <p style={styles.greeting}>Hi, I'm</p>

          <h1 style={styles.name}>
            <span style={styles.nameBlue}>Shehara Banu</span>{" "}
            <span style={styles.nameWhite}>Jamal</span>
          </h1>

          <p style={styles.role}>
            <span style={styles.roleBlue}>{typedText}</span>
            <span style={styles.blink} />
          </p>

          <p style={styles.desc}>
            A curious learner who enjoys building projects,  From debugging simple programs to
{" "}
            <span style={styles.descAccent}>exploring AI and full-stack development</span>,
           ...!!

          </p>

          <div className="hero-cta" style={styles.cta}>
            <a href="#projects" style={styles.btnPrimary}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 12px 28px rgba(30,143,255,0.6)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 8px 24px rgba(30,143,255,0.4)";}}>
              🚀 View Projects
            </a>
             <a href="/SHEHARA'S RESUME-1.pdf" target="_blank" rel="noopener noreferrer" style={styles.btnSecondary}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.borderColor="rgba(255,255,255,0.2)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";}}>
              📄 View Resume
             </a>
            <a href="https://learning.ccbp.in/progress/public?uid=0d3bafe2-2ced-442e-958d-b8f1dd86d8cb" target="_blank" rel="noopener noreferrer" style={styles.btnNxtWave}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.background="rgba(56,189,248,0.15)"; e.currentTarget.style.borderColor="rgba(56,189,248,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.background="rgba(56,189,248,0.05)"; e.currentTarget.style.borderColor="rgba(56,189,248,0.3)"; }}>
              🎓 NxtWave Profile
            </a>
            <a href="#contact" style={styles.btnSecondary}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.borderColor="rgba(255,255,255,0.2)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";}}>
              ✉️ Contact Me
            </a>
          </div>

          <div>
            <p style={styles.techLabel}>TECH STACK</p>
            <div className="hero-tags" style={styles.tags}>
              {techStack.map((t) => (
                <span key={t.label} style={styles.tag}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(30,143,255,0.7)";e.currentTarget.style.color="#f0f6ff";e.currentTarget.style.transform="translateY(-2px) scale(1.05)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(30,143,255,0.2)";e.currentTarget.style.color="#7a95c0";e.currentTarget.style.transform="none";}}
                >
                  {t.icon} {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-orbit-wrap" style={styles.right}>
          <div ref={orbitRef} className="orbit-system" style={styles.orbitSystem}
            onMouseMove={handleOrbitMove}
            onMouseLeave={handleOrbitLeave}>

            {/* rings */}
            <div style={{...styles.ring, width:"110%",height:"110%",animation:"ringRotate 20s linear infinite"}} />
            <div style={{...styles.ring, width:"130%",height:"130%",borderStyle:"dashed",borderColor:"rgba(0,212,255,0.12)",animation:"ringRotate 35s linear infinite reverse"}} />
            <div style={{...styles.ring, width:"152%",height:"152%",borderColor:"rgba(30,143,255,0.07)",animation:"ringRotate 55s linear infinite"}} />

            {/* photo */}
            <div style={styles.photoWrap}>
              <img src={heroImg} alt="Shehara" style={styles.photo} />
            </div>

            {/* floating icons */}
            {[
              { label:"⚛",  color:"#61dafb", top:"-26px", left:"50%",  ml:"-26px" },
              { label:"JS",  color:"#f7df1e", bottom:"10%",right:"-46px" },
              { label:"H5",  color:"#e44d26", bottom:"-26px",left:"50%", ml:"-26px" },
              { label:"N",   color:"#68a063", top:"30%",   right:"-50px" },
              { label:"C3",  color:"#2965f1", bottom:"28%",right:"-42px" },
              { label:"B",   color:"#7952b3", bottom:"10%",left:"-46px"  },
            ].map((ic, i) => (
              <div key={i} style={{
                ...styles.orbitIcon,
                top: ic.top, bottom: ic.bottom,
                left: ic.left, right: ic.right,
                marginLeft: ic.ml || 0,
                color: ic.color,
                animationDelay: `${i * 0.5}s`,
              }}>{ic.label}</div>
            ))}
          </div>
        </div>
      </section>

      {/* scroll hint */}
      <div style={styles.scrollHint}>
        <span style={{fontSize:11,letterSpacing:2,color:"#1e8fff",fontFamily:"monospace"}}>scroll</span>
        <div style={styles.scrollMouse}>
          <div style={styles.scrollWheel} />
        </div>
        <span style={{color:"#1e8fff",fontSize:14}}>↓</span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#020814; overflow-x:hidden; }
        @media (min-width: 1025px) {
          * { cursor: none !important; }
          .hero-cursor, .hero-ring { display: block; }
        }
        @media (max-width: 1024px) {
          .hero-cursor, .hero-ring { display: none !important; }
        }
        @keyframes ringRotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulseDot { 0%,100%{box-shadow:0 0 0 0 rgba(0,229,160,0.6)} 50%{box-shadow:0 0 0 6px rgba(0,229,160,0)} }
        @keyframes dotGlow { 0%,100%{box-shadow:0 0 6px rgba(0,229,160,0.8)} 50%{box-shadow:0 0 14px rgba(0,229,160,1)} }
        @keyframes photoGlow {
          0%,100%{box-shadow:0 0 60px rgba(14,111,255,0.5),0 0 120px rgba(14,111,255,0.15),inset 0 0 60px rgba(14,111,255,0.08)}
          50%{box-shadow:0 0 80px rgba(0,212,255,0.65),0 0 160px rgba(0,212,255,0.2),inset 0 0 80px rgba(0,212,255,0.12)}
        }
        @keyframes blobFloat { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(25px,-35px) scale(1.07)} }
        @keyframes iconFloat { 0%,100%{transform:translateY(0);box-shadow:0 0 14px rgba(30,143,255,0.35)} 50%{transform:translateY(-8px);box-shadow:0 8px 22px rgba(30,143,255,0.55)} }
        @keyframes scrollWheel { 0%,100%{opacity:1;transform:translateY(0)} 80%{opacity:0;transform:translateY(12px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        .hero-left-child { animation: fadeUp 0.6s ease both; }

        /* ── HERO RESPONSIVE ── */
        #hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1024px) {
          #hero-section {
            grid-template-columns: 1fr !important;
            padding: 100px 28px 60px !important;
            gap: 40px !important;
            text-align: center;
          }
          #hero-section .hero-left {
            align-items: center;
          }
          #hero-section .hero-cta {
            justify-content: center;
            flex-wrap: wrap;
          }
          #hero-section .hero-tags {
            justify-content: center;
          }
          #hero-section .hero-orbit-wrap {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            max-width: 300px !important;
            height: 300px !important;
            margin: 0 auto !important;
            position: relative !important;
            overflow: hidden !important;
          }
          #hero-section .orbit-system {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) scale(0.7) !important;
            transform-origin: center center !important;
            margin: 0 !important;
          }
        }
        @media (max-width: 768px) {
          #hero-section {
            padding: 90px 18px 50px !important;
            gap: 30px !important;
          }
          #hero-section .hero-orbit-wrap {
            max-width: 250px !important;
            height: 250px !important;
          }
          #hero-section .orbit-system {
            transform: translate(-50%, -50%) scale(0.58) !important;
          }
        }
        @media (max-width: 480px) {
          #hero-section {
            padding: 80px 14px 44px !important;
          }
          #hero-section .hero-orbit-wrap {
            max-width: 220px !important;
            height: 220px !important;
          }
          #hero-section .orbit-system {
            transform: translate(-50%, -50%) scale(0.5) !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  cursor: {
    position:"fixed", width:12, height:12, borderRadius:"50%",
    background:"#00d4ff", pointerEvents:"none", zIndex:9999,
    transition:"transform 0.15s ease", mixBlendMode:"screen",
  },
  cursorRing: {
    position:"fixed", width:38, height:38, borderRadius:"50%",
    border:"1.5px solid rgba(0,212,255,0.5)",
    pointerEvents:"none", zIndex:9998,
    transition:"left 0s, top 0s",
  },
  canvas: {
    position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
  },
  scanlines: {
    position:"fixed", inset:0, pointerEvents:"none", zIndex:1,
    background:"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)",
  },
  gridOverlay: {
    position:"fixed", inset:0, pointerEvents:"none", zIndex:0,
    backgroundImage:"linear-gradient(rgba(30,143,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(30,143,255,0.025) 1px,transparent 1px)",
    backgroundSize:"60px 60px",
  },
  blob: {
    position:"fixed", borderRadius:"50%", filter:"blur(100px)",
    opacity:0.12, pointerEvents:"none", zIndex:0,
    animation:"blobFloat 12s ease-in-out infinite",
    transition:"transform 0.3s ease",
  },
  hero: {
    minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr",
    alignItems:"center", gap:60, padding:"100px 72px 80px",
    position:"relative", zIndex:2, fontFamily:"'DM Sans',sans-serif",
    id:"hero-section",
  },
  left: { display:"flex", flexDirection:"column", gap:22 },
  badge: {
    display:"inline-flex", alignItems:"center", gap:8,
    border:"1px solid rgba(0,229,160,0.3)", borderRadius:50,
    padding:"6px 16px", fontSize:13, color:"#00e5a0",
    background:"rgba(0,229,160,0.06)", width:"fit-content",
    animation:"fadeUp 0.6s ease both 0.2s",
  },
  dot: {
    width:7, height:7, borderRadius:"50%", background:"#00e5a0",
    display:"inline-block",
    animation:"pulseDot 2s ease-in-out infinite",
  },
  greeting: { fontSize:22, color:"#7a95c0", animation:"fadeUp 0.6s ease both 0.35s" },
  name: {
    fontFamily:"'Syne',sans-serif",
    fontSize:"clamp(42px,5vw,68px)", fontWeight:800, lineHeight:1.05,
    animation:"fadeUp 0.6s ease both 0.45s",
  },
  nameBlue:  { color:"#1e8fff" },
  nameWhite: { color:"#f0f6ff" },
  role: {
    fontFamily:"'Syne',sans-serif", fontSize:"clamp(18px,2vw,26px)",
    fontWeight:600, color:"#f0f6ff",
    display:"flex", alignItems:"center", gap:8, minHeight:36,
    animation:"fadeUp 0.6s ease both 0.55s",
  },
  roleBlue: { color:"#1e8fff" },
  blink: {
    display:"inline-block", width:2, height:"1.1em",
    background:"#1e8fff", marginLeft:2, verticalAlign:"middle",
    animation:"blink 1s step-end infinite",
  },
  desc: {
    fontSize:15, color:"#7a95c0", lineHeight:1.8, maxWidth:420,
    animation:"fadeUp 0.6s ease both 0.65s",
  },
  descAccent: { color:"#1e8fff", fontWeight:500 },
  cta: { display:"flex", gap:14, animation:"fadeUp 0.6s ease both 0.75s", flexWrap: "wrap", maxWidth: 500 },
  btnPrimary: {
    display:"inline-flex", alignItems:"center", gap:8,
    padding:"11px 24px", borderRadius:12, fontSize:14, fontWeight:600,
    textDecoration:"none", color:"#fff",
    background:"linear-gradient(135deg,#1e8fff,#38bdf8)",
    boxShadow:"0 8px 24px rgba(30,143,255,0.4)",
    border:"1px solid rgba(255,255,255,0.1)",
    transition:"all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
  },
  btnSecondary: {
    display:"inline-flex", alignItems:"center", gap:8,
    padding:"11px 24px", borderRadius:12, fontSize:14, fontWeight:600,
    textDecoration:"none", color:"#f0f6ff",
    background:"rgba(255,255,255,0.03)",
    border:"1px solid rgba(255,255,255,0.1)",
    backdropFilter:"blur(10px)",
    boxShadow:"0 4px 12px rgba(0,0,0,0.1)",
    transition:"all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
  },
  btnNxtWave: {
    display:"inline-flex", alignItems:"center", gap:8,
    padding:"11px 24px", borderRadius:12, fontSize:14, fontWeight:600,
    textDecoration:"none", color:"#38bdf8",
    background:"rgba(56,189,248,0.05)",
    border:"1px solid rgba(56,189,248,0.3)",
    backdropFilter:"blur(10px)",
    boxShadow:"0 4px 16px rgba(56,189,248,0.15)",
    transition:"all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
  },
  techLabel: {
    fontFamily:"'Space Mono',monospace", fontSize:11,
    letterSpacing:2, color:"#1e8fff", marginBottom:14,
    textTransform:"uppercase",
    animation:"fadeUp 0.6s ease both 0.85s",
  },
  tags: { display:"flex", flexWrap:"wrap", gap:10 },
  tag: {
    display:"inline-flex", alignItems:"center", gap:7,
    padding:"7px 14px", borderRadius:8, fontSize:13, color:"#7a95c0",
    border:"1px solid rgba(30,143,255,0.2)",
    background:"rgba(5,13,31,0.8)",
    transition:"all 0.3s ease",
  },
  right: {
    display:"flex", justifyContent:"center", alignItems:"center",
    animation:"fadeUp 0.8s ease both 0.4s",
  },
  orbitSystem: {
    position:"relative", width:400, height:400,
    transformStyle:"preserve-3d",
  },
  ring: {
    position:"absolute", borderRadius:"50%",
    border:"1px solid rgba(30,143,255,0.28)",
    inset:0, margin:"auto",
    width:"100%", height:"100%",
  },
  photoWrap: {
    position:"absolute", inset:0, margin:"auto",
    width:"100%", height:"100%", borderRadius:"50%",
    overflow:"hidden",
    border:"3px solid transparent",
    background:"linear-gradient(#020814,#020814) padding-box, linear-gradient(135deg,#1e8fff,#00d4ff,#1e8fff) border-box",
    animation:"photoGlow 4s ease-in-out infinite",
  },
  photo: {
    width:"100%", height:"100%",
    objectFit:"cover", objectPosition:"top center",
    filter:"contrast(1.05) brightness(1.05)",
  },
  orbitIcon: {
    position:"absolute", width:50, height:50, borderRadius:"50%",
    background:"rgba(5,13,31,0.9)",
    border:"1.5px solid rgba(30,143,255,0.4)",
    display:"flex", alignItems:"center", justifyContent:"center",
    fontSize:18, fontWeight:700, fontFamily:"monospace",
    animation:"iconFloat 6s ease-in-out infinite",
    transition:"transform 0.3s ease, box-shadow 0.3s ease",
  },
  scrollHint: {
    position:"fixed", bottom:28, left:"50%", transform:"translateX(-50%)",
    display:"flex", flexDirection:"column", alignItems:"center", gap:8,
    zIndex:10, animation:"fadeUp 0.8s ease both 1.4s",
  },
  scrollMouse: {
    width:24, height:38, border:"2px solid rgba(30,143,255,0.6)",
    borderRadius:12, display:"flex", justifyContent:"center", paddingTop:6,
  },
  scrollWheel: {
    width:4, height:8, background:"#1e8fff", borderRadius:2,
    animation:"scrollWheel 2s ease-in-out infinite",
  },
};
