import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceTypesSection from "@/components/ServiceTypesSection";
import ServicesSection from "@/components/ServicesSection";
import InquiryForm from "@/components/InquiryForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceTypesSection />
      <ServicesSection />
      <InquiryForm />
    </div>
  );
};

export default Index;