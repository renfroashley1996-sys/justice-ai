import { DashboardLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";

export default function ResearchPage() {
  return (
    <DashboardLayout title="Legal Research">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Legal Research</h2>
          <p className="text-muted-foreground">
            Search case law, statutes, and legal precedents.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Research Portal
            </CardTitle>
            <CardDescription>
              AI-powered legal research coming soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
              <div className="text-center">
                <Search className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                  Research Module Placeholder
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Search functionality will be implemented here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
