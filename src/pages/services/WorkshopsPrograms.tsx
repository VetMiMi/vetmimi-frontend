import { Link } from "react-router";
import { C } from "@/lib/tokens";
import { WaveDivider, FlowingRibbon, ConnectingThread, GoldMark, DarkWaveTop } from "@/components/art/Shapes";
import art6 from "@/imports/image-6.png";
import art7 from "@/imports/image-7.png";

export default function WorkshopsPrograms() {
  return (
    <div style={{ background: C.canvas, overflowX: "hidden" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "1.5rem 1.5rem 0" }}>
        <div style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", color: "rgba(40,37,45,0.4)" }}>
          <Link to="/services" style={{ color: "rgba(40,37,45,0.4)", textDecoration: "none" }}>Services</Link>
          <span style={{ margin: "0 0.5rem" }}>·</span>
          <span>Workshops & Programs</span>
        </div>
      </div>

      <section style={{ padding: "4rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "2rem", right: "3rem" }}>
          <FlowingRibbon color={C.ochre} size={120} />
        </div>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <div style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.ochre, marginBottom: "0.75rem" }}>Community & Organisations</div>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: C.ink, margin: "0 0 1rem", lineHeight: 1.1 }}>
              Creative experiences shaped around people and place.
            </h1>
            <p style={{ fontFamily: "var(--sans)", fontSize: "1rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.85, marginBottom: "2rem" }}>
              Workshops and programs can be developed for organisations, communities, healthcare settings, events and other suitable spaces.
            </p>
            <Link to="/contact" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.92rem", padding: "13px 28px", borderRadius: "8px", textDecoration: "none" }}>
              Talk about a workshop →
            </Link>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: "8px" }}>
            <img src={art6} alt="Mixed-media collage — roses and narrative imagery for workshop programs"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "25% 40%", display: "block" }} />
            <GoldMark size={52} style={{ position: "absolute", top: "1rem", right: "1rem" }} />
          </div>
        </div>
      </section>

      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ background: C.paper, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.ink, margin: "0 0 2.5rem", lineHeight: 1.12 }}>How a project begins</h2>
          <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
            <ConnectingThread color={C.ochre} points={[[12,20],[12,120],[12,220],[12,320],[12,420]]}
              style={{ position: "absolute", left: 0, top: 0 }} />
            {[
              { step: "Tell us about people and setting", copy: "Who is the workshop for? Where will it happen? What is the context?" },
              { step: "Talk about purpose and practical needs", copy: "What do you hope the experience will support? What are the logistical constraints?" },
              { step: "Shape the creative approach", copy: "We develop an approach tailored to the people, the space and the purpose." },
              { step: "Confirm the workshop or program", copy: "Practical details confirmed, materials sourced, timing set." },
              { step: "Create together", copy: "The workshop happens. Follow-up support available where relevant. [Terms to confirm]" },
            ].map(({ step, copy }) => (
              <div key={step} style={{ marginBottom: "2.25rem" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: C.ochre, marginBottom: "0.3rem" }}>{step}</div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.75, margin: 0 }}>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkWaveTop from={C.paper} to={C.indigo} />
      <section style={{ background: C.indigo, padding: "5rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <GoldMark size={60} style={{ position: "absolute", top: "2rem", right: "3rem", opacity: 0.5 }} />
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <div style={{ fontFamily: "var(--hand)", color: C.ochre, fontSize: "1rem", marginBottom: "0.75rem" }}>Have an idea?</div>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: C.canvas, margin: "0 0 1.25rem", lineHeight: 1.12 }}>
              It does not need to be fully formed.
            </h2>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.97rem", color: "rgba(255,247,239,0.65)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Tell us who the workshop is for, where it may happen, the rough timing and what you hope the experience will support. It is okay if the idea is still early.
            </p>
            <Link to="/contact" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.92rem", padding: "13px 28px", borderRadius: "8px", textDecoration: "none" }}>
              Start a conversation →
            </Link>
          </div>
          <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: "4px" }}>
            <img src={art7} alt="Expressionist golden painting — workshop creative energy"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%", display: "block" }} />
          </div>
        </div>
      </section>
    </div>
  );
}
