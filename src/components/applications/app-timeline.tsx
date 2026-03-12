"use client";

import { applications } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Send, Search, Video, Gift, XCircle, Clock, ArrowRight, CalendarDays, Sparkles } from "lucide-react";

const statusConfig = {
  applied: { icon: Send, label: "Applied" },
  screening: { icon: Search, label: "Screening" },
  interview: { icon: Video, label: "Interview" },
  offer: { icon: Gift, label: "Offer" },
  rejected: { icon: XCircle, label: "Rejected" },
};

export function AppTimeline() {
  const sorted = [...applications].sort((a, b) => {
    const order = { offer: 0, interview: 1, screening: 2, applied: 3, rejected: 4 };
    return order[a.status] - order[b.status];
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight">Applications</h2>
        <Badge variant="secondary" className="text-xs">{applications.length} total</Badge>
      </div>
      <div className="flex flex-col gap-2">
        {sorted.map((app) => {
          const config = statusConfig[app.status];
          const Icon = config.icon;
          return (
            <Card key={app.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="size-9 rounded-lg flex items-center justify-center shrink-0 bg-muted">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-sm">{app.role}</h3>
                      <Badge variant={app.status === "rejected" ? "destructive" : app.status === "offer" ? "default" : "secondary"} className="text-[10px] font-semibold">{config.label}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{app.company}</p>
                    <div className="flex items-center gap-4 mt-2.5 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="size-3" />Applied {app.appliedAt}</span>
                      <span className="flex items-center gap-1"><CalendarDays className="size-3" />Updated {app.lastUpdate}</span>
                    </div>
                    {app.nextStep && (
                      <div className="mt-2.5 p-2.5 rounded-lg bg-muted/50 border">
                        <div className="flex items-center gap-1.5">
                          <ArrowRight className="size-3 text-primary shrink-0" />
                          <p className="text-xs"><span className="text-primary font-medium">Next: </span><span className="text-muted-foreground">{app.nextStep}</span>{app.interviewDate && <span className="text-foreground ml-1">({app.interviewDate})</span>}</p>
                        </div>
                      </div>
                    )}
                    {app.status === "interview" && (
                      <Button variant="ghost" size="sm" className="h-7 px-2 mt-2 text-xs text-primary gap-1">
                        <Sparkles data-icon="inline-start" /> AI Interview Prep
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
