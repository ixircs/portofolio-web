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
    result: "ROC-AUC 0.903 (classification), R² 0.577 / MAE 2.70 LPA (regression)",
    repo: "https://github.com/ixircs/student-placement-predictor",
  },
  {
    title: "Credit Score Deployment",
    period: "2026",
    description:
      "Local (MLflow-tracked) and cloud (AWS SageMaker + EC2) deployment pipelines for a 3-class credit risk classifier, served via a public Streamlit app calling a live SageMaker endpoint.",
    stack: ["Python", "XGBoost", "AWS SageMaker", "EC2"],
    result: "Tuned XGBoost, Macro F1 0.7245",
    repo: "https://github.com/ixircs/credit-score-deployment",
  },
  {
    title: "Disaster Image Classification",
    period: "2026",
    description:
      "Compared CNN-from-scratch, EfficientNet-B0, and MobileNetV2 on a 29:1 imbalanced 4-class dataset. Team of 2.",
    stack: ["Python", "TensorFlow/Keras", "pandas", "matplotlib"],
    result: "EfficientNet-B0: Macro F1 0.7643, Accuracy 87.46%",
    repo: "https://github.com/ixircs/disaster-image-classification",
  },
  {
    title: "ASA DataFest 2026: ED Barriers",
    period: "2026",
    description:
      "Identified transportation and financial barriers driving higher emergency department utilization; validated externally against ACS Census vehicle-access data. Team of 4.",
    stack: ["Python", "Jupyter"],
    result: "ED visit rate 40.1% (barrier) vs 8.4% (no barrier), ~5x",
    repo: "https://github.com/ixircs/asa-datafest-2026-ed-barriers",
    note: "Dataset under a competition data-use restriction — repo contains analysis only, no raw data.",
  },
];

const otherWork = {
  title: "CompFest 18 DAD (Data Analytics Dash)",
  description:
    "Qualified to Top 15 via a real-time SQL query online-judge round. Built a star-schema data model (dim_negara, dim_provinsi, dim_tahun + fact tables) in Python/pandas and a Power BI dashboard.",
  stack: ["Python", "SQL", "pandas", "Power BI"],
  result: "Internet price (% GNI) vs. internet users correlation ρ = -0.79 across 186 countries",
};

const skills = [
  "Python",
  "SQL",
  "pandas",
  "NumPy",
  "scikit-learn",
  "XGBoost",
  "TensorFlow/Keras",
  "MLflow",
  "FastAPI",
  "Streamlit",
  "AWS SageMaker",
  "Power BI",
  "Git",
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Ryan Christopher Setiawan
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-400">
          Data Science student at BINUS University — machine learning,
          deployment, and analytics.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            className="underline underline-offset-4 hover:text-white"
            href="https://github.com/ixircs"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline underline-offset-4 hover:text-white"
            href="https://www.linkedin.com/in/ryan-christopher-setiawan-517193324/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="underline underline-offset-4 hover:text-white"
            href="mailto:ryanchristophersetiawan111@gmail.com"
          >
            Email
          </a>
        </div>
      </header>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-neutral-800 p-5 flex flex-col gap-3 hover:border-neutral-600 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-medium">{p.title}</h3>
                <span className="text-xs text-neutral-500 whitespace-nowrap">
                  {p.period}
                </span>
              </div>
              <p className="text-sm text-neutral-400">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs rounded-full border border-neutral-700 px-2 py-0.5 text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-neutral-200">
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
                  className="text-sm underline underline-offset-4 text-neutral-300 hover:text-white mt-1"
                >
                  View repo →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Other work */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Other Work</h2>
        <article className="rounded-lg border border-neutral-800 p-5 flex flex-col gap-3">
          <h3 className="font-medium">{otherWork.title}</h3>
          <p className="text-sm text-neutral-400">{otherWork.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {otherWork.stack.map((s) => (
              <span
                key={s}
                className="text-xs rounded-full border border-neutral-700 px-2 py-0.5 text-neutral-300"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-neutral-200">
            {otherWork.result}
          </p>
          <p className="text-xs text-neutral-500 italic">
            Repo not published yet.
          </p>
        </article>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Tech I Use</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="text-sm rounded-full border border-neutral-700 px-3 py-1 text-neutral-300"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 pt-6 text-sm text-neutral-500">
        <p>Jakarta, Indonesia</p>
        <p className="mt-1">
          <a
            className="underline underline-offset-4 hover:text-white"
            href="mailto:ryanchristophersetiawan111@gmail.com"
          >
            ryanchristophersetiawan111@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
