"use client";

import {
  Download,
  Github,
  Linkedin,
  Mail,
  User,
  Code,
  Server,
  Briefcase,
  Cpu,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

const skills = {
  backend: [
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 90,
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 85,
    },
    {
      name: "NestJS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      level: 80,
    },
    {
      name: "Laravel / PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      level: 90,
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      level: 85,
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: 75,
    },
    {
      name: "Redis",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      level: 80,
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: 85,
    },
  ],
  infra: [
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      level: 80,
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      level: 70,
    },
    {
      name: "CI/CD (GitHub Actions)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      level: 75,
    },
    {
      name: "Elasticsearch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
      level: 70,
    },
  ],
  ai: [
    {
      name: "BullMQ",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      level: 85,
    },
    {
      name: "Anthropic Claude API",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
      level: 80,
    },
    {
      name: "OpenAI API",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: 75,
    },
    {
      name: "MCP (Model Context Protocol)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
      level: 80,
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background">
      <Analytics />
      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 rounded-full blur"></div>
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-background to-secondary flex items-center justify-center p-1">
              <img
                src="/Professional.jpeg"
                alt="Sauman Arshad"
                width="200"
                height="200"
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Sauman Arshad
            </h1>
            <p className="text-xl text-muted-foreground">
              Backend Engineer · Workflow Automation & AI Systems
            </p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              3 years building event-driven backends, AI agentic pipelines, and
              distributed systems. Node.js, TypeScript, NestJS, BullMQ,
              PostgreSQL, Redis, AWS.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/saumanarsad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/saumanarshad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:sauman.arshad@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/+923314318867"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1ELIR2iOQbC57vewQ9fSx41OYi5CIaEge/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-8 rounded-full px-8 hover:scale-105 transition-transform bg-gradient-to-r from-primary to-primary/90">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="mt-16">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-4 h-[60px] items-center rounded-full bg-secondary/50 backdrop-blur-sm p-1 gap-1">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-background rounded-full px-8 h-[52px] transition-all data-[state=active]:scale-105 data-[state=active]:shadow-lg hover:bg-background/80"
              >
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>About</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-background rounded-full px-8 h-[52px] transition-all data-[state=active]:scale-105 data-[state=active]:shadow-lg hover:bg-background/80"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  <span>Skills</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-background rounded-full px-8 h-[52px] transition-all data-[state=active]:scale-105 data-[state=active]:shadow-lg hover:bg-background/80"
              >
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Projects</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-background rounded-full px-8 h-[52px] transition-all data-[state=active]:scale-105 data-[state=active]:shadow-lg hover:bg-background/80"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Experience</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* About */}
          <TabsContent value="about" className="mt-8">
            <Card className="p-8 backdrop-blur-sm bg-card/50">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground">
                I'm a backend engineer with 3 years of experience building
                scalable, event-driven systems. My core stack is Node.js,
                TypeScript, NestJS, BullMQ, PostgreSQL, Redis, and AWS. I work
                remotely at a US-based SaaS company where I architect backend
                infrastructure for workflow automation and AI-native products.
              </p>
              <p className="text-muted-foreground mt-4">
                Recently, I designed and built an MCP-based agentic loop from
                scratch, a text-to-workflow AI system that lets users describe a
                business process in plain English and automatically generates
                executable workflows. The system uses a five-tool architecture
                (search, schema resolution, external data fetching, workflow
                creation, and graph persistence), a registry pattern for tool
                orchestration, and has been tested across Claude, Gemini,
                Ollama, and Grok with documented comparative findings.
              </p>
              <p className="text-muted-foreground mt-4">
                Before that, I spent two years at Dubizzle Labs (the leading
                classifieds platform in MENA) building high-traffic web services
                in Laravel. I hold a CS degree from Ghulam Ishaq Khan Institute
                of Engineering Sciences and Technology.
              </p>
              <p className="text-muted-foreground mt-4">
                I'm interested in backend engineering roles focused on
                distributed systems, event-driven architecture, or AI
                infrastructure.
              </p>
            </Card>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills" className="mt-8">
            <Card className="p-8 backdrop-blur-sm bg-card/50">
              <h2 className="text-2xl font-semibold mb-8">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                    <Server className="h-5 w-5" /> Backend
                  </h3>
                  <div className="space-y-6">
                    {skills.backend.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-background/80 p-1.5 shadow-sm">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-full h-full"
                            />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 ease-out group-hover:opacity-80"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                    <Cpu className="h-5 w-5" /> Infra & DevOps
                  </h3>
                  <div className="space-y-6">
                    {skills.infra.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-background/80 p-1.5 shadow-sm">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-full h-full"
                            />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 ease-out group-hover:opacity-80"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                    <Code className="h-5 w-5" /> AI & Async Systems
                  </h3>
                  <div className="space-y-6">
                    {skills.ai.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-background/80 p-1.5 shadow-sm">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-full h-full"
                            />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 ease-out group-hover:opacity-80"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Projects */}
          <TabsContent value="projects" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-2">MCP Agentic Loop</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Production · Iclosed
                </p>
                <p className="text-muted-foreground mb-4">
                  Text-to-workflow AI system built from scratch. Users describe
                  a business process in plain English; the system generates and
                  saves an executable workflow automatically. Built a five-tool
                  MCP architecture (search_nodes, get_node_schema,
                  get_external_data, create_workflow, save_workflow_graph) with
                  a registry pattern and auth context propagation. Capped at 20
                  iterations to prevent runaway loops. Tested and benchmarked
                  across Claude, Gemini, Ollama, and Grok with documented
                  findings.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "TypeScript",
                    "MCP",
                    "Claude API",
                    "Gemini",
                    "Ollama",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-8 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-2">
                  BullMQ Workflow Execution Engine
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Production · Iclosed
                </p>
                <p className="text-muted-foreground mb-4">
                  Async workflow execution engine powering multi-step business
                  automation. Handles wait/resume state management, failure
                  branch routing, and multi-channel messaging (WhatsApp, email).
                  Real-time execution feedback via WebSocket. Deployed on AWS
                  ECS with Docker.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "BullMQ",
                    "Redis",
                    "WebSocket",
                    "AWS ECS",
                    "Docker",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-8 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-2">
                  Webhook Delivery Service
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Open Source · In Progress
                </p>
                <p className="text-muted-foreground mb-4">
                  Production-grade webhook delivery system with guaranteed
                  delivery, retry logic with exponential backoff, dead-letter
                  queues, per-endpoint failure tracking, and a delivery log UI.
                  Built to demonstrate real-world async backend architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "TypeScript",
                    "BullMQ",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-8 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-2">
                  Observability Integration
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Production · Iclosed
                </p>
                <p className="text-muted-foreground mb-4">
                  End-to-end observability stack integrating Datadog via AWS
                  Lambda and CloudWatch, with Sentry for error tracking. Enables
                  real-time monitoring, alerting, and distributed tracing across
                  the production environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Datadog",
                    "AWS Lambda",
                    "CloudWatch",
                    "Sentry",
                    "Node.js",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Experience */}
          <TabsContent value="experience" className="mt-8">
            <Card className="p-8 backdrop-blur-sm bg-card/50">
              <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">Software Engineer</h3>
                  <p className="text-muted-foreground mb-3">
                    Iclosed (US-based, Remote) · Jan 2025 – Present
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Designed and built an MCP-based agentic loop from scratch,
                      a text-to-workflow AI system using a five-tool
                      architecture with registry pattern and auth context
                      propagation, tested across Claude, Gemini, Ollama, and
                      Grok.
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Built a BullMQ-based workflow execution engine handling
                      wait/resume states, failure branch routing, multi-channel
                      messaging (WhatsApp, email), and real-time WebSocket
                      feedback.
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Integrated end-to-end observability using Datadog via AWS
                      Lambda/CloudWatch and Sentry for distributed tracing and
                      error monitoring.
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Deployed and maintained services on AWS ECS using Docker
                      and CI/CD pipelines.
                    </li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">Software Engineer</h3>
                  <p className="text-muted-foreground mb-3">
                    Dubizzle Labs · Apr 2024 – Jan 2025
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Built and maintained a CRM system serving 10,000+ sales
                      users using Laravel and Filament PHP.
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Optimized Eloquent ORM queries and database storage for
                      high-traffic classifieds platform (MENA region).
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Conducted code reviews and improved team engineering
                      standards.
                    </li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">
                    Associate Software Engineer
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Dubizzle Labs · Jul 2023 – Apr 2024
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Developed web services with Laravel for high-traffic
                      classifieds platform serving millions of users across the
                      MENA region.
                    </li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">
                    Software Engineer Intern
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Arbisoft · Jun 2022 – Sep 2022
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      Built web applications using Python and Django with Django
                      ORM for database management.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
