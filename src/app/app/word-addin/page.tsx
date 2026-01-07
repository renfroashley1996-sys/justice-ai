"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileSpreadsheet,
  Clock,
  CheckCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

const features = [
  "Draft contracts directly within Microsoft Word",
  "AI-powered clause suggestions in real-time",
  "Access your templates without leaving Word",
  "One-click redline generation",
  "Seamless integration with Justice AI platform",
];

export default function WordAddinPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call to save email to WaitlistSignup table
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real implementation, this would call an API endpoint:
    // await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email, source: 'word-addin' }) })

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Word Add-in</h2>
        <p className="text-muted-foreground">
          Draft contracts via AI directly within Microsoft Word.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5" />
            Microsoft Word Integration
            <span className="ml-2 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              <Clock className="mr-1 h-3 w-3" />
              Coming Soon
            </span>
          </CardTitle>
          <CardDescription>
            Use the Word add-in to draft contracts via AI instantly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-12">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Coming Soon</h3>
            <p className="mt-2 max-w-md text-center text-muted-foreground">
              We&apos;re building a powerful Word add-in that will let you
              harness Justice AI&apos;s capabilities directly within Microsoft
              Word.
            </p>

            {/* Features List */}
            <div className="mt-8 w-full max-w-md">
              <h4 className="mb-4 text-sm font-semibold">
                What to expect:
              </h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Email Signup Form */}
            <div className="mt-8 w-full max-w-md">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold">Get Notified When It Launches</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Be the first to know when the Word add-in is available.
                </p>

                {isSubmitted ? (
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/30 dark:text-green-200">
                    <CheckCircle className="h-5 w-5" />
                    <span>
                      Thank you! We&apos;ll notify you when the Word add-in
                      launches.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {error && (
                        <p className="mt-1 text-xs text-red-600">{error}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing up...
                        </>
                      ) : (
                        "Notify Me"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
