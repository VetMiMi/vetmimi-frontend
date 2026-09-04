import { Link } from "react-router";
import { C } from "@/lib/tokens";
import { WaveDivider, OverlappingCircles, ConnectingThread, MintOpenCircle } from "@/components/art/Shapes";
import art5 from "@/imports/image-5.png";

export default function GroupArtWellbeing() {
  return (
    <div style={{ background: C.canvas, overflowX: "hidden" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "1.5rem 1.5rem 0" }}>
        <div style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", color: "rgba(40,37,45,0.4)" }}>
          <Link to="/services" style={{ color: "rgba(40,37,45,0.4)", textDecoration: "none" }}>Services</Link>
          <span style={{ margin: "0 0.5rem" }}>·</span>
          <span>Group Art & Wellbeing</span>
        </div>
      </div>

      <section style={{ padding: "4rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "2rem", right: "3rem" }}>
          <OverlappingCircles color={C.aqua} size={120} />
        </div>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <div style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.blue, marginBottom: "0.75rem" }}>Create Together</div>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: C.ink, margin: "0 0 1rem", lineHeight: 1.1 }}>
              Create beside others, in your own way.
            </h1>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "rgba(40,37,45,0.65)", fontStyle: "italic", margin: "0 0 0.75rem" }}>
              Group sessions bring people together around creative activity, reflection and shared experience.
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: C.blue, marginBottom: "2rem", fontWeight: 500 }}>
              You do not need to perform or make something perfect.
            </p>
            <Link to="/book" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.92rem", padding: "13px 28px", borderRadius: "8px", textDecoration: "none" }}>
              Enquire
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <MintOpenCircle size={280} style={{ position: "absolute", top: "-2rem", right: "-2rem", opacity: 0.4 }} />
            <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: "8px", position: "relative" }}>
              <img src={art5} alt="Pink peonies watercolor — group art wellbeing"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ background: C.paper, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.ink, margin: "0 0 2.5rem", lineHeight: 1.12 }}>What happens in a group session?</h2>
          <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
            <ConnectingThread color={C.aqua} points={[[12,20],[12,100],[12,180],[12,260],[12,340]]}
              style={{ position: "absolute", left: 0, top: 0 }} />
            {[
              { step: "Creative Prompt", copy: "A simple starting point is offered — a material, a theme or an open-ended question. It is always optional." },
              { step: "Make & Explore", copy: "Each person works at their own pace, with materials they choose. There is no expectation to follow a particular approach." },
              { step: "Pause & Notice", copy: "A moment to step back and look at what you have made — quietly or with the group." },
              { step: "Share (if invited and comfortable)", copy: "There is space to share if you want to. There is no pressure to explain or interpret your work." },
              { step: "Close Together", copy: "The session closes gently, with attention to the transition back to everyday life." },
            ].map(({ step, copy }) => (
              <div key={step} style={{ marginBottom: "2rem" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: C.blue, marginBottom: "0.3rem" }}>{step}</div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.75, margin: 0 }}>{copy}</p>
              </div>
            ))}
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(40,37,45,0.4)", fontStyle: "italic" }}>
              You can take part in your own way. The purpose is not to compare what people make. [Verify actual group approach before launch]
            </p>
          </div>
        </div>
      </section>

      <WaveDivider from={C.paper} to={C.canvas} variant="gentle" />
      <section style={{ background: C.canvas, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.ink, margin: "0 0 2rem", lineHeight: 1.12 }}>Practical details</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(40,37,45,0.08)", borderRadius: "8px", overflow: "hidden" }}>
            {[["Group size","[To confirm]"],["Duration","[To confirm]"],["Location / Online","[To confirm]"],["Materials","[To confirm]"],["Languages","[To confirm]"],["Upcoming dates","[To confirm]"],["Registration","[To confirm]"],["Fee","[To confirm]"]].map(([l,v]) => (
              <div key={l} style={{ background: C.canvas, padding: "1rem 1.25rem" }}>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(40,37,45,0.4)", marginBottom: "0.25rem" }}>{l}</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: C.ink }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.paper, padding: "5rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.ink, margin: "0 0 1rem" }}>Interested in joining or planning a group?</h2>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(40,37,45,0.58)", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Send an enquiry with a bit of context and we can find the right way forward.
          </p>
          <Link to="/contact" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.95rem", padding: "15px 36px", borderRadius: "8px", textDecoration: "none" }}>
            Send an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
