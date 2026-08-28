import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "liquid";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]",
      secondary:
        "bg-white/10 text-current border border-white/20 hover:bg-white/20 hover:border-white/30 active:scale-[0.98]",
      ghost:
        "text-current hover:bg-white/5 active:scale-[0.98]",
      liquid:
        "liquid-glass text-current hover:translate-y-[-2px] active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
