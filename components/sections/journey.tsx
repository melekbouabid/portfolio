"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { staggerSlow } from "@/lib/motion";
import { useLanguage } from "@/components/providers/language-provider";
import { JOURNEY, JOURNEY_COPY } from "@/content/journey";

const KIND_LABEL = {
  education: { fr: "Formation", en: "Education" },
  work: { fr: "Expérience", en: "Work" },
  project: { fr: "Projet", en: "Project" },
  milestone: { fr: "Étape", en: "Milestone" },
} as const;

export function Journey() {
  const { t } = useLanguage();

  return (
    <Section id="journey" width="narrow">
      <SectionHeader id="journey" index="06" copy={JOURNEY_COPY} />

      <div className="relative">
        {/* The rail. Decorative — the semantics live in the <ol>. */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[9px] w-px bg-gradient-to-b from-transparent via-accent to-sky"
        />

        {/* An ordered list, because it is an ordered sequence. */}
        <StaggerGroup as="ul" variants={staggerSlow} className="space-y-6">
          {JOURNEY.map((item) => (
            <StaggerItem as="li" key={item.id} className="relative pl-10">
              <span
                aria-hidden="true"
                className="absolute top-2 left-[9px] size-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-sm text-accent">{item.year}</span>
                <span className="font-mono text-[0.625rem] tracking-label text-faint uppercase">
                  {t(KIND_LABEL[item.kind])}
                </span>
              </div>

              <h3 className="mt-1.5 font-display text-base font-semibold text-text">
                {t(item.title)}
              </h3>

              <p className="mt-1.5 text-sm text-muted">{t(item.body)}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="relative mt-6 pl-10">
          <span
            aria-hidden="true"
            className="absolute top-3 left-[9px] size-2.5 -translate-x-1/2 rounded-full border border-accent bg-bg"
          />
          <div className="rounded-card border border-dashed border-border px-4 py-3">
            <p className="font-mono text-sm text-faint">
              <span aria-hidden="true">✦ </span>
              {t({
                fr: "La suite s'écrit…",
                en: "The next chapter is being written…",
              })}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
