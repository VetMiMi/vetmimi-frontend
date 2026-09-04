import { Link } from "react-router";
import { C } from "@/lib/tokens";
import {
  ImperfectHalo, WaveDivider, LavenderWaveAccent,
  PetalOutline, GoldMark, ConnectingThread, DarkWaveTop,
} from "@/components/art/Shapes";
import art4 from "@/imports/image-4.png";
import art3 from "@/imports/image-3.png";
import art6 from "@/imports/image-6.png";

export default function About() {
  return (
    <div style={{ background: C.canvas, overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", padding: "7rem 1.5rem 5rem" }}>
        <ImperfectHalo color={C.rose} size={480} opacity={0.08}
          style={{ position: "absolute", top: "-80px", right: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "4rem", left: "3rem", width: "180px", height: "180px" }}>
          <svg viewBox="0 0 180 180" width="180" height="180" aria-hidden>
            <path d="M90 10 A80 80 0 1 1 20 130" fill="none" stroke={C.blue} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "3fr 2fr", gap: "5rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-[3fr_2fr]">
          <div>
            <div style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.rose, marginBottom: "1.5rem" }}>About</div>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: C.ink, margin: "0 0 1.5rem", lineHeight: 1.08 }}>
              Where care, creativity and human experience meet.
            </h1>
            <p style={{ fontFamily: "var(--sans)", fontSize: "1.05rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.85, maxWidth: "520px" }}>
              Daw Mi's journey has moved through healthcare, mental health, art and creative practice. VetMiMi is where those parts come together.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <ImperfectHalo color={C.rose} size={360} opacity={0.12}
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", borderRadius: "50% 50% 8px 8px" }}>
              <img src={art4} alt="Portrait painting with poppy and halo — by Daw Mi"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 12%", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ background: C.paper, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--hand)", color: C.rose, fontSize: "1rem", marginBottom: "0.5rem" }}>The path here</div>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: C.ink, margin: "0 0 3rem", lineHeight: 1.12 }}>
            The path here was not a straight line.
          </h2>
          <div style={{ position: "relative" }}>
            <ConnectingThread color={C.ochre} points={[[32,40],[32,160],[32,280],[32,400],[32,520]]}
              style={{ position: "absolute", left: "0", top: "0" }} />
            {[
              { era: "Healthcare & Nursing", copy: "Early career in healthcare, building a foundation in human care, patient support and clinical environments." },
              { era: "Mental Health Work", copy: "Moved into mental health and psychosocial support — working with people in complex, often unseen experiences." },
              { era: "Creative Practice", copy: "Painting, drawing and collage developed alongside professional work as a separate but connected way of thinking and noticing." },
              { era: "Art Therapy Training", copy: "Formal training in art psychotherapy, integrating the creative with the clinical." },
              { era: "Art of Wellness & VetMiMi", copy: "Co-founded Art of Wellness at Royal North Shore Hospital. VetMiMi brings these threads together in one place. [Dates and roles to confirm]" },
            ].map(({ era, copy }, i) => (
              <div key={era} style={{ display: "flex", gap: "2.5rem", marginBottom: "2.5rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "64px", display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: i % 2 === 0 ? C.rose : C.ochre, marginTop: "5px" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", color: C.ink, marginBottom: "0.4rem" }}>{era}</div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(40,37,45,0.62)", lineHeight: 1.75, margin: 0 }}>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <WaveDivider from={C.paper} to={C.canvas} variant="gentle" />
      <section style={{ background: C.canvas, padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
        <LavenderWaveAccent style={{ position: "absolute", right: 0, top: "20%", width: "50%", opacity: 0.45 }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "var(--hand)", color: C.rose, fontSize: "1rem", marginBottom: "0.5rem" }}>Approach</div>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: C.ink, margin: "0 0 1.5rem", lineHeight: 1.12 }}>
            Art does not have to be perfect to mean something.
          </h2>
          <p style={{ fontFamily: "var(--sans)", fontSize: "1rem", color: "rgba(40,37,45,0.68)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The focus is not on making a good picture. Art-making can create space to notice feelings, memories, ideas and experiences differently. Sometimes we talk. Sometimes we make. Sometimes we sit with what appears.
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "rgba(40,37,45,0.45)", fontStyle: "italic" }}>[Approach description to be confirmed with Daw Mi before launch]</p>
        </div>
      </section>

      {/* CREATIVE PRACTICE */}
      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ background: C.paper, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <div style={{ fontFamily: "var(--hand)", color: C.rose, fontSize: "1rem", marginBottom: "0.5rem" }}>Creative practice</div>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: C.ink, margin: "0 0 1.5rem", lineHeight: 1.12 }}>
              The artist is part of the practitioner too.
            </h2>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.97rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Daw Mi's own creative practice continues alongside her professional work. Painting, drawing, collage and experimentation offer another way of thinking, noticing and making meaning.
            </p>
            <Link to="/portfolio" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.9rem", color: C.coral, textDecoration: "none", borderBottom: `1.5px solid ${C.coral}`, paddingBottom: "2px" }}>
              Explore the artwork →
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <GoldMark size={52} style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 2 }} />
            <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: "4px" }}>
              <img src={art3} alt="Organic flowing figure painting — Daw Mi's creative practice"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER VOICE */}
      <WaveDivider from={C.paper} to={C.canvas} variant="gentle" />
      <section style={{ background: C.canvas, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--hand)", color: C.ochre, fontSize: "4rem", lineHeight: 0.8, marginBottom: "1rem", opacity: 0.4 }}>"</div>
          <blockquote style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.35rem, 2.5vw, 1.9rem)", color: C.ink, lineHeight: 1.45, fontStyle: "italic", fontWeight: 300, margin: "0 0 1.5rem" }}>
            I believe creativity can hold things that do not always fit neatly into words. My hope is to make space for people to explore, notice and express in their own way.
          </blockquote>
          <cite style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "rgba(40,37,45,0.42)", letterSpacing: "0.1em", textTransform: "uppercase" }}>— Daw Mi [Quote to be approved]</cite>
        </div>
      </section>

      {/* AoW BRIDGE */}
      <DarkWaveTop from={C.canvas} to={C.indigo} />
      <section style={{ background: C.indigo, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(255,247,239,0.65)", margin: "0 0 0.35rem" }}>Daw Mi's work is also connected with Art of Wellness.</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(255,247,239,0.4)", margin: 0 }}>Explore the program, her verified role and related projects.</p>
          </div>
          <Link to="/art-of-wellness" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.88rem", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            Explore Art of Wellness →
          </Link>
        </div>
      </section>
      <WaveDivider from={C.indigo} to={C.canvas} variant="gentle" />

      {/* TWO PATHS */}
      <section style={{ background: C.canvas, padding: "4rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="grid-cols-1 md:grid-cols-2">
          <Link to="/services" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.95rem", padding: "16px 28px", borderRadius: "12px", textDecoration: "none", textAlign: "center" }}>Explore Services</Link>
          <Link to="/contact" style={{ backgroundColor: "transparent", color: C.indigo, fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.95rem", padding: "16px 28px", borderRadius: "12px", textDecoration: "none", textAlign: "center", border: `1.5px solid ${C.indigo}` }}>Contact Daw Mi</Link>
        </div>
      </section>
    </div>
  );
}
