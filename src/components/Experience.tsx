import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  {/* 
    UPDATE SECTION: Replace with your actual work experience
  */}
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Mindstack",
      location: "Bengaluru, India",
      duration: "2024",
      type: "Internship",
      description: "Built a cloud-based communication platform integrating Flask (Python) with Twilio API to enable seamless IVR (Interactive Voice Response), automated call handling, and intelligent routing.",
      responsibilities: [
        "Designed dynamic IVR call flows using Twilio's Gather API",
        "Implemented Flask endpoints (/voice, /menu) to handle real-time calls",
        "Used ngrok for exposing local servers during testing",
        "Integrated automated greetings, error handling, and intelligent call routing",
        "Built department-specific call routing for Sales/Support/Agent"
      ],
      technologies: ["Python", "Flask", "Twilio API", "RESTful Webhooks", "ngrok"],
      achievements: [
        "Successfully delivered CCSI (Cloud Communication Solution) project",
        "Implemented scalable & customizable solution for organizations",
        "Built automated greeting & input collection system"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-github-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made in various roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card border-github-border shadow-card hover:shadow-github transition-smooth"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 text-xl mb-2">
                      <Briefcase className="w-5 h-5 text-github-green" />
                      {exp.title}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-github-green mb-1">
                      {exp.company}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <span className="hidden sm:block">•</span>
                      <Badge 
                        variant="outline"
                        className="w-fit border-github-border"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-4">{exp.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Responsibilities */}
                <div>
                  <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li 
                        key={respIndex} 
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-1 h-1 bg-github-green rounded-full mt-2 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-github-surface border-github-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 text-github-green">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex} 
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-1 h-1 bg-github-green rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;