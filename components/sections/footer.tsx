"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FOOTER_LINKS } from "@/lib/constants";
import { Twitter, Instagram, Linkedin, Facebook, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--color-bg)]">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">FUEL<span className="text-accent">RUSH</span></span>
            </Link>
            <p className="text-[var(--color-text-muted)] mb-6 max-w-sm leading-relaxed">
              India&apos;s most trusted on-demand fuel delivery service. Safe, certified, and lightning fast.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <button key={i} className="liquid-glass p-2.5 rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 mb-12 bg-white/50">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <h4 className="font-semibold mb-1">Get Fuel Rate Alerts</h4>
              <p className="text-sm text-[var(--color-text-muted)]">Subscribe to get daily fuel price updates in your city</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Input type="email" placeholder="Enter your email" className="w-full sm:w-64 rounded-full" />
              <Button variant="liquid" size="sm" className="gap-2 flex-shrink-0 rounded-full">
                <Send className="w-4 h-4" /> Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
          <p>© 2024 FUELRUSH Technologies Pvt. Ltd.</p>
          <p className="flex items-center gap-1">Made with <span className="text-red-500">♥</span> in India</p>
        </div>
      </div>
    </footer>
  );
}
