"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Clock, CheckCircle2, Circle, Sparkles } from "lucide-react";

interface InterviewCountdownProps {
  company: string;
  role: string;
  date: string;
  time: string;
}

const prepItems = [
  { id: 1, label: "Research company values", done: true },
  { id: 2, label: "Review job description", done: true },
  { id: 3, label: "Prepare STAR stories", done: false },
  { id: 4, label: "Practice system design", done: false },
];

export function InterviewCountdown({ company, role, date, time }: InterviewCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const target = new Date(`${date} ${time}`);
    const update = () => {
      const now = new Date();
      const diff = Math.max(0, target.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
      });
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [date, time]);

  const prepDone = prepItems.filter((p) => p.done).length;

  return (
    <div className="rounded-lg border bg-primary/[0.03] p-3 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Video className="size-4 text-primary" />
          <span className="text-sm font-medium">Next Interview</span>
        </div>
        <Badge variant="secondary" className="text-[10px]">
          <Clock className="size-3 mr-0.5" />
          {timeLeft.days}d {timeLeft.hours}h
        </Badge>
      </div>

      <div>
        <p className="text-sm font-medium">{company}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>

      {/* Countdown blocks */}
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Mins", value: timeLeft.mins },
        ].map((t) => (
          <div key={t.label} className="rounded-md bg-card border p-2 text-center">
            <p className="text-lg font-semibold tabular-nums">{t.value}</p>
            <p className="text-[10px] text-muted-foreground">{t.label}</p>
          </div>
        ))}
      </div>

      {/* Prep checklist */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-1.5">Prep: {prepDone}/{prepItems.length}</p>
        <div className="flex flex-col gap-1">
          {prepItems.map((item) => (
            <div key={item.id} className="flex items-center gap-1.5 text-xs">
              {item.done ? (
                <CheckCircle2 className="size-3 text-success" />
              ) : (
                <Circle className="size-3 text-muted-foreground/40" />
              )}
              <span className={item.done ? "text-muted-foreground line-through" : ""}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Button size="sm" variant="outline" className="w-full text-xs gap-1">
        <Sparkles className="size-3" /> AI Interview Prep
      </Button>
    </div>
  );
}
