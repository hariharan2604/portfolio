"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "#profile", label: "System" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <nav
          aria-label="Main navigation"
          className="flex min-h-16 items-center justify-between gap-4"
        >
          <Link
            href="#home"
            aria-label={`${DATA.name} home`}
            onClick={() => setIsMenuOpen(false)}
            className="group flex min-w-0 shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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

          <div className="flex items-center gap-1 lg:hidden">
            <ModeToggle />
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-9 items-center gap-2 border border-border px-3 font-mono text-[10px] uppercase tracking-wide text-muted-foreground transition-colors duration-200 hover:border-primary hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="size-4" />
              ) : (
                <Menu aria-hidden="true" className="size-4" />
              )}
              <span>{isMenuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
            <div className="flex items-center gap-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-9 items-center gap-2 px-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground transition-colors duration-200 hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span aria-hidden="true" className="text-[9px] text-primary/75">
                    0{index + 1}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-1 lg:flex">
            {Object.entries(DATA.contact.social)
              .filter(([, social]) => social.navbar)
              .map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="size-9 items-center justify-center border border-transparent text-muted-foreground transition-colors duration-200 hover:border-border hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
                >
                  <social.icon aria-hidden="true" className="size-4" />
                </Link>
              ))}
            <span aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
            <ModeToggle />
          </div>
        </nav>

        <div
          id="mobile-navigation"
          hidden={!isMenuOpen}
          className="border-t border-border/80 pb-4 pt-3 lg:hidden"
        >
          <p className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
            Navigate
          </p>
          <div className="grid gap-1">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex min-h-11 items-center gap-3 border border-transparent px-3 font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors duration-200 hover:border-border hover:bg-secondary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
              >
                <span className="text-[10px] text-primary/75">
                  0{index + 1}
                </span>
                <span className="flex-1">{item.label}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-border/70 pt-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              Connect
            </span>
            <div className="flex items-center gap-1">
              {Object.entries(DATA.contact.social)
                .filter(([, social]) => social.navbar)
                .map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="inline-flex size-9 items-center justify-center border border-transparent text-muted-foreground transition-colors duration-200 hover:border-border hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <social.icon aria-hidden="true" className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
