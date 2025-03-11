'use client';

import { Download, Github, Linkedin, Mail, User, Code, Briefcase, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 rounded-full blur"></div>
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-background to-secondary flex items-center justify-center p-1">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&h=200&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover ring-2 ring-background"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-xl text-muted-foreground">Full Stack Engineer</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <Button className="mt-8 rounded-full px-8 hover:scale-105 transition-transform bg-gradient-to-r from-primary to-primary/90">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
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
                I am a passionate Full Stack Engineer with expertise in modern web technologies.
                With a strong foundation in both frontend and backend development, I create
                scalable and efficient solutions that solve real-world problems.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="mt-8">
            <Card className="p-8 backdrop-blur-sm bg-card/50">
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      React.js / Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Redux / Zustand
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Backend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Node.js / Express
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Python / Django
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      PostgreSQL / MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      RESTful APIs / GraphQL
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <h3 className="text-xl font-medium">Senior Full Stack Engineer</h3>
                  <p className="text-muted-foreground mb-3">Tech Corp • 2021 - Present</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Led development of microservices architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Implemented CI/CD pipelines
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Mentored junior developers
                    </li>
                  </ul>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <h3 className="text-xl font-medium">Full Stack Developer</h3>
                  <p className="text-muted-foreground mb-3">StartUp Inc • 2019 - 2021</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Developed full-stack web applications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Optimized database performance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Implemented responsive designs
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