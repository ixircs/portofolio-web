type Project = {
  title: string;
  period: string;
  description: string;
  stack: string[];
  result: string;
  repo?: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "Student Placement Predictor",
    period: "2026",
    description:
      "Solo end-to-end ML pipeline (ingestion → feature engineering → training → evaluation) with two deployment architectures: a monolithic Streamlit app and a decoupled FastAPI + Streamlit service.",
    stack: ["Python", "scikit-learn", "MLflow", "FastAPI", "Streamlit"],
    result: "ROC-AUC 0.903 · R² 0.577 / MAE 2.70 LPA",
    repo: "https://github.com/ixircs/student-placement-predictor",
  },
  {
    title: "Credit Score Deployment",
    period: "2026",
    description:
      "Local (MLflow-tracked) and cloud (AWS SageMaker + EC2) deployment pipelines for a 3-class credit risk classifier, served via a public Streamlit app calling a live SageMaker endpoint.",
    stack: ["Python", "XGBoost", "AWS SageMaker", "EC2"],
    result: "Tuned XGBoost · Macro F1 0.7245",
    repo: "https://github.com/ixircs/credit-score-deployment",
  },
  {
    title: "Disaster Image Classification",
    period: "2026",
    description:
      "Compared CNN-from-scratch, EfficientNet-B0, and MobileNetV2 on a 29:1 imbalanced 4-class dataset. Team of 2.",
    stack: ["Python", "TensorFlow/Keras", "pandas", "matplotlib"],
    result: "EfficientNet-B0 · Macro F1 0.7643 · 87.46% acc",
    repo: "https://github.com/ixircs/disaster-image-classification",
  },
  {
    title: "ASA DataFest 2026: ED Barriers",
    period: "2026",
    description:
      "Identified transportation and financial barriers driving higher emergency department utilization; validated externally against ACS Census vehicle-access data. Team of 4.",
    stack: ["Python", "Jupyter"],
    result: "40.1% vs 8.4% ED visit rate · ~5x",
    repo: "https://github.com/ixircs/asa-datafest-2026-ed-barriers",
    note: "Dataset under a competition data-use restriction — repo contains analysis only, no raw data.",
  },
];

const otherWork = {
  title: "CompFest 18 DAD (Data Analytics Dash)",
  description:
    "Qualified to Top 15 via a real-time SQL query online-judge round. Built a star-schema data model (dim_negara, dim_provinsi, dim_tahun + fact tables) in Python/pandas and a Power BI dashboard.",
  stack: ["Python", "SQL", "pandas", "Power BI"],
  result: "ρ = -0.79 · internet price vs. users, 186 countries",
};

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "SQL"] },
  {
    label: "ML / Deep Learning",
    items: ["scikit-learn", "XGBoost", "TensorFlow/Keras"],
  },
  { label: "Deployment", items: ["FastAPI", "Streamlit", "MLflow"] },
  { label: "Cloud & Data", items: ["AWS SageMaker", "pandas", "NumPy"] },
  { label: "Tools", items: ["Power BI", "Git"] },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/ixircs",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryan-christopher-setiawan-517193324/",
    icon: (
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.5h3.4V21H3.5V8.5Zm6.2 0h3.26v1.71h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.08 2.27 4.08 5.22V21h-3.4v-6.63c0-1.58-.03-3.61-2.2-3.61-2.21 0-2.55 1.72-2.55 3.5V21H9.7V8.5Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:ryanchristophersetiawan111@gmail.com",
    icon: (
      <path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h16a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5v-13Zm2.2.5 7.3 5.9 7.3-5.9H4.7Zm14.3 1.6-6.86 5.54a1.5 1.5 0 0 1-1.88 0L4.5 7.6V18h15V7.6Z" />
    ),
  },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "var(--accent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[600px] -right-40 h-[400px] w-[400px] rounded-full opacity-[0.08] blur-[100px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
        {/* Hero */}
        <header className="mb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Open to Data Science / Analyst internships
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
            Ryan Christopher
            <br />
            Setiawan
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-neutral-400 leading-relaxed">
            Data Science student at BINUS University — building and
            deploying machine learning models, from data pipeline to cloud.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-neutral-200 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-neutral-400 transition-colors group-hover:fill-[var(--accent)]"
                >
                  {l.icon}
                </svg>
                {l.label}
              </a>
            ))}
          </div>
        </header>

        {/* Projects */}
        <section className="mb-20">
          <Kicker>Selected Work</Kicker>
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-medium text-neutral-100">{p.title}</h3>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">
                    {p.period}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-neutral-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-[var(--accent)]">
                  {p.result}
                </p>
                {p.note && (
                  <p className="text-xs text-neutral-500 italic">{p.note}</p>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors group-hover:text-[var(--accent)]"
                  >
                    View repository
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Other work */}
        <section className="mb-20">
          <Kicker>Competitions</Kicker>
          <h2 className="text-2xl font-semibold mb-8">Other Work</h2>
          <article className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-medium text-neutral-100">
              {otherWork.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {otherWork.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {otherWork.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-neutral-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="text-sm font-medium text-[var(--accent)]">
              {otherWork.result}
            </p>
            <p className="text-xs text-neutral-500 italic">
              Repo not published yet.
            </p>
          </article>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <Kicker>Toolbox</Kicker>
          <h2 className="text-2xl font-semibold mb-8">Tech I Use</h2>
          <div className="flex flex-col gap-4">
            {skillGroups.map((g) => (
              <div
                key={g.label}
                className="flex flex-col gap-2 sm:flex-row sm:items-center"
              >
                <span className="w-40 shrink-0 text-xs uppercase tracking-wide text-neutral-500">
                  {g.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-neutral-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-4 border-t border-[var(--border)] pt-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Jakarta, Indonesia</p>
          <div className="flex gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[var(--accent)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
