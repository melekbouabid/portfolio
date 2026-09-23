"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { asset } from "@/lib/base-path";
import { navIn, sheet } from "@/lib/motion";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useLanguage } from "@/components/providers/language-provider";
import { LanguageToggle } from "./language-toggle";
import { NAV_ITEMS, SECTION_IDS } from "@/content/nav";
import { SITE } from "@/content/site";

export function Navbar() {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();
  const active = useScrollSpy(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet, and close it on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const Wrapper = reduce ? "header" : motion.header;
  const motionProps = reduce
    ? {}
    : { variants: navIn, initial: "hidden", animate: "visible" };

  return (
    <Wrapper
      {...motionProps}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        // The reference's bar: half-black over a 10px blur.
        scrolled || open
          ? "bg-black/50 backdrop-blur-[10px]"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}
        className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-6"
      >
        <a href="#hero" className="text-lg font-semibold whitespace-nowrap">
          {SITE.firstName}
          <span className="text-accent">.</span>
        </a>

        {/* Short labels below xl: French nav labels run ~22% wider. */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "inline-flex min-h-9 items-center rounded-btn px-3 text-sm transition-colors duration-200",
                    isActive ? "text-accent" : "text-muted hover:text-accent",
                  )}
                >
                  <span className="xl:hidden">{t(item.short)}</span>
                  <span className="hidden xl:inline">{t(item.label)}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />

          <a
            href={asset(t(SITE.cv))}
            download=""
            className="hidden min-h-9 items-center gap-1.5 rounded-btn border-[1.6px] border-accent px-3.5 text-xs font-medium tracking-wide text-accent uppercase transition-colors hover:bg-accent-soft sm:inline-flex"
          >
            <Download className="size-3.5" aria-hidden="true" />
            {t(SITE.cvLabel)}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={
              open
                ? lang === "fr"
                  ? "Fermer le menu"
                  : "Close menu"
                : lang === "fr"
                  ? "Ouvrir le menu"
                  : "Open menu"
            }
            className="inline-flex size-11 items-center justify-center rounded-btn text-muted hover:text-accent lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            variants={reduce ? undefined : sheet}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "visible"}
            exit={reduce ? undefined : "exit"}
            className="border-t border-glass-border-soft bg-black/90 backdrop-blur-[10px] lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "flex min-h-12 items-center rounded-btn px-3 text-sm",
                      active === item.id ? "text-accent" : "text-muted",
                    )}
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
              <li className="mt-3 border-t border-glass-border-soft pt-3 sm:hidden">
                <a
                  href={asset(t(SITE.cv))}
                  download=""
                  className="flex min-h-12 items-center gap-2 px-3 text-sm text-accent uppercase"
                >
                  <Download className="size-4" aria-hidden="true" />
                  {t(SITE.cvLabel)}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
