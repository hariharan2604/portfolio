import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React from "react";

interface Props {
  index: number;
  featured?: boolean;
  title: string;
  href?: string;
  description: string;
  dates: string;
  meta?: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  index,
  featured = false,
  title,
  href,
  description,
  dates,
  meta,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] group-focus-within:scale-[1.03] motion-reduce:transform-none"
    />
  ) : image ? (
    <Image
      src={image}
      alt={title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] group-focus-within:scale-[1.03] motion-reduce:transform-none"
    />
  ) : (
    <div className="relative flex size-full flex-col justify-between overflow-hidden bg-secondary/60 p-5 sm:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(hsl(var(--foreground)/0.07)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.07)_1px,transparent_1px)] [background-size:20px_20px]"
      />
      <div className="relative flex items-center justify-between pr-12 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="truncate">{title}</span>
        <span className="ml-3 shrink-0">Project brief</span>
      </div>
      <div className="relative grid grid-cols-3 items-center gap-2 sm:gap-3">
        {tags.slice(0, 3).map((technology, layerIndex) => (
          <div
            className="flex min-h-16 flex-col justify-between border border-border bg-background/90 p-2.5 sm:p-3"
            key={technology}
          >
            <span className="font-mono text-[9px] text-primary">
              0{layerIndex + 1}
            </span>
            <span className="truncate text-[10px] font-medium sm:text-xs">
              {technology}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <article
      className={cn(
        "group flex h-full flex-col border-t-2 border-foreground/80 pt-3 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-primary focus-within:-translate-y-1 focus-within:border-primary motion-reduce:transform-none motion-reduce:transition-none",
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        <div className="flex min-w-0 items-center gap-2">
          <span className="truncate">
            <span className="text-primary">{String(index).padStart(2, "0")}</span>
            {" / "}{meta || "Project"}
          </span>
          {featured && (
            <span className="shrink-0 border border-primary/50 px-1.5 py-0.5 text-[8px] tracking-wider text-primary">
              Featured
            </span>
          )}
        </div>
        {dates && <span className="ml-3 shrink-0">{dates}</span>}
      </div>
      <div
        className="relative mb-4 aspect-[16/9] overflow-hidden border border-border bg-secondary/50"
      >
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${title}`}
            className="absolute inset-0 transition-opacity duration-200 hover:opacity-90 focus-visible:z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
          >
            {media}
          </Link>
        ) : (
          media
        )}
        {href && (
          <div className="pointer-events-none absolute right-3 top-3 z-10">
            <span className="flex size-8 shrink-0 items-center justify-center border border-white/40 bg-black/60 text-white">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="min-h-12 text-lg font-semibold leading-snug tracking-tight transition-colors duration-200 group-hover:text-primary group-focus-within:text-primary sm:text-xl">
          {title}
        </h3>
        <Markdown className="prose prose-sm mt-3 max-w-none text-pretty leading-6 text-muted-foreground prose-p:my-0 dark:prose-invert">
          {description}
        </Markdown>
        {tags.length > 0 && (
          <div className="mt-auto flex min-h-16 flex-wrap content-start gap-1.5 pt-4">
            {tags.slice(0, 6).map((tag) => (
              <Badge
                className="rounded-sm border border-border bg-transparent px-2 py-1 font-mono text-[9px] font-normal text-muted-foreground hover:bg-transparent"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 6 && (
              <Badge
                variant="secondary"
                className="rounded-sm border border-border bg-transparent px-2 py-1 font-mono text-[9px] font-normal text-muted-foreground hover:bg-transparent"
              >
                +{tags.length - 6}
              </Badge>
            )}
          </div>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-3 transition-colors group-hover:border-primary/40 group-focus-within:border-primary/40">
          {links.map((projectLink) => (
            <Link
              href={projectLink.href}
              key={projectLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {projectLink.icon}
              {projectLink.type}
              <ArrowUpRight aria-hidden="true" className="size-3" />
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
