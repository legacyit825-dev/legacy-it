# Legacy IT — Official Website & System Documentation

The official responsive web application for **Legacy IT**, a digital technology partner specializing in web development, mobile application engineering, graphic design, video post-production, and digital marketing.

> **Live Production URL**: [https://derick231.github.io/legacy-it/](https://derick231.github.io/legacy-it/)  
> **Repository**: [https://github.com/derick231/legacy-it](https://github.com/derick231/legacy-it)

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Tech Stack & Dependencies ("What is Used for What")](#tech-stack--dependencies-what-is-used-for-what)
3. [Project Directory Structure](#project-directory-structure)
4. [Core Subsystems](#core-subsystems)
   - [1. Contact Security & reCAPTCHA Gate](#1-contact-security--recaptcha-gate)
   - [2. Internationalization (i18n) Engine](#2-internationalization-i18n-engine)
   - [3. Adaptive Video Showcase Subsystem](#3-adaptive-video-showcase-subsystem)
   - [4. Viewport Animation Subsystem](#4-viewport-animation-subsystem)
   - [5. Client-Side Routing & Deep Linking](#5-client-side-routing--deep-linking)
5. [Component Reference Guide](#component-reference-guide)
6. [Pages & Routing Catalog](#pages--routing-catalog)
7. [Environment Variables & Configuration](#environment-variables--configuration)
8. [Getting Started & Local Development](#getting-started--local-development)
9. [Build & Deployment Pipeline](#build--deployment-pipeline)

---

## Architecture Overview

Legacy IT is architected as a modern Single Page Application (SPA) utilizing **React 19**, **Vite 7**, and **Tailwind CSS v4**. It features high-contrast dark aesthetic styling (`#070913`, `#0c1020`, cyan `#22d3ee`), zero-jank hardware-accelerated animations via native browser `IntersectionObserver`, and comprehensive bot protection across all inbound communication channels.

```
                           +----------------------------------------+
                           |           Index.html / Entry           |
                           +-------------------+--------------------+
                                               |
                                    +----------v----------+
                                    |     HashRouter      |
                                    |     (Deep Link)     |
                                    +----------+----------+
                                               |
                               +---------------v---------------+
                               |    ContactSecurityProvider    |
                               |    (Global reCAPTCHA Gate)    |
                               +---------------+---------------+
                                               |
                                    +----------v----------+
                                    |     ScrollToTop     |
                                    +----------+----------+
                                               |
                                    +----------v----------+
                                    |       MyRoute       |
                                    +----+-----+-----+----+
                                         |     |     |
              +--------------------------+     |     +-------------------------+
              |                                |                               |
     +--------v--------+              +--------v--------+             +--------v--------+
     |   Home Page     |              |  Service Pages  |             |  Contact Page   |
     | Hero, Services, |              | 5 Comprehensive |             | Direct Channels |
     | Video, Why IT   |              | Dedicated Hubs  |             | & EmailJS Form  |
     +-----------------+              +-----------------+             +-----------------+
```

---

## Tech Stack & Dependencies ("What is Used for What")

| Dependency / Tool | Version | Purpose & Usage in System |
| :--- | :--- | :--- |
| **[React](https://react.dev/)** | `^19.2.0` | Core UI framework. Utilizes React 19 functional components, hooks (`useState`, `useRef`, `useCallback`, `useContext`), and the Context API. |
| **[Vite](https://vite.dev/)** | `^7.2.4` | Development server and production build orchestrator. Provides instant Hot Module Replacement (HMR) and optimized Rollup tree-shaking. |
| **[Tailwind CSS](https://tailwindcss.com/)** | `^4.1.18` | Next-generation utility-first styling engine loaded via `@tailwindcss/vite` and `@import "tailwindcss"`. Powers responsive grids, flex layouts, typography, and dark-theme colors without bloated stylesheets. |
| **[React Router DOM](https://reactrouter.com/)** | `^7.10.1` | Client-side routing engine using `HashRouter` (`/#/...`). Selected to ensure 100% route stability across static hosts (such as GitHub Pages) without needing server rewrite rules. |
| **[i18next](https://www.i18next.com/)** & **[react-i18next](https://react.i18next.com/)** | `^25.7.3` / `^16.5.0` | Enterprise internationalization framework managing live switching between English, Spanish, and Portuguese, persistent user preferences, and structured JSON locale resources. |
| **[react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha)** | `^3.1.0` | Google reCAPTCHA v2 Checkbox component. Embedded in a global security modal to verify users before executing WhatsApp chats, direct Gmail compose redirects, or sending contact form inquiries. |
| **[@emailjs/browser](https://www.emailjs.com/)** | `^4.4.1` | Client-side email delivery service. Dispatches structured inquiry emails directly from the contact form to the company mailbox (`legacyit825@gmail.com`) without a dedicated backend server. |
| **[react-icons](https://react-icons.github.io/react-icons/)** | `^5.5.0` | Iconography suite: `react-icons/lu` (Lucide) for clean technical UI strokes, `react-icons/fa` & `fa6` (FontAwesome) for social brand logos, and `react-icons/hi` (Heroicons) for interface accents. |
| **[hamburger-react](https://hamburger-react.netlify.app/)** | `^2.5.2` | Lightweight animated SVG hamburger button powering mobile navigation drawer toggles. |
| **[gh-pages](https://www.npmjs.com/package/gh-pages)** | `^6.3.0` | Deployment automation package. Builds the Vite production bundle and deploys the `dist/` directory to the `gh-pages` branch on GitHub. |

---

## Project Directory Structure

```text
legacy-it/
├── public/                           # Static assets served as-is at root
│   ├── favicon.ico                   # Browser favicon
│   └── robots.txt                    # Search crawler indexation instructions
├── src/
│   ├── assets/                       # High-resolution graphics and media assets
│   │   ├── logo.png                  # Main company brand logo
│   │   ├── logo-cropped.png          # Cropped variant for compact headers & footers
│   │   ├── english translation.mp4   # Master showcase video (English audio/subtitles)
│   │   ├── new translation.mp4       # Showcase video (Spanish audio/subtitles)
│   │   └── Portugese translation.mp4 # Showcase video (Portuguese audio/subtitles)
│   ├── components/                   # Modular, reusable UI components
│   │   ├── AboutContent.jsx          # Comprehensive about profile, values, & timeline
│   │   ├── Background.jsx            # "Why Choose Legacy IT" 4-card differentiator grid
│   │   ├── CompanyVideo.jsx          # Multi-language responsive video player
│   │   ├── Contact_form.jsx          # Interactive contact form & direct reach-out cards
│   │   ├── Footer.jsx                # Multi-column site footer & legal directory
│   │   ├── Header.jsx                # Sticky responsive navbar with language switcher
│   │   ├── Hero.jsx                  # Homepage landing hero with 3D isometric SVG
│   │   ├── ScrollToTop.jsx           # Route transition window scroll reset
│   │   ├── ServiceDetailLayout.jsx   # Master reusable layout for individual service pages
│   │   └── ServiceSection.jsx        # Homepage catalog grid of 5 primary services
│   ├── context/                      # Global React context providers
│   │   └── ContactSecurityContext.jsx# Global reCAPTCHA security gate and modal provider
│   ├── hooks/                        # Custom reusable React hooks
│   │   └── useScrollAnimation.js     # IntersectionObserver viewport animation hook
│   ├── locales/                      # Localization JSON dictionaries
│   │   ├── en.json                   # English translation strings
│   │   ├── es.json                   # Spanish translation strings
│   │   └── pr.json                   # Portuguese translation strings
│   ├── pages/                        # Page-level route views
│   │   ├── About.jsx                 # About Us page view
│   │   ├── Contact.jsx               # Contact Us page view
│   │   ├── Home.jsx                  # Main landing page view
│   │   ├── Services.jsx              # Services directory view
│   │   ├── WebDevelopment.jsx        # Web development detail view
│   │   ├── MobileDevelopment.jsx     # Mobile app development detail view
│   │   ├── GraphicDesigning.jsx      # Graphic design & branding detail view
│   │   ├── VideoEditing.jsx          # Video editing & post-production detail view
│   │   ├── DigitalMarketing.jsx      # Digital marketing & SEO detail view
│   │   ├── LegalPolicy.jsx           # Privacy policy view
│   │   └── LegalTerms.jsx            # Terms & conditions view
│   ├── utils/                        # Application configuration utilities
│   │   └── i18n.js                   # i18next initialization and resource mapping
│   ├── App.jsx                       # Root application component wrapper
│   ├── index.css                     # Global Tailwind configuration & animation utilities
│   ├── main.jsx                      # DOM mount point & deep-linking hash redirector
│   └── MyRoute.jsx                   # Central routing definition
├── .env                              # Local environment variables
├── index.html                        # HTML5 document head, SEO tags, & viewport configs
├── package.json                      # Project dependencies, metadata, and scripts
└── vite.config.js                    # Vite configuration with Tailwind CSS plugin
```

---

## Core Subsystems

### 1. Contact Security & reCAPTCHA Gate
*File: [`src/context/ContactSecurityContext.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/context/ContactSecurityContext.jsx)*

To prevent automated bots and web scrapers from spamming company communication channels, the entire site is wrapped in the `ContactSecurityProvider`.

- **Protected Channels**:
  - Direct **WhatsApp** links (`https://wa.me/9779702016450`).
  - Direct **Gmail Compose** links (`https://mail.google.com/mail/?view=cm&fs=1&to=legacyit825@gmail.com`).
  - Standard `mailto:` fallback links.
  - In-page **EmailJS Inquiry Form** submissions.
- **How it Works**:
  1. Any button or link that initiates communication calls `openContactGate(targetUrl, options)` from `useContactGate()`.
  2. A centered security modal opens presenting Google reCAPTCHA v2.
  3. Once the user successfully completes the challenge, the modal marks the action as verified, caches the token, and automatically redirects or triggers the intended action.

---

### 2. Internationalization (i18n) Engine
*Files: [`src/utils/i18n.js`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/utils/i18n.js), [`src/locales/*.json`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/locales/)*

The application delivers native multilingual experiences across three languages:
- **English (`en`)** — Default / Fallback
- **Spanish (`es`)**
- **Portuguese (`pr`)**

- **Persistence**: Selected languages are stored in `localStorage` under `legacy_it_lang` and automatically restored upon subsequent visits.
- **Translation Hook**: Components consume `const { t, i18n } = useTranslation()`, referencing organized nested keys (e.g. `t('serviceDetails.webDevelopment.heroHeading')`).

---

### 3. Adaptive Video Showcase Subsystem
*File: [`src/components/CompanyVideo.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/CompanyVideo.jsx)*

The company video showcase automatically adapts its video and audio track to match the user's active language:
- English (`en`) $\rightarrow$ `english translation.mp4`
- Spanish (`es`) $\rightarrow$ `new translation.mp4`
- Portuguese (`pr` / `pt`) $\rightarrow$ `Portugese translation.mp4`

- **Continuous Playback**: When switching languages while the video is playing, the component captures `videoRef.current.currentTime`, switches the video source, and resumes playback from that exact second.
- **Autoplay Compliance**: Automatically starts muted to satisfy modern browser autoplay policies.
- **Lockdown / Inline Mode**: Disables intrusive fullscreen expanders and enforces smooth, high-fidelity inline playback.

---

### 4. Viewport Animation Subsystem
*Files: [`src/hooks/useScrollAnimation.js`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/hooks/useScrollAnimation.js), [`src/index.css`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/index.css)*

Scroll animations are driven by a custom React hook:
- `useScrollAnimation(threshold, rootMargin)` uses the native browser `IntersectionObserver`.
- Once an element enters the viewport, it triggers `inView = true` and immediately disconnects (`observer.unobserve(el)`), ensuring animations run **only once** without persistent scroll lag.
- **CSS Animation Utilities**:
  - `.anim-hidden`: Base state (`opacity: 0`).
  - `.anim-fade-up`: Smooth translation from $+48\text{px}$ to $0\text{px}$.
  - `.anim-fade-left` / `.anim-fade-right`: Horizontal entrance transitions.
  - `.anim-delay-100` to `.anim-delay-600`: Staggered timing delays for grid cards.

---

### 5. Client-Side Routing & Deep Linking
*Files: [`src/main.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/main.jsx), [`src/MyRoute.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/MyRoute.jsx)*

- **HashRouter Implementation**: Uses `HashRouter` (`/#/services/web-development`) so URLs can be deep-linked or refreshed on static hosting (like GitHub Pages) without triggering HTTP 404 errors.
- **Automatic Path Normalization**: `main.jsx` detects direct non-hash access (e.g., someone visiting `/legacy-it/services`) and automatically converts it to the proper hash route (`/legacy-it/#/services`).

---

## Component Reference Guide

### `Header.jsx`
- **Location**: [`src/components/Header.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/Header.jsx)
- **Role**: Top-level sticky navigation bar.
- **Features**:
  - Brand logo with home navigation.
  - Desktop menu with active route indicators.
  - Interactive multi-language dropdown with outside-click detection.
  - Mobile slide-out drawer powered by `hamburger-react`.
  - Direct "Get in Touch" primary call-to-action button.

### `Hero.jsx`
- **Location**: [`src/components/Hero.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/Hero.jsx)
- **Role**: High-impact above-the-fold landing section.
- **Features**:
  - Gradient typography headlines.
  - Dual action buttons (Explore Services $\rightarrow$ Contact Us).
  - Central 3D isometric SVG geometry illustrating network infrastructure, connectivity nodes, and data flow.

### `ServiceSection.jsx`
- **Location**: [`src/components/ServiceSection.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/ServiceSection.jsx)
- **Role**: Homepage services showcase.
- **Features**:
  - 5 interactive cards detailing each primary service area.
  - Technical icons and concise bullet capabilities.
  - Direct links to dedicated service subpages.

### `CompanyVideo.jsx`
- **Location**: [`src/components/CompanyVideo.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/CompanyVideo.jsx)
- **Role**: Multilingual brand video player.
- **Features**:
  - Automatic source switching based on active language.
  - Custom branded playback controls (Play, Pause, Progress Bar, Mute/Unmute).
  - Hover-activated control overlay with auto-fade.

### `Background.jsx` ("Why Choose Us")
- **Location**: [`src/components/Background.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/Background.jsx)
- **Role**: Core competitive differentiators.
- **Features**:
  - 4-pillar grid: Customized Solutions, Modern Technology, User-Centered Approach, Long-Term Partnership.
  - Monospace index badges (`01`–`04`) and hover ambient glow effects.

### `AboutContent.jsx`
- **Location**: [`src/components/AboutContent.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/AboutContent.jsx)
- **Role**: Company story, mission, and culture.
- **Features**:
  - Company narrative and founding principles.
  - Video showcase player integration.
  - Core values grid (Collaboration, Adaptability, Reliability, Growth).
  - Dedicated Mission and Vision specification cards.

### `ServiceDetailLayout.jsx`
- **Location**: [`src/components/ServiceDetailLayout.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/ServiceDetailLayout.jsx)
- **Role**: Unified master template for all 5 individual service pages.
- **Sections**:
  1. **Hero**: Headline, summary, and action links.
  2. **Service Overview**: In-depth narrative paired with an interactive visual simulation widget.
  3. **Deliverables & Specifications**: Structured grid of 6–8 tangible project outcomes.
  4. **Why Choose Legacy IT**: Service-specific technical advantages.
  5. **4-Stage Working Process**: Visual timeline (Discover $\rightarrow$ Plan & Architect $\rightarrow$ Develop & Polish $\rightarrow$ Deploy & Deliver).
  6. **Frequently Asked Questions**: Accordion with expandable answers.
  7. **Call to Action**: Final project inquiry banner.

### `Contact_form.jsx`
- **Location**: [`src/components/Contact_form.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/Contact_form.jsx)
- **Role**: Primary communication hub.
- **Features**:
  - Form validation for Name, Email, Phone, Service Category, and Message.
  - Direct EmailJS dispatching with inline status feedback (success/error alerts).
  - Embedded Google reCAPTCHA v2 checkbox.
  - Direct contact cards (WhatsApp, direct Gmail compose, office address, and social links).

### `Footer.jsx`
- **Location**: [`src/components/Footer.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/Footer.jsx)
- **Role**: Global footer across all views.
- **Features**:
  - Company description and brand logo.
  - Quick links directory.
  - Full catalog of service links.
  - Direct contact links guarded by `useContactGate`.
  - Social media handles (Facebook, Instagram, X/Twitter, LinkedIn, GitHub).
  - Legal links (Privacy Policy & Terms).

### `ScrollToTop.jsx`
- **Location**: [`src/components/ScrollToTop.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/components/ScrollToTop.jsx)
- **Role**: Automatically scrolls the browser window to $(0, 0)$ whenever the route path changes.

---

## Pages & Routing Catalog

| Route URL | Component | Purpose & Contents |
| :--- | :--- | :--- |
| `/#/` | [`Home.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/Home.jsx) | Main landing page: Hero, ServiceSection, CompanyVideo, Background, and Contact CTA. |
| `/#/about` | [`About.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/About.jsx) | About Legacy IT: narrative, company culture, core values, mission, and video. |
| `/#/services` | [`Services.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/Services.jsx) | Comprehensive service catalog view displaying all capabilities and process overview. |
| `/#/services/web-development` | [`WebDevelopment.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/WebDevelopment.jsx) | Web development: custom web apps, e-commerce, API integration, interactive code/architecture simulator. |
| `/#/services/mobile-app-development` | [`MobileDevelopment.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/MobileDevelopment.jsx) | Mobile development: iOS/Android native & cross-platform apps, interactive device simulator. |
| `/#/services/graphic-designing` | [`GraphicDesigning.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/GraphicDesigning.jsx) | Graphic design: brand identity systems, marketing collateral, vector graphic showcase. |
| `/#/services/video-editing` | [`VideoEditing.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/VideoEditing.jsx) | Video editing: short-form Reels/Shorts/TikTok, long-form YouTube, color grading, interactive NLE timeline monitor. |
| `/#/services/digital-marketing` | [`DigitalMarketing.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/DigitalMarketing.jsx) | Digital marketing: SEO, Google & Meta Ads, interactive analytics dashboard simulator. |
| `/#/contact` | [`Contact.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/Contact.jsx) | Contact page: interactive inquiry form, reCAPTCHA protection, direct WhatsApp & Gmail links. |
| `/#/privacy-policy` | [`LegalPolicy.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/LegalPolicy.jsx) | Official Privacy Policy: data protection policies, cookie usage, user rights. |
| `/#/terms-and-conditions` | [`LegalTerms.jsx`](file:///c:/Users/DESKTOP/Documents/Company_site/legacy-it/src/pages/LegalTerms.jsx) | Official Terms & Conditions: service agreements, payment terms, IP ownership, liabilities. |
| `*` | Fallback | Unmatched routes automatically redirect to `/#/`. |

---

## Environment Variables & Configuration

Configuration is managed via environment variables defined in `.env`:

```env
# Google reCAPTCHA v2 (Client Site Key)
# Obtain your site key from: https://www.google.com/recaptcha/admin
VITE_RECAPTCHA_SITE_KEY=6LcwXiQuAAAAAKcaUyadQfMu2nyzfgHDFI6YfiMc

# Company Inbound Email (Destination for inquiries)
VITE_CONTACT_EMAIL=legacyit825@gmail.com

# EmailJS Service Credentials (Optional overrides; defaults configured in Contact_form.jsx)
VITE_EMAILJS_SERVICE_ID=service_k483nh5
VITE_EMAILJS_TEMPLATE_ID=template_jy8km0q
VITE_EMAILJS_PUBLIC_KEY=ENkb0BuA3FRhAL9Or
```

> [!NOTE]
> All environment variables in Vite must be prefixed with `VITE_` to be exposed to client-side code via `import.meta.env`.

---

## Getting Started & Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm`)

### 2. Installation
Clone the repository and install dependencies:

```bash
cd legacy-it
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
The local server will start at `http://localhost:5173/` with hot module replacement enabled.

### 4. Code Linting
```bash
npm run lint
```

---

## Build & Deployment Pipeline

### 1. Production Build
To compile and bundle the application for production:

```bash
npm run build
```

This executes `vite build`, producing minified HTML, CSS, JavaScript chunks, and optimized media assets inside the `dist/` directory.

### 2. Local Production Preview
To preview the production bundle locally before deploying:

```bash
npm run preview
```


