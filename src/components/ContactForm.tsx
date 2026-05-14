import { useState } from "react";
import { Send } from "lucide-react";

interface ContactFormProps {
  /** Optional intro shown above the form (e.g. Strategic Growth intro). */
  intro?: string;
  /** Optional eyebrow above the heading. */
  eyebrow?: string;
  /** Optional heading (defaults to "Contact Form"). */
  heading?: string;
  /** Visual variant — "light" for cards on light bg, "dark" for navy sections. */
  variant?: "light" | "dark";
}

/**
 * Standard Henagon contact form.
 * All five placeholders use "here" (corrected typo from the live site).
 * Used on Contact Us, Services, Advantage+, and Delivering Value pages.
 */
export function ContactForm({
  intro,
  eyebrow,
  heading = "Contact Form",
  variant = "light",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isDark = variant === "dark";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const required = ["name", "email", "subject", "message"];
    const ok = required.every(
      (k) => String(data.get(k) ?? "").trim().length > 0,
    );
    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("success");
    form.reset();
  };

  const inputBase = isDark
    ? "mt-2 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/65 outline-none focus:ring-2 focus:ring-[var(--cyan)]"
    : "mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--cyan)]";

  const labelClass = isDark
    ? "text-sm font-medium text-white/85"
    : "text-sm font-medium";

  const cardClass = isDark
    ? "rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur"
    : "rounded-2xl border border-border bg-card p-6 sm:p-8";

  return (
    <div>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--cyan)]">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${
          isDark ? "text-white" : ""
        } ${eyebrow ? "mt-3" : ""}`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-4 max-w-3xl text-base leading-relaxed ${
            isDark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}

      <form onSubmit={onSubmit} className={`mt-8 grid gap-5 md:grid-cols-2 ${cardClass}`}>
        <div className="md:col-span-1">
          <label htmlFor="cf-name" className={labelClass}>
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            required
            maxLength={100}
            placeholder="Your name here"
            className={inputBase}
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="cf-email" className={labelClass}>
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="Your email here"
            className={inputBase}
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="cf-subject" className={labelClass}>
            Your Subject <span className="text-destructive">*</span>
          </label>
          <input
            id="cf-subject"
            name="subject"
            required
            maxLength={150}
            placeholder="Your subject here"
            className={inputBase}
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="cf-phone" className={labelClass}>
            Contact Number
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            maxLength={40}
            placeholder="Your phone here"
            className={inputBase}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-message" className={labelClass}>
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            maxLength={2000}
            rows={6}
            placeholder="Tell us a few words"
            className={inputBase}
          />
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
          <p
            className={`text-xs ${isDark ? "text-white/70" : "text-muted-foreground"}`}
          >
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
  );
}

/**
 * Intro paragraph used above the Strategic Growth form on
 * Services, Our Approach, Advantage+, and Delivering Value pages.
 */
export const STRATEGIC_GROWTH_INTRO =
  "Embark on a transformative journey with Henagon, where we navigate a distinctive market sector that eludes individual investors yet remains below the radar of larger institutions. Strategic foresight, financial sturdiness, competitive tenacity, leadership prowess, and value enhancement converge to redefine business excellence.";
