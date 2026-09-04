import { Link } from "react-router";
import { C } from "@/lib/tokens";
import {
  GoldMark, AquaRibbon, WaveDivider, DarkWaveTop, AlmondEye, LavenderWaveAccent,
} from "@/components/art/Shapes";

import art3 from "@/imports/image-3.png";
import art4 from "@/imports/image-4.png";
import art5 from "@/imports/image-5.png";
import art6 from "@/imports/image-6.png";
import art7 from "@/imports/image-7.png";

export default function ArtOfWellness() {
  return (
    <div style={{ backgroundColor: C.canvas, minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{
        backgroundColor: C.indigo,
        padding: "9rem 0 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <GoldMark size={64} style={{ position: "absolute", top: "3rem", left: "6%", opacity: 0.65 }} />
        <GoldMark size={40} style={{ position: "absolute", top: "5.5rem", right: "8%", opacity: 0.45 }} />
        <GoldMark size={52} style={{ position: "absolute", bottom: "8rem", left: "18%", opacity: 0.4 }} />
        <AlmondEye color={C.ochre} size={90}
          style={{ position: "absolute", top: "40%", right: "32%", opacity: 0.25, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "flex-end",
          }} className="grid-cols-1 md:grid-cols-2">
            {/* Text */}
            <div style={{ paddingBottom: "5rem" }}>
              <p style={{
                fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.16em",
                textTransform: "uppercase", color: C.aqua, marginBottom: "1.5rem", opacity: 0.8,
              }}>
                Art of Wellness
              </p>
              <h1 style={{
                fontSize: "clamp(3rem, 6vw, 5rem)", fontFamily: "var(--serif)",
                color: "#fff", lineHeight: 1.06, maxWidth: 560, marginBottom: "1.5rem",
              }}>
                Art of Wellness
              </h1>
              <p style={{
                color: `${C.aqua}CC`, fontSize: "1.15rem", lineHeight: 1.75,
                maxWidth: 520, marginBottom: "2.5rem", fontFamily: "var(--sans)",
              }}>
                Creativity, care and human connection in healthcare and community spaces.
              </p>
              <p style={{
                fontFamily: "var(--serif)", fontSize: "1rem", color: `${C.butter}99`,
                fontStyle: "italic", lineHeight: 1.65, maxWidth: 480, marginBottom: "2.5rem",
              }}>
                "When we make something — even just a mark on paper — something shifts."
              </p>
              <Link to="/contact" style={{
                backgroundColor: "transparent", color: C.ochre,
                fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.9rem",
                padding: "13px 28px", borderRadius: "8px", textDecoration: "none",
                border: `1.5px solid ${C.ochre}88`,
                display: "inline-block",
              }}>
                Get in touch about a project
              </Link>
            </div>

            {/* art7 right side — arch frame */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: 0 }}>
              <div style={{
                width: "min(380px, 90%)",
                aspectRatio: "3/4",
                borderRadius: "50% 50% 0 0",
                overflow: "hidden",
                boxShadow: "0 -24px 64px rgba(0,0,0,0.4)",
              }}>
                <img src={art7} alt="Expressionist golden face — artwork by Daw Mi"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
              </div>
            </div>
          </div>
        </div>

        <AquaRibbon style={{ marginTop: "3rem" }} />
      </section>

      <WaveDivider from={C.indigo} to={C.canvas} variant="gentle" />

      {/* ── What is Art of Wellness ── */}
      <section style={{ padding: "7rem 0", backgroundColor: C.canvas }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
            className="grid-cols-1 md:grid-cols-2">
            <div>
              <p style={{
                fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.14em",
                textTransform: "uppercase", color: C.rose, marginBottom: "1.2rem",
              }}>What is Art of Wellness</p>
              <h2 style={{
                fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: C.ink, lineHeight: 1.15, marginBottom: "1.5rem",
              }}>
                A creative practice where art-making and wellbeing meet
              </h2>
              <p style={{
                color: `${C.ink}BB`, lineHeight: 1.8, fontSize: "1.05rem",
                marginBottom: "1.25rem", fontFamily: "var(--sans)",
              }}>
                Art of Wellness is a creative program in which art-making is brought into healthcare and community settings. It is not art therapy — it is a different kind of offering, focused on creative participation, expression and human connection.{" "}
                <span style={{ color: C.rose, fontSize: "0.82rem" }}>[To confirm]</span>
              </p>
              <p style={{
                color: `${C.ink}BB`, lineHeight: 1.8, fontSize: "1.05rem",
                marginBottom: "1.25rem", fontFamily: "var(--sans)",
              }}>
                Daw Mi is involved in Art of Wellness at Royal North Shore Hospital, where art-making is offered to patients, families and staff as a gentle, accessible creative experience.{" "}
                <span style={{ color: C.rose, fontSize: "0.82rem" }}>[To confirm — role and details must be verified]</span>
              </p>
              <p style={{
                color: `${C.ink}99`, lineHeight: 1.8, fontSize: "0.95rem",
                fontStyle: "italic", fontFamily: "var(--sans)",
              }}>
                This page describes a creative and community practice. It is not a clinical service listing.
              </p>
            </div>

            {/* art6 — mixed media collage */}
            <div style={{ position: "relative" }}>
              <LavenderWaveAccent style={{ position: "absolute", top: "-2rem", left: "-2rem", width: "130%", opacity: 0.4 }} />
              <div style={{
                position: "relative", overflow: "hidden",
                borderRadius: "12px", aspectRatio: "4/5",
                boxShadow: "0 16px 48px rgba(73,76,109,0.12)",
              }}>
                <img src={art6} alt="Mixed-media artwork — Life and Grief, by Daw Mi"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why / Meaning ── */}
      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ padding: "7rem 0", backgroundColor: C.paper, position: "relative", overflow: "hidden" }}>
        <LavenderWaveAccent style={{ position: "absolute", top: 0, right: 0, width: "45%", opacity: 0.5 }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            <p style={{
              fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.14em",
              textTransform: "uppercase", color: C.rose, marginBottom: "1.2rem",
            }}>Why it matters</p>
            <h2 style={{
              fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: C.ink, lineHeight: 1.15, marginBottom: "2rem",
            }}>
              Healthcare spaces hold many different kinds of experience
            </h2>
            <p style={{
              color: `${C.ink}BB`, lineHeight: 1.8, fontSize: "1.05rem",
              marginBottom: "1.25rem", fontFamily: "var(--sans)",
            }}>
              Waiting, uncertainty, recovery, transition — and sometimes, just the need for something that feels human and unhurried. Art-making can create a small but meaningful shift in those moments.{" "}
              <span style={{ color: C.rose, fontSize: "0.82rem" }}>[To confirm]</span>
            </p>
            <p style={{
              color: `${C.ink}BB`, lineHeight: 1.8, fontSize: "1.05rem",
              marginBottom: "1.25rem", fontFamily: "var(--sans)",
            }}>
              No art experience is needed. The invitation is simply to make something — a mark, a colour, a shape. What matters is not the object but the act.{" "}
              <span style={{ color: C.rose, fontSize: "0.82rem" }}>[To confirm]</span>
            </p>
            <p style={{
              color: `${C.ink}BB`, lineHeight: 1.8, fontSize: "1.05rem",
              fontFamily: "var(--sans)",
            }}>
              This is not a clinical claim. Art of Wellness is a creative initiative, not a therapeutic intervention. For clinical art psychotherapy services, please see the services section.
            </p>
          </div>
        </div>
      </section>

      {/* ── Daw Mi's Involvement ── */}
      <WaveDivider from={C.paper} to={C.canvas} variant="gentle" />
      <section style={{ padding: "7rem 0", backgroundColor: C.canvas }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            backgroundColor: C.paper, borderRadius: "16px",
            padding: "4rem", boxShadow: "0 4px 32px rgba(73,76,109,0.07)",
          }}>
            <p style={{
              fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.14em",
              textTransform: "uppercase", color: C.rose, marginBottom: "1.2rem",
            }}>Daw Mi's involvement</p>
            <h2 style={{
              fontFamily: "var(--serif)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              color: C.ink, lineHeight: 1.15, marginBottom: "2rem", maxWidth: 560,
            }}>
              Art of Wellness at Royal North Shore Hospital
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}
              className="grid-cols-1 md:grid-cols-2">
              <div>
                <p style={{
                  color: `${C.ink}BB`, lineHeight: 1.8, fontSize: "1rem",
                  fontFamily: "var(--sans)", marginBottom: "1.25rem",
                }}>
                  Daw Mi is involved in the Art of Wellness program at Royal North Shore Hospital in Sydney.{" "}
                  <span style={{ color: C.rose, fontSize: "0.82rem" }}>[Role and details to be confirmed and approved]</span>
                </p>
                <p style={{
                  color: `${C.ink}BB`, lineHeight: 1.8, fontSize: "1rem",
                  fontFamily: "var(--sans)", marginBottom: "1.25rem",
                }}>
                  She is also a co-founder of Art of Wellness at Royal North Shore Hospital.{" "}
                  <span style={{ color: C.rose, fontSize: "0.82rem" }}>[To confirm]</span>
                </p>
                <p style={{
                  color: `${C.ink}99`, lineHeight: 1.7, fontSize: "0.9rem",
                  fontFamily: "var(--sans)", fontStyle: "italic",
                }}>
                  For the most accurate and up-to-date information about Daw Mi's involvement in the Art of Wellness program, please refer to official Royal North Shore Hospital communications or contact her directly.
                </p>
              </div>

              <div style={{
                backgroundColor: C.canvas, borderRadius: "12px",
                padding: "2rem", border: `1px solid ${C.ink}11`,
              }}>
                {[
                  { label: "Organisation", value: "Royal North Shore Hospital [To confirm]" },
                  { label: "Role", value: "[To confirm]" },
                  { label: "Program name", value: "Art of Wellness [To confirm]" },
                  { label: "Location", value: "Sydney, NSW [To confirm]" },
                ].map(({ label, value }) => (
                  <div key={label} style={{
                    paddingBottom: "1.25rem", marginBottom: "1.25rem",
                    borderBottom: `1px solid ${C.ink}0F`,
                  }}>
                    <p style={{
                      fontFamily: "var(--sans)", fontSize: "0.72rem", fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      color: C.indigo, marginBottom: "0.3rem",
                    }}>{label}</p>
                    <p style={{
                      fontFamily: "var(--sans)", fontSize: "0.95rem",
                      color: `${C.ink}BB`, lineHeight: 1.5,
                    }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Activities ── */}
      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />
      <section style={{ padding: "7rem 0", backgroundColor: C.paper }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{
            fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.14em",
            textTransform: "uppercase", color: C.rose, marginBottom: "1.2rem",
          }}>What this involves</p>
          <h2 style={{
            fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: C.ink, lineHeight: 1.15, marginBottom: "3rem", maxWidth: 560,
          }}>Creative activities in this practice</h2>

          <div style={{ display: "grid", gap: "2rem" }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Bedside Art Sessions",
                desc: "Art materials are brought directly to patients in ward settings — a simple, low-pressure invitation to make something.",
                note: "[To confirm — details must be verified]",
              },
              {
                title: "Creative Workshops",
                desc: "Facilitated sessions in healthcare, community and organisational settings, shaped around the people in the room.",
                note: "[To confirm]",
              },
              {
                title: "Studio & Collaborative Work",
                desc: "Daw Mi's own creative practice and collaborative projects that bring art into spaces where it is not usually found.",
                note: "[To confirm]",
              },
            ].map(act => (
              <div key={act.title} style={{
                backgroundColor: C.canvas, borderRadius: "12px",
                padding: "2.5rem", border: `1px solid ${C.ink}0F`,
              }}>
                <GoldMark size={38} style={{ marginBottom: "1.25rem" }} />
                <h3 style={{
                  fontFamily: "var(--serif)", fontSize: "1.3rem",
                  color: C.ink, marginBottom: "0.75rem",
                }}>{act.title}</h3>
                <p style={{
                  color: `${C.ink}BB`, lineHeight: 1.78, fontSize: "0.97rem",
                  fontFamily: "var(--sans)", marginBottom: "0.5rem",
                }}>{act.desc}</p>
                <span style={{ color: C.rose, fontSize: "0.78rem", fontFamily: "var(--sans)" }}>
                  {act.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <WaveDivider from={C.paper} to={C.canvas} variant="gentle" />
      <section style={{ padding: "7rem 0", backgroundColor: C.canvas }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{
            fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.14em",
            textTransform: "uppercase", color: C.rose, marginBottom: "1.2rem",
          }}>From the studio</p>
          <h2 style={{
            fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: C.ink, lineHeight: 1.15, marginBottom: "3.5rem", maxWidth: 560,
          }}>Work and creative practice</h2>

          {/* Museum-style gallery grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: art3, alt: "Growth & Becoming — organic flowing figure", title: "Growth & Becoming", medium: "Acrylic" },
              { img: art4, alt: "The ULX & Eddington Limit — woman with poppy", title: "The ULX & Eddington Limit", medium: "Mixed media · 2023" },
              { img: art5, alt: "Bloom — pink peonies in blue-white vase", title: "Bloom", medium: "Watercolour" },
              { img: art6, alt: "Life & Grief — mixed media diptych", title: "Life & Grief", medium: "Mixed media collage" },
              { img: art7, alt: "Expression — golden face on indigo", title: "Expression", medium: "Oil/acrylic" },
            ].map((item, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <div style={{
                  overflow: "hidden",
                  borderRadius: i === 0 ? "50% 50% 8px 8px" : "8px",
                  aspectRatio: i === 0 ? "3/4" : "4/3",
                  backgroundColor: C.paper,
                }}>
                  <img src={item.img} alt={item.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
                </div>
                <figcaption style={{ padding: "0.9rem 0 0", fontFamily: "var(--sans)" }}>
                  <p style={{ fontSize: "0.88rem", color: C.ink, fontWeight: 500, marginBottom: "0.15rem" }}>{item.title}</p>
                  <p style={{ fontSize: "0.75rem", color: `${C.ink}66` }}>{item.medium}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <Link to="/portfolio" style={{
              fontFamily: "var(--sans)", fontSize: "0.9rem", color: C.indigo,
              textDecoration: "underline", textUnderlineOffset: 3,
            }}>View full portfolio →</Link>
          </div>
        </div>
      </section>

      {/* ── Boundary + CTA ── */}
      <DarkWaveTop from={C.canvas} to={C.indigo} />
      <section style={{ backgroundColor: C.indigo, padding: "7rem 0", position: "relative", overflow: "hidden" }}>
        <GoldMark size={56} style={{ position: "absolute", top: "3rem", right: "10%", opacity: 0.4 }} />
        <GoldMark size={36} style={{ position: "absolute", bottom: "4rem", left: "8%", opacity: 0.35 }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
            className="grid-cols-1 md:grid-cols-2">
            <div>
              <p style={{
                fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.14em",
                textTransform: "uppercase", color: C.aqua, marginBottom: "1.2rem",
              }}>A note</p>
              <h2 style={{
                fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#fff", lineHeight: 1.15, marginBottom: "1.5rem",
              }}>
                Interested in a creative healthcare or community project?
              </h2>
              <p style={{
                color: `${C.aqua}CC`, lineHeight: 1.8, fontSize: "1rem",
                marginBottom: "1.25rem", fontFamily: "var(--sans)",
              }}>
                VetMiMi shares Daw Mi's involvement in creative projects as part of her professional practice. For the most authoritative source on specific programs, please contact Daw Mi directly or refer to official communications.
              </p>
              <p style={{
                color: `${C.aqua}CC`, lineHeight: 1.8, fontSize: "1rem",
                marginBottom: "2.5rem", fontFamily: "var(--sans)",
              }}>
                For individual clinical art psychotherapy services, please visit the services section.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/contact" style={{
                  backgroundColor: C.ochre, color: C.ink,
                  fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.9rem",
                  padding: "13px 28px", borderRadius: "8px", textDecoration: "none",
                }}>Get in touch</Link>
                <Link to="/services" style={{
                  backgroundColor: "transparent", color: C.aqua,
                  fontFamily: "var(--sans)", fontWeight: 500, fontSize: "0.9rem",
                  padding: "13px 28px", borderRadius: "8px", textDecoration: "none",
                  border: `1.5px solid ${C.aqua}55`,
                }}>Clinical services</Link>
              </div>
            </div>
            {/* art3 in arch */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{
                width: "min(320px, 85%)", aspectRatio: "3/4",
                borderRadius: "50% 50% 8px 8px", overflow: "hidden",
                opacity: 0.7,
              }}>
                <img src={art3} alt="Organic flowing figure — Growth and Becoming"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WaveDivider from={C.indigo} to={C.canvas} variant="gentle" />
    </div>
  );
}
