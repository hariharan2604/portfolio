import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { EngineeringConsole } from "@/components/engineering-console";
import { TypingName } from "@/components/typing-name";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  MapPin,
} from "lucide-react";
import Image from "next/image";
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
            <span>India · 2026</span>
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
          <div className="group relative aspect-[4/5] overflow-hidden border border-foreground/70 bg-muted">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 360px"
              className="object-cover object-[50%_25%] grayscale-[12%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-foreground/90 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-background">
              <span>{DATA.initials} / {DATA.name}</span>
              <span>Available to connect</span>
            </div>
          </div>
          <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Engineer · India</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section id="profile" className="-mt-10 scroll-mt-28 lg:-mt-16">
        <SectionHeading
          number="01"
          eyebrow="System readout"
          title="A closer look under the hood."
          description="Explore the engineering principles, measurable outcomes, and tools behind my work."
        />
        <EngineeringConsole />
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
          description="A selection of things I have designed and developed, from intelligent systems to practical web applications."
        />
        <div className="grid gap-x-8 gap-y-10 md:auto-rows-fr md:grid-cols-2 lg:gap-x-10">
          {DATA.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index + 1}
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              meta={"meta" in project ? project.meta : undefined}
              tags={project.technologies}
              image={project.image}
              video={project.video}
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
                  href={work.href}
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
                  href={education.href}
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
              className="group relative flex min-h-24 flex-col justify-between border-b border-r border-border p-3 transition-colors last:border-r-0 hover:bg-primary/5 sm:min-h-28 sm:p-4 lg:border-b-0"
              key={skill}
            >
              <span className="font-mono text-[9px] text-primary">
                CORE / 0{index + 1}
              </span>
              <span className="text-sm font-semibold tracking-tight sm:text-base">
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
                    className="rounded-sm border border-border bg-transparent px-2 py-1 font-mono text-[10px] font-normal text-muted-foreground transition-colors hover:border-primary hover:text-primary"
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
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <social.icon aria-hidden="true" className="size-3.5" />
              {name === "email" ? "Email" : social.name}
            </Link>
          ))}
          <Link href="#home" className="transition-colors hover:text-primary">
            Back to top ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
