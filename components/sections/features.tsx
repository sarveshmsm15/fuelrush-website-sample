"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, MapPin, Shield, CreditCard, Calendar, AlertTriangle } from "lucide-react";

const featuresList = [
  { title: "Order in Seconds", description: "Choose fuel type, quantity, and confirm. Less than 30 seconds to place an order.", icon: Zap, color: "from-orange-400 to-amber-400" },
  { title: "Live Tracking", description: "Watch your fuel arrive in real-time with GPS tracking and ETA updates.", icon: MapPin, color: "from-blue-400 to-cyan-400" },
  { title: "Certified Safe", description: "Government approved, quality tested fuel with anti-static delivery vehicles.", icon: Shield, color: "from-emerald-400 to-teal-400" },
  { title: "Multiple Payments", description: "Pay via UPI, Cards, Wallet, or Cash on Delivery. Your choice.", icon: CreditCard, color: "from-violet-400 to-purple-400" },
  { title: "Schedule Delivery", description: "Plan ahead and schedule fuel deliveries for the week. Never run low.", icon: Calendar, color: "from-pink-400 to-rose-400" },
  { title: "Emergency Mode", description: "One-tap emergency fuel delivery when you are stranded. We prioritize your safety.", icon: AlertTriangle, color: "from-red-400 to-orange-400" },
];

export function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 cloud-bg opacity-50" />
      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5">
            Everything You Need,{" "}
            <span className="gradient-text">Nothing You Don&apos;t</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            Built from the ground up for Indian drivers. Every feature designed with your convenience and safety in mind.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <Card className="h-full group hover:border-accent/20 bg-white/40">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
