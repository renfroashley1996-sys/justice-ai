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
import { FileCheck, Loader2, Clock, CheckCircle } from "lucide-react";

type JobStatus = "idle" | "queued" | "processing" | "completed";

interface RedlineJob {
  id: string;
  counterpartyFile: string;
  standardFile: string;
  status: JobStatus;
  createdAt: string;
}

export default function ContractRedliningPage() {
  const [counterpartyFile, setCounterpartyFile] = useState<File | null>(null);
  const [goldStandardFile, setGoldStandardFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobs, setJobs] = useState<RedlineJob[]>([
    {
      id: "1",
      counterpartyFile: "Vendor_Agreement_v2.docx",
      standardFile: "Standard_Vendor_Template.docx",
      status: "completed",
      createdAt: "2024-01-05 10:30 AM",
    },
    {
      id: "2",
      counterpartyFile: "NDA_Counterparty.pdf",
      standardFile: "NDA_Template.docx",
      status: "processing",
      createdAt: "2024-01-07 2:15 PM",
    },
  ]);

  const handleSubmit = async () => {
    if (!counterpartyFile || !goldStandardFile) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newJob: RedlineJob = {
      id: Date.now().toString(),
      counterpartyFile: counterpartyFile.name,
      standardFile: goldStandardFile.name,
      status: "queued",
      createdAt: new Date().toLocaleString(),
    };

    setJobs([newJob, ...jobs]);
    setCounterpartyFile(null);
    setGoldStandardFile(null);
    setIsSubmitting(false);
  };

  const getStatusBadge = (status: JobStatus) => {
    switch (status) {
      case "queued":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
            <Clock className="h-3 w-3" />
            Queued for comparison
          </span>
        );
      case "processing":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Loader2 className="h-3 w-3 animate-spin" />
            Processing
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
            <CheckCircle className="h-3 w-3" />
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Contract Redlining</h2>
        <p className="text-muted-foreground">
          Redline contracts 10X faster. Upload counterparty contract and your
          gold standard for AI-powered comparison.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Upload Contracts
          </CardTitle>
          <CardDescription>
            Upload both documents to generate AI redline suggestions in your
            style
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <FileUpload
              label="Counterparty Contract"
              description="The contract received from the other party"
              selectedFile={counterpartyFile}
              onFileSelect={setCounterpartyFile}
            />
            <FileUpload
              label="Your Gold Standard"
              description="Your preferred template or standard contract"
              selectedFile={goldStandardFile}
              onFileSelect={setGoldStandardFile}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={!counterpartyFile || !goldStandardFile || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <FileCheck className="mr-2 h-4 w-4" />
                  Start Comparison
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comparison Jobs</CardTitle>
          <CardDescription>Track your contract comparison requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="divide-y rounded-lg border">
            {jobs.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No comparison jobs yet. Upload contracts above to get started.
                </p>
              </div>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between p-4"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">
                      {job.counterpartyFile} vs {job.standardFile}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Created: {job.createdAt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusBadge(job.status)}
                    {job.status === "completed" && (
                      <Button size="sm" variant="outline">
                        View Results
                      </Button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
