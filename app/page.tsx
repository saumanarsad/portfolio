import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Analytics } from "@vercel/analytics/react";
import { SectionNav } from "@/components/section-nav";
import { WorkflowEngineDiagram } from "@/components/diagrams/workflow-engine-diagram";
import { McpLoopDiagram } from "@/components/diagrams/mcp-loop-diagram";
import { RagDiagram } from "@/components/diagrams/rag-diagram";
import { WebhookDiagram } from "@/components/diagrams/webhook-diagram";

// ---------- Data ----------

const LINKS = {
  github: "https://github.com/saumanarsad",
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
  featured: boolean;
  diagram: React.ComponentType;
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
    featured: true,
    diagram: McpLoopDiagram,
  },
  {
    title: "Workflow Execution Engine",
    meta: "Production · Iclosed",
    problem:
      "Long-running automations need to pause for hours or days and resume reliably.",
    built:
      "BullMQ-based engine with durable wait/resume (delayed jobs + Postgres state), failure-branch routing, WhatsApp and email steps, and live execution updates over WebSockets. Runs on AWS ECS.",
    tags: ["Node.js", "BullMQ", "Redis", "PostgreSQL", "WebSocket", "AWS ECS"],
    featured: true,
    diagram: WorkflowEngineDiagram,
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
    featured: false,
    diagram: RagDiagram,
  },
  {
    title: "Webhook Delivery Service",
    meta: "Open source · In progress",
    problem: "Webhook consumers go down; events must not be lost.",
    built:
      "Delivery service with retries and exponential backoff, dead-letter queues, per-endpoint failure tracking and a delivery log UI.",
    tags: ["TypeScript", "BullMQ", "PostgreSQL", "Redis", "Docker"],
    featured: false,
    diagram: WebhookDiagram,
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
    roles: [{ title: "Software Engineer", dates: "Jan 2025 – Present" }],
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
    <span className="rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 font-mono text-xs text-neutral-300">
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
    <section
      id={id}
      className="mt-16 scroll-mt-14 border-t border-neutral-800 pt-12 sm:mt-20"
    >
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function ProjectLink({ link }: { link: NonNullable<Project["link"]> }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-sm font-medium text-emerald-400 hover:underline"
    >
      {link.label} <ArrowUpRight className="ml-1 h-4 w-4" />
    </a>
  );
}

function ProjectText({ p }: { p: Project }) {
  return (
    <>
      <p className="font-mono text-xs text-neutral-400">{p.meta}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-4 text-sm">
        <span className="font-medium text-neutral-200">Problem: </span>
        <span className="text-neutral-400">{p.problem}</span>
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{p.built}</p>
    </>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

const cardClass =
  "rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-emerald-400/40 motion-safe:transition motion-safe:hover:-translate-y-0.5";

const diagramClass =
  "rounded-lg border border-neutral-800 bg-neutral-950/60 p-2 sm:p-4";

function FeaturedProject({ p }: { p: Project }) {
  const Diagram = p.diagram;
  return (
    <article className={`${cardClass} p-4 sm:p-6 lg:p-8`}>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-10">
        <div className={`${diagramClass} lg:order-2`}>
          <div className="mx-auto max-w-[480px]">
            <Diagram />
          </div>
        </div>
        <div className="lg:order-1">
          <ProjectText p={p} />
          <div className="mt-6">
            <Tags tags={p.tags} />
          </div>
          {p.link && (
            <div className="mt-4">
              <ProjectLink link={p.link} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function SideProject({ p }: { p: Project }) {
  const Diagram = p.diagram;
  return (
    <article className={`${cardClass} flex flex-col p-4 sm:p-6`}>
      <div className={`${diagramClass} mb-6`}>
        <div className="mx-auto max-w-[400px]">
          <Diagram />
        </div>
      </div>
      <ProjectText p={p} />
      <div className="mt-6 flex flex-1 flex-col justify-end gap-4">
        <Tags tags={p.tags} />
        {p.link && <ProjectLink link={p.link} />}
      </div>
    </article>
  );
}

const socials = [
  { href: LINKS.github, label: "GitHub", Icon: Github, external: true },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
  { href: LINKS.whatsapp, label: "WhatsApp", Icon: FaWhatsapp, external: true },
];

// ---------- Page ----------

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const sideProjects = projects.filter((p) => !p.featured);

  return (
    <main className="relative min-h-screen bg-background text-neutral-100">
      <Analytics />
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[56rem]"
      />

      <SectionNav />

      <div
        id="top"
        className="relative mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
      >
        {/* Hero */}
        <header className="max-w-2xl">
          <div className="flex items-center gap-4">
            <img
              src="/Professional.jpeg"
              alt="Sauman Arshad"
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 rounded-full border border-neutral-800 object-cover"
            />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Sauman Arshad
              </h1>
              <p className="mt-1 text-neutral-400">
                Backend Engineer · Workflow Automation & AI Systems
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-neutral-300">
            I build event-driven backends and agentic AI pipelines in
            TypeScript, Postgres, Redis and AWS. 3+ years, currently remote at a
            US startup. Open to relocation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="bg-emerald-400 text-neutral-950 hover:bg-emerald-300"
            >
              <a href={LINKS.email}>
                <Mail className="mr-2 h-4 w-4" /> Email me
              </a>
            </Button>
            <Button asChild variant="outline" className="border-neutral-700">
              <a href={LINKS.resume} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
            <div className="-ml-2 flex items-center gap-1 sm:ml-2">
              {socials.map(({ href, label, Icon, external }) => (
                <Button
                  key={label}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-neutral-400 hover:text-neutral-100"
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
          </div>
        </header>

        {/* About */}
        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 leading-relaxed text-neutral-400">
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
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="space-y-6">
            {featured.map((p) => (
              <FeaturedProject key={p.title} p={p} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {sideProjects.map((p) => (
              <SideProject key={p.title} p={p} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <ol className="space-y-12 border-l border-neutral-800">
            {experience.map((job) => (
              <li key={job.company} className="relative pl-6 sm:pl-8">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-background"
                />
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <p className="text-sm text-neutral-400">{job.context}</p>
                <div className="mb-4 mt-3 space-y-1">
                  {job.roles.map((r) => (
                    <div
                      key={r.title + r.dates}
                      className="flex flex-col text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="font-medium text-neutral-200">
                        {r.title}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        {r.dates}
                      </span>
                    </div>
                  ))}
                </div>
                <ul className="list-disc space-y-2 pl-4 text-neutral-400 marker:text-neutral-600">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <dl className="space-y-5">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="flex flex-col gap-2 sm:flex-row sm:gap-6"
              >
                <dt className="w-28 shrink-0 pt-0.5 text-sm font-medium text-neutral-200">
                  {group}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Footer */}
        <footer className="mt-20 border-t border-neutral-800 pt-8 text-sm text-neutral-400">
          <p>
            Best way to reach me:{" "}
            <a href={LINKS.email} className="text-emerald-400 hover:underline">
              sauman.arshad@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
