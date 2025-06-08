import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Code2,
  FileCode,
  FileJson,
  FileType,
  Server,
  Database,
  GitBranch,
  Bot
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Java",
      icon: <Code2 className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
    {
      name: "Spring",
      icon: <Server className="w-8 h-8" />,
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      name: "JUnit5",
      icon: <FileCode className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      name: "Python",
      icon: <Code2 className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      name: "Flask",
      icon: <Server className="w-8 h-8" />,
      color: "bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400",
    },
    {
      name: "HTML",
      icon: <FileCode className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
    {
      name: "CSS",
      icon: <FileType className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      name: "MySQL",
      icon: <Database className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      name: "MongoDB",
      icon: <Database className="w-8 h-8" />,
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      name: "OpenCV",
      icon: <Bot className="w-8 h-8" />,
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      name: "Git",
      icon: <GitBranch className="w-8 h-8" />,
      color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    },
  ];

  return (
    <AnimatedSection id="skills" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-foreground/80 reveal">
          I've worked with a variety of technologies and tools throughout my academic and professional journey.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-lg ${skill.color} transition-all duration-300 hover:scale-105 reveal`}
            >
              {skill.icon}
              <span className="mt-3 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
