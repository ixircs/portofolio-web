import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const otherWork = {
  title: "CompFest 18 — Data Analytics Dash",
  description:
    "Finalist. Qualified through a real-time SQL query online-judge round, then built a three-part Tableau dashboard on Indonesia's urban–rural digital divide across 38 provinces, on a star-schema model prepared in Python/pandas.",
  stack: ["SQL", "Python", "pandas", "Tableau"],
  result:
    "Phones have equalised (1.00×). Laptops have not (2.80×). The divide moved from connection to device.",
  demo: "https://public.tableau.com/app/profile/sebastian.1749/viz/Dashboard_17903169196680/1",
  note: "Team project (Data Seeker). Dashboard published on a teammate's Tableau Public account.",
};

const toolkit: { role: string; items: string }[] = [
  { role: "working in", items: "Python · SQL" },
  { role: "modelling with", items: "scikit-learn · XGBoost · TensorFlow/Keras · statsmodels" },
  { role: "shipping on", items: "FastAPI · Streamlit · MLflow · AWS SageMaker" },
  { role: "reporting in", items: "Tableau · pandas · matplotlib" },
  { role: "versioning with", items: "Git" },
];

const links = [
  { label: "GitHub", href: "https://github.com/ixircs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ryan-christopher-setiawan/" },
  { label: "Email", href: "mailto:ryanchristophersetiawan111@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
      {/* ---------- status bar ---------- */}
      <header className="ruled-b flex items-baseline justify-between gap-4 py-4 text-[13px]">
        <span className="font-semibold tracking-tight text-[var(--plum)]">
          Ryan Christopher Setiawan
        </span>
        <span className="flex items-center gap-2 text-[var(--ink-soft)]">
          <span
            aria-hidden
            className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--teal)]"
          />
          open to data science internships · jakarta
        </span>
      </header>

      {/* ---------- hero ---------- */}
      <section className="ruled-b py-16 sm:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <h1 className="display col-span-12 text-[clamp(3.2rem,13vw,10rem)] md:col-span-8">
            Ryan Christopher
            <br />
            Setiawan.
          </h1>
          <div className="col-span-12 flex flex-col gap-1 text-[15px] leading-relaxed md:col-span-4 md:pb-3">
            <p>Data Science, BINUS University</p>
            <p className="text-[var(--ink-soft)]">Machine learning</p>
            <p className="text-[var(--ink-soft)]">Deployment</p>
            <p className="text-[var(--ink-soft)]">Analytics &amp; research</p>
          </div>
        </div>
      </section>

      {/* ---------- approach ---------- */}
      <section id="approach" className="ruled-b py-16 sm:py-20">
        <p className="lead-in mb-1 text-[15px]">the</p>
        <h2 className="display mb-10 text-[clamp(2.4rem,7vw,4.6rem)]">approach.</h2>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="col-span-12 max-w-[62ch] space-y-5 text-[16px] leading-[1.7] md:col-span-7">
            <p>
              I build data projects end to end — ingestion, modelling, and then actually
              serving the thing, because a model that never leaves a notebook has not been
              tested against anything.
            </p>
            <p>
              What I care about more is knowing when a result does not hold. In the coffee
              study, the frost threshold that should have worked found nothing, and the
              parallel-trends assumption failed, so the project reports no causal estimate at
              all. In the DataFest analysis, the gap between barrier and non-barrier patients
              is large, but it is an association and the write-up says so.
            </p>
            <p>
              Every project below states what it found, how it was measured, and where it
              stops being trustworthy.
            </p>
          </div>
          <dl className="col-span-12 self-start md:col-span-5 md:border-l md:border-[var(--rule)] md:pl-8">
            {[
              ["Projects published", "6"],
              ["Largest dataset analysed", "14.4M rows"],
              ["Live deployments", "3"],
            ].map(([k, v]) => (
              <div key={k} className="ruled-b flex items-baseline justify-between gap-4 py-3 first:border-t first:border-[var(--rule)] first:pt-3">
                <dt className="text-[14px] text-[var(--ink-soft)]">{k}</dt>
                <dd className="text-[18px] font-semibold text-[var(--teal)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- selected work ---------- */}
      <section id="work" className="ruled-b py-16 sm:py-20">
        <p className="lead-in mb-1 text-[15px]">selected</p>
        <h2 className="display mb-10 text-[clamp(2.4rem,7vw,4.6rem)]">work.</h2>

        <ul>
          {projects.map((p, i) => (
            <li key={p.slug} className="border-t border-[var(--rule)] last:border-b">
              <Link
                href={`/projects/${p.slug}`}
                className="group grid grid-cols-12 items-center gap-x-5 gap-y-4 py-6 transition-colors hover:bg-[var(--tint)] sm:py-7"
              >
                <div className="col-span-12 sm:col-span-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[13px] tabular-nums text-[var(--ink-soft)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[19px] font-semibold leading-snug tracking-tight text-[var(--plum)] sm:text-[21px]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 pl-8 text-[13px] text-[var(--ink-soft)]">
                    {p.team} · {p.stack.slice(0, 3).join(" · ")}
                  </p>
                </div>

                <p className="col-span-12 pl-8 text-[15px] leading-snug sm:col-span-4 sm:pl-0">
                  {p.result}
                </p>

                <div className="col-span-12 ml-8 sm:col-span-3 sm:ml-0">
                  <div className="overflow-hidden border border-[var(--rule)] bg-[var(--paper)]">
                    <Image
                      src={p.images[0].src}
                      alt=""
                      width={p.images[0].width}
                      height={p.images[0].height}
                      className="h-[76px] w-full object-cover object-left-top opacity-90 transition-opacity group-hover:opacity-100"
                      sizes="(max-width: 640px) 90vw, 260px"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- other work ---------- */}
      <section className="ruled-b py-16 sm:py-20">
        <p className="lead-in mb-1 text-[15px]">one more,</p>
        <h2 className="display mb-10 text-[clamp(2.4rem,7vw,4.6rem)]">in tableau.</h2>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="col-span-12 md:col-span-7">
            <h3 className="text-[21px] font-semibold tracking-tight text-[var(--plum)]">
              {otherWork.title}
            </h3>
            <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.7]">
              {otherWork.description}
            </p>
            <p className="mt-4 text-[13px] text-[var(--ink-soft)]">{otherWork.note}</p>
          </div>
          <div className="col-span-12 md:col-span-5 md:border-l md:border-[var(--rule)] md:pl-8">
            <p className="text-[17px] font-medium leading-snug text-[var(--teal)]">
              {otherWork.result}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-[var(--ink-soft)]">
              {otherWork.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <a
              href={otherWork.demo}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block border-b-2 border-[var(--teal)] pb-0.5 text-[15px] font-medium text-[var(--teal)]"
            >
              Open the dashboard
            </a>
          </div>
        </div>
      </section>

      {/* ---------- toolkit ---------- */}
      <section className="ruled-b py-16 sm:py-20">
        <p className="lead-in mb-1 text-[15px]">the</p>
        <h2 className="display mb-10 text-[clamp(2.4rem,7vw,4.6rem)]">toolkit.</h2>
        <dl className="max-w-[72ch]">
          {toolkit.map((t) => (
            <div
              key={t.role}
              className="ruled-b grid grid-cols-12 gap-3 py-4 first:border-t first:border-[var(--rule)]"
            >
              <dt className="col-span-12 text-[14px] text-[var(--ink-soft)] sm:col-span-4">
                {t.role}
              </dt>
              <dd className="col-span-12 text-[16px] sm:col-span-8">{t.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- contact ---------- */}
      <section className="py-16 sm:py-24">
        <p className="lead-in mb-1 text-[15px]">want to</p>
        <h2 className="display mb-8 text-[clamp(2.4rem,7vw,4.6rem)]">talk?</h2>
        <p className="mb-10 max-w-[52ch] text-[16px] leading-[1.7]">
          I am looking for a data science or analyst internship in Jakarta. The fastest way to
          reach me is email.
        </p>
        <ul className="flex flex-wrap gap-x-10 gap-y-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="border-b-2 border-[var(--teal)] pb-0.5 text-[17px] font-medium text-[var(--teal)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-[13px] text-[var(--ink-soft)]">
          Jakarta, Indonesia · built with Next.js
        </p>
      </section>
    </main>
  );
}
