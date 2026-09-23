"use client";

import Image from "next/image";

import { asset } from "@/lib/base-path";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Card, Chip, TagList } from "@/components/ui/primitives";
import { StatTile } from "@/components/ui/stat-tile";
import { scaleIn, staggerTight } from "@/lib/motion";
import { useLanguage } from "@/components/providers/language-provider";
import { ABOUT_BODY, ABOUT_COPY, HEADLINE_SKILLS, STATS } from "@/content/about";
import { SITE, SPOKEN_LANGUAGES } from "@/content/site";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <SectionHeader id="about" copy={ABOUT_COPY} />

      {/* Portrait left, text right — the reference's about layout. */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start">
        <Reveal className="mx-auto w-full max-w-sm lg:mx-0 lg:sticky lg:top-28">
          <div className="glass overflow-hidden p-2">
            <Image
              src={asset("/melek.jpg")}
              alt={`${SITE.name} — ${t(SITE.role)}`}
              width={1122}
              height={1402}
              priority
              className="h-auto w-full rounded-[10px] object-cover"
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 24rem, 100vw"
            />
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <Card padding="lg">
              <h3 className="font-display text-h3 font-semibold">
                {t(ABOUT_COPY.intro)}{" "}
                <span className="text-accent">{SITE.name}</span>
              </h3>

              <div className="mt-5 space-y-4">
                {t(ABOUT_BODY).map((paragraph, i) => (
                  <p key={i} className="text-prose text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* The reference's "Skills:" panel — a quick-read summary that
                  sits above the full breakdown in the next section. */}
              <div className="glass-inset mt-7 p-5">
                <p className="text-sm font-medium text-text">
                  {t({ fr: "Stack principale", en: "Core stack" })}
                </p>
                <TagList items={HEADLINE_SKILLS} tone="accent" className="mt-3" />
              </div>
            </Card>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="h-full">
              <Card className="h-full">
                <StaggerGroup variants={staggerTight} className="grid grid-cols-2 gap-5">
                  {STATS.map((stat) => (
                    <StaggerItem key={stat.value + t(stat.label)} variants={scaleIn}>
                      <StatTile stat={stat} />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </Card>
            </Reveal>

            <Reveal className="h-full">
              <Card className="h-full">
                <h3 className="text-sm font-medium text-text">
                  {t({ fr: "Langues", en: "Languages" })}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {SPOKEN_LANGUAGES.map((language) => (
                    <li
                      key={language.name.en}
                      className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5"
                    >
                      <span className="text-sm text-muted">{t(language.name)}</span>
                      <span className="text-xs text-dim">{t(language.level)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>

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
