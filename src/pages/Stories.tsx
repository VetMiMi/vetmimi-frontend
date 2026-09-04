import { useState } from "react";
import { Link } from "react-router";
import { C } from "@/lib/tokens";
import { STORIES, STORY_CATEGORIES } from "@/lib/data";
import { PetalOutline, LavenderWaveAccent, WaveDivider } from "@/components/art/Shapes";
import { Btn, EditorialLink } from "@/components/ui/Button";

export default function Stories() {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredStory = STORIES.find((s) => s.featured) ?? STORIES[0];

  const filtered = STORIES.filter((s) => {
    const matchesFilter = activeFilter === "All" || s.category === activeFilter;
    const isNotFeatured = s.slug !== featuredStory?.slug;
    return matchesFilter && isNotFeatured;
  });

  // When filter is active, also check whether featured story matches
  const featuredMatchesFilter =
    activeFilter === "All" || featuredStory?.category === activeFilter;

  return (
    <div style={{ backgroundColor: C.canvas, minHeight: "100vh" }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          padding: "8rem 0 5rem",
          backgroundColor: C.canvas,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <LavenderWaveAccent
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "45%",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 2rem",
            position: "relative",
            zIndex: 1,
          }}
        >
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
            Stories & Insights
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
            A place for stories, questions and reflection.
          </h1>
        </div>
      </section>

      <WaveDivider from={C.canvas} to={C.paper} variant="gentle" />

      {/* ── Filter ───────────────────────────────────────── */}
      <section style={{ backgroundColor: C.paper, paddingTop: "3rem" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "0.6rem",
              marginBottom: "3rem",
            }}
          >
            {STORY_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "999px",
                    border: `1.5px solid ${isActive ? C.rose : `${C.ink}44`}`,
                    backgroundColor: isActive ? C.rose : "transparent",
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
        </div>
      </section>

      {/* ── Featured Story ────────────────────────────────── */}
      {featuredStory && featuredMatchesFilter && (
        <section style={{ backgroundColor: C.paper, paddingBottom: "4rem" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
            <Link
              to={`/stories/${featuredStory.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <article
                style={{
                  backgroundColor: C.canvas,
                  borderRadius: 16,
                  overflow: "hidden",
                  border: `1px solid ${C.ink}0F`,
                  display: "grid",
                  position: "relative",
                }}
                className="grid-cols-1 md:grid-cols-2"
              >
                {/* Petal decoration */}
                <PetalOutline
                  size={140}
                  color={C.rose}
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "2rem",
                    opacity: 0.28,
                    zIndex: 1,
                  }}
                />

                {/* Image */}
                <div
                  style={{
                    backgroundColor: C.paper,
                    minHeight: 360,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={featuredStory.img}
                    alt={featuredStory.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      position: "absolute",
                      inset: 0,
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "3.5rem",
                    display: "flex",
                    flexDirection: "column" as const,
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
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
                    Featured · {featuredStory.category}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      color: C.ink,
                      lineHeight: 1.2,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {featuredStory.title}
                  </h2>
                  <p
                    style={{
                      color: `${C.ink}BB`,
                      lineHeight: 1.78,
                      fontSize: "1rem",
                      fontFamily: "var(--sans)",
                      marginBottom: "2rem",
                    }}
                  >
                    {featuredStory.excerpt}
                  </p>
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "0.88rem",
                        color: C.indigo,
                        textDecoration: "underline",
                        textUnderlineOffset: 3,
                      }}
                    >
                      Read story →
                    </span>
                  </div>
                  <p
                    style={{
                      marginTop: "2rem",
                      fontFamily: "var(--sans)",
                      fontSize: "0.8rem",
                      color: `${C.ink}66`,
                    }}
                  >
                    {featuredStory.author} · {featuredStory.date}
                  </p>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* ── Stories grid ─────────────────────────────────── */}
      <section style={{ padding: "3rem 0 8rem", backgroundColor: C.paper }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 2rem" }}>
          {filtered.length === 0 && !featuredMatchesFilter ? (
            <div style={{ textAlign: "center" as const, padding: "5rem 2rem" }}>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  color: `${C.ink}88`,
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                }}
              >
                Nothing here yet. There are no published items in this category at the moment.
              </p>
              <Btn onClick={() => setActiveFilter("All")} variant="secondary">
                View All
              </Btn>
            </div>
          ) : filtered.length === 0 ? null : (
            <div
              style={{ display: "grid", gap: "1.75rem" }}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((story) => (
                <Link
                  key={story.slug}
                  to={`/stories/${story.slug}`}
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <article
                    style={{
                      backgroundColor: C.canvas,
                      borderRadius: 12,
                      overflow: "hidden",
                      border: `1px solid ${C.ink}0F`,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column" as const,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: C.paper,
                        height: 200,
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={story.img}
                        alt={story.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div
                      style={{
                        padding: "1.5rem 1.75rem 2rem",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column" as const,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.72rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase" as const,
                          color: C.rose,
                          marginBottom: "0.6rem",
                        }}
                      >
                        {story.category}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "1.2rem",
                          color: C.ink,
                          lineHeight: 1.3,
                          marginBottom: "0.75rem",
                        }}
                      >
                        {story.title}
                      </h3>
                      <p
                        style={{
                          color: `${C.ink}BB`,
                          lineHeight: 1.78,
                          fontSize: "0.92rem",
                          fontFamily: "var(--sans)",
                          flex: 1,
                          marginBottom: "1.25rem",
                        }}
                      >
                        {story.excerpt}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.78rem",
                          color: `${C.ink}66`,
                        }}
                      >
                        {story.author} · {story.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── End section quiet links ────────────────────────── */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: C.canvas,
          textAlign: "center" as const,
          borderTop: `1px solid ${C.ink}11`,
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
              marginBottom: "2rem",
            }}
          >
            Explore more
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
              flexWrap: "wrap" as const,
            }}
          >
            <EditorialLink href="/portfolio">Portfolio</EditorialLink>
            <EditorialLink href="/art-of-wellness">Art of Wellness</EditorialLink>
            <EditorialLink href="/about">About Daw Mi</EditorialLink>
          </div>
        </div>
      </section>
    </div>
  );
}
