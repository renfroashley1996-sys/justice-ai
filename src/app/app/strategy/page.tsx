import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Target,
  AlertCircle,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const strategyAreas = [
  {
    title: "Strengths",
    icon: CheckCircle,
    color: "text-green-600",
    items: [
      "Strong documentary evidence",
      "Clear breach of contract terms",
      "Multiple witness statements",
    ],
  },
  {
    title: "Weaknesses",
    icon: AlertCircle,
    color: "text-red-600",
    items: [
      "Statute of limitations concerns",
      "Possible contributory negligence",
      "Limited damages documentation",
    ],
  },
  {
    title: "Opportunities",
    icon: TrendingUp,
    color: "text-blue-600",
    items: [
      "Recent favorable case precedent",
      "Settlement negotiations possible",
      "Expert witness available",
    ],
  },
  {
    title: "Threats",
    icon: Target,
    color: "text-amber-600",
    items: [
      "Opposing counsel experienced",
      "Venue potentially unfavorable",
      "Key witness unavailable",
    ],
  },
];

export default function StrategyPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Case Strategy</h2>
          <p className="text-muted-foreground">
            AI-powered case analysis and strategic planning.
          </p>
        </div>
        <Button>
          <Lightbulb className="mr-2 h-4 w-4" />
          Generate Analysis
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Strategic Analysis
          </CardTitle>
          <CardDescription>
            AI-generated SWOT analysis for your case
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {strategyAreas.map((area) => (
              <div key={area.title} className="rounded-lg border p-4">
                <div className="mb-3 flex items-center gap-2">
                  <area.icon className={`h-5 w-5 ${area.color}`} />
                  <h3 className="font-semibold">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
          <CardDescription>AI-suggested next steps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="rounded-lg border-l-4 border-l-primary bg-primary/5 p-4">
              <p className="font-medium">Prioritize discovery completion</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Complete document review to strengthen evidentiary foundation
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4 dark:bg-amber-950/20">
              <p className="font-medium">Address statute of limitations</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Research tolling arguments to counter potential defense
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4 dark:bg-green-950/20">
              <p className="font-medium">Explore settlement options</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Strong case position may favor early resolution
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
