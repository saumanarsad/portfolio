'use client';

import { Download, Github, Linkedin, Mail, User, Code, Server, Briefcase, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfilePic from "../assets/Professional.jpeg";
import Image from "next/image";

const skills = {
  frontend: [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 50
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 50
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      level: 60
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      level: 70
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 85
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      level: 60
    }
  ],
  backend: [
    {
      name: "Laravel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      level: 90
    },
    {
      name: "Django",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      level: 70
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      level: 90
    },
    {
      name: "GraphQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      level: 75
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 80
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: 85
    }
  ],
  devops: [
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      level: 75
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      level: 60
    },
    {
      name: "CI/CD (GitHub Actions)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      level: 70
    },
    {
      name: "Nginx",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      level: 65
    }
  ]
};


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 rounded-full blur"></div>
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-background to-secondary flex items-center justify-center p-1">
              <img src="/Professional.jpeg" alt="Profile" width="200" height="200" className="rounded-full object-cover" />

            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Sauman Arshad
            </h1>
            <p className="text-xl text-muted-foreground">Full Stack Engineer</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/saumanarsad" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/saumanarshad/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:sauman.arshad@gmail.com">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1-tQGQ23lOsTGKXXV1PWhtLi-17DN2kIx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button className="mt-8 rounded-full px-8 hover:scale-105 transition-transform bg-gradient-to-r from-primary to-primary/90">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>

        {/* Main Content */}
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

          <TabsContent value="about" className="mt-8">
            <Card className="p-8 backdrop-blur-sm bg-card/50">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground">
                As a graduate of Ghulam Ishaq Khan Institute of Engineering Sciences and Technology with a
                Bachelor's degree in Computer Science, I have a passion for designing and developing
                applications that solve real-world problems.
                I have gained valuable skills and experience in back-end web development using Django
                and Laravel frameworks, working on various projects as a freelance developer.
              </p>

              <p className="text-muted-foreground mt-4">
                Currently, I am a Software Engineer at Dubizzle Labs, where I work with a team of talented
                engineers to build and maintain scalable and reliable web services for Dubizzle using
                the Laravel framework. Dubizzle is the leading classifieds platform in the MENA region.
                I enjoy learning new technologies and techniques, as well as collaborating with other
                developers and stakeholders to deliver high-quality products that meet the needs and
                expectations of our users.
              </p>

              <p className="text-muted-foreground mt-4">
                My goal is to continue to grow and improve as a software developer and to contribute to
                the innovation and success of Dubizzle Labs and the software development industry.
                I am always eager to take on new challenges and opportunities, applying my analytical
                skills and creativity to create impactful and user-friendly solutions.
              </p>
            </Card>
          </TabsContent>


          <TabsContent value="skills" className="mt-8">
            <Card className="p-8 backdrop-blur-sm bg-card/50">
              <h2 className="text-2xl font-semibold mb-8">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                    <Code className="h-5 w-5" /> Frontend Development
                  </h3>
                  <div className="space-y-6">
                    {skills.frontend.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-background/80 p-1.5 shadow-sm">
                            <img src={skill.logo} alt={skill.name} className="w-full h-full" />
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
                    <Cpu className="h-5 w-5" /> Backend Development
                  </h3>
                  <div className="space-y-6">
                    {skills.backend.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-background/80 p-1.5 shadow-sm">
                            <img src={skill.logo} alt={skill.name} className="w-full h-full" />
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
                    <Server className="h-5 w-5" /> DevOps & Cloud
                  </h3>
                  <div className="space-y-6">
                    {skills.devops.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-background/80 p-1.5 shadow-sm">
                            <img src={skill.logo} alt={skill.name} className="w-full h-full" />
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

          <TabsContent value="projects" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Sales Companion (CRM)</h3>
                <p className="text-muted-foreground mb-6">
                  A feature-rich CRM built for sales teams, leveraging Laravel and PostgreSQL for scalability and performance. </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                  <Button size="sm" className="rounded-full">Live Demo</Button>
                </div>
              </Card>
              <Card className="p-8 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Arena Management Application</h3>
                <p className="text-muted-foreground mb-6">
                  A web application designed for managing sports arenas, bookings, and events efficiently.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                  <Button size="sm" className="rounded-full">Live Demo</Button>
                </div>
              </Card>
              <Card className="p-8 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-6">
                  A full-stack e-commerce solution with real-time inventory management.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                  <Button size="sm" className="rounded-full">Live Demo</Button>
                </div>
              </Card>
              <Card className="p-8 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Task Management App</h3>
                <p className="text-muted-foreground mb-6">
                  A collaborative task management tool with real-time updates.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                  <Button size="sm" className="rounded-full">Live Demo</Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="mt-8">
            <Card className="p-8 backdrop-blur-sm bg-card/50">
              <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">Software Engineer</h3>
                  <p className="text-muted-foreground mb-3">Dubizzle Labs • Apr 2024 - Present</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Built a powerful CRM system using Filament PHP for 10,000+ sales users.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Mastered Eloquent ORM, optimized data storage, and built dynamic dashboards.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Enhanced frontend with Tailwind CSS and Livewire.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Ensured code quality and provided constructive team feedback.
                    </li>
                  </ul>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">Associate Software Engineer</h3>
                  <p className="text-muted-foreground mb-3">Dubizzle Labs • Jul 2023 - Apr 2024</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Developed web apps with Laravel and React for high-traffic platforms.
                    </li>
                  </ul>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">Back End Developer</h3>
                  <p className="text-muted-foreground mb-3">Upwork • Oct 2020 - Jun 2023</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Built and optimized web applications for various industries.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Conducted client requirement analysis and implemented customized solutions.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Ensured security, performance optimization, and testing.
                    </li>
                  </ul>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">Software Engineer Intern</h3>
                  <p className="text-muted-foreground mb-3">Arbisoft • Jun 2022 - Sep 2022</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Developed web applications using Python and Django.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Implemented Django ORM for efficient database management.
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