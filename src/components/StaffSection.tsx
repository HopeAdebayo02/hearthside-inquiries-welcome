import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, MotionNavLink } from "@/components/ui/button";
import { Heart, GraduationCap, Award, Stethoscope } from "lucide-react";

const staffMembers = [
  {
    name: "Emmanuel Adebayo",
    title: "Co-Founder & Owner",
    bio: "Emmanuel poured his heart into co-founding Goshen Concept Care, driven by a deep personal vision: to create a place where every resident feels like family, their dignity honored, and their independence cherished. His commitment shapes the warm, supportive environment we're known for.",
    icon: Heart
  },
  {
    name: "Olu Adebayo",
    title: "Co-Founder & Owner",
    bio: "Alongside Emmanuel, Olu envisioned a community where quality senior care is delivered with genuine warmth. Her extensive experience and unwavering passion ensure that our residents not only receive excellent care but also truly feel at home and connected.",
    icon: Heart
  },
  {
    name: "Samlina Cawray",
    title: "Administrator",
    bio: "Samlina is the nurturing heart of our administration. With vast experience from assisted living facilities across Minnesota, she brings a gentle yet expert touch to Goshen Concept Care, ensuring every aspect of our facility operates with kindness and efficiency.",
    icon: Award
  },
  {
  name: "Faith Adebayo",
  title: "Registered Nurse",
  bio: "Faith is our devoted nursing professional, whose strong clinical knowledge is matched only by her compassionate heart. She cares for each resident with a gentle hand, expertly managing medications, monitoring health, and fostering a safe, loving environment where everyone feels truly supported.",
  icon: Stethoscope
},
{
  name: "Hope Adebayo",
  title: "Resident Services Coordinator",
  bio: "Hope is dedicated to crafting joyful daily experiences for our residents. With a background in business and a passion for people, he lovingly coordinates services, ensuring each activity enhances quality of life and that families always feel connected and heard through open, supportive communication.",
  icon: GraduationCap
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
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {member.bio}
                    </p>
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