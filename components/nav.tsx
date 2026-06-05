import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/profile";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  ["Home", "#top"],
  ["Work", "#projects"],
  ["Impact", "#impact"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav className="mx-auto flex max-w-[96rem] items-center justify-between rounded-[1.15rem] border fine-border bg-paper/82 px-3 py-2 shadow-glow backdrop-blur-xl sm:px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Parvez Shaik home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-sm font-black text-paper">
            PS
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:block">Parvez Shaik</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="rounded-xl px-4 py-2 text-sm text-ink transition hover:bg-fog">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <ThemeToggle />
          <a
            href={profile.resume}
            className="hidden items-center gap-2 rounded-xl px-3 py-2 text-ink transition hover:bg-fog sm:inline-flex"
          >
            Resume
            <Download size={15} />
          </a>
          <a
            href={profile.github}
            aria-label="GitHub profile"
            className="rounded-xl border fine-border p-2.5 text-ink transition hover:bg-fog"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn profile"
            className="hidden items-center gap-1 rounded-xl px-3 py-2 text-ink transition hover:bg-fog sm:inline-flex"
          >
            LinkedIn
            <ArrowUpRight size={15} />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn profile"
            className="rounded-xl border fine-border p-2.5 text-ink transition hover:bg-fog sm:hidden"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
