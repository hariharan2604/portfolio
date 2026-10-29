import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { EngineeringConsoleLoader } from "@/components/engineering-console-loader";
import { TypingName } from "@/components/typing-name";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  MapPin,
} from "lucide-react";
import Link from "next/link";

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 grid gap-3 border-b border-border pb-5 sm:grid-cols-[5rem_1fr] sm:gap-6">
      <p className="section-eyebrow pt-1">{number} / {eyebrow}</p>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 pb-20 pt-6 sm:px-8 sm:pt-10 lg:gap-28 lg:px-10">
      <section
        id="home"
        className="relative grid gap-10 border-y border-foreground/80 py-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:py-16"
      >
        <div className="max-w-2xl">
          <div className="mb-9 flex items-center justify-between border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
            <span>Portfolio / Software engineering</span>
            <span>{DATA.location} · {new Date().getFullYear()}</span>
          </div>
          <p className="section-eyebrow">Java backend engineer</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[5.5rem]">
            <TypingName name={DATA.name.split(" ")[0]} />
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {DATA.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link href="#projects" className="button-primary">
              Selected work
              <ArrowDownRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="button-secondary"
            >
              Contact
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href={DATA.resumeUrl}
              download
              prefetch={false}
              className="button-secondary"
            >
              Resume
              <Download aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-wide text-muted-foreground sm:text-xs">
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-3.5 text-primary" />
              {DATA.location}
            </span>
            <span aria-hidden="true" className="text-border">/</span>
            <span>Microservices</span>
            <span aria-hidden="true" className="text-border">/</span>
            <span>REST APIs</span>
            <span aria-hidden="true" className="text-border">/</span>
            <span>Spring</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Profile</span>
            <span>01 — 01</span>
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden rounded-[30px] border border-border/80 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.12),transparent_32%),linear-gradient(160deg,hsl(var(--card)),hsl(var(--muted)))] p-5 shadow-[0_30px_90px_rgba(15,23,42,0.12)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_35px_100px_rgba(15,23,42,0.18)]">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,hsl(var(--foreground)/0.06)_24%,transparent_52%,hsl(var(--foreground)/0.04)_80%,transparent_100%)] opacity-80" />

            <div className="absolute inset-x-6 top-5 z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-foreground/80 sm:text-[10px]">
              <span>Engineer</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
                Available
              </span>
            </div>

            <div className="relative flex h-full flex-col items-center justify-center px-6 pb-14 pt-10">
              <div className="relative mb-7 flex h-28 w-28 items-center justify-center rounded-full border border-primary/40 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--background)/0.85),hsl(var(--foreground)/0.04)_32%,hsl(var(--card))_100%)] text-5xl font-semibold tracking-[-0.08em] text-foreground shadow-[0_0_0_10px_hsl(var(--foreground)/0.02),0_20px_35px_rgba(15,23,42,0.18)] sm:h-32 sm:w-32 sm:text-[3.1rem]">
                <span className="absolute inset-[10px] rounded-full border border-foreground/10" />
                {DATA.initials}
              </div>

              <div className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-muted-foreground sm:text-[10px]">
                  {DATA.location}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.07em] text-foreground sm:text-[2.2rem]">
                  {DATA.name}
                </h3>
              </div>

              <div className="mt-8 w-full max-w-[220px] rounded-full border border-foreground/10 bg-background/60 px-3 py-2 text-center font-mono text-[8px] uppercase tracking-[0.22em] text-foreground/80 shadow-inner shadow-foreground/5 backdrop-blur-sm sm:text-[9px]">
                Java · Spring · Product
              </div>
            </div>

            <div className="absolute inset-x-5 bottom-5 z-10 flex items-center justify-between gap-3 rounded-xl border border-foreground/10 bg-background/90 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground backdrop-blur-sm sm:text-[10px]">
              <span className="min-w-0 truncate">{DATA.initials} / {DATA.name}</span>
              <span className="shrink-0 text-muted-foreground">Portfolio</span>
            </div>
          </div>

          <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Engineer · {DATA.location}</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </section>

      <section id="profile" className="-mt-10 scroll-mt-28 lg:-mt-16">
        <SectionHeading
          number="01"
          eyebrow="System readout"
          title="A closer look under the hood."
          description="Explore the architecture, project capabilities, and tools behind my work."
        />
        <EngineeringConsoleLoader />
      </section>

      <section id="about" className="scroll-mt-28">
        <SectionHeading
          number="02"
          eyebrow="Profile"
          title="Thoughtful code. Useful products."
        />
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase leading-6 tracking-wide text-muted-foreground">
              Backend systems
              <br />
              Full-stack foundations
              <br />
              Reliable delivery
            </p>
          </div>
          <div className="border-l-2 border-primary pl-5 sm:pl-7">
            <p className="max-w-3xl text-base leading-8 text-foreground/80 sm:text-lg">
              {DATA.summary}
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-28">
        <SectionHeading
          number="03"
          eyebrow="Selected work"
          title="Projects built to solve real problems."
          description="Selected work across investment operations, backend APIs, computer vision, and real-time monitoring—showcasing product thinking and end-to-end execution."
        />
        <div className="grid gap-x-8 gap-y-10 md:auto-rows-fr md:grid-cols-2 lg:gap-x-10">
          {DATA.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index + 1}
              featured={index === 0}
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              meta={"meta" in project ? project.meta : undefined}
              tags={project.technologies}
              image={"image" in project ? project.image : undefined}
              video={"video" in project ? project.video : undefined}
              links={project.links}
            />
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-28">
        <SectionHeading
          number="04"
          eyebrow="Background"
          title="Experience & education."
          description="The teams, roles, and learning that have shaped how I build."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Work experience
            </h3>
            <div className="flex flex-col">
              {DATA.work.map((work) => (
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  logoShape={"logoShape" in work ? work.logoShape : undefined}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  location={work.location}
                  period={`${work.start} – ${work.end ?? "Present"}`}
                  description={work.description}
                />
              ))}
            </div>
          </div>
          <div id="education" className="scroll-mt-28">
            <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Education
            </h3>
            <div className="flex flex-col">
              {DATA.education.map((education) => (
                <ResumeCard
                  key={education.school}
                  logoUrl={education.logoUrl}
                  logoShape="square"
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} – ${education.end}`}
                  description={education.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-28">
        <SectionHeading
          number="05"
          eyebrow="What I work with"
          title="A focused engineering toolkit."
          description="A strong backend foundation, supported by practical tools across the stack."
        />
        <div className="mb-8 grid grid-cols-2 border-y border-border sm:grid-cols-3 lg:grid-cols-5">
          {DATA.featuredSkills.map((skill, index) => (
            <div
              className="group relative flex min-h-24 flex-col justify-between border-b border-r border-border p-3 transition-colors duration-200 hover:bg-primary/5 last:border-r-0 sm:min-h-28 sm:p-4 lg:border-b-0"
              key={skill}
            >
              <span className="font-mono text-[9px] text-primary">
                CORE / 0{index + 1}
              </span>
              <span className="text-sm font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary sm:text-base">
                {skill}
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
        <div>
          {DATA.skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-3 border-b border-border py-4 sm:grid-cols-[12rem_1fr] sm:gap-6"
            >
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="pointer-events-none rounded-sm border border-border bg-transparent px-2 py-1 font-mono text-[10px] font-normal text-muted-foreground hover:bg-transparent"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-28">
        <div className="grid gap-6 border-y border-foreground/80 py-10 sm:grid-cols-[1fr_auto] sm:items-center sm:py-12">
          <div>
            <p className="section-eyebrow">06 / Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s make something meaningful.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              I&apos;m always happy to connect, exchange ideas, and talk about
              building useful things.
            </p>
          </div>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="button-primary w-fit"
          >
            Start a conversation
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <footer className="-mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 text-center font-mono text-[10px] uppercase tracking-wide text-muted-foreground sm:-mt-16 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} {DATA.name}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Link
              href={social.url}
              key={name}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.url.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={name}
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <social.icon aria-hidden="true" className="size-3.5" />
              {name === "email" ? "Email" : social.name}
            </Link>
          ))}
          <Link
            href="#home"
            className="transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Back to top ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
