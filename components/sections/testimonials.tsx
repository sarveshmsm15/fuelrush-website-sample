"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -420 : 420, behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 cloud-bg opacity-40" />
      <div className="container-custom relative z-10">
        <ScrollReveal className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Loved by <span className="gradient-text">Drivers</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="liquid-glass p-3 rounded-2xl hover:bg-white/20">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="liquid-glass p-3 rounded-2xl hover:bg-white/20">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 xl:px-12 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="snap-center flex-shrink-0 w-[360px] md:w-[420px]"
          >
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col bg-white/50">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < testimonial.rating ? "fill-accent text-accent" : "text-[var(--glass-border)]"}`} />
                ))}
              </div>
              <p className="text-[var(--color-text)] leading-relaxed flex-1 mb-6 text-base">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4 pt-5 border-t border-[var(--glass-border)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{testimonial.location} &bull; {testimonial.vehicle}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
