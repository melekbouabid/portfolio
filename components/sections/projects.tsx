"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { BulletList, Card, Chip, TagList } from "@/components/ui/primitives";
import { fadeUpLg } from "@/lib/motion";
import { useLanguage } from "@/components/providers/language-provider";
import { PROJECTS, PROJECTS_COPY } from "@/content/projects";
import type { ProjectItem } from "@/content/types";

function ProjectCard({ project }: { project: ProjectItem }) {
  const { t } = useLanguage();
  const featured = project.featured;

  return (
    // flex-col + mt-auto on the footer keeps cards in a row aligned regardless
    // of how much longer the French copy runs.
    <Card
      as="article"
      padding={featured ? "lg" : "md"}
      interactive
      className="flex h-full flex-col"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs tracking-wider2 text-accent uppercase">
          {t(project.category)}
        </span>
        {project.year && (
          <span className="font-mono text-xs text-faint">{project.year}</span>
        )}
      </div>

      <h3 className="mt-3 font-display text-h3 leading-snug font-semibold text-text">
        {project.name}
      </h3>

      {/* Clamp only in the dense mobile grid; desktop shows the whole thing, so
          a longer French description is never silently truncated. */}
      <p className="mt-3 line-clamp-4 text-sm text-muted md:line-clamp-none">
        {t(project.problem)}
      </p>

      <BulletList items={t(project.highlights)} className="mt-5" />

      <div className="mt-auto border-t border-glass-border-soft pt-4">
        <TagList items={project.stack} tone={featured ? "accent" : "neutral"} />
      </div>
    </Card>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeader id="projects" copy={PROJECTS_COPY} />

      <div className="space-y-6">
        {featured.map((project) => (
          <Reveal key={project.id} variants={fadeUpLg}>
            <div className="relative">
              <Chip className="absolute -top-3 left-6 z-10 bg-black">
                {t({ fr: "Projet phare", en: "Featured" })}
              </Chip>
              <ProjectCard project={project} />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2">
        {rest.map((project) => (
          <Reveal key={project.id} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
