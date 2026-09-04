import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { C } from "@/lib/tokens";
import { PetalOutline, WaveDivider } from "@/components/art/Shapes";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Art of Wellness", to: "/art-of-wellness" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Stories & Insights", to: "/stories" },
  { label: "Contact", to: "/contact" },
];

export default function Root() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: C.canvas,
        borderBottom: scrolled ? "1px solid rgba(40,37,45,0.09)" : "1px solid transparent",
        transition: "border-color 0.3s",
      }}>
        <div style={{
          maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "72px",
        }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}>VetMiMi</span>
            <span style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.rose, marginTop: "2px" }}>Daw Mi · Art Therapist</span>
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="hidden md:flex">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} style={{
                fontFamily: "var(--sans)", fontSize: "0.84rem", fontWeight: 500,
                color: pathname === to ? C.coral : C.ink,
                textDecoration: "none",
                opacity: pathname === to ? 1 : 0.72,
                transition: "opacity 0.2s, color 0.2s",
              }}>{label}</Link>
            ))}
            <Link to="/book" style={{
              backgroundColor: C.coral, color: "#fff",
              fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.84rem",
              padding: "10px 22px", borderRadius: "8px",
              textDecoration: "none", whiteSpace: "nowrap",
            }}>Book Appointment</Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="flex md:hidden">
            <Link to="/book" style={{
              backgroundColor: C.coral, color: "#fff",
              fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.78rem",
              padding: "8px 16px", borderRadius: "6px", textDecoration: "none",
            }}>Book</Link>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", color: C.ink, lineHeight: 1 }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ backgroundColor: C.canvas, borderTop: "1px solid rgba(40,37,45,0.07)", padding: "1.5rem 1.5rem 2rem" }} className="md:hidden">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {NAV_LINKS.map(({ label, to }) => (
                <Link key={to} to={to} style={{
                  fontFamily: "var(--sans)", fontSize: "1rem", fontWeight: 500,
                  color: pathname === to ? C.coral : C.ink,
                  textDecoration: "none",
                  padding: "0.85rem 0",
                  borderBottom: "1px solid rgba(40,37,45,0.06)",
                }}>{label}</Link>
              ))}
              <Link to="/book" style={{
                marginTop: "1.25rem",
                backgroundColor: C.coral, color: "#fff",
                fontFamily: "var(--sans)", fontWeight: 600, fontSize: "0.95rem",
                padding: "13px 24px", borderRadius: "8px", textDecoration: "none",
                textAlign: "center", display: "block",
              }}>Book Appointment</Link>
            </div>
          </div>
        )}
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--sans)", fontSize: "0.65rem",
        letterSpacing: "0.13em", textTransform: "uppercase",
        color: "rgba(255,247,239,0.32)", marginBottom: "1.1rem",
      }}>{title}</div>
      {links.map(([label, to]) => (
        <Link key={label} to={to} style={{
          display: "block", fontFamily: "var(--sans)", fontSize: "0.86rem",
          color: "rgba(255,247,239,0.58)", textDecoration: "none", marginBottom: "0.55rem",
        }}>{label}</Link>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <WaveDivider from={C.paper} to={C.indigo} variant="dramatic" />
      <div style={{ backgroundColor: C.indigo, position: "relative", overflow: "hidden" }}>
        <PetalOutline color={C.coral} size={110}
          style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", opacity: 0.35 }} />
        <div aria-hidden style={{
          position: "absolute", top: "2.5rem", left: "2rem",
          width: "40px", height: "58px",
          borderRadius: "20px 20px 35% 35%",
          border: "1px solid rgba(255,247,239,0.12)", opacity: 0.5,
        }} />

        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "4rem 1.5rem 3rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gap: "2.5rem" }} className="grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr]">
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", color: C.canvas, marginBottom: "0.4rem" }}>VetMiMi</div>
              <div style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.rose, marginBottom: "1.25rem" }}>Daw Mi · Art Therapist & Wellbeing Practitioner</div>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.84rem", color: "rgba(255,247,239,0.52)", lineHeight: 1.75, maxWidth: "280px" }}>
                A space for creativity, reflection and meaningful connection. Through art and thoughtful conversation, another way to explore what may be difficult to put into words.
              </p>
            </div>
            <FooterCol title="Explore" links={[
              ["About", "/about"],
              ["Services", "/services"],
              ["Art of Wellness", "/art-of-wellness"],
              ["Portfolio", "/portfolio"],
              ["Stories & Insights", "/stories"],
            ]} />
            <FooterCol title="Connect" links={[
              ["Book Appointment", "/book"],
              ["Contact", "/contact"],
              ["Facebook [To confirm]", "/contact"],
              ["Email [To confirm]", "/contact"],
            ]} />
            <FooterCol title="Information" links={[
              ["Privacy Policy", "/privacy"],
              ["Booking & Cancellation", "/booking-policy"],
              ["Disclaimer", "/disclaimer"],
            ]} />
          </div>

          <div style={{
            borderTop: "1px solid rgba(255,247,239,0.1)", marginTop: "3rem", paddingTop: "1.5rem",
            display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem",
          }}>
            <span style={{ fontFamily: "var(--sans)", fontSize: "0.75rem", color: "rgba(255,247,239,0.26)" }}>© 2025 VetMiMi. All rights reserved.</span>
            <span style={{ fontFamily: "var(--sans)", fontSize: "0.75rem", color: "rgba(255,247,239,0.26)" }}>Sydney, Australia · [Location to confirm]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
