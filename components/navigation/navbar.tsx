"use client";

import Link from "next/link";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

export function Navbar() {
  const { isScrolled } = useScrollPosition();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-[var(--color-bg)]/70 backdrop-blur-2xl border-b border-[var(--glass-border)]"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="36" height="36" viewBox="0 0 100 100" fill="none" className="transition-transform duration-300 group-hover:rotate-12">
            <path d="M20 80 Q20 20 50 20 Q80 20 80 80" stroke="#FF6B35" strokeWidth="8" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="50" r="12" fill="#FF6B35" />
            <path d="M65 35 L75 25 L85 35 L75 45 Z" fill="#FF6B35" opacity="0.6" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-[var(--color-text)]">
            FUEL<span className="text-accent">RUSH</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Button variant="liquid" size="sm" className="hidden md:inline-flex gap-2 rounded-full">
            <Download className="w-4 h-4" /> Download App
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
