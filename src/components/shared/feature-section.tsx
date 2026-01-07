import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureItem {
  text: string;
  comingSoon?: boolean;
}

interface FeatureSectionProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  features: FeatureItem[];
  variant?: "default" | "alt";
}

export function FeatureSection({
  title,
  description,
  icon: Icon,
  features,
  variant = "default",
}: FeatureSectionProps) {
  return (
    <div
      className={`rounded-xl border p-8 ${
        variant === "alt"
          ? "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
          : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          {description && (
            <p className="mt-1 text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            <span className="text-slate-700 dark:text-slate-300">
              {feature.text}
              {feature.comingSoon && (
                <Badge variant="warning" className="ml-2">
                  Coming Soon
                </Badge>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
