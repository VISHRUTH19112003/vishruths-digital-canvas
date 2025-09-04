import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "/lovable-uploads/a312acfd-46f9-4c6e-a0a0-6a7c2eca7474.png";

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
                className="w-64 h-64 rounded-full border-4 border-accent-warm shadow-glow object-cover"
                width="256"
                height="256"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-full border-4 border-accent-warm animate-pulse opacity-20"></div>
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
              Software Development Engineer | B.E. Student at BMS College of Engineering
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              7th Semester Information Science & Engineering student passionate about Full Stack Development, 
              AI/ML, and building scalable solutions. Won college hackathon with LLM-powered chatbot.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  const projectsSection = document.querySelector('#projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-github-border hover:bg-github-surface"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1jNhQyusWXVCz584mxrdRehxY3KDJEbUd/view?usp=sharing', '_blank');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              {/* 
                UPDATE SECTION: Add your actual social media links below
              */}
              <a
                href="https://github.com/VISHRUTH19112003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-warm transition-smooth"
              >
                <Github className="w-6 h-6" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/vishruth-h-v-86891b341/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-warm transition-smooth"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              
              <a
                href="mailto:vishruthhv@outlook.com"
                className="text-muted-foreground hover:text-accent-warm transition-smooth"
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