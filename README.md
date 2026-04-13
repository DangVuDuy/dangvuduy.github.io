# CloudLab Apps

Marketing site for the CloudLab app lineup, built with Next.js App Router and static export.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

- Local dev: `http://localhost:3000`
- Production build: static export via Next.js

## Project Structure

```text
app/
  page.tsx                Homepage
  apps/[id]/page.tsx      App detail pages
components/
  home/                   Homepage sections
  app-detail/             Shared detail-page sections
  layout/                 Navbar / Footer
  ui/                     Shared UI primitives
lib/
  apps.ts                 Main app data source
  app-theme.ts            Dynamic theme extraction
```

## App Data

`lib/apps.ts` is the single source of truth for:

- homepage app cards
- featured app banner
- detail page content
- store links
- pricing
- testimonials
- screenshots
- theme tokens

Each app is described by `AppData`.

## Homepage Featured App

Homepage hero no longer depends on array order.

Use `featuredOnHome` in `lib/apps.ts`:

```ts
const cloudMusicSummary: AppSummary = {
  id: "cloud-music",
  name: "Cloud Music",
  tagline: "Your music. Offline. Forever.",
  featuredOnHome: true,
  ...
};
```

Rules:

- Set `featuredOnHome: true` for the app you want to spotlight on the homepage.
- Keep every other app `false` or unset.
- If no app is flagged, homepage falls back to the first item in `appCatalog`.

Current code path:

- data flag: [lib/apps.ts](/Users/duydang/Desktop/MyProject_Dev/AI/workspace/cloudlab-apps/lib/apps.ts)
- homepage selection: [components/home/HomeHero.tsx](/Users/duydang/Desktop/MyProject_Dev/AI/workspace/cloudlab-apps/components/home/HomeHero.tsx)

## Changing the Featured App

To switch homepage spotlight from `Cloud Music` to `VideoXpert`:

1. Set `cloud-music` to `featuredOnHome: false`
2. Set `videoxpert` to `featuredOnHome: true`
3. Keep `heroHeadline`, `heroSub`, `hero.showcase`, `stores`, and screenshots updated for that app

No component change is required.

## Notes

- Homepage hero is data-driven.
- Detail pages are shared components driven by `AppData`.
- Store buttons support multiple stores through `storeId`, so App Store / Google Play can be added later without changing component structure.
