import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import henagonLogo from "@/assets/henagon-logo.png";

type NavLeaf = { to: string; label: string };
type NavItem = NavLeaf | { label: string; children: NavLeaf[] };

const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { to: "/about-us", label: "About Us" },
      { to: "/why-henagon", label: "Why Henagon" },
      { to: "/our-approach", label: "Our Approach" },
      { to: "/advisory-board", label: "Advisory Board" },
    ],
  },
  {
    label: "Services",
    children: [
      { to: "/services", label: "Services" },
      { to: "/advantage", label: "Advantage" },
      { to: "/delivering-value", label: "Delivering Value" },
    ],
  },
  { to: "/ai-stack", label: "AI Stack" },
  { to: "/business-portfolio", label: "Business Portfolio" },
];

// Flat list for the mobile drawer (clean, scrollable vertical list).
const MOBILE_NAV: NavLeaf[] = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/why-henagon", label: "Why Henagon" },
  { to: "/our-approach", label: "Our Approach" },
  { to: "/advisory-board", label: "Advisory Board" },
  { to: "/services", label: "Services" },
  { to: "/advantage", label: "Advantage" },
  { to: "/delivering-value", label: "Delivering Value" },
  { to: "/ai-stack", label: "AI Stack" },
  { to: "/business-portfolio", label: "Business Portfolio" },
  { to: "/contact-us", label: "Contact Us" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="Henagon home">
          <img
            src={henagonLogo}
            alt="Henagon — Human-Driven AI"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {NAV.map((item) =>
            "children" in item ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 rounded-md border border-border bg-background opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <div className="py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        activeProps={{ className: "text-foreground bg-muted" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact-us"
            className="hidden rounded-md bg-[var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Book An Appointment
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-h-[80vh] max-w-7xl flex-col overflow-y-auto px-4 py-3 sm:px-6">
            {MOBILE_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{ className: "text-foreground bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[var(--gradient-accent)] px-4 py-2 text-center text-sm font-semibold text-primary-foreground sm:hidden"
            >
              Book An Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
