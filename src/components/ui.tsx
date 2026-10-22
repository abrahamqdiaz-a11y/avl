import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline" | "light";
};

const variants = {
  primary: "bg-sage-600 text-white hover:bg-sage-700 shadow-sm shadow-ink/10",
  outline: "border border-sage-600/40 text-sage-700 hover:border-sage-600 hover:bg-sage-50",
  light: "bg-white text-ink hover:bg-sage-50",
};

export function ButtonLink({ variant = "primary", className = "", ...rest }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...rest}
    />
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
  center = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div className={`mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="gold-rule" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700">{eyebrow}</p>
      </div>
      <h2 id={id} className="text-4xl leading-[1.1] sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-ink-soft">{children}</p>}
    </div>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid size-9 place-items-center rounded-full ${light ? "bg-white/10" : "bg-sage-600"}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M19 14.2A7.5 7.5 0 1 1 9.8 5a6 6 0 0 0 9.2 9.2Z"
            stroke="#E6D3A3"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="whitespace-nowrap leading-none">
        <span className={`block font-serif text-xl font-semibold ${light ? "text-white" : "text-ink"}`}>
          Avida Luna
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${light ? "text-sage-300" : "text-sage-700"}`}
        >
          Wellness
        </span>
      </span>
    </span>
  );
}

// Lucide no longer ships brand marks, so these two are drawn inline.
export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
    </svg>
  );
}
