import { Clock, LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ComingSoonPageProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
}

export function ComingSoonPage({
  title,
  description,
  icon: Icon = Clock,
  children,
}: ComingSoonPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </CardTitle>
          <CardDescription>This feature is coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Coming Soon</h3>
            <p className="mt-2 max-w-md text-center text-sm text-muted-foreground">
              We&apos;re working hard to bring you this feature. Sign up to be
              notified when it&apos;s available.
            </p>
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
