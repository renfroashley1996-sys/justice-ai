import { DashboardLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

export default function DiscoveryPage() {
  return (
    <DashboardLayout title="Discovery">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Discovery</h2>
          <p className="text-muted-foreground">
            Manage discovery documents and evidence.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5" />
              Document Management
            </CardTitle>
            <CardDescription>
              Discovery document management coming soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
              <div className="text-center">
                <FolderOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                  Discovery Module Placeholder
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Document upload and management will be implemented here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
