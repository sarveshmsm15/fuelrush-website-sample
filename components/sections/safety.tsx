"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Shield, CheckCircle } from "lucide-react";

const safetyFeatures = [
  "Anti-static delivery vehicles with grounding straps",
  "Density-tested fuel at every delivery point",
  "Professionally trained and certified delivery partners",
  "Real-time OTP verification for every transaction",
  "Fire suppression systems on all delivery trucks",
  "24/7 emergency response team on standby",
];

const badges = [
  { label: "ISO 9001:2015", sub: "Certified" },
  { label: "Government", sub: "Approved" },
  { label: "PCI-DSS", sub: "Compliant" },
  { label: "PESO", sub: "Licensed" },
];

export function Safety() {
  return (
    <section id="safety" className="section-padding relative">
      <div className="absolute inset-0 cloud-bg opacity-30" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Safety & Trust</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Your Safety,{" "}
              <span className="gradient-text">Our Priority</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-10">
              We don&apos;t just deliver fuel — we deliver peace of mind. Every aspect of our operation is designed with safety as the non-negotiable foundation.
            </p>
            <div className="space-y-4">
              {safetyFeatures.map((feature, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text)]">{feature}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/5 to-purple-500/5 rounded-full blur-3xl" />
              <div className="relative grid grid-cols-2 gap-5">
                {badges.map((badge) => (
                  <div key={badge.label} className="glass-card rounded-3xl p-8 text-center group hover:border-accent/20 bg-white/50">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <p className="font-bold text-lg">{badge.label}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{badge.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
