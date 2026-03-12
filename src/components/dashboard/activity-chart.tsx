"use client";

import { weeklyActivity } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

export function ActivityChart({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Applications, profile views, and responses</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={weeklyActivity} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="fillApps" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-chart-2)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-chart-2)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              fontSize={12}
              tickMargin={8}
              stroke="var(--color-muted-foreground)"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={12}
              tickMargin={4}
              stroke="var(--color-muted-foreground)"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="applications"
              stroke="var(--color-chart-1)"
              fill="url(#fillApps)"
              strokeWidth={2}
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="views"
              stroke="var(--color-chart-2)"
              fill="url(#fillViews)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
