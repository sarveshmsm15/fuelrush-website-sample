"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { STATS } from "@/lib/constants";

function AnimatedCounter({ value, suffix }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseFloat(value.replace(/,/g, ""));

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  const displayValue = value.includes(".") ? (count / 100).toFixed(1) : count.toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pastel-gradient-bg opacity-40" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center glass-card rounded-3xl p-8 bg-white/50">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[var(--color-text-muted)] mt-3 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
