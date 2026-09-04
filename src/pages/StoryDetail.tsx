import { useParams, Link } from "react-router";
import { C } from "@/lib/tokens";
import { STORIES } from "@/lib/data";
import { EditorialLink } from "@/components/ui/Button";

export default function StoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
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
            fontSize: "1.8rem",
            color: C.ink,
            marginBottom: "1rem",
            lineHeight: 1.3,
          }}
        >
          This story is no longer available.
        </p>
        <p
          style={{
            fontFamily: "var(--sans)",
            color: `${C.ink}88`,
            lineHeight: 1.7,
            marginBottom: "2rem",
            maxWidth: 420,
          }}
        >
          It may have been moved or removed.
        </p>
        <Link
          to="/stories"
          style={{
            fontFamily: "var(--sans)",
            color: C.indigo,
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          ← Back to Stories
        </Link>
      </div>
    );
  }

  const related = STORIES.filter((s) => s.slug !== story.slug).slice(0, 3);

  // Split body into paragraphs
  const paragraphs = story.body
    ? story.body.split("\n\n").filter((p) => p.trim().length > 0)
    : [];

  const isTrueStory = story.category === "True Stories";

  return (
    <div style={{ backgroundColor: C.canvas, minHeight: "100vh" }}>
      {/* ── Article header ────────────────────────────────── */}
      <header
        style={{
          padding: "7rem 0 4rem",
          backgroundColor: C.canvas,
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 2rem" }}>
          {/* Breadcrumb */}
          <nav
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.82rem",
              color: `${C.ink}66`,
              marginBottom: "2.5rem",
              display: "flex",
              gap: "0.4rem",
              alignItems: "center",
            }}
          >
            <Link
              to="/stories"
              style={{ color: C.indigo, textDecoration: "underline", textUnderlineOffset: 2 }}
            >
              Stories
            </Link>
            <span>/</span>
            <span>{story.category}</span>
          </nav>

          {/* Category label */}
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: C.rose,
              marginBottom: "1.25rem",
            }}
          >
            {story.category}
          </p>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontFamily: "var(--serif)",
              color: C.ink,
              lineHeight: 1.15,
              marginBottom: story.subtitle ? "1rem" : "1.75rem",
            }}
          >
            {story.title}
          </h1>

          {/* Optional subtitle */}
          {story.subtitle && (
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "1.1rem",
                color: `${C.ink}99`,
                lineHeight: 1.6,
                marginBottom: "1.75rem",
                fontStyle: "italic",
              }}
            >
              {story.subtitle}
            </p>
          )}

          {/* Author + date */}
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.88rem",
              color: `${C.ink}77`,
              marginBottom: "2rem",
            }}
          >
            {story.author} · {story.date}
          </p>

          {/* Decorative line */}
          <hr
            style={{
              border: "none",
              borderTop: `1px solid ${C.rose}`,
              width: 60,
              margin: "0 0 0",
            }}
          />
        </div>
      </header>

      {/* ── Story image ───────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem 4rem" }}>
        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            maxHeight: 520,
          }}
        >
          <img
            src={story.img}
            alt={story.title}
            style={{ width: "100%", maxHeight: 520, objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      {/* ── Story body ────────────────────────────────────── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 2rem 5rem" }}>
        {paragraphs.length > 0 ? (
          paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.125rem",
                lineHeight: 1.85,
                color: C.ink,
                marginBottom: "1.75rem",
              }}
            >
              {para}
            </p>
          ))
        ) : (
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.125rem",
              lineHeight: 1.85,
              color: `${C.ink}88`,
              fontStyle: "italic",
            }}
          >
            {story.excerpt}
          </p>
        )}

        {/* Optional pull quote */}
        {(story as any).pullQuote && (
          <blockquote
            style={{
              borderLeft: `3px solid ${C.rose}`,
              paddingLeft: "2rem",
              margin: "3rem 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.5rem",
                lineHeight: 1.5,
                color: C.rose,
                fontStyle: "italic",
              }}
            >
              {(story as any).pullQuote}
            </p>
          </blockquote>
        )}

        {/* Explore services CTA (not for True Stories) */}
        {!isTrueStory && (
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${C.ink}15`,
            }}
          >
            <EditorialLink href="/services">Explore services</EditorialLink>
          </div>
        )}
      </div>

      {/* ── Related stories ───────────────────────────────── */}
      {related.length > 0 && (
        <section
          style={{
            padding: "5rem 0 7rem",
            backgroundColor: C.paper,
          }}
        >
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
              Read more
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: C.ink,
                marginBottom: "2.5rem",
              }}
            >
              More stories
            </h2>
            <div
              style={{ display: "grid", gap: "1.5rem" }}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/stories/${rel.slug}`}
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <article
                    style={{
                      backgroundColor: C.canvas,
                      borderRadius: 10,
                      overflow: "hidden",
                      border: `1px solid ${C.ink}0F`,
                    }}
                  >
                    <div style={{ height: 160, overflow: "hidden", backgroundColor: C.paper }}>
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
                          marginBottom: "0.4rem",
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
                        {rel.author} · {rel.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
