"use client";

import { user } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, Target, Send, CalendarCheck, BookmarkCheck } from "lucide-react";

type Trend = "up" | "down" | "stable";

const stats: { title: string; value: string; description: string; trend: Trend; trendValue: string; icon: typeof Target }[] = [
  {
    title: "Match Rate",
    value: `${user.matchRate}%`,
    description: "vs. 68% last month",
    trend: "up",
    trendValue: "+5.2%",
    icon: Target,
  },
  {
    title: "Applications Sent",
    value: user.applicationsSent.toString(),
    description: "across 12 companies",
    trend: "up",
    trendValue: "+12",
    icon: Send,
  },
  {
    title: "Interviews",
    value: user.interviews.toString(),
    description: "2 this week",
    trend: "up",
    trendValue: "+2",
    icon: CalendarCheck,
  },
  {
    title: "Saved Jobs",
    value: user.savedJobs.toString(),
    description: "8 new since last week",
    trend: "stable",
    trendValue: "0%",
    icon: BookmarkCheck,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const TrendIcon = stat.trend === "up" ? TrendingUp : stat.trend === "down" ? TrendingDown : Minus;
        return (
          <Card key={stat.title} size="sm">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <CardAction>
                <stat.icon className="size-4 text-muted-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold tracking-tight">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Badge variant="secondary" className="h-4 px-1 text-[10px] gap-0.5">
                  <TrendIcon className={`size-3 ${stat.trend === "up" ? "text-success" : "text-muted-foreground"}`} />
                  {stat.trendValue}
                </Badge>
                <span>{stat.description}</span>
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
