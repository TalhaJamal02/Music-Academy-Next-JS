import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import ChooseUs from "@/components/ChooseUs";
import MovingCards from "@/components/MovingCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.9] antialiased bg-grid-white/[][0.02]">
      <HeroSection />
      <FeaturedSection />
      <ChooseUs />
      <MovingCards />
      <UpcomingWebinar />
      <Instructor />
      <Footer />
    </main>
  );
}
