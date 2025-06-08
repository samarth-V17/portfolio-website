
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "HTTP Server in Java",
    description: "A custom HTTP server implementation built from scratch in Java, handling multiple client requests and HTTP protocols.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    technologies: ["Java", "Socket Programming", "HTTP Protocol", "Multithreading"],
   
  },
  
  {
    id: 2,
    title: "Face Recognition Attendance",
    description: "An intelligent attendance system using face recognition with anti-spoofing features and Google Sheets integration.",
    image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3",
    technologies: ["Python", "OpenCV", "TensorFlow", "Google API"],
    github: "https://github.com/samarth-V17/attendanceWithFaceRecognition"
  },
  {
    id: 3,
    title: "Multimedia Steganography",
    description: "A steganography application that hides secret messages within multimedia files using advanced encoding techniques.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    technologies: ["Python", "OpenCV", "Image Processing", "Cryptography"],
    github: "https://github.com/samarth-V17/multimediaSteganography"
  },
  {
    id: 4,
    title: "QuizHub",
    description: "A comprehensive online quiz system with frontend and backend components, allowing users to create, take, and evaluate quizzes.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/samarth-V17/mini_project_quiz_backend"
  }
  
];

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
          My <span className="text-primary">Projects</span>
        </h2>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-foreground/80 reveal">
          Here are some of the key projects I've worked on, showcasing my skills in web development, 
          machine learning, and software engineering.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden h-full border border-border/40 transition-all duration-300 hover:shadow-md hover:border-primary/20 reveal">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                
                {project.title === "HTTP Server in Java" && !project.github && (
                  <Button variant="outline" size="sm" disabled className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
