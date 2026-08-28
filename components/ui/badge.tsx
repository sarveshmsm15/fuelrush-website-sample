import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[var(--glass-bg)] text-[var(--color-text)] border-[var(--glass-border)]",
    accent: "bg-accent/15 text-accent border-accent/30",
    success: "bg-success/15 text-success border-success/30",
    outline: "bg-transparent border-[var(--glass-border)] text-[var(--color-text-muted)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
