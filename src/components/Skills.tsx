import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Palette } from "lucide-react";

const Skills = () => {
  {/* 
    UPDATE SECTION: Add/modify your skills in the categories below
  */}
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "Python", "Java", "JavaScript", "TypeScript", "C"
      ]
    },
    {
      title: "Web Development", 
      icon: <Palette className="w-5 h-5" />,
      skills: [
        "React", "Next.js", "Vite", "TailwindCSS", "ShadCN UI",
        "Node.js", "Express.js", "HTML5", "CSS3"
      ]
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "Firebase", "Supabase", "MySQL", "MongoDB", 
        "RESTful APIs", "Flask", "Twilio API"
      ]
    },
    {
      title: "AI/ML & Cloud Tools",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        "Scikit-learn", "PyTorch", "TensorFlow", "Genkit", 
        "Docker", "Git/GitHub", "UiPath", "Wireshark", "ngrok"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-github-border shadow-card hover:shadow-github transition-smooth"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-github-green">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-github-surface border-github-border hover:bg-github-green-muted transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills or Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications & Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge 
              variant="outline" 
              className="text-lg py-2 px-4 border-github-green text-github-green hover:bg-github-green-muted"
            >
              Build a Full-Stack Web App in a Weekend - Udemy
            </Badge>
            <Badge 
              variant="outline" 
              className="text-lg py-2 px-4 border-github-green text-github-green hover:bg-github-green-muted"
            >
              UiPath Automation Developer Associate - UiPath Academy
            </Badge>
            <Badge 
              variant="outline" 
              className="text-lg py-2 px-4 border-github-green text-github-green hover:bg-github-green-muted"
            >
              Applications & Use Cases Professional - RAPIDMINER
            </Badge>
            <Badge 
              variant="outline" 
              className="text-lg py-2 px-4 border-github-green text-github-green hover:bg-github-green-muted"
            >
              Currently Learning: RAG Agents with APIs/MCP, LangChain & n8n
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;