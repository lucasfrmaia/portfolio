import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function App() {
   return (
      <>
         <main className="space-y-24">
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <TimelineSection />
            <ContactSection />
         </main>
         <Footer />
      </>
   );
}
