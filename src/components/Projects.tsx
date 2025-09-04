import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  /* 
    UPDATE SECTION: Replace these with your actual projects
    Add your project details, technologies used, GitHub links, and live demo links
  */
  const projects = [
    {
      title: "SessionBudget - AI Finance App",
      description:
        "Advanced personal finance web app built with Next.js, featuring AI-powered financial category suggestions, session-based persistence, CSV export, and data visualization with Recharts.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "ShadCN",
        "Genkit AI",
        "Recharts",
      ],
      featured: true,
      liveDemo: "https://spectacular-kangaroo-48178d.netlify.app",
      github: "https://github.com/VISHRUTH19112003/Session-Budget",
    },
    {
      title: "Swasthya AI",
      description:
        "College hackathon winning project featuring LLM-powered chatbot with voice recognition and text-based chat capabilities. Built with team members Sourya Sarkar & Suraj N Reddy.",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      technologies: [
        "Python",
        "LLM",
        "Voice Recognition",
        "Flask",
        "JavaScript",
      ],
      featured: true,
      liveDemo: "https://swasthyahealthai.netlify.app/",
      github: "https://github.com/VISHRUTH19112003/Swasthya-AI",
    },
    {
      title: "TaskFlow - Advanced To-Do App",
      description:
        "Full-stack task management application with prioritization, categories, reminders, and modern UI. Features real-time sync and user authentication.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "Supabase", "TailwindCSS"],
      featured: false,
      liveDemo: "#", // Replace with your actual demo link
      github: "https://github.com/VISHRUTH19112003",
    },
    {
      title: "Deep Q-Learning Snake Game AI",
      description:
        "Reinforcement Learning AI agent for Snake Game implemented with PyTorch and Pygame. Features training visualization and performance metrics.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
      technologies: ["Python", "PyTorch", "Pygame", "Deep Q-Learning"],
      featured: false,
      liveDemo: "#", // Replace with your actual demo link
      github: "https://github.com/VISHRUTH19112003",
    },
    {
      title: "Fake Review Detection System",
      description:
        "MLG AAT project implementing 3 ML models including ensemble methods for detecting fake reviews, based on recent research papers. Deployed as mobile/web app.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "Flask", "Machine Learning"],
      featured: false,
      liveDemo: "#", // Replace with your actual demo link
      github: "https://github.com/VISHRUTH19112003",
    },
    {
      title: "YouTube Trending Analyzer",
      description:
        "Big Data project using Hadoop and Spark to analyze large-scale YouTube datasets and extract insights about trending videos and user behavior patterns.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      technologies: ["Hadoop", "Spark", "Python", "Big Data Analytics"],
      featured: false,
      liveDemo: "#", // Replace with your actual demo link
      github: "https://github.com/VISHRUTH19112003",
    },
    {
      title: "E-Commerce Bag Retail Platform",
      description:
        "Amazon-like bag retail platform with comprehensive features including product catalog, shopping cart, checkout system, and user management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      featured: false,
      liveDemo: "#", // Replace with your actual demo link
      github: "https://github.com/VISHRUTH19112003",
    },
    {
      title: "Hotel Management System",
      description:
        "Comprehensive hotel management system built with npm and Vite, featuring booking management, billing system, and customer records management.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "Vite", "HTML5", "CSS3"],
      featured: false,
      liveDemo: "#", // Replace with your actual demo link
      github: "https://github.com/VISHRUTH19112003",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and
            passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-card hover:shadow-accent-warm/20 transition-smooth overflow-hidden group"
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
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent-warm/10 border-accent-warm/20 text-accent-warm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveDemo && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                      className="flex-1 bg-accent-warm hover:bg-accent-warm/90 text-background"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1 border-accent-warm/30 hover:bg-accent-warm/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
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
              className="bg-card border-border shadow-card hover:shadow-accent-warm/20 transition-smooth"
            >
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent-warm/10 border-accent-warm/20 text-accent-warm text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-accent-warm/10 border-accent-warm/20 text-accent-warm text-xs"
                    >
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
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
