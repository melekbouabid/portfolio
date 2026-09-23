import type { Metadata, Viewport } from "next";

import "./globals.css";
import { jetbrainsMono, poppins } from "./fonts";
import { absolute, SITE_URL } from "@/lib/base-path";
import { LANG_BOOTSTRAP } from "@/lib/lang-bootstrap";
import { personJsonLd } from "@/lib/json-ld";
import { Backdrop } from "@/components/layout/backdrop";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SkipLink } from "@/components/layout/skip-link";
import { LanguageProvider } from "@/components/providers/language-provider";
import { SITE } from "@/content/site";

/*
 * Server component — no 'use client'. `metadata` cannot be exported from a
 * client module, and adding the directive here would silently drop every SEO
 * tag below while everything still rendered fine.
 */

const title = `${SITE.name} — ${SITE.role.fr}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s — ${SITE.name}` },
  description: SITE.description.fr,
  applicationName: `${SITE.name} — Portfolio`,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  keywords: [
    "Melek Bouabid",
    "Data Science",
    "Intelligence Artificielle",
    "Machine Learning",
    "RAG",
    "LangChain",
    "Python",
    "FastAPI",
    "Tek-Up",
    "Tunisie",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    // absolute() concatenates onto SITE_URL. A relative path here would be
    // resolved by `new URL(path, metadataBase)`, which drops the sub-path on a
    // GitHub Pages project site.
    url: absolute("/"),
    siteName: `${SITE.name} — Portfolio`,
    title,
    description: SITE.description.fr,
    images: [
      { url: absolute("/og.png"), width: 1200, height: 630, alt: `${SITE.name} — Portfolio` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.description.fr,
    images: [absolute("/og.png")],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning because LANG_BOOTSTRAP writes `lang` before React
    // hydrates. It is shallow — this element's attributes only.
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${poppins.variable} ${jetbrainsMono.variable}`}
    >
      {/* No background here — see the html rule in globals.css. */}
      <body className="text-text antialiased">
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOTSTRAP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />

        <LanguageProvider>
          <SkipLink />
          <Backdrop />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
