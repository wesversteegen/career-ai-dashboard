"use client";

import { applications } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, Search, Video, Gift, XCircle } from "lucide-react";

const stages = [
  { id: "applied", label: "Applied", icon: Send },
  { id: "screening", label: "Screening", icon: Search },
  { id: "interview", label: "Interview", icon: Video },
  { id: "offer", label: "Offer", icon: Gift },
  { id: "rejected", label: "Rejected", icon: XCircle },
] as const;

export function Pipeline() {
  const counts = stages.map((stage) => ({
    ...stage,
    count: applications.filter((a) => a.status === stage.id).length,
    apps: applications.filter((a) => a.status === stage.id),
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Pipeline</CardTitle>
        <CardDescription>Track your applications across stages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {counts.map((stage) => {
            const Icon = stage.icon;
            return (
              <div key={stage.id} className="rounded-lg border bg-muted/30 p-4 text-center">
                <Icon className="size-4 text-muted-foreground mx-auto mb-2" />
                <p className="text-2xl font-semibold tabular-nums">{stage.count}</p>
                <p className="text-xs text-muted-foreground mt-1">{stage.label}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
