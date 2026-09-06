# my-portfolio

Personal portfolio site for **Eyad Ahmed Kamal Mostafa** — AI & Data Science
undergraduate at Zagazig University, focused on business intelligence and
data modeling.

**Live:** https://my-portfolio-seven-rho-w3txzhq0un.vercel.app

## Stack

| | |
|---|---|
| Framework | Next.js 14.2.15 (App Router) |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Icons | lucide-react |
| Fonts | Inter + JetBrains Mono via `next/font/google` |
| Hosting | Vercel |

The site is fully static — every route is prerendered at build time. There is
no database, no API route, and no server-side state.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

`next/font/google` fetches Inter and JetBrains Mono at **build time**, so the
first build needs network access to `fonts.googleapis.com`. Without it the
build still succeeds but falls back to system fonts.

## Structure

```
app/
  layout.tsx          root layout, fonts, metadata
  page.tsx            single-page composition + background layers
  globals.css         Tailwind entry + keyframes
components/
  Navbar.tsx          sticky nav, mobile menu            (client)
  Hero.tsx            headline, CTAs, portrait           (server)
  KpiRibbon.tsx       four metrics, animated counter     (client)
  CaseStudies.tsx     projects, schema/DAX tab explorer  (client)
  CompetitiveSection.tsx  ECPC contest section           (server)
  SkillsSection.tsx   experience timeline + skills       (server)
  ContactSection.tsx  copy-email, links, footer          (client)
public/
  cv.pdf              one-page ATS resume
  uploads/            portrait and contest photos
```

Only `Navbar`, `KpiRibbon`, `CaseStudies`, and `ContactSection` ship
JavaScript to the browser; the rest are Server Components.

## About the content

Every factual claim on this site is checkable:

- **31,653 rail transactions** — the exact row count of the source dataset,
  published in
  [UK-Train-Rides-Analysis](https://github.com/Eyad-Ahmed-Kamal/UK-Train-Rides-Analysis).
- **DEPI, Data Analysis track** — Digital Egypt Pioneers Initiative
  (Ministry of Communications), completed; team lead on the four-member
  UK Train Rides project.
- **ECPC 2026 qualifications** — competed as one of a three-person team,
  Honorable Mention. Not a team-lead role.
- **GPA 3.22** — after Level 1, 34 credit hours.

Claims about coursework not yet taken, availability windows that had
passed, and scale language the data did not support were removed in
`59e6df2`. If you spot anything here that does not hold up, open an issue.

## License

No license — all rights reserved. The résumé, photographs, and project
write-ups are personal material, not reusable content.
