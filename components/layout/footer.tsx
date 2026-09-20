"use client";

import { ArrowUp, Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

import { useLanguage } from "@/components/providers/language-provider";
import { FOOTER } from "@/content/contact";
import { SITE, SOCIALS_READY } from "@/content/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-bold">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted">
            {t(SITE.shortRole)} · {t(SITE.location)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="inline-flex size-11 items-center justify-center rounded-nav text-muted transition-colors hover:text-accent"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>

          {/* Hidden until the handles in content/site.ts are filled in. */}
          {SOCIALS_READY && (
            <>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex size-11 items-center justify-center rounded-nav text-muted transition-colors hover:text-accent"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex size-11 items-center justify-center rounded-nav text-muted transition-colors hover:text-accent"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </>
          )}

          <a
            href="#hero"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-nav px-3 text-sm text-muted transition-colors hover:text-text"
          >
            <ArrowUp className="size-3.5" aria-hidden="true" />
            {t(FOOTER.backToTop)}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-8">
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} {SITE.name} · {t(FOOTER.builtWith)}
        </p>
      </div>
    </footer>
  );
}
