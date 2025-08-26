import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  {/* 
    UPDATE SECTION: Replace with your actual work experience
  */}
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions", // Update with your company
      location: "Bangalore, India", // Update with location
      duration: "Jan 2023 - Present", // Update with your duration
      type: "Full-time",
      description: "Lead developer responsible for building and maintaining scalable web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      responsibilities: [
        "Developed and maintained 5+ production applications serving 10,000+ users",
        "Led a team of 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored new team members and established coding standards",
        "Collaborated with product managers to define technical requirements"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"],
      achievements: [
        "Improved application performance by 40% through optimization",
        "Successfully delivered 8 major features on time",
        "Received 'Employee of the Quarter' award"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ", // Update with your company
      location: "Remote", // Update with location
      duration: "Jun 2021 - Dec 2022", // Update with your duration
      type: "Full-time",
      description: "Focused on creating engaging user interfaces and improving user experience for the company's main product. Worked closely with design team to implement pixel-perfect designs.",
      responsibilities: [
        "Built responsive web applications using React and Vue.js",
        "Integrated RESTful APIs and implemented state management",
        "Collaborated with UX/UI designers to implement modern interfaces",
        "Optimized applications for performance and accessibility",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React", "Vue.js", "JavaScript", "CSS3", "Firebase", "Git"],
      achievements: [
        "Reduced page load time by 35% through performance optimization",
        "Implemented responsive design supporting 5+ device types",
        "Contributed to 15% increase in user engagement"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "DevHub Technologies", // Update with your company
      location: "Bangalore, India", // Update with location
      duration: "Jan 2021 - May 2021", // Update with your duration
      type: "Internship",
      description: "Gained hands-on experience in software development while working on real-world projects. Learned best practices and industry standards for web development.",
      responsibilities: [
        "Assisted in developing web applications using JavaScript and Python",
        "Fixed bugs and implemented small features under senior developer guidance",
        "Participated in daily standups and team meetings",
        "Wrote unit tests and documentation for existing codebase",
        "Learned version control systems and collaborative development"
      ],
      technologies: ["JavaScript", "Python", "HTML", "CSS", "MySQL", "Git"],
      achievements: [
        "Successfully completed 3 mini-projects during internship",
        "Received positive feedback from mentors and team leads",
        "Got full-time offer based on performance"
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