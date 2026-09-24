import type { Project } from './types';

// HOW TO ADD A NEW PROJECT
// ------------------------
// Copy an existing object, give it a new `id` and `number`, and fill in the
// fields you have. Anything you don't know yet, leave as an empty string or
// remove the field — the UI is built to handle missing optional fields.

export const projects: Project[] = [
  {
    id: 'enterprise-ai-platform',
    number: '01',
    title: 'Enterprise AI Decision Intelligence Platform',
    subtitle:
      'A platform for enterprise AI observability, analytics, forecasting and decision support',
    category: 'Big Data · AI · Analytics',
    tier: 'major',
    summary:
      'My primary M.Sc. project. Organizations now run AI models across many providers and departments — this project explores how to give them one place to see usage, cost, performance and anomalies across all of it.',
    technologies: [
      'Apache Spark',
      'PySpark',
      'Databricks',
      'Spark SQL',
      'Data Processing',
      'Analytics Dashboards',
      'Machine Learning (where applicable)',
    ],
    caseStudy: {
      problem: [
        'AI costs growing unpredictably across teams',
        'Multiple AI providers used independently across departments',
        'Limited visibility into overall enterprise AI usage',
        'Difficulty forecasting future AI spending',
        'Unexpected latency and failures going unnoticed',
        'Difficulty identifying where usage could be optimised',
      ],
      approach:
        'The platform is designed to ingest AI usage and cost data, process it at scale with Apache Spark and PySpark on Databricks, and surface it through dashboards built for forecasting and decision support rather than raw log-reading.',
      architecture:
        'Data ingestion → Spark/PySpark processing on Databricks → Spark SQL transformations → analytics and forecasting layer → dashboard / reporting layer.',
      implemented: [
        '— add the components you have built and tested so far (e.g. specific ingestion pipeline, Spark jobs, or dashboard views) —',
      ],
      planned: [
        '— add the components still on the roadmap (e.g. anomaly detection, cost forecasting model, provider comparison view) —',
      ],
    },
    note: 'Ongoing M.Sc. project. This card is intentionally split into “built so far” and “planned” — update both lists as the project progresses.',
    github: '',
    docs: '',
  },
  {
    id: 'genome-analysis',
    number: '02',
    title: 'Genome & Gene Structure Analysis',
    subtitle: 'A large-scale bioinformatics data-processing and visualisation project',
    category: 'Bioinformatics · Data Analytics · Visualization',
    tier: 'major',
    summary:
      'Processed and validated a full genome annotation dataset, then explored gene structure, transcript diversity and chromosomal patterns in Power BI. A data-analysis project, not a medical or diagnostic one.',
    technologies: ['Python', 'Linux / Bash', 'Power BI', 'Data Validation', 'GTF Parsing'],
    dataset: 'UCSC hs1 / NCBI RefSeq GTF annotation data',
    stats: [
      { label: 'Records processed', value: '4,667,175' },
      { label: 'Genes', value: '57,514' },
      { label: 'Transcripts', value: '194,234' },
      { label: 'Feature types', value: '7' },
      { label: 'Chromosomes', value: '24' },
    ],
    caseStudy: {
      problem: [
        'Raw GTF annotation data is large, inconsistent and unvalidated before it can be analysed',
      ],
      approach:
        'Parsed the raw GTF file with Python on Linux, then ran systematic validation before any analysis: checking for invalid coordinates, invalid strands, invalid chromosomes, and missing gene_id, transcript_id or gene_name fields. Clean, validated data was then aggregated into summary tables and explored in Power BI.',
      architecture:
        'Raw GTF (UCSC hs1 / NCBI RefSeq) → Python parsing & validation (Bash-driven pipeline) → gene_summary.csv / transcript_summary.csv → Power BI visualisation.',
      implemented: [
        'Validation pipeline for coordinates, strands, chromosomes and required IDs',
        'gene_summary.csv and transcript_summary.csv outputs',
        'Power BI exploration of gene structure, transcript diversity, exon/CDS/UTR structure and chromosomal patterns',
      ],
    },
    note: 'Presented as a bioinformatics data-analysis and visualisation project — not a clinical or diagnostic tool.',
    github: '',
    docs: '',
  },
  {
    id: 'parkinsons-severity',
    number: '03',
    title: "Parkinson's Severity Prediction",
    subtitle: 'A PySpark/Databricks workflow for a clinical telemonitoring dataset',
    category: 'Machine Learning · Big Data',
    tier: 'major',
    summary:
      "Built a full PySpark preprocessing and analysis workflow on the Parkinson's telemonitoring dataset — from raw data to a patient-level, model-ready split.",
    technologies: ['PySpark', 'Databricks', 'Spark DataFrames', 'Machine Learning'],
    dataset: "Parkinson's telemonitoring dataset",
    caseStudy: {
      problem: [
        'Telemonitoring data needs careful, patient-aware preparation before it can be used responsibly for modelling',
      ],
      approach:
        'Loaded the dataset into Spark DataFrames, checked for nulls, ran feature and correlation analysis, and split the data by patient (rather than by row) to avoid leaking a patient across train and test sets — then prepared the result for machine-learning use.',
      implemented: [
        'Data loading and null checking in PySpark',
        'Feature analysis and correlation analysis',
        'Patient-level train/test splitting',
        'PySpark preprocessing pipeline ready for model training',
      ],
      planned: ['Model training and evaluation — results to be added once complete'],
    },
    note: 'No accuracy or performance figures are published here yet — they will be added once training and evaluation are complete.',
    github: '',
    docs: '',
  },
  {
    id: 'cataract-detection-ai',
    number: '04',
    title: 'Cataract Detection using Multi-Modal Explainable AI',
    subtitle: 'Fundus image + metadata classification with Grad-CAM explainability',
    category: 'AI · Computer Vision',
    tier: 'featured',
    summary:
      'A multi-modal deep learning system that combines fundus images with patient metadata to classify cataract vs. normal, with Grad-CAM used to visualise what the model is looking at.',
    technologies: ['Python', 'TensorFlow / Keras', 'OpenCV', 'Scikit-learn', 'MobileNetV2', 'Grad-CAM'],
    dataset: 'ODIR-5K (public ocular disease recognition dataset)',
    results: [
      'Accuracy: ~96–97% (as reported in the project README, on the ODIR-5K test split)',
      'ROC-AUC: ~0.94',
    ],
    future: [
      'Deployment as a web application',
      'Real-time clinical screening',
      'Enhanced multi-modal fusion',
    ],
    note: 'A research/coursework project, not a validated clinical or diagnostic tool.',
    github: 'https://github.com/aamnagirnari-oss/Cataract-Detection-AI',
  },
  {
    id: 'movie-recommendation-system',
    number: '05',
    title: 'Movie Recommendation System',
    subtitle: 'Collaborative filtering and matrix factorisation on the MovieLens dataset',
    category: 'Machine Learning',
    tier: 'featured',
    summary:
      'Built step by step — from a correlation-based recommender, through SVD-based collaborative filtering, to an IMDb-style weighted ranking — with an interactive Streamlit interface on top.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'SVD', 'Cosine Similarity'],
    dataset: 'MovieLens dataset (ratings + movies)',
    results: [
      'User-based and movie-based recommendations',
      'SVD (matrix factorisation) and cosine-similarity approaches, compared against each other',
      'Interactive Streamlit app for exploring recommendations',
    ],
    future: [
      'Movie posters via the TMDB API',
      'A Netflix-style grid UI',
      'Evaluation with Precision@K',
    ],
    github: 'https://github.com/aamnagirnari-oss/movie-recommendation-system',
  },
  {
    id: 'ai-game-tester',
    number: '06',
    title: 'AI Game Tester',
    subtitle: 'Comparing a random agent against a BFS-based agent in a grid game',
    category: 'AI · Python',
    tier: 'featured',
    summary:
      'A grid-based simulation environment for testing two AI agents head-to-head, with path tracking, heatmaps and performance graphs to compare them.',
    technologies: ['Python', 'Pygame', 'NumPy', 'Matplotlib'],
    results: [
      'Random agent vs. a BFS-based “smart” agent, compared side by side',
      'The BFS agent reaches the goal with a higher success rate and fewer steps, as shown in the generated performance graphs and heatmaps',
    ],
    github: 'https://github.com/aamnagirnari-oss/ai-game-tester',
  },
  {
  id: 'swarm-behaviour-classification',
  number: '07',
  title: 'Swarm Behaviour Classification Using Machine Learning',
  subtitle: 'A machine learning project inspired by swarm intelligence and swarm behaviour analysis',
  category: 'Machine Learning · Swarm Intelligence',
  tier: 'featured',
  summary:
    'A machine learning project inspired by swarm intelligence and swarm behaviour analysis, focused on classifying swarm behaviour using supervised learning models and comparing their performance.',
  technologies: [
    'Python',
    'Machine Learning',
    'Logistic Regression',
    'Random Forest',
    'Optimized Random Forest',
  ],
  results: [
    'Compared Logistic Regression, Random Forest and Optimized Random Forest models',
    'Evaluated model performance using ROC curve comparison',
    'Analysed classification results using confusion matrices',
    'Examined important features using feature-importance analysis',
  ],
},
  {
    id: 'data-aggregation',
    number: '08',
    title: 'Data Aggregation Practical',
    subtitle: 'Sum, mean, count, multi-level grouping and time-based aggregation',
    category: 'Data Analytics',
    tier: 'minor',
    summary:
      'A data-mining practical covering core aggregation types (sum, mean, count, min, max), multi-level grouping, and time-based aggregation, implemented in Python and Pandas.',
    technologies: ['Python', 'Pandas'],
    github: 'https://github.com/aamnagirnari-oss/Data-Aggregation-it-s-type',
  },
  {
    id: 'sql-practicals',
    number: '09',
    title: 'SQL & Database Practicals',
    subtitle: 'Queries, joins and schema design from coursework',
    category: 'SQL / Databases',
    tier: 'minor',
    summary: '— add a short description and link once you pick which practicals to feature —',
    technologies: ['SQL'],
  },
  {
    id: 'r-analytics',
    number: '10',
    title: 'R Analytics Projects',
    subtitle: 'Statistical analysis and exploratory work in R',
    category: 'R / Statistics',
    tier: 'minor',
    summary: '— add a short description and link once you pick which R project to feature —',
    technologies: ['R'],
  },
  {
    id: 'math-analytical-work',
    number: '11',
    title: 'Mathematics & Analytical Work',
    subtitle: 'Selected coursework from my B.Sc. Mathematics',
    category: 'Mathematics',
    tier: 'minor',
    summary: '[Add Mathematics project] — [Add mathematical analysis] — [Add relevant coursework]',
    technologies: ['Mathematics'],
  },
];

// Power BI work has its own dedicated section (Data Visualization) rather than a
// minor card here — see src/components/DataVisualization.tsx.

export const majorProjects = projects.filter((p) => p.tier === 'major');
export const featuredProjects = projects.filter((p) => p.tier === 'featured');
export const minorProjects = projects.filter((p) => p.tier === 'minor');
export const placeholderProject = projects.find((p) => p.tier === 'placeholder')!;
