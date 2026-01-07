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
    date: "Jan 15, 2024",
    title: "Contract Signed",
    description: "Initial agreement between parties executed",
    type: "milestone",
  },
  {
    date: "Feb 20, 2024",
    title: "First Amendment",
    description: "Contract terms modified",
    type: "document",
  },
  {
    date: "Mar 10, 2024",
    title: "Dispute Arises",
    description: "Breach of contract alleged",
    type: "event",
  },
  {
    date: "Apr 5, 2024",
    title: "Demand Letter Sent",
    description: "Formal demand for remedy",
    type: "communication",
  },
];

export default function TimelinePage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Timeline</h2>
          <p className="text-muted-foreground">
            Create timelines and statements of facts from your relevant files.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Files
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Case Timeline
          </CardTitle>
          <CardDescription>
            Visual timeline of events with AI-generated summaries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />

            {/* Timeline events */}
            <div className="space-y-6">
              {mockEvents.map((event, index) => (
                <div key={index} className="relative pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                  <div className="rounded-lg border p-4 transition-colors hover:bg-accent/50">
                    <p className="text-xs font-medium text-muted-foreground">
                      {event.date}
                    </p>
                    <h4 className="mt-1 font-semibold">{event.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
