import { Hero } from "@/components/sections/hero";
import { FuelRates } from "@/components/sections/fuel-rates";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AppShowcase } from "@/components/sections/app-showcase";
import { Safety } from "@/components/sections/safety";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FuelRates />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <Safety />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
