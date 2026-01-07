import Link from "next/link";
import {
  Scale,
  ArrowLeft,
  Brain,
  FileSignature,
  Search,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/shared";

const featureSections = [
  {
    title: "Immediate Legal Answers & Deep Analysis",
    icon: Brain,
    features: [
      {
        text: "Receive immediate answers to legal questions and analysis of complex fact patterns.",
      },
      {
        text: "Draft extensive memos and high-quality PDF summaries in 10-15 minutes.",
      },
      { text: "Produce early brief drafts (memoranda of law)." },
      {
        text: 'Benefit from an intelligent legal AI "army" providing you cases, statutes, and more, while remaining in the driver\'s seat.',
      },
    ],
    variant: "default" as const,
  },
  {
    title: "Contract Redlining at 10X Speed",
    icon: FileSignature,
    features: [
      { text: "Redline contracts 10X faster." },
      {
        text: "Summarize core and discrete differences of counterparty contract vs. your gold standard without any setup time.",
      },
      { text: "Compare against market standards for every provision." },
      {
        text: "See AI-generated redline suggestions in your style with 1-click.",
      },
      {
        text: "Draft from scratch or using your own templates instantly.",
      },
    ],
    variant: "alt" as const,
  },
  {
    title: "Discovery & Timelines Beyond ChatGPT for Law",
    icon: Search,
    features: [
      {
        text: "Use the Word add-in to draft contracts via AI instantly.",
        comingSoon: true,
      },
      {
        text: "Create a timeline and statement of facts with your relevant files.",
      },
      {
        text: "Conduct document review with enormous numbers of documents in a few minutes.",
      },
      { text: "Proofread and improve writing." },
      {
        text: "Leverage a flexible Legal AI Assistant to help with a wide range of other tasks.",
      },
    ],
    variant: "default" as const,
  },
];

export default function FeaturesPage() {
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
              className="text-sm font-medium text-foreground"
            >
              Features
            </Link>
            <Link href="/app">
              <Button>Launch App</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Powerful Features for
            <br />
            <span className="text-primary">Legal Professionals</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover how Justice AI transforms legal work with cutting-edge AI
            capabilities designed specifically for the legal industry.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {featureSections.map((section, index) => (
            <FeatureSection
              key={index}
              title={section.title}
              icon={section.icon}
              features={section.features}
              variant={section.variant}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to experience these features?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Start using Justice AI today and transform how you handle legal
              work.
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
