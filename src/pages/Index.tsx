import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceTypesSection from "@/components/ServiceTypesSection";
import ServicesSection from "@/components/ServicesSection";
import StaffSection from "@/components/StaffSection";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <StaffSection />
      <ServiceTypesSection />
      <ServicesSection />
      <InquiryForm />
      <Footer />
    </div>
  );
};

export default Index;