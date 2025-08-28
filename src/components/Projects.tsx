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
      title: "SessionBudget - AI Finance App",
      description: "Advanced personal finance web app built with Next.js, featuring AI-powered financial category suggestions, session-based persistence, CSV export, and data visualization with Recharts.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      technologies: ["Next.js", "React", "TailwindCSS", "ShadCN", "Genkit AI", "Recharts"],
      githubUrl: "https://github.com/vishruth/sessionbudget",
      liveUrl: "https://sessionbudget-demo.com",
      stars: 32,
      forks: 12,
      featured: true
    },
    {
      title: "LLM-Powered Chatbot (Hackathon Winner)",
      description: "College hackathon winning project featuring LLM-powered chatbot with voice recognition and text-based chat capabilities. Built with team members Sourya Sarkar & Suraj N Reddy.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      technologies: ["Python", "LLM", "Voice Recognition", "Flask", "JavaScript"],
      githubUrl: "https://github.com/vishruth/llm-chatbot",
      liveUrl: "https://llm-chatbot-demo.com",
      stars: 28,
      forks: 9,
      featured: true
    },
    {
      title: "TaskFlow - Advanced To-Do App",
      description: "Full-stack task management application with prioritization, categories, reminders, and modern UI. Features real-time sync and user authentication.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "Supabase", "TailwindCSS"],
      githubUrl: "https://github.com/vishruth/taskflow",
      liveUrl: "https://taskflow-demo.com",
      stars: 22,
      forks: 7,
      featured: false
    },
    {
      title: "Deep Q-Learning Snake Game AI",
      description: "Reinforcement Learning AI agent for Snake Game implemented with PyTorch and Pygame. Features training visualization and performance metrics.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
      technologies: ["Python", "PyTorch", "Pygame", "Deep Q-Learning"],
      githubUrl: "https://github.com/vishruth/snake-ai",
      liveUrl: "https://snake-ai-demo.com",
      stars: 45,
      forks: 18,
      featured: false
    },
    {
      title: "Fake Review Detection System",
      description: "MLG AAT project implementing 3 ML models including ensemble methods for detecting fake reviews, based on recent research papers. Deployed as mobile/web app.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "Flask", "Machine Learning"],
      githubUrl: "https://github.com/vishruth/fake-review-detection",
      liveUrl: "https://fake-review-demo.com",
      stars: 19,
      forks: 6,
      featured: false
    },
    {
      title: "YouTube Trending Analyzer",
      description: "Big Data project using Hadoop and Spark to analyze large-scale YouTube datasets and extract insights about trending videos and user behavior patterns.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      technologies: ["Hadoop", "Spark", "Python", "Big Data Analytics"],
      githubUrl: "https://github.com/vishruth/youtube-analyzer",
      liveUrl: "https://youtube-analyzer-demo.com",
      stars: 15,
      forks: 4,
      featured: false
    },
    {
      title: "E-Commerce Bag Retail Platform",
      description: "Amazon-like bag retail platform with comprehensive features including product catalog, shopping cart, checkout system, and user management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/vishruth/ecommerce-bags",
      liveUrl: "https://ecommerce-bags-demo.com",
      stars: 26,
      forks: 10,
      featured: false
    },
    {
      title: "Hotel Management System",
      description: "Comprehensive hotel management system built with npm and Vite, featuring booking management, billing system, and customer records management.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "Vite", "HTML5", "CSS3"],
      githubUrl: "https://github.com/vishruth/hotel-management",
      liveUrl: "https://hotel-mgmt-demo.com",
      stars: 13,
      forks: 5,
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
