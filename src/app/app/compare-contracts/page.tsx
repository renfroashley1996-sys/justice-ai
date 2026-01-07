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
import { FileUpload } from "@/components/ui/file-upload";
import { FileDiff, Loader2, ArrowRight } from "lucide-react";

interface ComparisonDifference {
  id: string;
  section: string;
  document1: string;
  document2: string;
  significance: "high" | "medium" | "low";
  marketComparison: string;
}

const mockDifferences: ComparisonDifference[] = [
  {
    id: "1",
    section: "Limitation of Liability",
    document1: "Liability capped at contract value",
    document2: "Liability capped at 2x contract value",
    significance: "high",
    marketComparison: "Industry standard is typically 1-2x contract value",
  },
  {
    id: "2",
    section: "Termination Clause",
    document1: "30 days notice required",
    document2: "60 days notice required",
    significance: "medium",
    marketComparison: "Market range is 30-90 days",
  },
  {
    id: "3",
    section: "Indemnification",
    document1: "Mutual indemnification",
    document2: "One-sided indemnification (favors counterparty)",
    significance: "high",
    marketComparison: "Mutual indemnification is market standard",
  },
  {
    id: "4",
    section: "Governing Law",
    document1: "Delaware",
    document2: "New York",
    significance: "low",
    marketComparison: "Both jurisdictions are commonly used",
  },
  {
    id: "5",
    section: "Payment Terms",
    document1: "Net 30",
    document2: "Net 45",
    significance: "medium",
    marketComparison: "Net 30-45 is typical range",
  },
];

export default function CompareContractsPage() {
  const [document1, setDocument1] = useState<File | null>(null);
  const [document2, setDocument2] = useState<File | null>(null);
  const [isComparing, setIsComparing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleCompare = async () => {
    if (!document1 || !document2) return;

    setIsComparing(true);
    // Simulate comparison
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsComparing(false);
    setShowResults(true);
  };

  const getSignificanceBadge = (significance: string) => {
    const colors = {
      high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      medium:
        "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    };
    return (
      <span
        className={`rounded-full px-2 py-0.5 text-xs font-medium ${colors[significance as keyof typeof colors]}`}
      >
        {significance.charAt(0).toUpperCase() + significance.slice(1)}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Compare Contracts</h2>
        <p className="text-muted-foreground">
          Summarize core and discrete differences between contracts. Compare
          against market standards for every provision.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileDiff className="h-5 w-5" />
            Upload Documents to Compare
          </CardTitle>
          <CardDescription>
            Upload two contracts to analyze their differences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <FileUpload
              label="Document 1"
              description="First contract for comparison"
              selectedFile={document1}
              onFileSelect={setDocument1}
            />
            <FileUpload
              label="Document 2"
              description="Second contract for comparison"
              selectedFile={document2}
              onFileSelect={setDocument2}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleCompare}
              disabled={!document1 || !document2 || isComparing}
            >
              {isComparing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Comparing...
                </>
              ) : (
                <>
                  <FileDiff className="mr-2 h-4 w-4" />
                  Compare Documents
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && (
        <Card>
          <CardHeader>
            <CardTitle>Comparison Results</CardTitle>
            <CardDescription>
              Key differences between {document1?.name} and {document2?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 pr-4 text-sm font-medium">Section</th>
                    <th className="pb-3 pr-4 text-sm font-medium">Document 1</th>
                    <th className="pb-3 pr-4 text-sm font-medium">Document 2</th>
                    <th className="pb-3 pr-4 text-sm font-medium">Significance</th>
                    <th className="pb-3 text-sm font-medium">Market Comparison</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {mockDifferences.map((diff) => (
                    <tr key={diff.id} className="text-sm">
                      <td className="py-4 pr-4 font-medium">{diff.section}</td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        {diff.document1}
                      </td>
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            {diff.document2}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        {getSignificanceBadge(diff.significance)}
                      </td>
                      <td className="py-4 text-xs text-muted-foreground">
                        {diff.marketComparison}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex gap-4">
              <Button>Generate Redline Suggestions</Button>
              <Button variant="outline">Export Report</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {!showResults && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center">
              <FileDiff className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">
                Comparison Results Will Appear Here
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Upload two documents above to see a detailed comparison analysis
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
