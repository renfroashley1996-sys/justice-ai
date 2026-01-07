"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GitCompare,
  Upload,
  FileText,
  AlertCircle,
  CheckCircle,
  MinusCircle,
  Loader2,
} from "lucide-react";

interface UploadedFile {
  name: string;
  size: string;
}

interface Difference {
  id: string;
  section: string;
  type: "added" | "removed" | "modified";
  description: string;
  severity: "high" | "medium" | "low";
  documentA: string;
  documentB: string;
}

const mockDifferences: Difference[] = [
  {
    id: "1",
    section: "Section 3.1 - Payment Terms",
    type: "modified",
    description: "Payment window changed from 30 to 45 days",
    severity: "high",
    documentA: "Payment due within 30 days of invoice",
    documentB: "Payment due within 45 days of invoice",
  },
  {
    id: "2",
    section: "Section 5.2 - Liability Cap",
    type: "modified",
    description: "Liability cap reduced from $1M to $500K",
    severity: "high",
    documentA: "Maximum liability shall not exceed $1,000,000",
    documentB: "Maximum liability shall not exceed $500,000",
  },
  {
    id: "3",
    section: "Section 7.3 - Termination",
    type: "added",
    description: "New termination for convenience clause added",
    severity: "medium",
    documentA: "(not present)",
    documentB: "Either party may terminate with 30 days written notice",
  },
  {
    id: "4",
    section: "Section 8.1 - Governing Law",
    type: "modified",
    description: "Jurisdiction changed from Delaware to New York",
    severity: "low",
    documentA: "Governed by the laws of Delaware",
    documentB: "Governed by the laws of New York",
  },
  {
    id: "5",
    section: "Section 4.4 - Confidentiality",
    type: "removed",
    description: "Mutual NDA clause removed",
    severity: "medium",
    documentA: "Both parties agree to maintain confidentiality...",
    documentB: "(removed)",
  },
];

export default function CompareContractsPage() {
  const [documentA, setDocumentA] = useState<UploadedFile | null>(null);
  const [documentB, setDocumentB] = useState<UploadedFile | null>(null);
  const [isComparing, setIsComparing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [differences] = useState<Difference[]>(mockDifferences);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "a" | "b"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileInfo = {
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
      };
      if (type === "a") {
        setDocumentA(fileInfo);
      } else {
        setDocumentB(fileInfo);
      }
    }
  };

  const handleCompare = async () => {
    if (!documentA || !documentB) return;

    setIsComparing(true);
    // Simulate comparison processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsComparing(false);
    setShowResults(true);
  };

  const getTypeIcon = (type: Difference["type"]) => {
    switch (type) {
      case "added":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "removed":
        return <MinusCircle className="h-4 w-4 text-red-600" />;
      case "modified":
        return <AlertCircle className="h-4 w-4 text-amber-600" />;
    }
  };

  const getSeverityBadge = (severity: Difference["severity"]) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive">High Impact</Badge>;
      case "medium":
        return <Badge variant="warning">Medium Impact</Badge>;
      case "low":
        return <Badge variant="secondary">Low Impact</Badge>;
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Compare Contracts</h2>
        <p className="text-muted-foreground">
          Compare two contracts side-by-side and see detailed differences
          analysis.
        </p>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompare className="h-5 w-5" />
            Upload Documents
          </CardTitle>
          <CardDescription>
            Upload two contracts to compare their provisions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Document A */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Document A</label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "a")}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                <div
                  className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
                    documentA
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/25 hover:border-muted-foreground/50"
                  }`}
                >
                  {documentA ? (
                    <>
                      <FileText className="h-8 w-8 text-primary" />
                      <p className="mt-2 font-medium">{documentA.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {documentA.size}
                      </p>
                    </>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Upload first document
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Document B */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Document B</label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "b")}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                <div
                  className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
                    documentB
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/25 hover:border-muted-foreground/50"
                  }`}
                >
                  {documentB ? (
                    <>
                      <FileText className="h-8 w-8 text-primary" />
                      <p className="mt-2 font-medium">{documentB.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {documentB.size}
                      </p>
                    </>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Upload second document
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleCompare}
              disabled={!documentA || !documentB || isComparing}
            >
              {isComparing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Comparing...
                </>
              ) : (
                <>
                  <GitCompare className="mr-2 h-4 w-4" />
                  Compare Documents
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {showResults && (
        <Card>
          <CardHeader>
            <CardTitle>Comparison Results</CardTitle>
            <CardDescription>
              Found {differences.length} differences between the documents
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Summary */}
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border p-4 text-center">
                <p className="text-2xl font-bold text-amber-600">
                  {differences.filter((d) => d.type === "modified").length}
                </p>
                <p className="text-sm text-muted-foreground">Modified</p>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <p className="text-2xl font-bold text-green-600">
                  {differences.filter((d) => d.type === "added").length}
                </p>
                <p className="text-sm text-muted-foreground">Added</p>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <p className="text-2xl font-bold text-red-600">
                  {differences.filter((d) => d.type === "removed").length}
                </p>
                <p className="text-sm text-muted-foreground">Removed</p>
              </div>
            </div>

            {/* Differences Table */}
            <div className="rounded-lg border">
              <div className="grid grid-cols-12 gap-4 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
                <div className="col-span-1">Type</div>
                <div className="col-span-3">Section</div>
                <div className="col-span-3">Document A</div>
                <div className="col-span-3">Document B</div>
                <div className="col-span-2">Impact</div>
              </div>
              {differences.map((diff) => (
                <div
                  key={diff.id}
                  className="grid grid-cols-12 gap-4 border-b px-4 py-3 text-sm last:border-0"
                >
                  <div className="col-span-1 flex items-center">
                    {getTypeIcon(diff.type)}
                  </div>
                  <div className="col-span-3">
                    <p className="font-medium">{diff.section}</p>
                    <p className="text-xs text-muted-foreground">
                      {diff.description}
                    </p>
                  </div>
                  <div className="col-span-3 text-muted-foreground">
                    <div className="rounded bg-red-50 p-2 text-xs dark:bg-red-950/20">
                      {diff.documentA}
                    </div>
                  </div>
                  <div className="col-span-3 text-muted-foreground">
                    <div className="rounded bg-green-50 p-2 text-xs dark:bg-green-950/20">
                      {diff.documentB}
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center">
                    {getSeverityBadge(diff.severity)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
