# Soham Kundu — Portfolio 2027

<p align="center">
  <strong>Interactive Editorial Software Engineering Portfolio</strong>
</p>

<p align="center">
  A retro-futuristic personal portfolio built with Next.js, TypeScript, and a performance-first interaction system.
</p>

<p align="center">
  <a href="#-overview">Overview</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-projects">Projects</a> ·
  <a href="#-architecture">Architecture</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-deployment">Deployment</a>
</p>

---

## ✦ Overview

**Soham Kundu — Portfolio 2027** is a production-oriented personal portfolio designed as an **interactive editorial software-engineering publication** rather than a conventional developer portfolio.

The experience combines:

- retro-vintage visual language
- futuristic interface details
- editorial typography and asymmetrical layouts
- technical metadata and archive-style navigation
- subtle, intentional micro-interactions
- statically generated project case studies
- responsive behavior across desktop, tablet, and mobile
- accessibility and reduced-motion support
- a deliberately small runtime footprint

The project is built to showcase not only **what was built**, but also **how it was engineered**.

> **Design principle:** the interface should feel alive without becoming an animation showcase.

---

## ✨ Highlights

| Area               | Implementation                                       |
| ------------------ | ---------------------------------------------------- |
| Framework          | Next.js 16 App Router                                |
| Language           | TypeScript                                           |
| Styling            | Tailwind CSS v4 + custom CSS tokens                  |
| Motion             | Motion for React + CSS-first transitions             |
| Rendering          | Server Components + static generation where possible |
| Project Content    | Typed local data / static content                    |
| Project Pages      | `/projects/[slug]`                                   |
| Images             | `next/image` and optimized local assets              |
| Posters            | Deterministic SVG editorial posters                  |
| Lightbox           | Accessible keyboard-friendly image viewer            |
| Deployment         | Vercel-ready                                         |
| Database           | None                                                 |
| CMS                | None                                                 |
| Runtime GitHub API | None                                                 |
| WebGL / Three.js   | None                                                 |

---

## 🎯 Design Direction

The visual identity intentionally sits between several design disciplines:

```text
RETRO VINTAGE
      +
FUTURISTIC INTERFACE
      +
MODERN EDITORIAL DESIGN
      +
SOFTWARE ENGINEERING
      +
DIGITAL ARCHIVE
```

### Visual principles

- Near-black backgrounds with warm off-white typography
- Copper/warm-orange accents used as an accent, not as the entire palette
- Instrument Serif for editorial display typography
- Geist Sans for body/UI text
- JetBrains Mono for technical metadata
- Thin rules and technical dividers
- Asymmetrical editorial grids
- Restrained grain/texture
- Project-specific visual language
- Small interaction details rather than large visual effects

### What the design deliberately avoids

- generic SaaS landing-page patterns
- excessive glassmorphism
- neon cyberpunk styling
- heavy WebGL backgrounds
- giant particle systems
- unnecessary 3D effects
- fake project screenshots
- fabricated metrics or claims

---

## 🧩 Core Experience

The application is organized as a visual publication:

```text
FIRST LOADER
     ↓
HERO
     ↓
ABOUT / POSITIONING
     ↓
SELECTED WORK
     ↓
ENGINEERING EXPERTISE
     ↓
EXPERIENCE + EDUCATION
     ↓
TECHNICAL STACK
     ↓
ACHIEVEMENTS / CERTIFICATIONS
     ↓
CONTACT
     ↓
FOOTER
```

The first loader from the original portfolio is preserved, while the experience after the loader is rebuilt around the new editorial system.

---

## 🚀 Features

### Editorial Homepage

A typography-first homepage with:

- large editorial hero composition
- technical metadata
- responsive personal imagery
- asymmetric sections
- technical section labels
- editorial timeline
- archive-style achievements
- large closing contact statement

### Micro-Interactions

Interactions are intentionally small and contextual:

- magnetic CTA behavior on supported pointers
- animated link underlines
- project hover transitions
- title and arrow movement
- text reveal / section reveal
- custom cursor with contextual labels on desktop
- scroll progress indicator
- accessible lightbox transitions
- mobile navigation transitions

The system disables or simplifies pointer-heavy interaction on touch devices and respects `prefers-reduced-motion`.

### Project Archive

The complete project collection is available through:

```text
/projects
```

Projects are organized into editorial groups rather than arbitrary rankings:

- Featured
- Selected
- Experimental / Early-stage

The archive also supports category-based filtering.

### Technical Case Studies

Each project can be explored through:

```text
/projects/[slug]
```

Case studies adapt to the available verified content and can include:

- project overview
- problem
- solution
- key features
- architecture
- technical decisions
- challenges
- screenshots
- demo material
- learnings
- GitHub
- Live Demo
- previous/next navigation
- related projects

Empty or unverified sections are omitted instead of being filled with fictional content.

### Deterministic Project Posters

When a project does not have suitable authentic imagery, the site uses lightweight SVG editorial artwork derived from the project's technical category.

Examples:

- network / packet-flow motifs for the DPI Engine
- interface/window motifs for Portfolio OS
- queue / workflow motifs for ReachInbox
- event / booking motifs for the Ticket Booking project

These are **editorial covers**, not fake UI screenshots.

### Accessible Image Lightbox

Screenshot galleries support:

- keyboard navigation
- previous/next navigation
- ESC to close
- focus restoration
- responsive image rendering
- lazy loading
- reduced-motion behavior

### Responsive Design

Designed and tested across a wide range of viewport sizes, including:

```text
320px
375px
390px
425px
768px
1024px
1280px
1440px
1920px
```

Mobile layouts are recomposed rather than treated as a simple scaled-down desktop layout.

---

## 🗂️ Project Archive

The portfolio currently maintains **12 verified projects**.

|   # | Project                           | Category                             | Visual Source                  |
| --: | --------------------------------- | ------------------------------------ | ------------------------------ |
|  01 | Portfolio OS                      | Full Stack / Desktop OS Simulation   | Real screenshots               |
|  02 | ReachInbox                        | Full Stack / Production Architecture | Real poster                    |
|  03 | MockMate AI                       | Full Stack / AI                      | Real screenshot                |
|  04 | Real-Time Ticket Booking Platform | Full Stack / Real-Time               | Editorial poster               |
|  05 | CampusHub                         | Full Stack / University Platform     | SVG editorial poster           |
|  06 | Deep Packet Inspection Engine     | Systems / Network Security           | SVG editorial poster           |
|  07 | CarrerOS                          | Full Stack / AI Career Platform      | Real screenshot                |
|  08 | HealthSathi AI / Vitaya           | Full Stack / AI / ML                 | Real screenshot                |
|  09 | Student Information System        | Full Stack / MERN                    | SVG editorial poster           |
|  10 | PlacementOS AI                    | Full Stack / AI                      | SVG editorial poster           |
|  11 | Routine Streak AI                 | Experimental                         | Repository-derived / editorial |
|  12 | Real-Time Messaging Platform      | Real-Time / Messaging                | Repository-derived / editorial |

> Project content is maintained as typed local data so the site can be built and deployed without a database.

---

## 🔬 Selected Technical Projects

### Portfolio OS

A Windows 11-inspired interactive portfolio environment.

**Stack:** React, Vite, Tailwind CSS, Framer Motion, Zustand, Node.js, Express.js, Gemini/Groq API

- 17 verified screenshots available in the source assets
- dedicated case-study presentation
- desktop/OS-inspired interaction model

### ReachInbox

A full-stack email job scheduler centered on production-style backend architecture.

**Stack:** React, TypeScript, Node.js, Express.js, PostgreSQL, Redis, BullMQ, Elasticsearch, Google OAuth, Slack, Docker, Ethereal SMTP

The case study intentionally uses the verified poster in the initial render rather than eagerly loading the large demo video.

### MockMate AI

An AI-powered mock interview platform.

**Stack:** React, Tailwind CSS, Node.js, Express.js, Gemini API, MongoDB, JWT

**Verified Live Demo:** `https://smart-mock-interview-prep.vercel.app/`

### Deep Packet Inspection Engine

A C++ network-analysis project focused on packet capture and protocol/flow-level inspection.

**Stack:** C++, PCAP, Ethernet, IPv4, TCP, TLS/SNI, five-tuple flow tracking, multithreading

---

## 🏗️ Architecture

The application follows a **content-first, component-driven Next.js architecture**.

```text
┌───────────────────────────────────────────────┐
│                   Next.js                     │
│                 App Router                    │
├───────────────────────────────────────────────┤
│                                               │
│  Server-rendered content                      │
│        │                                      │
│        ├── Homepage                           │
│        ├── Project Archive                    │
│        ├── Project Case Studies               │
│        └── SEO Metadata                       │
│                                               │
│  Interactive Client Islands                   │
│        │                                      │
│        ├── Navbar                             │
│        ├── Mobile Navigation                 │
│        ├── Magnetic Button                    │
│        ├── Custom Cursor                      │
│        ├── Reveal / Motion Components         │
│        ├── Project Filters                    │
│        └── Image Lightbox                     │
│                                               │
├───────────────────────────────────────────────┤
│                 Static Data                   │
│                                               │
│ personal.ts                                   │
│ projects.ts                                   │
│ skills.ts                                     │
│ timeline.ts                                   │
│ certifications.ts                             │
│                                               │
└───────────────────────────────────────────────┘
```

### Rendering strategy

The project favors:

- Server Components by default
- static generation for project pages
- small Client Component boundaries only where interaction requires them
- local project metadata instead of runtime API dependencies
- optimized local image assets

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── photos/
│   │   └── icons/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── GrainOverlay.tsx
│   │   │   └── ...
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── SelectedWork.tsx
│   │   │   ├── Expertise.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Stack.tsx
│   │   │   ├── Achievements.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectArchiveClient.tsx
│   │   │   ├── CaseStudyLayout.tsx
│   │   │   ├── CaseStudyHero.tsx
│   │   │   ├── CaseStudySidebar.tsx
│   │   │   ├── ScreenshotGallery.tsx
│   │   │   ├── ProjectNavigation.tsx
│   │   │   ├── RelatedProjects.tsx
│   │   │   └── ...
│   │   │
│   │   └── ui/
│   │       ├── MagneticButton.tsx
│   │       ├── HoverLink.tsx
│   │       ├── TextReveal.tsx
│   │       ├── RevealOnScroll.tsx
│   │       ├── ScrollProgress.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── ProjectPoster.tsx
│   │       ├── ProjectFilter.tsx
│   │       └── ImageLightbox.tsx
│   │
│   ├── data/
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── timeline.ts
│   │   └── certifications.ts
│   │
│   ├── hooks/
│   ├── lib/
│   └── types/
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.*
├── postcss.config.*
├── README.md
└── .gitignore
```

---

## 🧱 Design System

### Color palette

| Token              | Value     | Purpose                       |
| ------------------ | --------- | ----------------------------- |
| Primary Background | `#0A0A0A` | Main canvas                   |
| Secondary Surface  | `#111111` | Secondary areas               |
| Elevated Surface   | `#181818` | Interactive/elevated surfaces |
| Warm White         | `#F5F0EB` | Primary text                  |
| Muted Warm Gray    | `#8A8580` | Secondary text                |
| Copper             | `#C87941` | Primary accent                |
| Light Copper       | `#D4956B` | Accent emphasis               |
| Cream              | `#F2E8DE` | Editorial highlight           |

### Typography

| Layer     | Typeface         | Usage                               |
| --------- | ---------------- | ----------------------------------- |
| Display   | Instrument Serif | Hero and major editorial headlines  |
| Body      | Geist            | UI and readable body copy           |
| Technical | JetBrains Mono   | Metadata, labels, technical details |

### Motion principles

1. Use CSS transitions whenever CSS can do the job.
2. Use Motion for component-level interaction.
3. Avoid continuous JavaScript animation loops.
4. Respect `prefers-reduced-motion`.
5. Disable pointer-heavy effects on touch devices.
6. Prefer `transform` and `opacity` over layout-changing animation.

---

## ⚡ Performance Philosophy

Performance is treated as a design requirement, not an optimization phase added at the end.

### Principles

- Server Components by default
- Minimal Client Components
- Static project content
- No database
- No runtime GitHub dependency
- No WebGL
- No Three.js
- No particle engine
- Lazy-loaded non-critical images
- `next/image` for image optimization
- No eager loading of large demo videos
- Small animation primitives
- Lightweight SVG project posters
- No unnecessary UI framework

### Intentional trade-off

Some interactive reveal components require client-side hydration to support Motion-based behavior. This is an intentional trade-off: interaction is kept local to the components that actually need it rather than moving the whole application to the client.

---

## ♿ Accessibility

Accessibility is treated as part of the component design.

Implemented considerations include:

- keyboard navigation
- visible focus states
- semantic buttons and links
- accessible labels
- focus management inside the image lightbox
- focus restoration after closing modal UI
- ESC support for dialogs/lightbox
- reduced-motion support
- touch-friendly behavior
- no hover-only essential interactions
- responsive layout behavior

---

## 🔎 SEO

The portfolio includes a technical SEO foundation designed for a statically generated personal site.

### Included

- route-level metadata
- unique project metadata
- canonical URL configuration
- Open Graph metadata
- robots configuration
- sitemap support
- semantic page structure
- static project generation

The current site URL configuration is based on the existing Vercel portfolio domain and should be updated when a custom domain is connected.

---

## 🛠️ Tech Stack

### Core

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

### UI / Motion

- Motion for React
- CSS transitions / animations
- SVG

### Fonts

- Instrument Serif
- Geist
- JetBrains Mono

### Media

- Next.js Image Optimization
- Responsive image rendering
- Local SVG editorial posters

### Tooling

- npm
- ESLint
- TypeScript compiler
- Vercel
- Git / GitHub

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js installed
- npm installed
- Git installed

### 1. Clone the repository

```bash
git clone https://github.com/code-with-soham/soham-portfolio-2027.git
cd soham-portfolio-2027
```

> Replace the repository URL above if the final GitHub repository name differs.

### 2. Install dependencies

```bash
npm install
```

### 3. Start development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 4. Create a production build

```bash
npm run build
```

### 5. Run the production server

```bash
npm start
```

---

## 🧪 Validation Commands

Use the following before pushing changes:

```bash
# Type checking
npx tsc --noEmit

# Lint
npm run lint

# Production build
npm run build
```

A healthy deployment should pass all three checks.

---

## 📋 Content Architecture

Portfolio content is intentionally separated from UI components.

### Personal information

```text
src/data/personal.ts
```

Contains personal/brand information and site configuration.

### Projects

```text
src/data/projects.ts
```

Contains the typed portfolio project dataset.

### Skills

```text
src/data/skills.ts
```

Contains categorized technical skills.

### Timeline

```text
src/data/timeline.ts
```

Contains education and professional timeline content.

### Certifications

```text
src/data/certifications.ts
```

Contains verified certification / achievement information.

This separation makes the UI reusable while keeping portfolio content easy to maintain.

---

## ➕ Adding a New Project

To add a new project:

### 1. Add verified data

Update:

```text
src/data/projects.ts
```

Include only information that can be verified from the project repository, README, resume, or other source material.

### 2. Add visual assets

Prefer this order:

1. authentic project screenshot
2. authentic poster
3. project demo poster
4. deterministic SVG editorial poster

Avoid fabricated product screenshots.

### 3. Add links

Only add:

- GitHub
- Live Demo
- Demo video

when the URL is real and verified.

### 4. Validate

```bash
npx tsc --noEmit
npm run lint
npm run build
```

The project case-study route is generated from the project dataset.

---

## 🌐 Deployment

The project is designed for Vercel deployment.

### GitHub → Vercel workflow

```text
Local Project
    ↓
Git
    ↓
GitHub
    ↓
Vercel
    ↓
Production Deployment
```

### Deploy manually

1. Create a GitHub repository.
2. Push the project to `main`.
3. Import the repository into Vercel.
4. Select **Next.js** when prompted.
5. Keep the project root as the repository root.
6. Deploy.

Vercel can then automatically create new deployments whenever changes are pushed to the configured branch.

---

## 🔐 Environment Variables

The portfolio is intentionally designed to require **no database and no runtime secret** for its core experience.

Do not commit private credentials such as:

```text
.env
.env.local
API keys
OAuth secrets
GitHub tokens
Gemini keys
```

If a future integration requires secrets, configure them through the deployment platform rather than committing them to Git.

---

## 🔗 Public Profiles

- **GitHub:** https://github.com/code-with-soham
- **LinkedIn:** https://linkedin.com/in/soham-kundu
- **Email:** sohamkundu84@gmail.com

---

## 🧭 Roadmap

The core portfolio experience is already implemented. Future improvements should remain aligned with the performance-first philosophy.

### Possible future iterations

- custom domain configuration
- stronger runtime performance measurement with real Lighthouse data
- additional verified project media
- richer case-study screenshots as authentic assets become available
- optional project demo-video loading after explicit user interaction
- more granular build-time project metadata generation
- incremental visual refinements based on real user feedback

### Intentionally out of scope

- database-backed portfolio content
- heavyweight CMS
- WebGL-first homepage
- large particle effects
- unnecessary authentication
- runtime GitHub dependency for core rendering

---

## 📈 Engineering Principles

### 1. Content is source-of-truth data

Portfolio text does not belong scattered across JSX files. Verified content is stored in typed data modules.

### 2. Interactions should have purpose

A motion effect should improve orientation, feedback, hierarchy, or delight. If it does none of those things, it should probably not exist.

### 3. Performance is part of visual design

An effect that looks impressive but creates lag is a design failure for this project.

### 4. Real assets beat fake assets

Authentic project screenshots are preferred over generated mock UI.

### 5. Graceful degradation matters

The portfolio should remain usable when:

- JavaScript-heavy interaction is unavailable
- the user prefers reduced motion
- the user is on a touch device
- optional media is not available

### 6. Technical storytelling matters

The project pages should communicate the engineering decisions behind the work rather than just showing screenshots.

---

## 🧑‍💻 About the Author

**Soham Kundu** is a Software Engineer and Computer Science & Engineering student focused on full-stack web development, frontend engineering, real-time applications, AI/GenAI experimentation, and systems-oriented development.

Current technical areas represented across the portfolio include:

- C++
- JavaScript / TypeScript
- React
- Next.js
- Tailwind CSS
- Node.js
- Express.js
- MongoDB
- MySQL
- PostgreSQL
- Redis
- Socket.IO
- Docker
- Git / GitHub
- Gemini API
- Groq / LLM-oriented workflows
- Network analysis / DPI concepts
- DSA, OOP, DBMS, OS, Computer Networks

For the authoritative project-specific technology list, see `src/data/projects.ts` and the corresponding case studies.

---

## 📜 License

This repository represents a personal portfolio project.

Unless a separate license is added, the project should be treated as **personal source code** and not assumed to grant broad rights to reuse the complete design, content, branding, photography, or project assets.

Third-party libraries, fonts, and assets remain subject to their respective licenses.

---

## ⭐ A Note on the Design Philosophy

This portfolio intentionally avoids the idea that a developer portfolio needs to look like a dashboard full of glowing cards.

Instead, it treats the site as a **digital editorial object**:

```text
Typography
    +
Structure
    +
Technical Detail
    +
Real Work
    +
Small Interactions
    +
Fast Rendering
    =
A Portfolio With Character
```

The objective is not to demonstrate every frontend technology available.

The objective is to make the visitor remember:

> **the work, the engineering thinking, and the person behind it.**

---

<p align="center">
  Built with Next.js · TypeScript · React · Tailwind CSS · Motion
</p>

<p align="center">
  <strong>Built deliberately. Engineered for speed. Designed to be remembered.</strong>
</p>
