import { PageHero } from "@/components/PageHero";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Layers,
  UserCheck,
  TrendingUp,
  GraduationCap,
  BadgeCheck,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/delivering-value")({
  head: () => ({
    meta: [
      { title: "Delivering Value — How Henagon Turns Acquisitions and AI into Outcomes" },
      {
        name: "description",
        content:
          "Acquisition with Henagon unlocks new markets, financial stability, AI-powered compliance, and outcome-driven operations. Continuous monitoring, self-healing automation, and SaaS-grade reliability — built on 30 years of operating discipline.",
      },
      {
        property: "og:title",
        content: "Delivering Value — How Henagon Turns Acquisitions and AI into Outcomes",
      },
      {
        property: "og:description",
        content:
          "Acquisition with Henagon unlocks new markets, financial stability, AI-powered compliance, and outcome-driven operations. Continuous monitoring, self-healing automation, and SaaS-grade reliability — built on 30 years of operating discipline.",
      },
      { property: "og:url", content: "https://www.henagon.com/delivering-value" },
    ],
    links: [
      { rel: "canonical", href: "https://www.henagon.com/delivering-value" },
    ],
  }),
  component: DeliveringValuePage,
});

const benefits = [
  { icon: Target, title: "Selective Acquisition Criteria", body: "Being part of Henagon can allow the business to reach new markets, both geographically and demographically. This can significantly boost sales and profitability." },
  { icon: ShieldCheck, title: "Improved Business Stability", body: "The financial stability of the larger corporation can provide a safety net for the acquired business, reducing the risk of financial distress." },
  { icon: Handshake, title: "Increased Bargaining Power", body: "The acquisition can increase the bargaining power with suppliers, customers, and partners due to the larger corporation's stronger market presence." },
  { icon: Lightbulb, title: "Innovation and Product Development", body: "The acquired firm can benefit from the larger organization's research and development capabilities, leading to new products or improved services." },
  { icon: Layers, title: "Risk Diversification", body: "We have a diversified portfolio, which can help mitigate risks associated with smaller business operations." },
  { icon: UserCheck, title: "Retaining Talent", body: "The larger setup may offer better compensation packages and benefits, helping to retain key talent." },
  { icon: TrendingUp, title: "Career Opportunities for Employees", body: "Employees of the acquired business may find more opportunities for career advancement within the larger setup." },
  { icon: GraduationCap, title: "Learning and Growth", body: "The acquisition can provide an opportunity for the business to learn from the best practices of the larger one, leading to operational efficiencies and growth." },
];

const aiBenefits = [
  { icon: BadgeCheck, title: "AI-Powered Compliance", body: "Continuous control monitoring across NIST, ISO 27001, SOC-2, HIPAA, PCI-DSS, and GDPR — turning audits from months into hours and replacing point-in-time reviews with always-on assurance." },
  { icon: Activity, title: "Outcome-Driven Operations", body: "99.9% uptime, 40% fewer tickets through self-healing automation, and 60% faster mean time to resolution. We bill for outcomes, not labor hours." },
];

function DeliveringValuePage() {
  return (
    <>
      <PageHero
        eyebrow="Delivering Value"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Delivering Value" }]}
        title="Precision in Value Delivery."
        subtitle="Henagon turns acquisitions, AI, and compliance into measurable outcomes — for the businesses we operate and the clients we serve."
      />

      {/* Elevating Solutions */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Technical Excellence</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Elevating Solutions Through Henagon's Technical Excellence.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground">
          <p>In the dynamic landscape of business, mergers and acquisitions play a pivotal role in driving growth and reshaping industries. When a business is acquired, it can unlock a plethora of opportunities. This transition, while potentially challenging, brings forth numerous advantages, such as access to new markets, enhanced resources, and increased financial stability.</p>
          <p>One of the key benefits often overlooked is the potential for synergies — the idea that the combined value and performance of two companies will exceed the sum of their parts. Synergies, whether they are cost, revenue, operational, or financial, can lead to heightened efficiency, reduced costs, and boosted revenues, thereby enhancing the overall performance and value of the merged entity.</p>
          <p>In conclusion, while an acquisition can bring about changes, it can also open up a world of opportunities for the business, its founders, and its employees.</p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Partnership Benefits</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Transformative Success — Partnership Benefits with Henagon
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/40 hover:shadow-lg"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
            {aiBenefits.map((b) => (
              <div
                key={b.title}
                className="relative overflow-hidden rounded-xl border border-[var(--cyan)]/40 bg-card p-6 text-foreground shadow-sm transition-all hover:-translate-y-0.5"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--cyan)]/20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[var(--mint)]/20 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[var(--mint)]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--mint)]">
                      AI
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Growth Form */}
      <section className="bg-background">
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
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to turn capability into outcomes?</h3>
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
