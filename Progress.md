# Progress — cloudlab-apps

**Last updated:** 2026-04-13

---

## ✅ Completed

### Phase 1: Foundation
- [x] Next.js 14 project setup (TypeScript, Tailwind CSS, App Router)
- [x] Design tokens configured (fonts, colors, spacing, shadows)
- [x] Data layer (`lib/apps.ts`) with Cloud Music & VideoXpert data
- [x] Placeholder images created in `public/apps/`

### Phase 2: Layout Components
- [x] `Navbar` — sticky header with glassmorphism
- [x] `Footer` — brand, app links, copyright

### Phase 3: UI Primitives
- [x] `SectionLabel` — uppercase muted section header
- [x] `RatingBadge` — star rating display
- [x] `AppStoreButton` — Apple badge + link

### Phase 4-5: Homepage Components
- [x] `HomeHero` — brand identity, CSS-only phone mockup
- [x] `AppCard` — app showcase card with hover effects
- [x] `AppGrid` — 2-card responsive grid
- [x] `AboutSection` — developer introduction
- [x] `HomeCTA` — call-to-action section

### Phase 6: Pages
- [x] Homepage (`/`) — fully assembled
- [x] Cloud Music placeholder (`/apps/cloud-music`)
- [x] VideoXpert placeholder (`/apps/videoxpert`)

### Phase 7: App Detail Components & Pages
- [x] `AppHero` — hero section with headline, sub, rating, CTA, mockup
- [x] `BenefitsSection` — 3-column benefits grid
- [x] `FeatureSection` — alternating layout (text left/right + mockup)
- [x] `ScreenshotGallery` — horizontal scroll strip
- [x] `AppCTA` — bottom CTA with App Store button
- [x] Cloud Music detail page (`/apps/cloud-music`)
- [x] VideoXpert detail page (`/apps/videoxpert`)

### Phase 8: Bug Fixes & Polish
- [x] Navbar brand text overflow (`text-hero` → `text-xl`)
- [x] `#apps` anchor broken on detail pages (`#apps` → `/#apps`)
- [x] Nested `<a>` hydration error in AppCard
- [x] App Store URLs with real app IDs
- [x] Static export config (`output: "export"`, `images.unoptimized: true`)
- [x] Hydration warning fix (`suppressHydrationWarning` on `<html>`)
- [x] HomeCTA replaced with 2 per-app buttons
- [x] Display typography made responsive with `clamp()`
- [x] AboutSection replaced with 3 proof points
- [x] Homepage featured app switched to data-driven selection via `featuredOnHome`

---

## 📋 Remaining Work

### High Priority — Real Product Visuals

#### Task: Replace HomeHero Placeholder Visual
File: `components/home/HomeHero.tsx:47-73`

**Problem:** Phone composition uses generic bars, circles, and gradient blocks. No real product evidence on first screen impression.

**Fix when ready:** Replace CSS mockup with real captured app screenshots inside a device frame. Suggested: stacked composition showing Cloud Music and VideoXpert screens side by side.

**Blocked by:** real screenshot assets

---

#### Task: Replace Duplicate Screenshot Images
File: `lib/apps.ts:76-172`

**Problem:** 
- All 5 Cloud Music screenshots share the same file hash
- All 5 VideoXpert screenshots share the same file hash
- Feature sections also reuse the same mockup for 2 different features

**Fix when ready:** Replace with distinct screens — one per feature/benefit. Minimum: 3 unique screenshots per app.

**Blocked by:** real screenshot assets

---

### Medium Priority — Mobile Polish

#### Task: Add Mobile-Specific Adjustments
- [ ] Navbar hamburger menu for mobile (currently links just stack)
- [ ] Consider reducing hero padding on mobile
- [ ] Test screenshot gallery scroll on mobile

---

## 🎯 Quick Reference — Component Locations

```
components/
├── layout/
│   ├── Navbar.tsx      ✅
│   └── Footer.tsx      ✅
├── home/
│   ├── HomeHero.tsx    ✅ (placeholder visual)
│   ├── AppCard.tsx     ✅
│   ├── AppGrid.tsx     ✅
│   ├── AboutSection.tsx ✅
│   └── HomeCTA.tsx     ✅
├── app-detail/
│   ├── AppHero.tsx         ✅
│   ├── BenefitsSection.tsx ✅
│   ├── FeatureSection.tsx  ✅
│   ├── ScreenshotGallery.tsx ✅
│   └── AppCTA.tsx          ✅
└── ui/
    ├── SectionLabel.tsx  ✅
    ├── RatingBadge.tsx   ✅
    └── AppStoreButton.tsx ✅
```

---

## 📝 Notes

- Build command: `npm run build`
- Dev server: `npm run dev` (http://localhost:3000)
- TypeScript strict mode enabled
- No external UI libraries — pure Tailwind CSS
- Static export configured for deployment
