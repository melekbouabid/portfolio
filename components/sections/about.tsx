"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Card, Chip } from "@/components/ui/primitives";
import { StatTile } from "@/components/ui/stat-tile";
import { scaleIn, staggerTight } from "@/lib/motion";
import { useLanguage } from "@/components/providers/language-provider";
import { ABOUT_BODY, ABOUT_COPY, STATS } from "@/content/about";
import { SPOKEN_LANGUAGES } from "@/content/site";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <SectionHeader id="about" index="01" copy={ABOUT_COPY} />

      <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
        {/* max-w-prose, never full-bleed: French prose at 1152px exceeds a
            comfortable measure. */}
        <Reveal className="space-y-5 lg:col-span-3">
          {t(ABOUT_BODY).map((paragraph, i) => (
            <p key={i} className="max-w-prose text-prose text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="space-y-6 lg:col-span-2">
          <Reveal>
            <Card>
              <StaggerGroup
                variants={staggerTight}
                className="grid grid-cols-2 gap-5"
              >
                {STATS.map((stat) => (
                  <StaggerItem key={stat.value + t(stat.label)} variants={scaleIn}>
                    <StatTile stat={stat} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <h3 className="font-mono text-label tracking-label text-accent uppercase">
                {t({ fr: "Langues", en: "Languages" })}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SPOKEN_LANGUAGES.map((language) => (
                  <li
                    key={language.name.en}
                    className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5"
                  >
                    <span className="text-sm text-text">{t(language.name)}</span>
                    <span className="font-mono text-xs text-faint">
                      {t(language.level)}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Chip tone="neutral">
              {t({
                fr: "Recherche un stage / une alternance en Data Science & IA",
                en: "Looking for a Data Science & AI internship",
              })}
            </Chip>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
