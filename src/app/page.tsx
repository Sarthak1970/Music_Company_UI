import Testimonials from "@/components/Cards";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import { GridBackgroundDemo } from "@/components/ui/grid";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <GridBackgroundDemo>
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <Testimonials />
        <UpcomingWebinars />
        <Instructors />
      </GridBackgroundDemo>
    </main>
  );
}
