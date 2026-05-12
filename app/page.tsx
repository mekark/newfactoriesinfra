import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientSection";
import TestimonialSection from "@/components/TestimonialSection";
import DeliverablesSection from "@/components/DeliverSection";
import SixNumbersSection from "@/components/SixNumbersSection";
import FactoryCapabilitiesSection from "@/components/Factory";
import SixPhasesSection from "@/components/SixPhasesSection";
import ProductionSlotsSection from "@/components/ProductionSlotsSection";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <TestimonialSection />
      <DeliverablesSection />
      <SixNumbersSection />
      <FactoryCapabilitiesSection />
      <SixPhasesSection />
      <ProductionSlotsSection />
      <FAQSection />
      <Footer />
    </>
  );
}
