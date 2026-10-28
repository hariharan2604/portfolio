"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function TypingName({ name }: { name: string }) {
  const [typedName, setTypedName] = useState("");
  const prefersReducedMotion = useReducedMotion();

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
