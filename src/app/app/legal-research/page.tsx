import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, FileText, Scale } from "lucide-react";

const researchCategories = [
  {
    title: "Case Law",
    description: "Search federal and state court decisions",
    icon: Scale,
  },
  {
    title: "Statutes",
    description: "Browse statutory codes and regulations",
    icon: BookOpen,
  },
  {
    title: "Secondary Sources",
    description: "Access treatises and legal encyclopedias",
    icon: FileText,
  },
];

export default function LegalResearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Legal Research</h2>
        <p className="text-muted-foreground">
          Search case law, statutes, and legal precedents with AI-powered
          analysis.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Research Portal
          </CardTitle>
          <CardDescription>
            AI-powered legal research across multiple sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search cases, statutes, or legal concepts..."
                className="flex-1 rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>

            {/* Research Categories */}
            <div className="grid gap-4 md:grid-cols-3">
              {researchCategories.map((category) => (
                <div
                  key={category.title}
                  className="flex cursor-pointer flex-col items-center rounded-lg border p-6 text-center transition-colors hover:bg-accent"
                >
                  <category.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 font-semibold">{category.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Results Placeholder */}
            <div className="rounded-lg border-2 border-dashed p-12 text-center">
              <Search className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">
                Search Results Will Appear Here
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter a search query above to find relevant legal materials
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
