import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Wallet,
  Shield,
  Cog,
  Sparkles,
  Crown,
  Server,
  Cloud,
  ShieldCheck,
  Network,
  LayoutGrid,
} from "lucide-react";
import aiStackVisual from "@/assets/ai-stack-visual.webp";
import whoWeAreLight from "@/assets/who-we-are-light.webp";
import heroGraphic from "@/assets/hero-graphic.webp";
import logoCoreIt from "@/assets/logos/coreit.webp";
import logoEzzisolutions from "@/assets/logos/ezzisolutions.webp";
import logoMatrixnodes from "@/assets/logos/matrixnodes.webp";
import logoRoot from "@/assets/logos/root.webp";
import logoEzzi from "@/assets/logos/ezzinet.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Henagon — Human-Driven AI for the Enterprise" },
      {
        name: "description",
        content:
          "Henagon is a 30-year technology operator powering the complete AI stack — compute, hosting, security, agents, and vertical solutions. Compliance-first, built to scale. Headquartered in the United States with two data centers and a Cybersecurity Center of Excellence.",
      },
      { property: "og:title", content: "Henagon — Human-Driven AI for the Enterprise" },
      {
        property: "og:description",
        content:
          "Henagon is a 30-year technology operator powering the complete AI stack — compute, hosting, security, agents, and vertical solutions. Compliance-first, built to scale. Headquartered in the United States with two data centers and a Cybersecurity Center of Excellence.",
      },
      { property: "og:url", content: "https://www.henagon.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://www.henagon.com/" },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Target, title: "Strategic Precision", body: "Targeting businesses with strong cash flows, resilience to competition, and adaptability to changing technology landscapes." },
  { icon: Wallet, title: "Financial Robustness", body: "Focus on stable cash flows, ensuring consistent returns and financial stability." },
  { icon: Shield, title: "Competitive Resilience", body: "Navigate sectors with minimal threats, securing a foundation for enduring growth." },
  { icon: Cog, title: "Operational Proficiency", body: "Drive efficiency and consistency through process discipline, automation, and AI-led operations." },
  { icon: Sparkles, title: "Innovative Synergy", body: "Develop cutting-edge technology investment plans, providing an extra layer of opportunity." },
  { icon: Crown, title: "Leadership Excellence", body: "Leverage robust processes to compound cash flows and optimize individual businesses within the portfolio." },
];

const stack = [
  { icon: Server, title: "01 — AI Compute", body: "Two tenant-ready data centers in Rochester, NY and Dallas, TX. GPU-capable, supply-constrained foundation for AI workloads." },
  { icon: Cloud, title: "02 — AI Hosting & Private Cloud", body: "Private cloud, managed hosting, and hybrid cloud — re-architected for GPU, inference, and data-sovereignty needs." },
  { icon: ShieldCheck, title: "03 — AI Security & Compliance", body: "Cybersecurity Center of Excellence with SOC-2 Type II, CERT-IN, and a 100% AI-driven Tier-1 SOC." },
  { icon: Network, title: "04 — AI Agents & Development", body: "Agentic systems, LLM pipelines, and enterprise copilots — built by Ezzi AI Solutions, Root Technologies, and Matrixnodes." },
  { icon: LayoutGrid, title: "05 — AI Solutions", body: "Vertical AI products via ezzisolutions.ai — starting with CareflowUSA for healthcare and continuous compliance dashboards." },
];

const groupCompanies = [
  { name: "Core IT", url: "https://coreitx.com/", logo: logoCoreIt, body: "A managed IT services and cybersecurity provider serving enterprise clients. Anchor company within the Henagon group." },
  { name: "Root Technologies", url: "https://roottechnologies.co.in/", logo: logoRoot, body: "Root Technologies is a leading IT Services integrator delivering world-class IT infrastructure services to customers PAN India." },
  { name: "Matrixnodes", url: "https://matrixnodes.com/", logo: logoMatrixnodes, body: "Digital business solutions and AI development — partner of choice for Fortune 500 enterprises navigating their digital transformation." },
  { name: "EZZI", url: "https://ezzi.net/", logo: logoEzzi, body: "Long-standing technology operator within the Henagon group; foundation of our hosting and managed services lineage." },
  { name: "ezzisolutions.ai", url: "https://ezzisolutions.ai/", logo: logoEzzisolutions, body: "Vertical AI products and solutions — the go-to-market engine for industry copilots, compliance dashboards, and the next wave of vertical AI from the Henagon platform." },
  { name: "CareflowUSA", url: "https://careflowusa.com/", logo: null, body: "AI-powered healthcare workflow platform. Streamlines care coordination, documentation, and operational flow for providers. HIPAA-aligned. Recurring SaaS." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white" style={{ minHeight: "80vh" }}>
        {/* Right graphic — absolutely positioned, bleeds to top & right edges */}
        <img
          src={heroGraphic}
          alt="Layered geometric plates representing the Henagon AI stack"
          className="pointer-events-none select-none absolute top-0 right-0 hidden lg:block h-full w-auto max-w-[55%] object-cover object-top-right"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-4 lg:px-8 lg:py-20" style={{ minHeight: "80vh" }}>
          {/* Left content (60%) */}
          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--navy)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
              Compliance-Driven IT
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--navy)] sm:text-5xl lg:text-6xl">
              Human-Driven AI for the{" "}
              <span className="text-[var(--cyan)]">Enterprise.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A 30-year technology operator now powering the complete AI stack — compute, hosting, security, agents, and vertical solutions. Compliance-first. Built to scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundImage: "linear-gradient(90deg, var(--cyan), var(--mint))" }}
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/ai-stack"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--navy)]/30 bg-transparent px-5 py-3 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--navy)]/5"
              >
                Explore the AI Stack
              </Link>
            </div>
          </div>

          {/* Right column spacer to preserve grid layout on desktop; image on mobile */}
          <div className="relative lg:col-span-2 lg:h-full">
            <img
              src={heroGraphic}
              alt="Layered geometric plates representing the Henagon AI stack"
              className="pointer-events-none select-none w-full lg:hidden"
            />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Who We Are</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Strategic prowess, compliance-driven IT.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              At Henagon, strategic prowess meets unwavering commitment to excellence. Specializing in acquiring, managing, and enhancing various IT services, we adhere to our unique compliance-driven IT model.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We focus on acquiring Managed IT Service Providers, ensuring seamless integration and mutual growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[var(--cyan)]/10 blur-3xl" />
            <img
              src={whoWeAreLight}
              alt="Layered illustration representing Henagon's strategic, compliance-driven IT approach"
              width={1024}
              height={1024}
              loading="lazy"
              className="rounded-2xl border border-border shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Empowering Partnership */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Empowering Partnership</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Synergy of strengths. Remarkable outcomes.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            At Henagon, we believe in the power of partnership. We collaborate closely with our portfolio companies, leveraging our expertise and resources to drive mutual success. Join us in creating a synergy of strengths and achieving remarkable outcomes together.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Core Pillars</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Six pillars. One operating discipline.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/40 hover:shadow-lg"
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

      {/* The Henagon AI Stack */}
      <section className="relative overflow-hidden bg-[hsl(210_40%_98%)] text-foreground">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--cyan)]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[var(--mint)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">The Henagon AI Stack</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The complete AI stack, run by one team.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Five layers — compute, hosting, security, agents, and vertical solutions — vertically integrated and governed end-to-end.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stack.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-card p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/50"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--navy)]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/ai-stack"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
            >
              See the full AI Stack <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Group of Companies */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Group of Companies</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Unleashing the potential of our diverse business ventures.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groupCompanies.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${c.name} website (opens in new tab)`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--mint)]/50 hover:shadow-xl"
            >
              <div className="flex h-[90px] items-center justify-start">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-[90px] w-auto max-w-[180px] object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-2xl font-bold tracking-tight text-[var(--navy)]">{c.name}</span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--navy)]">{c.name}</h3>
              <div className="mt-2 h-px w-12 bg-[var(--gradient-accent)]" />
              <p className="mt-4 text-sm text-muted-foreground">{c.body}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Business Portfolio teaser */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Business Portfolio</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Navigating growth across our portfolio.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We acquire, integrate, and operate technology businesses with a long-term, compliance-first posture.
          </p>
          <Link
            to="/business-portfolio"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            Explore the Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-foreground shadow-sm sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--cyan)]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-[var(--mint)]/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h3 className="max-w-xl text-2xl font-bold sm:text-3xl">
              Let's build your AI stack together.
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-white"
            >
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
