/**
 * The page backdrop: two large blurred cyan glows over black.
 *
 * The reference ships this as a fixed 1920x960 SVG with feGaussianBlur. Rebuilt
 * here as CSS radial gradients so it scales to any viewport instead of being
 * letterboxed, and so it costs no extra request.
 *
 * Positions match the original: one glow upper-right (67% / 43%), one
 * lower-left (30% / 66%), both #008FC8 fading to transparent.
 *
 * Server component — nothing here is interactive. All decorative, so the whole
 * thing is aria-hidden and pointer-events-none.
 */
export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(48% 58% at 67% 40%, rgba(0,143,200,0.42) 0%, rgba(0,143,200,0) 70%)",
            "radial-gradient(42% 50% at 28% 68%, rgba(0,143,200,0.45) 0%, rgba(0,143,200,0) 70%)",
          ].join(","),
        }}
      />
      {/* Keeps the glows from washing out text where they overlap content. */}
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}
