import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Shield, AlertTriangle } from "lucide-react";

const strategyAreas = [
  {
    title: "Strengths",
    description: "Key arguments in your favor",
    icon: Target,
    color: "text-green-600",
  },
  {
    title: "Weaknesses",
    description: "Potential vulnerabilities to address",
    icon: AlertTriangle,
    color: "text-amber-600",
  },
  {
    title: "Opportunities",
    description: "Strategic advantages to pursue",
    icon: Lightbulb,
    color: "text-blue-600",
  },
  {
    title: "Threats",
    description: "Opposition tactics to prepare for",
    icon: Shield,
    color: "text-red-600",
  },
];

export default function StrategyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Strategy</h2>
        <p className="text-muted-foreground">
          Leverage AI to help with case strategy analysis and planning.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Strategy Analysis
          </CardTitle>
          <CardDescription>
            AI-powered case strategy assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {strategyAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-2">
                  <area.icon className={`h-5 w-5 ${area.color}`} />
                  <h3 className="font-semibold">{area.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {area.description}
                </p>
                <div className="mt-4 rounded border-2 border-dashed p-4 text-center">
                  <p className="text-xs text-muted-foreground">
                    Analysis will appear here
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generate Strategy Report</CardTitle>
          <CardDescription>
            Create a comprehensive strategy analysis based on case documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>
            <Lightbulb className="mr-2 h-4 w-4" />
            Analyze Case Strategy
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
