import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import {
  ArrowRight,
  Server,
  Cloud,
  Shield,
  Bot,
  Sparkles,
  MapPin,
  Zap,
  Cpu,
  Database,
  Lock,
  Network,
  Eye,
  Activity,
  CircuitBoard,
  CheckCircle2,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/ai-stack")({
  head: () => ({
    meta: [
      { title: "The Henagon AI Stack — From Silicon to Solutions, Run by One Team" },
      {
        name: "description",
        content:
          "Henagon operates every layer of AI — compute, hosting, security, agents, and vertical solutions — vertically integrated on a 30-year operating chassis.",
      },
      { property: "og:title", content: "The Henagon AI Stack — From Silicon to Solutions" },
      {
        property: "og:description",
        content:
          "Two data centers, 100% AI-driven Tier-1 SOC, and SOC-2 Type II compliance built in.",
      },
    ],
  }),
  component: AIStack,
});

const COMPLIANCE = [
  "CERT-IN Empaneled",
  "SOC-2 Type II",
  "ISO 27001",
  "HIPAA",
  "PCI-DSS",
  "GDPR",
  "NIST",
];

function LayerEyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="rounded-md border border-[var(--cyan)]/40 bg-transparent px-2 py-1 font-mono text-xs font-semibold text-[var(--cyan)]">
        {n}
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--mint)]">
        {label}
      </span>
    </div>
  );
}

function AIStack() {
  return (
    <>
      <PageHero
        eyebrow="The Complete AI Stack"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "AI Stack" }]}
        title={<>From silicon to solutions — <span className="text-[var(--cyan)]">every layer of AI</span>, run by one team.</>}
        subtitle="A vertically integrated AI platform built on 30 years of operating discipline. Compute, hosting, security, agents, and vertical solutions — owned, governed, and delivered by Henagon."
      />

      <div className="bg-[#0F172A] text-white">
      {/* Stack visualization — 5 layers */}
      <section className="border-b border-[var(--cyan)]/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--cyan)] bg-[var(--cyan)] px-5 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-[var(--mint)] hover:border-[var(--mint)]"
            >
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/business-portfolio"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--cyan)]/40 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan)]"
            >
              Explore Our Companies
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              { n: "01", label: "Compute", icon: Server },
              { n: "02", label: "Hosting", icon: Cloud },
              { n: "03", label: "Security", icon: Shield },
              { n: "04", label: "Agents", icon: Bot, ai: true },
              { n: "05", label: "Solutions", icon: Sparkles, ai: true },
            ].map((l) => (
              <div
                key={l.n}
                className={`rounded-lg border bg-transparent p-4 transition-colors ${
                  l.ai
                    ? "border-[var(--mint)]/50 hover:border-[var(--mint)]"
                    : "border-[var(--cyan)]/40 hover:border-[var(--cyan)]"
                }`}
              >
                <l.icon className={`h-5 w-5 ${l.ai ? "text-[var(--mint)]" : "text-[var(--cyan)]"}`} />
                <p className="mt-2 font-mono text-[10px] text-white/60">{l.n}</p>
                <p className="text-xs font-semibold text-white">{l.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYER 01 — COMPUTE */}
      <section className="border-b border-[var(--cyan)]/15">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <LayerEyebrow n="01" label="AI Compute" />
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Two data centers. Two strategic geographies.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-white/70">
            The foundation of the AI stack is physical: tenant-ready, GPU-capable compute in
            supply-constrained markets. Henagon operates two data centers — Rochester, NY for the
            Northeast corridor and Dallas, TX as a Sunbelt hub. Real estate, power, cooling, and
            connectivity are tuned for AI workloads, with East-Coast redundancy and low-latency
            reach into financial and energy verticals.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Rochester, NY — Northeast Corridor",
                bullets: [
                  "Northeast-corridor proximity to enterprise and healthcare demand.",
                  "Cooler climate — lower PUE, lower cooling cost.",
                  "Upstate NY power grid with a clean-energy mix.",
                  "Strategic East-Coast redundancy for clients.",
                ],
              },
              {
                title: "Dallas, TX — Sunbelt Hub",
                bullets: [
                  "#2 US data-center metro by capacity.",
                  "ERCOT grid with competitive power pricing.",
                  "Low regulatory friction and fast permit cycles.",
                  "Low-latency reach into financial and energy verticals.",
                ],
              },
            ].map((dc) => (
              <div
                key={dc.title}
                className="relative overflow-hidden rounded-2xl border border-[var(--cyan)]/30 bg-transparent p-8 "
              >
                <div className="relative flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[var(--gradient-accent)] text-[var(--navy)]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{dc.title}</h3>
                  </div>
                </div>
                <ul className="relative mt-6 space-y-3">
                  {dc.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--mint)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYER 02 — HOSTING */}
      <section className="border-b border-[var(--cyan)]/15">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <LayerEyebrow n="02" label="AI Hosting & Private Cloud" />
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Private cloud. Built for AI workloads.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-white/70">
            Managed hosting and hybrid cloud, re-architected for GPU, inference, and
            data-sovereignty needs. We were running clouds before they were called clouds; today
            the same operations team delivers AI-workload-ready environments with US-only data
            residency for regulated verticals.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Lock, title: "Private Cloud", body: "Dedicated, tenant-isolated environments with full data isolation." },
              { icon: Server, title: "Managed Hosting", body: "OS, application, database, and platform operations delivered as a service." },
              { icon: Cloud, title: "Hybrid Cloud", body: "A seamless fabric across our data centers and the public clouds you already use." },
              { icon: Cpu, title: "AI-Workload Ready", body: "GPU slicing, vector databases, and inference endpoints provisioned on demand." },
              { icon: Database, title: "Data Sovereignty", body: "US-only residency for healthcare, financial services, and other regulated verticals." },
              { icon: Zap, title: "Migration Services", body: "Lift-and-shift from hyperscalers into the Henagon cloud, planned and executed by our team." },
            ].map((c) => (
              <div
                key={c.title}
                className="group rounded-xl border border-[var(--cyan)]/30 bg-transparent p-6 transition-all hover:border-[var(--cyan)]"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--cyan)]/15 text-[var(--cyan)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/65">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYER 03 — SECURITY */}
      <section className="border-b border-[var(--cyan)]/15">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <LayerEyebrow n="03" label="AI Security & Compliance" />
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Cybersecurity as a capability — not a stack of tools.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-white/70">
            Most security failures are alignment failures, not control gaps. The Henagon
            Cybersecurity Center of Excellence integrates IT, security, and compliance into a
            single operating capability — governed continuously, augmented by AI, and aligned to
            the frameworks our clients are audited against. Six pillars, one team, one accountable
            outcome.
          </p>

          <div className="mt-10 rounded-2xl border border-[var(--cyan)]/40 bg-transparent p-8">
            <Quote className="h-6 w-6 text-[var(--cyan)]" />
            <p className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
              Our Tier-1 SOC is{" "}
              <span className="text-[var(--mint)]">100% AI</span>
              . Humans analyze. AI triages, correlates, and responds.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: CircuitBoard, n: "Pillar 1", title: "Governance & Intelligence", body: "Frameworks translated into controls; continuous threat intelligence and advisory." },
              { icon: Eye, n: "Pillar 2", title: "Risk & Threat Visibility", body: "Continuous correlation across users, systems, and signals." },
              { icon: Lock, n: "Pillar 3", title: "Identity & Endpoint", body: "Zero-trust access, device posture, and modern EDR." },
              { icon: Network, n: "Pillar 4", title: "Network & Infrastructure", body: "Consistent hardening across hybrid environments." },
              { icon: Activity, n: "Pillar 5", title: "Detection, Response & Recovery", body: "100% AI-driven Tier-1 SOC; humans run Tier-2 and above." },
              { icon: Bot, n: "Pillar 6", title: "AI-Enabled Operations", body: "Pattern recognition, automation, and tool-agnostic orchestration." },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-[var(--cyan)]/30 bg-transparent p-6 transition-all hover:border-[var(--mint)]"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--mint)]/15 text-[var(--mint)]">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    {p.n}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[var(--cyan)]/30 bg-transparent p-5">
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <Shield className="h-4 w-4 text-[var(--mint)]" />
                Compliance & Certifications
              </div>
              <ul className="flex flex-wrap gap-2">
                {COMPLIANCE.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-[var(--cyan)]/40 bg-transparent px-3 py-1 text-xs font-medium text-white"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 04 — AGENTS */}
      <section className="border-b border-[var(--cyan)]/15">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <LayerEyebrow n="04" label="AI Agents & Development" />
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Our development practice has pivoted to AI.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-white/70">
            The same team that built 500+ custom projects is now building AI agents on our own
            compute stack. Agentic workflows, LLM-orchestrated automation, vertical copilots, and
            retrieval-augmented generation — delivered on private infrastructure with the security
            and compliance posture our enterprise clients require.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--cyan)]/40 bg-transparent">
            <div className="grid grid-cols-2 border-b border-[var(--cyan)]/15 bg-white/[0.04]">
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Before
                </p>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan)]">
                  After
                </p>
              </div>
            </div>
            {[
              ["Custom dashboards", "Agentic analytics copilots"],
              ["Rule-based RPA bots", "LLM-orchestrated workflows"],
              ["Mobile and web apps", "AI-embedded experiences"],
              ["BI / reporting layers", "Natural-language data agents"],
              ["Integration projects", "Agent-to-agent orchestration"],
              ["Custom development", "Vertical AI solution factories"],
            ].map(([before, after], i) => (
              <div
                key={before}
                className={`grid grid-cols-2 `}
              >
                <div className="border-r border-[var(--cyan)]/15 px-5 py-4 text-sm text-white/55 line-through decoration-white/30">
                  {before}
                </div>
                <div className="flex items-center gap-2 px-5 py-4 text-sm font-medium text-white">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--mint)]" />
                  {after}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--mint)]/40 bg-transparent p-8">
            <Quote className="h-6 w-6 text-[var(--mint)]" />
            <p className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
              Powered by{" "}
              <span className="text-[var(--cyan)]">Ezzi AI Solutions</span>,{" "}
              <span className="text-[var(--cyan)]">Root Technologies</span>, and{" "}
              <span className="text-[var(--cyan)]">Matrixnodes</span> — our integrated AI
              development team.
            </p>
          </div>
        </div>
      </section>

      {/* LAYER 05 — SOLUTIONS */}
      <section className="border-b border-[var(--cyan)]/15">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <LayerEyebrow n="05" label="AI Solutions" />
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Vertical AI solutions, delivered through ezzisolution.ai.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-white/70">
            Industry-specific AI products built on our own stack — launched in healthcare, in build
            for compliance, and pipelined for the next wave of vertical applications.
            ezzisolution.ai operates as a vertical AI factory: a repeatable playbook that takes new
            solutions from concept to market.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "LAUNCHED",
                tagClass: "bg-[var(--mint)]/15 text-[var(--mint)] border-[var(--mint)]/30",
                title: "CareflowUSA",
                body: "AI-powered healthcare workflow platform. Streamlines care coordination, documentation, and operational flow for providers. Recurring SaaS. HIPAA-aligned.",
              },
              {
                tag: "IN BUILD",
                tagClass: "bg-[var(--cyan)]/15 text-[var(--cyan)] border-[var(--cyan)]/30",
                title: "Compliance Dashboards",
                body: "AI-driven continuous control monitoring — maps controls across NIST, ISO 27001, SOC-2, HIPAA, and GDPR. Audits in hours, not months.",
              },
              {
                tag: "PIPELINE",
                tagClass: "bg-white/10 text-white/70 border-white/20",
                title: "Vertical AI Factory",
                body: "A capital-efficient model that reuses the underlying stack to bring new vertical AI products to market quickly.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[var(--cyan)]/30 bg-transparent p-7 "
              >
                <span
                  className={`relative inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider ${s.tagClass}`}
                >
                  {s.tag}
                </span>
                <h3 className="relative mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-3 text-sm text-white/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-[var(--cyan)]/15">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why It Matters</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "30 Years", label: "Operating history" },
              { stat: "100%", label: "AI Tier-1 SOC" },
              { stat: "2", label: "Data centers (Rochester, NY and Dallas, TX)" },
              { stat: "500+", label: "Projects delivered" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-[var(--cyan)]/50 pl-5">
                <p className="text-4xl font-bold tracking-tight text-[var(--mint)] sm:text-5xl">
                  {s.stat}
                </p>
                <p className="mt-3 text-sm text-white/65">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--cyan)]/40 bg-transparent p-12 text-center sm:p-16">
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build your AI stack together.
          </h2>
          <Link
            to="/contact-us"
            className="relative mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-[var(--navy)] "
          >
            Talk to Our Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
