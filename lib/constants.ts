import { FuelRate, Testimonial, PricingPlan, NavLink, StatItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Safety", href: "#safety" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const FUEL_RATES: FuelRate[] = [
  { city: "Delhi", petrol: 102.50, diesel: 94.20, change: "up" },
  { city: "Mumbai", petrol: 108.30, diesel: 97.80, change: "down" },
  { city: "Bangalore", petrol: 105.75, diesel: 95.40, change: "stable" },
  { city: "Chennai", petrol: 104.20, diesel: 96.10, change: "up" },
  { city: "Hyderabad", petrol: 103.90, diesel: 95.60, change: "down" },
  { city: "Pune", petrol: 106.40, diesel: 96.80, change: "stable" },
  { city: "Kolkata", petrol: 103.15, diesel: 94.90, change: "up" },
  { city: "Ahmedabad", petrol: 101.80, diesel: 93.50, change: "down" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai, Maharashtra",
    vehicle: "Honda City",
    rating: 5,
    quote: "FUELRUSH saved me during a late-night emergency. The delivery was at my doorstep in 25 minutes. Absolutely game-changing service!",
    avatar: "RS",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Bangalore, Karnataka",
    vehicle: "Hyundai Creta",
    rating: 5,
    quote: "I use FUELRUSH for my office commute every week. The scheduled delivery feature is brilliant — I never worry about fuel anymore.",
    avatar: "PP",
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Delhi, NCR",
    vehicle: "Maruti Swift",
    rating: 5,
    quote: "The quality of fuel is top-notch. I compared the mileage before and after — no difference from the petrol pump. Plus, the convenience is unmatched.",
    avatar: "AK",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    vehicle: "Tata Nexon EV (ICE backup)",
    rating: 4,
    quote: "As someone who juggles between EV and ICE, FUELRUSH makes my ICE days stress-free. The app is beautifully designed too.",
    avatar: "SR",
  },
  {
    id: 5,
    name: "Vikram Mehta",
    location: "Pune, Maharashtra",
    vehicle: "Toyota Innova",
    rating: 5,
    quote: "Running a fleet of 8 vehicles for my business, FUELRUSH Business plan has cut our fuel management time by 70%. Highly recommended.",
    avatar: "VM",
  },
  {
    id: 6,
    name: "Ananya Bose",
    location: "Kolkata, West Bengal",
    vehicle: "Kia Seltos",
    rating: 5,
    quote: "The OTP verification and live tracking give me complete peace of mind. Safety was my biggest concern — FUELRUSH nailed it.",
    avatar: "AB",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for occasional users",
    features: [
      "Pay per delivery",
      "Standard delivery rates",
      "Live tracking",
      "UPI & Card payments",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Plus",
    price: "₹99",
    period: "month",
    description: "Best for regular commuters",
    features: [
      "Free delivery on all orders",
      "Priority customer support",
      "5% cashback on every order",
      "Schedule up to 10 deliveries",
      "Emergency mode access",
      "Exclusive fuel rate alerts",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description: "For fleets and enterprises",
    features: [
      "Fleet management dashboard",
      "Bulk order discounts",
      "Dedicated account manager",
      "API access",
      "Custom billing cycles",
      "24/7 priority support",
      "White-label options",
    ],
    cta: "Contact Sales",
  },
];

export const STATS: StatItem[] = [
  { value: "50000", label: "Happy Customers", suffix: "+" },
  { value: "100000", label: "Liters Delivered", suffix: "+" },
  { value: "99.8", label: "On-Time Delivery", suffix: "%" },
  { value: "4.9", label: "Average Rating", suffix: "★" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Safety", href: "#safety" },
    { label: "Business", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
