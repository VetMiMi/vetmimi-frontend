import { useParams, Link } from "react-router";
import { C } from "@/lib/tokens";
import { PORTFOLIO } from "@/lib/data";
import { GoldMark, PetalOutline } from "@/components/art/Shapes";
import { Btn } from "@/components/ui/Button";

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const item = PORTFOLIO.find((p) => p.slug === slug);

  if (!item) {
    return (
      <div
        style={{
          backgroundColor: C.canvas,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column" as const,
          textAlign: "center" as const,
          padding: "4rem 2rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "2rem",
            color: C.ink,
            marginBottom: "1rem",
          }}
        >
          We could not find this piece.
        </p>
        <p
          style={{
            fontFamily: "var(--sans)",
            color: `${C.ink}88`,
            marginBottom: "2rem",
          }}
        >
          It may have been moved or is no longer available.
        </p>
        <Link
          to="/portfolio"
          style={{
            fontFamily: "var(--sans)",
            color: C.indigo,
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const related = PORTFOLIO.filter((p) => p.slug !== item.slug).slice(0, 3);

  return (
    <div style={{ backgroundColor: C.canvas, minHeight: "100vh" }}>
      {/* ── Breadcrumb ───────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "2rem 2rem 0",
        }}
      >
        <nav
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.82rem",
            color: `${C.ink}66`,
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
            flexWrap: "wrap" as const,
          }}
        >
          <Link to="/portfolio" style={{ color: C.indigo, textDecoration: "underline", textUnderlineOffset: 2 }}>
            Portfolio
          </Link>
          <span>/</span>
          <span style={{ color: `${C.ink}88` }}>{item.category}</span>
          <span>/</span>
          <span style={{ color: C.ink }}>{item.title}</span>
        </nav>
      </div>

      {/* ── Primary image ─────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1240,
          margin: "2rem auto 0",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxHeight: 600,
            backgroundColor: C.paper,
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              maxHeight: 600,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* ── Header info ───────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ maxWidth: 860, margin: "3rem 0 0" }}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: C.rose,
              marginBottom: "1rem",
            }}
          >
            {item.category}
          </p>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontFamily: "var(--serif)",
              color: C.ink,
              lineHeight: 1.15,
              marginBottom: "0.75rem",
            }}
          >
            {item.title}
          </h1>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              fontFamily: "var(--sans)",
              fontSize: "0.88rem",
              color: `${C.ink}77`,
              marginBottom: "3rem",
              flexWrap: "wrap" as const,
            }}
          >
            <span>{item.year}</span>
            {item.medium && <span>{item.medium}</span>}
            {item.context && <span>{item.context}</span>}
          </div>
        </div>
      </div>

      {/* ── About this work ───────────────────────────────── */}
      <section style={{ padding: "4rem 0 5rem" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{ display: "grid", gap: "4rem" }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.5rem",
                  color: C.ink,
                  marginBottom: "1.25rem",
                }}
              >
                About this work
              </h2>
              <p
                style={{
                  color: `${C.ink}BB`,
                  lineHeight: 1.78,
                  fontSize: "1.05rem",
                  fontFamily: "var(--sans)",
                }}
              >
                {item.summary}
              </p>
            </div>

            {item.role && (
              <div>
                <h2
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.5rem",
                    color: C.ink,
                    marginBottom: "1.25rem",
                  }}
                >
                  Daw Mi's role
                </h2>
                <p
                  style={{
                    color: `${C.ink}BB`,
                    lineHeight: 1.78,
                    fontSize: "1.05rem",
                    fontFamily: "var(--sans)",
                  }}
                >
                  {item.role}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Related items ─────────────────────────────────── */}
      {related.length > 0 && (
        <section style={{ padding: "5rem 0 7rem", backgroundColor: C.paper }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
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
              More work
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: C.ink,
                marginBottom: "2.5rem",
              }}
            >
              Related pieces
            </h2>

            <div
              style={{ display: "grid", gap: "1.5rem" }}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/portfolio/${rel.slug}`}
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <div
                    style={{
                      backgroundColor: C.canvas,
                      borderRadius: 10,
                      overflow: "hidden",
                      border: `1px solid ${C.ink}0F`,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: C.paper,
                        height: 180,
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <img
                        src={rel.img}
                        alt={rel.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.72rem",
                          letterSpacing: "0.13em",
                          textTransform: "uppercase" as const,
                          color: C.rose,
                          marginBottom: "0.4rem",
                        }}
                      >
                        {rel.category}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "1.05rem",
                          color: C.ink,
                          lineHeight: 1.3,
                          marginBottom: "0.3rem",
                        }}
                      >
                        {rel.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.78rem",
                          color: `${C.ink}66`,
                        }}
                      >
                        {rel.year}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Contextual CTA ────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 0",
          backgroundColor: C.canvas,
          textAlign: "center" as const,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GoldMark
          size={52}
          style={{ position: "absolute", top: "2rem", left: "6%", opacity: 0.4 }}
        />
        <PetalOutline
          size={120}
          color={C.aqua}
          style={{ position: "absolute", bottom: "1rem", right: "5%", opacity: 0.3 }}
        />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              color: C.ink,
              marginBottom: "1.25rem",
            }}
          >
            Interested in working together?
          </h2>
          <p
            style={{
              fontFamily: "var(--sans)",
              color: `${C.ink}BB`,
              lineHeight: 1.78,
              marginBottom: "2rem",
              maxWidth: 480,
              margin: "0 auto 2rem",
            }}
          >
            If you would like to discuss a creative collaboration or project, Daw Mi would
            love to hear from you.
          </p>
          <Btn href="/contact">Get in touch</Btn>
        </div>
      </section>
    </div>
  );
}
