"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pastel-gradient-bg" />
      <div className="absolute inset-0 cloud-bg opacity-60" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Ready to Never Visit a{" "}
            <span className="gradient-text">Petrol Pump</span> Again?
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10">
            Download FUELRUSH now and get <span className="text-accent font-bold">₹50 off</span> your first order
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="primary" size="lg" className="gap-2 w-full sm:w-auto rounded-full px-8 shadow-lg shadow-accent/25">
              <Apple className="w-5 h-5" /> App Store
            </Button>
            <Button variant="primary" size="lg" className="gap-2 w-full sm:w-auto rounded-full px-8 shadow-lg shadow-accent/25">
              <Play className="w-5 h-5" /> Google Play
            </Button>
          </div>

          <div className="inline-flex flex-col items-center gap-3 p-6 glass-card rounded-3xl bg-white/60">
            <QRCodeSVG value="https://fuelrush.app/download" size={140} level="M" bgColor="transparent" fgColor="currentColor" className="text-[var(--color-text)]" />
            <span className="text-xs text-[var(--color-text-muted)]">Scan to download</span>
          </div>

          <p className="text-sm text-[var(--color-text-muted)] mt-8">Available on iOS & Android. No credit card required.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
