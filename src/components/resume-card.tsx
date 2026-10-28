"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  logoShape?: "wide" | "square";
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  location?: string;
}

export const ResumeCard = ({
  logoUrl,
  logoShape = "square",
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  location,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <article className="border-b border-border py-4 first:border-t">
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className="group flex w-full items-start gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span
          className={cn(
            "relative shrink-0 overflow-hidden rounded-none border border-border bg-white transition-colors duration-200 group-hover:border-primary group-focus-visible:border-primary",
            logoShape === "wide" ? "h-10 w-16" : "size-10"
          )}
        >
          <Image
            src={logoUrl}
            alt={altText}
            fill
            sizes={logoShape === "wide" ? "64px" : "40px"}
            className="object-contain p-1.5"
          />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
            <span className="text-sm font-semibold leading-5 text-foreground transition-colors duration-200 group-hover:text-primary group-focus-visible:text-primary sm:text-base">
              {title}
            </span>
            <span className="font-mono text-right text-[10px] leading-5 text-muted-foreground sm:text-xs">
              {period}
            </span>
          </span>
          {subtitle && (
            <span className="mt-1 block text-sm text-muted-foreground">
              {subtitle}
            </span>
          )}
          {location && (
            <span className="mt-1 block text-xs text-muted-foreground/80">
              {location}
            </span>
          )}
          {badges && badges.length > 0 && (
            <span className="mt-2 flex flex-wrap gap-1">
              {badges.map((badge) => (
                <Badge
                  variant="secondary"
                  className="rounded-full text-[10px]"
                  key={badge}
                >
                  {badge}
                </Badge>
              ))}
            </span>
          )}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "mt-1 size-4 shrink-0 text-muted-foreground transition-[transform,color] duration-200 group-hover:translate-y-0.5 group-hover:text-primary group-focus-visible:text-primary",
            isExpanded && "rotate-180"
          )}
        />
      </button>
      {description && (
        <div
          aria-hidden={!isExpanded}
          inert={!isExpanded}
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none",
            isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="ml-14 border-t border-border pt-4 pb-2 pr-4 text-sm leading-6 text-muted-foreground">
              <p>{description}</p>
              {href && (
                <Link
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-primary transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Visit website
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
