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
  FileSignature,
  Upload,
  FileText,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react";

interface UploadedFile {
  name: string;
  size: string;
}

interface ComparisonJob {
  id: string;
  counterpartyFile: string;
  standardFile: string;
  status: "QUEUED" | "PROCESSING" | "COMPLETED";
  createdAt: string;
}

export default function ContractRedliningPage() {
  const [counterpartyFile, setCounterpartyFile] = useState<UploadedFile | null>(
    null
  );
  const [standardFile, setStandardFile] = useState<UploadedFile | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobs, setJobs] = useState<ComparisonJob[]>([
    {
      id: "job-1",
      counterpartyFile: "Vendor_Agreement_v2.docx",
      standardFile: "Master_Template.docx",
      status: "COMPLETED",
      createdAt: "Jan 5, 2024 at 2:30 PM",
    },
    {
      id: "job-2",
      counterpartyFile: "NDA_Counterparty.pdf",
      standardFile: "NDA_Standard.pdf",
      status: "PROCESSING",
      createdAt: "Jan 6, 2024 at 10:15 AM",
    },
  ]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "counterparty" | "standard"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileInfo = {
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
      };
      if (type === "counterparty") {
        setCounterpartyFile(fileInfo);
      } else {
        setStandardFile(fileInfo);
      }
    }
  };

  const handleSubmit = async () => {
    if (!counterpartyFile || !standardFile) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newJob: ComparisonJob = {
        id: `job-${Date.now()}`,
        counterpartyFile: counterpartyFile.name,
        standardFile: standardFile.name,
        status: "QUEUED",
        createdAt: new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      };

      setJobs([newJob, ...jobs]);
      setCounterpartyFile(null);
      setStandardFile(null);

      // Reset file inputs
      const inputs = document.querySelectorAll('input[type="file"]');
      inputs.forEach((input) => ((input as HTMLInputElement).value = ""));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusBadge = (status: ComparisonJob["status"]) => {
    switch (status) {
      case "QUEUED":
        return (
          <Badge variant="warning" className="gap-1">
            <Clock className="h-3 w-3" />
            Queued for comparison
          </Badge>
        );
      case "PROCESSING":
        return (
          <Badge variant="secondary" className="gap-1">
            <Loader2 className="h-3 w-3 animate-spin" />
            Processing
          </Badge>
        );
      case "COMPLETED":
        return (
          <Badge variant="success" className="gap-1">
            <CheckCircle className="h-3 w-3" />
            Completed
          </Badge>
        );
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Contract Redlining</h2>
        <p className="text-muted-foreground">
          Redline contracts 10X faster. Upload a counterparty contract and your
          gold standard to see AI-generated redline suggestions.
        </p>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSignature className="h-5 w-5" />
            Compare Contracts
          </CardTitle>
          <CardDescription>
            Upload two documents to generate redline suggestions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Counterparty Document */}
            <div className="space-y-3">
              <label className="text-sm font-medium">
                Counterparty Document
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "counterparty")}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                <div
                  className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
                    counterpartyFile
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/25 hover:border-muted-foreground/50"
                  }`}
                >
                  {counterpartyFile ? (
                    <>
                      <FileText className="h-8 w-8 text-primary" />
                      <p className="mt-2 font-medium">{counterpartyFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {counterpartyFile.size}
                      </p>
                    </>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Gold Standard Document */}
            <div className="space-y-3">
              <label className="text-sm font-medium">
                Your Gold Standard Template
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "standard")}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                <div
                  className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
                    standardFile
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/25 hover:border-muted-foreground/50"
                  }`}
                >
                  {standardFile ? (
                    <>
                      <FileText className="h-8 w-8 text-primary" />
                      <p className="mt-2 font-medium">{standardFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {standardFile.size}
                      </p>
                    </>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={!counterpartyFile || !standardFile || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <FileSignature className="mr-2 h-4 w-4" />
                  Start Comparison
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Comparisons */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Comparisons</CardTitle>
          <CardDescription>Your contract comparison jobs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <FileSignature className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{job.counterpartyFile}</p>
                    <p className="text-sm text-muted-foreground">
                      vs. {job.standardFile}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {job.createdAt}
                  </span>
                  {getStatusBadge(job.status)}
                  {job.status === "COMPLETED" && (
                    <Button variant="outline" size="sm">
                      View Results
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
