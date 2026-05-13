import { PageHero } from "@/components/PageHero";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Scale,
  Zap,
  Shield,
  Network,
  Crown,
  Cpu,
} from "lucide-react";

export const Route = createFileRoute("/our-approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Strategic Foresight, Compliance-Driven IT, AI-Driven Operations" },
      {
        name: "description",
        content:
          "Henagon's six-pillar approach combines strategic foresight, financial sturdiness, competitive tenacity, leadership prowess, value enhancement, and AI-driven operations.",
      },
      {
        property: "og:title",
        content: "Our Approach — Strategic Foresight, Compliance-Driven IT, AI-Driven Operations",
      },
      {
        property: "og:description",
        content:
          "Six pillars applied consistently across every Henagon engagement to deliver durable business growth in the digital era.",
      },
    ],
  }),
  component: OurApproachPage,
});

const pillars = [
  {
    icon: Compass,
    title: "Strategic Precision",
    body: "Being part of Henagon can allow the business to reach new markets, both geographically and demographically. This can significantly boost sales and profitability.",
  },
  {
    icon: Scale,
    title: "Value Amplification through a Compliance-Driven IT Model",
    body: "Beyond acquisitions and mergers, we dedicate ourselves to enhancing business value. Implementing a Compliance-Driven IT model, we ensure data accuracy, process optimization, proactive compliance, and harness the power of data analytics. This transforms each venture into a success story, providing a competitive edge in the digital age.",
  },
  {
    icon: Zap,
    title: "Financial Robustness",
    body: "The acquisition can increase the bargaining power with suppliers, customers, and partners due to the larger corporation's stronger market presence.",
  },
  {
    icon: Shield,
    title: "Competitive Resilience",
    body: "We have a diversified portfolio, which can help mitigate risks associated with smaller business operations.",
  },
  {
    icon: Network,
    title: "Innovative Synergy",
    body: "We foster cross-functional collaboration and leverage cutting-edge technologies to amplify value within our portfolio, driving collective growth and market differentiation. Through strategic partnerships, we create synergistic ecosystems that maximize operational efficiency, accelerate product development, and enhance customer experience, shaping the future of IT services. Join us at Henagon, where innovative synergy propels growth and redefines industry standards.",
  },
  {
    icon: Crown,
    title: "Leadership Excellence",
    body: "Employees of the acquired business may find more opportunities for career advancement within the larger setup.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Operations",
    body: "Pattern recognition, automation, and tool-agnostic orchestration applied across every engagement. Our SOC Tier-1 is 100% AI; our managed services run on AIOps and self-healing workflows. Humans supervise; AI executes — and the difference shows up as fewer tickets, faster MTTR, and continuous compliance.",
    isNew: true,
  },
];

function OurApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Our Approach" }]}
        title="Approach which delivers efficiency."
        subtitle="Six pillars — strategic, financial, competitive, leadership, value, and AI-driven — applied consistently across every engagement."
      />

      {/* A Transformative Journey */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">A Transformative Journey</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Where excellence becomes the norm.</h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground">
          <p>Embark on a transformative journey with Henagon, where strategic foresight, financial sturdiness, competitive tenacity, leadership prowess, and value enhancement converge to redefine business excellence.</p>
          <p>Our approach transcends mere acquisitions and mergers; it catalyzes sustainable business growth and innovation in the digital era. By meticulously integrating these elements, we set new standards for success, driving businesses to reach their full potential and thrive in dynamic market landscapes.</p>
          <p>At Henagon, we cultivate an environment where innovation flourishes and excellence is the norm. Join us as we pave the way for a future where businesses thrive, fueled by our holistic approach to growth and success.</p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Core Pillars</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Core Pillars of Our Approach</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/40 hover:shadow-lg"
              >
                {p.isNew && (
                  <span className="absolute right-4 top-4 rounded-full bg-[var(--mint)]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--mint)]">
                    New
                  </span>
                )}
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-accent)] text-[var(--navy)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-[var(--navy)] shadow-[var(--shadow-glow)] sm:w-auto"
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
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to apply the approach to your business?</h3>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-[var(--navy)]"
            >
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
