import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileEdit, Plus, FileText, Wand2 } from "lucide-react";

const documentTypes = [
  { name: "Legal Memo", description: "Draft extensive memos in 10-15 minutes" },
  { name: "Brief Draft", description: "Produce early brief drafts (memoranda of law)" },
  { name: "PDF Summary", description: "Generate high-quality PDF summaries" },
  { name: "Custom Document", description: "Start from scratch or use templates" },
];

export default function DraftingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Drafting</h2>
        <p className="text-muted-foreground">
          Draft legal documents with AI assistance. Proofread and improve your
          writing.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileEdit className="h-5 w-5" />
            Document Types
          </CardTitle>
          <CardDescription>Choose a document type to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {documentTypes.map((type) => (
              <div
                key={type.name}
                className="flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{type.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </div>
                <Button size="sm">
                  <Plus className="mr-1 h-3 w-3" />
                  Create
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            AI Writing Tools
          </CardTitle>
          <CardDescription>
            Improve your legal writing with AI assistance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button variant="outline">Proofread</Button>
            <Button variant="outline">Improve Clarity</Button>
            <Button variant="outline">Check Citations</Button>
            <Button variant="outline">Summarize</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
