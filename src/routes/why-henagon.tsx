import { PageHero } from "@/components/PageHero";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, ShieldCheck, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/why-henagon")({
  head: () => ({
    meta: [
      { title: "Why Henagon — The Most Trusted Growth Partner for AI-Era IT" },
      {
        name: "description",
        content:
          "Henagon is a vertically integrated AI operator with 30 years of customer trust, a complete AI stack, and a compliance-first posture. Three reasons clients and partners choose Henagon as their growth partner.",
      },
      { property: "og:title", content: "Why Henagon — The Most Trusted Growth Partner for AI-Era IT" },
      {
        property: "og:description",
        content:
          "Henagon is a vertically integrated AI operator with 30 years of customer trust, a complete AI stack, and a compliance-first posture. Three reasons clients and partners choose Henagon as their growth partner.",
      },
      { property: "og:url", content: "https://www.henagon.com/why-henagon" },
    ],
    links: [
      { rel: "canonical", href: "https://www.henagon.com/why-henagon" },
    ],
  }),
  component: WhyHenagonPage,
});

const reasons = [
  {
    icon: Layers,
    title: "Complete AI Stack",
    body: "Vertical integration across compute, hosting, security, agents, and solutions — rare for any partner at our size. It means one accountable team from silicon to outcome, with no integration tax between layers.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Operating Chassis",
    body: "30 years of customer trust, Fortune-10 engagements, $11M of R&D investment, and CERT-IN and SOC-2 credentials. Centers of Excellence that turn execution into a repeatable system, not a one-off.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance-First Posture",
    body: "Every layer is governed and audit-ready by default — SOC-2 Type II, CERT-IN, ISO 27001, HIPAA, PCI-DSS, GDPR, NIST. Compliance is a feature of the platform, not a checklist.",
  },
];

const stats = [
  { k: "30 Years", v: "Operating history" },
  { k: "60+", v: "Full-time team" },
  { k: "500+", v: "Projects delivered" },
  { k: "$11M", v: "R&D invested" },
  { k: "2", v: "Data centers (Rochester, NY and Dallas, TX)" },
  { k: "100%", v: "AI-driven Tier-1 SOC" },
];

const compliance = ["CERT-IN Empaneled", "SOC-2 Type II", "ISO 27001", "HIPAA", "PCI-DSS", "GDPR", "NIST"];

function WhyHenagonPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Henagon"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Why Henagon" }]}
        title="Elevate with the Most Trusted Growth Partner."
        subtitle="A 30-year operator with a complete AI stack and a compliance-first posture — vertically integrated and accountable end-to-end."
      />

      {/* Why Henagon */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Why Henagon</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Architects of your next chapter.</h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground">
          <p>At Henagon, we redefine the traditional role of business acquisition and investment partners. Our mission extends beyond mere acquisition to elevate each entity to unprecedented success in the dynamic business landscape.</p>
          <p>Through a collaborative approach, we seamlessly integrate businesses and cultivate their latent potential. As strategic architects, we sculpt a trajectory of sustained growth, innovation, and enduring success.</p>
          <p>Selling your business to Henagon isn't just a transaction; it's a proposition of strategic advantage. With us, your business is propelled to new heights of excellence, fortified against challenges, and poised for enduring success. Trust us to be architects of your business's next chapter, crafting a narrative of growth, resilience, and unparalleled success.</p>
        </div>
      </section>

      {/* Three Reasons */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Three Reasons</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Three Reasons to Choose Henagon</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/40 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{r.title}</h3>
                <p className="mt-3 text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-[hsl(210_40%_98%)] text-foreground">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--cyan)]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[var(--mint)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">By the numbers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Stats at a Glance</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-card p-6 backdrop-blur">
                <div className="bg-[var(--gradient-accent)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                  {s.k}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Ribbon */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Compliance</p>
        <h2 className="sr-only">Compliance Ribbon</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {compliance.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              <BadgeCheck className="h-4 w-4 text-[var(--mint)]" />
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center text-foreground shadow-sm sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--cyan)]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-[var(--mint)]/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to elevate with Henagon?</h3>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-white"
            >
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
