import { AlertTriangle } from "lucide-react";

export function NotLegalAdviceBanner() {
  return (
    <div className="mb-6 flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
      <AlertTriangle className="h-4 w-4 flex-shrink-0" />
      <p>
        <span className="font-medium">Disclaimer:</span> Justice AI provides
        legal information and analysis tools, not legal advice. Always consult
        with a licensed attorney for legal matters.
      </p>
    </div>
  );
}
