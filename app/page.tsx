import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Sparkle } from "lucide-react";
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/motion";
import { experience, focusAreas, profile, projects, proofPoints, skillGroups } from "@/lib/profile";

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-ink">{eyebrow}</p>
          <h2 className="display-serif mt-3 max-w-3xl text-4xl leading-[0.96] text-ink sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </div>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen text-ink">
      <Nav />

      <section className="mx-auto grid max-w-[96rem] gap-10 px-4 pb-16 pt-24 sm:px-8 md:pt-32 lg:grid-cols-[1.06fr_0.94fr] lg:px-10">
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-ink">
              {profile.name} <span className="text-muted">- Software Developer / Full-Stack / Backend</span>
            </p>
          </Reveal>
          <Reveal delay={0.07}>
            <h1 className="display-serif mt-7 max-w-4xl text-[3.05rem] leading-[0.94] text-ink min-[420px]:text-[3.45rem] sm:text-[5.2rem] lg:text-[6.25rem]">
              Software that ships.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={0.19}>
            <div className="mt-6 inline-flex w-fit max-w-full items-center gap-2 rounded-2xl border fine-border bg-paper/76 px-4 py-3 text-sm font-semibold text-ink shadow-glow">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#efe2ef]">
                <span className="h-2 w-2 rounded-full bg-[#9d5a99]" />
              </span>
              Open to Software Development Engineer, full-stack, backend, cloud, and AI retrieval roles.
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-black text-white transition hover:bg-ink"
              >
                View work
                <ArrowRight size={18} />
              </a>
              <a
                href={profile.resume}
                className="inline-flex items-center justify-center gap-2 rounded-xl border fine-border bg-paper/62 px-7 py-4 text-sm font-black text-ink transition hover:bg-paper"
              >
                View resume
                <Download size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative flex min-h-[30rem] items-center justify-center">
            <div className="absolute inset-x-4 bottom-10 top-20 rounded-[2rem] bg-paper/45 blur-3xl" aria-hidden="true" />
            <Image
              src="/parvez-pencil-portrait.png"
              width={900}
              height={900}
              alt="Editorial line-art portrait of Parvez Shaik"
              priority
              className="relative z-10 w-full max-w-[42rem]"
            />
          </div>
        </Reveal>
      </section>

      <section id="impact" className="mx-auto max-w-[96rem] border-t fine-border px-4 py-16 sm:px-8 lg:px-10">
        <SectionLabel eyebrow="01 - Impact" title="Measured engineering impact." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <article className="soft-panel h-full rounded-2xl p-6">
                <p className="display-serif text-5xl leading-none text-accent">{item.value}</p>
                <h3 className="mt-5 text-xl font-black text-ink">{item.label}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-[96rem] border-t fine-border px-4 py-16 sm:px-8 lg:px-10">
        <SectionLabel eyebrow="02 - Work" title="Featured projects." />
        {projects.map((project) => (
          <Reveal key={project.title}>
            <article className="overflow-hidden rounded-[1.5rem] border fine-border bg-paper/70">
              <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                <div className="p-7 md:p-10">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-muted">Featured project</p>
                  <h3 className="display-serif mt-5 max-w-3xl text-5xl leading-[0.95] text-ink md:text-6xl">
                    {project.title}
                  </h3>
                  <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{project.summary}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-black text-white transition hover:bg-ink"
                    >
                      Live demo
                      <ArrowUpRight size={17} />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border fine-border bg-paper/62 px-5 py-3 text-sm font-black text-ink transition hover:bg-paper"
                    >
                      Code
                      <Github size={17} />
                    </a>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border fine-border bg-fog/70 px-4 py-2 text-sm font-semibold text-ink">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t fine-border bg-fog/70 p-7 md:p-10 lg:border-l lg:border-t-0">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-muted">Results</p>
                  <div className="mt-7 space-y-4">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-4 rounded-2xl bg-paper/75 p-5">
                        <span className="h-3 w-3 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <p className="text-xl font-black text-ink">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section id="experience" className="mx-auto max-w-[96rem] border-t fine-border px-4 py-16 sm:px-8 lg:px-10">
        <SectionLabel eyebrow="03 - Experience" title="Professional experience." />
        <div className="space-y-4">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.role}`} delay={index * 0.04}>
              <article className="grid gap-8 rounded-[1.5rem] border fine-border bg-paper/62 p-6 md:grid-cols-[0.34fr_0.66fr] md:p-8">
                <div>
                  <p className="display-serif text-5xl text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-muted">{job.period}</p>
                  <h3 className="mt-4 text-2xl font-black text-ink">{job.role}</h3>
                  <p className="mt-1 text-lg text-muted">{job.company}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-fog px-3 py-1.5 text-xs font-semibold text-ink">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-lg leading-8 text-ink">{job.impact}</p>
                  <ul className="mt-6 space-y-4">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base leading-7 text-muted">
                        <Sparkle className="mt-1 shrink-0 text-accent" size={17} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[96rem] border-t fine-border px-4 py-16 sm:px-8 lg:px-10">
        <SectionLabel eyebrow="04 - Strengths" title="Engineering focus." />
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={index * 0.05}>
                <article className="soft-panel h-full rounded-2xl p-6">
                  <Icon className="text-accent" size={26} />
                  <h3 className="mt-5 text-xl font-black text-ink">{area.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted">{area.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-[96rem] border-t fine-border px-4 py-16 sm:px-8 lg:px-10">
        <SectionLabel eyebrow="05 - Skills" title="Technical toolkit." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.03}>
                <article className="h-full rounded-2xl border fine-border bg-paper/55 p-6">
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-accent" />
                    <h3 className="text-lg font-black text-ink">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-fog px-3 py-1.5 text-sm font-medium text-ink">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[96rem] border-t fine-border px-4 py-16 sm:px-8 lg:px-10">
        <Reveal>
          <div className="rounded-[1.5rem] border fine-border bg-paper/74 p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-muted">06 - Contact</p>
                <h2 className="display-serif mt-4 max-w-3xl text-5xl leading-[0.95] text-ink md:text-7xl">
                  Let&apos;s build what works.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                  I am open to Software Development Engineer, full-stack, backend, cloud, and AI retrieval roles across the U.S.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-black text-white transition hover:bg-ink">
                    <Mail size={18} />
                    Email me
                  </a>
                  <a href={profile.linkedin} className="inline-flex items-center gap-2 rounded-xl border fine-border px-5 py-3 text-sm font-black text-ink transition hover:bg-fog">
                    LinkedIn
                    <ArrowUpRight size={18} />
                  </a>
                  <a href={profile.github} className="inline-flex items-center gap-2 rounded-xl border fine-border px-5 py-3 text-sm font-black text-ink transition hover:bg-fog">
                    GitHub
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border fine-border bg-fog/60 p-6">
                <div className="space-y-5 text-base text-muted">
                  <p className="flex items-center gap-3">
                    <Mail size={18} className="text-accent" />
                    {profile.email}
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone size={18} className="text-accent" />
                    {profile.phone}
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin size={18} className="text-accent" />
                    {profile.location}
                  </p>
                  <p className="flex items-center gap-3">
                    <Linkedin size={18} className="text-accent" />
                    linkedin.com/in/parvez-shaik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
