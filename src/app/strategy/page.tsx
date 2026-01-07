import { DashboardLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function StrategyPage() {
  return (
    <DashboardLayout title="Strategy">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Strategy</h2>
          <p className="text-muted-foreground">
            Case strategy analysis and planning.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Strategy Workspace
            </CardTitle>
            <CardDescription>
              AI-powered strategy analysis coming soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
              <div className="text-center">
                <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                  Strategy Module Placeholder
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Case strategy tools will be implemented here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
