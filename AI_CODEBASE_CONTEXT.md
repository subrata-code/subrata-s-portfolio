# Codebase Context & AI Model Orientation Knowledge Base

> **Purpose**: This document serves as a comprehensive, structured knowledge base for LLM/AI coding agents operating on this repository. It outlines project setup, architecture, tech stack, data sources, components, routing, and contribution patterns so any incoming AI model can quickly understand, navigate, and maintain the codebase.

---

## 1. Executive Summary & Core Intent

- **Repository**: `subrata-s-portfolio`
- **Owner**: Subrata Bag (3rd-Year Computer Science & Engineering Student, CGPA 7.86)
- **Primary Goal**: Personal Portfolio Website showcasing Full-Stack Web Development projects (React, Node.js, Next.js, Python), research background, education, skills, and contact pathways.
- **Application Type**: Single-Page Application (SPA) with smooth internal hash-based scroll navigation.

---

## 2. Technical Stack & Dependencies

| Category | Technology / Library | Version Range / Usage |
| :--- | :--- | :--- |
| **Framework / Environment** | React + Vite | React `^19.1.0`, Vite `^6.3.5`, `type: module` |
| **Routing** | `react-router-dom` | `^7.6.0` (Client-side routing setup with Single Page fallback) |
| **Styling & Design System** | Tailwind CSS v4 + DaisyUI | Tailwind `@tailwindcss/vite` (`^4.1.5`), DaisyUI (`^5.0.35`) |
| **Animations** | Framer Motion | `framer-motion` (`^12.10.5`) for page animations & smooth scroll |
| **Icons & Micro UI** | Lucide React + React Icons | `lucide-react` (`^0.508.0`), `react-icons` (`^5.5.0`) |
| **Code Formatting & Quality** | ESLint | ESLint v9 (`eslint.config.js`) |

---

## 3. Directory & File Architecture

```
subrata-s-portfolio/
├── index.html                  # HTML entry point (title, metadata, favicon link)
├── package.json                # Project dependencies, scripts & metadata
├── vite.config.js              # Vite configuration (React & Tailwind integration)
├── eslint.config.js            # Linter rules and setup
├── public/                     # Static public assets (e.g. favicon_sb.png, resume.pdf)
└── src/
    ├── main.jsx                # React app mounting root (BrowserRouter wrapper)
    ├── App.jsx                 # Top-level application router & layout wrapper
    ├── index.css               # Global styling directives (@import tailwindcss)
    ├── constants/
    │   └── portfolioData.js    # Single source of truth for personal data (profile, education, experience, skills)
    ├── pages/
    │   └── Home.jsx            # Main container page rendering all portfolio sections linearly
    ├── assets/                 # Image assets imported inside React components
    └── components/             # Reusable UI Section Components
        ├── Navbar.jsx          # Top navigation bar with smooth scroll trigger & mobile toggle
        ├── Hero.jsx            # Hero section with headline, CTA buttons, and quick stats
        ├── stats.jsx           # Animated numbers / key highlights bar
        ├── AboutSection.jsx    # About me, personal summary, credentials grid, contact highlights
        ├── education.jsx       # Academic background & qualifications display
        ├── TeachingSection.jsx # Teaching & work history timeline / experience section
        ├── projectsection.jsx  # Categorized portfolio projects with modal details & filter tabs
        ├── contact.jsx         # Interactive contact form & direct email/social links
        └── Footer.jsx          # Footer section with back-to-top & copyright links
```

---

## 4. Key Data Models & State Architecture

### Data Layer (`src/constants/portfolioData.js`)
All static text and profile information is decoupled from components and stored in `portfolioData.js`:
- `profileData.name`: `"Subrata Bag"`
- `profileData.contact`: Object containing `address`, `phone`, `email`.
- `profileData.currentPosition`: Title / Tagline string.
- `profileData.summary`: Paragraph overview.
- `profileData.skills`: Array of technical skill strings (e.g., `"React.js"`, `"Node.js"`, `"MongoDB"`).
- `profileData.workHistory`: Array of work/research roles.
- `profileData.education`: Array of academic degrees.

### Section Projects Data (`src/components/projectsection.jsx`)
Local `projects` array defines featured projects:
```js
{
  id: 101,
  title: "MediCon...",
  category: "Fullstack Web", // Supported filters: "All", "Fullstack Web", "Python", "Next Js"
  description: "...",
  image: DImg,
  github: "https://...",
  live: "https://..."
}
```

---

## 5. UI Navigation & Animation Patterns

1. **Smooth Scrolling**: Implemented in `Navbar.jsx` using `framer-motion`'s `animate` function. Offset calculations (`window.scrollY - 70`) account for fixed navbar height.
2. **Animation System**: Standardized `fadeInUp` variant across components:
   ```js
   const fadeInUp = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
   };
   ```
3. **Modal Pattern**: `projectsection.jsx` uses `AnimatePresence` to render side-drawer/modal details for selected projects.

- **Contact Section Form**: Uses Web3Forms API (`https://api.web3forms.com/submit`) with loading states (`isSubmitting`), success banners (`AnimatePresence`), and smooth fallback to direct mailto links if an access key is pending. Access key can be set in `.env` as `VITE_WEB3FORMS_ACCESS_KEY` or `profileData.contact.web3formsAccessKey`.

- **Development Server**: `npm run dev` (Starts Vite on default port `5173` or similar)
- **Production Build**: `npm run build` (Outputs bundle to `/dist`)
- **Preview Build**: `npm run preview`
- **Lint Check**: `npm run lint`

---

## 7. Guidelines for Future AI Assistants

1. **Adding New Projects**: Edit `src/components/projectsection.jsx` in the `projects` array or migrate project data into `src/constants/portfolioData.js`.
2. **Modifying Personal Info**: Always update `src/constants/portfolioData.js` rather than hardcoding personal details into individual JSX files.
3. **Styling Rules**: Maintain Tailwind CSS v4 class utility conventions and DaisyUI component classes (`btn`, `btn-primary`, etc.). Avoid adding raw CSS unless updating `index.css`.
4. **Icons**: Use icons from `lucide-react` or `react-icons` for consistent visual language across sections.
