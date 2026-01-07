import Hero from "@/app/component/home/Hero";
import AboutSection from "@/app/component/about/AboutSection";
import OfferSection from "../component/offer/OfferSection";
import FaqSection from "../component/faqs/FaqSection";
import Footer from "../footer/Footer";
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <AboutSection />
      <OfferSection />
      <FaqSection />
      <Footer />

    </main>
  );
}
