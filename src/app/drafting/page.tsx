import { DashboardLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileEdit } from "lucide-react";

export default function DraftingPage() {
  return (
    <DashboardLayout title="Drafting">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Drafting</h2>
          <p className="text-muted-foreground">
            Draft legal documents and briefs.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileEdit className="h-5 w-5" />
              Document Editor
            </CardTitle>
            <CardDescription>
              AI-assisted document drafting coming soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
              <div className="text-center">
                <FileEdit className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                  Drafting Module Placeholder
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Legal document editor will be implemented here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
