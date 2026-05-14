import { PageHero } from "@/components/PageHero";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Building2, Send } from "lucide-react";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Henagon — Talk to Our Team" },
      {
        name: "description",
        content:
          "Reach the Henagon team to discuss AI hosting, AI-led security, agentic development, vertical AI solutions, or a potential acquisition. We respond promptly and route every inquiry to the right operator.",
      },
      { property: "og:title", content: "Contact Henagon — Talk to Our Team" },
      {
        property: "og:description",
        content:
          "Reach the Henagon team to discuss AI hosting, AI-led security, agentic development, vertical AI solutions, or a potential acquisition. We respond promptly and route every inquiry to the right operator.",
      },
      { property: "og:url", content: "https://www.henagon.com/contact-us" },
    ],
    links: [
      { rel: "canonical", href: "https://www.henagon.com/contact-us" },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const required = ["name", "email", "subject", "message"];
    const ok = required.every((k) => String(data.get(k) ?? "").trim().length > 0);
    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("success");
    form.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
        title="We are here to help you."
        subtitle="Talk to our team about AI hosting, security, agents, vertical AI, or a potential acquisition. One inquiry, one accountable owner."
      />

      {/* TALK TO OUR TEAM */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Talk to Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your goals — current infrastructure, AI ambitions, compliance needs, or
            acquisition timing — and we'll route your inquiry to the right operator within the
            Henagon group.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contact Form</h2>
            <form
              onSubmit={onSubmit}
              className="mt-8 grid gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8 md:grid-cols-2"
            >
              <div className="md:col-span-1">
                <label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Your name here"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="Your email here"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="subject" className="text-sm font-medium">
                  Your Subject <span className="text-destructive">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  maxLength={150}
                  placeholder="Your subject here"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="phone" className="text-sm font-medium">
                  Contact Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={40}
                  placeholder="Your phone here"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={6}
                  placeholder="Tell us a few words"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  We respond within one business day.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
                >
                  Submit Message <Send className="h-4 w-4" />
                </button>
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="md:col-span-2 rounded-md border border-[var(--mint)]/40 bg-[var(--mint)]/10 px-4 py-3 text-sm text-[var(--mint)]"
                >
                  Thank you! Your submission has been received.
                </div>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  className="md:col-span-2 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  Oops! Something went wrong while submitting the form.
                </div>
              )}
            </form>
          </div>

          {/* OTHER WAYS TO REACH US */}
          <aside className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Other Ways to Reach Us</h2>
            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "info@henagonusa.com" },
                { icon: Phone, label: "Phone", value: "+1 346 680 5300" },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "Rochester, NY · Dallas, TX",
                },
                {
                  icon: Building2,
                  label: "Operating companies",
                  value:
                    "Core IT, EZZI, Matrixnodes, Root Technologies, ezzisolutions.ai, CareflowUSA.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--gradient-accent)] text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stylized map tile */}
            <div className="relative mt-6 overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--cyan)/0.15_1px,transparent_1px),linear-gradient(90deg,var(--cyan)/0.15_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="relative flex items-center justify-between text-foreground">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
                    Data-center markers
                  </p>
                  <p className="mt-1 text-sm font-medium">Rochester, NY · Dallas, TX</p>
                </div>
                <div className="flex gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--cyan)]/20 text-[var(--cyan)]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--mint)]/20 text-[var(--mint)]">
                    <MapPin className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Let's build your AI stack together.
          </h2>
          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            Talk to Our Team <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
