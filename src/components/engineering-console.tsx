"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const panels = [
  {
    id: "architecture",
    label: "Architecture",
    command: "system.architecture --overview",
    context: "Resource Booking API",
    rows: [
      ["01", "Runtime", "Java 21 · Spring Boot 4"],
      ["02", "Security", "Spring Security · JWT · RBAC"],
      ["03", "Persistence", "Spring Data JPA · H2 / MySQL"],
      ["04", "Caching", "Conditional Redis cache"],
    ],
  },
  {
    id: "projects",
    label: "Project scope",
    command: "portfolio.projects --capabilities",
    context: "Across selected projects",
    rows: [
      ["01", "Investment ops", "Agents · customers · receipts"],
      ["02", "Expense sharing", "Equal · exact · percentage splits"],
      ["03", "Live monitoring", "Water · power · pump status"],
      ["04", "Video systems", "Detection · MQTT · WebSockets"],
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    command: "system.delivery --toolchain",
    context: "Resource Booking API",
    rows: [
      ["01", "API docs", "OpenAPI · Swagger UI"],
      ["02", "Health", "Liveness · readiness probes"],
      ["03", "Metrics", "Prometheus · cache metrics"],
      ["04", "Packaging", "Docker · Gradle"],
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
          role="group"
          className="flex gap-1 border-b border-border p-2 md:flex-col md:border-b-0 md:border-r md:p-3"
        >
          {panels.map((item, index) => (
            <button
              aria-pressed={activePanel === item.id}
              aria-controls="engineering-readout-panel"
              id={`engineering-readout-tab-${item.id}`}
              className={cn(
                "flex min-w-0 flex-1 items-center justify-center gap-1.5 border px-1.5 py-2.5 text-left font-mono text-[9px] uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:gap-2 sm:px-2 sm:text-[10px] md:w-full md:flex-none md:justify-start md:gap-3 md:px-3",
                activePanel === item.id
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-transparent text-muted-foreground hover:border-border hover:bg-secondary/50 hover:text-primary"
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

        <div
          id="engineering-readout-panel"
          role="region"
          aria-labelledby={`engineering-readout-tab-${panel.id}`}
          className="min-h-56 p-4 sm:p-6"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="h-full"
              exit={{ opacity: 0, y: 5 }}
              initial={{ opacity: 0, y: -5 }}
              key={panel.id}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[10px] text-muted-foreground sm:text-xs">
                  <span className="text-primary">$</span> {panel.command}
                </p>
                <p className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                  {panel.context}
                </p>
              </div>
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
