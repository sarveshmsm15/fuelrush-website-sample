import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Footer } from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">FUELRUSH</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
              Founded in 2023, FUELRUSH is on a mission to eliminate the
              inconvenience of fuel station visits for Indian drivers. We believe
              that in a world where everything is delivered to your doorstep,
              fuel should be no exception.
            </p>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
              Our team of engineers, safety experts, and logistics professionals
              work tirelessly to ensure every delivery is safe, certified, and
              on-time. We are government approved, PESO licensed, and ISO
              certified.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Founded", value: "2023" },
                { label: "Cities", value: "7+" },
                { label: "Team", value: "120+" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold gradient-text">{item.value}</p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
