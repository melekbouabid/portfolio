"use client";

import { ArrowRight, Download, GraduationCap, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

import { asset } from "@/lib/base-path";
import { fadeUp, stagger } from "@/lib/motion";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button, Chip } from "@/components/ui/primitives";
import { useLanguage } from "@/components/providers/language-provider";
import { HERO } from "@/content/hero";
import { SITE } from "@/content/site";

/** Cycles the role words under the name. Static under reduced motion. */
function RotatingRole() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % HERO.rotatingRoles.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <span className="text-accent">
      {HERO.rotatingRoles[reduce ? 0 : index]}
      {!reduce && (
        <span aria-hidden="true" className="ml-0.5 animate-caret font-light">
          |
        </span>
      )}
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center pt-[68px]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <StaggerGroup variants={stagger(0.08, 0.15)} className="max-w-3xl">
          <StaggerItem variants={fadeUp}>
            <Chip pulse>{t(HERO.availability)}</Chip>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            <h1
              id="hero-title"
              className="mt-7 font-display text-hero font-bold tracking-tightish"
            >
              {SITE.firstName}{" "}
              <span className="gradient-text">{SITE.lastName}</span>
            </h1>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            {/*
              min-h in line units rather than a fixed height: the rotating word
              changes width, and the French role line wraps a word earlier than
              the English one. A fixed height makes the CTA row jump.
            */}
            <p className="mt-3 min-h-[2lh] font-mono text-base text-muted sm:text-lg">
              <RotatingRole />
            </p>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            <p className="mt-6 max-w-prose text-prose text-muted">
              {t(HERO.tagline)}
            </p>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            <p className="mt-4 max-w-prose text-sm text-faint">{t(HERO.note)}</p>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            {/* flex-wrap is the designed behaviour: three French labels exceed
                one line at 375px. */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#projects">
                {t(HERO.cta.projects)}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href="#contact" variant="secondary">
                <Mail className="size-4" aria-hidden="true" />
                {t(HERO.cta.contact)}
              </Button>
              <Button href={asset(t(SITE.cv))} variant="secondary" download>
                <Download className="size-4" aria-hidden="true" />
                {t(SITE.cvLabel)}
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-faint">
              <li className="flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden="true" />
                {t(SITE.location)}
              </li>
              <li className="flex items-center gap-1.5">
                <GraduationCap className="size-3.5" aria-hidden="true" />
                {t(HERO.school)}
              </li>
            </ul>
          </StaggerItem>
        </StaggerGroup>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 hidden justify-center sm:flex"
      >
        <span className="font-mono text-[0.625rem] tracking-label text-faint uppercase">
          {t(HERO.scrollCue)}
        </span>
      </div>
    </section>
  );
}
