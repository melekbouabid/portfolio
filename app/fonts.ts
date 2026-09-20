import { JetBrains_Mono, Onest, Syne } from "next/font/google";

/**
 * Three families, matching the reference template. All variable, all self-hosted
 * by next/font at build time — no request to fonts.googleapis.com at runtime,
 * and no preconnect needed.
 *
 * subsets: ['latin'] is sufficient for French — é è ê ç à ù î ô û are all in the
 * latin subset. Arabic is never rendered; the language list uses Latin names.
 */

export const syne = Syne({
  subsets: ["latin"],
  // Syne's weight axis stops at 800. Asking for 900 gets a synthesised, smeared
  // face, so 800 is the real ceiling for display type here.
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
  preload: true,
});

export const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
  preload: true,
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  // Mono only sets 12px labels and tags, where a swap is imperceptible. Keeping
  // it off the critical path leaves two preload links instead of three.
  preload: false,
});
