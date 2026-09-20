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
  const motionProps = reduce ? {} : { variants: navIn, initial: "hidden", animate: "visible" };

  return (
    <Wrapper
      {...motionProps}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}
        className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-6"
      >
        <a href="#hero" className="font-display text-base font-bold whitespace-nowrap">
          {SITE.firstName}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links. Short labels below xl: French runs ~22% wider. */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "inline-flex min-h-9 items-center rounded-nav px-3 text-sm transition-colors duration-200",
                    isActive
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:text-text",
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
            className="hidden min-h-9 items-center gap-1.5 rounded-btn bg-accent px-3.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover sm:inline-flex"
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
                ? lang === "fr" ? "Fermer le menu" : "Close menu"
                : lang === "fr" ? "Ouvrir le menu" : "Open menu"
            }
            className="inline-flex size-11 items-center justify-center rounded-nav text-muted hover:text-text lg:hidden"
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
            className="border-t border-border bg-bg lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "flex min-h-12 items-center gap-3 rounded-nav px-3 text-sm",
                      active === item.id ? "text-accent" : "text-muted",
                    )}
                  >
                    <span aria-hidden="true" className="font-mono text-xs text-faint">
                      {item.index}
                    </span>
                    {t(item.label)}
                  </a>
                </li>
              ))}
              <li className="mt-3 border-t border-border pt-3 sm:hidden">
                <a
                  href={asset(t(SITE.cv))}
                  download=""
                  className="flex min-h-12 items-center gap-2 px-3 text-sm text-accent"
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
