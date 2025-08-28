import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, MapPin, Calendar, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-github-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me better - my background, interests, and what drives me as a developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <Card className="bg-card border-github-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-github-green" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 
                  UPDATE SECTION: Update your personal details below
                */}
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Available for internships & opportunities</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-muted-foreground" />
                  <span>Hackathon winner & AI/ML enthusiast</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            
            {/* 
              UPDATE SECTION: Write your personal story/bio below
            */}
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Vishruth H V, a 7th semester Information Science & Engineering student at 
                BMS College of Engineering, Bengaluru. My journey in tech combines strong academic 
                foundation with practical software engineering experience.
              </p>
              
              <p>
                I specialize in Full Stack Development, AI/ML, and building scalable solutions. 
                From winning college hackathons with LLM-powered chatbots to working as a Software 
                Development Engineer Intern at Mindstack, I thrive on turning innovative ideas into reality.
              </p>
              
              <p>
                I balance technical depth with clean, aesthetic design sense and am passionate about 
                real-world impactful projects. Always eager to learn and contribute to meaningful solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-github-surface rounded-lg border border-github-border">
                <div className="text-2xl font-bold text-github-green">7th</div>
                <div className="text-sm text-muted-foreground">Semester Student</div>
              </div>
              
              <div className="text-center p-4 bg-github-surface rounded-lg border border-github-border">
                <div className="text-2xl font-bold text-github-green">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
            
            {/* 
              UPDATE SECTION: Update the stats above with your actual numbers
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;