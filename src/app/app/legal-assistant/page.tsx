import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";

export default function LegalAssistantPage() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Legal Assistant</h2>
        <p className="text-muted-foreground">
          Get immediate answers to legal questions and analysis of complex fact
          patterns.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            AI Legal Assistant
          </CardTitle>
          <CardDescription>
            Ask questions, analyze fact patterns, and get intelligent legal
            insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-[400px] flex-col rounded-lg border">
            {/* Chat messages area */}
            <div className="flex-1 overflow-auto p-4">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold">
                  Start a Conversation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                  Ask questions about legal matters, request analysis of fact
                  patterns, or get help drafting memos and briefs.
                </p>
              </div>
            </div>

            {/* Input area */}
            <div className="border-t p-4">
              <form className="flex gap-2">
                <Input
                  placeholder="Ask a legal question..."
                  className="flex-1"
                />
                <Button type="submit">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
