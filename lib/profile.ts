import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Parvez Shaik",
  title: "Software Developer focused on full-stack applications, backend APIs, cloud reliability, and AI retrieval systems",
  location: "Bloomington, Indiana",
  email: "shaikparvez977@gmail.com",
  phone: "+1 (930) 904 4515",
  linkedin: "https://www.linkedin.com/in/parvez-shaik",
  github: "https://github.com/Parvez4",
  resume: "/Parvez_Shaik_Resume_SDE.pdf",
  summary:
    "Software Developer experienced in building web applications, backend services, APIs, and database-driven systems across the software development lifecycle. I work across React, TypeScript, Node.js, Python, Java, SQL databases, Docker, Jenkins, AWS EC2, and AI retrieval systems, with a strong focus on performance, testing, deployment reliability, and practical product impact.",
};

export const proofPoints = [
  {
    value: "99.7%",
    label: "Deployment reliability",
    detail: "Made production releases steadier by tracing failures through Jenkins, Docker runtime behavior, and AWS EC2 deployment paths.",
  },
  {
    value: "420 -> 295 ms",
    label: "PostgreSQL latency reduction",
    detail: "Improved SQL-backed workflows by tightening indexes, query paths, and the backend data access layer.",
  },
  {
    value: "35 min",
    label: "Release time saved per sprint",
    detail: "Moved configuration, smoke-test, and integration checks earlier so release cycles had fewer avoidable surprises.",
  },
  {
    value: "23%",
    label: "Review effort reduced",
    detail: "Added agent-assisted evaluation to an AI content workflow while keeping human review and measurable feedback in the loop.",
  },
];

export const focusAreas = [
  {
    icon: ServerCog,
    title: "Backend and APIs",
    copy: "Service layers, REST and GraphQL APIs, auth flows, SQL-backed workflows, and production debugging.",
  },
  {
    icon: Cloud,
    title: "Cloud and Delivery",
    copy: "Dockerized deployments, Jenkins and GitHub Actions workflows, smoke checks, and AWS-based runtime support.",
  },
  {
    icon: BrainCircuit,
    title: "AI Retrieval",
    copy: "RAG and GraphRAG workflows grounded by vector search, evaluation loops, citation checks, and multi-agent orchestration.",
  },
];

export const experience = [
  {
    role: "Research Software Developer",
    company: "Luddy School of Informatics, Indiana University Bloomington",
    period: "Aug 2024 - May 2026",
    location: "Indiana, US",
    tags: ["Python", "Flask", "MySQL", "Redis", "GraphRAG", "LlamaIndex", "AutoGen"],
    impact:
      "Built research-backed software systems for educational content workflows, combining backend engineering with applied AI retrieval.",
    achievements: [
      { value: "23%", label: "Less manual evaluation time" },
      { value: "2,800+", label: "Assessment items supported" },
      { value: "72% -> 83%", label: "Content relevancy lift" },
      { value: "18%", label: "Faster model evaluation" },
    ],
    bullets: [
      "Worked on Python services, data pipelines, review tooling, and LLM-assisted retrieval workflows designed for real evaluator feedback rather than isolated demos.",
      "Connected databases, retrieval frameworks, and cloud deployment pieces into workflows that supported repeated content review and model evaluation cycles.",
      "Balanced AI automation with practical verification needs so generated content could be reviewed, measured, and improved over time.",
    ],
  },
  {
    role: "Software Development Engineer II",
    company: "IBM",
    period: "Sep 2022 - Apr 2024",
    location: "Bengaluru, India",
    tags: ["Node.js", "Express.js", "PostgreSQL", "React", "Docker", "Jenkins", "AWS EC2"],
    impact:
      "Owned production application work across backend services, database performance, frontend modules, and release reliability.",
    achievements: [
      { value: "420 -> 295 ms", label: "Data retrieval latency" },
      { value: "45%", label: "Fewer deployment failures" },
      { value: "99.7%", label: "Deployment reliability" },
      { value: "78 -> 91", label: "Lighthouse score" },
    ],
    bullets: [
      "Worked through the full delivery loop: implementing services, improving SQL-backed workflows, supporting React interfaces, and reducing deployment friction.",
      "Partnered with DevOps and QA teams to diagnose runtime issues and make Jenkins, Docker, and AWS EC2 deployments more predictable.",
      "Treated performance and reliability as product work, connecting backend latency, frontend responsiveness, and release quality to user-facing outcomes.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Cognizant",
    period: "Aug 2021 - Sep 2022",
    location: "Hyderabad, India",
    tags: ["React", "GraphQL", "Django APIs", "Docker", "Jenkins", "AWS EC2"],
    impact:
      "Built internal analytics and reporting applications where frontend responsiveness, API integration, and reliable delivery mattered for daily business use.",
    achievements: [
      { value: "21.6%", label: "Faster data rendering" },
      { value: "82 -> 39 min", label: "Environment setup time" },
      { value: "17%", label: "Fewer manual deployment errors" },
    ],
    bullets: [
      "Connected React dashboards with GraphQL and Django APIs so internal users could work with fresher operational data.",
      "Improved dashboard refresh behavior by looking at API fetching, component rendering, and the handoff between frontend and backend systems.",
      "Supported containerized backend environments so teams could set up, test, and release with fewer manual steps.",
    ],
  },
  {
    role: "Software Developer",
    company: "Widhya",
    period: "Jan 2021 - Jul 2021",
    location: "New Delhi, India",
    tags: ["Python", "TensorFlow", "SpaCy", "Pandas", "Scikit-learn", "RNN"],
    impact:
      "Started in applied machine learning and data workflow automation, building discipline around repeatable experiments and measurable model quality.",
    achievements: [
      { value: "88.4% -> 93.2%", label: "Validation accuracy" },
      { value: "27%", label: "Less repetitive testing time" },
    ],
    bullets: [
      "Worked on text classification, preprocessing, experiment scripting, and model evaluation with a focus on reproducibility.",
      "Built the habit of measuring changes carefully, which still shapes how I approach backend performance, testing, and AI retrieval workflows.",
    ],
  },
];

export const education = [
  {
    icon: GraduationCap,
    degree: "Master of Science in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 - May 2026",
    location: "Bloomington, IN, USA",
    summary:
      "Graduate study focused on computer science foundations and software systems, alongside research software development work at the Luddy School of Informatics.",
  },
];

export const roleLenses = [
  {
    name: "Backend/API",
    summary:
      "Production services, data access layers, REST/GraphQL/gRPC integrations, auth-aware APIs, and SQL tuning.",
    proof: ["420 -> 295 ms PostgreSQL latency", "Django and GraphQL analytics APIs", "gRPC vector database services"],
    skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "GraphQL", "gRPC", "PostgreSQL"],
  },
  {
    name: "Cloud/DevOps",
    summary:
      "Dockerized services, Jenkins release paths, AWS EC2 deployments, smoke checks, and runtime troubleshooting.",
    proof: ["99.7% deployment reliability", "45% fewer deployment failures", "82 -> 39 min environment setup"],
    skills: ["Docker", "Jenkins", "AWS EC2", "Apache", "GitHub Actions", "Smoke Tests", "CI/CD"],
  },
  {
    name: "AI/Retrieval",
    summary:
      "RAG, GraphRAG, vector search, LLM evaluation workflows, and multi-agent systems with verifiable outputs.",
    proof: ["2,800+ assessment items", "72% -> 83% relevancy lift", "140M+ embedding retrieval target"],
    skills: ["GraphRAG", "LlamaIndex", "FAISS", "AutoGen", "AG2", "SpaCy", "LLMs"],
  },
  {
    name: "Frontend",
    summary:
      "React, TypeScript, Redux, Tailwind, dashboard performance, and usability improvements tied to measurable outcomes.",
    proof: ["28% frontend responsiveness lift", "78 -> 91 Lighthouse score", "21.6% faster dashboard rendering"],
    skills: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Lighthouse", "GraphQL"],
  },
  {
    name: "Testing/Quality",
    summary:
      "Integration checks, smoke tests, debugging, model evaluation, root-cause analysis, and release confidence.",
    proof: ["35 min saved per sprint", "27% less repetitive model testing", "Recurring deployment issues resolved"],
    skills: ["Integration Testing", "Smoke Tests", "Debugging", "Root Cause Analysis", "Model Evaluation"],
  },
];

export const projects = [
  {
    title: "Agentive Med",
    stack: ["Python", "AG2", "FAISS", "PubMed RAG", "LLMs", "Multi-Agent Systems"],
    demoUrl: "https://agentive-med-demo.vercel.app",
    repoUrl: "https://github.com/Parvez4/Agentive-Med",
    summary:
      "A multi-agent Alzheimer care assistant with supervisor orchestration, PubMed-backed FAISS retrieval, citation checks, and separated nutrition and medical agents for more verifiable responses.",
    metrics: ["AG2 supervisor orchestration", "PubMed-backed FAISS RAG", "Medical citation checks"],
  },
  {
    title: "Distributed Vector Database for AI Applications",
    stack: ["Python", "gRPC", "RocksDB", "LlamaIndex", "AWS S3", "GraphRAG"],
    demoUrl: "https://distributed-vector-db-demo.vercel.app",
    repoUrl: "https://github.com/Parvez4/Distributed-Vector-Database",
    summary:
      "A distributed vector database prototype using gRPC service communication, RocksDB storage, GraphRAG, LlamaIndex, and AWS S3 support for large-scale retrieval workloads.",
    metrics: ["140M+ embedding target", "93 ms average query latency", "Context-aware search at scale"],
  },
];

export const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "JavaScript", "Java", "TypeScript", "C"],
  },
  {
    icon: Code2,
    title: "Web Development",
    items: ["React.js", "Redux", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Lighthouse"],
  },
  {
    icon: Workflow,
    title: "Backend and API",
    items: ["Node.js", "Express.js", "Flask", "FastAPI", "Django", "REST APIs", "GraphQL", "gRPC", "OAuth 2.0", "JWT"],
  },
  {
    icon: Database,
    title: "Databases and Storage",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RocksDB", "FAISS", "SQL Queries", "Query Optimization"],
  },
  {
    icon: GitBranch,
    title: "Cloud and DevOps",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Apache", "Bash", "CI/CD"],
  },
  {
    icon: ShieldCheck,
    title: "Testing and Quality",
    items: ["Unit Testing", "Integration Testing", "Smoke Tests", "Debugging", "Troubleshooting", "Root Cause Analysis", "Production Support"],
  },
  {
    icon: BrainCircuit,
    title: "ML and Data",
    items: ["TensorFlow", "Pandas", "Scikit-learn", "RNN", "Data Preprocessing", "Model Evaluation", "Data Pipelines"],
  },
  {
    icon: BrainCircuit,
    title: "AI and Retrieval",
    items: ["RAG", "GraphRAG", "PubMed RAG", "LlamaIndex", "FAISS", "AutoGen", "AG2", "SpaCy", "LLMs"],
  },
];
