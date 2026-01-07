import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { NotLegalAdviceBanner } from "@/components/ui/not-legal-advice-banner";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Justice AI" />
        <main className="flex-1 overflow-auto bg-muted/30 p-6">
          <NotLegalAdviceBanner />
          {children}
        </main>
      </div>
    </div>
  );
}
