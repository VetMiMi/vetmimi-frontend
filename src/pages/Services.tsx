import { Link } from "react-router";
import { C } from "@/lib/tokens";
import { WaveDivider, NestedOval, OverlappingCircles, FlowingRibbon, MintOpenCircle } from "@/components/art/Shapes";
import art3 from "@/imports/image-3.png";
import art5 from "@/imports/image-5.png";
import art7 from "@/imports/image-7.png";

export default function Services() {
  return (
    <div style={{ background: C.canvas, overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ padding: "7rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.rose, marginBottom: "1.5rem" }}>Services</div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: C.ink, margin: "0 0 1.5rem", lineHeight: 1.08 }}>
            There is more than one way to begin.
          </h1>
          <p style={{ fontFamily: "var(--sans)", fontSize: "1.05rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.85 }}>
            You do not need to be artistic. Start by exploring the different ways we can work together and choose the one that feels closest to what you are looking for.
          </p>
        </div>
      </section>

      {/* THREE SERVICE CARDS */}
      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ background: C.paper, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2px" }}>
          {[
            {
              Symbol: NestedOval, symbolColor: C.rose,
              art: art3, artAlt: "Organic flowing figure — Individual Art Therapy",
              label: "ONE-TO-ONE",
              title: "Individual Art Therapy",
              desc: "A private space for art-making, conversation and reflection. Sessions are tailored to you. You do not need any art experience, and you do not need to know what you want to make.",
              audience: "May suit people who are curious about exploring experiences through more than words alone. [Suitability to verify]",
              link: "/services/individual-art-therapy",
              accent: C.rose,
              bookLabel: "Request Appointment",
            },
            {
              Symbol: OverlappingCircles, symbolColor: C.aqua,
              art: art5, artAlt: "Pink peonies watercolor — Group Art Wellbeing",
              label: "CREATE TOGETHER",
              title: "Group Art & Wellbeing",
              desc: "A shared creative space for expression, reflection and connection, with room to take part in your own way. You can engage as much or as little as feels comfortable.",
              audience: "Open to people who are comfortable in a small group setting. [Suitability and group types to verify]",
              link: "/services/group-art-wellbeing",
              accent: C.blue,
              bookLabel: "Enquire",
            },
            {
              Symbol: FlowingRibbon, symbolColor: C.ochre,
              art: art7, artAlt: "Expressionist golden painting — Workshops & Programs",
              label: "COMMUNITY & ORGANISATIONS",
              title: "Workshops & Programs",
              desc: "Creative experiences shaped for communities, healthcare settings, organisations and suitable projects. Each program is developed around the people and context it is for.",
              audience: "For organisations, community groups, healthcare providers and event coordinators. [Details to verify]",
              link: "/services/workshops-programs",
              accent: C.ochre,
              bookLabel: "Talk about a workshop",
            },
          ].map(({ Symbol, symbolColor, art, artAlt, label, title, desc, audience, link, accent, bookLabel }) => (
            <div key={title} style={{
              background: C.canvas, borderRadius: "16px", overflow: "hidden",
              display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0",
              boxShadow: "0 2px 16px rgba(73,76,109,0.06)",
            }} className="grid-cols-1 md:grid-cols-[1fr_2fr]">
              <div style={{ position: "relative", minHeight: "280px", overflow: "hidden" }}>
                <img src={art} alt={artAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%", display: "block" }} />
                <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
                  <Symbol color={symbolColor} size={50} />
                </div>
              </div>
              <div style={{ padding: "2.5rem" }}>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.13em", color: accent, marginBottom: "0.5rem" }}>{label}</div>
                <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: C.ink, margin: "0 0 0.85rem", lineHeight: 1.12 }}>{title}</h2>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.8, marginBottom: "0.75rem" }}>{desc}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "rgba(40,37,45,0.4)", lineHeight: 1.7, marginBottom: "1.75rem", fontStyle: "italic" }}>{audience}</p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link to={link} style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.88rem", color: accent, textDecoration: "none", borderBottom: `1.5px solid ${accent}`, paddingBottom: "2px" }}>Learn more →</Link>
                  <Link to="/book" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.84rem", padding: "10px 22px", borderRadius: "8px", textDecoration: "none" }}>{bookLabel}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NOT SURE */}
      <WaveDivider from={C.paper} to={C.canvas} variant="gentle" />
      <section style={{ background: C.canvas, padding: "5rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <MintOpenCircle size={300} style={{ position: "absolute", right: "-60px", top: "50%", transform: "translateY(-50%)", opacity: 0.5 }} />
        <div style={{ maxWidth: "680px", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: C.ink, margin: "0 0 1rem", lineHeight: 1.15 }}>Not sure where to start?</h2>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.97rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.82, marginBottom: "2rem" }}>
            Read through the service pages first. They explain what happens, who each option is for and what to expect. You do not need to decide from a single sentence.
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(40,37,45,0.5)", marginBottom: "2rem" }}>
            Looking for a workshop or program for a group? → <Link to="/services/workshops-programs" style={{ color: C.coral, textDecoration: "none", borderBottom: `1px solid ${C.coral}` }}>Workshops & Programs</Link> or <Link to="/contact" style={{ color: C.coral, textDecoration: "none", borderBottom: `1px solid ${C.coral}` }}>Contact Daw Mi</Link>.
          </p>
          <Link to="/book" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.92rem", padding: "13px 28px", borderRadius: "8px", textDecoration: "none" }}>Book a free consultation</Link>
        </div>
      </section>
    </div>
  );
}
