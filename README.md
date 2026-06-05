# Parvez Shaik Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-parvezshaik.me-5f71a6?style=for-the-badge)](https://parvezshaik.me)

A professional, editorial-style portfolio website for Parvez Shaik, focused on backend engineering, SRE, cloud reliability, DevOps automation, and AI retrieval systems.

## Live Demo

View the deployed portfolio: [https://parvezshaik.me](https://parvezshaik.me)

## Preview

This portfolio is designed around a minimalist, high-signal presentation:

- Large editorial hero section with a pencil portrait
- Light and dark theme toggle with persisted preference
- Resume-backed engineering impact metrics
- Featured project case studies
- Professional experience timeline
- Technical toolkit grouped by engineering domain
- Contact section with direct profile links

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment target:** Vercel

## Portfolio Highlights

The content is tailored around measurable engineering outcomes from Parvez's background:

- Improved deployment reliability to **99.7%**
- Reduced PostgreSQL read latency from **420 ms to 295 ms**
- Saved **35 minutes per sprint** by moving release checks earlier
- Reduced AI content review effort by **23%**
- Built AI retrieval and distributed systems projects including Agentive Med and a distributed vector database

## Featured Projects

### Agentive Med

A healthcare-focused AI assistant designed around guarded orchestration. It uses triage routing, domain-specific agents, PubMed-backed retrieval, and a verifier guardrail to reduce unsupported LLM responses in a high-stakes care context.

### Distributed Vector Database for AI Applications

A retrieval system built for large embedding workloads using distributed node communication, RocksDB-backed storage, GraphRAG, and LlamaIndex. The project targets low-latency semantic retrieval at scale.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

## Project Structure

```text
app/
  globals.css      Global styles and theme variables
  layout.tsx       Root metadata, font setup, and theme preloading
  page.tsx         Main portfolio page
components/
  motion.tsx       Reveal animation helpers
  nav.tsx          Navigation bar
  theme-toggle.tsx Light/dark theme switcher
lib/
  profile.ts       Portfolio content and profile data
  utils.ts         Utility helpers
public/
  Parvez_Shaik_Resume_SDE.pdf
  parvez-pencil-portrait.png
```

## Theme System

The site supports light and dark themes using CSS variables and a persisted `localStorage` preference. If no user preference is stored, the site follows the operating system color scheme.

## Deployment

The project is deployed on Vercel:

[![Open Live Portfolio](https://img.shields.io/badge/Open%20Live%20Portfolio-parvezshaik.me-000000?style=for-the-badge&logo=vercel)](https://parvezshaik.me)

Recommended Vercel settings:

- Framework preset: **Next.js**
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`

## Contact

- Email: `shaikparvez977@gmail.com`
- LinkedIn: [linkedin.com/in/parvez-shaik](https://www.linkedin.com/in/parvez-shaik)
- GitHub: [github.com/Parvez](https://github.com/Parvez)
