"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

function EngineeringConsoleSkeleton() {
  return (
    <section
      aria-label="Loading engineering profile"
      aria-busy="true"
      className="console-shell relative overflow-hidden border border-foreground/70 bg-card"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/70 bg-foreground px-4 py-3 text-background sm:px-5">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
          <span className="flex items-center gap-2 text-primary">
            <span className="console-pulse size-1.5 bg-primary motion-reduce:animate-none" />
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
        <div className="flex gap-1 border-b border-border p-2 md:flex-col md:border-b-0 md:border-r md:p-3">
          {["Architecture", "Project scope", "Delivery"].map((label, index) => (
            <div
              key={label}
              className={`flex min-w-0 flex-1 items-center justify-center gap-1.5 border px-1.5 py-2.5 font-mono text-[9px] uppercase tracking-wide sm:gap-2 sm:px-2 sm:text-[10px] md:w-full md:flex-none md:justify-start md:gap-3 md:px-3 ${
                index === 0
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              <span className="shrink-0 text-[9px] opacity-60">0{index + 1}</span>
              <span className="truncate">{label}</span>
              {index === 0 && (
                <span aria-hidden="true" className="ml-auto hidden md:inline">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="min-h-56 p-4 sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <p className="font-mono text-[10px] text-muted-foreground sm:text-xs">
              <span className="text-primary">$</span> system.architecture --overview
            </p>
            <p className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
              Resource Booking API
            </p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {["Runtime", "Security", "Persistence", "Caching"].map((label, index) => (
              <div
                key={label}
                className="grid grid-cols-[2rem_1fr] gap-2 border-t border-border py-3"
              >
                <span className="font-mono text-[9px] text-primary/70">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                    {label}
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-2 h-3 w-4/5 animate-pulse bg-muted/70 motion-reduce:animate-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="console-scanline motion-reduce:hidden" />
    </section>
  );
}

const EngineeringConsole = dynamic(
  () =>
    import("@/components/engineering-console").then(
      (module) => module.EngineeringConsole
    ),
  {
    ssr: false,
    loading: EngineeringConsoleSkeleton,
  }
);

export function EngineeringConsoleLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const Observer = window.IntersectionObserver;
    if (typeof Observer !== "function") {
      const timeout = window.setTimeout(() => setIsNearViewport(true), 0);
      return () => window.clearTimeout(timeout);
    }

    const observer = new Observer(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {isNearViewport ? <EngineeringConsole /> : <EngineeringConsoleSkeleton />}
    </div>
  );
}
