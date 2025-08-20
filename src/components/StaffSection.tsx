import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, GraduationCap, Award, Stethoscope } from "lucide-react";

const staffMembers = [
  {
    name: "Hope Adebayo",
    title: "Executive Director & Founder",
    credentials: "RN, BSN, 15+ Years Experience",
    bio: "Hope founded Goshen Concept Care with a vision to provide family-centered assisted living that honors each resident's dignity and independence.",
    icon: Heart,
    specialties: ["Family Care", "Leadership", "Community Building"]
  },
  {
    name: "Dr. Sarah Johnson",
    title: "Medical Director",
    credentials: "MD, Geriatric Medicine Specialist",
    bio: "Dr. Johnson ensures our residents receive comprehensive medical care while maintaining their quality of life and personal autonomy.",
    icon: Stethoscope,
    specialties: ["Geriatric Medicine", "Chronic Disease Management", "Preventive Care"]
  },
  {
    name: "Michael Thompson",
    title: "Director of Nursing",
    credentials: "RN, MSN, Certified Gerontological Nurse",
    bio: "Michael leads our nursing team with compassion and expertise, ensuring 24/7 quality care for all our residents.",
    icon: GraduationCap,
    specialties: ["Medication Management", "Care Planning", "Staff Training"]
  },
  {
    name: "Maria Rodriguez",
    title: "Activities Coordinator",
    credentials: "BS Recreation Therapy, CTRS",
    bio: "Maria creates engaging programs that keep our residents active, social, and connected to their interests and the community.",
    icon: Award,
    specialties: ["Recreation Therapy", "Social Activities", "Wellness Programs"]
  }
];

const StaffSection = () => {
  return (
    <section id="staff" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Meet Our Dedicated Care Team
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Our experienced professionals are the heart of Goshen Concept Care. Each team member is 
            carefully selected for their expertise, compassion, and commitment to providing exceptional care.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-warm-primary to-trust-green rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {staffMembers.map((member, index) => (
            <Card key={index} className="border-warm-secondary/30 bg-background hover:shadow-[var(--shadow-soft)] transition-all duration-300">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-warm-primary/10 rounded-full flex-shrink-0">
                    <member.icon className="w-8 h-8 text-warm-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-warm-primary font-semibold mb-2">
                      {member.title}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground font-medium">
                      {member.credentials}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-warm-primary/10 text-warm-primary text-sm rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-comfort-blue to-family-orange rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">24/7 Care Excellence</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our staff is available around the clock to ensure your loved one receives the attention, 
            medical care, and companionship they deserve. We maintain low staff-to-resident ratios 
            to provide personalized, attentive care that makes the difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;