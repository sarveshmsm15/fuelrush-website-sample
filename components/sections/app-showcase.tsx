"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const screens = [
  {
    title: "Home",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-white/40">Welcome back</p>
            <p className="text-sm font-bold text-white">Rahul S.</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-accent/20" />
        </div>
        <div className="bg-accent/10 rounded-xl p-3">
          <p className="text-[10px] text-white/40">Quick Order</p>
          <div className="flex gap-2 mt-2">
            <div className="flex-1 h-8 bg-accent/20 rounded-lg" />
            <div className="flex-1 h-8 bg-blue-500/20 rounded-lg" />
          </div>
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
              <div className="w-8 h-8 rounded-lg bg-white/10" />
              <div className="flex-1">
                <div className="h-2 w-20 bg-white/10 rounded" />
                <div className="h-1.5 w-12 bg-white/10 rounded mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Tracking",
    content: (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-[10px] text-white/40">Arriving in</p>
          <p className="text-2xl font-bold text-accent font-mono">12 min</p>
        </div>
        <div className="relative h-32 bg-white/5 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-white/10" />
            <div className="absolute left-4 w-3 h-3 rounded-full bg-accent" />
            <div className="absolute right-4 w-3 h-3 rounded-full bg-success" />
            <div className="absolute left-1/3 w-4 h-4 rounded-full bg-accent border-2 border-white shadow-lg" />
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <div className="w-10 h-10 rounded-full bg-accent/20" />
          <div>
            <p className="text-xs font-semibold text-white">Vikram M.</p>
            <p className="text-[10px] text-white/40">MH-12-AB-1234</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Payment",
    content: (
      <div className="space-y-4">
        <p className="text-sm font-bold text-white">Payment</p>
        <div className="glass-card rounded-xl p-4 border-white/10">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/40">Fuel Cost</span>
            <span className="font-semibold text-white">₹2,450</span>
          </div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/40">Delivery Fee</span>
            <span className="font-semibold text-white">₹49</span>
          </div>
          <div className="h-px bg-white/10 my-2" />
          <div className="flex justify-between text-sm font-bold text-white">
            <span>Total</span>
            <span>₹2,499</span>
          </div>
        </div>
        <div className="space-y-2">
          {["UPI", "Credit Card", "Wallet"].map((method) => (
            <div key={method} className="flex items-center gap-3 p-3 rounded-xl border border-white/10">
              <div className="w-6 h-6 rounded bg-white/10" />
              <span className="text-xs font-medium text-white/80">{method}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-gradient-to-r from-accent to-accent-light text-white rounded-xl py-3 text-xs font-semibold shadow-lg shadow-accent/20">
          Pay ₹2,499
        </button>
      </div>
    ),
  },
];

export function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden bg-[#0C0C0E]">
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] top-0 left-1/4" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[100px] bottom-0 right-1/4" />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">The App</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white">
              Experience the Future of{" "}
              <span className="gradient-text">Fuel Delivery</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              A beautifully crafted mobile experience that puts fuel delivery at your fingertips. Intuitive, fast, and secure.
            </p>
            <div className="flex gap-3">
              {screens.map((screen, i) => (
                <button
                  key={screen.title}
                  onClick={() => setActiveScreen(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeScreen === i
                      ? "bg-accent text-white shadow-lg shadow-accent/30"
                      : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70"
                  }`}
                >
                  {screen.title}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-[280px]">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-purple-500/10 rounded-[3rem] blur-2xl" />
                <div className="relative bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/5">
                    <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
                      <span className="text-[10px] text-white/30">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="p-5 h-[360px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeScreen}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {screens[activeScreen].content}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
