"use client";

import { useState } from "react";
import { Clock, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  featureSource: string;
  expectedFeatures?: string[];
}

export function ComingSoonPage({
  title,
  description,
  featureSource,
  expectedFeatures,
}: ComingSoonPageProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source: featureSource }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Failed to submit email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Card className="w-full max-w-lg text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {expectedFeatures && expectedFeatures.length > 0 && (
            <div className="rounded-lg border bg-muted/30 p-4 text-left">
              <p className="mb-3 font-medium text-sm text-muted-foreground">
                Expected Features:
              </p>
              <ul className="space-y-2">
                {expectedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isSubmitted ? (
            <div className="flex flex-col items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              <p className="font-medium text-green-800 dark:text-green-200">
                You&apos;re on the list!
              </p>
              <p className="text-sm text-green-700 dark:text-green-300">
                We&apos;ll notify you when this feature launches.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Get notified when this feature is available:
              </p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "..." : "Notify Me"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
