# Parvez Shaik Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-parvezshaik.me-5f71a6?style=for-the-badge)](https://parvezshaik.me)

A professional portfolio website for Parvez Shaik, focused on Software Development Engineer roles across full-stack web applications, backend APIs, databases, cloud deployments, testing, and AI retrieval systems.

## Live Demo

View the deployed portfolio: [https://parvezshaik.me](https://parvezshaik.me)

## Preview

This portfolio is designed around a high-signal recruiter flow:

- Editorial hero section with clear SDE positioning
- Updated resume download
- Measured engineering impact metrics
- Featured AI retrieval and distributed systems projects
- Company experience summaries that complement, rather than repeat, the resume
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

The content is tailored around Parvez's updated software development background:

- Full-stack application development with React, TypeScript, Node.js, and Python
- Backend APIs, SQL-backed workflows, and database performance tuning
- Docker, Jenkins, GitHub Actions, AWS EC2, and cloud deployment reliability
- Testing, smoke checks, debugging, troubleshooting, and production support
- AI retrieval systems including RAG, GraphRAG, LlamaIndex, FAISS, AutoGen, and AG2

## Featured Projects

### Agentive Med

A multi-agent Alzheimer care assistant with supervisor orchestration, PubMed-backed FAISS retrieval, citation checks, and separated nutrition and medical agents for more verifiable responses.

### Distributed Vector Database for AI Applications

A distributed vector database prototype using gRPC service communication, RocksDB storage, GraphRAG, LlamaIndex, and AWS S3 support for large-scale retrieval workloads.

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
- GitHub: [github.com/Parvez4](https://github.com/Parvez4)
