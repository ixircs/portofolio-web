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
    <main className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
      <header className="ruled-b flex items-baseline justify-between gap-4 py-4 text-[13px]">
        <Link href="/" className="font-semibold tracking-tight text-[var(--plum)]">
          Ryan Christopher Setiawan
        </Link>
        <Link href="/" className="text-[var(--ink-soft)] hover:text-[var(--plum)]">
          back to all work
        </Link>
      </header>

      {/* ---------- title ---------- */}
      <section className="ruled-b py-14 sm:py-20">
        <p className="lead-in mb-1 text-[15px]">
          {project.period} · {project.team}
        </p>
        <h1 className="display mb-8 text-[clamp(2.4rem,8vw,5.6rem)]">
          {project.title}.
        </h1>
        <p className="max-w-[66ch] text-[17px] leading-[1.7]">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-[var(--ink-soft)]">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-[var(--teal)] pb-0.5 text-[15px] font-medium text-[var(--teal)]"
            >
              Read the code on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-[var(--teal)] pb-0.5 text-[15px] font-medium text-[var(--teal)]"
            >
              Open the live app
            </a>
          )}
        </div>

        {project.note && (
          <p className="mt-8 max-w-[66ch] text-[14px] leading-relaxed text-[var(--ink-soft)]">
            {project.note}
          </p>
        )}
      </section>

      {/* ---------- results ---------- */}
      <section className="ruled-b py-14 sm:py-20">
        <p className="lead-in mb-1 text-[15px]">what it</p>
        <h2 className="display mb-10 text-[clamp(2rem,6vw,3.6rem)]">measured.</h2>
        <dl className="max-w-[80ch]">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="ruled-b grid grid-cols-12 items-baseline gap-3 py-4 first:border-t first:border-[var(--rule)]"
            >
              <dt className="col-span-12 text-[15px] text-[var(--ink-soft)] sm:col-span-7">
                {m.label}
              </dt>
              <dd className="col-span-12 text-[18px] font-semibold tabular-nums text-[var(--teal)] sm:col-span-5 sm:text-right">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- approach ---------- */}
      <section className="ruled-b py-14 sm:py-20">
        <p className="lead-in mb-1 text-[15px]">how it was</p>
        <h2 className="display mb-10 text-[clamp(2rem,6vw,3.6rem)]">built.</h2>
        <ol className="max-w-[72ch]">
          {project.methodology.map((step, i) => (
            <li
              key={i}
              className="ruled-b grid grid-cols-12 gap-x-5 py-5 first:border-t first:border-[var(--rule)]"
            >
              <span className="col-span-2 text-[13px] tabular-nums text-[var(--ink-soft)] sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="col-span-10 text-[16px] leading-[1.7] sm:col-span-11">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- evidence ---------- */}
      {project.images.length > 0 && (
        <section className="ruled-b py-14 sm:py-20">
          <p className="lead-in mb-1 text-[15px]">the</p>
          <h2 className="display mb-10 text-[clamp(2rem,6vw,3.6rem)]">evidence.</h2>
          <div className="flex flex-col gap-12">
            {project.images.map((img) => (
              <figure key={img.src}>
                <div className="border border-[var(--rule)] bg-[var(--paper)]">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={img.width}
                    height={img.height}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1100px"
                  />
                </div>
                <figcaption className="mt-3 max-w-[72ch] text-[14px] leading-relaxed text-[var(--ink-soft)]">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="py-14 sm:py-20">
        <Link
          href="/"
          className="border-b-2 border-[var(--teal)] pb-0.5 text-[17px] font-medium text-[var(--teal)]"
        >
          Back to all work
        </Link>
      </section>
    </main>
  );
}
