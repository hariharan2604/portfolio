"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

function EngineeringConsoleSkeleton() {
  return (
    <section
      aria-label="Loading engineering profile"
      aria-busy="true"
      className="console-shell min-h-[20.5rem] overflow-hidden border border-foreground/70 bg-card"
    >
      <div className="flex h-12 items-center justify-between border-b border-foreground/70 bg-foreground px-4 sm:px-5">
        <div className="h-2 w-28 animate-pulse bg-background/20 motion-reduce:animate-none" />
        <div className="h-2 w-20 animate-pulse bg-background/20 motion-reduce:animate-none" />
      </div>
      <div className="grid min-h-[17.5rem] md:grid-cols-[13rem_1fr]">
        <div className="flex gap-2 border-b border-border p-3 md:flex-col md:border-b-0 md:border-r">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="h-9 flex-1 animate-pulse border border-border bg-muted/60 motion-reduce:animate-none md:flex-none"
            />
          ))}
        </div>
        <div className="grid content-start gap-4 p-4 sm:grid-cols-2 sm:p-6">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="border-t border-border py-3">
              <div className="mb-3 h-2 w-1/3 animate-pulse bg-muted motion-reduce:animate-none" />
              <div className="h-3 w-4/5 animate-pulse bg-muted/70 motion-reduce:animate-none" />
            </div>
          ))}
        </div>
      </div>
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
