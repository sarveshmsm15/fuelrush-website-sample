import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";

const posts: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "fuel-safety-tips": {
    title: "5 Essential Fuel Safety Tips Every Driver Should Know",
    category: "Safety",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    content: `
      <p>Fuel safety is something every driver should take seriously. Here are five essential tips to keep you and your vehicle safe:</p>
      <h3>1. Never Use Mobile Phones Near Fuel</h3>
      <p>While the risk of mobile phones igniting fuel is low, it&apos;s best to avoid using them near dispensing areas as a precaution.</p>
      <h3>2. Turn Off Your Engine</h3>
      <p>Always turn off your engine during fueling. A running engine can generate sparks or heat that could ignite fuel vapors.</p>
      <h3>3. Avoid Overfilling</h3>
      <p>Overfilling your tank can cause fuel to spill, creating a fire hazard and damaging your vehicle&apos;s paint.</p>
      <h3>4. Use Anti-Static Measures</h3>
      <p>Touch a metal part of your vehicle before fueling to discharge any static electricity buildup.</p>
      <h3>5. Store Fuel Properly</h3>
      <p>If you must store fuel, use approved containers in a cool, well-ventilated area away from ignition sources.</p>
    `,
  },
  "ev-vs-fuel": {
    title: "EV vs Fuel: The Real Cost Analysis for Indian Drivers",
    category: "Analysis",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    content: `<p>The debate between electric vehicles and internal combustion engines continues to heat up in India...</p>`,
  },
  "startup-story": {
    title: "How We Built FUELRUSH: A Startup Story",
    category: "Company",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    content: `<p>It started with a simple frustration — waiting in long queues at petrol pumps...</p>`,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return notFound();

  return (
    <>
      <article className="section-padding pt-32">
        <div className="container-custom max-w-3xl">
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] mb-8">
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
            <div
              className="prose prose-lg max-w-none prose-headings:text-[var(--color-text)] prose-p:text-[var(--color-text-muted)] prose-strong:text-[var(--color-text)]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollReveal>
        </div>
      </article>
      <Footer />
    </>
  );
}
