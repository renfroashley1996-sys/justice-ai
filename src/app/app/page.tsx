import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Scale, FileText, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Active Cases",
    value: "12",
    description: "Cases in progress",
    icon: Scale,
    trend: "+2 this week",
  },
  {
    title: "Documents",
    value: "284",
    description: "Total documents",
    icon: FileText,
    trend: "+24 this month",
  },
  {
    title: "Upcoming Deadlines",
    value: "5",
    description: "Within 30 days",
    icon: Clock,
    trend: "3 urgent",
  },
  {
    title: "Research Sessions",
    value: "48",
    description: "This month",
    icon: TrendingUp,
    trend: "+12% vs last month",
  },
];

export default function AppDashboardPage() {
  return (
    <>
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome to Justice AI
        </h2>
        <p className="text-muted-foreground">
          Your AI-powered legal case analysis platform. Get started by exploring
          the features in the sidebar.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="mt-1 text-xs text-primary">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest case activity and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    New document uploaded to Case #2024-001
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Timeline updated for Johnson v. Smith
                  </p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Research session completed
                  </p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Common actions to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link
              href="/app/legal-research"
              className="block rounded-lg border p-3 transition-colors hover:bg-accent"
            >
              <p className="text-sm font-medium">Start Legal Research</p>
              <p className="text-xs text-muted-foreground">
                Search case law and statutes
              </p>
            </Link>
            <Link
              href="/app/contract-redlining"
              className="block rounded-lg border p-3 transition-colors hover:bg-accent"
            >
              <p className="text-sm font-medium">Redline a Contract</p>
              <p className="text-xs text-muted-foreground">
                Compare and redline contracts
              </p>
            </Link>
            <Link
              href="/app/discovery"
              className="block rounded-lg border p-3 transition-colors hover:bg-accent"
            >
              <p className="text-sm font-medium">Upload Documents</p>
              <p className="text-xs text-muted-foreground">
                Add files to discovery
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
