import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  text: string;
  comingSoon?: boolean;
}

interface FeatureSectionProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  features: FeatureItem[];
  className?: string;
}

export function FeatureSection({
  title,
  description,
  icon: Icon,
  features,
  className,
}: FeatureSectionProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            <span className="text-muted-foreground">
              {feature.text}
              {feature.comingSoon && (
                <span className="ml-2 inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  Coming Soon
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
