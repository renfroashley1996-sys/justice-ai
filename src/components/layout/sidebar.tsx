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
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Legal Research",
    href: "/research",
    icon: Search,
    description: "Search case law and statutes",
  },
  {
    name: "Case Timeline",
    href: "/timeline",
    icon: Clock,
    description: "Track case events and deadlines",
  },
  {
    name: "Discovery",
    href: "/discovery",
    icon: FolderOpen,
    description: "Manage discovery documents",
  },
  {
    name: "Drafting",
    href: "/drafting",
    icon: FileEdit,
    description: "Draft legal documents",
  },
  {
    name: "Strategy",
    href: "/strategy",
    icon: Lightbulb,
    description: "Case strategy and analysis",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Scale className="h-6 w-6 text-primary" />
        <span className="text-xl font-semibold">Justice AI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
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
