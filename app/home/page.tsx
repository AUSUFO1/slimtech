import Hero from "@/app/component/home/Hero";
import AboutSection from "@/app/component/about/AboutSection";
import OfferSection from "../component/offer/OfferSection";
import CourseTracksSection from "../component/course/CourseSection";
import ProgramSection from "../component/program/ProgramSection";
import FaqSection from "../component/faqs/FaqSection";
import Footer from "../component/footer/Footer";
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <AboutSection />
      <OfferSection />
      <CourseTracksSection/>
      <ProgramSection />
      <FaqSection />
      <Footer />

    </main>
  );
}
