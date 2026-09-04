import { Link } from "react-router";
import { C } from "@/lib/tokens";
import { WaveDivider, NestedOval, ConnectingThread, PetalOutline } from "@/components/art/Shapes";
import art3 from "@/imports/image-3.png";
import art4 from "@/imports/image-4.png";

export default function IndividualArtTherapy() {
  return (
    <div style={{ background: C.canvas, overflowX: "hidden" }}>

      {/* Breadcrumb */}
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "1.5rem 1.5rem 0" }}>
        <div style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", color: "rgba(40,37,45,0.4)" }}>
          <Link to="/services" style={{ color: "rgba(40,37,45,0.4)", textDecoration: "none" }}>Services</Link>
          <span style={{ margin: "0 0.5rem" }}>·</span>
          <span>Individual Art Therapy</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "4rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "2rem", right: "2rem" }}>
          <NestedOval color={C.rose} size={120} />
        </div>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <div style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.rose, marginBottom: "0.75rem" }}>One-to-one</div>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", color: C.ink, margin: "0 0 1rem", lineHeight: 1.08 }}>
              Individual Art Therapy
            </h1>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "rgba(40,37,45,0.68)", fontStyle: "italic", margin: "0 0 0.75rem" }}>
              A private space to make, reflect and explore through art and conversation.
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: C.rose, marginBottom: "2rem", fontWeight: 500 }}>
              You do not need any art experience.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#E8F5E8", borderRadius: "20px", padding: "6px 14px", marginBottom: "2rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4CAF50" }} />
              <span style={{ fontFamily: "var(--sans)", fontSize: "0.75rem", fontWeight: 600, color: "#2E7D32" }}>Currently Available</span>
            </div>
            <div style={{ display: "block" }}>
              <Link to="/book" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.92rem", padding: "13px 28px", borderRadius: "8px", textDecoration: "none" }}>
                Request Appointment
              </Link>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "3/4", overflow: "hidden", borderRadius: "50% 50% 8px 8px" }}>
              <img src={art3} alt="Organic flowing figure — individual art therapy space"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%", display: "block" }} />
            </div>
            <PetalOutline color={C.rose} size={72} style={{ position: "absolute", bottom: "1.5rem", right: "-1rem", opacity: 0.5 }} />
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ background: C.paper, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: C.ink, margin: "0 0 1.25rem", lineHeight: 1.12 }}>
            What is art therapy here?
          </h2>
          <p style={{ fontFamily: "var(--sans)", fontSize: "1rem", color: "rgba(40,37,45,0.68)", lineHeight: 1.85, marginBottom: "1rem" }}>
            A session may include art-making, conversation and time to look at what has emerged. There is no expectation to draw well or make anything beautiful. The way a session unfolds can be different each time.
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "rgba(40,37,45,0.42)", fontStyle: "italic" }}>[Approach description subject to final approval]</p>
        </div>
      </section>

      {/* SESSION FLOW */}
      <WaveDivider from={C.paper} to={C.canvas} variant="gentle" />
      <section style={{ background: C.canvas, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.ink, margin: "0 0 2.5rem", lineHeight: 1.12 }}>
            What might a session feel like?
          </h2>
          <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
            <ConnectingThread color={C.rose} points={[[12,20],[12,100],[12,180],[12,260],[12,340]]}
              style={{ position: "absolute", left: 0, top: 0 }} />
            {[
              { step: "Arrive", copy: "You arrive and settle into the space. There is no rush." },
              { step: "Settle", copy: "We talk briefly about how things are, what feels present, what you might want to explore — or not." },
              { step: "Make & Explore", copy: "You work with materials at your own pace. There is no right or wrong way to use them." },
              { step: "Reflect", copy: "We look at what you have made together — what you notice, what it brings up, what you want to keep or leave." },
              { step: "Close", copy: "We close the session gently, with attention to what might carry forward." },
            ].map(({ step, copy }) => (
              <div key={step} style={{ marginBottom: "2rem" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: C.rose, marginBottom: "0.3rem" }}>{step}</div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.75, margin: 0 }}>{copy}</p>
              </div>
            ))}
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(40,37,45,0.42)", fontStyle: "italic", marginLeft: "0" }}>
              Every session can look a little different. You may spend more time making in one session and more time talking in another.
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICAL DETAILS */}
      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ background: C.paper, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.ink, margin: "0 0 2rem", lineHeight: 1.12 }}>
            Practical details
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(40,37,45,0.08)", borderRadius: "8px", overflow: "hidden" }}>
            {[
              ["Format", "[To confirm]"],
              ["Duration", "[To confirm]"],
              ["In person / Online", "[To confirm]"],
              ["Location", "[To confirm]"],
              ["Languages", "[To confirm]"],
              ["Materials", "[To confirm]"],
              ["Availability", "[To confirm]"],
              ["Fee", "[Enquire for details]"],
            ].map(([label, value]) => (
              <div key={label} style={{ background: C.canvas, padding: "1rem 1.25rem" }}>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(40,37,45,0.4)", marginBottom: "0.25rem" }}>{label}</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: C.ink }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO KNOW */}
      <WaveDivider from={C.paper} to={C.canvas} variant="gentle" />
      <section style={{ background: C.canvas, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", color: C.ink, margin: "0 0 1.25rem" }}>A few things to know</h2>
          <ul style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(40,37,45,0.65)", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
            <li style={{ marginBottom: "0.6rem" }}>Art therapy is not crisis or emergency support. If you are in crisis, please contact emergency services or a crisis line.</li>
            <li style={{ marginBottom: "0.6rem" }}>What you share in sessions is kept confidential within the limits of professional ethics and legal obligations.</li>
            <li style={{ marginBottom: "0.6rem" }}>Please read the <Link to="/booking-policy" style={{ color: C.coral, textDecoration: "none" }}>Booking & Cancellation Policy</Link> before requesting an appointment.</li>
            <li>See the <Link to="/disclaimer" style={{ color: C.coral, textDecoration: "none" }}>Disclaimer</Link> for important information about this website.</li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: C.paper, padding: "5rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: C.ink, margin: "0 0 1rem" }}>Would you like to begin?</h2>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.97rem", color: "rgba(40,37,45,0.6)", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Choose an available time and send an appointment request. Your appointment is only confirmed once you receive confirmation.
          </p>
          <Link to="/book" style={{ backgroundColor: C.coral, color: "#fff", fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.95rem", padding: "15px 36px", borderRadius: "8px", textDecoration: "none" }}>
            Request Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
