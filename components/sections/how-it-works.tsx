"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Fuel, MapPin, CheckCircle, Truck } from "lucide-react";

const steps = [
  { number: "01", title: "Choose Your Fuel", description: "Select petrol or diesel, enter the quantity you need, and pick your preferred delivery time.", icon: Fuel },
  { number: "02", title: "Set Location", description: "Pin your exact location on the map or use GPS auto-detection. We deliver anywhere in our service zones.", icon: MapPin },
  { number: "03", title: "Confirm Order", description: "Review your order, choose payment method, and confirm. You will get an instant order ID and ETA.", icon: CheckCircle },
  { number: "04", title: "Track & Receive", description: "Watch your delivery partner approach in real-time. Verify with OTP and receive your fuel safely.", icon: Truck },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pastel-gradient-bg opacity-30" />
      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-20">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5">
            Four Simple Steps to{" "}
            <span className="gradient-text">Fuel Freedom</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
            No complicated processes. No hidden fees. Just pure convenience delivered to your location.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <span className="text-6xl font-bold text-accent/10 font-mono absolute -top-4 left-1/2 -translate-x-1/2">{step.number}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 relative z-10">{step.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
