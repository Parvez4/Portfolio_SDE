"use client";

import { useState } from "react";
import { CheckCircle2, Layers3 } from "lucide-react";
import { roleLenses } from "@/lib/profile";

export function RoleLens() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = roleLenses[activeIndex];

  return (
    <div className="grid gap-4 lg:grid-cols-[0.36fr_0.64fr]">
      <div className="rounded-lg border fine-border bg-paper/58 p-3">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Role focus">
          {roleLenses.map((lens, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={lens.name}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-12 items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-black transition ${
                  selected ? "bg-ink text-paper" : "text-ink hover:bg-fog"
                }`}
              >
                <span>{lens.name}</span>
                {selected ? <CheckCircle2 size={17} /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <article className="relative overflow-hidden rounded-lg border fine-border bg-paper/70 p-6 md:p-8">
        <div className="absolute right-6 top-6 hidden text-accent/18 md:block" aria-hidden="true">
          <Layers3 size={92} strokeWidth={1.2} />
        </div>
        <p className="text-xs font-black uppercase tracking-[0.24em] text-muted">Selected lens</p>
        <h3 className="mt-4 text-3xl font-black text-ink md:text-4xl">{active.name}</h3>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{active.summary}</p>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {active.proof.map((item) => (
            <div key={item} className="rounded-lg bg-fog/75 p-4">
              <p className="text-sm font-black leading-6 text-ink">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {active.skills.map((skill) => (
            <span key={skill} className="rounded-full border fine-border bg-paper/80 px-3 py-1.5 text-sm font-semibold text-ink">
              {skill}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
