"use client";

import { upcomingEvents, skillDemand } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { InterviewCountdown } from "@/components/dashboard/interview-countdown";
import { Upload, Bell, Sliders, TrendingUp, Minus, Lightbulb, Clock, FileText, ArrowUpRight } from "lucide-react";

export function ContextPanel() {
  return (
    <ScrollArea className="w-[280px] h-screen border-l bg-card hidden xl:block">
      <div className="p-5 flex flex-col gap-5">
        {/* Interview Countdown */}
        <InterviewCountdown
          company="Stripe"
          role="AI Platform Engineer — System Design"
          date="2026-03-13"
          time="14:00:00"
        />

        <Separator />

        {/* Quick Actions */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Quick Actions</p>
          <div className="flex flex-col gap-0.5">
            {[
              { icon: Sliders, label: "Update preferences" },
              { icon: Upload, label: "Upload new CV" },
              { icon: Bell, label: "Set job alerts" },
              { icon: FileText, label: "Generate cover letter" },
            ].map((a) => (
              <Button key={a.label} variant="ghost" className="w-full justify-start h-8 px-2 text-sm font-normal text-muted-foreground hover:text-foreground">
                <a.icon className="size-4 mr-2" />{a.label}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Upcoming */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Upcoming</p>
          <div className="flex flex-col gap-3">
            {upcomingEvents.map((ev) => (
              <div key={ev.id} className="flex items-start gap-2.5">
                <div className={`size-1.5 mt-2 rounded-full shrink-0 ${ev.type === "interview" ? "bg-primary" : "bg-chart-3"}`} />
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-tight truncate">{ev.title}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Clock className="size-3" />{ev.date} &middot; {ev.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Skill Demand */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Skill Demand</p>
          <div className="flex flex-col gap-3">
            {skillDemand.map((item) => (
              <div key={item.skill} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium flex items-center gap-1">
                    {item.skill}
                    {item.trend === "up" ? <ArrowUpRight className="size-3 text-success" /> : <Minus className="size-3 text-muted-foreground" />}
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">{item.demand}%</span>
                </div>
                <Progress value={item.demand} className="h-1.5" />
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* AI Suggestions */}
        <div>
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Lightbulb className="size-3.5" /> AI Suggestions
          </p>
          <div className="flex flex-col gap-3">
            {[
              <>Add <Badge variant="secondary" className="mx-0.5 text-[10px] h-4">CUDA</Badge> to your skills — 40% of top matches mention it.</>,
              "3 companies viewed your profile this week. Consider enabling visibility.",
              "Your OpenAI offer expires in 7 days. Want help evaluating it?",
            ].map((s, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">{s}</p>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
