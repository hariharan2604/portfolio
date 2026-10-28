"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="group size-9 text-muted-foreground transition-colors duration-200 hover:bg-secondary/60 hover:text-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Toggle color theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 transition-transform duration-200 group-hover:rotate-12 group-focus-visible:rotate-12 motion-reduce:transform-none dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 transition-transform duration-200 group-hover:-rotate-12 group-focus-visible:-rotate-12 motion-reduce:transform-none dark:block dark:text-neutral-200" />
    </Button>
  );
}
