import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  {/* 
    UPDATE SECTION: Replace with your actual education details
  */}
  const education = [
    {
      degree: "Bachelor of Engineering in Information Science & Engineering",
      institution: "BMS College of Engineering",
      location: "Bengaluru, Karnataka, India",
      duration: "2021 - 2025",
      grade: "Currently in 7th Semester",
      achievements: [
        "Won College Hackathon with LLM-powered chatbot",
        "Active participation in academic hackathons & innovation challenges",
        "Collaborators: Sourya Sarkar & Suraj N Reddy"
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Management Systems", 
        "Software Engineering",
        "Machine Learning",
        "Big Data Analytics",
        "Computer Networks"
      ]
    },
    {
      degree: "Pre-University Education (12th Grade)",
      institution: "Sri Maruthi PU College",
      location: "Bengaluru, Karnataka, India",
      duration: "2019 - 2021",
      grade: "Excellent Performance",
      achievements: [
        "Strong foundation in Science & Mathematics",
        "Computer Science specialization"
      ],
      relevantCourses: [
        "Computer Science",
        "Mathematics",
        "Physics",
        "Chemistry"
      ]
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "Vibgyor High, Kadugodi",
      location: "Bengaluru, Karnataka, India",
      duration: "2018 - 2019",
      grade: "Excellent Performance",
      achievements: [
        "Well-rounded academic performance",
        "Foundation for technical education"
      ],
      relevantCourses: [
        "Mathematics",
        "Science",
        "Computer Applications"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-card border-github-border shadow-card hover:shadow-github transition-smooth"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 text-xl mb-2">
                      <GraduationCap className="w-5 h-5 text-github-green" />
                      {edu.degree}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-github-green mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-muted-foreground mb-2">{edu.location}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                    <Badge 
                      variant="secondary"
                      className="bg-github-green-muted border-github-green text-github-green"
                    >
                      {edu.grade}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold mb-3">
                      <Award className="w-4 h-4 text-github-green" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
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
                )}

                {/* Relevant Courses */}
                <div>
                  <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, courseIndex) => (
                      <Badge 
                        key={courseIndex}
                        variant="outline"
                        className="border-github-border hover:bg-github-surface"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Education/Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Additional Learning</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* 
              UPDATE SECTION: Add your online courses, certifications, or workshops
            */}
            <Card className="bg-card border-github-border shadow-card">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold mb-2">Big Data & Analytics</h4>
                <p className="text-sm text-muted-foreground mb-2">Hadoop & Spark</p>
                <Badge variant="secondary" className="bg-github-surface">
                  Project Completed
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-github-border shadow-card">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold mb-2">RPA Development</h4>
                <p className="text-sm text-muted-foreground mb-2">UiPath Platform</p>
                <Badge variant="secondary" className="bg-github-surface">
                  Certified
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-github-border shadow-card">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold mb-2">Network Security</h4>
                <p className="text-sm text-muted-foreground mb-2">Wireshark & Protocol Analysis</p>
                <Badge variant="secondary" className="bg-github-surface">
                  Completed
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;