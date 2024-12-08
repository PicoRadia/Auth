'use client';

import { cn } from "@/lib/utils";
import { BarChart3, LineChart, PieChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Process Duration",
    href: "/dashboard",
    icon: LineChart,
  },
  {
    title: "Revenue Analysis",
    href: "/dashboard/revenue",
    icon: BarChart3,
  },
  {
    title: "Conversion Stats",
    href: "/dashboard/conversion",
    icon: PieChart,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 border-r bg-card">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <div className="flex flex-col space-y-1 p-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-x-2 px-3 py-2 text-sm rounded-md transition-colors",
              pathname === item.href 
                ? "bg-accent text-accent-foreground" 
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
} 