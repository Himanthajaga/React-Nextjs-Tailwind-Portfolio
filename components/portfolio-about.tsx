import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PortfolioAbout() {
  const skills = [
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "Dart",
    "Flutter",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Figma",
    "Adobe Creative Suite",
    "UI/UX Design",
    "Tailwind CSS",
    "Git & GitHub",
    "SQL & NoSQL Databases",
    "RESTful APIs",
    "Agile Methodologies",
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Critical Thinking",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                I'm an undergraduate software engineering student at IJSE,
                passionate about building digital solutions that blend beautiful
                design with functional technology.
              </p>
              <p className="text-muted-foreground text-pretty">
                My journey began with a curiosity for how things work, which
                evolved into a love for building experiences that users
                genuinely enjoy. I believe great design should be invisible – it
                should just work.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Card className="overflow-hidden w-96 h-96">
            <CardContent className="p-0 w-full h-full bg-transparent">
              <img
                src="/1234.jpg"
                alt="Profile Picture"
                className="w-full h-full object-cover"
                style={{ borderRadius: "0.5rem" }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
