import { PageHero } from "@/components/PageHero";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  TrendingUp,
  LifeBuoy,
  Rocket,
  Cog,
  Wallet,
  Award,
  Cpu,
} from "lucide-react";

export const Route = createFileRoute("/advantage")({
  head: () => ({
    meta: [
      { title: "Henagon Advantage+ — Compliance-Driven IT, AI-Native Capability" },
      {
        name: "description",
        content:
          "Considering a sale of your managed IT services business? Henagon Advantage+ delivers a fair, transparent acquisition process backed by a Compliance-Driven IT model and an AI-native capability stack. Sustained growth, post-acquisition.",
      },
      { property: "og:title", content: "Henagon Advantage+ — Compliance-Driven IT, AI-Native Capability" },
      {
        property: "og:description",
        content:
          "Considering a sale of your managed IT services business? Henagon Advantage+ delivers a fair, transparent acquisition process backed by a Compliance-Driven IT model and an AI-native capability stack. Sustained growth, post-acquisition.",
      },
      { property: "og:url", content: "https://www.henagon.com/advantage" },
    ],
    links: [
      { rel: "canonical", href: "https://www.henagon.com/advantage" },
    ],
  }),
  component: AdvantagePage,
});

const advantages = [
  { icon: TrendingUp, title: "Maximized Value", body: "Our fair evaluation and value-centric approach ensure you receive the true worth of your business." },
  { icon: LifeBuoy, title: "Comprehensive Support", body: "Beyond the acquisition, our commitment to your business's success means ongoing support in navigating the digital landscape." },
  { icon: Rocket, title: "Strategic Growth", body: "With a focus on Compliance-Driven IT, we position your business for sustained growth and resilience in the face of technological shifts." },
  { icon: Cog, title: "Operational Excellence", body: "Benefit from our operational proficiency, which enhances the efficiency and effectiveness of your business." },
  { icon: Wallet, title: "Financial Stability", body: "Henagon's solid financial foundation provides stability and reliability, ensuring continued success post-acquisition." },
  { icon: Award, title: "Industry Experience", body: "Selling your business to Henagon leverages our deep industry expertise in the IT sector. With a proven track record, we understand market nuances, identify growth opportunities, and optimize operations, ensuring a smooth transition for your business within our portfolio." },
];

const aiAdvantage = {
  icon: Cpu,
  title: "AI-Native Capability",
  body: "Every advantage now compounds with our AI stack — GPU compute, AI-led SOC, agentic workflows, and vertical AI solutions. Acquired businesses inherit the platform on day one.",
};

function AdvantagePage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic Brilliance"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Advantage" }]}
        title="Henagon Advantage+ for Transformative Success."
        subtitle="A fair, value-centric acquisition process backed by an AI-native operating platform — compliance-first, growth-ready."
      />

      {/* Introducing */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Introducing Henagon Advantage+</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          A fair process. A growth platform. A long-term home.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground">
          <p>Are you a managed IT services provider contemplating the prospect of acquisition? Look no further. At Henagon, we stand as seasoned experts in business acquisitions, committed to not only ensuring a smooth transition but also propelling subsequent growth for the companies we acquire.</p>
          <p>Our dedication encompasses various facets — efficiency, assurance, equity, transparency, proficiency, and dignity. Infused with robust operational knowledge, synergies, and an unwavering commitment to fair practices, our meticulously crafted methodology is designed to metamorphose your business potential into tangible success.</p>
          <p>Anchored by our Compliance-Driven IT model, our commitment extends beyond acquisition, ensuring your business remains competitive in the digital age. Through the integration of cutting-edge technologies, we not only safeguard your business but propel it forward, maintaining a competitive edge.</p>
        </div>
      </section>

      {/* The Henagon Advantage+ */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">The Henagon Advantage+</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Seven advantages, compounded.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/40 hover:shadow-lg"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
              </div>
            ))}
            {/* AI-Native Capability — distinct treatment */}
            <div className="relative overflow-hidden rounded-xl border border-[var(--cyan)]/40 bg-card p-6 text-foreground shadow-sm transition-all hover:-translate-y-0.5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--cyan)]/20 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[var(--mint)]/20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                    <aiAdvantage.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[var(--mint)]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--mint)]">
                    AI
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{aiAdvantage.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{aiAdvantage.body}</p>
              </div>
            </div>
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
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to explore Advantage+?</h3>
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
