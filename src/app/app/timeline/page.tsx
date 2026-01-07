import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Plus, Upload } from "lucide-react";

const mockEvents = [
  {
    date: "2024-01-15",
    title: "Complaint Filed",
    description: "Initial complaint filed in district court",
  },
  {
    date: "2024-02-01",
    title: "Answer Received",
    description: "Defendant filed answer to complaint",
  },
  {
    date: "2024-03-10",
    title: "Discovery Opens",
    description: "Discovery period officially begins",
  },
];

export default function TimelinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Case Timeline</h2>
        <p className="text-muted-foreground">
          Create a timeline and statement of facts with your relevant files.
        </p>
      </div>

      <div className="flex gap-4">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Import from Documents
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Timeline View
          </CardTitle>
          <CardDescription>
            Visual timeline of case events and deadlines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-0">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />

            {/* Timeline Events */}
            {mockEvents.map((event, index) => (
              <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{event.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {event.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
