"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

export function SalaryInsights({ className }: { className?: string }) {
  const marketMin = 175;
  const marketMax = 320;
  const targetMin = 180;
  const targetMax = 250;
  const range = marketMax - marketMin;

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Salary Insights</CardTitle>
        <CardDescription>Your target vs. the market range</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
            <span>${marketMin}k</span>
            <span>${marketMax}k</span>
          </div>
          <div className="relative h-3 rounded-full bg-muted overflow-hidden">
            <div
              className="absolute top-0 bottom-0 bg-primary/20 rounded-full border-2 border-primary/40"
              style={{
                left: `${((targetMin - marketMin) / range) * 100}%`,
                right: `${((marketMax - targetMax) / range) * 100}%`,
              }}
            />
            <div className="absolute top-0 bottom-0 w-0.5 bg-foreground/30" style={{ left: `${((220 - marketMin) / range) * 100}%` }} />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Target: <span className="text-foreground font-medium">$180k–$250k</span>
          </span>
          <Badge variant="secondary" className="text-xs gap-1">
            <TrendingUp className="size-3 text-success" /> Median $220k
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          Your target aligns well with the market. Top 20% of roles offer above $275k.
        </p>
      </CardContent>
    </Card>
  );
}
