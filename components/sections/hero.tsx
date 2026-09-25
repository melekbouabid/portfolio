"use client";

import { ArrowRight, Download, GraduationCap, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

import { asset } from "@/lib/base-path";
import { fadeUp, stagger } from "@/lib/motion";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button, Chip } from "@/components/ui/primitives";
import { useLanguage } from "@/components/providers/language-provider";
import { HERO } from "@/content/hero";
import { SITE } from "@/content/site";

/** Cycles the focus words under the name. Static under reduced motion. */
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

/** Centred hero, matching the reference: greeting, name in cyan, outlined CTAs. */
export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center pt-[68px]"
    >
      <div className="mx-auto w-full max-w-4xl px-6 py-20">
        <StaggerGroup
          variants={stagger(0.08, 0.15)}
          className="flex flex-col items-center text-center"
        >
          <StaggerItem variants={fadeUp}>
            <Chip pulse>{t(HERO.availability)}</Chip>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            <h1
              id="hero-title"
              className="mt-8 font-display text-hero font-bold"
            >
              {t(HERO.greeting)}{" "}
              <span className="text-accent">{SITE.name}</span>
            </h1>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            {/* min-h in line units, not a fixed height: the rotating word changes
                width and the French role wraps a word earlier than English. */}
            <p className="mt-4 min-h-[2lh] text-sm tracking-wider2 text-muted uppercase sm:text-base">
              {t(SITE.shortRole)} — <RotatingRole />
            </p>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            <p className="mt-7 max-w-prose text-prose text-muted">
              {t(HERO.tagline)}
            </p>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            {/* Wrapping is designed behaviour: three French labels exceed one
                line at 375px. */}
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="#about">
                {t(HERO.cta.about)}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={asset(SITE.cv[lang])} variant="plain" download>
                <Download className="size-4" aria-hidden="true" />
                {lang === "fr" ? "CV" : "Resume"}
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem variants={fadeUp}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-dim">
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
        <span className="text-[0.625rem] tracking-wider2 text-faint uppercase">
          {t(HERO.scrollCue)}
        </span>
      </div>
    </section>
  );
}
