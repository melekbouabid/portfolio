"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/* Card — the glass surface                                            */
/* ------------------------------------------------------------------ */

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: "sm" | "md" | "lg";
  tone?: "glass" | "inset";
  as?: "div" | "article" | "li";
}

export function Card({
  children,
  className,
  interactive = false,
  padding = "md",
  tone = "glass",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        tone === "glass" ? "glass" : "glass-inset",
        padding === "sm" && "p-4",
        padding === "md" && "p-6",
        padding === "lg" && "p-8",
        interactive &&
          "transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-line hover:shadow-glow",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  /** accent = cyan outline (the reference's default), plain = white outline. */
  variant?: "accent" | "plain" | "filled" | "ghost";
  size?: "sm" | "md";
  external?: boolean;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "accent",
  size = "md",
  external = false,
  download = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-btn",
    "text-sm font-medium tracking-wide uppercase",
    "transition-colors duration-200 ease-out-quart",
    // 44px minimum touch target.
    size === "md" ? "min-h-11 px-5" : "min-h-10 px-4",
    variant === "accent" &&
      "border-[1.6px] border-accent text-accent hover:bg-accent-soft",
    variant === "plain" &&
      "border-[1.6px] border-glass-border text-text hover:border-accent hover:text-accent",
    // Near-black on cyan is 9.6:1; white on cyan would be 2.3:1 and fail AA.
    variant === "filled" && "bg-accent text-on-accent hover:bg-accent/85",
    variant === "ghost" && "text-muted hover:text-accent",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(download ? { download: "" } : {})}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Chip                                                                */
/* ------------------------------------------------------------------ */

interface ChipProps {
  children: ReactNode;
  tone?: "accent" | "neutral" | "success";
  pulse?: boolean;
  className?: string;
}

export function Chip({ children, tone = "accent", pulse = false, className }: ChipProps) {
  return (
    <span
      className={cn(
        // whitespace-normal, not nowrap: the French availability string is
        // longer and already reaches the viewport edge at 375px in English.
        "inline-flex max-w-full items-center gap-2 rounded-pill border px-3.5 py-1.5",
        "text-left text-xs whitespace-normal",
        tone === "accent" && "border-accent-line bg-accent-soft text-accent",
        tone === "neutral" && "border-glass-border-soft bg-glass text-muted",
        tone === "success" && "border-success/40 bg-success/10 text-success",
        className,
      )}
    >
      {pulse && (
        <span
          aria-hidden="true"
          className={cn(
            "size-1.5 shrink-0 rounded-full animate-pulse-dot",
            tone === "success" ? "bg-success" : "bg-accent",
          )}
        />
      )}
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Tech tags — the reference's rounded pills                           */
/* ------------------------------------------------------------------ */

export function TechTag({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "accent" | "neutral";
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-tag border px-3 py-1 text-xs",
        tone === "accent"
          ? "border-accent-line bg-accent-soft text-accent"
          : "border-glass-border-soft bg-white/5 text-muted",
      )}
    >
      {label}
    </span>
  );
}

export function TagList({
  items,
  tone = "neutral",
  className,
}: {
  items: readonly string[];
  tone?: "accent" | "neutral";
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <TechTag label={item} tone={tone} />
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* BulletList                                                          */
/* ------------------------------------------------------------------ */

export function BulletList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        // grid, not a list marker, so wrapped French lines stay hung-indented.
        <li key={item} className="grid grid-cols-[auto_1fr] gap-x-3 text-sm text-muted">
          <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
