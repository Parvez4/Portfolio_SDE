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
    "MS Computer Science graduate from Indiana University Bloomington, May 8, 2026, with 4 years of software engineering experience across backend systems, AWS deployments, CI/CD automation, production troubleshooting, and AI retrieval infrastructure.",
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
      "Introduced agent-assisted review into a Python content pipeline, cutting evaluation effort by 23% while keeping the workflow accountable.",
      "Strengthened retrieval quality with LlamaIndex, SpaCy, and GraphRAG, helping generate 2,800+ assessment items as relevance rose from 72% to 83%.",
      "Stabilized the Flask deployment path on AWS EC2 with Docker and Apache, removing repeated backend friction and improving evaluation speed by 18%.",
    ],
  },
  {
    role: "Software Development Engineer II",
    company: "Cognizant",
    period: "Sep 2022 - Apr 2024",
    tags: ["Node.js", "PostgreSQL", "Jenkins", "Docker", "AWS EC2"],
    impact:
      "Worked close to production systems where latency, failed builds, and release reliability had direct team impact.",
    bullets: [
      "Traced bottlenecks through Node.js services and PostgreSQL, reducing production read latency from 420 ms to 295 ms.",
      "Used logs, runtime checks, and release patterns to push Jenkins, Docker, and AWS EC2 deployment reliability to 99.7%.",
      "Shifted configuration and smoke-test checks earlier in the pipeline, saving 35 minutes per sprint and reducing deployment failures by 45%.",
      "Kept sprint releases moving by translating failed builds and environment issues into clear fixes across development, QA, and DevOps.",
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
      "Built React analytics views backed by GraphQL and Django APIs for near real-time internal reporting.",
      "Reworked fetch and render behavior so dashboard updates felt faster, improving rendering speed by 21.6%.",
      "Containerized backend environments on AWS EC2 with Docker and Jenkins, cutting setup time from 82 minutes to 39 minutes.",
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
    summary:
      "A healthcare-focused AI assistant designed around guarded orchestration: triage routes the question, domain agents isolate medical and nutrition context, and a verifier checks answers against retrieved clinical sources.",
    metrics: ["Supervisor-worker orchestration", "PubMed-backed retrieval", "Verifier agent guardrail"],
  },
  {
    title: "Distributed Vector Database for AI Applications",
    stack: ["Python", "gRPC", "RocksDB", "LlamaIndex", "AWS S3", "GraphRAG"],
    summary:
      "A retrieval system built around fast semantic search, distributed node communication, and storage designed for large LLM workloads.",
    metrics: ["140M+ embeddings", "93 ms average query latency", "Context-aware search at scale"],
  },
];

export const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "J2EE", "JDBC"],
  },
  {
    icon: Workflow,
    title: "Backend and APIs",
    items: ["Node.js", "Express.js", "FastAPI", "Spring", "Hibernate", "REST", "GraphQL", "gRPC"],
  },
  {
    icon: Database,
    title: "Data Stores",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "RocksDB", "FAISS"],
  },
  {
    icon: GitBranch,
    title: "Cloud and DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Linux"],
  },
  {
    icon: BrainCircuit,
    title: "AI and Retrieval",
    items: ["RAG", "GraphRAG", "LlamaIndex", "AutoGen", "SpaCy", "LLM Evaluation"],
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    items: ["Observability", "Logs", "Incident Response", "Smoke Tests", "Latency Optimization", "Release Support"],
  },
];
