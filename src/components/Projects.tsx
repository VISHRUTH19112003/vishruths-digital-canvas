import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const Projects = () => {
  /* 
    UPDATE SECTION: Replace these with your actual projects
    Add your project details, technologies used, GitHub links, and live demo links
  */
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/vishruth/ecommerce-platform", // Update with your actual links
      liveUrl: "https://your-ecommerce-demo.com", // Update with your actual links
      stars: 24,
      forks: 8,
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      githubUrl: "https://github.com/vishruth/task-manager", // Update with your actual links
      liveUrl: "https://your-task-app-demo.com", // Update with your actual links
      stars: 18,
      forks: 5,
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather, forecasts, and weather maps using multiple APIs and data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      githubUrl: "https://github.com/vishruth/weather-dashboard", // Update with your actual links
      liveUrl: "https://your-weather-demo.com", // Update with your actual links
      stars: 12,
      forks: 3,
      featured: false
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, SEO optimization, and a content management system for writers and creators.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b3d3?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/vishruth/blog-platform", // Update with your actual links
      liveUrl: "https://your-blog-demo.com", // Update with your actual links
      stars: 31,
      forks: 12,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-github-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-github-border shadow-card hover:shadow-github transition-smooth overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-github-surface border-github-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-github-border hover:bg-github-surface"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">Other Notable Projects</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-github-border shadow-card hover:shadow-github transition-smooth"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {project.forks}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-github-surface border-github-border text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge 
                      variant="secondary"
                      className="bg-github-surface border-github-border text-xs"
                    >
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-github-border hover:bg-github-surface flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
