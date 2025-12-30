import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Facilities } from "@/components/Facilities";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";
import { Location } from "@/components/Location";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Gallery />
        <Pricing />
        <Location />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
