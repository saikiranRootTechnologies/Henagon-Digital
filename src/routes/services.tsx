import { PageHero } from "@/components/PageHero";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Wallet,
  Sparkles,
  Crown,
  Shield,
  Cog,
  Cloud,
  ShieldCheck,
  Network,
  LayoutGrid,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Henagon Services — AI Hosting, AI Security, AI Agents, and Vertical AI" },
      {
        name: "description",
        content:
          "Henagon delivers private AI hosting, AI-led security and SOC, agentic development, and vertical AI solutions. A 30-year operator running every layer of the AI stack with US-only data residency and SOC-2 Type II governance.",
      },
      {
        property: "og:title",
        content: "Henagon Services — AI Hosting, AI Security, AI Agents, and Vertical AI",
      },
      {
        property: "og:description",
        content:
          "Henagon delivers private AI hosting, AI-led security and SOC, agentic development, and vertical AI solutions. A 30-year operator running every layer of the AI stack with US-only data residency and SOC-2 Type II governance.",
      },
      { property: "og:url", content: "https://www.henagon.com/services" },
    ],
    links: [
      { rel: "canonical", href: "https://www.henagon.com/services" },
    ],
  }),
  component: ServicesPage,
});

const pillars = [
  { icon: Target, title: "Strategic Precision", body: "Targeting businesses with strong cash flows, resilience to competition, and adaptability to changing technology landscapes." },
  { icon: Wallet, title: "Financial Robustness", body: "Focus on stable cash flows, ensuring consistent returns and financial stability." },
  { icon: Sparkles, title: "Innovative Synergy", body: "Develop cutting-edge technology investment plans, providing an extra layer of opportunity." },
  { icon: Crown, title: "Leadership Excellence", body: "Leverage robust processes to compound cash flows and optimize individual businesses within the portfolio." },
  { icon: Shield, title: "Competitive Resilience", body: "Navigate sectors with minimal threats, securing a foundation for enduring growth." },
  { icon: Cog, title: "Operational Proficiency", body: "Drive efficiency and consistency through process discipline, automation, and AI-led operations." },
];

const aiServices = [
  { icon: Cloud, title: "AI Hosting & Private Cloud", body: "Tenant-isolated private cloud and hybrid hosting, re-architected for GPU, inference, and US-only data residency. Migration from hyperscalers handled by our team." },
  { icon: ShieldCheck, title: "AI-Led Security & SOC", body: "Cybersecurity Center of Excellence — SOC-2 Type II, CERT-IN — with a 100% AI-driven Tier-1 SOC for machine-speed response. Humans run Tier-2 and above." },
  { icon: Network, title: "AI Agents & Development", body: "Agentic workflows, LLM pipelines, vertical copilots, and RAG platforms built on our own compute by an in-house AI development team." },
  { icon: LayoutGrid, title: "Vertical AI Solutions", body: "Industry-specific AI products via ezzisolutions.ai — healthcare workflow, continuous compliance, and a vertical AI factory pipeline." },
];

const whyPoints = [
  "Vertical integration across the entire stack — one accountable team from silicon to outcome.",
  "Compliance built in: CERT-IN Empaneled, SOC-2 Type II, ISO 27001, HIPAA, PCI-DSS, GDPR, NIST.",
  "30 years of operating discipline — Fortune-10 engagements and a 25+ year client relationship.",
  "AI as the operating substrate — not a bolt-on.",
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        title="Services that span every layer of the AI stack."
        subtitle="Compute, hosting, security, agents, and vertical AI — operated by one team, governed by one compliance posture."
      />

      {/* Core Investment Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Core Investment Pillars</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The discipline behind every engagement.</h2>
        </div>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="card-equal group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/40 hover:shadow-lg"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Services - NEW */}
      <section className="relative overflow-hidden bg-[hsl(210_40%_98%)] text-foreground">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--cyan)]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[var(--mint)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">AI Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built on our own stack.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Four production-grade AI service lines, integrated end-to-end and run by Henagon.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
            {aiServices.map((s) => (
              <div
                key={s.title}
                className="card-equal rounded-xl border border-border bg-card p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/50"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--navy)]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Henagon */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Why Henagon</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Why Clients Choose Henagon</h2>
          </div>
          <ul className="space-y-5">
            {whyPoints.map((pt) => (
              <li key={pt} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[var(--mint)]" />
                <span className="text-base text-muted-foreground sm:text-lg">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Strategic Growth Form */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Strategic Growth</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let's chart your next chapter.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Embark on a transformative journey with Henagon, where strategic foresight, financial sturdiness, competitive tenacity, leadership prowess, and value enhancement converge to redefine business excellence.
            </p>
          </div>
          <form className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Enter your name here"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-[var(--cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--cyan)]"
              />
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-[var(--cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--cyan)]"
              />
            </div>
            <input
              type="text"
              placeholder="Enter your company here"
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-[var(--cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--cyan)]"
            />
            <input
              type="tel"
              placeholder="Enter your phone here"
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-[var(--cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--cyan)]"
            />
            <textarea
              rows={5}
              placeholder="Enter your message here"
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-[var(--cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--cyan)]"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] sm:w-auto"
            >
              Submit <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center text-foreground shadow-sm sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--cyan)]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-[var(--mint)]/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to put the AI stack to work?</h3>
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
