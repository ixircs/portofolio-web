export type ProjectImage = { src: string; caption: string; width: number; height: number };

export type Project = {
  slug: string;
  title: string;
  period: string;
  team: string;
  description: string;
  stack: string[];
  result: string;
  repo?: string;
  demo?: string;
  note?: string;
  summary: string;
  metrics: { label: string; value: string }[];
  methodology: string[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "student-placement-predictor",
    title: "Student Placement Predictor",
    period: "2026",
    team: "Solo",
    description:
      "Solo end-to-end ML pipeline (ingestion → feature engineering → training → evaluation) with two deployment architectures: a monolithic Streamlit app and a decoupled FastAPI + Streamlit service.",
    stack: ["Python", "scikit-learn", "MLflow", "FastAPI", "Streamlit"],
    result: "ROC-AUC 0.903 · R² 0.577 / MAE 2.70 LPA",
    repo: "https://github.com/ixircs/student-placement-predictor",
    summary:
      "Two prediction tasks on the same dataset: a classifier for placement outcome and a regressor for expected salary (LPA). Built twice — once as a single Streamlit app, once as a FastAPI backend behind a separate Streamlit frontend — to compare monolithic vs. decoupled serving.",
    metrics: [
      { label: "Classification · Accuracy", value: "0.813" },
      { label: "Classification · F1 (weighted)", value: "0.8365" },
      { label: "Classification · ROC-AUC", value: "0.9029" },
      { label: "Regression · R²", value: "0.577" },
      { label: "Regression · MAE", value: "2.70 LPA" },
    ],
    methodology: [
      "Cleaned and feature-engineered the raw placement dataset, then split into classification (placed/not) and regression (salary) targets.",
      "Tracked every training run — hyperparameters and metrics — in MLflow to pick the best model per task.",
      "Deployed twice: a monolithic Streamlit app for quick local use, and a decoupled FastAPI service (POST endpoint) with a separate Streamlit client, to demonstrate a production-style split architecture.",
      "Verified both deployment paths with live API request/response tests.",
    ],
    images: [
      { src: "/projects/student-placement-predictor/frontend.png", caption: "Streamlit frontend — combined classification + regression input form", width: 940, height: 598 },
      { src: "/projects/student-placement-predictor/api_test.png", caption: "Live FastAPI endpoint test — classification request/response", width: 893, height: 793 },
      { src: "/projects/student-placement-predictor/mlflow_runs.png", caption: "MLflow run comparison — classification experiments", width: 944, height: 214 },
      { src: "/projects/student-placement-predictor/mlflow_params.png", caption: "MLflow logged hyperparameters — regression model", width: 931, height: 842 },
    ],
  },
  {
    slug: "credit-score-deployment",
    title: "Credit Score Deployment",
    period: "2026",
    team: "Solo",
    description:
      "Local (MLflow-tracked) and cloud (AWS SageMaker + EC2) deployment pipelines for a 3-class credit risk classifier, served via a public Streamlit app calling a live SageMaker endpoint.",
    stack: ["Python", "XGBoost", "AWS SageMaker", "EC2", "Streamlit", "MLflow"],
    result: "Tuned XGBoost · Macro F1 0.7245",
    repo: "https://github.com/ixircs/credit-score-deployment",
    summary:
      "3-class credit score classification (Poor / Standard / Good), tuned with MLflow experiment tracking locally, then deployed to AWS: a real-time SageMaker endpoint behind a Streamlit app running on EC2.",
    metrics: [
      { label: "Model", value: "Tuned XGBoost" },
      { label: "Macro F1 (test)", value: "0.7245" },
      { label: "Deployment", value: "SageMaker real-time endpoint + EC2" },
    ],
    methodology: [
      "Trained and hyperparameter-tuned XGBoost locally, tracking every run's metrics in MLflow to select the best model.",
      "Packaged the tuned model and deployed it as a real-time inference endpoint on AWS SageMaker.",
      "Built a Streamlit front end on an EC2 instance that calls the live SageMaker endpoint for predictions.",
      "AWS resources ran under a time-boxed AWS Academy Learner Lab — the endpoint and EC2 instance were torn down after grading to avoid ongoing costs. The screenshots below are the record of the working deployment.",
    ],
    images: [
      { src: "/projects/credit-score-deployment/streamlit.png", caption: "Public Streamlit app on EC2, calling the live SageMaker endpoint", width: 1902, height: 988 },
      { src: "/projects/credit-score-deployment/sagemaker_endpoint.png", caption: "AWS SageMaker — real-time endpoint in service", width: 1914, height: 981 },
      { src: "/projects/credit-score-deployment/ec2_instance.png", caption: "AWS EC2 — running instance hosting the Streamlit app", width: 1907, height: 984 },
      { src: "/projects/credit-score-deployment/sagemaker_artifacts.png", caption: "SageMaker model artifacts", width: 624, height: 185 },
      { src: "/projects/credit-score-deployment/mlflow.png", caption: "MLflow experiment tracking — local tuning runs", width: 1911, height: 654 },
    ],
    note: "AWS endpoint/instance were torn down after grading (AWS Academy Learner Lab credentials are time-boxed) — not live, but verifiably built and tested.",
  },
  {
    slug: "disaster-image-classification",
    title: "Disaster Image Classification",
    period: "2026",
    team: "Team of 2",
    description:
      "Compared CNN-from-scratch, EfficientNet-B0, and MobileNetV2 on a 29:1 imbalanced 4-class dataset. Team of 2.",
    stack: ["Python", "TensorFlow/Keras", "pandas", "matplotlib"],
    result: "EfficientNet-B0 · Macro F1 0.7643 · 87.46% acc",
    repo: "https://github.com/ixircs/disaster-image-classification",
    summary:
      "Multi-class disaster image classification (Kaggle disaster-images-dataset, ~1,946 images, 29:1 class imbalance). Three architectures were trained and compared under the same stratified 70/15/15 split, class weighting, and train-only augmentation.",
    metrics: [
      { label: "CNN (scratch) · Accuracy", value: "52.54%" },
      { label: "CNN (scratch) · Macro F1", value: "0.1827" },
      { label: "EfficientNet-B0 · Accuracy", value: "87.46%" },
      { label: "EfficientNet-B0 · Macro F1", value: "0.7643" },
      { label: "MobileNetV2 · Accuracy", value: "87.12%" },
      { label: "MobileNetV2 · Macro F1", value: "0.7280" },
    ],
    methodology: [
      "Stratified 70/15/15 train/val/test split to preserve class ratios under a 29:1 imbalance.",
      "Applied class weighting and train-only data augmentation to counter the imbalance without leaking augmented samples into validation/test.",
      "Trained and compared three architectures: a CNN built from scratch (baseline), EfficientNet-B0, and MobileNetV2 (both via transfer learning).",
      "Evaluated all three on the held-out test set using accuracy and macro F1 (macro F1 matters most here given the imbalance).",
    ],
    images: [
      { src: "/projects/disaster-image-classification/class_distribution.png", caption: "Class distribution — 29:1 imbalance across 4 disaster categories", width: 1300, height: 495 },
      { src: "/projects/disaster-image-classification/model_comparison.png", caption: "Accuracy / Macro F1 comparison — CNN vs EfficientNet-B0 vs MobileNetV2", width: 989, height: 490 },
      { src: "/projects/disaster-image-classification/confusion_matrix.png", caption: "Confusion matrix — best model (EfficientNet-B0)", width: 657, height: 590 },
    ],
  },
  {
    slug: "asa-datafest",
    title: "ASA DataFest 2026: ED Barriers",
    period: "2026",
    team: "Team of 4",
    description:
      "Identified transportation and financial barriers driving higher emergency department utilization; validated externally against ACS Census vehicle-access data. Team of 4.",
    stack: ["Python", "Jupyter", "pandas"],
    result: "40.1% vs 8.4% ED visit rate · ~5x",
    repo: "https://github.com/ixircs/asa-datafest-2026-ed-barriers",
    summary:
      "Analyzed real (aggregated, de-identified) hospital operational data provided by Stormont Vail Health under a competition data-use agreement, to find what drives emergency-department overutilization — then cross-checked the self-reported barrier signal against independent ACS Census data.",
    metrics: [
      { label: "ED visit rate — barrier group", value: "40.1%" },
      { label: "ED visit rate — non-barrier group", value: "8.4%" },
      { label: "Ratio", value: "~5x" },
      { label: "ACS vehicle-access validation", value: "2.9% → 9.8% (~3.3x)" },
      { label: "MyChart engagement (barrier vs. non-barrier)", value: "34.6 vs. 23.8 visits" },
      { label: "Provider load (top decile vs. P75)", value: "~5x" },
    ],
    methodology: [
      "Classified patients by self-reported access barriers (transportation, financial) from the hospital's social determinants data.",
      "Compared ED utilization rates between barrier and non-barrier groups, and cross-referenced with MyChart patient-portal engagement and provider load.",
      "Externally validated the self-reported transportation-barrier signal against ACS Census vehicle-ownership data for the same counties — an independent, government-sourced check rather than relying on self-report alone.",
      "Raw patient-level data is never published — the repository contains only the analysis notebooks and aggregate result charts, in line with the competition's data-use agreement.",
    ],
    images: [
      { src: "/projects/asa-datafest/system_portrait.png", caption: "System portrait — overview of the patient population studied", width: 2977, height: 1848 },
      { src: "/projects/asa-datafest/population_visit_barrier.png", caption: "ED visit rate by access-barrier status", width: 3125, height: 1520 },
      { src: "/projects/asa-datafest/ed_rate_detail.png", caption: "ED overutilization — detailed breakdown", width: 3222, height: 1331 },
      { src: "/projects/asa-datafest/mychart_visit_analysis.png", caption: "MyChart (patient portal) engagement vs. visit frequency", width: 2807, height: 1294 },
      { src: "/projects/asa-datafest/provider_load.png", caption: "Provider load distribution — bottleneck analysis", width: 3938, height: 1662 },
    ],
    note: "Dataset under a competition data-use restriction (real hospital data from Stormont Vail Health) — repo contains analysis only, no raw patient data.",
  },
  {
    slug: "coffee-weather-shocks",
    title: "Coffee Weather Shocks",
    period: "2026",
    team: "Solo",
    description:
      "Independent research: can the July 2021 Brazil frost be detected and measured in global coffee prices? End-to-end pipeline over World Bank price, NASA POWER climate and FX data, using Arabica vs. Robusta as a treated/control pair.",
    stack: ["Python", "pandas", "statsmodels", "REST APIs", "reproducible pipeline"],
    result: "A 2 °C frost threshold detected 0 frost days — replaced with per-region percentiles",
    repo: "https://github.com/ixircs/coffee",
    summary:
      "Brazil is the largest Arabica producer, a severe frost hit its growing regions in July 2021, and prices rose sharply afterwards. But prices were already rising before the frost, so \u201cfrost happened, prices went up\u201d is not something the data supports on its own. Robusta \u2014 grown in Vietnam and Indonesia, exposed to the same shipping costs, demand and inflation but not to Brazilian frost \u2014 provides the comparison. The project combines three independent public sources into one monthly panel and documents, in detail, which measurement choices failed and what replaced them.",
    metrics: [
      { label: "Independent data sources combined", value: "3 (World Bank · NASA POWER · FX)" },
      { label: "Frost days found at a 2 °C threshold", value: "0 (July 2021)" },
      { label: "Actual low, Sul de Minas, 20 Jul 2021", value: "3.05 °C (July normal 8–12 °C)" },
      { label: "Replacement percentile thresholds", value: "6.06 / 7.07 / 7.35 °C by region" },
      { label: "Pre-frost trend in log(Arabica) − log(Robusta)", value: "+0.0132 / month (p = 1.6e-16)" },
      { label: "Pre-frost divergence (36 months)", value: "≈ +61% — parallel trends fail" },
      { label: "Peak post-frost gap", value: "+19.8 index points (Jun 2022)" },
    ],
    methodology: [
      "Built one monthly analysis panel from three independent public sources: World Bank Pink Sheet prices (Arabica and Robusta in the same file and the same unit, so no conversion is needed), NASA POWER daily temperature for three specific Brazilian growing regions, and BRL/USD — because Brazilian farmers sell in USD but spend in BRL, so the exchange rate moves coffee prices with no weather event at all.",
      "Handled the encoding traps each source carries: the Pink Sheet has two header rows and writes missing values as an ellipsis character, and NASA POWER encodes missing values as −999.0 — left unconverted, Python reads that as the coldest day on record and corrupts every percentile derived from the series.",
      "Started from the physically obvious frost definition (daily minimum ≤ 2 °C) and found it detected zero frost days in July 2021, for an event the ICO called one of the most intense frosts in living memory. The cause is the instrument, not the data: the grid cell is ~50 km across so local cold pockets average out, and the reading is taken 2 m above ground while the damage happens at the surface.",
      "Replaced it with a per-region percentile threshold computed from each location's own June–August history (≈2nd percentile), which yields a different cut-off per region (6.06–7.35 °C) — each region needs its own definition of unusually cold.",
      "Verified the event date against the primary source (ICO Coffee Market Report, July 2021) rather than a secondary summary. That corrected two inherited claims: there was one frost wave on 20 July, not two, and part of the price rise was already anticipated because 2021/22 was an off year in Arabica's biennial bearing cycle.",
      "Tested the identifying assumption instead of assuming it, and reported that it fails: over a 36-month pre-period the Arabica–Robusta gap was already trending up (+0.0132/month, p = 1.6e-16, ≈ +61%), larger than the ≈20% divergence after the frost. No causal estimate is claimed on top of a pre-trend that size.",
    ],
    images: [
      { src: "/projects/coffee-weather-shocks/prices_arabica_robusta.png", caption: "Monthly Arabica (treated) and Robusta (control) prices, 2006–2026, with the July 2021 frost marked — World Bank Pink Sheet, nominal USD/kg", width: 1650, height: 750 },
      { src: "/projects/coffee-weather-shocks/indexed_prices.png", caption: "Prices indexed to June 2021 = 100. If the frost hit Arabica alone, the brown line should pull away from the blue one; the peak gap reaches +19.8 points in June 2022", width: 1650, height: 750 },
      { src: "/projects/coffee-weather-shocks/pretrend_test.png", caption: "Parallel-trends test: the log price gap was already rising before the frost (+0.0132/month, p = 1.6e-16), so the assumption a difference-in-differences estimate would need does not hold", width: 1650, height: 750 },
    ],
    note: "Reports no causal estimate, deliberately: parallel trends fail, Vietnam's 2021 COVID lockdown contaminated the Robusta control, and Arabica's biennial cycle moves the treated series but not the control. Exploratory event-study and forecasting notebooks are in the repo, but their causal interpretation is not presented as a finding. Chart labels are in Indonesian.",
  },
  {
    slug: "bfull",
    title: "bfull — Order-Ahead Canteen App",
    period: "2026",
    team: "Team of 7",
    description:
      "Cross-platform (web + Android) order-ahead app for the BINUS canteen: live queue board, tray, QRIS payment simulation and real-time order tracking. Built for the Human & Computer Interaction course and tested with 20 users.",
    stack: ["Expo / React Native", "Expo Router", "NativeWind", "TypeScript", "Figma"],
    result: "4.80/5 overall satisfaction (n = 20 user testers)",
    repo: "https://github.com/ixircs/bfull-app",
    demo: "https://ryanchristopher-bfull.expo.app",
    summary:
      "Students at the BINUS canteen get 20\u201330 minutes between classes, and most of it goes to queueing and waiting. bfull moves the whole ordering flow onto the phone: browse by tenant or by dish, see how long each stall\u2019s queue is, pay cashlessly, then track the order from Confirmed to Ready and walk over only when the food is done. One Expo/React Native codebase ships to the browser and to Android.",
    metrics: [
      { label: "User testers", value: "20 (11 desktop · 9 mobile)" },
      { label: "Overall satisfaction", value: "4.80 / 5.00" },
      { label: "Usable without instructions", value: "4.75 / 5.00" },
      { label: "Flow logic (login → tracking)", value: "4.45 / 5.00" },
      { label: "Visual clarity", value: "4.45 / 5.00" },
      { label: "Task completion without issues", value: ">90% of participants" },
      { label: "Estimated break time saved", value: "8–12 min (55% of testers)" },
    ],
    methodology: [
      "Framed the problem from the real constraint: a 20–30 minute break, three overlapping bottlenecks (queue congestion, unproductive cooking wait, no visibility into stock or queue length).",
      "Designed the interface in Figma and iterated through paper prototyping and heuristic evaluation before writing front-end code — cheaper to rework a mental-model mistake on paper than in React Native.",
      "Built the high-fidelity prototype in Expo/React Native with Expo Router and NativeWind, using a React Context store for the cart and AsyncStorage for session persistence, so state survives navigation and reloads.",
      "Applied specific HCI principles as implementation decisions: single-tenant cart guard and hidden checkout on an empty tray (error prevention), a three-stage order tracker (visibility of system status), and one consistent orange signifier for every primary action.",
      "Ran user testing with 20 BINUS students on real devices (11 laptop, 9 mobile), each completing five unguided task scenarios from login to delay notification, then rated usability on a 1–5 Likert questionnaire.",
      "Documented the prototype's honest limits in the report: QRIS payment is a simulated pop-up, persistence is local-only (AsyncStorage), so cross-device continuity and network-latency behaviour were not testable.",
    ],
    images: [
      { src: "/projects/bfull/home.png", caption: "Home — live canteen queue board (per-tenant load and wait estimate) above search, category filters and the menu grid", width: 1216, height: 941 },
      { src: "/projects/bfull/tray.png", caption: "Tray — single-tenant cart with quantity steppers, vouchers and live total", width: 936, height: 936 },
      { src: "/projects/bfull/payment.png", caption: "Cashless payment — simulated QRIS pop-up over the tray", width: 944, height: 857 },
      { src: "/projects/bfull/order_tracking.png", caption: "Order tracker — Confirmed → Cooking → Ready with estimated pickup time", width: 942, height: 375 },
    ],
    note: "Team project (Kelompok 3, HCI course, 7 members). My role: UI/UX design in Figma, feature implementation, and repository/deployment setup. High-fidelity prototype — payment is simulated, no production backend.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
