import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import Link from "next/link";

const navigation = [
  { href: "#profile", label: "System" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10"
      >
        <Link
          href="#home"
          aria-label={`${DATA.name} home`}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex size-9 items-center justify-center border border-foreground bg-foreground font-mono text-[11px] font-bold tracking-wide text-background">
            {DATA.initials}
          </span>
          <span className="hidden font-mono text-xs font-medium tracking-tight sm:inline">
            {DATA.name.toUpperCase()}
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-3">
          <div className="flex items-center gap-0 sm:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-2 font-mono text-[10px] uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary sm:px-2.5 sm:text-[11px] ${
                  item.href === "#profile" ||
                  item.href === "#about" ||
                  item.href === "#experience"
                    ? "hidden sm:inline-flex"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <span aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
          {Object.entries(DATA.contact.social)
            .filter(([, social]) => social.navbar)
            .map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="hidden size-9 items-center justify-center border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-primary sm:inline-flex"
              >
                <social.icon className="size-4" />
              </Link>
            ))}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
