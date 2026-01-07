import Link from "next/link";
import { Scale, ArrowRight, FileText, Gavel, Zap, Shield } from "lucide-react";
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
    icon: Zap,
    title: "AI-Powered Analysis",
    description:
      "Get immediate answers to legal questions and analysis of complex fact patterns.",
  },
  {
    icon: FileText,
    title: "Contract Intelligence",
    description:
      "Redline contracts 10X faster and compare against market standards instantly.",
  },
  {
    icon: Gavel,
    title: "Legal Research",
    description:
      "Access comprehensive case law, statutes, and legal precedents with AI assistance.",
  },
  {
    icon: Shield,
    title: "Secure & Confidential",
    description:
      "Enterprise-grade security ensuring your legal data remains protected.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Justice AI</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link href="/app">
              <Button>Launch App</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Legal Intelligence
            <br />
            <span className="text-primary">Powered by AI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Transform your legal practice with AI-powered research, contract
            analysis, and document review. Work smarter, not harder.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/app">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline">
                View Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="border-slate-200 transition-shadow hover:shadow-md dark:border-slate-800"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to transform your legal practice?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join legal professionals who are already using Justice AI to work
              more efficiently.
            </p>
            <div className="mt-8">
              <Link href="/app">
                <Button size="lg" className="gap-2">
                  Launch the App <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Justice AI - Legal Intelligence Platform
              </span>
            </div>
            <nav className="flex gap-6">
              <Link
                href="/features"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="/app"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                App
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
