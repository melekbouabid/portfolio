/**
 * Ambient page chrome: film grain, the hero grid, and two blurred glow orbs.
 * All decorative, all aria-hidden, all pointer-events-none. Server component —
 * nothing here is interactive.
 */
export function Backdrop() {
  return (
    <>
      <div aria-hidden="true" className="noise-overlay" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="grid-backdrop absolute inset-x-0 top-0 h-[100svh]" />
        <div className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-accent opacity-[0.06] blur-[120px]" />
        <div className="absolute top-40 right-0 size-72 rounded-full bg-sky opacity-[0.05] blur-[100px]" />
      </div>
    </>
  );
}
