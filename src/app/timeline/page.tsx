import { DashboardLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function TimelinePage() {
  return (
    <DashboardLayout title="Case Timeline">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Case Timeline</h2>
          <p className="text-muted-foreground">
            Track case events, deadlines, and milestones.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Timeline View
            </CardTitle>
            <CardDescription>
              Interactive case timeline coming soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
              <div className="text-center">
                <Clock className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                  Timeline Module Placeholder
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Case timeline visualization will be implemented here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
