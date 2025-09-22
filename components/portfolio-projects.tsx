import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function PortfolioProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "This is a fully functional e-commerce web application built using Java EE and JSP, with a MySQL database. The application includes features such as product listing, product management, and a shopping cart system. It is designed with a user-friendly interface and efficient back-end services to provide a seamless shopping experience.",
      image: "/home1.PNG",
      tags: ["Java EE", "JSP", "MySQL", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://youtu.be/u_3rO_w81uA?si=4VuOSuBn1D6uq25f",
      githubUrl: "https://github.com/Himanthajaga/Ecommerce-webapp.git",
    },
    {
      title: "Mobile-Hub",
      description:
        "This project is a full-stack web application developed using the MERN stack (MongoDB, Express, React, Node.js) as part of the ITS 2120 - Rapid Application Development coursework. The application addresses a real-world problem and demonstrates the principles of Rapid Application Development by delivering a robust, scalable, and maintainable solution.",
      image: "/user home 2.PNG",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/Himanthajaga/Mobile-Hub-Front-End.git",
    },
    {
      title: "Spice-Hub",
      description:
        "A web application that provides personalized spice blend recommendations based on user preferences and dietary restrictions. Utilizes machine learning algorithms to analyze flavor profiles and suggest unique combinations.",
      image: "/userindex2.PNG",
      tags: [
        "SpringBoot",
        "MySQL",
        "Spring Security",
        "Spring Data JPA",
        "Spring Web",
        "Spring MVC",
        "Thymeleaf",
        "Bootstrap",
        "Java",
      ],
      liveUrl: "https://youtu.be/tsTQSkIViJM?si=gurc4t6GX5oGprYj",
      githubUrl: "https://github.com/Himanthajaga/Spice_Hub.git",
    },
    {
      title: "MealMate - Your Personal Recipe Assistant",
      description:
        "A recipe recommendation app that suggests meals based on user preferences and dietary restrictions.",
      image: "/mobile-banking-app.png",
      tags: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      liveUrl: "https://youtu.be/GHPtuMilwSc?si=MHXyRRVvsXNZnEIu",
      githubUrl: "https://github.com/Himanthajaga/Meal-Mate.git",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A selection of projects that showcase my skills in full-stack
            development, design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <a
                      href={
                        project.liveUrl && project.liveUrl !== "#"
                          ? project.liveUrl
                          : undefined
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-8 w-8 flex items-center justify-center rounded-full ${
                        project.liveUrl && project.liveUrl !== "#"
                          ? "hover:bg-accent/10 cursor-pointer"
                          : "bg-muted/40 cursor-not-allowed"
                      }`}
                      tabIndex={
                        project.liveUrl && project.liveUrl !== "#" ? 0 : -1
                      }
                      aria-disabled={
                        !(project.liveUrl && project.liveUrl !== "#")
                      }
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View live project</span>
                    </a>
                    <a
                      href={
                        project.githubUrl && project.githubUrl !== "#"
                          ? project.githubUrl
                          : undefined
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-8 w-8 flex items-center justify-center rounded-full ${
                        project.githubUrl && project.githubUrl !== "#"
                          ? "hover:bg-accent/10 cursor-pointer"
                          : "bg-muted/40 cursor-not-allowed"
                      }`}
                      tabIndex={
                        project.githubUrl && project.githubUrl !== "#" ? 0 : -1
                      }
                      aria-disabled={
                        !(project.githubUrl && project.githubUrl !== "#")
                      }
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">View source code</span>
                    </a>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
