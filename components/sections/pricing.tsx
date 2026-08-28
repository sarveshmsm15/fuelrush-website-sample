"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PRICING_PLANS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pastel-gradient-bg opacity-30" />
      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto mb-10">
            Choose the plan that fits your needs. No hidden charges, ever.
          </p>

          <div className="inline-flex items-center gap-3 liquid-glass rounded-full p-1.5">
            <button onClick={() => setIsYearly(false)} className={cn("px-5 py-2.5 rounded-full text-sm font-medium transition-all", !isYearly ? "bg-accent text-white shadow-lg" : "text-[var(--color-text-muted)]")}>
              Monthly
            </button>
            <button onClick={() => setIsYearly(true)} className={cn("px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2", isYearly ? "bg-accent text-white shadow-lg" : "text-[var(--color-text-muted)]")}>
              Yearly <Badge variant="success" className="text-[10px]">Save 20%</Badge>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div className={cn("relative rounded-3xl p-8 h-full flex flex-col transition-all duration-300", plan.highlighted ? "bg-gradient-to-b from-accent/8 to-transparent border-2 border-accent/30 shadow-xl shadow-accent/5" : "glass-card bg-white/50")}>
                {plan.highlighted && <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold font-mono">
                    {isYearly && plan.price !== "Custom" && plan.price !== "₹0" ? `₹${Math.floor(parseInt(plan.price.replace("₹", "")) * 9.6)}` : plan.price}
                  </span>
                  {plan.period && <span className="text-[var(--color-text-muted)] ml-1">/{isYearly && plan.price !== "Custom" && plan.price !== "₹0" ? "year" : plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? "primary" : "liquid"} className="w-full rounded-full">
                  {plan.cta}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
