import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Parvez Shaik",
  title: "Software Engineer focused on SRE, Cloud, DevOps, and AI Retrieval Systems",
  location: "Bloomington, Indiana",
  email: "shaikparvez977@gmail.com",
  phone: "+1 (930) 904 4515",
  linkedin: "https://www.linkedin.com/in/parvez-shaik",
  github: "https://github.com/Parvez",
  resume: "/Parvez_Shaik_Resume_SDE.pdf",
  summary:
    "Software Engineer with experience in backend systems, AI retrieval, and cloud deployments. Strong in API development, performance tuning, deployment troubleshooting, and building systems that stay reliable after release.",
};

export const proofPoints = [
  {
    value: "99.7%",
    label: "Deployment reliability",
    detail: "Turned recurring release failures into a steadier deployment path across Jenkins, Docker, and AWS EC2.",
  },
  {
    value: "420 -> 295 ms",
    label: "PostgreSQL latency reduction",
    detail: "Found the slow path, tightened the database layer, and made production reads noticeably faster.",
  },
  {
    value: "35 min",
    label: "Release time saved per sprint",
    detail: "Moved release checks earlier so teams spent less time chasing avoidable environment issues.",
  },
  {
    value: "23%",
    label: "Review effort reduced",
    detail: "Added agent-assisted evaluation to an AI content pipeline, helping reviewers move faster without losing oversight.",
  },
];

export const focusAreas = [
  {
    icon: ServerCog,
    title: "Backend Systems",
    copy: "Service layers that stay readable under load: APIs, caching, auth, and data paths teams can operate.",
  },
  {
    icon: Cloud,
    title: "Cloud Reliability",
    copy: "Release paths with fewer surprises: logs, smoke tests, runtime checks, and cleaner handoffs.",
  },
  {
    icon: BrainCircuit,
    title: "AI Retrieval",
    copy: "LLM workflows grounded by retrieval, evaluation loops, and the data structures behind useful answers.",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "MyEdMaster",
    period: "Jun 2025 - Aug 2025",
    tags: ["GraphRAG", "AutoGen", "AWS EC2", "Redis", "MySQL"],
    impact:
      "Helped turn a manual content review process into an agent-assisted retrieval workflow with faster evaluation and stronger relevance.",
    bullets: [
      "Worked on a Python AI content pipeline using MySQL, Redis, and GraphRAG, integrating AutoGen agents to reduce manual content evaluation time by 23%.",
      "Improved a proprietary LLM retrieval workflow with LlamaIndex and SpaCy, supporting 2,800+ topic-specific assessment items as relevancy rose from 72% to 83%.",
      "Deployed a Flask backend on AWS EC2 with Docker and Apache, troubleshooting 4 recurring deployment issues through root cause analysis and improving model evaluation speed by 18%.",
    ],
  },
  {
    role: "Software Development Engineer II",
    company: "Cognizant",
    period: "Sep 2022 - Apr 2024",
    tags: ["Node.js", "PostgreSQL", "Jenkins", "Docker", "React"],
    impact:
      "Worked close to production systems where latency, failed builds, and release reliability had direct team impact.",
    bullets: [
      "Partnered with backend engineers on Node.js and Express.js microservices, tuning PostgreSQL indexing and query execution to reduce retrieval latency from 420 ms to 295 ms.",
      "Led root cause analysis for recurring deployment failures using Jenkins logs and Docker runtime checks on AWS EC2, improving deployment reliability to 99.7%.",
      "Shifted configuration and smoke-test checks earlier in the pipeline, saving 35 minutes per sprint and reducing deployment failures by 45%.",
      "Collaborated with UI/UX teams on React.js and TypeScript modules, improving frontend responsiveness by 28% and raising Lighthouse score from 78 to 91.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Cognizant",
    period: "Aug 2021 - Sep 2022",
    tags: ["React", "GraphQL", "Django APIs", "Docker", "Jenkins"],
    impact:
      "Balanced internal product work with the infrastructure needed to make environments faster to set up and easier to trust.",
    bullets: [
      "Built React.js dashboards for internal analytics workflows using GraphQL and Django APIs, supporting near real-time reporting for internal users.",
      "Improved slow refresh behavior by working on data fetch handling and component rendering, increasing data rendering speed by 21.6%.",
      "Helped containerize backend services on AWS EC2 using Docker and Jenkins, cutting setup time from 82 minutes to 39 minutes and reducing manual deployment errors by 17%.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Widhya",
    period: "Jan 2021 - Jul 2021",
    tags: ["TensorFlow", "SpaCy", "Pandas", "Scikit-learn"],
    impact:
      "Built early discipline around experiments: cleaner preprocessing, repeatable evaluation, and measurable model improvement.",
    bullets: [
      "Refined tokenization and model settings for an RNN text classifier, raising validation accuracy from 88.4% to 93.2%.",
      "Automated preprocessing and evaluation scripts with Pandas and Scikit-learn, reducing repetitive testing time by 27%.",
    ],
  },
];

export const projects = [
  {
    title: "Agentive Med",
    stack: ["Python", "AG2", "AutoGen", "FAISS", "PubMed RAG", "Multi-Agent Systems"],
    demoUrl: "https://agentive-med-demo.vercel.app",
    repoUrl: "https://github.com/Parvez4/Agentive-Med",
    summary:
      "A multi-agent Alzheimer care assistant built with supervisor orchestration, PubMed-backed FAISS retrieval, tool triage, and domain guardrails that cross-check LLM outputs against medical citations.",
    metrics: ["AG2 supervisor orchestration", "PubMed-backed FAISS RAG", "Medical citation verification"],
  },
  {
    title: "Distributed Vector Database for AI Applications",
    stack: ["Python", "gRPC", "RocksDB", "LlamaIndex", "AWS S3", "GraphRAG"],
    demoUrl: "https://distributed-vector-db-demo.vercel.app",
    repoUrl: "https://github.com/Parvez4/Distributed-Vector-Database",
    summary:
      "A distributed vector database designed with gRPC node communication, RocksDB storage, GraphRAG, and LlamaIndex for semantic retrieval across large LLM workloads.",
    metrics: ["140M+ embeddings", "93 ms average query latency", "Context-aware search at scale"],
  },
];

export const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "J2EE", "JDBC"],
  },
  {
    icon: Workflow,
    title: "Backend and APIs",
    items: ["Node.js", "Express.js", "Flask", "FastAPI", "Django", "REST", "GraphQL", "gRPC", "OAuth 2.0", "JWT"],
  },
  {
    icon: Database,
    title: "Data Stores",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "RocksDB", "FAISS"],
  },
  {
    icon: GitBranch,
    title: "Cloud and DevOps",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Apache", "Bash"],
  },
  {
    icon: BrainCircuit,
    title: "AI and Retrieval",
    items: ["RAG", "GraphRAG", "PubMed RAG", "LlamaIndex", "FAISS", "AutoGen", "AG2", "SpaCy"],
  },
  {
    icon: BrainCircuit,
    title: "ML and Data",
    items: ["TensorFlow", "Pandas", "Scikit-learn", "RNN", "Data Preprocessing", "Model Evaluation"],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["React.js", "Redux", "TypeScript", "Tailwind CSS", "Lighthouse"],
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    items: ["Concurrency", "Observability", "Root Cause Analysis", "Smoke Tests", "Latency Optimization", "Query Optimization"],
  },
];
