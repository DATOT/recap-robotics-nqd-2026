import type { ReactNode } from "react";

export function SlideKicker({ number, label, inverse = false }: { number: string; label: string; inverse?: boolean }) {
  return (
    <div className={`slide-kicker${inverse ? " slide-kicker-inverse" : ""}`}>
      <span className="kicker-number">{number}</span>
      <span className="kicker-line" />
      <span>{label}</span>
      <span className="kicker-spark" aria-hidden="true">✳</span>
    </div>
  );
}

export function SlideHeading({ children }: { children: ReactNode }) {
  return <h2 className="slide-heading">{children}</h2>;
}

export function PhotoPlaceholder({ label, size, inverse = false }: { label: string; size: string; inverse?: boolean }) {
  return (
    <div className={`photo-placeholder ${size}${inverse ? " photo-placeholder-inverse" : ""}`} role="img" aria-label={`Image placeholder: ${label}`}>
      <span className="photo-corner photo-corner-tl" aria-hidden="true" />
      <span className="photo-corner photo-corner-br" aria-hidden="true" />
      <span className="photo-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="5" width="24" height="22" rx="3" /><circle cx="11" cy="12" r="2.5" /><path d="m6 24 7-7 5 5 3-3 5 5" /></svg>
      </span>
      <span className="photo-label">{label}</span>
      <span className="photo-instruction">DROP PHOTO HERE</span>
    </div>
  );
}
