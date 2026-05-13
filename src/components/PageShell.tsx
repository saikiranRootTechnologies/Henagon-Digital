import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface PageShellProps {
  eyebrow: string;
  title: string;
  lede: string;
}

export function PageShell({ eyebrow, title, lede }: PageShellProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">{lede}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Let's design what's next.</h2>
          <p className="mt-3 text-muted-foreground">
            Schedule a working session with a Henagon principal.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-[var(--navy)] shadow-[var(--shadow-glow)]"
          >
            Book An Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
