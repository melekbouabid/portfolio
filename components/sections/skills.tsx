"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Card, TagList } from "@/components/ui/primitives";
import { SkillBar } from "@/components/ui/skill-bar";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/components/providers/language-provider";
import { SKILLS_COPY, SKILL_GROUPS } from "@/content/skills";
import type { SkillGroup } from "@/content/types";

function GroupCard({ group }: { group: SkillGroup }) {
  const { t } = useLanguage();

  return (
    <Card className={cn("h-full", group.wide && "md:col-span-2")}>
      {/*
        The title sits on its own row, not in a justify-between fighting a badge
        for width: "Apprentissage automatique" is 2.4x the width of "Machine
        Learning" and would squeeze to one word per line.
      */}
      <h3 className="font-display text-h3 leading-snug font-semibold text-text">
        {t(group.title)}
      </h3>

      {group.layout === "bars" ? (
        <ul className="mt-5 space-y-4">
          {(group.skills ?? []).map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </ul>
      ) : (
        <TagList items={group.items ?? []} className="mt-4" tone="neutral" />
      )}
    </Card>
  );
}

export function Skills() {
  const barGroups = SKILL_GROUPS.filter((g) => g.layout === "bars");
  const tagGroups = SKILL_GROUPS.filter((g) => g.layout === "tags");

  return (
    <Section id="skills">
      <SectionHeader id="skills" index="02" copy={SKILLS_COPY} />

      <div className="grid gap-6 md:grid-cols-2">
        {barGroups.map((group) => (
          <Reveal key={group.id} className="h-full">
            <GroupCard group={group} />
          </Reveal>
        ))}
      </div>

      {/* Tag groups are much shorter, so they take three across at lg. */}
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tagGroups.map((group) => (
          <Reveal
            key={group.id}
            className={cn("h-full", group.wide && "md:col-span-2 lg:col-span-3")}
          >
            <GroupCard group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
