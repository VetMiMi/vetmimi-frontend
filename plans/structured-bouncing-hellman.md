# VetMiMi — Detail Pages + Dark Home Redesign

## Context

The user wants two things:
1. **Home page**: shift to the darker, more dramatic aesthetic shown in image-10 — full-bleed art7 (golden expressionist face on deep indigo) as hero background with dark overlay, white headline "Where the inner world finds its form.", aubergine pull-quote section. This matches the version built before the last redesign.
2. **Complete detail pages**: ArtOfWellness, Portfolio, Stories & Insights, and Contact pages are skeletal or missing placeholder content and real artwork images. All need full builds.

image-9.png was a GitHub sidebar (irrelevant). image-10.png shows the dark design the user wants to restore on Home.

---

## Palette & Assets (unchanged)

Tokens from `src/lib/tokens.ts`:
- canvas `#FFF7EF`, paper `#F8F1E8`, ink `#28252D`
- coral `#DB5F59` (CTAs), rose `#B2667B`, indigo `#494C6D` (dark sections)
- violet `#6B6396`, aqua `#91C0D3`, ochre `#CDAA73`

Artworks:
- `art3` = image-3.png — organic flowing figure (sage/lavender/red)
- `art4` = image-4.png — woman portrait + pink poppy / blue vase
- `art5` = image-5.png — pink peonies watercolor in blue-white vase
- `art6` = image-6.png — mixed-media diptych: roses + skeleton
- `art7` = image-7.png — expressionist golden face on deep indigo

Abstract shapes from `src/components/art/Shapes.tsx`:
`ImperfectHalo`, `WaveDivider`, `AquaRibbon`, `CoralWaveField`, `GoldMark`, `MintOpenCircle`, `PetalOutline`, `NestedOval`, `OverlappingCircles`, `FlowingRibbon`, `AlmondEye`, `LavenderWaveAccent`, `DarkWaveTop`, `ConnectingThread`

---

## Changes

### 1. `src/pages/Home.tsx` — Dark hero restoration

Replace the current cream hero with the dark version from image-10:
- Full-viewport section, art7 as `position:absolute` background, `objectFit:cover`
- Overlay: `linear-gradient(105deg, rgba(28,22,40,0.94) 0%, rgba(28,22,40,0.85) 45%, rgba(28,22,40,0.3) 100%)`
- Headline: *"Where the inner world finds its form."* in `#FEFCF8`, Fraunces serif, ~5rem desktop
- Subhead italic with ochre accent, body copy in canvas/70% opacity
- Primary CTA: coral "Book Free Consultation", secondary: border/white "Meet Daw Mi"
- Trust strip: ochre circle icons + cream/45% labels
- Scroll cue: thin vertical line fading to transparent

Keep all sections below unchanged (artwork gallery, about, services, AoW dark, stories, testimonials, FAQ, two-path CTA).

---

### 2. `src/pages/ArtOfWellness.tsx` — Full build (creative intensity 5/5)

Structure per spec:
- **Hero**: dark indigo background, art7 as hero image right-side, gold marks + aqua curve. Label "ART OF WELLNESS", H1 "Art of Wellness", subhead "Creativity, care and human connection in healthcare spaces."
- **What is Art of Wellness**: cream section, plain-English description, boundary note.
- **Why / Meaning**: "Healthcare spaces hold many different experiences..." — no clinical claims.
- **Daw Mi's Involvement**: white panel, exact verified role wording placeholder with `[To confirm]` flags, high clarity layout.
- **Activities**: controlled collage layout using art6 (mixed media), art3.
- **Gallery**: museum-like negative space, art3, art4, art5, art6, art7 — no auto-carousel.
- **Boundary block**: "VetMiMi shares Daw Mi's involvement... use the authoritative source."
- **Final CTA**: "Interested in a creative healthcare or community project?" → Contact. No personal booking dominance.
- Use `DarkWaveTop`, `GoldMark`, `AquaRibbon`, `AlmondEye` as abstract gestures.

---

### 3. `src/pages/Portfolio.tsx` — Full build (creative intensity 5/5)

Structure per spec:
- **Hero**: H1 "Work made by hand, with people and through experience.", indigo hand-drawn line accent, art5 flower crop.
- **Filters** (working state with `useState`): All · Artwork · Workshops & Programs · Exhibitions & Events · Projects & Collaborations. Active filter highlighted in coral.
- **Masonry grid**: 5 items using all 5 artworks — each card shows Category, Title, Year, medium/context and "View →" link. Mix arch-cropped (border-radius 50% top) and rectangular cards.
  - art4 → Artwork, "The ULX & Eddington Limit", 2023, Mixed media
  - art3 → Artwork, "Growth & Becoming", [Year to confirm], Acrylic on canvas
  - art5 → Artwork, "Bloom", [Year to confirm], Watercolour
  - art7 → Artwork, "Expression", [Year to confirm], Oil/acrylic
  - art6 → Projects & Collaborations, "Life & Grief — Community Diptych", [Year to confirm], Mixed media collage
- **S09 empty filter state**: "Nothing here yet..." + View All link (shown when a filtered category is empty).
- **Professional CTA**: "Interested in a workshop, project or collaboration?" → Contact.

---

### 4. `src/pages/Stories.tsx` — Full build (creative intensity 3.5/5)

Structure per spec:
- **Hero**: pale lavender curve + small almond/eye at edge. H1 "A place for stories, questions and reflection."
- **Filters** (`useState`): All · True Stories · Reflections · Art & Wellbeing · Art Psychotherapy · Art of Wellness & Project Updates. Coral active state.
- **Featured story**: large card with art5 image. Category REFLECTION, title "What happens when we stop trying to make it perfect?", excerpt "A reflection on creating without needing an answer first." Read →
- **Story grid** (3 cards): magazine style with artwork images (art3, art4, art7 as thumbnails). Each has category, title, excerpt, Read →. No booking CTAs.
- **End exploration**: links to Portfolio / Art of Wellness / About.
- Colors: cream + `#F0EEF5` lavender tint + rose. `AlmondEye` + `LavenderWaveAccent` as gestures.

---

### 5. `src/pages/Contact.tsx` — Full build (creative intensity 2/5)

Structure per spec:
- **Hero**: large open `MintOpenCircle` (partial, not closed blob) on right. H1 "Have something in mind?" with redirect: "Looking for a personal appointment? Go to Booking →"
- **Form** (controlled with `useState`): Name, Email, Organisation (optional), Enquiry type (select), Subject, Message, Preferred contact method (optional), Privacy acknowledgement checkbox.
  - Enquiry types: Collaboration/Project · Workshop/Program · Speaking/Event · Art of Wellness · Media/Interview · Organisation/Healthcare · General Enquiry
- **Guidance**: "Please do not include private medical or detailed health information in this form."
- **Supporting info**: public email [To confirm], location [To confirm], Facebook [To confirm], crisis boundary wording.
- **S07 success** and **S08 failure** states handled with `useState` + inline conditional render.
- No artwork behind form fields. Clean cream/white surface.
- Colors: cream + mint (`aqua`) + rose accents.

---

### 6. `src/pages/Services.tsx` — Already written but needs artwork images fully populated

The existing Services.tsx already exists with 3 service cards. Verify each card has:
- Real artwork image (art3/art5/art7) in the card header with correct `objectPosition`
- Correct service symbols: `NestedOval` (rose) / `OverlappingCircles` (aqua) / `FlowingRibbon` (ochre)
- Format/duration/availability placeholders per spec `[To confirm]`
- "Not sure?" section with `MintOpenCircle` accent

No rewrite needed if images are already wired — just confirm on build.

---

### 7. `src/pages/services/IndividualArtTherapy.tsx` — Already written, needs audit

Exists. Verify:
- art3 (organic flowing figure) in arch hero frame, art4 as supporting crop
- 5-step session flow with `ConnectingThread` in rose
- Practical details panel (8 fields, all `[To confirm]`)
- "Currently Available" status badge
- "A few things to know" with crisis/privacy/policy links
- Final CTA "Request Appointment" → `/book`

---

### 8. `src/pages/services/GroupArtWellbeing.tsx` — Already written, needs audit

Exists. Verify:
- art5 (pink peonies) as hero image
- `OverlappingCircles` symbol + `MintOpenCircle` accent
- 5-step flow with `ConnectingThread` in aqua
- Practical details (8 fields, all `[To confirm]`)
- Final CTA → `/contact`

---

### 9. `src/pages/services/WorkshopsPrograms.tsx` — Already written, needs audit

Exists. Verify:
- art6 (mixed-media collage) as hero, art7 as dark section image
- `FlowingRibbon` symbol + `GoldMark` accent
- 5-step "How a project begins" flow with `ConnectingThread` in ochre
- Dark indigo "Have an idea?" CTA section using `DarkWaveTop`
- Enquiry guidance text per spec

---

## Verification

```bash
pnpm build   # must exit 0 with no TypeScript errors
```

All 5 files touch only page-level components — no shared infrastructure changes needed. Each page is self-contained with its own image imports and local state.
