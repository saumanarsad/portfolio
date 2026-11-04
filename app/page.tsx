import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Analytics } from "@vercel/analytics/react";

// ---------- Data ----------

const LINKS = {
  github: "https://github.com/saumanarshad", // TODO: confirm handle (old link was "saumanarsad")
  linkedin: "https://www.linkedin.com/in/saumanarshad/",
  email: "mailto:sauman.arshad@gmail.com",
  whatsapp: "https://wa.me/923314318867",
  resume:
    "https://drive.google.com/file/d/1ELIR2iOQbC57vewQ9fSx41OYi5CIaEge/view?usp=sharing",
};

const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "PHP", "SQL", "Python"],
  Backend: ["Node.js", "NestJS", "Laravel", "BullMQ", "WebSockets", "REST"],
  Data: ["PostgreSQL", "Redis", "MySQL", "MongoDB", "Elasticsearch"],
  Infra: [
    "AWS (ECS, Lambda, CloudWatch)",
    "Docker",
    "GitHub Actions",
    "Datadog",
    "Sentry",
  ],
  AI: ["MCP", "Claude API", "OpenAI API", "Gemini", "Ollama", "RAG"],
};

type Project = {
  title: string;
  meta: string;
  problem: string;
  built: string;
  tags: string[];
  link?: { label: string; href: string };
};

const projects: Project[] = [
  {
    title: "MCP Agentic Loop: Text-to-Workflow",
    meta: "Production · Iclosed",
    problem:
      "Users had to build multi-step automations by hand in a visual editor.",
    built:
      "An agentic loop where users describe a process in plain English and get a saved, executable workflow. Five MCP tools (node search, schema resolution, external data, workflow creation, graph persistence) behind a registry with auth context propagation. Iterations are capped at 20 to stop runaway loops. Benchmarked across Claude, Gemini, Ollama and Grok.",
    tags: ["TypeScript", "MCP", "Claude API", "Gemini", "Ollama"],
  },
  {
    title: "Workflow Execution Engine",
    meta: "Production · Iclosed",
    problem:
      "Long-running automations need to pause for hours or days and resume reliably.",
    built:
      "BullMQ-based engine with durable wait/resume (delayed jobs + Postgres state), failure-branch routing, WhatsApp and email steps, and live execution updates over WebSockets. Runs on AWS ECS.",
    tags: ["Node.js", "BullMQ", "Redis", "PostgreSQL", "WebSocket", "AWS ECS"],
  },
  {
    title: "System Design Assistant (RAG)",
    meta: "Side project · Building in public",
    problem:
      "System design answers are scattered across hundreds of engineering blogs.",
    built:
      "A RAG assistant that answers system design questions grounded in real engineering blog posts. Documenting chunking experiments, retrieval evals and per-query cost on LinkedIn as it develops.",
    tags: ["TypeScript", "RAG", "OpenAI API", "PostgreSQL"],
    link: { label: "Follow the build", href: LINKS.linkedin },
  },
  {
    title: "Webhook Delivery Service",
    meta: "Open source · In progress",
    problem: "Webhook consumers go down; events must not be lost.",
    built:
      "Delivery service with retries and exponential backoff, dead-letter queues, per-endpoint failure tracking and a delivery log UI.",
    tags: ["TypeScript", "BullMQ", "PostgreSQL", "Redis", "Docker"],
    // link: { label: "GitHub", href: "https://github.com/..." },  // add once public
  },
];

type Role = { title: string; dates: string };
type Job = {
  company: string;
  context: string;
  roles: Role[];
  points: string[];
};

const experience: Job[] = [
  {
    company: "Iclosed",
    context: "US-based SaaS · Remote",
    roles: [
      { title: "Software Engineer (Mid-Level)", dates: "Oct 2026 – Present" },
      { title: "Associate Software Engineer", dates: "Jan 2025 – Oct 2026" },
    ],
    points: [
      "Designed and shipped the MCP text-to-workflow agentic system end to end.",
      "Built the BullMQ workflow execution engine behind customer automations: wait/resume, failure routing, multi-channel messaging.",
      "Set up production observability: Datadog via Lambda/CloudWatch, Sentry for errors and tracing.",
      "Deploy and run services on AWS ECS with Docker and CI/CD.",
    ],
  },
  {
    company: "Dubizzle Labs",
    context: "Classifieds platform, MENA",
    roles: [
      { title: "Software Engineer", dates: "Apr 2024 – Jan 2025" },
      { title: "Associate Software Engineer", dates: "Jul 2023 – Apr 2024" },
    ],
    points: [
      "Built and maintained an internal CRM used by 10,000+ sales users (Laravel, Filament).",
      "Optimized Eloquent queries and storage for high-traffic services.",
      "Reviewed code and helped raise team engineering standards.",
    ],
  },
  {
    company: "Arbisoft",
    context: "Internship",
    roles: [
      { title: "Software Engineer Intern", dates: "Jun 2022 – Sep 2022" },
    ],
    points: ["Built web applications with Python and Django."],
  },
];

// ---------- UI helpers ----------

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-secondary px-2 py-1 rounded-full">
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mt-20">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  );
}

const socials = [
  { href: LINKS.github, label: "GitHub", Icon: Github, external: true },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
  { href: LINKS.email, label: "Email", Icon: Mail, external: false },
  { href: LINKS.whatsapp, label: "WhatsApp", Icon: Phone, external: true },
];

// ---------- Page ----------

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background">
      <Analytics />

      {/* Nav */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-background/70 border-b">
        <div className="container mx-auto max-w-4xl px-4 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold">
            Sauman Arshad
          </a>
          <div className="flex gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="#projects" className="hover:text-foreground">
              Projects
            </a>
            <a href="#experience" className="hover:text-foreground">
              Experience
            </a>
            <a href="#skills" className="hover:text-foreground">
              Skills
            </a>
          </div>
        </div>
      </nav>

      <div id="top" className="container mx-auto max-w-4xl px-4 py-16">
        {/* Hero */}
        <header className="flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 rounded-full blur" />
            <img
              src="/Professional.jpeg"
              alt="Sauman Arshad"
              width={128}
              height={128}
              className="relative w-32 h-32 rounded-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Sauman Arshad</h1>
            <p className="text-xl text-muted-foreground">
              Backend Engineer · Workflow Automation & AI Systems
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I build event-driven backends and agentic AI pipelines in
              TypeScript, Postgres, Redis and AWS. 3+ years, currently remote at
              a US startup. Open to relocation.
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map(({ href, label, Icon, external }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
              >
                <a
                  href={href}
                  aria-label={label}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <Button
            asChild
            className="rounded-full px-8 hover:scale-105 transition-transform"
          >
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </header>

        {/* About */}
        <Section id="about" title="About">
          <Card className="p-6 sm:p-8 bg-card/50 space-y-4 text-muted-foreground">
            <p>
              I work on the backend of a workflow automation product at Iclosed:
              the engine that runs customer automations, and the AI layer that
              builds those automations from plain English. Most of my time goes
              into async systems: queues, retries, durable state and keeping
              things observable in production.
            </p>
            <p>
              Before that I spent about 18 months at Dubizzle Labs building
              Laravel services and an internal CRM for a high-traffic MENA
              classifieds platform. CS degree from GIKI.
            </p>
            <p>
              Looking for backend roles in distributed systems, event-driven
              architecture or AI infrastructure. Happy to relocate.
            </p>
          </Card>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Card
                key={p.title}
                className="p-6 sm:p-8 bg-card/50 hover:bg-card/80 transition-colors flex flex-col"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 mb-4">
                  {p.meta}
                </p>
                <p className="text-sm mb-2">
                  <span className="font-medium">Problem: </span>
                  <span className="text-muted-foreground">{p.problem}</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4">{p.built}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    {p.link.label} <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <Card className="p-6 sm:p-8 bg-card/50 space-y-10">
            {experience.map((job) => (
              <div
                key={job.company}
                className="relative pl-6 border-l-2 border-primary/30"
              >
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-medium">{job.company}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {job.context}
                </p>
                <div className="space-y-1 mb-4">
                  {job.roles.map((r) => (
                    <div
                      key={r.title + r.dates}
                      className="flex flex-col sm:flex-row sm:justify-between text-sm"
                    >
                      <span className="font-medium">{r.title}</span>
                      <span className="text-muted-foreground">{r.dates}</span>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 text-muted-foreground list-disc pl-4 marker:text-primary">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <Card className="p-6 sm:p-8 bg-card/50 space-y-5">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="flex flex-col sm:flex-row gap-2 sm:gap-6"
              >
                <span className="w-28 shrink-0 font-medium">{group}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </Section>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>
            Best way to reach me:{" "}
            <a href={LINKS.email} className="text-primary hover:underline">
              sauman.arshad@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
