"use client";

import { cn } from "@/lib/utils";
import { user } from "@/lib/data";
import {
  Sparkles, ChevronLeft, TrendingUp, Send, CalendarCheck, BookmarkCheck,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside className={cn(
      "hidden md:flex flex-col h-screen border-r bg-card transition-all duration-300 shrink-0",
      collapsed ? "w-[60px]" : "w-[240px]"
    )}>
      {/* Logo */}
      <div className="flex items-center justify-between h-14 px-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <Sparkles className="size-4 text-primary-foreground" />
          </div>
          {!collapsed && <span className="font-semibold text-base tracking-tight">CareerAI</span>}
        </div>
        <div className="flex items-center gap-0.5">
          {!collapsed && <ThemeToggle />}
          <Button variant="ghost" size="icon-xs" className="shrink-0" onClick={onToggle}>
            <ChevronLeft className={cn("size-4 transition-transform", collapsed && "rotate-180")} />
          </Button>
        </div>
      </div>

      <Separator />

      {/* User card */}
      {!collapsed && (
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="size-9">
              <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">{user.avatar}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.title}</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-muted-foreground">Profile</span>
              <span className="font-medium">{user.profileStrength}%</span>
            </div>
            <Progress value={user.profileStrength} className="h-1.5" />
          </div>
        </div>
      )}

      {collapsed && (
        <div className="flex justify-center p-3">
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">{user.avatar}</AvatarFallback>
          </Avatar>
        </div>
      )}

      <Separator />

      {/* Spacer */}
      <div className="flex-1" />

      <Separator />

      {!collapsed && (
        <div className="p-4 space-y-2.5">
          <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Quick Stats</p>
          {[
            { icon: TrendingUp, label: "Match rate", value: `${user.matchRate}%` },
            { icon: Send, label: "Applied", value: user.applicationsSent },
            { icon: CalendarCheck, label: "Interviews", value: user.interviews },
            { icon: BookmarkCheck, label: "Saved", value: user.savedJobs },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2.5 text-sm">
              <s.icon className="size-4 text-muted-foreground" />
              <span className="text-muted-foreground flex-1">{s.label}</span>
              <span className="font-medium tabular-nums">{s.value}</span>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
