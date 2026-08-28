"use client";

import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="liquid-glass rounded-full p-1 flex items-center gap-1 h-9 w-32">
        <div className="w-full h-full rounded-full bg-white/5 animate-pulse" />
      </div>
    );
  }

  const options: { value: "light" | "dark" | "system"; icon: React.ReactNode; label: string }[] = [
    { value: "light", icon: <Sun className="w-4 h-4" />, label: "ONYX" },
    { value: "dark", icon: <Moon className="w-4 h-4" />, label: "PEARL" },
    { value: "system", icon: <Monitor className="w-4 h-4" />, label: "System" },
  ];

  return (
    <div className="liquid-glass rounded-full p-1 flex items-center gap-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          className={cn(
            "relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
            theme === opt.value
              ? "bg-accent text-white shadow-lg shadow-accent/30"
              : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          )}
          aria-label={`Set theme to ${opt.label}`}
        >
          {opt.icon}
          <span className="hidden sm:inline">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
