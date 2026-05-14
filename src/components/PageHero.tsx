import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import heroGraphic from "@/assets/hero-graphic.webp";

export type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  accentGradient?: boolean;
  dark?: boolean;
  backgroundImage?: string;
};

export function PageHero({ eyebrow, title, subtitle, breadcrumbs, accentGradient, dark, backgroundImage }: Props) {
  return (
    <section
      className={`relative overflow-hidden border-b ${
        dark ? "border-[var(--cyan)]/20" : "border-border bg-white"
      }`}
      style={{ minHeight: "40vh", ...(dark ? { backgroundColor: "#020617" } : {}) }}
    >
      {/* Background image (dark hero) */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            // @ts-ignore - valid HTML attr
            fetchpriority="high"
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-0 transition-opacity duration-300"
          />
          {/* Legibility overlay: stronger on the left where text sits */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.78) 35%, rgba(2,6,23,0.45) 70%, rgba(2,6,23,0.25) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0) 30%, rgba(2,6,23,0) 70%, rgba(2,6,23,0.55) 100%)",
            }}
          />
        </>
      )}
      {/* Subtle dot grid */}
      {!backgroundImage && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 ${
            dark
              ? "opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,oklch(0.85_0.05_200)_1px,transparent_0)]"
              : "opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,oklch(0.85_0_0)_1px,transparent_0)]"
          } [background-size:24px_24px]`}
        />
      )}
      {/* Ambient glow for dark theme */}
      {dark && !backgroundImage && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.18), transparent)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(52,211,153,0.14), transparent)" }}
          />
        </>
      )}
      {/* Right graphic — only when not using a custom background image */}
      {!backgroundImage && (
        <img
          src={heroGraphic}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-0 hidden h-full w-auto max-w-[40%] select-none object-cover object-top lg:block ${
            dark ? "opacity-30 mix-blend-screen" : "opacity-90"
          }`}
        />
      )}

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20" style={{ minHeight: "40vh" }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={`mb-5 flex flex-wrap items-center gap-1.5 text-xs ${
              dark ? "text-white/75" : "text-muted-foreground"
            }`}
          >
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-[var(--cyan)]">
                    {c.label}
                  </Link>
                ) : (
                  <span className={dark ? "text-white/80" : "text-[var(--navy)]/70"}>{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span
            className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
              dark
                ? "border-[var(--cyan)]/40 bg-white/5 text-white"
                : "border-border bg-white text-[var(--navy)]"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
            {eyebrow}
          </span>
        )}

        <h1
          className={`${eyebrow ? "mt-5" : ""} max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
            dark ? "text-white" : "text-[var(--navy)]"
          }`}
        >
          {title}
        </h1>
        {/* Accent underline */}
        {accentGradient ? (
          <span className="mt-5 block h-[4px] w-20 rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--mint)]" />
        ) : (
          <span className="mt-5 block h-[3px] w-16 rounded-full bg-[var(--cyan)]" />
        )}

        {subtitle && (
          <p className={`mt-5 max-w-[600px] text-lg ${dark ? "text-white/75" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
