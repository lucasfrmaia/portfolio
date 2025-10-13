import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/layout/Footer";
import TimelineSection from "@/components/sections/TimelineSection";

export default function App() {
   return (
      <>
         <main className="space-y-24">
            <HeroSection />
            <SkillsSection />
            <TimelineSection />
            <ProjectsSection />
         </main>
         <Footer />
      </>
   );
}
