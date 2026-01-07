"use client";

import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

export function NotLegalAdviceBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-medium">Important Disclaimer</p>
          <p className="mt-1 text-amber-700 dark:text-amber-300">
            Justice AI provides legal information and research assistance, not legal advice.
            Always consult with a licensed attorney for legal matters. AI-generated content
            should be reviewed and verified by qualified legal professionals.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 rounded-md p-1 hover:bg-amber-100 dark:hover:bg-amber-900"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
