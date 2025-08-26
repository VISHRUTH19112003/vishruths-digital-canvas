import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-github-surface/80 border-t border-github-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Name and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-github-green mb-2">Vishruth</h3>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Vishruth. Built with{" "}
              <Heart className="w-4 h-4 inline text-red-500" /> and React.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-muted-foreground hover:text-github-green transition-smooth cursor-pointer"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-muted-foreground hover:text-github-green transition-smooth cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-muted-foreground hover:text-github-green transition-smooth cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex gap-4">
            {/* 
              UPDATE SECTION: Update your social media links below
            */}
            <a
              href="https://github.com/vishruth" // Update with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-github-surface rounded-lg border border-github-border flex items-center justify-center hover:bg-github-green-muted hover:border-github-green transition-smooth"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            
            <a
              href="https://linkedin.com/in/vishruth" // Update with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-github-surface rounded-lg border border-github-border flex items-center justify-center hover:bg-github-green-muted hover:border-github-green transition-smooth"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <a
              href="mailto:vishruth@example.com" // Update with your email
              className="w-10 h-10 bg-github-surface rounded-lg border border-github-border flex items-center justify-center hover:bg-github-green-muted hover:border-github-green transition-smooth"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-github-border text-center">
          <p className="text-muted-foreground text-sm">
            Designed and developed with modern web technologies. 
            <br className="md:hidden" />
            Always open to new opportunities and collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;