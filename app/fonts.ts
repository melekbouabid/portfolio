import { JetBrains_Mono, Poppins } from "next/font/google";

/**
 * Poppins carries the whole design, matching the reference. Self-hosted by
 * next/font at build time — no runtime request to Google.
 *
 * subsets: ['latin'] covers French (é è ê ç à ù î ô û). Arabic is never
 * rendered; the language list uses Latin names.
 */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

/**
 * Kept for one job only: the tabular percentages on the skill bars, where
 * proportional digits make the column jitter between rows.
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});
