import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090b] text-[#f1f3f5] flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TechStackSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

