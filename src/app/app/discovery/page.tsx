import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Upload, FileText, Search } from "lucide-react";

const mockDocuments = [
  { name: "Deposition_Smith_2024.pdf", type: "Deposition", size: "2.4 MB" },
  { name: "Contract_Agreement.docx", type: "Contract", size: "156 KB" },
  { name: "Email_Correspondence.pdf", type: "Correspondence", size: "890 KB" },
  { name: "Financial_Records.xlsx", type: "Evidence", size: "1.2 MB" },
];

export default function DiscoveryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Discovery</h2>
        <p className="text-muted-foreground">
          Conduct document review with enormous numbers of documents in minutes.
        </p>
      </div>

      <div className="flex gap-4">
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Documents
        </Button>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" />
          AI Document Review
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            Document Repository
          </CardTitle>
          <CardDescription>
            Manage and review discovery documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Document List */}
            <div className="divide-y rounded-lg border">
              {mockDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 hover:bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
