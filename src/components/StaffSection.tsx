import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, MotionNavLink } from "@/components/ui/button";
import { Heart, GraduationCap, Award, Stethoscope } from "lucide-react";

const staffMembers = [
  {
    name: "Emmanuel Adebayo",
    title: "Co-Founder & Owner",
    credentials: "15+ Years Experience in Assisted Living",
    bio: "Emmanuel co-founded Goshen Concept Care with a vision to provide family-centered assisted living that honors each resident's dignity and independence.",
    icon: Heart,
    specialties: ["Leadership", "Operations Management", "Family Care"]
  },
  {
    name: "Olu Adebayo",
    title: "Co-Founder & Owner",
    credentials: "15+ Years Experience in Assisted Living",
    bio: "Olu co-founded Goshen Concept Care alongside Emmanuel, bringing extensive experience and a passion for quality senior care to the community.",
    icon: Heart,
    specialties: ["Business Development", "Community Relations", "Quality Assurance"]
  },
  {
    name: "Samlina Cawray",
    title: "Administrator",
    credentials: "Extensive Minnesota Assisted Living Experience",
    bio: "Samlina has worked with countless assisted living facilities across Minnesota and brings amazing expertise to her administrative role at Goshen Concept Care.",
    icon: Award,
    specialties: ["Administration", "Regulatory Compliance", "Facility Management"]
  },
  {
  name: "Faith Adebayo",
  title: "Registered Nurse",
  credentials: "RN, Skilled in Patient Care & Clinical Support",
  bio: "Faith is a committed nursing professional who brings strong clinical knowledge and a compassionate approach to resident care. She is experienced in patient support, medication management, and fostering a safe, supportive environment for residents.",
  icon: Stethoscope,
  specialties: ["Patient Care", "Medication Management", "Health Monitoring"]
},
{
  name: "Hope Adebayo",
  title: "Resident Services Coordinator",
  credentials: "BBA, University of St. Thomas",
  bio: "Hope leverages a background in business and healthcare operations to coordinate resident services with excellence. He is passionate about creating meaningful daily experiences, enhancing quality of life, and maintaining open, supportive communication with families.",
  icon: GraduationCap,
  specialties: ["Resident Services", "Activity Coordination", "Family Communication"]
}

];

const StaffSection = () => {
  return (
    <section id="staff" className="pt-2 md:pt-4 pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page heading is rendered by Staff page; remove duplicated header here for clarity */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {staffMembers.map((member, index) => {
            const isHope = member.name === "Hope Adebayo";
            return (
              <div key={index} className={isHope ? "lg:col-span-2 flex justify-center" : ""}>
                <Card 
                  className={
                    "border-2 border-care-secondary bg-background hover:shadow-[var(--shadow-primary)] hover:border-primary/20 transition-all duration-300 group " +
                    (isHope ? "max-w-2xl w-full" : "")
                  }
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-care-accent rounded-xl border-2 border-primary/10 group-hover:border-primary/20 transition-colors duration-300 ease-out flex-shrink-0">
                        <member.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-primary font-bold mb-2 text-base">
                          {member.title}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground font-medium">
                          {member.credentials}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-2 bg-care-accent text-primary text-sm rounded-lg font-medium border border-primary/10"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Ensure Hope Adebayo card centers on its row when items wrap */}
        <style>{`
          @media (min-width: 1024px) {
            #staff .grid { align-items: stretch; }
          }
        `}</style>

        {/* Experience the Difference */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Experience the Difference
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team's experience and dedication make all the difference in providing quality assisted living care.
            We're here to support you and your family every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-h-[52px]">
              <MotionNavLink to="/contact" slowTransition>
                Schedule a Meeting
              </MotionNavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-[52px]">
              <MotionNavLink to="/services" slowTransition>
                View Our Services
              </MotionNavLink>
            </Button>
          </div>
        </div>

        {/* Removed 24/7 Care Excellence section per request */}
      </div>
    </section>
  );
};

export default StaffSection;