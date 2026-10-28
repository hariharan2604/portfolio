"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function TypingName({ name }: { name: string }) {
  const [typedName, setTypedName] = useState(name.slice(0, 1));
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let position = 0;
    const interval = window.setInterval(() => {
      position += 1;
      setTypedName(name.slice(0, position));

      if (position >= name.length) {
        window.clearInterval(interval);
      }
    }, 90);

    return () => window.clearInterval(interval);
  }, [name, prefersReducedMotion]);

  const visibleName = prefersReducedMotion ? name : typedName;

  return (
    <span>
      <span className="sr-only">{name}</span>
      <span aria-hidden="true">
        {visibleName}
        <span className="ml-1 inline-block h-[0.8em] w-[0.08em] translate-y-[0.06em] animate-[typing-caret_1s_steps(2,start)_infinite] bg-primary motion-reduce:animate-none" />
      </span>
    </span>
  );
}
