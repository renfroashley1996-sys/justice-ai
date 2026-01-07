"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Scale,
  Search,
  Clock,
  FolderOpen,
  FileEdit,
  Lightbulb,
  MessageSquare,
  FileCheck,
  FileDiff,
  FileSpreadsheet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Legal Assistant",
    href: "/app/legal-assistant",
    icon: MessageSquare,
  },
  {
    name: "Legal Research",
    href: "/app/legal-research",
    icon: Search,
  },
  {
    name: "Case Timeline",
    href: "/app/timeline",
    icon: Clock,
  },
  {
    name: "Discovery",
    href: "/app/discovery",
    icon: FolderOpen,
  },
  {
    name: "Drafting",
    href: "/app/drafting",
    icon: FileEdit,
  },
  {
    name: "Strategy",
    href: "/app/strategy",
    icon: Lightbulb,
  },
];

const contractNavigation = [
  {
    name: "Contract Redlining",
    href: "/app/contract-redlining",
    icon: FileCheck,
  },
  {
    name: "Compare Contracts",
    href: "/app/compare-contracts",
    icon: FileDiff,
  },
  {
    name: "Word Add-in",
    href: "/app/word-addin",
    icon: FileSpreadsheet,
    comingSoon: true,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Justice AI</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Contract Tools Section */}
        <div className="mt-6">
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Contract Tools
          </p>
          <div className="space-y-1">
            {contractNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="flex-1">{item.name}</span>
                  {item.comingSoon && (
                    <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                      Soon
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <p className="text-xs text-muted-foreground">
          Legal Case Analysis Platform
        </p>
      </div>
    </aside>
  );
}
