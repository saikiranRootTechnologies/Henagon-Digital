import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Quote, User } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/advisory-board")({
  head: () => ({
    meta: [
      { title: "Henagon Advisory Board — Operators, Strategists, and Domain Leaders" },
      {
        name: "description",
        content:
          "The Henagon Advisory Board brings together seasoned executives across IT services, managed infrastructure, cybersecurity, digital transformation, and international law — guiding strategy, governance, and growth across the Henagon group.",
      },
      { property: "og:title", content: "Henagon Advisory Board — Operators, Strategists, and Domain Leaders" },
      {
        property: "og:description",
        content:
          "A board of operators and domain leaders shaping Henagon's strategy, governance, and global growth.",
      },
    ],
  }),
  component: AdvisoryBoardPage,
});

type Member = {
  name: string;
  subtitle?: string;
  paragraphs: string[];
  focus?: { heading: string; items: string[] };
  principle?: { label: string; body: string };
};

const members: Member[] = [
  {
    name: "Ali Dhoon",
    paragraphs: [
      "Ali is a visionary executive in business management and development strategies, particularly in the information technology and telecommunications industries.",
      "He has been highly successful in growing businesses by developing new markets, orchestrating strategic acquisitions, and creatively managing key business units.",
      "Ali aims to integrate the individual entities in The Henagon Group of Companies to form a unified, global, compliance-centric delivery system for Small and Mid-Size Enterprises.",
    ],
    principle: {
      label: "Driving Principle",
      body:
        'A relationship thrives or fails as a result of a match or mismatch in expectations. For every deal, if each of us were to place ourselves on the other side of the table, we would be able to assess expectations positively. The success or failure of any given transaction has many more factors intertwined. However, if expectations were matched and the "intent" was ethical — then the relationship between the parties can certainly survive and present opportunities for future deals.',
    },
  },
  {
    name: "Parag Nandimath",
    subtitle: "President at CoreIT (A Henagon company)",
    paragraphs: [
      "Parag has been an integral part of our growth story since 2012. After a successful career as a General Manager and Regional Business Head for major corporations, Parag brings to the table his rich experience and expertise. He is a strategic thinker who is always looking for new ways to innovate and stay ahead of the competition.",
      "Parag is a Certified Information Systems Auditor (CISA), Certified Information Security Manager (CISM), and Certified in Risk and Information Systems Control (CRISC), in addition to Business Administration certifications.",
      "He sees the company as a key player in the Digital Transformation and Cyber Security domain, and is excited about the potential for growth and expansion in the coming years.",
    ],
    focus: {
      heading: "Parag is laser-focused on:",
      items: [
        "Delivering exceptional value to clients through innovative solutions and excellent customer service.",
        "Creating a positive work environment for employees, and believes that happy employees lead to happy clients.",
      ],
    },
  },
  {
    name: "Atul Kumbhkarni",
    subtitle: "Founder of Matrixnodes (A Henagon company)",
    paragraphs: [
      "Atul is an entrepreneur at heart and a passionate digital business solution consultant who bridges business silos. He has a unique cross-industry experience, and in the last two decades, he has worked closely with senior management of Fortune 500 and other top companies across all verticals.",
      "He believes in co-creating and is actively involved with both startups and established brands to streamline their digital enterprise journey that enhances their brand value and customer experience.",
      "Atul holds a Master's degree in Business Administration along with a Law degree.",
    ],
  },
  {
    name: "Abdul Qadir Badri",
    subtitle: "Founder & CEO of Root Technologies (A Henagon company)",
    paragraphs: [
      "He has managed IT teams, overseen Gateway Servers, and provided technical leadership and project management expertise along with growing the business with his exceptional sales acumen.",
      "Abdul Qadir excels in designing and implementing network infrastructure, configuring remote access solutions, and ensuring network security through VPNs, VLANs, and routing protocols.",
      "Abdul Qadir holds several certifications, including Cisco Certified Network Associate (CCNA), Microsoft Certified System Engineer (MCSE), Microsoft Certified System Administrator (MCSA), Microsoft Certified Professional (MCP) Windows 2003, Jetking Certified Hardware & Network Professional (JCHNP), Red Hat Certified Engineer (RHCE), Cisco Secure PIX Firewall Advanced (CSPFA), Certified Wireless Network Administrator (CWNA), and Checkpoint Certified Security Administrator.",
    ],
  },
  {
    name: "Shabbir S. Wakhariya",
    paragraphs: [
      "Shabbir is an experienced international attorney qualified in New York, Washington DC, India, and as a Solicitor of England and Wales. Shabbir has been in practice for more than 30 years. His first two decades were spent at a big law firm in New York City, and in the past decade, he has continued an independent practice representing US, UK, and European clients on cross-border corporate transactions, governance and compliance issues, HR issues, and acting as outside general counsel to international companies.",
      "At Core IT, Shabbir provides legal guidance to the founder and board members on various business initiatives in the USA and globally. Shabbir guides the board and operational teams on risk and liability issues, supervises governance and compliance, advises on global IP and brand protection, and on capital contribution structures and investor protection.",
    ],
  },
];

const PREVIEW_CHAR_LIMIT = 260;

function MemberCard({ m }: { m: Member }) {
  const [expanded, setExpanded] = useState(false);
  const fullText = m.paragraphs.join(" ");
  const isLong = fullText.length > PREVIEW_CHAR_LIMIT;
  const visibleParagraphs = expanded || !isLong ? m.paragraphs : null;

  return (
    <article className="grid items-start gap-8 sm:grid-cols-[200px_1fr] sm:gap-10">
      {/* Portrait — uniform 200x200, light grey border */}
      <div className="mx-auto w-full max-w-[200px] sm:mx-0">
        <div className="aspect-square overflow-hidden rounded-xl border border-border bg-muted/40">
          <div className="flex h-full w-full items-center justify-center text-muted-foreground/40">
            <User className="h-20 w-20" strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Text */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[var(--navy)] sm:text-3xl">
          {m.name}
        </h2>
        {m.subtitle && (
          <p className="mt-1.5 text-sm font-semibold text-[var(--cyan)]">{m.subtitle}</p>
        )}

        <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
          {visibleParagraphs ? (
            visibleParagraphs.map((p, idx) => <p key={idx}>{p}</p>)
          ) : (
            <p>{fullText.slice(0, PREVIEW_CHAR_LIMIT).trimEnd()}…</p>
          )}
        </div>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--cyan)] transition-opacity hover:opacity-80"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}

        {expanded && m.focus && (
          <div className="mt-5">
            <p className="font-semibold text-[var(--navy)]">{m.focus.heading}</p>
            <ul className="mt-3 space-y-2">
              {m.focus.items.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cyan)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {expanded && m.principle && (
          <div className="mt-5 rounded-xl border border-border bg-muted/30 p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
              <Quote className="h-4 w-4" /> {m.principle.label}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{m.principle.body}</p>
          </div>
        )}
      </div>
    </article>
  );
}

function AdvisoryBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Board"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Advisory Board" }]}
        title={<>We make <span className="text-[var(--cyan)]">connections.</span></>}
        subtitle="A board of operators and domain leaders shaping Henagon's strategy, governance, and global growth."
      />

      {/* Members — clean list, max 1280px */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl divide-y divide-border">
          {members.map((m) => (
            <div key={m.name} className="py-[60px] first:pt-12 last:pb-12">
              <MemberCard m={m} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA — centered, white background, cyan button */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--navy)] sm:text-3xl">
            Want to engage with our advisors?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Reach out to start a conversation with the Henagon team.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--cyan)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Talk to Our Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
