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
                  <span>Bangalore, India</span> {/* Update your location */}
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Available for opportunities</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-muted-foreground" />
                  <span>Passionate about clean code & UX</span>
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
                I'm a passionate software developer with a love for creating innovative 
                solutions that make a difference. My journey in tech started during my 
                college years, where I discovered the power of code to solve real-world problems.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying up-to-date with the latest 
                industry trends.
              </p>
              
              <p>
                I'm particularly interested in full-stack development, cloud technologies, 
                and building scalable applications that can grow with business needs. 
                Let's connect and build something amazing together!
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-github-surface rounded-lg border border-github-border">
                <div className="text-2xl font-bold text-github-green">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
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