"use client";

import { dailyGoals, streakData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Flame, CheckCircle2, Circle } from "lucide-react";

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

export function StreakGoals({ className }: { className?: string }) {
  const completed = dailyGoals.filter((g) => g.completed).length;

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="size-4 text-chart-1" />
          Daily Goals
        </CardTitle>
        <CardDescription>{completed}/{dailyGoals.length} completed today</CardDescription>
        <CardAction>
          <Badge variant="secondary" className="text-xs gap-1 font-semibold">
            <Flame className="size-3 text-chart-1" />
            {streakData.currentStreak} day streak
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Weekly streak visualization */}
          <div className="flex items-center justify-center gap-1.5">
            {streakData.thisWeek.map((active, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className={cn(
                  "size-8 rounded-lg flex items-center justify-center text-xs font-medium transition-colors",
                  active ? "bg-chart-1/15 text-chart-1 ring-1 ring-chart-1/30" : "bg-muted text-muted-foreground"
                )}>
                  {active ? <Flame className="size-3.5" /> : dayLabels[i]}
                </div>
                <span className="text-[10px] text-muted-foreground">{dayLabels[i]}</span>
              </div>
            ))}
          </div>

          {/* Goals list */}
          <div className="flex flex-col gap-2">
            {dailyGoals.map((goal) => (
              <div key={goal.id} className="flex items-center gap-2.5 text-sm">
                {goal.completed ? (
                  <CheckCircle2 className="size-4 text-success shrink-0" />
                ) : (
                  <Circle className="size-4 text-muted-foreground/40 shrink-0" />
                )}
                <span className={cn(
                  "flex-1",
                  goal.completed ? "text-muted-foreground line-through" : "text-foreground"
                )}>{goal.label}</span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-chart-1 transition-all"
              style={{ width: `${(completed / dailyGoals.length) * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
