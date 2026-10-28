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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 w-full max-w-6xl flex-wrap items-center gap-x-4 px-5 py-2 sm:px-8 lg:flex-nowrap lg:gap-5 lg:px-10 lg:py-0"
      >
        <Link
          href="#home"
          aria-label={`${DATA.name} home`}
          className="group flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="relative flex size-9 items-center justify-center border border-foreground bg-foreground font-mono text-[11px] font-bold tracking-wide text-background shadow-[3px_3px_0_hsl(var(--primary)/0.55)] transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none">
            {DATA.initials}
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="font-mono text-[11px] font-semibold tracking-wide transition-colors duration-200 group-hover:text-primary">
              {DATA.name.split(" ")[0].toUpperCase()}
            </span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground sm:inline">
              Software engineer
            </span>
          </span>
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-1">
          {Object.entries(DATA.contact.social)
            .filter(([, social]) => social.navbar)
            .map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="hidden size-9 items-center justify-center border border-transparent text-muted-foreground transition-colors duration-200 hover:border-border hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
              >
                <social.icon aria-hidden="true" className="size-4" />
              </Link>
            ))}
          <span aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
          <ModeToggle />
        </div>

        <div className="order-3 -mx-5 flex w-[calc(100%+2.5rem)] items-center gap-1 overflow-x-auto border-t border-border/70 px-5 pt-2 sm:-mx-8 sm:w-[calc(100%+4rem)] sm:px-8 lg:order-none lg:mx-0 lg:w-auto lg:flex-1 lg:justify-center lg:overflow-visible lg:border-0 lg:px-0 lg:py-0">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-9 shrink-0 items-center gap-2 px-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground transition-colors duration-200 hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span
                aria-hidden="true"
                className="hidden text-[9px] text-primary/75 lg:inline"
              >
                0{index + 1}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
