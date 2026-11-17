# Legacy IT - Official Website

The official responsive web application for **Legacy IT**, a digital solutions and technology partner specializing in web development, mobile applications, graphic design, video editing, and digital marketing.

---

## Key Features

- **Modern Architecture**: Built with React 19, Tailwind CSS v4, and Vite for blazing-fast performance.
- **Multilingual Support**: Fully localized in English, Spanish (Español), and Portuguese (Português) via `i18next` and `react-i18next`.
- **Adaptive Video Showcase**: Seamless video presentation that automatically adapts to the user's active language with synchronized continuous playback.
- **reCAPTCHA Protection**: Google reCAPTCHA v2 verification protecting every direct contact method (WhatsApp, Gmail, and contact form) against automated spam.
- **Responsive Cyberpunk / Titanium Design**: Fully responsive across mobile, tablet, and desktop devices with dark mode styling (`#070913`, `#0c1020`, cyan `#22d3ee`).

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/) (HashRouter for GitHub Pages compatibility)
- **Internationalization**: [i18next](https://www.i18next.com/)
- **Icons**: [React Icons (Lu & Fa6)](https://react-icons.github.io/react-icons/)
- **Security Check**: [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha)

---

## Project Structure

```text
legacy-it/
├── public/                 # Static assets (favicons, public images)
├── src/
│   ├── assets/             # Brand graphics and language-specific video clips
│   ├── components/         # Reusable UI components (Header, Footer, Hero, Video, etc.)
│   ├── context/            # Global security gate & context providers
│   ├── hooks/              # Custom React hooks (scroll animations, viewport tracking)
│   ├── locales/            # Localization dictionaries (en, es, pr)
│   ├── pages/              # Route pages (Home, About, Services, Legal)
│   ├── utils/              # i18n configuration and utilities
│   ├── App.jsx             # Root application component
│   ├── index.css           # Global Tailwind utilities and keyframes
│   ├── main.jsx            # Entry point
│   └── MyRoute.jsx         # Routing configuration
├── index.html              # HTML entry point with complete SEO & Open Graph meta
├── package.json            # Project manifest and scripts
└── vite.config.js          # Vite build configuration
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
cd legacy-it
npm install
```

### Environment Variables

Create a `.env` file in the `legacy-it` root:

```env
VITE_RECAPTCHA_SITE_KEY=your_google_recaptcha_site_key
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The output will be bundled in the `dist/` directory ready for deployment.
