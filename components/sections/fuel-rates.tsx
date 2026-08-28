"use client";

import { FUEL_RATES } from "@/lib/constants";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export function FuelRates() {
  const doubledRates = [...FUEL_RATES, ...FUEL_RATES];

  return (
    <section className="relative py-8 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-widest">
          Live Fuel Rates — Updated Today 6:00 AM
        </span>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex gap-4 animate-marquee group-hover:animation-paused">
          {doubledRates.map((rate, i) => (
            <div
              key={`${rate.city}-${i}`}
              className="glass-card rounded-2xl px-6 py-4 flex-shrink-0 min-w-[220px] hover:border-accent/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-sm">{rate.city}</span>
                {rate.change === "up" && <TrendingUp className="w-4 h-4 text-red-400" />}
                {rate.change === "down" && <TrendingDown className="w-4 h-4 text-success" />}
                {rate.change === "stable" && <Minus className="w-4 h-4 text-[var(--color-text-muted)]" />}
              </div>
              <div className="flex gap-6 text-xs">
                <div>
                  <span className="text-[var(--color-text-muted)] block mb-0.5">Petrol</span>
                  <p className="font-mono font-bold text-sm">₹{rate.petrol.toFixed(2)}</p>
                </div>
                <div>
                  <span className="text-[var(--color-text-muted)] block mb-0.5">Diesel</span>
                  <p className="font-mono font-bold text-sm">₹{rate.diesel.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
