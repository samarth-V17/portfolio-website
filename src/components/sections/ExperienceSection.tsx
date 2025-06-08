
import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin, Building, Calendar } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Research Intern",
    company: "Space Applications Centre, ISRO",
    location: "Ahmedabad, India",
    period: "July 2024 - September 2024",
    description: [
      "Designed and implemented backend architecture using Java, JSP, and Servlets, ensuring robust business logic and data integrity for the Furniture Complaint Management System (FCMS) on SACnet.",
      "Utilized JDBC for efficient database connectivity and optimized SQL queries for improved data retrieval and transaction management.",
      "Refactored legacy code to improve modularity, scalability, and adherence to design patterns like DAO and MVC.",
      "Developed comprehensive test cases to ensure robustness and reliability of the application.",
      "Collaborated with cross-functional teams to gather requirements, design features, and perform rigorous testing."
    ]
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "Sasahyog Technologies Pvt. Ltd.",
    location: "Bareilly",
    period: "June 2023 - September 2023",
    description: [
      "Developed robust backend services using Python and Flask, ensuring reliable and maintainable code.",
      "Contributed to the development of an online ticketing system for the Rotary Club, Bareilly, implementing QR-based entry for smooth event access.",
      "Managed MongoDB database connectivity and designed RESTful APIs for seamless frontend integration.",
      "Integrated Twilio API for OTP verification, enhancing security in user authentication workflows.",
      "Created a Python web scraper to locate nearby shops and service centers, automating data entry into Google Sheets for improved business insights."
      
    ]
  }
];

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
          Work <span className="text-primary">Experience</span>
        </h2>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-foreground/80 reveal">
          My professional journey and internships that have shaped my skills and expertise.
        </p>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-foreground/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative flex items-start md:justify-center reveal">
              <div className="flex flex-col items-center md:w-1/2 md:pr-10 md:items-end">
                {index % 2 === 0 ? (
                  <>
                    <div className="bg-background border border-border shadow-md p-6 rounded-lg md:text-right">
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      
                      <div className="flex items-center mt-1 md:justify-end text-foreground/70">
                        <Building className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{experience.company}</span>
                      </div>
                      
                      <div className="flex items-center mt-1 md:justify-end text-foreground/70">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{experience.location}</span>
                      </div>
                      
                      <div className="flex items-center mt-1 mb-4 md:justify-end text-foreground/70">
                        <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{experience.period}</span>
                      </div>
                      
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        {experience.description.map((item, i) => (
                          <li key={i} style={{ textAlign: 'justify' }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-full w-px bg-primary/30 md:hidden"></div>
                  </>
                ) : null}
              </div>
              
              <div className="absolute left-5 md:left-1/2 -translate-x-px md:-translate-x-0.5 top-3">
                <div className="w-3 h-3 rounded-full border-2 border-primary bg-background"></div>
              </div>
              
              <div className="flex flex-col items-start md:w-1/2 md:pl-10">
                {index % 2 === 1 ? (
                  <div className="bg-background border border-border shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    
                    <div className="flex items-center mt-1 text-foreground/70">
                      <Building className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>{experience.company}</span>
                    </div>
                    
                    <div className="flex items-center mt-1 text-foreground/70">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>{experience.location}</span>
                    </div>
                    
                    <div className="flex items-center mt-1 mb-4 text-foreground/70">
                      <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>{experience.period}</span>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      {experience.description.map((item, i) => (
                        <li key={i} style={{ textAlign: 'justify' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
