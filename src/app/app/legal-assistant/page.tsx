import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send } from "lucide-react";

export default function LegalAssistantPage() {
  return (
    <div className="space-y-6">
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
            Ask questions about case law, statutes, or legal concepts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Chat Messages Area */}
            <div className="h-[400px] rounded-lg border bg-muted/30 p-4">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                  Start a Conversation
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Ask any legal question. The AI assistant can help with
                  research, analysis, and drafting.
                </p>
              </div>
            </div>

            {/* Input Area */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask a legal question..."
                className="flex-1 rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              AI responses are for informational purposes. Always verify with
              primary sources.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
