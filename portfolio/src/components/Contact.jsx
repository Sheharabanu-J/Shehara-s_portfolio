import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════
   SOCIAL & CONTACT DATA
═══════════════════════════════════════════════════════ */
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Sheharabanu-J",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shehara-banu-jamal?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/Shehara__jamal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sharu_jamal_?igsh=aHRucm5wc2EwODNn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jamaljamal6330@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const INFO_CARDS = [
  {
    label: "Email", value: "jamaljamal6330@gmail.com",
    href: "mailto:jamaljamal6330@gmail.com",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
  },
  {
    label: "Phone", value: "+91 7845124247",
    href: "tel:+917845124247",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" /></svg>,
  },
  {
    label: "Location", value: "Tamil Nadu, India",
    href: "#",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
  {
    label: "Availability", value: "Open to Work",
    href: "#", badge: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  },
];

/* ═══════════════════════════════════════════════════════
   PAPER PLANE — exact match to reference image
   Absolutely positioned between the two columns
═══════════════════════════════════════════════════════ */
function PaperPlane() {
  return (
    <div className="ct-plane" style={{
      position: "absolute",
      top: 170,
      left: "37%",
      zIndex: 2,
      pointerEvents: "none",
      animation: "planeBob 5s ease-in-out infinite",
      filter: "drop-shadow(0 0 14px rgba(56,189,248,0.6))",
    }}>
      <svg viewBox="0 0 110 230" width="96" height="200" fill="none">
        {/* ── Plane body (pointing upper-right at ~40°) ── */}
        <g transform="rotate(-38 55 70)">
          {/* main triangle */}
          <path
            d="M10 72 L90 40 L72 115 L46 88 Z"
            stroke="rgba(56,189,248,0.95)"
            strokeWidth="1.8"
            fill="rgba(56,189,248,0.07)"
            strokeLinejoin="round"
          />
          {/* fold crease */}
          <path d="M46 88 L90 40" stroke="rgba(56,189,248,0.45)" strokeWidth="1.3" />
          {/* bottom tail */}
          <path d="M46 88 L57 102" stroke="rgba(56,189,248,0.85)" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        {/* ── Dashed flight-path curve going down ── */}
        <path
          d="M66 108 C74 138, 80 162, 76 188 C73 205, 62 212, 58 210"
          stroke="rgba(56,189,248,0.38)"
          strokeWidth="1.6"
          strokeDasharray="5 4.5"
          strokeLinecap="round"
          style={{ animation: "trailPulse 3s ease-in-out infinite" }}
        />

        {/* ── Destination dashed circle ── */}
        <circle
          cx="58" cy="210" r="9"
          stroke="rgba(56,189,248,0.45)"
          strokeWidth="1.4"
          strokeDasharray="4 3"
          style={{ animation: "circleSpin 8s linear infinite", transformOrigin: "58px 210px" }}
        />
        <circle cx="58" cy="210" r="3.5" fill="rgba(56,189,248,0.75)" />

        {/* ── Sparkle dots ── */}
        <circle cx="90" cy="60" r="2.5" fill="rgba(56,189,248,0.7)"
          style={{ animation: "sparkleDot 2.5s ease-in-out infinite" }} />
        <circle cx="82" cy="155" r="2" fill="rgba(56,189,248,0.5)"
          style={{ animation: "sparkleDot 3.2s ease-in-out 0.8s infinite" }} />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState("");
  const [visible, setVisible] = useState(false);
  const [hCard, setHCard] = useState(null);
  const sectionRef = useRef(null);

  /* scroll reveal */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.07 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      window.location.href = `mailto:jamaljamal6330@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  /* input style factory */
  const inp = (name) => ({
    width: "100%", boxSizing: "border-box",
    background: focused === name ? "rgba(56,189,248,0.06)" : "rgba(255,255,255,0.03)",
    border: `1.5px solid ${focused === name ? "rgba(56,189,248,0.7)" : "rgba(56,189,248,0.15)"}`,
    borderRadius: 10,
    padding: "13px 14px 13px 42px",
    color: "#e8f4ff", fontSize: 14, outline: "none",
    fontFamily: "'DM Sans',sans-serif",
    transition: "all 0.3s ease",
    boxShadow: focused === name ? "0 0 0 3px rgba(56,189,248,0.1)" : "none",
  });

  const iconWrap = {
    position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)",
    color: "#38bdf8", pointerEvents: "none",
    display: "flex", alignItems: "center",
  };

  return (
    <>
      {/* ═══════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="contact"
        ref={sectionRef}
        style={{
          background: "#020814",
          padding: "88px 5vw 80px",
          fontFamily: "'DM Sans',sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── ambient glow blobs ── */}
        <div style={{ position: "absolute", width: 560, height: 560, top: -140, left: -140, background: "radial-gradient(circle,rgba(30,143,255,0.08),transparent 68%)", borderRadius: "50%", filter: "blur(72px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 480, height: 480, bottom: -100, right: -100, background: "radial-gradient(circle,rgba(168,85,247,0.07),transparent 68%)", borderRadius: "50%", filter: "blur(72px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 300, height: 300, top: "45%", left: "44%", background: "radial-gradient(circle,rgba(56,189,248,0.04),transparent 70%)", borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none" }} />

        {/* ── floating particles ── */}
        {[
          { t: "9%", l: "3%", s: 3.5, d: "0s", dr: "4s" },
          { t: "25%", l: "18%", s: 2.5, d: "1.1s", dr: "5.5s" },
          { t: "62%", l: "1%", s: 4, d: "0.6s", dr: "3.8s" },
          { t: "80%", l: "14%", s: 2.5, d: "2.1s", dr: "6s" },
          { t: "88%", l: "30%", s: 3, d: "0.3s", dr: "4.5s" },
          { t: "12%", r: "4%", s: 3, d: "0.9s", dr: "5s" },
          { t: "48%", r: "2%", s: 4, d: "1.6s", dr: "4s" },
          { t: "70%", r: "11%", s: 2.5, d: "0.7s", dr: "5.2s" },
          { t: "85%", r: "22%", s: 3, d: "2.4s", dr: "3.5s" },
          { t: "32%", l: "50%", s: 2.5, d: "1.3s", dr: "4.8s" },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute", top: p.t, left: p.l, right: p.r,
            width: p.s, height: p.s, borderRadius: "50%",
            background: "rgba(56,189,248,0.65)",
            boxShadow: `0 0 ${p.s * 3}px rgba(56,189,248,0.8)`,
            animation: `ctDotFloat ${p.dr} ease-in-out ${p.d} infinite`,
            pointerEvents: "none",
          }} />
        ))}

        {/* ── inner content wrapper (position: relative so plane can be absolute) ── */}
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>

          {/* PAPER PLANE absolutely positioned between columns */}
          <PaperPlane />

          {/* ── TWO-COLUMN GRID ── */}
          <div className="ct-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.22fr",
            gap: "clamp(28px,5vw,64px)",
            alignItems: "start",
          }}>

            {/* ══════════ LEFT COLUMN ══════════ */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 22,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(-44px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}>

              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", background: "#38bdf8",
                  boxShadow: "0 0 10px #38bdf8",
                  animation: "ctPulse 2s ease-in-out infinite",
                  display: "inline-block", flexShrink: 0,
                }} />
                <span style={{ fontSize: 11, letterSpacing: "3px", color: "#38bdf8", fontFamily: "'Space Mono',monospace" }}>
                  GET IN TOUCH
                </span>
              </div>

              {/* Heading */}
              <h2 style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(30px,3.6vw,50px)",
                fontWeight: 800, color: "#f0f6ff", lineHeight: 1.1,
                letterSpacing: "-0.5px",
              }}>
                Let's Build<br />
                Something{" "}
                <span style={{
                  background: "linear-gradient(90deg,#38bdf8,#818cf8,#38bdf8)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "ctShine 3s linear infinite",
                  borderBottom: "2.5px solid #38bdf8",
                  paddingBottom: 2,
                  display: "inline-block",
                }}>Amazing</span>
              </h2>

              {/* Description */}
              <p style={{ fontSize: 15, color: "#7a95c0", lineHeight: 1.85, maxWidth: 360 }}>
                Have a project in mind or just want to say hi?<br />
                I'm always open to discussing{" "}
                <span style={{ color: "#38bdf8" }}>new ideas</span>,{" "}
                <span style={{ color: "#818cf8" }}>collaborations</span> or{" "}
                <span style={{ color: "#4ade80" }}>opportunities</span>.
              </p>

              {/* Info Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {INFO_CARDS.map((c, i) => (
                  <a
                    key={i} href={c.href}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      background: hCard === i ? "rgba(56,189,248,0.06)" : "rgba(5,13,31,0.88)",
                      border: `1px solid ${hCard === i ? "rgba(56,189,248,0.5)" : "rgba(56,189,248,0.14)"}`,
                      borderRadius: 12, padding: "13px 16px",
                      textDecoration: "none",
                      transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                      transform: hCard === i ? "translateX(5px)" : "none",
                      boxShadow: hCard === i ? "0 4px 22px rgba(56,189,248,0.1)" : "none",
                      backdropFilter: "blur(10px)",
                      opacity: visible ? 1 : 0,
                      transitionDelay: `${i * 0.1 + 0.35}s`,
                    }}
                    onMouseEnter={() => setHCard(i)}
                    onMouseLeave={() => setHCard(null)}
                  >
                    {/* icon */}
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: hCard === i ? "rgba(56,189,248,0.18)" : "rgba(56,189,248,0.1)",
                      border: `1px solid ${hCard === i ? "rgba(56,189,248,0.4)" : "rgba(56,189,248,0.2)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#38bdf8", transition: "all 0.3s ease",
                    }}>
                      {c.icon}
                    </div>
                    {/* text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 10, color: "#7a95c0", letterSpacing: "1.5px", fontFamily: "'Space Mono',monospace", marginBottom: 2 }}>
                        {c.label.toUpperCase()}
                      </p>
                      <p style={{ fontSize: 13.5, color: "#f0f6ff", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {c.value}
                      </p>
                    </div>
                    {/* badge or arrow */}
                    {c.badge ? (
                      <span style={{
                        display: "flex", alignItems: "center", gap: 5,
                        background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)",
                        borderRadius: 999, padding: "3px 11px", fontSize: 12, color: "#4ade80", whiteSpace: "nowrap",
                      }}>
                        <span style={{
                          width: 6, height: 6, borderRadius: "50%", background: "#4ade80",
                          display: "inline-block", animation: "ctAvail 2s ease-in-out infinite",
                        }} />
                        Available
                      </span>
                    ) : (
                      <span style={{ color: "#38bdf8", fontSize: 15, opacity: hCard === i ? 1 : 0.4, transition: "opacity 0.3s" }}>↗</span>
                    )}
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(16px)",
                transition: "opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s",
              }}>
                <p style={{ fontSize: 13, color: "#7a95c0", marginBottom: 12 }}>Follow me on</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {SOCIALS.map((s, i) => <SocialBtn key={i} sc={s} />)}
                </div>
              </div>
            </div>

            {/* ══════════ RIGHT: FORM CARD ══════════ */}
            <div style={{
              background: "rgba(5,13,31,0.9)",
              border: "1px solid rgba(56,189,248,0.22)",
              borderRadius: 20,
              padding: "clamp(20px,3.5vw,34px)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 0 1px rgba(56,189,248,0.04) inset, 0 0 80px rgba(30,143,255,0.07)",
              position: "relative", overflow: "hidden",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(44px)",
              transition: "opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s",
            }}>
              {/* inner corner glows */}
              <div style={{ position: "absolute", width: 220, height: 220, top: -70, right: -70, background: "radial-gradient(circle,rgba(56,189,248,0.07),transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
              <div style={{ position: "absolute", width: 160, height: 160, bottom: -50, left: -50, background: "radial-gradient(circle,rgba(129,140,248,0.05),transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
                <div style={{
                  width: 54, height: 54, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg,#1e8fff,#818cf8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 24px rgba(30,143,255,0.45)",
                  animation: "ctIconGlow 3s ease-in-out infinite",
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" width="24" height="24" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f0f6ff", marginBottom: 3 }}>Send Me a Message</h3>
                  <p style={{ fontSize: 13, color: "#7a95c0" }}>
                    Fill out the form and <span style={{ color: "#38bdf8" }}>I'll get back to you soon!</span>
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 13 }}>

                {/* Name + Email row */}
                <div className="ct-row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13 }}>
                  <FieldWrap icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                  }>
                    <input name="name" placeholder="Your Name" required value={form.name}
                      onChange={onChange} onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                      style={inp("name")} />
                  </FieldWrap>
                  <FieldWrap icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  }>
                    <input name="email" type="email" placeholder="Your Email" required value={form.email}
                      onChange={onChange} onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                      style={inp("email")} />
                  </FieldWrap>
                </div>

                {/* Subject */}
                <FieldWrap icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                }>
                  <input name="subject" placeholder="Subject" required value={form.subject}
                    onChange={onChange} onFocus={() => setFocused("subject")} onBlur={() => setFocused("")}
                    style={inp("subject")} />
                </FieldWrap>

                {/* Message */}
                <FieldWrap icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                } top>
                  <textarea name="message" placeholder="Your Message" required rows={5} value={form.message}
                    onChange={onChange} onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                    style={{ ...inp("message"), resize: "vertical", minHeight: 118 }} />
                </FieldWrap>

                {/* Submit */}
                <SendBtn sending={sending} sent={sent} />

                {/* Privacy */}
                <p style={{ textAlign: "center", fontSize: 12, color: "#566a88", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Your information is safe with me. I hate spam!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          KEYFRAMES + RESPONSIVE CSS
      ═══════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes ctShine {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes ctPulse {
          0%,100% { box-shadow: 0 0 6px #38bdf8, 0 0 0 0 rgba(56,189,248,0.5); }
          50%      { box-shadow: 0 0 14px #38bdf8, 0 0 0 7px rgba(56,189,248,0); }
        }
        @keyframes ctAvail {
          0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.55); }
          50%      { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
        }
        @keyframes ctDotFloat {
          0%,100% { transform: translateY(0) scale(1); opacity:0.6; }
          50%      { transform: translateY(-13px) scale(1.3); opacity:1; }
        }
        @keyframes ctIconGlow {
          0%,100% { box-shadow: 0 0 24px rgba(30,143,255,0.45); }
          50%      { box-shadow: 0 0 44px rgba(30,143,255,0.75), 0 0 60px rgba(129,140,248,0.25); }
        }
        @keyframes ctBtnGlow {
          0%,100% { box-shadow: 0 0 24px rgba(30,143,255,0.4); }
          50%      { box-shadow: 0 0 44px rgba(30,143,255,0.7), 0 0 60px rgba(129,140,248,0.2); }
        }
        @keyframes planeBob {
          0%,100% { transform: translateY(0px)   rotate(0deg); }
          35%      { transform: translateY(-11px) rotate(2deg); }
          70%      { transform: translateY(-5px)  rotate(-1.5deg); }
        }
        @keyframes circleSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes trailPulse {
          0%,100% { opacity: 0.45; }
          50%      { opacity: 0.85; }
        }
        @keyframes sparkleDot {
          0%,100% { opacity:0.4; transform:scale(1); }
          50%      { opacity:1;   transform:scale(1.7); }
        }
        @keyframes d1 { 0%{opacity:0;transform:scale(0.3)} 100%{opacity:1;transform:scale(1)} }
        @keyframes d2 { 0%,33%{opacity:0;transform:scale(0.3)} 100%{opacity:1;transform:scale(1)} }
        @keyframes d3 { 0%,66%{opacity:0;transform:scale(0.3)} 100%{opacity:1;transform:scale(1)} }

        /* ── Contact 2-col → 1-col ── */
        @media (max-width: 1024px) {
          .ct-grid { grid-template-columns: 1fr !important; }
          .ct-plane { display: none !important; }
        }
        /* ── Form row 2-col → 1-col ── */
        @media (max-width: 768px) {
          .ct-row2 { grid-template-columns: 1fr !important; }
          #contact  { padding: 72px 24px 60px !important; }
        }
        @media (max-width: 480px) {
          #contact  { padding: 60px 16px 50px !important; }
        }


        /* ── Placeholder ── */
        #contact input::placeholder,
        #contact textarea::placeholder {
          color: rgba(100,130,170,0.45);
          font-family: 'DM Sans', sans-serif;
        }
        /* ── Autofill ── */
        #contact input:-webkit-autofill,
        #contact textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #020814 inset !important;
          -webkit-text-fill-color: #e8f4ff !important;
        }
        /* ── Scrollbar ── */
        #contact textarea::-webkit-scrollbar { width: 4px; }
        #contact textarea::-webkit-scrollbar-track { background: transparent; }
        #contact textarea::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.3); border-radius: 4px; }
      `}</style>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   SMALL SUB-COMPONENTS
═══════════════════════════════════════════════════════ */
function FieldWrap({ icon, top, children }) {
  return (
    <div style={{ position: "relative" }}>
      <span style={{
        position: "absolute", left: 13,
        top: top ? 14 : "50%",
        transform: top ? "none" : "translateY(-50%)",
        color: "#38bdf8", pointerEvents: "none",
        display: "flex", alignItems: "center",
      }}>
        {icon}
      </span>
      {children}
    </div>
  );
}

function SocialBtn({ sc }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={sc.href} target="_blank" rel="noopener noreferrer" title={sc.label}
      style={{
        width: 44, height: 44, borderRadius: "50%",
        border: `1px solid ${h ? "rgba(56,189,248,0.75)" : "rgba(56,189,248,0.2)"}`,
        background: h ? "rgba(56,189,248,0.14)" : "rgba(5,13,31,0.8)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: h ? "#38bdf8" : "#6a87a8",
        textDecoration: "none",
        transition: "all 0.28s cubic-bezier(.4,0,.2,1)",
        transform: h ? "translateY(-4px) scale(1.12)" : "none",
        boxShadow: h ? "0 6px 22px rgba(56,189,248,0.22)" : "none",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {sc.icon}
    </a>
  );
}



function SendBtn({ sending, sent }) {
  const [h, setH] = useState(false);
  return (
    <button
      type="submit"
      disabled={sending || sent}
      style={{
        width: "100%", padding: "15px", borderRadius: 12, border: "none",
        background: sent
          ? "linear-gradient(135deg,#22c55e,#16a34a)"
          : "linear-gradient(135deg,#1e3aff 0%,#1e8fff 50%,#818cf8 100%)",
        color: "#fff", fontSize: 15, fontWeight: 700,
        cursor: sending || sent ? "default" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        transition: "all 0.3s ease",
        transform: h && !sending && !sent ? "translateY(-2px)" : "none",
        boxShadow: sent
          ? "0 0 24px rgba(34,197,94,0.5)"
          : h ? "0 8px 34px rgba(30,143,255,0.58)" : "none",
        animation: !h && !sending && !sent ? "ctBtnGlow 3s ease-in-out infinite" : "none",
        fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.4px",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {sent ? (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="18" height="18" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Message Sent!
        </>
      ) : sending ? (
        <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "white", animation: "d1 0.7s ease-in-out infinite alternate" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "white", animation: "d2 0.7s ease-in-out infinite alternate" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "white", animation: "d3 0.7s ease-in-out infinite alternate" }} />
        </span>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          Send Message
        </>
      )}
    </button>
  );
}
