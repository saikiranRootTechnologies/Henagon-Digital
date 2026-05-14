import { Link } from "@tanstack/react-router";
import { ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
import henagonLogoLight from "@/assets/henagon-logo-light.webp";
import logoCoreIt from "@/assets/logos/coreit.webp";
import logoEzzisolutions from "@/assets/logos/ezzisolutions.webp";
import logoMatrixnodes from "@/assets/logos/matrixnodes.webp";
import logoRoot from "@/assets/logos/root.webp";
import logoEzzi from "@/assets/logos/ezzinet.webp";

const COMPLIANCE = [
  "CERT-IN Empaneled",
  "SOC-2 Type II",
  "ISO 27001",
  "HIPAA",
  "PCI-DSS",
  "GDPR",
  "NIST",
];

const SITE_MAP = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/ai-stack", label: "AI Stack" },
  { to: "/why-henagon", label: "Why Henagon" },
  { to: "/our-approach", label: "Our Approach" },
  { to: "/business-portfolio", label: "Business Portfolio" },
  { to: "/advisory-board", label: "Advisory Board" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

const GROUP_COMPANIES = [
  { href: "https://coreitx.com", label: "Core IT", logo: logoCoreIt },
  { href: "https://ezzisolutions.ai/", label: "ezzisolutions.ai", logo: logoEzzisolutions },
  { href: "https://careflowusa.com", label: "CareflowUSA", logo: null },
  { href: "https://matrixnodes.com", label: "Matrixnodes", logo: logoMatrixnodes },
  { href: "https://roottechnologies.co.in", label: "Root Technologies", logo: logoRoot },
  { href: "https://ezzi.net", label: "EZZI", logo: logoEzzi },
];

const TAG_STRIP = ["BUILD", "TRANSFORM", "SECURE", "OPERATE", "AUDIT"];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--navy)] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand block */}
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Henagon home">
              <img
                src={henagonLogoLight}
                alt="Henagon — Human-Driven AI"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 text-sm font-medium text-white/85">
              Henagon — Human-Driven AI
            </p>
            <p className="text-sm font-medium text-white/85">Compliance-Driven IT</p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-white/75">
              {TAG_STRIP.map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  <span>{t}</span>
                  {i < TAG_STRIP.length - 1 && <span className="text-white/45">|</span>}
                </span>
              ))}
              <span className="ml-1 rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/10 px-2 py-0.5 text-[var(--cyan)]">
                30 Years · AI-Native
              </span>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--mint)]" />
                <span>440 Cobia Dr, Unit 1101, Katy TX 77494 (USA)</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--mint)]" />
                <a href="tel:+13466805300" className="hover:text-[var(--cyan)] transition-colors">+1.346.680.5300</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--mint)]" />
                <a href="mailto:info@henagonusa.com" className="hover:text-[var(--cyan)] transition-colors">info@henagonusa.com</a>
              </li>
            </ul>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Site Map
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-sm">
              {SITE_MAP.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/70 transition-colors hover:text-[var(--cyan)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Group Companies
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-2.5 text-sm">
              {GROUP_COMPANIES.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/95 px-2.5 py-2 transition-colors hover:border-[var(--cyan)]/50"
                  >
                    {c.logo ? (
                      <img
                        src={c.logo}
                        alt={`${c.label} logo`}
                        className="max-h-8 w-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-[var(--navy)]">{c.label}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/alidhoon"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-md bg-[var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-white"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Compliance ribbon */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <ShieldCheck className="h-4 w-4 text-[var(--mint)]" />
              Compliance & Certifications
            </div>
            <ul className="flex flex-wrap gap-2">
              {COMPLIANCE.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/70 sm:px-6 lg:px-8">
          © 2026 Henagon Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
