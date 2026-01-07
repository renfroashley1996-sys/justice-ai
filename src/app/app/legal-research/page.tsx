import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, FileText, Scale } from "lucide-react";

const quickLinks = [
  { title: "Case Law", icon: Scale, description: "Search judicial decisions" },
  { title: "Statutes", icon: BookOpen, description: "Browse legislation" },
  { title: "Secondary Sources", icon: FileText, description: "Legal treatises" },
];

export default function LegalResearchPage() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Legal Research</h2>
        <p className="text-muted-foreground">
          Search case law, statutes, and legal precedents with AI assistance.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Research Portal
          </CardTitle>
          <CardDescription>
            AI-powered legal research across comprehensive databases
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search cases, statutes, or legal concepts..."
                className="pl-9"
              />
            </div>
            <Button>Search</Button>
          </div>

          {/* Quick links */}
          <div className="grid gap-4 md:grid-cols-3">
            {quickLinks.map((link) => (
              <div
                key={link.title}
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent cursor-pointer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{link.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder for results */}
          <div className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed">
            <div className="text-center">
              <Search className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Search results will appear here
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
