import Link from "next/link";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Footer } from "@/components/sections/footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    slug: "fuel-safety-tips",
    title: "5 Essential Fuel Safety Tips Every Driver Should Know",
    excerpt: "Understanding how to handle fuel safely can prevent accidents and ensure longevity of your vehicle.",
    category: "Safety",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    slug: "ev-vs-fuel",
    title: "EV vs Fuel: The Real Cost Analysis for Indian Drivers",
    excerpt: "We break down the total cost of ownership for electric vehicles versus ICE vehicles in India.",
    category: "Analysis",
    date: "Dec 10, 2024",
    readTime: "8 min read",
  },
  {
    slug: "startup-story",
    title: "How We Built FUELRUSH: A Startup Story",
    excerpt: "From a garage idea to serving 50,000+ customers — the journey of India's fastest growing fuel delivery startup.",
    category: "Company",
    date: "Dec 5, 2024",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">FuelRush</span> Blog
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Insights on fuel safety, industry trends, and behind-the-scenes stories.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-accent/30 transition-colors">
                    <CardHeader>
                      <Badge variant="accent" className="w-fit mb-3">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                      <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] pt-2">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
