"use client";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/primitives";
import { useLanguage } from "@/components/providers/language-provider";

/**
 * Exported to out/404.html by the static export, which GitHub Pages serves for
 * unmatched paths under the site's base path. No SPA redirect shim is needed:
 * this is a one-pager whose only navigation is hash fragments, and fragments
 * never reach the server.
 */
export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-start justify-center px-6">
      <p className="font-mono text-label tracking-label text-accent uppercase">404</p>
      <h1 className="mt-4 font-display text-h2 font-bold">
        {t({ fr: "Page introuvable", en: "Page not found" })}
      </h1>
      <p className="mt-4 max-w-prose text-prose text-muted">
        {t({
          fr: "Cette adresse ne correspond à rien sur ce site.",
          en: "This address doesn't match anything on this site.",
        })}
      </p>
      <Button href="/" className="mt-8">
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t({ fr: "Retour à l'accueil", en: "Back home" })}
      </Button>
    </div>
  );
}
