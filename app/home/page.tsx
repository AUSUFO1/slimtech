import Hero from "@/app/component/home/Hero";
import AboutSection from "@/app/home/about/AboutSection";
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />
    </main>
  );
}
