import Link from "next/link";
import {
  Scale,
  ArrowRight,
  Brain,
  FileText,
  Clock,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Get immediate answers to complex legal questions with intelligent analysis.",
  },
  {
    icon: FileText,
    title: "Contract Redlining",
    description:
      "Redline contracts 10X faster with AI-generated suggestions in your style.",
  },
  {
    icon: Clock,
    title: "Timeline & Discovery",
    description:
      "Create timelines and review documents in minutes, not hours.",
  },
  {
    icon: Zap,
    title: "Instant Drafting",
    description:
      "Draft memos, briefs, and summaries in 10-15 minutes with AI assistance.",
  },
  {
    icon: Shield,
    title: "Secure & Confidential",
    description:
      "Enterprise-grade security keeps your sensitive legal data protected.",
  },
  {
    icon: Users,
    title: "You Stay in Control",
    description:
      "AI provides the intelligence; you remain in the driver's seat.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Justice AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/features"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Button asChild>
              <Link href="/app">
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Legal Intelligence,{" "}
            <span className="text-primary">Accelerated</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Justice AI empowers legal professionals with AI-driven research,
            contract analysis, and document drafting. Work smarter, not harder.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/app">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="border-muted/50 bg-card/50 backdrop-blur"
            >
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to transform your legal workflow?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join legal professionals who are already using Justice AI to work
            faster and smarter.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/app">
              Launch Justice AI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Justice AI - Legal Intelligence Platform
            </span>
          </div>
          <Link
            href="/features"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Features
          </Link>
        </div>
      </footer>
    </div>
  );
}
