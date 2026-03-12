"use client";

import { skillsRadar } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend,
} from "recharts";

export function SkillsRadar({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Skills Analysis</CardTitle>
        <CardDescription>Your skills vs. market demand across top roles</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={skillsRadar} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="var(--color-border)" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="You"
              dataKey="you"
              stroke="var(--color-chart-1)"
              fill="var(--color-chart-1)"
              fillOpacity={0.15}
              strokeWidth={2}
            />
            <Radar
              name="Market Demand"
              dataKey="market"
              stroke="var(--color-chart-2)"
              fill="var(--color-chart-2)"
              fillOpacity={0.1}
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <Legend
              wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
