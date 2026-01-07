import { DashboardLayout } from "@/components/layout";
import { NotLegalAdviceBanner } from "@/components/shared";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <NotLegalAdviceBanner />
        {children}
      </div>
    </DashboardLayout>
  );
}
