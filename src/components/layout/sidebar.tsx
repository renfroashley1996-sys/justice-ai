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
  FileSignature,
  GitCompare,
  FileSpreadsheet,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const navigation = [
  {
    name: "Dashboard",
    href: "/app",
    icon: Home,
    description: "Overview and quick actions",
  },
  {
    name: "Legal Assistant",
    href: "/app/legal-assistant",
    icon: MessageSquare,
    description: "AI-powered legal Q&A",
  },
  {
    name: "Legal Research",
    href: "/app/legal-research",
    icon: Search,
    description: "Search case law and statutes",
  },
  {
    name: "Timeline",
    href: "/app/timeline",
    icon: Clock,
    description: "Case events and milestones",
  },
  {
    name: "Discovery",
    href: "/app/discovery",
    icon: FolderOpen,
    description: "Document review",
  },
  {
    name: "Drafting",
    href: "/app/drafting",
    icon: FileEdit,
    description: "Draft legal documents",
  },
  {
    name: "Strategy",
    href: "/app/strategy",
    icon: Lightbulb,
    description: "Case strategy analysis",
  },
  {
    name: "Contract Redlining",
    href: "/app/contract-redlining",
    icon: FileSignature,
    description: "Redline contracts 10X faster",
    isNew: true,
  },
  {
    name: "Compare Contracts",
    href: "/app/compare-contracts",
    icon: GitCompare,
    description: "Side-by-side comparison",
    isNew: true,
  },
  {
    name: "Word Add-in",
    href: "/app/word-addin",
    icon: FileSpreadsheet,
    description: "Draft in Microsoft Word",
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
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/app" && pathname?.startsWith(item.href));
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
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="flex-1 truncate">{item.name}</span>
              {item.isNew && !isActive && (
                <Badge
                  variant="secondary"
                  className="ml-auto h-5 px-1.5 text-[10px]"
                >
                  NEW
                </Badge>
              )}
              {item.comingSoon && !isActive && (
                <Badge
                  variant="outline"
                  className="ml-auto h-5 px-1.5 text-[10px]"
                >
                  SOON
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <p className="text-xs text-muted-foreground">
          Legal Intelligence Platform
        </p>
      </div>
    </aside>
  );
}
