import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/hooks/use-theme";
import { Navbar } from "@/components/navigation/navbar";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUELRUSH — Fuel Delivered to Your Doorstep",
  description: "India's most trusted on-demand petrol & diesel delivery service. Safe, certified, and lightning fast. Download the app and get ₹50 off your first order.",
  keywords: ["fuel delivery", "petrol delivery", "diesel delivery", "on-demand fuel", "India", "doorstep fuel"],
  openGraph: {
    title: "FUELRUSH — Fuel Delivered to Your Doorstep",
    description: "India's most trusted on-demand petrol & diesel delivery service.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "FUELRUSH — Fuel Delivered to Your Doorstep",
    description: "India's most trusted on-demand petrol & diesel delivery service.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <NoiseOverlay />
        </ThemeProvider>
      </body>
    </html>
  );
}
