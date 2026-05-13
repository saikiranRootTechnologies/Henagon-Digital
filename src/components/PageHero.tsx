import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import heroGraphic from "@/assets/hero-graphic.png";

export type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, subtitle, breadcrumbs }: Props) {
  return (
    <section
      className="relative overflow-hidden border-b border-border bg-white"
      style={{ minHeight: "40vh" }}
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,oklch(0.85_0_0)_1px,transparent_0)] [background-size:24px_24px]"
      />
      {/* Right graphic — scaled down */}
      <img
        src={heroGraphic}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-auto max-w-[40%] select-none object-cover object-top opacity-90 lg:block"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20" style={{ minHeight: "40vh" }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
          >
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-[var(--cyan)]">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-[var(--navy)]/70">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--navy)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
            {eyebrow}
          </span>
        )}

        <h1 className={`${eyebrow ? "mt-5" : ""} max-w-3xl text-4xl font-bold tracking-tight text-[var(--navy)] sm:text-5xl lg:text-6xl`}>
          {title}
        </h1>
        {/* Cyan accent underline */}
        <span className="mt-5 block h-[3px] w-16 rounded-full bg-[var(--cyan)]" />

        {subtitle && (
          <p className="mt-5 max-w-[600px] text-lg text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
