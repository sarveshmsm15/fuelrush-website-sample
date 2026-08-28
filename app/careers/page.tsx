import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

const jobs = [
  { title: "Senior React Native Developer", dept: "Engineering", location: "Bangalore" },
  { title: "Operations Manager", dept: "Operations", location: "Mumbai" },
  { title: "Safety Compliance Officer", dept: "Safety", location: "Delhi" },
];

export default function CareersPage() {
  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-12">
              Help us build the future of fuel delivery in India.
            </p>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.title} className="glass-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{job.dept} &bull; {job.location}</p>
                  </div>
                  <Button variant="liquid" size="sm">Apply Now</Button>
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
