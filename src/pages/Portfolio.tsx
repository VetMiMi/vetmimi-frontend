import { useState } from "react";
import { Link } from "react-router";
import { C } from "@/lib/tokens";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/lib/data";
import { WaveDivider, LavenderWaveAccent } from "@/components/art/Shapes";
import { Btn } from "@/components/ui/Button";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((item) => item.category === activeFilter);

  return (
    <div style={{ backgroundColor: C.canvas, minHeight: "100vh" }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: "8rem 0 5rem", backgroundColor: C.canvas, position: "relative", overflow: "hidden" }}>
        <LavenderWaveAccent
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            opacity: 0.5,
          }}
        />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: C.rose,
              marginBottom: "1.2rem",
            }}
          >
            Portfolio
          </p>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              fontFamily: "var(--serif)",
              color: C.ink,
              lineHeight: 1.1,
              maxWidth: 760,
            }}
          >
            Work made by hand, with people and through experience.
          </h1>
        </div>
      </section>

      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />

      {/* ── Filter + Grid ─────────────────────────────────── */}
      <section style={{ padding: "5rem 0 8rem", backgroundColor: C.paper }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          {/* Filter buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "0.6rem",
              marginBottom: "3.5rem",
            }}
          >
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "999px",
                    border: `1.5px solid ${isActive ? C.indigo : `${C.ink}44`}`,
                    backgroundColor: isActive ? C.indigo : "transparent",
                    color: isActive ? "#fff" : C.ink,
                    fontFamily: "var(--sans)",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 600 : 400,
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                    transition: "all 0.18s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center" as const,
                padding: "6rem 2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--sans)",
                  color: `${C.ink}88`,
                  fontSize: "1rem",
                  marginBottom: "1.75rem",
                  lineHeight: 1.7,
                }}
              >
                Nothing here yet. There are no published items in this category at the moment.
              </p>
              <Btn onClick={() => setActiveFilter("All")} variant="secondary">
                View All
              </Btn>
            </div>
          ) : (
            /* Portfolio grid */
            <div
              style={{ display: "grid", gap: "1.75rem" }}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((item) => (
                <Link
                  key={item.slug}
                  to={`/portfolio/${item.slug}`}
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <article
                    style={{
                      backgroundColor: C.canvas,
                      borderRadius: 12,
                      overflow: "hidden",
                      border: `1px solid ${C.ink}0F`,
                    }}
                  >
                    {/* Image / aspect ratio box */}
                    <div
                      style={{
                        backgroundColor: C.paper,
                        position: "relative",
                        paddingBottom: "70%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div style={{ padding: "1.5rem 1.75rem 1.75rem" }}>
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.72rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase" as const,
                          color: C.rose,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.category}
                      </p>
                      <h2
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "1.2rem",
                          color: C.ink,
                          lineHeight: 1.3,
                          marginBottom: "0.4rem",
                        }}
                      >
                        {item.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.82rem",
                          color: `${C.ink}66`,
                        }}
                      >
                        {item.year}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        style={{
          padding: "7rem 0",
          backgroundColor: C.indigo,
          textAlign: "center" as const,
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: C.aqua,
              marginBottom: "1.2rem",
            }}
          >
            Collaborate
          </p>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "2rem",
            }}
          >
            Interested in a creative collaboration?
          </h2>
          <Btn href="/contact" style={{ backgroundColor: C.ochre, borderColor: C.ochre, color: C.ink }}>
            Get in touch
          </Btn>
        </div>
      </section>
      <WaveDivider from={C.indigo} to={C.canvas} variant="gentle" />
    </div>
  );
}
