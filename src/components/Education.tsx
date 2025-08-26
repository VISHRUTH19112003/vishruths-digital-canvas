import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  {/* 
    UPDATE SECTION: Replace with your actual education details
  */}
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University", // Update with your university
      location: "Bangalore, India", // Update with your location
      duration: "2018 - 2022", // Update with your duration
      grade: "8.5 CGPA", // Update with your grade
      achievements: [
        "Dean's List for Academic Excellence",
        "Best Final Year Project Award",
        "Active member of Coding Club"
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Management Systems", 
        "Software Engineering",
        "Web Technologies",
        "Machine Learning"
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "ABC High School", // Update with your school
      location: "Bangalore, India", // Update with your location
      duration: "2016 - 2018", // Update with your duration
      grade: "92%", // Update with your grade
      achievements: [
        "School Topper in Computer Science",
        "National Merit Scholarship Recipient"
      ],
      relevantCourses: [
        "Computer Science",
        "Mathematics",
        "Physics"
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
                <h4 className="font-semibold mb-2">Full Stack Web Development</h4>
                <p className="text-sm text-muted-foreground mb-2">Coursera</p>
                <Badge variant="secondary" className="bg-github-surface">
                  Certified
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-github-border shadow-card">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold mb-2">AWS Cloud Practitioner</h4>
                <p className="text-sm text-muted-foreground mb-2">Amazon Web Services</p>
                <Badge variant="secondary" className="bg-github-surface">
                  Certified
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-github-border shadow-card">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold mb-2">React Masterclass</h4>
                <p className="text-sm text-muted-foreground mb-2">Udemy</p>
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