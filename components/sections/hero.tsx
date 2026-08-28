"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 50,
        y: (e.clientY - rect.top - rect.height / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Dreamy pastel gradient background */}
      <div className="absolute inset-0 pastel-gradient-bg" />
      <div className="absolute inset-0 cloud-bg" />

      {/* Floating orbs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-40 blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
          top: '10%', left: '10%',
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-[80px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(255,107,53,0.25) 0%, transparent 70%)',
          top: '30%', right: '15%',
          transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div 
        className="absolute w-[350px] h-[350px] rounded-full opacity-25 blur-[90px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(224,236,245,0.5) 0%, transparent 70%)',
          bottom: '20%', left: '30%',
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y * 2}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 liquid-glass rounded-full px-5 py-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-sm font-medium text-[var(--color-text-muted)]">
            Now serving 7 major cities across India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto"
        >
          Fuel Delivered to{" "}
          <span className="gradient-text">Your Doorstep</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl mx-auto mt-6 leading-relaxed"
        >
          India&apos;s most trusted on-demand petrol & diesel delivery service.
          Safe, certified, and lightning fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mt-8"
        >
          <Button 
            variant="primary" 
            size="lg" 
            className="gap-2 rounded-full px-8 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
          >
            <Download className="w-5 h-5" />
            Download the App
          </Button>
          <Button 
            variant="liquid" 
            size="lg" 
            className="gap-2 rounded-full px-8"
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <div className="flex -space-x-2">
            {["RS", "PP", "AK", "SR"].map((initials, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light border-2 border-[var(--color-bg)] flex items-center justify-center text-xs font-bold text-white"
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Trusted by <span className="font-semibold text-[var(--color-text)]">50,000+ drivers</span>
            </p>
          </div>
        </motion.div>

        {/* Phone mockup floating */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mt-16 flex justify-center"
        >
          <div className="relative w-[300px] sm:w-[340px] md:w-[380px] animate-float">
            <div className="absolute -inset-8 bg-gradient-to-r from-accent/10 via-purple-500/10 to-blue-500/10 rounded-[3rem] blur-3xl" />
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-3 shadow-2xl shadow-black/5">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 px-6 py-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">FUELRUSH</span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[var(--color-text-muted)]">Current Location</p>
                      <p className="text-sm font-semibold">Mumbai, MH</p>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { type: "Petrol", price: "₹108.30", color: "from-accent to-accent-light" },
                      { type: "Diesel", price: "₹97.80", color: "from-blue-400 to-blue-500" },
                    ].map((fuel) => (
                      <div key={fuel.type} className="glass-card rounded-2xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${fuel.color} flex items-center justify-center`}>
                            <div className="w-3 h-3 rounded-full bg-white/80" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{fuel.type}</p>
                            <p className="text-xs text-[var(--color-text-muted)]">Per liter</p>
                          </div>
                        </div>
                        <p className="text-lg font-bold">{fuel.price}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-accent to-accent-light text-white rounded-2xl py-3.5 font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-accent/20">
                    Order Fuel Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-[var(--color-text-muted)] animate-bounce" />
      </motion.div>
    </section>
  );
}
