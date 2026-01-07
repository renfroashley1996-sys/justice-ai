import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Upload, Search, FileText, CheckCircle } from "lucide-react";

const mockDocuments = [
  {
    name: "Deposition_Smith_2024.pdf",
    status: "Reviewed",
    date: "Jan 15, 2024",
    size: "2.4 MB",
  },
  {
    name: "Email_Chain_Exhibit_A.pdf",
    status: "Pending",
    date: "Jan 18, 2024",
    size: "856 KB",
  },
  {
    name: "Contract_Original.docx",
    status: "Reviewed",
    date: "Jan 20, 2024",
    size: "1.2 MB",
  },
  {
    name: "Financial_Records_Q4.xlsx",
    status: "In Progress",
    date: "Jan 22, 2024",
    size: "3.8 MB",
  },
];

export default function DiscoveryPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Discovery</h2>
          <p className="text-muted-foreground">
            Conduct document review with AI assistance - process enormous numbers
            of documents in minutes.
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Documents
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">Across all cases</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Reviewed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">892</div>
            <p className="text-xs text-muted-foreground">71% complete</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Flagged</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">34</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            Document Review
          </CardTitle>
          <CardDescription>
            AI-powered document analysis and categorization
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Search bar */}
          <div className="mb-4 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search documents..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          {/* Document list */}
          <div className="rounded-lg border">
            <div className="grid grid-cols-4 gap-4 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
              <div>Document Name</div>
              <div>Status</div>
              <div>Date</div>
              <div>Size</div>
            </div>
            {mockDocuments.map((doc, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 border-b px-4 py-3 text-sm last:border-0 hover:bg-accent/50 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {doc.name}
                </div>
                <div className="flex items-center gap-2">
                  {doc.status === "Reviewed" && (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  )}
                  <span
                    className={
                      doc.status === "Reviewed"
                        ? "text-green-600"
                        : doc.status === "Pending"
                        ? "text-amber-600"
                        : "text-blue-600"
                    }
                  >
                    {doc.status}
                  </span>
                </div>
                <div className="text-muted-foreground">{doc.date}</div>
                <div className="text-muted-foreground">{doc.size}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
