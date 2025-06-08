
import { ArrowDown, FileText, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import samarthImage from '../../assets/samarth.jpg';
import resumePDF from '../../assets/Samarth Varshney.pdf'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight reveal">
              Hi, I'm <span className="text-gradient">Samarth</span> —
              <br /> a Computer Science Graduate & Tech Enthusiast
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-2xl reveal">
              {/* I build smart systems, powerful web apps, and solve real-world problems with code. */}
              I design and develop robust backend systems, scalable web applications, and solve complex real-world problems with clean, efficient code.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 reveal">
              
              <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <FileText className="w-5 h-5" />
                View Resume
              </Button>
              </a>          
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#projects">
                  <FolderKanban className="w-5 h-5" />
                  Explore Projects
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/10 to-primary/30 rounded-full flex items-center justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background">
                <img 
                  src={samarthImage}
                  alt="Samarth - Portfolio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-primary" />
        </a>
      </div>
    </section>
  );
}
