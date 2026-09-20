import type { MetadataRoute } from "next";

import { absolute } from "@/lib/base-path";

// Required by output:'export' — the route must be resolvable at build time.
export const dynamic = "force-static";

/** Rendered to a static robots.txt by output:'export'. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absolute("/sitemap.xml"),
  };
}
