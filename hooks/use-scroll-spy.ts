"use client";

import { useEffect, useState } from "react";

/**
 * Highlights the section currently crossing the middle of the viewport.
 *
 * The rootMargin shrinks the observation root to a thin horizontal band across
 * the vertical centre, so "active" matches what the reader is actually looking
 * at rather than "topmost intersecting", which flips far too early.
 */
export function useScrollSpy(
  ids: readonly string[],
  rootMargin = "-45% 0px -50% 0px",
) {
  /* Empty, not ids[0]: the hero is not a nav target, so while it fills the
     viewport nothing should be highlighted. */
  const [active, setActive] = useState<string>("");
  const key = ids.join("|");

  useEffect(() => {
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        // Keep the last active id rather than flickering to "" between sections.
        if (visible.size === 0) return;

        let best = "";
        let bestRatio = -1;
        for (const id of ids) {
          const ratio = visible.get(id);
          if (ratio !== undefined && ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin, threshold: [0, 0.2, 0.5, 0.8, 1] },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    /*
     * The last section is shorter than the viewport and can never satisfy the
     * rootMargin band, so it would never light up. Force it at page bottom.
     */
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        const last = ids[ids.length - 1];
        if (last) setActive(last);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [key, rootMargin, ids]);

  return active;
}
