# Aaron Serrano — Developer Portfolio

![Vercel Deployment Status](https://deploy-badge.vercel.app/api/eyrons-projects-77a0edda/portfolio)
![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.2-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-blueviolet?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A modern, high-performance personal portfolio and professional showcase for **Aaron Serrano** — Technology Leader, Strategist, and Full-Stack Developer.

> *"A strategist in the shell of a coder."*

---

## 🌟 Key Features

- **Dynamic Dark / Light Mode**: Seamless theme switching with persistent local state and zero hydration flicker.
- **Fluid Micro-Interactions**: Framer Motion animations across route transitions, typography reveals, timeline icons, and navigation menus.
- **Professional Timeline**: Comprehensive breakdown of technical management, software architecture experience, education, and technical competencies.
- **Project Showcase**: Direct integration and edge-level redirection to live projects (e.g., [Retirement Simulator](https://retirementjourney.vercel.app)).
- **Custom Brandmark**: Signature Delta Apex vector favicon and responsive UI assets.
- **SEO & Performance Optimized**: Pre-rendered static pages with accessible metadata, Open Graph tags, and instant page loads.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [Google Fonts (Montserrat)](https://fonts.google.com/specimen/Montserrat)
- **Deployment**: [Vercel](https://vercel.com)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18.x` or higher
- npm `9.x` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ey-ron/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
├── public/               # Static assets & SVG favicon
│   ├── favicon.svg       # Custom Delta Apex favicon
│   ├── favicon.ico       # Binary multi-resolution ICO
│   └── images/           # Profile imagery & SVG icons
├── src/
│   ├── components/
│   │   └── portfolio/    # Portfolio UI components (Navbar, Footer, Timeline, etc.)
│   ├── pages/
│   │   ├── _app.js       # App entry & global providers
│   │   ├── _document.js  # HTML document shell & theme scripts
│   │   ├── 404.js        # Custom 404 page
│   │   ├── about.js      # Professional journey & biography
│   │   ├── dashboard.js  # Multi-layer redirect fallback
│   │   └── index.js      # Hero & home page
│   └── styles/
│       └── globals.css   # Core Tailwind directives & scrollbar utilities
├── next.config.js        # Next.js configuration & edge redirects
├── tailwind.config.js    # Tailwind theme & color token config
└── vercel.json           # Vercel deployment & region settings
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE.md).
