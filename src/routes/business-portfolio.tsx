import { PageHero } from "@/components/PageHero";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/business-portfolio")({
  head: () => ({
    meta: [
      { title: "Henagon Business Portfolio — Operating Companies Across the AI Stack" },
      {
        name: "description",
        content:
          "Henagon operates a portfolio of technology businesses spanning managed IT, cybersecurity, hosting, AI development, and vertical AI products.",
      },
      {
        property: "og:title",
        content: "Henagon Business Portfolio — Operating Companies Across the AI Stack",
      },
      {
        property: "og:description",
        content:
          "Core IT, EZZI, Matrixnodes, Root Technologies, ezzisolution.ai, and CareflowUSA — the Henagon group of companies.",
      },
    ],
  }),
  component: BusinessPortfolioPage,
});

const expertise = [
  {
    title: "Selective Acquisition Criteria",
    body: "Our acquisition criteria are stringent and defined with precision. We actively seek businesses boasting recurring revenues, embracing an asset-light structure, and demonstrating a robust mastery of digital marketing and operations. Our preference lies in ventures situated within sectors poised for promising future growth. In contrast, we deliberately avoid enterprises marked by unproven business models, erratic revenues, or financially unprofitable profiles. This discerning approach ensures that our acquisitions align strategically with sustainable growth and profitability.",
  },
  {
    title: "Financial Discipline and Acquisition Model",
    body: "Our financial approach to acquisitions is characterized by disciplined precision, with a predominant strategy of acquiring businesses at 3-4x EBITDA. This conservative model, coupled with streamlined operations, positions us to effectively compound capital within the range of 25-35%. This disciplined financial strategy underpins our commitment to strategic and sustainable growth in the realm of acquisitions.",
  },
  {
    title: "Management Expertise and Core Competency",
    body: "The bedrock of our success lies in our management team, bringing together over 150 collective years of diverse experience. Our core competency is evident in our ability to identify profitable businesses with untapped potential for optimization. Post-acquisition, we excel in skillfully integrating and operating these businesses, unlocking and maximizing their inherent potential for sustained success.",
  },
  {
    title: "Communication and Storytelling",
    body: "Recognizing the pivotal role of transparent communication, we proactively engage in sharing our corporate narrative. This initiative is crafted to illuminate the extensive potential encapsulated within Henagon for external stakeholders who may not be intimately acquainted with our day-to-day operations.",
  },
];

const companies = [
  { name: "Core IT", link: "coreitx.com", url: "https://coreitx.com", body: "Managed IT services and cybersecurity for enterprise clients. Anchor operating company within the Henagon group; the platform behind our hosting and SOC delivery." },
  { name: "EZZI", link: "ezzi.net", url: "https://ezzi.net", body: "Long-standing technology operator; the foundation of our hosting and managed-services lineage." },
  { name: "Matrixnodes", link: "matrixnodes.com", url: "https://matrixnodes.com", body: "Digital business solutions and AI development. A trusted partner for Fortune 500 enterprises navigating digital transformation." },
  { name: "Root Technologies", link: "roottechnologies.co.in", url: "https://roottechnologies.co.in", body: "Root Technologies is a leading IT Services integrator delivering world-class IT infrastructure services to customers PAN India." },
  { name: "ezzisolution.ai", link: "ezzisolution.ai", url: "https://ezzisolution.ai", body: "Vertical AI products and solutions — the go-to-market engine for industry copilots, compliance dashboards, and the next wave of vertical AI from the Henagon platform.", isNew: true },
  { name: "CareflowUSA", link: "careflowusa.com", url: "https://careflowusa.com", body: "AI-powered healthcare workflow platform. Streamlines care coordination, documentation, and operational flow for providers. HIPAA-aligned. Recurring SaaS.", isNew: true },
];

const compliance = ["CERT-IN Empaneled", "SOC-2 Type II", "ISO 27001", "HIPAA", "PCI-DSS", "GDPR", "NIST"];

function BusinessPortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Dynamics of Success"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Business Portfolio" }]}
        title="Unveiling Our Business Portfolio Mastery."
        subtitle="A vertically integrated group of operating companies — built to acquire, integrate, and compound value over the long term."
      />

      {/* Navigating Growth */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Navigating Growth</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Unleashing the potential of our diverse business ventures.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground">
          <p>Henagon specializes in the acquisition of technology-driven enterprises with a targeted EBITDA range between $100k and $2mm. This deliberate focus addresses a distinctive market sector, strategically targeting businesses that fall beyond the scope of individual investors while remaining below the purview of larger institutions.</p>
          <p>Backed by a team boasting over 150 years of collective experience, we are uniquely positioned to navigate and excel within this niche market segment, leveraging our expertise for strategic success.</p>
        </div>
      </section>

      {/* Portfolio Selection Expertise */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Selection Expertise</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Henagon's Portfolio Selection Expertise</h2>
          </div>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
            {expertise.map((e) => (
              <article
                key={e.title}
                className="card-equal rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:border-[var(--cyan)]/40 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <div className="mt-3 h-px w-12 bg-[var(--gradient-accent)]" />
                <p className="mt-4 text-muted-foreground">{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Group of Companies */}
      <section className="relative overflow-hidden bg-[hsl(210_40%_98%)] text-foreground">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--cyan)]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[var(--mint)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Group of Companies</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Six operating companies. One platform.</h2>
          </div>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-equal group relative rounded-xl border border-border bg-card p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[var(--mint)]/50"
              >
                {c.isNew && (
                  <span className="absolute right-4 top-4 rounded-full bg-[var(--mint)]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--mint)]">
                    New
                  </span>
                )}
                <div className="flex h-12 items-center">
                  <span className="text-2xl font-bold tracking-tight text-[var(--navy)]">{c.name}</span>
                </div>
                <div className="mt-2 h-px w-12 bg-[var(--gradient-accent)]" />
                <p className="mt-4 text-sm text-muted-foreground">{c.body}</p>
                <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--cyan)]">
                  {c.link}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Ribbon */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">Compliance</p>
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
            <h3 className="text-2xl font-bold sm:text-3xl">Explore a partnership with the Henagon group.</h3>
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
