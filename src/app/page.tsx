"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { ContextPanel } from "@/components/layout/context-panel";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, Briefcase, Send, MessageSquare, Gift } from "lucide-react";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main className="flex-1 h-screen overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <WelcomeHero />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
            <TabsList variant="line">
              <TabsTrigger value="overview">
                <LayoutDashboard className="size-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="jobs">
                <Briefcase className="size-4" />
                Jobs
              </TabsTrigger>
              <TabsTrigger value="applications">
                <Send className="size-4" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="offers">
                <Gift className="size-4" />
                Offers
                <Badge variant="default" className="ml-1 h-4 px-1.5 text-[10px]">1</Badge>
              </TabsTrigger>
              <TabsTrigger value="chat">
                <MessageSquare className="size-4" />
                AI Chat
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="flex flex-col gap-6">
                <StatsCards />
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                  <ActivityChart className="lg:col-span-4" />
                  <StreakGoals className="lg:col-span-3" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                  <SkillsRadar className="lg:col-span-4" />
                  <SalaryInsights className="lg:col-span-3" />
                </div>
                <Pipeline />
                <TopMatches />
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="mt-6">
              <JobList />
            </TabsContent>

            <TabsContent value="applications" className="mt-6">
              <AppTimeline />
            </TabsContent>

            <TabsContent value="offers" className="mt-6">
              <OfferComparison />
            </TabsContent>

            <TabsContent value="chat" className="mt-6">
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
