import type { MetadataRoute } from "next";

import { absolute } from "@/lib/base-path";

// Required by output:'export' — the route must be resolvable at build time.
export const dynamic = "force-static";

/** Rendered to a static sitemap.xml by output:'export'. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absolute("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
