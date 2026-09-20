"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: "sm" | "md" | "lg";
  as?: "div" | "article" | "li";
}

export function Card({
  children,
  className,
  interactive = false,
  padding = "md",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-card border border-border bg-surface",
        padding === "sm" && "p-4",
        padding === "md" && "p-6",
        padding === "lg" && "p-8",
        interactive &&
          "transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-border-strong hover:shadow-card-hover",
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
  variant?: "primary" | "secondary" | "ghost";
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
  variant = "primary",
  size = "md",
  external = false,
  download = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-btn font-medium",
    "transition-colors duration-200 ease-out-quart",
    // 44px minimum touch target.
    size === "md" ? "min-h-11 px-5 text-sm" : "min-h-10 px-4 text-sm",
    // Near-black on accent: 7.09:1. White would be 2.80:1 and fail AA.
    variant === "primary" && "bg-accent text-on-accent hover:bg-accent-hover",
    variant === "secondary" &&
      "border border-border bg-surface text-text hover:border-border-strong hover:bg-surface-2",
    variant === "ghost" && "text-muted hover:text-text",
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
        // whitespace-normal, not nowrap: the French availability string is ~15%
        // longer and already reaches the viewport edge at 375px in English.
        "inline-flex max-w-full items-center gap-2 rounded-pill border px-3 py-1.5",
        "text-left font-mono text-xs whitespace-normal",
        tone === "accent" && "border-accent-line bg-accent-soft text-accent",
        tone === "neutral" && "border-border bg-surface text-muted",
        tone === "success" && "border-success/30 bg-success/10 text-success",
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
/* TechTag                                                             */
/* ------------------------------------------------------------------ */

export function TechTag({ label, tone = "neutral" }: { label: string; tone?: "accent" | "neutral" }) {
  return (
    <span
      className={cn(
        "rounded-tag px-2 py-0.5 font-mono text-xs",
        tone === "accent"
          ? "bg-accent-soft text-accent"
          : "bg-surface-2 text-muted",
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
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
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
          <span aria-hidden="true" className="mt-0.5 text-accent">
            ▸
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
