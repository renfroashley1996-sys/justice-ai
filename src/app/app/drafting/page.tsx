import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileEdit, Plus, FileText, Clock, Sparkles } from "lucide-react";

const documentTypes = [
  { name: "Legal Memo", description: "Draft extensive memos in 10-15 minutes" },
  { name: "Brief Draft", description: "Produce early memoranda of law" },
  { name: "PDF Summary", description: "High-quality document summaries" },
  { name: "Demand Letter", description: "Professional legal correspondence" },
];

const recentDrafts = [
  {
    title: "Motion to Dismiss - Johnson Case",
    type: "Brief",
    lastEdited: "2 hours ago",
  },
  {
    title: "Legal Research Memo - Contract Breach",
    type: "Memo",
    lastEdited: "Yesterday",
  },
  {
    title: "Settlement Demand Letter",
    type: "Letter",
    lastEdited: "3 days ago",
  },
];

export default function DraftingPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Document Drafting</h2>
          <p className="text-muted-foreground">
            Draft legal documents with AI assistance - memos, briefs, and more.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Document
        </Button>
      </div>

      {/* Document type cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {documentTypes.map((type) => (
          <Card
            key={type.name}
            className="cursor-pointer transition-shadow hover:shadow-md"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-base">{type.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileEdit className="h-5 w-5" />
            Recent Drafts
          </CardTitle>
          <CardDescription>
            Continue working on your recent documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentDrafts.map((draft, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-accent/50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{draft.title}</p>
                    <p className="text-sm text-muted-foreground">{draft.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {draft.lastEdited}
                  </div>
                  <Button variant="outline" size="sm">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Continue with AI
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
