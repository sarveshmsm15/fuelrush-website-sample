import { Footer } from "@/components/sections/footer";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export default function TermsPage() {
  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
              <p>Last updated: December 2024</p>
              <p>By accessing or using FUELRUSH services, you agree to be bound by these Terms of Service...</p>
              <h3 className="text-lg font-bold text-[var(--color-text)]">Use of Services</h3>
              <p>You must be at least 18 years old to use our services. You agree to provide accurate and complete information...</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
