import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Operations } from "@/components/sections/operations";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Mission } from "@/components/sections/mission";
import { Technology } from "@/components/sections/technology";
import { Drones } from "@/components/sections/drones";
import { Partnership } from "@/components/sections/partnership";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Operations />
      <HowItWorks />
      <Features />
      <Mission />
      <Technology />
      <Drones />
      <Partnership />
      <Contact />
      <Footer />
    </main>
  );
}
