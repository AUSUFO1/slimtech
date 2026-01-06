import Hero from "@/app/component/home/Hero";
import AboutSection from "@/app/component/about/AboutSection";
import OfferSection from "../component/offer/OfferSection";
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <AboutSection />
      <OfferSection />
    </main>
  );
}
