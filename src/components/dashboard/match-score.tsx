"use client";

import { user } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export function MatchScore() {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (user.matchRate / 100) * circumference;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">Market Match</CardTitle>
        <CardDescription className="text-xs">How well your profile fits the current market</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-5">
        <div className="relative size-20 shrink-0">
          <svg className="size-20 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" className="stroke-muted" strokeWidth="8" />
            <circle cx="50" cy="50" r="45" fill="none" className="stroke-primary" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={offset}
              style={{ animation: "score-fill 1.5s ease-out", transition: "stroke-dashoffset 1s ease-out" }} />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold tabular-nums">{user.matchRate}%</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm text-muted-foreground">Matches <span className="text-foreground font-medium">{user.matchRate}%</span> of target roles</p>
          <Badge variant="secondary" className="text-[10px] gap-1 w-fit"><TrendingUp className="size-3 text-success" /> Up 5% from last week</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
