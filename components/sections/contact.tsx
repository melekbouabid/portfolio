"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button, Card } from "@/components/ui/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { useLanguage } from "@/components/providers/language-provider";
import { CONTACT, CONTACT_COPY } from "@/content/contact";
import { SITE, SOCIALS_READY, SPOKEN_LANGUAGES } from "@/content/site";

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

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${SITE.email}`}>
              <Mail className="size-4" aria-hidden="true" />
              {t(CONTACT.emailCta)}
            </Button>

            {SOCIALS_READY && (
              <>
                <Button href={SITE.socials.github} variant="plain" external>
                  <GithubIcon className="size-4" />
                  GitHub
                </Button>
                <Button href={SITE.socials.linkedin} variant="plain" external>
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </Button>
              </>
            )}
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

        </Card>
      </Reveal>
    </Section>
  );
}
