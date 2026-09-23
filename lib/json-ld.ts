import { absolute, SITE_URL } from "./base-path";
import { SITE, SOCIALS_READY } from "@/content/site";
import { EDUCATION } from "@/content/education";
import { SKILL_GROUPS } from "@/content/skills";

/**
 * Person schema for crawlers. Monolingual (French) on purpose — JSON-LD is not
 * user-facing, and switching it client-side would gain nothing.
 */
export function personJsonLd() {
  const knowsAbout = SKILL_GROUPS.flatMap((group) =>
    group.layout === "bars"
      ? (group.skills ?? []).map((s) => s.name)
      : (group.items ?? []),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    givenName: SITE.firstName,
    familyName: SITE.lastName,
    url: SITE_URL,
    image: absolute("/melek.jpg"),
    jobTitle: SITE.role.fr,
    email: `mailto:${SITE.email}`,
    telephone: SITE.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tunis",
      addressCountry: "TN",
    },
    knowsLanguage: [
      { "@type": "Language", name: "Arabic", alternateName: "ar" },
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    knowsAbout: Array.from(new Set(knowsAbout)),
    alumniOf: EDUCATION.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.school,
    })),
    // Omitted entirely while the handles are placeholders — a sameAs pointing at
    // github.com/PLACEHOLDER_… is worse than no sameAs.
    ...(SOCIALS_READY
      ? { sameAs: [SITE.socials.github, SITE.socials.linkedin] }
      : {}),
  };
}
