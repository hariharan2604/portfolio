"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const panels = [
  {
    id: "architecture",
    label: "Architecture",
    command: "system.architecture --overview",
    rows: [
      ["01", "Runtime", "Java 21 · Spring Boot"],
      ["02", "Services", "Contributed across 4–6 microservices"],
      ["03", "Interfaces", "REST APIs · distributed workflows"],
      ["04", "Persistence", "Spring Data JPA · DB2"],
    ],
  },
  {
    id: "performance",
    label: "Performance",
    command: "system.performance --impact",
    rows: [
      ["01", "API response time", "40% faster"],
      ["02", "Build duration", "80% shorter"],
      ["03", "User satisfaction", "25% increase"],
      ["04", "Approach", "SQL · caching · payloads"],
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    command: "system.delivery --toolchain",
    rows: [
      ["01", "Quality", "JUnit · Mockito · Postman"],
      ["02", "Security", "Spring Security · JWT · RBAC"],
      ["03", "Operations", "Docker · AWS · Nginx"],
      ["04", "Workflow", "Git · Agile · CI/CD"],
    ],
  },
] as const;

export function EngineeringConsole() {
  const [activePanel, setActivePanel] =
    useState<(typeof panels)[number]["id"]>("architecture");
  const prefersReducedMotion = useReducedMotion();
  const panel = panels.find((item) => item.id === activePanel) ?? panels[0];

  return (
    <section
      aria-label="Interactive engineering profile"
      className="console-shell relative overflow-hidden border border-foreground/70 bg-card"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/70 bg-foreground px-4 py-3 text-background sm:px-5">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
          <span className="flex items-center gap-2 text-primary">
            <span className="console-pulse size-1.5 bg-primary" />
            System profile
          </span>
          <span className="text-background/40">/</span>
          <span className="text-background/65">Read only</span>
        </div>
        <span className="font-mono text-[10px] text-background/55">
          HJ_PROFILE.SYS
        </span>
      </div>

      <div className="grid md:grid-cols-[13rem_1fr]">
        <div
          aria-label="Profile views"
          className="flex gap-1 border-b border-border p-2 md:flex-col md:border-b-0 md:border-r md:p-3"
        >
          {panels.map((item, index) => (
            <button
              aria-pressed={activePanel === item.id}
              className={cn(
                "flex min-w-0 flex-1 items-center justify-center gap-1.5 border px-1.5 py-2.5 text-left font-mono text-[9px] uppercase tracking-wide transition-colors sm:gap-2 sm:px-2 sm:text-[10px] md:w-full md:flex-none md:justify-start md:gap-3 md:px-3",
                activePanel === item.id
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
              )}
              key={item.id}
              onClick={() => setActivePanel(item.id)}
              type="button"
            >
              <span className="shrink-0 text-[9px] opacity-60">
                0{index + 1}
              </span>
              <span className="truncate">{item.label}</span>
              {activePanel === item.id && (
                <span aria-hidden="true" className="ml-auto hidden text-primary md:inline">
                  →
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="min-h-56 p-4 sm:p-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="h-full"
              exit={{ opacity: 0, y: 5 }}
              initial={{ opacity: 0, y: -5 }}
              key={panel.id}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            >
              <p className="mb-5 font-mono text-[10px] text-muted-foreground sm:text-xs">
                <span className="text-primary">$</span> {panel.command}
              </p>
              <dl className="grid gap-x-8 sm:grid-cols-2">
                {panel.rows.map(([number, term, value]) => (
                  <div
                    className="grid grid-cols-[2rem_1fr] gap-2 border-t border-border py-3"
                    key={term}
                  >
                    <dt className="font-mono text-[9px] text-primary/70">
                      {number}
                    </dt>
                    <dd>
                      <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                        {term}
                      </p>
                      <p className="mt-1 text-sm font-medium">{value}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div aria-hidden="true" className="console-scanline" />
    </section>
  );
}
