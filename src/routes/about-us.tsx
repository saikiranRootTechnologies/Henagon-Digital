import { PageHero } from "@/components/PageHero";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Henagon — An AI-Native Operator With 30 Years of Discipline" },
      {
        name: "description",
        content:
          "Henagon is a 30-year technology operator that runs AI as the operating substrate across compute, hosting, security, agents, and vertical solutions. Discover how three decades of operating discipline now power our AI-native posture.",
      },
      { property: "og:title", content: "About Henagon — An AI-Native Operator With 30 Years of Discipline" },
      {
        property: "og:description",
        content:
          "Henagon is a 30-year technology operator that runs AI as the operating substrate across compute, hosting, security, agents, and vertical solutions. Discover how three decades of operating discipline now power our AI-native posture.",
      },
      { property: "og:url", content: "https://www.henagon.com/about-us" },
    ],
    links: [
      { rel: "canonical", href: "https://www.henagon.com/about-us" },
    ],
  }),
  component: AboutPage,
});

const narrative = [
  {
    heading: "Empowering Partnership — Fostering Collaborative Success",
    body: "At Henagon, we believe in the power of partnership. We collaborate closely with our portfolio companies, leveraging our expertise and resources to drive mutual success. By fostering a culture of trust, transparency, and collaboration, we empower businesses to thrive in today's dynamic market landscape. Join us in creating a synergy of strengths and achieving remarkable outcomes together.",
  },
  {
    heading: "Strategic Precision — Crafting Success with Every Step",
    body: "Our strategy is rooted in precision, targeting businesses with strong cash flows, resilience to competition, and adaptability to changing technology landscapes. This approach is evident in our strategic acquisition of managed IT service providers led by experienced management teams or those receptive to Henagon's seasoned guidance.",
  },
  {
    heading: "Voyage of Transformation — The Henagon Experience",
    body: "Begin a transformative journey with Henagon, where business acumen blends seamlessly with IT innovation. Our acquisition process emphasizes mutual growth and success, from careful identification and evaluation of potential IT service providers to ensuring seamless transition and integration. With Henagon, experience strategic excellence and a commitment to growth, turning each venture into a compelling success narrative.",
  },
  {
    heading: "Unlocking Hidden Potential — Turning Opportunities into Triumphs",
    body: "Henagon's uniqueness lies in our unwavering dedication to uncover hidden business potentials. We diligently seek acquisition targets ripe with opportunities. Applying our collective experience, diverse skills, and advanced tools and technologies strategically, we add substantial value, converting each venture into a resounding success story.",
  },
  {
    heading: "Expert Guidance — Navigating the Complexities of Digital Ventures",
    body: "Embark on your digital journey with Henagon's expert guidance. Beyond partnership, we champion success, navigating strategic acquisitions and managing operations seamlessly. Post-acquisition, we ensure a smooth transition, identifying optimization opportunities, and providing ongoing support for sustained excellence. Henagon propels your success story beyond acquisition, fostering growth and resilience.",
  },
  {
    heading: "Discover the Henagon Difference — Enhancing Excellence Beyond Traditional Success",
    body: "Henagon goes beyond being just a business — it's a commitment to excellence that extends beyond typical measures of success. We enhance excellence by offering practical financial support, insightful thought leadership, market expansion, and efficient go-to-market strategies to the businesses we oversee. Our dedicated sales and marketing support strengthens the impact of these strategies, ensuring that each move contributes to the ongoing success story. Welcome to Henagon — a transformative space where excellence evolves in practical dimensions.",
  },
];

const stats = [
  { k: "30 Years", v: "Operating history" },
  { k: "60+", v: "Full-time team" },
  { k: "500+", v: "Projects delivered" },
  { k: "$11M", v: "R&D invested" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        title="We commit ourselves to excellence."
        subtitle="A 30-year operator now powering every layer of the AI stack — compliance-first, built for the long term."
      />

      {/* Who We Are */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Who We Are</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Strategic prowess, engineered for the long term.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground">
          <p>At Henagon, strategic prowess meets unwavering commitment to excellence. Specializing in acquiring, managing, and enhancing various IT services, we adhere to our unique compliance-driven IT model.</p>
          <p>Our corporate philosophy emphasizes meticulous selection of businesses with sustainable growth potential in dynamic sectors.</p>
          <p>With a focus on strategic precision, we meticulously evaluate each opportunity, ensuring our portfolio reflects a diverse yet cohesive collection of businesses poised for success in the rapidly evolving digital landscape.</p>
          <p>Every decision at Henagon is driven by our dedication to engineering success in every venture. We aim not only to create value for our stakeholders but also to contribute to broader innovation and growth in the IT industry.</p>
          <p>Join us on a journey of innovation and integrity as we redefine the future of IT services with purpose and precision.</p>
        </div>
      </section>

      {/* Narrative sections */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {narrative.map((n) => (
              <article
                key={n.heading}
                className="rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/40 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold leading-snug">{n.heading}</h2>
                <div className="mt-3 h-px w-12 bg-[var(--gradient-accent)]" />
                <p className="mt-4 text-muted-foreground">{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Native Operator (replaces old duplicate Empowering Partnership) */}
      <section className="relative overflow-hidden bg-[hsl(210_40%_98%)] text-foreground">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--cyan)]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[var(--mint)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">AI-Native Operator</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            An AI-Native Operator With 30 Years of Operating Discipline.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>Henagon was running infrastructure before "the cloud" had a name. Three decades of operating discipline — hosting, managed IT, security, and compliance — now combine with an AI-native posture across every layer of our stack.</p>
            <p>We do not bolt AI onto legacy services; we run AI as the operating substrate. Our development teams build agentic workflows on our own compute, our SOC triages 100% of Tier-1 alerts with AI, and every acquisition we make adopts the same playbook.</p>
            <p className="text-[var(--navy)] font-semibold">Built for the long term, refreshed for what comes next.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-card p-6 backdrop-blur">
                <div className="bg-[var(--gradient-accent)] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                  {s.k}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-foreground shadow-sm sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--cyan)]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-[var(--mint)]/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h3 className="max-w-xl text-2xl font-bold sm:text-3xl">
              Let's build your AI stack together.
            </h3>
            <Link
              to="/contact-us"
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
