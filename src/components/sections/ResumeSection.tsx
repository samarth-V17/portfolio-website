
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";



export function ResumeSection() {
  return (
    <AnimatedSection className="bg-primary/5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
          My <span className="text-primary">Resume</span>
        </h2>
        
        <p className="text-lg max-w-3xl mx-auto mb-8 text-foreground/80 reveal">
          Download my complete resume to learn more about my education, experience, and all the technologies I've worked with.
        </p>
        
        <div className="flex justify-center reveal">
          <a href={`https://cdn.jsdelivr.net/gh/samarth-V17/portfolio-assets@latest/resume.pdf?${Date.now()}`} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gap-2">
            <FileText className="w-5 h-5" />
            View Resume
          </Button>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
