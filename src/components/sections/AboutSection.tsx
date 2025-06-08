
import { AnimatedSection } from "@/components/AnimatedSection";
import { text } from "stream/consumers";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 reveal">
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Samarth coding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg">
                <p className="text-lg font-medium">Computer Science Graduate</p>
                <p className="text-foreground/70">Passionate Tech Enthusiast</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: "justify" }} className="md:col-span-7 space-y-6 reveal" >
            <p className="text-lg" >
              I'm a recent Computer Science graduate with a strong foundation in software development and a passion for building reliable, scalable systems. Whether it's writing backend logic in Java and Spring Boot or scripting automation in Python, I enjoy crafting solutions that solve real-world problems.
            </p>
            
            <p className="text-lg">
              I had the opportunity to intern at ISRO’s Space Applications Centre, where I worked on technical challenges in a structured, research-focused environment. This experience strengthened my ability to learn quickly, adapt to new tools, and work with purpose.
            </p>
            
            <p className="text-lg">
              My core skills include Java, Python, Spring, SQL & Data Structures, with a growing interest in cloud technologies and backend architecture. I’m eager to take on roles where I can contribute meaningfully while expanding my capabilities.
            </p>
            
            <p className="text-lg">
              In the long run, I aim to grow into a well-rounded software engineer—building robust systems, staying ahead of emerging tech, and eventually taking on responsibilities that blend technical depth with leadership.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
