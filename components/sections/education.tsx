"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Card, Chip, TagList } from "@/components/ui/primitives";
import { useLanguage } from "@/components/providers/language-provider";
import { EDUCATION, EDUCATION_COPY } from "@/content/education";

export function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education">
      <SectionHeader id="education" copy={EDUCATION_COPY} />

      <div className="space-y-6">
        {EDUCATION.map((item) => (
          <Reveal key={item.id}>
            <Card padding="lg" className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-h3 font-semibold text-text">
                  {item.school}
                </h3>
                {item.current && (
                  <Chip tone="success" pulse>
                    {t({ fr: "En cours", en: "Current" })}
                  </Chip>
                )}
              </div>

              <p className="mt-3 text-prose text-muted">{t(item.degree)}</p>

              <p className="mt-2 font-mono text-xs text-faint">
                {t(item.period)} · {t(item.location)}
              </p>

              <div className="mt-6 border-t border-glass-border-soft pt-5">
                <p className="text-xs tracking-wider2 text-accent uppercase">
                  {t({ fr: "Axes du cursus", en: "Coursework" })}
                </p>
                <TagList items={t(item.focus)} className="mt-3" />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
