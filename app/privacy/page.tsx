import { Footer } from "@/components/sections/footer";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export default function PrivacyPage() {
  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
              <p>Last updated: December 2024</p>
              <p>FUELRUSH Technologies Pvt. Ltd. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy...</p>
              <h3 className="text-lg font-bold text-[var(--color-text)]">Information We Collect</h3>
              <p>We collect information you provide directly to us, including your name, email address, phone number, vehicle details, and location data...</p>
              <h3 className="text-lg font-bold text-[var(--color-text)]">How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you...</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
