import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/vishruth-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={profileImage}
                alt="Vishruth - Software Developer"
                className="w-64 h-64 rounded-full border-4 border-github-green shadow-github object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-github-green animate-pulse opacity-20"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vishruth
              </span>
            </h1>
            
            {/* 
              UPDATE SECTION: Change your title and description below
            */}
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Full Stack Developer & Problem Solver
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Passionate about creating elegant solutions to complex problems. 
              I specialize in building scalable web applications with modern technologies 
              and love turning ideas into reality through code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button variant="outline" size="lg" className="border-github-border hover:bg-github-surface">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              {/* 
                UPDATE SECTION: Add your actual social media links below
              */}
              <a
                href="https://github.com/vishruth" // Update with your GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-github-green transition-smooth"
              >
                <Github className="w-6 h-6" />
              </a>
              
              <a
                href="https://linkedin.com/in/vishruth" // Update with your LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-github-green transition-smooth"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              
              <a
                href="mailto:vishruth@example.com" // Update with your email
                className="text-muted-foreground hover:text-github-green transition-smooth"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;