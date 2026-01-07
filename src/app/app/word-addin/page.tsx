import { ComingSoonPage } from "@/components/shared";

export default function WordAddinPage() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Microsoft Word Add-in
        </h2>
        <p className="text-muted-foreground">
          Draft contracts directly in Microsoft Word with AI assistance.
        </p>
      </div>

      <ComingSoonPage
        title="Word Add-in Coming Soon"
        description="Draft contracts via AI instantly, right within Microsoft Word. Our add-in will integrate seamlessly with your existing workflow."
        featureSource="word-addin"
        expectedFeatures={[
          "AI-powered contract drafting directly in Word",
          "Access to your templates and gold standards",
          "Real-time suggestions and clause recommendations",
          "Seamless integration with Justice AI platform",
          "One-click redlining and comparison tools",
        ]}
      />
    </>
  );
}
