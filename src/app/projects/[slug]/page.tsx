import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          ← Back to portfolio
        </Link>

        <header className="mb-12">
          <div className="mb-3 flex items-center gap-3 text-xs text-[var(--muted)]">
            <span>{project.period}</span>
            <span aria-hidden>·</span>
            <span>{project.team}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-[var(--muted)] leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs text-[var(--accent)]"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--foreground)] shadow-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View repository on GitHub →
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-4 py-2 text-sm text-[var(--accent)] shadow-sm transition-colors hover:border-[var(--accent)]"
              >
                Open live app →
              </a>
            )}
          </div>

          {project.note && (
            <p className="mt-4 text-xs text-[var(--muted)] italic max-w-xl">
              {project.note}
            </p>
          )}
        </header>

        {/* Metrics */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
            Verified Results
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-baseline justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-sm"
              >
                <span className="text-sm text-[var(--muted)]">{m.label}</span>
                <span className="text-sm font-semibold text-[var(--foreground)] whitespace-nowrap">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
            Approach
          </p>
          <ol className="flex flex-col gap-4">
            {project.methodology.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-medium text-[var(--accent)]">
                  {i + 1}
                </span>
                <p className="text-sm text-[var(--foreground)] leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Screenshots */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
            Evidence
          </p>
          <div className="flex flex-col gap-8">
            {project.images.map((img) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <figcaption className="px-4 py-3 text-xs text-[var(--muted)]">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <footer className="border-t border-[var(--border)] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            ← Back to portfolio
          </Link>
        </footer>
      </div>
    </div>
  );
}
