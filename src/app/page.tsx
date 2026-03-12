"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { ContextPanel, ContextPanelContent } from "@/components/layout/context-panel";
import { WelcomeHero } from "@/components/dashboard/welcome-hero";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { TopMatches } from "@/components/dashboard/top-matches";
import { Pipeline } from "@/components/dashboard/pipeline";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { SalaryInsights } from "@/components/dashboard/salary-insights";
import { SkillsRadar } from "@/components/dashboard/skills-radar";
import { OfferComparison } from "@/components/dashboard/offer-comparison";
import { StreakGoals } from "@/components/dashboard/streak-goals";
import { JobList } from "@/components/jobs/job-list";
import { ChatInterface } from "@/components/chat/chat-interface";
import { ChatFab } from "@/components/chat/chat-fab";
import { AppTimeline } from "@/components/applications/app-timeline";
import { ThemeToggle } from "@/components/theme-toggle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { user } from "@/lib/data";
import {
  LayoutDashboard, Briefcase, Send, MessageSquare, Gift,
  Menu, PanelRight, Sparkles, TrendingUp, CalendarCheck, BookmarkCheck,
} from "lucide-react";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Mobile sidebar sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[280px] p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center gap-2 h-14 px-4">
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Sparkles className="size-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-base tracking-tight">CareerAI</span>
            </div>
            <Separator />
            {/* User card */}
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
            <Separator />
            {/* Spacer */}
            <div className="flex-1" />
            <Separator />
            {/* Quick stats */}
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
          </div>
        </SheetContent>
      </Sheet>

      {/* Mobile context panel sheet */}
      <Sheet open={mobilePanelOpen} onOpenChange={setMobilePanelOpen}>
        <SheetContent side="right" className="w-[320px] p-0 overflow-y-auto">
          <SheetHeader className="sr-only">
            <SheetTitle>Details</SheetTitle>
          </SheetHeader>
          <ContextPanelContent />
        </SheetContent>
      </Sheet>

      <main className="flex-1 h-screen overflow-y-auto">
        {/* Mobile top bar */}
        <div className="sticky top-0 z-40 flex md:hidden items-center justify-between h-14 px-4 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-xs" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="size-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="size-3.5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-sm tracking-tight">CareerAI</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon-xs" onClick={() => setMobilePanelOpen(true)}>
              <PanelRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-5 md:px-6 md:py-8">
          <WelcomeHero />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-5 md:mt-8">
            <TabsList variant="line">
              <TabsTrigger value="overview">
                <LayoutDashboard className="size-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="jobs">
                <Briefcase className="size-4" />
                <span className="hidden sm:inline">Jobs</span>
              </TabsTrigger>
              <TabsTrigger value="applications">
                <Send className="size-4" />
                <span className="hidden sm:inline">Applications</span>
              </TabsTrigger>
              <TabsTrigger value="offers">
                <Gift className="size-4" />
                <span className="hidden sm:inline">Offers</span>
                <Badge variant="default" className="ml-1 h-4 px-1.5 text-[10px]">1</Badge>
              </TabsTrigger>
              <TabsTrigger value="chat">
                <MessageSquare className="size-4" />
                <span className="hidden sm:inline">AI Chat</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4 md:mt-6">
              <div className="flex flex-col gap-4 md:gap-6">
                <StatsCards />
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 md:gap-6">
                  <ActivityChart className="lg:col-span-4" />
                  <StreakGoals className="lg:col-span-3" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 md:gap-6">
                  <SkillsRadar className="lg:col-span-4" />
                  <SalaryInsights className="lg:col-span-3" />
                </div>
                <Pipeline />
                <TopMatches />
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="mt-4 md:mt-6">
              <JobList />
            </TabsContent>

            <TabsContent value="applications" className="mt-4 md:mt-6">
              <AppTimeline />
            </TabsContent>

            <TabsContent value="offers" className="mt-4 md:mt-6">
              <OfferComparison />
            </TabsContent>

            <TabsContent value="chat" className="mt-4 md:mt-6">
              <ChatInterface />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <ContextPanel />
      <ChatFab onOpenChat={() => setActiveTab("chat")} isVisible={activeTab !== "chat"} />
    </div>
  );
}
