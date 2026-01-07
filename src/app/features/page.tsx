import Link from "next/link";
import {
  Scale,
  ArrowRight,
  Brain,
  FileCheck,
  FolderSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/ui/feature-section";

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
        text: 'Benefit from an intelligent legal AI "army" providing you cases, statutes, and more—while you remain in the driver\'s seat.',
      },
    ],
  },
  {
    title: "Contract Redlining at 10X Speed",
    icon: FileCheck,
    features: [
      { text: "Redline contracts 10X faster than traditional methods." },
      {
        text: "Summarize core and discrete differences between counterparty contracts and your gold standard—no setup time required.",
      },
      { text: "Compare against market standards for every provision." },
      {
        text: "See AI-generated redline suggestions in your style with 1-click acceptance.",
      },
      {
        text: "Draft from scratch or using your own templates instantly.",
      },
    ],
  },
  {
    title: "Discovery & Timelines Beyond ChatGPT for Law",
    icon: FolderSearch,
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
      { text: "Proofread and improve your legal writing." },
      {
        text: "Leverage a flexible Legal AI Assistant to help with a wide range of other tasks.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
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
              className="text-sm font-medium text-foreground"
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

      {/* Header */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful Features for Legal Professionals
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Justice AI combines advanced AI capabilities with legal expertise to
            help you work faster, smarter, and more efficiently.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          {featureSections.map((section) => (
            <FeatureSection
              key={section.title}
              title={section.title}
              icon={section.icon}
              features={section.features}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold">
            Ready to experience these features?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start using Justice AI today and transform your legal workflow.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/app">
              Get Started Now
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
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
