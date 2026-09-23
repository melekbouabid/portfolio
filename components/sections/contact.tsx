"use client";

import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button, Card } from "@/components/ui/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { useLanguage } from "@/components/providers/language-provider";
import { CONTACT, CONTACT_COPY } from "@/content/contact";
import { SITE, SOCIALS_READY, SPOKEN_LANGUAGES } from "@/content/site";

/*
 * mailto + copy-to-clipboard rather than a form: output:'export' means there is
 * no server, no route handlers and no server actions, so a form would need a
 * third-party endpoint. Not worth the dependency for a portfolio.
 */
function CopyEmail() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  return (
    <Button
      variant="plain"
      onClick={() => {
        navigator.clipboard?.writeText(SITE.email).then(
          () => setCopied(true),
          () => setCopied(false),
        );
      }}
    >
      {copied ? (
        <Check className="size-4" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      {copied ? t(CONTACT.copied) : t(CONTACT.copy)}
    </Button>
  );
}

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" width="narrow">
      <SectionHeader id="contact" copy={CONTACT_COPY} />

      <Reveal>
        <Card padding="lg">
          <p className="text-xs tracking-wider2 text-accent uppercase">
            {t(CONTACT.preferred)}
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 block font-display text-lg font-semibold break-all text-text transition-colors hover:text-accent sm:text-xl"
          >
            {SITE.email}
          </a>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${SITE.email}`}>
              <Mail className="size-4" aria-hidden="true" />
              {t(CONTACT.emailCta)}
            </Button>
            <CopyEmail />
          </div>

          <dl className="mt-8 grid gap-4 border-t border-glass-border-soft pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-[0.625rem] tracking-wider2 text-faint uppercase">
                {t(CONTACT.phoneLabel)}
              </dt>
              <dd className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                <Phone className="size-3.5 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="transition-colors hover:text-accent"
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-[0.625rem] tracking-wider2 text-faint uppercase">
                {t(CONTACT.locationLabel)}
              </dt>
              <dd className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                {t(SITE.location)}
              </dd>
            </div>

            <div>
              <dt className="text-[0.625rem] tracking-wider2 text-faint uppercase">
                {t(CONTACT.languagesLabel)}
              </dt>
              <dd className="mt-1.5 text-sm text-muted">
                {SPOKEN_LANGUAGES.map((l) => t(l.name)).join(" · ")}
              </dd>
            </div>
          </dl>

          {/* Rendered only once the handles in content/site.ts are real. */}
          {SOCIALS_READY && (
            <div className="mt-6 flex flex-wrap gap-3 border-t border-glass-border-soft pt-6">
              <Button href={SITE.socials.github} variant="plain" external>
                <GithubIcon className="size-4" />
                GitHub
              </Button>
              <Button href={SITE.socials.linkedin} variant="plain" external>
                <LinkedinIcon className="size-4" />
                LinkedIn
              </Button>
            </div>
          )}
        </Card>
      </Reveal>
    </Section>
  );
}
