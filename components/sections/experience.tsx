"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { BulletList, Card, TagList } from "@/components/ui/primitives";
import { fadeUpLg } from "@/lib/motion";
import { useLanguage } from "@/components/providers/language-provider";
import { EXPERIENCES, EXPERIENCE_COPY } from "@/content/experience";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <SectionHeader id="experience" index="03" copy={EXPERIENCE_COPY} />

      {/* Full-width stacked cards: with only two items a 2-col grid looks sparse
          and under-weights the strongest section. */}
      <div className="space-y-6">
        {EXPERIENCES.map((item) => (
          <Reveal key={item.id} variants={fadeUpLg}>
            <Card as="article" padding="lg">
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]">
                <div>
                  <h3 className="font-display text-h3 font-semibold text-text">
                    {t(item.role)}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{item.company}</p>
                </div>

                {/* Right column only on md+: below that it reads better above
                    the title as a caption row. */}
                <div className="font-mono text-xs text-faint md:min-w-[9rem] md:text-right">
                  <p className="whitespace-nowrap">{t(item.period)}</p>
                  <p className="mt-1">{t(item.duration)}</p>
                </div>
              </div>

              <p className="mt-5 max-w-prose text-prose text-muted">
                {t(item.summary)}
              </p>

              <BulletList items={t(item.highlights)} className="mt-6" />

              <div className="mt-6 border-t border-border pt-4">
                <TagList items={item.stack} tone="accent" />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
